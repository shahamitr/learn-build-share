# 03. Docker Architecture

## Core Components

Understanding how Docker works under the hood helps in debugging and advanced usage.

1.  **Docker Client:** The CLI tool (`docker`) you interact with. It sends commands to the daemon.
2.  **Docker Daemon (`dockerd`):** The background process that manages images, containers, and networks.
3.  **Docker Registry:** Stores Docker images (e.g., Docker Hub).
4.  **Docker Objects:** Images, Containers, Networks, Volumes.

![Docker Architecture](https://placehold.co/600x400?text=Client+Daemon+Registry)

## Images vs Containers

*   **Image:** A read-only template (the "blueprint").
*   **Container:** A runnable instance of an image (the "house").

## Lab: Inspect Containers

Let's look at the Nginx container we started earlier.

### Step 1: List Running Containers

```bash
docker ps
```

You'll see the Container ID, Image, Status, and Ports.

### Step 2: Inspect Details

Get low-level JSON details about the container.

```bash
docker inspect <container_id>
```

Replace `<container_id>` with the ID from `docker ps`. Look for the IP address and network settings.
