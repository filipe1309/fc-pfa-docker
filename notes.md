docker build -t devontherun/pfa-docker-node .
$ docker run --rm -d --network pfa-docker --name pfa-docker-node -v $(pwd):/usr/src/app devontherun/pfa-docker-node

docker build -t devontherun/pfa-docker-mysql .
https://betterprogramming.pub/customize-your-mysql-database-in-docker-723ffd59d8fb
$ docker run --rm -d --network pfa-docker -p 3306:3306 --name pfa-docker-mysql -e MYSQL_ROOT_PASSWORD=root devontherun/pfa-docker-mysql
docker exec -it pfa-docker-mysql bash
mysql -uroot -p
show databases;
use fullcycle;
show tables;
show columns from modules;
select \* from modules;

docker network create pfa-docker

Fix mysql 8 auth on mysql npm package:
https://www.npmjs.com/package/mysql2
npm un mysql && npm i mysql2

docker build -t devontherun/pfa-docker-nginx .

docker push devontherun/pfa-docker-mysql:latest
docker push devontherun/pfa-docker-node:latest
docker push devontherun/pfa-docker-nginx:latest

show variables like 'character%';
