# 15. Environment Variables & Configuration

## Configuring Apps

Never hardcode secrets or config in your image. Use Environment Variables.

### Setting Env Vars

1.  **In Dockerfile:** `ENV APP_ENV=production` (Not recommended for secrets).
2.  **In docker-compose.yml:** `environment:` section.
3.  **In .env file:** Compose automatically reads `.env`.

![Config Injection](https://placehold.co/600x400?text=Env+Vars+Container)

## Lab: Inject Configuration

### Step 1: Create .env

```bash
DB_PASSWORD=secret123
```

### Step 2: Update Compose

```yaml
services:
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: ${DB_PASSWORD}
```

### Step 3: Verify

Run `docker compose config` to see how Docker interprets the file. The password should be substituted.
