# Forensics, GRC & Advanced Crypto

In this module, we'll explore the more advanced concepts of digital forensics, Governance, Risk, and Compliance (GRC), and advanced cryptography.

## Digital Forensics
- **Forensics Process:**
    1. **Identification:** Locating potential evidence.
    2. **Preservation:** Ensuring the evidence is not altered (Write Blockers, Hashing).
    3. **Collection:** Acquiring the data (Disk Imaging, Memory Dumps).
    4. **Analysis:** Examining the data to find relevant information.
    5. **Reporting:** Presenting the findings in a clear and concise manner.
- **Forensics Artifacts:**
    - **File System:** MFT (Master File Table), Deleted files, Slack space.
    - **Registry:** User activity, installed software, system configuration.
    - **Memory:** Running processes, network connections, passwords in RAM.
    - **Logs:** System, application, and network logs.
- **Tools:** FTK Imager, Autopsy, Volatility (Memory Forensics), EnCase.

## Governance, Risk, and Compliance (GRC)
- **Governance:** The framework of rules and practices by which an organization ensures accountability, fairness, and transparency.
- **Risk Management:**
    - **Risk Assessment:** Identifying, analyzing, and evaluating risks.
    - **Risk Treatment:** Avoidance, Mitigation (Reduction), Transfer (Insurance), Acceptance.
- **Compliance & Frameworks:**
    - **ISO 27001:** International standard for ISMS (Information Security Management System).
    - **NIST Cybersecurity Framework (CSF):** Identify, Protect, Detect, Respond, Recover.
    - **PCI DSS:** Security standard for organizations that handle credit cards.
    - **GDPR / HIPAA:** Regulations for data privacy and healthcare information.
- **Security Policies:** Acceptable Use Policy (AUP), Password Policy, Incident Response Policy.

## Advanced Cryptography
- **Key Exchange (Diffie-Hellman):** A method for two parties to securely exchange a secret key over an insecure channel.
- **Elliptic Curve Cryptography (ECC):** Provides the same level of security as RSA but with much smaller key sizes, making it more efficient.
- **Perfect Forward Secrecy (PFS):** Ensures that if a long-term private key is compromised, past session keys remain secure.
- **Quantum-Resistant Cryptography:** Cryptographic algorithms that are thought to be secure against an attack by a quantum computer.
- **Homomorphic Encryption:** Allows computations to be performed on encrypted data without first decrypting it.

## Practical Tip
When performing digital forensics, always maintain a **Chain of Custody** to ensure the integrity and admissibility of the evidence in a court of law.
