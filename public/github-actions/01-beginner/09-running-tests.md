# 09. Running Tests with GitHub Actions

## Automated Testing

One of the primary uses of CI is running tests automatically.

### Example: Node.js Testing

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
```

## Lab: Run Unit Tests

1.  **Setup:** Ensure your repository has a `package.json` with a `test` script (even if it just echoes "Success").
2.  **Create Workflow:** Create `.github/workflows/test.yml` with the content above.
3.  **Push:** Commit and push.
4.  **Verify:** Check that the `npm test` step executes successfully.
