# DevOps & Custom Runners

In this module, we'll explore the use of advanced GitLab DevOps features and the setup of custom runners for specialized needs.

## Advanced Deployment Strategies
- **Blue-Green Deployment:** Two identical environments (Blue and Green). One is live, while the other is updated and tested. Traffic is then switched.
- **Canary Releases:** Deploying the new version to a small subset of users (e.g., 5%) first to monitor for issues before a full rollout.
- **Rolling Deployments:** Gradually replacing instances of the old version with the new version.
- **Incremental Rollouts:** Using GitLab's built-in support for incremental rollouts to production.

## GitLab Auto DevOps
- **What is Auto DevOps?** A collection of pre-configured CI/CD templates that automatically detect, build, test, and deploy your application.
- **Key Features:**
    - **Auto Build:** Uses Cloud Native Buildpacks to create a Docker image.
    - **Auto Test:** Automatically runs unit tests.
    - **Auto Code Quality:** Analyzes code for potential issues.
    - **Auto SAST/DAST:** Scans for security vulnerabilities.
    - **Auto Deploy:** Deploys the application to Kubernetes.
    - **Auto Monitoring:** Sets up Prometheus monitoring.

## Custom Runners (Advanced)
- **Why Custom Runners?**
    - **Specialized Hardware:** Access to GPUs or specific OS versions.
    - **Security:** Running jobs in a private network or behind a firewall.
    - **Cost:** Using your own infrastructure to save on CI/CD minutes.
- **Setting up a Runner:**
    1. **Install:** Download and install the `gitlab-runner` binary.
    2. **Register:** Run `gitlab-runner register` and provide the GitLab URL and registration token.
    3. **Configure:** Edit `config.toml` to set the executor, concurrency, and other settings.
- **Scaling Runners:**
    - **Autoscaling:** Using the Docker Machine executor to automatically spin up and down runners based on demand.
    - **Kubernetes Executor:** Scaling runners as pods within a K8s cluster.

## Monitoring & Analytics
- **CI/CD Analytics:** Tracking pipeline success rates, duration, and frequency.
- **DORA Metrics:** Measuring Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service.
- **Value Stream Analytics:** Identifying bottlenecks in your development lifecycle.

## Practical Tip
When using custom runners, always use a **Docker executor** to ensure consistent results and avoid potential security issues. Regularly update your runner binary to the latest version.
