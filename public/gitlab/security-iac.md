# Security & IaC

In this module, we'll explore the use of security and Infrastructure as Code (IaC) in GitLab CI/CD pipelines.

## Security in CI/CD (DevSecOps)
- **Secret Management:**
    - **CI/CD Variables:** Masked and protected variables for sensitive data.
    - **External Secrets:** Integrating with Vault (HashiCorp) or Cloud Secret Managers.
- **Security Scanning:**
    - **SAST (Static Application Security Testing):** Analyzing source code for vulnerabilities (e.g., `semgrep`, `gitleaks`).
    - **DAST (Dynamic Application Security Testing):** Testing the running application for vulnerabilities.
    - **Dependency Scanning:** Checking libraries for known vulnerabilities (e.g., `npm audit`, `trivy`).
    - **Secret Detection:** Scanning the repository for accidentally committed secrets.
    - **Container Scanning:** Scanning Docker images for vulnerabilities.
- **Security Dashboard:** GitLab provides a centralized view of all vulnerabilities detected in your project.

## Infrastructure as Code (IaC)
- **Terraform Integration:**
    - **GitLab Managed Terraform State:** Securely storing and managing Terraform state files within GitLab.
    - **Terraform Plan in MRs:** Automatically running `terraform plan` and showing the output in Merge Requests.
    - **Terraform Apply:** Running `terraform apply` on the main branch after approval.
- **Kubernetes Integration:**
    - **GitLab Agent for Kubernetes:** A secure way to connect GitLab to your K8s cluster.
    - **Auto DevOps:** A pre-configured CI/CD pipeline that automatically builds, tests, and deploys your application to Kubernetes.
- **Ansible/Chef/Puppet:** Using CI/CD to automate configuration management tasks.

## Practical Tip
When using IaC, always use a version control system to manage your infrastructure code and use a CI/CD pipeline to deploy it. Use **policy as code** (e.g., OPA) to enforce security and compliance rules.
