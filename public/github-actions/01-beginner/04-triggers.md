# 04. Workflow Triggers

## Common Triggers

The `on` keyword defines when the workflow runs.

### Push

Triggers when a commit is pushed.

```yaml
on: push
```

You can filter by branches:

```yaml
on:
  push:
    branches:
      - main
```

### Pull Request

Triggers when a PR is opened or updated.

```yaml
on: pull_request
```

### Schedule

Triggers at a specific time (using cron syntax).

```yaml
on:
  schedule:
    - cron: '30 5 * * 1,3' # At 05:30 on Monday and Wednesday
```

### Workflow Dispatch

Allows you to manually trigger the workflow from the GitHub UI.

```yaml
on: workflow_dispatch
```

## Lab: Trigger Workflow Using Pull Request

1.  **Edit:** Modify your `hello.yml` to trigger on `pull_request` as well.
    ```yaml
    on: [push, pull_request]
    ```
2.  **Branch:** Create a new branch `feature/test-pr`.
3.  **Change:** Make a dummy change to a file.
4.  **Push:** Push the branch.
5.  **PR:** Open a Pull Request targeting `main`.
6.  **Verify:** Check the Actions tab or the PR page. You should see the workflow running.
