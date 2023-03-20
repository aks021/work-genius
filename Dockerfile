FROM node:18-alpine

RUN apk add --no-cache python3 py3-pip

ENV NODE_ENV development

RUN addgroup --system --gid 1001 xgroup
RUN adduser --system --uid 1001 xuser

WORKDIR /app

COPY . .

RUN chown --recursive "xuser:xgroup" .


WORKDIR /app/app-webhook-orchestrator

RUN python3 -m venv venv \
    && . venv/bin/activate \
    && python3 -m pip install --upgrade pip --proxy=""\
    && pip install -r requirements.txt --proxy=""\ 	
    && nohup python3 main.py &

WORKDIR /app/app-mandrill-webhook

RUN python3 -m venv venv \
    && . venv/bin/activate \
    && python3 -m pip install --upgrade pip --proxy=""\
    && pip install -r requirements.txt --proxy=""\ 	
    && nohup python3 main.py &
EXPOSE 8080



WORKDIR /app/web-app-react
RUN npm i
RUN npm run build
EXPOSE 3000

CMD ["npm", "run", "start"]