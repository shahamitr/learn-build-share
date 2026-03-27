# 07. Environment Variables

## Using `env`

You can set environment variables at the workflow, job, or step level.

```yaml
env:
  GLOBAL_VAR: "I am available everywhere"

jobs:
  example:
    runs-on: ubuntu-latest
    env:
      JOB_VAR: "I am available in this job"
    steps:
      - run: echo $GLOBAL_VAR
      - run: echo $JOB_VAR
```

## Secrets

Never commit sensitive data (API keys, passwords) to your YAML files. Use GitHub Secrets.

1.  Go to **Settings** > **Secrets and variables** > **Actions**.
2.  Create a repository secret (e.g., `API_TOKEN`).
3.  Use it in your workflow: `${{ secrets.API_TOKEN }}`.

## Lab: Use Environment Variables

1.  **Update Workflow:**
    ```yaml
    jobs:
      env-test:
        runs-on: ubuntu-latest
        env:
          MY_NAME: "GitHub Learner"
        steps:
          - name: Greet
            run: echo "Hello, $MY_NAME"
    ```
2.  **Run:** Verify the output says "Hello, GitHub Learner".
