#!/bin/bash

# MySQL
docker run --rm -d --network pfa-docker -v $(pwd)/mysql/db:/var/lib/mysql --name pfa-docker-mysql devontherun/pfa-docker-mysql
docker logs pfa-docker-mysql

# Node.JS
docker run --rm -d --network pfa-docker --name pfa-docker-node devontherun/pfa-docker-node
docker logs pfa-docker-node

# Nginx
docker run --rm -d --network pfa-docker -p 8080:80 --name pfa-docker-nginx devontherun/pfa-docker-nginx
docker logs pfa-docker-nginx
