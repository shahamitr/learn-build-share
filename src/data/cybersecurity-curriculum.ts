export const cybersecurityCurriculum = [
  {
    id: 'beginner',
    level: 'Beginner',
    title: '🟢 Beginner Level (Foundation)',
    description: 'Build your base understanding of cybersecurity, networking, and OS basics.',
    modules: [
      {
        id: 'cyber-foundations',
        title: 'Core Concepts & CIA Triad',
        description: 'What is Cybersecurity, CIA Triad, Types of Hackers, and Common Threats.',
        path: '/cybersecurity/foundations.md'
      },
      {
        id: 'cyber-networking-os',
        title: 'Networking & OS Basics',
        description: 'IP/MAC addresses, DNS, HTTP/S, Ports, and Windows/Linux fundamentals.',
        path: '/cybersecurity/networking-os.md'
      },
      {
        id: 'cyber-security-tools',
        title: 'Security Concepts & Tools',
        description: 'Auth vs Auth, Encryption basics, Hashing, and Intro to Wireshark/Terminal.',
        path: '/cybersecurity/security-tools.md'
      }
    ]
  },
  {
    id: 'intermediate',
    level: 'Intermediate',
    title: '🟡 Intermediate Level (Practical)',
    description: 'Start performing real security tasks, web testing, and ethical hacking basics.',
    modules: [
      {
        id: 'cyber-web-security',
        title: 'Network & Web Security',
        description: 'Subnetting, Firewalls, VPNs, and common web vulnerabilities (SQLi, XSS).',
        path: '/cybersecurity/web-security.md'
      },
      {
        id: 'cyber-ethical-hacking',
        title: 'Ethical Hacking & Tools',
        description: 'Reconnaissance, Scanning, Enumeration, Nmap, Burp Suite, and Metasploit.',
        path: '/cybersecurity/ethical-hacking.md'
      },
      {
        id: 'cyber-crypto-system',
        title: 'Cryptography & System Security',
        description: 'PKI, SSL/TLS, System Hardening, and Basic Scripting (Bash/Python).',
        path: '/cybersecurity/crypto-system.md'
      }
    ]
  },
  {
    id: 'advanced',
    level: 'Advanced',
    title: '🔴 Advanced Level (Professional)',
    description: 'Move toward professional cybersecurity roles with specialized skills.',
    modules: [
      {
        id: 'cyber-vapt',
        title: 'Security Architecture & VAPT',
        description: 'Cloud Security, Secure Coding, VAPT techniques, and Privilege Escalation.',
        path: '/cybersecurity/vapt.md'
      },
      {
        id: 'cyber-soc-malware',
        title: 'SOC, Incident Response & Malware',
        description: 'SIEM (Splunk), Log Analysis, Incident Lifecycle, and Malware Analysis.',
        path: '/cybersecurity/soc-malware.md'
      },
      {
        id: 'cyber-forensics-grc',
        title: 'Forensics, GRC & Advanced Crypto',
        description: 'Digital Forensics, ISO 27001, Risk Management, and Advanced Cryptography.',
        path: '/cybersecurity/forensics-grc.md'
      }
    ]
  }
];
