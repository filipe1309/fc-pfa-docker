FROM node:15.14.0-alpine3.10
WORKDIR /usr/src/app
COPY index.js .
COPY db.js .
COPY package*.json ./
RUN npm i
EXPOSE 3000
CMD [ "node", "index.js" ]