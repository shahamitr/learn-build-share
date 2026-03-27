# 16. Container Debugging Techniques

## Troubleshooting

When a container fails, how do you fix it?

### Tools

1.  **Logs:** `docker logs <container>` (Stdout/Stderr).
2.  **Inspect:** `docker inspect <container>` (Config/State).
3.  **Exec:** `docker exec -it <container> sh` (Get a shell inside).
4.  **Top:** `docker top <container>` (Running processes).

![Debugging Tools](https://placehold.co/600x400?text=Logs+Exec+Inspect)

## Lab: Debug a Failing Container

### Step 1: Run a Broken Container

```bash
docker run -d --name broken busybox sh -c "sleep 5 && exit 1"
```

### Step 2: Investigate

Wait 5 seconds. Check status.

```bash
docker ps -a
```

(Status: Exited (1))

### Step 3: Check Logs

```bash
docker logs broken
```

(Empty, because `exit 1` produces no output, but in real apps, you'd see the error stack trace here).
