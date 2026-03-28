# Security Concepts & Tools

In this module, we'll explore the core concepts and tools used in cybersecurity.

## Core Security Concepts
- **Authentication vs Authorization:**
    - **Authentication (AuthN):** Verifying identity (Who are you?). Methods: Something you know (password), something you have (token), something you are (biometrics).
    - **Authorization (AuthZ):** Verifying permissions (What can you do?).
- **MFA (Multi-Factor Authentication):** Using two or more factors for authentication (e.g., Password + SMS Code).
- **Encryption vs Hashing:**
    - **Encryption:** Two-way process (can be decrypted). Used for confidentiality.
    - **Hashing:** One-way process (cannot be reversed). Used for integrity. Common algorithms: MD5 (weak), SHA-256, bcrypt.
- **Salting:** Adding random data to a password before hashing to prevent rainbow table attacks.

## Security Tools (Essential)
- **Wireshark:** Network protocol analyzer. Used for capturing and analyzing packets.
- **Nmap (Network Mapper):** Used for network discovery and security auditing (Port scanning).
- **Metasploit:** A framework for developing, testing, and executing exploit code against a remote target machine.
- **Burp Suite:** An integrated platform for performing security testing of web applications.
- **John the Ripper / Hashcat:** Password cracking tools.
- **Snort:** Open-source intrusion detection system (IDS).

## Defensive Tools
- **Firewalls:** Packet filtering, Stateful inspection, Next-Generation Firewalls (NGFW).
- **IDS/IPS:** Intrusion Detection System (detects) vs Intrusion Prevention System (blocks).
- **SIEM (Security Information and Event Management):** Centralized logging and analysis (e.g., Splunk, ELK).
- **EDR (Endpoint Detection and Response):** Monitoring endpoints for suspicious activity.

## Practical Tip
Always use strong, unique passwords and enable MFA wherever possible. Use a password manager like Bitwarden or 1Password to manage your credentials securely.
