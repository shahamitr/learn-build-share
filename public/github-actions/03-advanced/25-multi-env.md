# 25. Multi-Environment Deployments

## Environments

GitHub Environments allow you to configure protection rules (e.g., required reviewers) and secrets for specific environments (Dev, Staging, Prod).

```yaml
jobs:
  deploy-prod:
    environment: production
    runs-on: ubuntu-latest
    steps: ...
```

## Lab: Deploy to Staging First

1.  **Define Environments:** (Settings > Environments) Create `staging` and `production`.
2.  **Workflow:**
    ```yaml
    jobs:
      staging:
        environment: staging
        runs-on: ubuntu-latest
        steps:
          - run: echo "Deploying to Staging"
      production:
        needs: staging
        environment: production
        runs-on: ubuntu-latest
        steps:
          - run: echo "Deploying to Production"
    ```
