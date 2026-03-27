# 03. Understanding Workflow Files

## YAML Basics

GitHub Actions workflows are defined using YAML (YAML Ain't Markup Language). It is a human-readable data serialization standard.

*   **Indentation:** YAML uses indentation (spaces, not tabs) to represent structure.
*   **Key-Value Pairs:** `key: value`
*   **Lists:**
    ```yaml
    fruits:
      - Apple
      - Banana
    ```

## Workflow Structure

A workflow file must be stored in the `.github/workflows` directory of your repository.

### Example Breakdown

```yaml
# The name of the workflow as it will appear in the Actions tab
name: First Workflow

# The event that triggers the workflow
on: push

# A workflow run is made up of one or more jobs
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # A step that runs a shell command
      - name: Print message
        run: echo "Hello GitHub Actions"
```

## Lab: Run Your First Workflow

1.  **Edit:** Open the `hello.yml` file you created in the previous lab.
2.  **Modify:** Change the `run` command to `echo "This is my first real workflow"`.
3.  **Commit:** Commit the change with message "Update workflow message".
4.  **Observe:** Watch the Actions tab. You should see a new run triggered by your push.
