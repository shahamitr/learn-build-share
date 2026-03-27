# 06. Docker Volumes (Data Persistence)

## The Data Problem

By default, data inside a container is ephemeral. If you delete the container, the data is gone.

## Solutions

1.  **Volumes:** Managed by Docker. Best for database data.
2.  **Bind Mounts:** Link a folder on your host machine to the container. Best for source code during development.

![Volumes vs Bind Mounts](https://placehold.co/600x400?text=Host+FS+vs+Docker+Volume)

## Lab: Persist Data

Let's use a volume to save data even after the container is removed.

### Step 1: Create a Volume

```bash
docker volume create my-data
```

### Step 2: Run Container with Volume

Mount the volume to `/data` inside the container.

```bash
docker run -d -v my-data:/data --name data-test ubuntu sh -c "echo 'Hello Volume' > /data/test.txt && sleep 3600"
```

### Step 3: Verify Persistence

Stop and remove the container.

```bash
docker rm -f data-test
```

Start a NEW container using the SAME volume.

```bash
docker run --rm -v my-data:/data ubuntu cat /data/test.txt
```

You should see "Hello Volume". The data survived!
