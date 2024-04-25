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
