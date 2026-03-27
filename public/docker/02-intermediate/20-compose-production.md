# 20. Docker Compose Production Setup

## Moving to Production

`docker compose up` is great for dev, but production needs more robustness.

### Production Features

1.  **Restart Policies:** `restart: always` ensures the container comes back if it crashes or the server reboots.
2.  **Health Checks:** Tell Docker how to check if your app is actually working (not just running).
3.  **Resource Limits:** Prevent one container from eating all CPU/RAM.

![Production Compose](https://placehold.co/600x400?text=Restart+Healthcheck+Limits)

## Lab: Production Compose File

```yaml
services:
  web:
    image: nginx
    restart: always
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost"]
      interval: 30s
      timeout: 10s
      retries: 3
    deploy:
      resources:
        limits:
          cpus: '0.50'
          memory: 512M
```
