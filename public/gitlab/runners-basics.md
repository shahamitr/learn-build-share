# GitLab Runners (Basics)

In this module, we'll explore the role of GitLab Runners in executing your CI/CD jobs.

## What is a GitLab Runner?
A GitLab Runner is an application that works with GitLab CI/CD to run jobs in a pipeline. It can be installed on your local machine, a virtual machine, or a container.

## Runner Types
- **Shared Runners:** Available to all projects in a GitLab instance. Ideal for general-purpose jobs.
- **Group Runners:** Available to all projects within a specific group.
- **Specific (Project) Runners:** Dedicated to a single project. Used for specialized environments or security requirements.

## Executors
The executor determines the environment in which the job runs.
- **Shell:** Runs jobs directly on the runner's host machine.
- **Docker:** Runs jobs inside a Docker container. (Most common)
- **Kubernetes:** Runs jobs as pods in a Kubernetes cluster.
- **VirtualBox/Parallels:** Runs jobs in a virtual machine.
- **SSH:** Connects to a remote server to run jobs.

## Runner Tags
Tags are used to match jobs with specific runners.
- **Runner Side:** You can assign tags to a runner (e.g., `gpu`, `linux`, `docker`).
- **Job Side:** You can specify tags in your `.gitlab-ci.yml` file.
```yaml
test-job:
  stage: test
  script:
    - echo "Running on a GPU runner"
  tags:
    - gpu
```

## How Runners Work
1. **Registration:** You register a runner with a GitLab instance using a registration token.
2. **Polling:** The runner periodically polls GitLab for new jobs.
3. **Execution:** When a job is assigned, the runner pulls the necessary environment (e.g., Docker image) and executes the script.
4. **Reporting:** The runner sends the job logs and status back to GitLab.

## Practical Tip
Always use the **Docker executor** for a clean, isolated, and reproducible build environment.
