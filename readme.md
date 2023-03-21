# Mandril data pipeline

## Components

### app-mandril-webhook
A webhook interface that can process "open" event coming in from Mandril. The data is stored in a mongodb collection and is also forwarded to a websocket server `app-webhook-orchestrator`.

### app-webhook-orchestrator
A websocket server that receives data from mandril via python webhook (app-mandrill-webhook) and broadcasts the same to the connected web app clients `web-app-react`

### web-app-react
A react application that shows "notifications" of the "open" events.


## How to set it up?

- Set up and start `app-webhook-orchestrator` - Check readme.md of [app-webhook-orchestrator](app-webhook-orchestrator/readme.md)
- Set up and start `app-mandril-webhook` - Check readme.md of [app-mandril-webhook](app-mandrill-webhook/readme.md)
- Get public IP address of localhost:8080. For test purpose use [ngrok](https://ngrok.com). Follow the steps [here](app-mandrill-webhook/readme.md#steps-to-setup-testdevelopment-environment).
- Set up and start `web-app-react` - Check readme.md of [web-app-react](web-app-react/README.md)