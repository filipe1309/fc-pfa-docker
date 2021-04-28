# <p align="center">PFA Docker 🐋</p>

<p align="center">
<img src="https://img.shields.io/badge/nodejs-15.0-green" alt="NodeJS"/>
</p>

## 💬 About

This project was developed following [FullCycle's PFA](https://portal.code.education/lms/#/180/164/128/conteudos).

### Challenge 1

-   [x] Create a program that list some of Full Cycle course modules
-   [x] Create a nginx image that receice the http requests
-   [x] Create a Gihub repo with the program & docker images
-   [x] Create README.md with commands to send to the app that will run on port 8080
-   [x] No docker-compose

## :computer: Technologies

-   [Docker](https://www.docker.com/)
-   [Node.js](https://nodejs.org/en/)
-   [Nginx](https://www.nginx.com/)
-   [MySQL](https://www.mysql.com/)
-   [Node MySQL2](https://www.npmjs.com/package/mysql2)

## :scroll: Requirements

-   [Docker](https://www.docker.com/)

## :cd: Installation

```sh
git clone git@github.com:filipe1309/fc-pfa-docker.git
```

```sh
cd fc-pfa-docker
```

### Create docker network

```sh
docker network create pfa-docker
```

## :runner: Running

**Up app**

```sh
./init.sh
```

OR

```sh
docker run --rm -d --network pfa-docker -v $(pwd)/mysql/db:/var/lib/mysql --name pfa-docker-mysql devontherun/pfa-docker-mysql
```

```sh
docker run --rm -d --network pfa-docker -v $(pwd)/node:/usr/src/app --name pfa-docker-node devontherun/pfa-docker-node
```

```sh
docker run --rm -d --network pfa-docker -p 8080:80 --name pfa-docker-nginx devontherun/pfa-docker-nginx
```

Access http://localhost:8080/

### Stop containers

```sh
docker stop $(docker ps -f name=pfa-docker -q)
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## About Me

<p align="center">
    <a style="font-weight: bold" href="https://www.linkedin.com/in/filipe1309/">
    <img style="border-radius:50%" width="100px; "src="https://avatars.githubusercontent.com/u/2081014?s=60&v=4"/>
    </a>
</p>

---

<p align="center">
Done with ♥ by <a style="font-weight: bold" href="https://www.linkedin.com/in/filipe1309/">Filipe Leuch Bonfim</a> 🖖

</p>
