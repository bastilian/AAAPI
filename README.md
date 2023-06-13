# Async Application Actions API

## Setup

### In container

If you wanna run a setup in a container there is a compose setup which can be run with either podman-compose or docker-compose:

```shell
$ cp .env.example .env # edit at will
$ docker-compose up
$ # or
$ podman-compose up
```

## Bare metal

You can also just run npm directly

```shell
$ cp .env.example .env # edit at will
$ npm install
$ npm run setup # will create and migrate the database
$ npm run dev # will startup the dev server on port 3000
```

In both cases the app will be available `http://localhost:3000`

Following is system design diagram that can be useful to visualise the process flow:

![AAAP_Design](https://github.com/mkholjuraev/AAAPI/assets/59481011/ef911ae9-0b26-4e78-b98f-39a4f49dc188)
