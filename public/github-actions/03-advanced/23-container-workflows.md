# 23. Container-Based Workflows

## Docker in Actions

You can run steps inside a Docker container instead of the VM directly.

```yaml
jobs:
  container-job:
    runs-on: ubuntu-latest
    container: node:18
    steps:
      - run: node -v # Runs inside the node:18 container
```

## Service Containers

You can spin up sidecar services (databases, redis) for testing.

```yaml
services:
  postgres:
    image: postgres:15
    ports:
      - 5432:5432
```

## Lab: Build Docker Image

1.  **Workflow:**
    ```yaml
    steps:
      - uses: actions/checkout@v4
      - name: Build Docker Image
        run: docker build . -t my-app
    ```
