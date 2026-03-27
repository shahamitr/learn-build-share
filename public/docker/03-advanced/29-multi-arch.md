# 29. Multi-Architecture Docker Images

## Cross-Platform Builds

Your laptop is likely ARM (Mac M1/M2) or AMD64 (Intel/AMD). Servers are usually AMD64, but ARM servers (AWS Graviton) are growing.

### Buildx

Docker Buildx allows building for multiple architectures at once.

![Multi-Arch Build](https://placehold.co/600x400?text=Buildx+ARM64+AMD64)

## Lab: Build for ARM and AMD

```bash
docker buildx create --use
docker buildx build --platform linux/amd64,linux/arm64 -t myapp:multiarch --push .
```

This pushes a "manifest list" to the registry. When a user pulls `myapp:multiarch`, Docker automatically downloads the correct version for their CPU.
