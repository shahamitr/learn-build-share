# 24. Dependency Management

## Dependabot

Dependabot automatically checks for outdated dependencies and opens PRs to update them.

### Security Updates

GitHub alerts you if your dependencies have known vulnerabilities (CVEs).

## Lab: Enable Dependabot Alerts

1.  **Settings:** Go to **Settings** -> **Code security and analysis**.
2.  **Enable:**
    *   **Dependabot alerts**: Enable.
    *   **Dependabot security updates**: Enable.
3.  **Configure:** Create `.github/dependabot.yml`:
    ```yaml
    version: 2
    updates:
      - package-ecosystem: "npm"
        directory: "/"
        schedule:
          interval: "weekly"
    ```
4.  **Wait:** Dependabot will eventually open a PR if updates are available.
