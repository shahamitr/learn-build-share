# 25. Security Features

## Secret Scanning

GitHub scans repositories for known secret formats (API keys, tokens) and alerts you or the service provider to revoke them.

### Vulnerability Alerts

Receive alerts when code in your repository depends on packages with security vulnerabilities.

### Security Policies

Create a `SECURITY.md` file to tell users how to report security vulnerabilities responsibly.

## Lab: Configure Repository Security Settings

1.  **Create Policy:** Create `SECURITY.md` in the root.
2.  **Content:** "Please report security issues to security@example.com."
3.  **Settings:** Go to **Settings** -> **Code security and analysis**.
4.  **Enable:** Enable **Secret scanning** (if available for your plan/public repo).
