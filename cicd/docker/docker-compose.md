# what is docker compose

Docker Compose is a tool for defining and running multi-container applications. It is the key to unlocking a streamlined and efficient development and deployment experience.

# test if install docker compose

install

```
  1.install docker desktop
  2.install docker compose plugin


```

```bash
  docker compose version
  # print like : Docker Compose version v2.24.5-desktop.1
```

# file name rules

```
  compose.yaml  (first option)
  compose.yml
  docker-compose.yaml
```

# compose.yaml example

```yaml
services:
  frontend:
    image: example/webapp
    ports:
      - "443:8043"
    networks:
      - front-tier
      - back-tier
    configs:
      - httpd-config
    secrets:
      - server-certificate

  backend:
    image: example/database
    volumes:
      - db-data:/etc/data
    networks:
      - back-tier

volumes:
  db-data:
    driver: flocker
    driver_opts:
      size: "10GiB"

configs:
  httpd-config:
    external: true

secrets:
  server-certificate:
    external: true

networks:
  # The presence of these objects is sufficient to define them
  front-tier: {}
  back-tier: {}
```

# compose test

```sh
  mkdir composetest
  cd composetest

```

# use custom compose file

```sh
  docker compose up
  # background run compose
  docker compose up -d


  docker compose -f <path of compose.yaml> up

```

# watch file change

```sh
  docker compose watch

```

# stop compose

```sh
  docker compose stop


```

# delete compose

```sh
  # remove all container and content
  docker compose down

```

# docker env file and defined env

```sh

DEBUG=dugvalue
# run to use DEBUG var in Yaml file
docker compose up

```

then config follow this yaml

```yaml
services:
  web:
    image: example:11
    environment:
      - ENVNAME=${DEBUG}
      - ENVNAME1=env_value
```

or use env-file filed

```sh
cat .env
TAG=v1.5
```

then follow using

```yaml
services:
  web:
    image: example:1.1
    env-file: ./env
```

# compose profile

```sh
  docker compose --profile <profiletag> up
  # way2
  COMPOSE_PROFILES=frontend,debug docker compose up
  ## start all service


```
