# 05. Managing Containers

## Container Lifecycle

You need to know how to control the state of your containers.

### Basic Commands

*   **Start:** `docker start <container_id>` (Resume a stopped container)
*   **Stop:** `docker stop <container_id>` (Gracefully stop)
*   **Restart:** `docker restart <container_id>`
*   **Remove:** `docker rm <container_id>` (Delete a stopped container)
*   **Logs:** `docker logs <container_id>` (See output)

![Container Lifecycle](https://placehold.co/600x400?text=Create+Start+Stop+Remove)

## Lab: Manage Multiple Containers

### Step 1: Start a Background Container

```bash
docker run -d --name my-web-server nginx
```

### Step 2: Stop It

```bash
docker stop my-web-server
```

### Step 3: Start It Again

```bash
docker start my-web-server
```

### Step 4: View Logs

```bash
docker logs my-web-server
```

### Step 5: Cleanup

```bash
docker stop my-web-server
docker rm my-web-server
```
