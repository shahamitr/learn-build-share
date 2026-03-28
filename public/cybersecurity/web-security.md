# Network & Web Security

In this module, we'll dive deeper into network security and common web vulnerabilities.

## Network Security (Intermediate)
- **Subnetting:** Dividing a network into smaller, more manageable sub-networks. IPv4 Subnet Mask (e.g., 255.255.255.0), CIDR notation (/24).
- **Firewalls & IDS/IPS:**
    - **Firewalls:** Packet filtering, Stateful inspection, Next-Generation Firewalls (NGFW).
    - **IDS/IPS:** Intrusion Detection System (detects) vs Intrusion Prevention System (blocks).
- **VPN (Virtual Private Network):** Creates a secure, encrypted tunnel over a public network. Protocols: OpenVPN, IPsec, WireGuard.
- **Network Segmentation:** Dividing a network into smaller segments to improve security and performance (VLANs).
- **Packet Analysis (Wireshark):** Capturing and analyzing network traffic to identify security issues, troubleshoot connectivity, and detect malicious activity.

## Web Application Security
- **How Web Apps Work:** Client-server model, HTTP/S, Request/Response cycle, Cookies, Sessions.
- **OWASP Top 10 (2021):**
    1. **Broken Access Control:** Users can access data or perform actions outside their permissions.
    2. **Cryptographic Failures:** Sensitive data is not properly protected (e.g., weak encryption).
    3. **Injection:** SQLi, NoSQLi, OS Command Injection.
    4. **Insecure Design:** Flaws in the application's architecture.
    5. **Security Misconfiguration:** Improperly configured security settings.
    6. **Vulnerable and Outdated Components:** Using libraries or frameworks with known vulnerabilities.
    7. **Identification and Authentication Failures:** Weak passwords, improper session management.
    8. **Software and Data Integrity Failures:** Insecure updates, CI/CD pipeline vulnerabilities.
    9. **Security Logging and Monitoring Failures:** Insufficient logging and monitoring to detect attacks.
    10. **Server-Side Request Forgery (SSRF):** An attacker can trick a server into making requests to internal or external resources.

## Practical Tip
When testing for web vulnerabilities, always use a tool like Burp Suite or OWASP ZAP to intercept and modify HTTP requests. Use `sqlmap` for automated SQL injection testing.
