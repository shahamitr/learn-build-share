# 06. Using Prebuilt GitHub Actions

## The `uses` Keyword

Instead of writing shell scripts for everything, you can use prebuilt actions created by GitHub or the community.

### Marketplace

You can find actions in the GitHub Marketplace.

### Common Actions

*   `actions/checkout`: Checks out your repository so your workflow can access it.
*   `actions/setup-node`: Sets up a Node.js environment.
*   `actions/upload-artifact`: Uploads files produced by the workflow.

### Versioning

Always specify a version tag, commit SHA, or branch name.

```yaml
uses: actions/checkout@v4
```

## Lab: Checkout Repository

1.  **Update Workflow:**
    ```yaml
    jobs:
      explore:
        runs-on: ubuntu-latest
        steps:
          - name: Checkout code
            uses: actions/checkout@v4
          
          - name: List files
            run: ls -R
    ```
2.  **Explain:** Without `actions/checkout`, the runner directory is empty. With it, your code is present.
3.  **Run:** Commit and verify that `ls -R` lists your project files.
