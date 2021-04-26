#!/bin/bash

docker run --rm -d --network pfa-docker --name pfa-docker-mysql devontherun/pfa-docker-mysql
docker run --rm -d --network pfa-docker --name pfa-docker-node devontherun/pfa-docker-node
docker run --rm -d --network pfa-docker -p 8080:80 --name pfa-docker-nginx devontherun/pfa-docker-nginx