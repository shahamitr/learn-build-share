# 12. Job Dependencies

## Sequencing Jobs

By default, jobs run in parallel. To make one job wait for another, use `needs`.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps: [...]

  test:
    needs: build
    runs-on: ubuntu-latest
    steps: [...]
```

## Passing Data

Jobs run on different runners. To pass files from `build` to `deploy`, you must use artifacts.

1.  **Job 1:** Upload artifact.
2.  **Job 2:** `needs: Job 1`.
3.  **Job 2:** Download artifact.

## Lab: Build → Test → Deploy

1.  **Create Workflow:**
    ```yaml
    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - run: echo "Building..."
      test:
        needs: build
        runs-on: ubuntu-latest
        steps:
          - run: echo "Testing..."
      deploy:
        needs: test
        runs-on: ubuntu-latest
        steps:
          - run: echo "Deploying..."
    ```
2.  **Run:** Observe the visualization graph. They should run sequentially.
