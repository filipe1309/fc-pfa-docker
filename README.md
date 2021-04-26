# <p align="center">PFA Docker 🐋</p>

<p align="center">
<img src="https://img.shields.io/badge/nodejs-15.0-green" alt="NodeJS"/>
</p>

## 💬 About

This project was developed following [FullCycle's PFA](https://portal.code.education/lms/#/180/164/128/conteudos).

## :computer: Technologies

-   [Docker](https://www.docker.com/)

## :scroll: Requirements

-   [Docker](https://www.docker.com/)

## :cd: Installation

```sh
git clone [PROJECT_REPO_LINK]
```

```sh
cd [PROJECT_REPO_NAME]
```

### Create docker network

```sh
docker network create pfa-docker
```

## :runner: Running

**Up app**

```sh
docker run --rm -d --network pfa-docker --name pfa-docker-mysql -e MYSQL_ROOT_PASSWORD=root devontherun/pfa-docker-mysql
docker run --rm -d --network pfa-docker --name pfa-docker-node devontherun/pfa-docker-node
docker run --rm -d --network pfa-docker -p 8080:80 --name pfa-docker-nginx devontherun/pfa-docker-nginx
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
