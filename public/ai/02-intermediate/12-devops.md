# 12. AI for DevOps Tasks

## Automating Infrastructure with AI

DevOps involves a lot of configuration files (YAML, Dockerfiles, Terraform). AI can generate these quickly, explain complex configurations, and troubleshoot deployment failures.

### Common Use Cases

1.  **Dockerfiles:** Generate optimized images for your application.
2.  **CI/CD Pipelines:** Create GitHub Actions workflows or GitLab CI configs.
3.  **Infrastructure as Code (IaC):** Generate Terraform or CloudFormation templates.

### Best Practices

*   **Specify Versions:** Always pin versions (e.g., `node:18-alpine` instead of `node:latest`).
*   **Security Scanning:** Ask AI to scan generated Dockerfiles for vulnerabilities.
*   **Review Secrets:** Ensure secrets are handled via environment variables, not hardcoded.

![DevOps Automation](https://placehold.co/600x400?text=Docker+CI/CD+IaC)

## Lab: Generate a GitHub Actions Workflow

### Step 1: The Requirement

You have a Node.js project. You want a GitHub Action that:
*   Runs on every push to `main`.
*   Installs dependencies (`npm ci`).
*   Runs tests (`npm test`).
*   Builds the project (`npm run build`).

### Step 2: Prompt the AI

> "Write a GitHub Actions workflow file (`.github/workflows/ci.yml`) for a Node.js project.
> Triggers: Push to `main`.
> Steps: Checkout, Setup Node (v18), Install dependencies, Run tests, Build."

### Step 3: Review the Output

*   Did it use `actions/checkout@v3` (or newer)?
*   Did it use `actions/setup-node`?
*   Is the syntax correct YAML?

### Step 4: Refine

Ask for caching:
> "Update the workflow to cache `node_modules` to speed up builds."
