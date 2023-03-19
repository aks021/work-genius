import os
from pathlib import Path
from yaml import load, Loader
from typing import Dict
from urllib.parse import unquote
from src.utility.structure.singleton import SingletonDecorator
import json
import pymongo
import socketio
from typing import Any
from src.utility.log.log import Log

def getenv():
    """
    About: Returns the app environment
    Args:: None
    Returns: app env - development or uat or prod
    """
    env = os.environ.get(
        "APP_ENV", "development"
    )  # env defaults to development for dev purpose, in docker APP_ENV is set
    return env

def load_yaml_config(config_file_rel_path: str) -> Dict:
    """
    About: Load the YAML config file at the given relative path (to this file's directory).
    Args::
        config_file_rel_path: string - Relative file path name
    Returns: config object in dictionary
    """
    base_dir = Path(__file__).parent.parent.parent
    config = None

    with Path.open(base_dir / config_file_rel_path, "r") as yaml_file:
        config = load(yaml_file, Loader=Loader)
        yaml_file.close()
    return config


@SingletonDecorator
class ProcessData:
    def storeData(self, mandril_data, mongo_collection: pymongo.collection.Collection, logger: Log) -> bool:
        """
        About: Creates an entry in mondodb collection if the entry doesnt exist else updates it
        Args::
            mandril_data: Dict - Entry to store or update
            mongo_collection: pymongo collection class object
            logger: object of logger class
        Returns: true if successful else false
        """
        try:
            logger.info(f'Initiating data storage - {mandril_data["_id"]}')
            mongo_collection.update_one(
                {"_id": mandril_data["_id"]}, 
                {"$set": mandril_data}, 
                upsert=True)
            logger.info("Data data storage completed")
            return True
        except:
            logger.info("Data data storage failed")
            return False

    def notifyWsServer(self, mandril_data, sio: socketio.Client, logger: Log) -> bool:
        """
        About: Sends data to websocket (socket-io) server
        Args::
            mandril_data: Dict - Data to transmit
            sio: socket io class object
            logger: object of logger class
        Returns: true if successful else false
        """
        try:
            message = f"User opened mail with id  {mandril_data.get('msg', {}).get('_id', '')}"
            logger.info(f"Initiating data transmission over websocket - {message}")
            sio.send(message)
            logger.info("Data transmission over websocket completed")
            return True
        except:
            logger.info("Data transmission over websocket failed")
            return False

    def extractData(self, mandril_raw_data: bytes, logger: Log) -> Any:
        """
        About: Extracts data (dictionary) to process from raw bytes data received
        Args::
            mandril_raw_data: byte - Mandril data received over webhook
            logger: object of logger class
        Returns: true, <list of obj<dict>> if successful else false, <empty list>
        """
        try:
            logger.info("Initiating data extraction")
            mandril_raw_data = mandril_raw_data.decode()
            mandril_raw_data = mandril_raw_data.split("=")[1]
            mandril_data_list = unquote(mandril_raw_data)
            mandril_data_list = json.loads(mandril_data_list)
            logger.info("Data extraction completed")
            return True, mandril_data_list
        except:
            logger.info("Data extraction failed")
            return False, []
    
    def initiate(self, mandril_raw_data: bytes, logger: Log, 
                 mongo_collection: pymongo.collection.Collection, 
                 sio: socketio.Client):
        """
        About: Entry point of a data pipeline - processes data (extract, store in db, transmit to websocket server)
        Args::
            mandril_data: Dict - Entry to store or update
            logger: object of logger class
            mongo_collection: pymongo collection class object
            sio: socket io class object
        Returns: true if successful else false along with relevant message
        """
        extract_data_status, mandril_data_list = self.extractData(mandril_raw_data, logger)
        if not extract_data_status:
            return False, "Data extraction failed"
        for mandril_data in mandril_data_list:
            mongo_db_storage_status = self.storeData(
                mandril_data, 
                mongo_collection,
                logger)
            if not mongo_db_storage_status:
                return False, "Data storage failed"
            ws_transfer_status = self.notifyWsServer(
                mandril_data, 
                sio,
                logger)
            if not ws_transfer_status:
                return False, "Data transmission failed"
        return True, "Data processing completed"