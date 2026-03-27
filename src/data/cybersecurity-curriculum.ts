export const cybersecurityCurriculum = [
  {
    id: 'beginner',
    level: 'Beginner',
    title: 'Security Basics',
    description: 'Learn the core concepts of information security.',
    modules: [
      {
        id: 'intro-to-cybersecurity',
        title: 'Introduction to Cybersecurity',
        description: 'What is cybersecurity? Explore the CIA triad and common threats.',
        path: '/content/cybersecurity/intro.md'
      },
      {
        id: 'passwords-and-auth',
        title: 'Authentication and Passwords',
        description: 'Learn about strong passwords, MFA, and secure authentication.',
        path: '/content/cybersecurity/auth.md'
      }
    ]
  },
  {
    id: 'intermediate',
    level: 'Intermediate',
    title: 'Network Security',
    description: 'Understand how to secure networks and data in transit.',
    modules: [
      {
        id: 'network-fundamentals',
        title: 'Network Fundamentals',
        description: 'Learn about IP addresses, ports, protocols, and firewalls.',
        path: '/content/cybersecurity/network.md'
      },
      {
        id: 'encryption',
        title: 'Encryption Basics',
        description: 'Understand symmetric and asymmetric encryption, hashing, and digital signatures.',
        path: '/content/cybersecurity/encryption.md'
      }
    ]
  },
  {
    id: 'advanced',
    level: 'Advanced',
    title: 'Web Application Security',
    description: 'Learn how to secure web applications against common vulnerabilities.',
    modules: [
      {
        id: 'owasp-top-10',
        title: 'OWASP Top 10',
        description: 'Explore the most critical web application security risks (SQLi, XSS, etc.).',
        path: '/content/cybersecurity/owasp.md'
      }
    ]
  }
];
