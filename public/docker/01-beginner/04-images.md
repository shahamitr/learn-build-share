# 04. Working with Docker Images

## Managing Images

Images are the building blocks of containers. They are built in layers.

### Key Concepts

*   **Pulling:** Downloading an image from a registry.
*   **Layers:** Each instruction in a Dockerfile creates a layer. Layers are cached and reused.
*   **Tags:** Versions of an image (e.g., `ubuntu:20.04`, `node:18`). `latest` is the default tag.

![Image Layers](https://placehold.co/600x400?text=Base+Layer+App+Layer)

## Commands

*   `docker pull <image>`: Download an image.
*   `docker images`: List local images.
*   `docker history <image>`: See the layers of an image.
*   `docker rmi <image>`: Remove an image.

## Lab: Explore Ubuntu Image

### Step 1: Pull Ubuntu

```bash
docker pull ubuntu
```

### Step 2: Check Layers

```bash
docker history ubuntu
```

Notice the size of each layer.

### Step 3: Run Interactive Shell

Run a container and get inside it.

```bash
docker run -it ubuntu bash
```

*   `-it`: Interactive terminal.
*   `bash`: The command to run inside the container.

Type `ls` to see the file system, then `exit` to leave.
