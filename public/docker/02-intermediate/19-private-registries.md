# 19. Private Docker Registries

## Beyond Docker Hub

For proprietary code, you need a private registry.

### Options

1.  **Docker Hub Private Repos:** Free for 1 repo.
2.  **Cloud Providers:** AWS ECR, Google Artifact Registry, Azure ACR.
3.  **Self-Hosted:** Harbor, Nexus.

![Private Registry](https://placehold.co/600x400?text=CI+Push+Private+Registry+Pull+Server)

## Lab: Tag for Private Registry

To push to a private registry (e.g., `registry.example.com`), you must tag the image with the hostname.

```bash
docker tag myapp registry.example.com/my-team/myapp:v1
docker push registry.example.com/my-team/myapp:v1
```
