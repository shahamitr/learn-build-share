# 27. Security in CI/CD

## Secret Scanning

Ensure no secrets are committed.

## Dependency Scanning

Use `dependabot` or other tools to scan for vulnerabilities.

## Lab: Scan Dependencies

1.  **Workflow:**
    ```yaml
    steps:
      - uses: actions/checkout@v4
      - name: Audit NPM
        run: npm audit
    ```
2.  **Run:** This will fail if your project has vulnerabilities.
