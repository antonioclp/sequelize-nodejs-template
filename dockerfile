FROM node:20-alpine

WORKDIR /app/back

COPY package*.json /app/back/

RUN npm install

COPY . .

RUN npm run build