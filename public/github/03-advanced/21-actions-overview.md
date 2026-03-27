# 21. GitHub Actions Overview

## Automation Workflows

GitHub Actions allows you to automate your software development workflows right in your repository.

### CI/CD Basics

*   **Continuous Integration (CI):** Automatically build and test code changes.
*   **Continuous Deployment (CD):** Automatically deploy code to production.

### Workflow File

Workflows are defined in YAML files in `.github/workflows/`.

```yaml
name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run a script
        run: echo Hello, world!
```

## Lab: Create Simple Workflow

1.  **Create File:** Create `.github/workflows/hello.yml`.
2.  **Paste Content:** Use the YAML above.
3.  **Commit & Push:** Push to GitHub.
4.  **Actions Tab:** Go to the **Actions** tab.
5.  **Run:** Click on the workflow run to see the logs. You should see "Hello, world!".
