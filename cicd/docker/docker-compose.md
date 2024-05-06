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

# Merge Docker compose File

```sh
# 相同的配置名称，后面的文件覆盖前面的文件
docker compose -f compose.yml -f compose.admin.yml run backup_db

# 生产使用 up -d
docker compose -f compose.yml -f compose.prod.yml up -d

```

# Using \<include\> \<extends\> rewrite config

```yaml
include:
  - my-compose-include.yaml #with serviceB declared
services:
  serviceA:
    build: .
    depends_on:
      ## this service from my-compose-include.yaml config file
      - serviceB
  serviceOverride:
    extends:
      file: ./compose.extends.yml
        service: web
```

# Control startup

On startup, Compose does not wait until a container is "ready", only until it's running. This can cause issues if, for example, you have a relational database system that needs to start its own services before being able to handle incoming connections.

The solution for detecting the ready state of a service is to use the condition attribute with one of the following options:

<service_started>

<service_healthy>
This specifies that a dependency is expected to be “healthy”, which is defined with

<healthcheck >
before starting a dependent service

<service_completed_successfully>
This specifies that a dependency is expected to run to successful completion before starting a dependent service.

```yaml
include:
  - my-compose-include.yaml #with serviceB declared
services:
  webtest:
    depends_on: ["test"]
```

# Using GPU

device_ids : 此值指定为字符串列表，表示来自主机的 GPU 设备 ID。您可以在主机 nvidia-smi 上的输出中找到设备 ID。如果未设置， device_ids 则默认使用主机上可用的所有 GPU。

driver : 此值指定为字符串，例如 driver: 'nvidia'

options : 表示驱动程序特定选项的键值对。

capabilities : 此值指定为字符串列表（例如。 capabilities: [gpu] ）。您必须在 Compose 文件中设置此字段。否则，它将在服务部署时返回错误。

count : 。此值指定为整数或值 all ，表示应保留的 GPU 设备数（前提是主机持有该数量的 GPU）。如果 count 设置为 all 或未指定，则默认使用主机上可用的所有 GPU

```yml
services:
  test:
    image: nvidia/cuda:12.3.1-base-ubuntu20.04
    command: nvidia-smi
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: 1
              capabilities: [gpu]
```

# Link containers

Links allow you to define extra aliases by which a service is reachable from another service. They are not required to enable services to communicate. By default, any service can reach any other service at that service's name. In the following example, db is reachable from web at the hostnames db and database:

链接允许您定义额外的别名，通过这些别名可以从另一个服务访问一个服务。它们不需要启用服务进行通信。默认情况下，任何服务都可以访问该服务名称下的任何其他服务。在以下示例中， db 可从 web 主机名 db 和 database ：

```yml
services:
  web:
    build: .
    links:
      - "db:database"
  db:
    image: postgres
```

# Specify custom networks 指定自定义网络

## &custom name

```yml
services:
  proxy:
    build: ./proxy
    networks:
      - frontend
  app:
    build: ./app
    networks:
      - frontend
      - backend
  db:
    image: postgres
    networks:
      - backend

networks:
  frontend:
    # Use a custom driver
    driver: custom-driver-1
  backend:
    # Use a custom driver which takes special options
    driver: custom-driver-2
    driver_opts:
      foo: "1"
      bar: "2"
  # custom network name
  frontend:
    name: custom_frontend_name
    driver: custom-driver-1
```

## Use a pre-existing network

```yml
services:
  web:
   build: .
    ports:
      - "8000:5000"
    profiles: [dev, debug]

    depends_on:
      - redis


networks:
  network1:
    name: my-pre-existing-network
    external: true
```
