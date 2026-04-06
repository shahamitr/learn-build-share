import { Workflow, Play, Settings } from 'lucide-react';

export const cybersecurityCurriculum = [
  {
    id: 'beginner',
    title: 'Beginner Level — Foundation',
    description: 'Start here to build your base understanding.',
    estimatedDuration: '1 hour 50 mins',
    icon: Play,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    modules: [
      { id: 'cyber-core-concepts', title: '01. Core Concepts', duration: '20 min', type: 'theory', path: '/cybersecurity/foundations.md' },
      { id: 'cyber-networking-basics', title: '02. Networking Basics', duration: '25 min', type: 'theory', path: '/cybersecurity/networking.md' },
      { id: 'cyber-os-basics', title: '03. Operating Systems Basics', duration: '20 min', type: 'theory', path: '/cybersecurity/os-basics.md' },
      { id: 'cyber-security-concepts', title: '04. Basic Security Concepts', duration: '25 min', type: 'theory', path: '/cybersecurity/security-concepts.md' },
      { id: 'cyber-tools-intro', title: '05. Tools (Intro Level)', duration: '20 min', type: 'lab', path: '/cybersecurity/tools-intro.md' }
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediate Level — Practical Skills',
    description: 'Now you start doing real security tasks.',
    estimatedDuration: '3 hours 45 mins',
    icon: Workflow,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    modules: [
      { id: 'cyber-networking-security', title: '06. Networking & Security', duration: '30 min', type: 'lab', path: '/cybersecurity/networking-security.md' },
      { id: 'cyber-web-security', title: '07. Web Security Basics', duration: '35 min', type: 'theory', path: '/cybersecurity/web-security.md' },
      { id: 'cyber-ethical-hacking-basics', title: '08. Ethical Hacking Basics', duration: '30 min', type: 'lab', path: '/cybersecurity/ethical-hacking.md' },
      { id: 'cyber-tools-hands-on', title: '09. Tools (Hands-on)', duration: '40 min', type: 'lab', path: '/cybersecurity/tools-hands-on.md' },
      { id: 'cyber-crypto-intermediate', title: '10. Cryptography (Intermediate)', duration: '25 min', type: 'theory', path: '/cybersecurity/crypto-intermediate.md' },
      { id: 'cyber-system-security', title: '11. System Security', duration: '30 min', type: 'lab', path: '/cybersecurity/system-security.md' },
      { id: 'cyber-scripting', title: '12. Basic Scripting', duration: '35 min', type: 'lab', path: '/cybersecurity/scripting.md' }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Level — Professional Skills',
    description: 'This is where you move toward real cybersecurity roles.',
    estimatedDuration: '4 hours 25 mins',
    icon: Settings,
    color: 'text-rose-600',
    bgColor: 'bg-rose-100',
    modules: [
      { id: 'cyber-adv-domains', title: '13. Advanced Security Domains', duration: '40 min', type: 'theory', path: '/cybersecurity/adv-domains.md' },
      { id: 'cyber-adv-hacking', title: '14. Advanced Ethical Hacking', duration: '45 min', type: 'lab', path: '/cybersecurity/adv-hacking.md' },
      { id: 'cyber-soc', title: '15. Security Operations (SOC)', duration: '40 min', type: 'theory', path: '/cybersecurity/soc.md' },
      { id: 'cyber-malware', title: '16. Malware & Threat Analysis', duration: '35 min', type: 'theory', path: '/cybersecurity/malware.md' },
      { id: 'cyber-forensics', title: '17. Digital Forensics', duration: '40 min', type: 'lab', path: '/cybersecurity/forensics.md' },
      { id: 'cyber-governance', title: '18. Governance & Compliance', duration: '30 min', type: 'theory', path: '/cybersecurity/governance.md' },
      { id: 'cyber-adv-crypto', title: '19. Advanced Cryptography', duration: '35 min', type: 'theory', path: '/cybersecurity/adv-crypto.md' }
    ]
  }
];
