from aiohttp import web
import socketio
from utility.log.log import Log
from utility.utils import load_yaml_config
import os

sio = socketio.AsyncServer(cors_allowed_origins = "*")
app = web.Application()
sio.attach(app)

log = Log(__name__)


@sio.event
def connect(sid, environ):
    log.info(f"connect -- {sid}")

@sio.event
async def message(sid, data):
    log.info(f"{sid} transmitted -- {data}")
    await sio.emit("broadcast", data)

@sio.event
def disconnect(sid):
    log.info(f"disconnect -- {sid}")


if __name__ == '__main__':
    env = os.environ.get(
        "APP_ENV", "development"
    )
    config = load_yaml_config(f"config/{env}.yml")
    web.run_app(app, host=config["websocket"]["host"], port=config["websocket"]["port"])