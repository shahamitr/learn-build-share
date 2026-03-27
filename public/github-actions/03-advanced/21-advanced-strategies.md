# 21. Advanced Workflow Strategies

## Monorepo Pipelines

If you have multiple projects in one repo (e.g., `frontend/` and `backend/`), you don't want to run all workflows for every change.

### Path Filtering

```yaml
on:
  push:
    paths:
      - 'frontend/**'
```

This workflow only runs when files in `frontend/` are modified.

## Conditional Jobs

Run jobs only if certain conditions are met.

```yaml
jobs:
  deploy:
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps: ...
```

## Lab: Path Filtering

1.  **Create Structure:** Create folders `app1` and `app2`.
2.  **Create Workflow:**
    ```yaml
    on:
      push:
        paths:
          - 'app1/**'
    ```
3.  **Test:** Push a change to `app2`. The workflow should NOT run. Push a change to `app1`. The workflow SHOULD run.
