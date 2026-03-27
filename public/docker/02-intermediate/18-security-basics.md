# 18. Docker Security Basics

## Securing Containers

Containers are not secure by default.

### Best Practices

1.  **Don't run as Root:** Create a user in your Dockerfile (`USER node`).
2.  **Scan Images:** Use `docker scan` or Trivy to find vulnerabilities.
3.  **Minimal Base Images:** Use Alpine or Distroless to reduce attack surface.

![Container Security](https://placehold.co/600x400?text=Root+User+Vulnerabilities)

## Lab: Analyze User

Check who is running inside the container.

```bash
docker run --rm alpine whoami
```

It says `root`. This is bad for production apps!

### Fix It

```dockerfile
FROM alpine
RUN adduser -D myuser
USER myuser
```

Build and run this. `whoami` will now say `myuser`.
