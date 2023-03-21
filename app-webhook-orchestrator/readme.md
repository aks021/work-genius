## App Mandril Webhook

### About
A websocket server that receives data from mandril via python webhook (app-mandrill-webhook) and broadcasts the same to the connected web app clients


### Prerequisite - Tech stack
- python 3.11.x


### Setup

Using `setup.sh`

- Open terminal
- Change directory to current folder - `/app-webhook-orchestrator/`
- Run 
```bash 
sh setup.sh
```

OR

- Open terminal
- Change directory to current folder - `/app-webhook-orchestrator/`
- Run the following commands

```bash
python3 -m venv venv

. venv/bin/activate

pip install -r requirements.txt --proxy=""

python3 main.py
```


### Unit Testing
- Change directory to `app-webhook-orchestrator/tests`
- Run the following command - `python3 -m unittest discover <relative path name>`
    - Example - `python3 -m unittest discover ./utility/structure`