from pydantic import BaseModel

class ExceptionResponseModel(BaseModel):
    code: int
    error: str

class WebhookResponse(BaseModel):
    status: bool
    message: str