FROM alpine:edge
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories
RUN apk update
RUN apk add --no-cache mongodb

RUN apk add --no-cache python3 py3-pip
RUN apk add --update nodejs npm

RUN apk add --no-cache mongodb-tools

RUN rc-update add mongodb default
RUN rc-service mongodb start

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
    && pip install -r requirements.txt --proxy=""
EXPOSE 5005

WORKDIR /app/app-mandrill-webhook

RUN python3 -m venv venv \
    && . venv/bin/activate \
    && python3 -m pip install --upgrade pip --proxy=""\
    && pip install -r requirements.txt --proxy=""
EXPOSE 8080



WORKDIR /app/web-app-react
RUN npm i
RUN npm run build
EXPOSE 3000

WORKDIR /app

CMD ["sh", "startup.sh"]