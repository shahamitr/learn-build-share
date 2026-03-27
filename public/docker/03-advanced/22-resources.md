# 22. Container Resource Management

## Limiting Resources

By default, a container can use all available CPU and RAM. This is dangerous in production.

### Limits vs Reservations

*   **Limit:** Hard cap. If exceeded, the container is throttled (CPU) or killed (OOM - Out of Memory).
*   **Reservation:** Soft guarantee. The scheduler ensures this much is available.

![Resource Limits](https://placehold.co/600x400?text=CPU+Memory+Throttling)

## Lab: Run with Limits

### Step 1: Limit Memory

```bash
docker run -it --memory="256m" --memory-swap="512m" ubuntu
```

### Step 2: Limit CPU

```bash
docker run -it --cpus="0.5" ubuntu
```

This container can only use 50% of one CPU core.
