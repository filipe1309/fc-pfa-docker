FROM node:15.14.0-alpine3.10
WORKDIR /usr/src/app
COPY . .
RUN npm i -g nodemon
RUN npm i
EXPOSE 3000
CMD ["nodemon", "index.js"]