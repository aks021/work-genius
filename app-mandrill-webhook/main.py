from fastapi import FastAPI, HTTPException
import uvicorn
from src.utility.log.log import Log
from src.router import base
from src.router.v1 import api
from src.models.models import ExceptionResponseModel
from fastapi.middleware.cors import CORSMiddleware
from src.utility.utils import load_yaml_config
import os
import socketio
import pymongo

log = Log(__name__)

app = FastAPI()

def run_app(app_config: dict) -> None:
    """
    Define the REST API routes, run the Uvicorn server.
    """
    fastapi_config = app_config["fastapi"]
    websocket_config = app_config["websocket"]
    mongodb_config = app_config["mongodb"]
    app: FastAPI = FastAPI()
    app.include_router(api.router)
    app.include_router(base.router)
    app.logger:Log = log.logger
    app.config = app_config
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=False,
        allow_methods=["GET", "POST"],
        allow_headers=["Content-Type"],
    )
    app.sio: socketio.Client = socketio.Client()
    app.sio.connect(f'http://{websocket_config["host"]}:{websocket_config["port"]}')

    mongo_client = pymongo.MongoClient(f'mongodb://{mongodb_config["host"]}:{mongodb_config["port"]}/')
    mongo_db = mongo_client[mongodb_config["db_name"]]
    mongo_col: pymongo.collection.Collection = mongo_db[mongodb_config["db_collection"]]

    app.mongo_collection = mongo_col

    @app.exception_handler(Exception)
    def handle_exception(
        exception: Exception, exception_response_model: ExceptionResponseModel
    ):
        exception_response_model.code = 500
        exception_response_model.error = (
            "An internal server error occurred. Please try again later."
        )
        if isinstance(exception, HTTPException):
            exception_response_model.code = exception.code
            exception_response_model.error = exception.description
        else:
            log.error("Error occurred while processing request")
        return exception_response_model
    uvicorn.run(app, host=fastapi_config["host"], port=fastapi_config["port"])
    log.info(
        "App started at {}:{}".format(fastapi_config["host"], fastapi_config["port"])
    )


if __name__ == "__main__":
    env = os.environ.get(
        "APP_ENV", "development"
    )
    config = load_yaml_config(f"config/{env}.yml")
    run_app(config)
