# Advanced Features & Optimization

In this module, we'll explore the more advanced features of GitLab CI/CD pipelines and how to optimize them for speed and efficiency.

## Complex Pipeline Architectures
- **Parent-child Pipelines:** A pipeline that triggers another pipeline in the same project. Useful for breaking down large `.gitlab-ci.yml` files.
```yaml
trigger-child:
  trigger:
    include: path/to/child-pipeline.yml
```
- **Multi-project Pipelines:** A pipeline that triggers another pipeline in a different project. Ideal for microservices architectures.
- **Dynamic Pipelines:** A pipeline that is generated dynamically at runtime (e.g., using a script to generate a YAML file and then triggering it).
- **Directed Acyclic Graph (DAG):** Using the `needs` keyword to allow jobs to run as soon as their dependencies are finished, regardless of the stage.
```yaml
test-job:
  stage: test
  needs: ["build-job"]
  script:
    - ./run-tests.sh
```

## Pipeline Optimization
- **Parallel Jobs:** Running multiple instances of the same job simultaneously (e.g., for parallel testing).
- **Caching Strategies:** 
    - **Key-based Caching:** Using a unique key (e.g., `package-lock.json` hash) to cache dependencies.
    - **Pull-only Cache:** Only pulling the cache for jobs that don't need to update it.
- **Artifact Management:** Using `expire_in` to automatically delete old artifacts and save storage.
- **Fast-fail Pipelines:** Putting fast, critical tests in early stages to fail the pipeline as quickly as possible.
- **Docker Image Optimization:** Using smaller base images (e.g., Alpine) and minimizing layers.

## CI/CD for Large Repositories
- **Monorepo Support:** Using `rules:changes` to only run jobs when specific files or directories are modified.
```yaml
frontend-test:
  stage: test
  rules:
    - changes:
        - frontend/**/*
  script:
    - cd frontend && npm test
```

## Practical Tip
When optimizing your pipeline, always start with the most time-consuming jobs and use **caching** where possible. Use the **Pipeline Analytics** tool in GitLab to identify bottlenecks.
