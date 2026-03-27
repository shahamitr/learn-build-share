# 14. Docker Compose Networking

## Service Discovery

Docker Compose automatically creates a network for your app. Services can reach each other by their service name.

### Example

In the previous lab, the `web` service can reach the `redis` service simply by using the hostname `redis`. No IP addresses needed!

![Service Discovery](https://placehold.co/600x400?text=Web+Service+Redis+Service)

## Lab: Connect App to DB

### Step 1: Update Compose File

Add a simple app that pings Redis.

```yaml
services:
  app:
    image: busybox
    command: ping redis
    depends_on:
      - redis
  redis:
    image: redis
```

### Step 2: Check Logs

```bash
docker compose up -d
docker compose logs -f app
```

You should see ping responses from the Redis container's IP.
