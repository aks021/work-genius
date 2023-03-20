# App Mandril Webhook

## About
A webhook interface that can process "open" event coming in from Mandril. The data is stored in a mongodb collection and is also forwarded to a websocket server.


## Prerequisite - Tech stack
- python 3.11.x
- MongoDB v6.0.5


## Setup

### Start MongoDB server
- MacOS - `brew services start mongodb-community@6.0`
- Windows - `"C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe" --dbpath="c:\data\db"`
- Linux (Ubuntu) - `sudo systemctl start mongod`

### Configure and start Webhook server
- Go through the set-up steps mentioned in `app-webhook-orchestrator/readme.md`

### Install python dependencies and start
Using setup.sh

- Open terminal
- Change directory to current folder - `/app-mandril-webhook/`
- Run `setup.sh`

OR

- Open terminal
- Change directory to current folder - `/app-mandril-webhook/`
- Run the following commands

```bash
python3 -m venv venv

. venv/bin/activate

pip install -r requirements.txt --proxy=""

python3 main.py
```

## Verify setup

GET request to `https://localhost:8080` should return 
```bash 
{"message":"Python webhook is live"}
```

## Webhook link [POST request]
```bash 
https://localhost:8080/webhook

```

## Steps to setup Test/Development environment

We need a public IP address for https://localhost:8080
- Install [ngrok](https://ngrok.com) and run

```bash
ngrok http 8080
```
- Check the `forwarding url` in terminal.
- Expose https://`forwarding url`/webhook as webhook to mandril
- Example  - https://7183-45-112-68-234.in.ngrok.io/webhook


## Unit Testing

- Run the following command - `python3 -m unittest discover <relative path name>`

Example - 
```bash 
python3 -m unittest discover ./utility/structure
```


