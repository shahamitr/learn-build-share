# 13. Docker Compose Introduction

## Managing Multi-Container Apps

Running `docker run` for 5 services is tedious. Docker Compose lets you define your entire stack in a YAML file.

### docker-compose.yml

Defines services, networks, and volumes.

```yaml
version: '3.8'
services:
  web:
    image: nginx
    ports:
      - "80:80"
  redis:
    image: redis
```

![Docker Compose](https://placehold.co/600x400?text=YAML+Services+Networks)

## Lab: Run a Stack

### Step 1: Create docker-compose.yml

Save the YAML above.

### Step 2: Start the Stack

```bash
docker compose up -d
```

### Step 3: Verify

```bash
docker compose ps
```

You should see both Nginx and Redis running.
