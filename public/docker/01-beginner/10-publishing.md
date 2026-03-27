# 10. Publishing Images to Docker Hub

## Sharing Your Work

Docker Hub is the default public registry. You can push your images there to share them or deploy them to servers.

### Prerequisites

1.  Create an account at [hub.docker.com](https://hub.docker.com).
2.  Login via CLI: `docker login`.

### Image Naming

To push to Docker Hub, your image must be named `username/repository:tag`.

![Docker Push](https://placehold.co/600x400?text=Local+Image+Push+DockerHub)

## Lab: Push Your Image

### Step 1: Tag the Image

Replace `yourusername` with your actual Docker Hub username.

```bash
docker tag my-python-app yourusername/my-python-app:v1
```

### Step 2: Push

```bash
docker push yourusername/my-python-app:v1
```

### Step 3: Verify

Go to Docker Hub in your browser. You should see your new repository!
