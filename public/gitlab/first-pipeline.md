# GitLab Intro & First Pipeline

In this module, we'll explore the GitLab interface and create your very first CI/CD pipeline.

## Getting Started with GitLab
- **Creating a Project:**
    - **New Project:** Create a blank project, use a template, or import from another Git provider.
    - **Visibility:** Public, Internal, or Private.
- **GitLab Interface:**
    - **Project Overview:** Files, branches, commits.
    - **Plan:** Issues, Boards, Milestones.
    - **Build:** Pipelines, Jobs, Artifacts.
    - **Deploy:** Environments, Releases.
    - **Secure:** Security Dashboard, Vulnerability Report.

## Your First Pipeline
The core of GitLab CI/CD is the `.gitlab-ci.yml` file. This file defines your pipeline's structure and behavior.

### What is .gitlab-ci.yml?
A YAML file located in the root of your repository that contains the definition of your CI/CD pipeline.

### Basic Syntax & Keywords
- **stages:** Defines the order in which jobs are executed (e.g., build, test, deploy).
- **jobs:** Defines the tasks to be performed. Each job must belong to a stage.
- **image:** Specifies the Docker image to use for the job (e.g., `node:latest`, `python:3.9`).
- **before_script:** Commands that run before every job.
- **after_script:** Commands that run after every job.
- **script:** The shell commands to be executed by the runner.
- **only/except:** Controls when a job is created (e.g., only on `main` branch).
- **rules:** A more powerful alternative to `only/except` for job control.

### 👉 Example: A Multi-Stage Pipeline
```yaml
image: alpine:latest

stages:
  - build
  - test
  - deploy

build-job:
  stage: build
  script:
    - echo "Compiling the code..."
    - mkdir build
    - touch build/app.bin

test-job:
  stage: test
  script:
    - echo "Running unit tests..."
    - test -f build/app.bin

deploy-job:
  stage: deploy
  script:
    - echo "Deploying to production..."
  only:
    - main
```

## Practical Tip
Use the **CI Lint** tool in the GitLab UI (under Build > Pipeline editor) to validate your `.gitlab-ci.yml` syntax before committing.
