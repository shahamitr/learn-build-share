# Security Architecture & VAPT

In this module, we'll explore the more advanced concepts of security architecture and VAPT.

## Security Architecture & Design
- **Network Architecture:**
    - **Demilitarized Zone (DMZ):** A sub-network that contains and exposes an organization's external-facing services to an untrusted network (the internet).
    - **Micro-segmentation:** Dividing the network into smaller, isolated segments to limit lateral movement.
    - **Zero Trust Architecture (ZTA):** "Never trust, always verify." Every user and device must be authenticated and authorized.
- **Cloud Security (AWS/Azure/GCP):**
    - **Shared Responsibility Model:** The cloud provider is responsible for the security *of* the cloud, while the customer is responsible for security *in* the cloud.
    - **Identity and Access Management (IAM):** Managing users, groups, roles, and permissions in the cloud.
    - **Cloud-Native Security:** Using tools like AWS Security Groups, Azure Network Security Groups (NSGs), and GCP Firewall Rules.
    - **S3 Bucket Security:** Preventing data leaks through misconfigured storage.

## Advanced VAPT (Vulnerability Assessment & Penetration Testing)
- **VAPT Methodology:**
    1. **Planning & Scoping:** Defining the goals and boundaries of the test.
    2. **Information Gathering:** Reconnaissance and footprinting.
    3. **Vulnerability Analysis:** Identifying potential weaknesses using tools like Nessus or OpenVAS.
    4. **Exploitation:** Attempting to exploit vulnerabilities to gain access.
    5. **Post-Exploitation:** Maintaining access, privilege escalation, and data exfiltration.
    6. **Reporting:** Documenting findings, risks, and remediation steps.
- **Privilege Escalation:**
    - **Horizontal:** Gaining access to another user's account with the same level of privilege.
    - **Vertical:** Gaining higher-level access (e.g., from a standard user to root/SYSTEM).
    - **Techniques:** Exploiting misconfigured services, kernel vulnerabilities, weak file permissions, and stored credentials.
- **Secure Coding Principles:**
    - **Input Validation:** Sanitizing all user input to prevent injection attacks.
    - **Output Encoding:** Preventing XSS by encoding data before displaying it in the browser.
    - **Secure Session Management:** Using secure cookies, session timeouts, and unique session IDs.
    - **Error Handling:** Avoiding detailed error messages that reveal system information.

## Practical Tip
When performing VAPT, always follow a recognized methodology like **PTES (Penetration Testing Execution Standard)** or **OWASP Testing Guide** to ensure a thorough and systematic assessment.
