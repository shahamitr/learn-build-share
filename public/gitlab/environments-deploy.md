# Environments & Deployment

In this module, we'll explore the use of environments and deployment strategies in GitLab CI/CD pipelines.

## Environments in GitLab
Environments allow you to track deployments to different servers (e.g., development, staging, production).
- **Environment Definition:**
```yaml
deploy-prod:
  stage: deploy
  script:
    - echo "Deploying to production..."
  environment:
    name: production
    url: https://app.example.com
```
- **Dynamic Environments:** Creating environments on the fly (e.g., for review apps in Merge Requests).
- **Manual Approvals:** Using `when: manual` to require a human to trigger a job (e.g., production deployment).
- **Deployment History:** GitLab tracks every deployment, allowing you to see what was deployed, when, and by whom.
- **Rollbacks:** Easily roll back to a previous successful deployment from the GitLab UI.

## Deployment Strategies
- **Continuous Deployment:** Every change that passes tests is automatically deployed to production.
- **Continuous Delivery:** Every change is ready to be deployed, but requires manual approval.
- **Blue-Green Deployment:** Two identical environments (Blue and Green). One is live, while the other is updated and tested. Traffic is then switched.
- **Canary Releases:** Deploying the new version to a small subset of users first.
- **Feature Flags:** Decoupling deployment from release by wrapping features in toggles.

## Deployment Methods
- **SSH Deployment:** Using `ssh-agent` and private keys stored in CI/CD variables to copy files and run commands on remote servers.
- **Kubernetes Deployment:** Using `kubectl` or Helm to deploy to a K8s cluster.
- **Cloud-Native Deployment:** Using CLI tools for AWS (S3/Lambda), Azure, or GCP.
- **Terraform:** Managing infrastructure as code (IaC) within your pipeline.

## Practical Tip
When deploying to production, always use a **staging environment** first to verify that your application is working correctly. Use **protected environments** to restrict who can deploy to production.
