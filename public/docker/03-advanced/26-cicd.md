# 26. Docker in CI/CD Pipelines

## Automation

Docker is essential for CI/CD.

### Workflow

1.  **Build:** CI server builds the image from Dockerfile.
2.  **Test:** CI runs tests *inside* the container.
3.  **Push:** If tests pass, push to registry.
4.  **Deploy:** CD server pulls image and updates production.

![CI/CD Pipeline](https://placehold.co/600x400?text=Build+Test+Push+Deploy)

## Lab: GitHub Actions Example

```yaml
steps:
  - uses: actions/checkout@v3
  - name: Build Docker Image
    run: docker build -t myapp:${{ github.sha }} .
  - name: Run Tests
    run: docker run myapp:${{ github.sha }} npm test
```
