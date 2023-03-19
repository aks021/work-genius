from fastapi import APIRouter, Request, Response
import http
from src.utility.utils import ProcessData
from src.models.models import WebhookResponse

router = APIRouter()
pipeline = ProcessData()



@router.post("/webhook", status_code=http.HTTPStatus.ACCEPTED)
async def webhook(request: Request) -> WebhookResponse:
    body = await request.body()
    status, message = pipeline.initiate(body, request.app.logger, 
                      request.app.mongo_collection, 
                      request.app.sio)
    return {"status": status, "message": message}
