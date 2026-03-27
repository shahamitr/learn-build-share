# 09. Building Docker Images

## The Build Process

Once you have a Dockerfile, you use the `docker build` command to create an image.

### Concepts

*   **Build Context:** The directory passed to the build command (usually `.`). Docker sends all files in this directory to the daemon. Use `.dockerignore` to exclude files (like `node_modules`).
*   **Tagging:** Naming your image (`-t name:tag`).

![Docker Build Process](https://placehold.co/600x400?text=Dockerfile+Context+Image)

## Lab: Build and Run

### Step 1: Build the Image

Run this command in the folder where you created the `Dockerfile` from the previous lesson.

```bash
docker build -t my-python-app .
```

### Step 2: Run the Image

```bash
docker run my-python-app
```

You should see: `Hello from Dockerfile!`
