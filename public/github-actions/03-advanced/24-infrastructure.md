# 24. Infrastructure Automation

## Infrastructure as Code (IaC)

Use Actions to deploy infrastructure using Terraform, Pulumi, or CloudFormation.

### Example: Terraform

```yaml
steps:
  - uses: hashicorp/setup-terraform@v2
  - run: terraform init
  - run: terraform apply -auto-approve
```

## Lab: Deploy Infrastructure (Simulation)

1.  **Workflow:**
    ```yaml
    steps:
      - name: Terraform Init
        run: echo "Initializing Terraform..."
      - name: Terraform Plan
        run: echo "Planning resources..."
      - name: Terraform Apply
        run: echo "Creating AWS EC2 instances..."
    ```
