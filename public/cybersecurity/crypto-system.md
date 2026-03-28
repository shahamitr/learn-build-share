# Cryptography & System Security

In this module, we'll explore the more advanced concepts of cryptography and system security.

## Advanced Cryptography
- **Symmetric vs Asymmetric Encryption:**
    - **Symmetric:** One key for both encryption and decryption (AES, DES). Fast, but key distribution is a challenge.
    - **Asymmetric:** Public key for encryption, Private key for decryption (RSA, ECC, Diffie-Hellman). Solves key distribution but is slower.
- **PKI (Public Key Infrastructure):** A framework that manages digital certificates and public-key encryption. Components: Certificate Authority (CA), Registration Authority (RA), Certificate Revocation List (CRL).
- **SSL/TLS (Transport Layer Security):**
    - **Handshake Process:** Negotiating cipher suites, authenticating the server, and establishing session keys.
    - **HTTPS:** HTTP over TLS (Port 443).
- **Digital Signatures:** Provides authentication, non-repudiation, and integrity. Uses the sender's private key to sign and public key to verify.
- **Steganography:** Hiding information within other non-secret data (e.g., hiding text in an image).

## System Hardening & Security
- **OS Hardening (Windows & Linux):**
    - **Disable Unnecessary Services:** Reducing the attack surface.
    - **Principle of Least Privilege:** Using standard user accounts instead of admin/root.
    - **Password Policies:** Enforcing complexity, length, and rotation.
    - **Patch Management:** Regularly updating the OS and applications to fix known vulnerabilities.
- **Endpoint Security:**
    - **Antivirus/Antimalware:** Signature-based vs Heuristic detection.
    - **Host-based Firewall:** Controlling traffic at the device level.
    - **Disk Encryption:** Protecting data at rest (BitLocker, FileVault, LUKS).
- **Logging & Auditing:** Enabling logs for authentication attempts, file access, and system changes.

## Security Scripting (Intro)
- **Bash Scripting:** Automating tasks like log parsing, user management, and simple network checks.
- **Python for Security:** Using libraries like `requests` for web testing, `scapy` for packet manipulation, and `os` for system interaction.

## Practical Tip
When hardening a system, always follow a security baseline like the **CIS Benchmarks** or **NIST Guidelines** to ensure you're covering all necessary security controls.
