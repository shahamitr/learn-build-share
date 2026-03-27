# 10. Build Automation

## Automating Builds

For compiled languages or web frameworks (React, Vue), you need to build the project to generate deployable assets.

### Example: Build React App

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
```

## Lab: Build Project

1.  **Setup:** Ensure your project has a `build` script in `package.json`.
2.  **Workflow:** Create `.github/workflows/build.yml`.
3.  **Steps:** Checkout, Setup Node, Install, Build.
4.  **Run:** Push and verify the build succeeds.
