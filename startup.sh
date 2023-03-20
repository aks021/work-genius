systemctl start mongod

cd app-webhook-orchestrator
. venv/bin/activate
nohup python3 main.py &

cd ..

cd app-mandrill-webhook
. venv/bin/activate
nohup python3 main.py &


cd ..

cd web-app-react
npm run start
