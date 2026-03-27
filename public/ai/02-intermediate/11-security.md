# 11. Secure Use of AI in Development

## Navigating Security Risks

Using AI in development introduces new security vectors. You must be vigilant about data privacy and code vulnerabilities.

### Key Risks

1.  **Data Leakage:** Pasting sensitive data (API keys, PII, proprietary code) into public AI models.
2.  **Insecure Code Generation:** AI often prioritizes functionality over security (e.g., SQL injection, XSS).
3.  **Supply Chain Attacks:** Hallucinated packages could lead to installing malware.

### Best Practices

*   **Sanitize Inputs:** Never paste secrets into chat.
*   **Review Generated Code:** Always audit for security flaws.
*   **Use Enterprise Mode:** If available, use AI tools with data privacy guarantees (no training on your data).

![Security Risks](https://placehold.co/600x400?text=Data+Leakage+Vulnerabilities)

## Lab: Audit for Leaks

### Step 1: The Risky Prompt

Imagine you want to debug a database connection issue.

*   *Risky:* "Here is my config file, why can't I connect? `const db = { host: '10.0.0.1', user: 'admin', pass: 'SuperSecret123' };`"

### Step 2: Sanitize It

Rewrite the prompt to be safe:
> "I have a database config object with host, user, and password. I'm getting a 'Connection Refused' error. What are common causes?"

### Step 3: Analyze Generated Code

Ask AI to generate a login form handler in PHP.
*   Does it use `md5` for passwords? (Insecure!)
*   Does it sanitize `$_POST` input?

If it uses `md5`, correct it:
> "This is insecure. Rewrite it using `password_hash` and `password_verify`."
