import unittest.mock
import os, sys, json
from urllib.parse import quote

sys.path.append(os.path.realpath(os.path.dirname(__file__) + "./../../"))

from src.utility.utils import *

class TestGenericUtils(unittest.TestCase):
    def test_getenv(self):
        env = getenv()
        assert env == "dev"

        os.environ["APP_ENV"] = "prod"
        env = getenv()
        assert env == "prod"
    
    def test_load_yaml_config(self):
        config = load_yaml_config('config/dev.yml')
        assert "fastapi" in config.keys()


class TestProcessData(unittest.TestCase):
    def setUp(self):
        self.pipeline = ProcessData()
        
        self.mandril_data = {"key": "val", "_id": 1}

        with unittest.mock.patch('src.utility.log.log.Log') as log_mock:
            instance = log_mock.return_value
            instance.method.info = 'mock return'
            self.logger = log_mock

        with unittest.mock.patch('pymongo.collection.Collection') as mongo_mock:
            instance = mongo_mock.return_value
            instance.method.update_one = 'mock return'
            self.mongo_collection = mongo_mock
        

        with unittest.mock.patch('socketio.Client') as scio_mock:
            instance = scio_mock.return_value
            instance.method.send = 'mock return'
            self.sio = scio_mock

    
    def test_storeData(self):
        status = self.pipeline.storeData(self.mandril_data, self.mongo_collection, self.logger)
        assert status == True

    
    def test_notifyWsServer(self):
        status = self.pipeline.notifyWsServer(self.mandril_data, self.sio, self.logger)
        assert status == True

    def test_extractData(self):
        mandril_raw_data = str.encode("test = " + quote(json.dumps([
            {"key": "val", "_id": 1}, 
            {"key": "val", "_id": 2}])))
        status, data = self.pipeline.extractData(mandril_raw_data, self.logger)
        assert data == [
            {"key": "val", "_id": 1}, 
            {"key": "val", "_id": 2}]
        assert status == True

        mandril_raw_data_incorrect = str.encode(quote(json.dumps([
            {"key": "val", "_id": 1}, 
            {"key": "val", "_id": 2}])))
        status, data = self.pipeline.extractData(mandril_raw_data_incorrect, self.logger)
        assert data == []
        assert status == False
        

    def test_initiate(self):
        mandril_raw_data = str.encode("test = " + quote(json.dumps([
            {"key": "val", "_id": 1}, 
            {"key": "val", "_id": 2}])))
        status, msg = self.pipeline.initiate(
            mandril_raw_data, self.logger, self.mongo_collection, self.sio
        )
        assert status == True
        assert msg == "Data processing completed"

        mandril_raw_data_incorrect = str.encode(quote(json.dumps([
            {"key": "val", "_id": 1}, 
            {"key": "val", "_id": 2}])))
        status, msg = self.pipeline.initiate(
            mandril_raw_data_incorrect, self.logger, self.mongo_collection, self.sio
        )
        assert status == False