FROM node:lts-alpine

WORKDIR /app

COPY package.json /app
RUN yarn

COPY . /app

CMD yarn dev

EXPOSE 3000
