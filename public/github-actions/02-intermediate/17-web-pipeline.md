# 17. CI Pipeline for Web Applications

## Full Pipeline

A typical web app pipeline:
1.  **Install:** `npm ci`
2.  **Lint:** `npm run lint`
3.  **Test:** `npm test`
4.  **Build:** `npm run build`
5.  **Deploy:** Upload to server.

## Lab: Full Node/React Pipeline

1.  **Create Workflow:** Combine previous concepts.
    ```yaml
    name: CI/CD
    on: push
    jobs:
      build-and-test:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4
          - uses: actions/setup-node@v4
          - run: npm ci
          - run: npm test
          - run: npm run build
    ```
2.  **Run:** Ensure all steps pass.
