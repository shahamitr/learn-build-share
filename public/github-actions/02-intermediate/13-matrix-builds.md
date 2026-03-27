# 13. Matrix Builds

## Testing Multiple Environments

A matrix strategy allows you to run the same job multiple times with different configurations.

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [14, 16, 18]
    steps:
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
      - run: node -v
```

This will create 3 jobs: `test (14)`, `test (16)`, and `test (18)`.

## Lab: Matrix Testing

1.  **Create Workflow:** Use the example above.
2.  **Run:** Push and watch 3 jobs start in parallel.
3.  **Verify:** Check the logs of each job to see the different Node versions being used.
