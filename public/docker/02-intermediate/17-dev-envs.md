# 17. Docker for Development Environments

## Dev Containers

Why install Node, Python, and Go on your laptop? Run your entire dev environment in Docker.

### Benefits

*   **Isolation:** Project A uses Node 14, Project B uses Node 18. No conflicts.
*   **Onboarding:** `git clone` -> `docker compose up`. Done.

![Dev Environment](https://placehold.co/600x400?text=Host+Code+Container+Runtime)

## Lab: Run a Dev Stack

Create a `docker-compose.yml` that mounts your source code.

```yaml
services:
  api:
    image: node:18
    working_dir: /app
    volumes:
      - ./:/app
    command: npm start
    ports:
      - "3000:3000"
```

Now, when you edit files on your host, the container sees them instantly (if you use nodemon).
