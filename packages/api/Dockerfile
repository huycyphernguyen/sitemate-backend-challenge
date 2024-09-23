#Nest.js web app

FROM node:20.13.1

WORKDIR /api
COPY package.json .
RUN npm i

COPY . .
RUN npm run build