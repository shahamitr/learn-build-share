# 08. Workflow Logs and Debugging

## Viewing Logs

1.  Go to the **Actions** tab.
2.  Click on a workflow run.
3.  Click on a job name (e.g., `build`).
4.  Expand the steps to see the output.

## Debugging Failures

If a step fails (exit code non-zero), the workflow stops (unless configured otherwise). The logs usually show the error message.

## Re-running Workflows

You can re-run a failed workflow or specific failed jobs from the UI.

## Lab: Fix Failing Workflow

1.  **Create Failure:** Create a workflow that intentionally fails.
    ```yaml
    jobs:
      fail-job:
        runs-on: ubuntu-latest
        steps:
          - name: This will fail
            run: exit 1
    ```
2.  **Run:** Push and watch it fail (red X).
3.  **Fix:** Change `exit 1` to `exit 0` or `echo "Fixed"`.
4.  **Re-run:** Push the fix and watch it pass (green check).
