import { Workflow, Play, Settings } from 'lucide-react';

export const kubernetesCurriculum = [
  {
    id: 'beginner',
    title: 'Beginner Level — Foundations',
    description: 'Start by understanding containers and why Kubernetes exists.',
    estimatedDuration: '2 hours 10 mins',
    icon: Play,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    modules: [
      { id: 'k8s-core-concepts', title: '01. Core Concepts', duration: '20 min', type: 'theory', path: '/kubernetes/foundations.md' },
      { id: 'k8s-prerequisites', title: '02. Prerequisites', duration: '25 min', type: 'theory', path: '/kubernetes/intro.md' },
      { id: 'k8s-architecture', title: '03. Kubernetes Architecture', duration: '30 min', type: 'theory', path: '/kubernetes/foundations.md' },
      { id: 'k8s-key-objects', title: '04. Key Objects', duration: '25 min', type: 'theory', path: '/kubernetes/objects.md' },
      { id: 'k8s-kubectl', title: '05. kubectl Basics', duration: '30 min', type: 'lab', path: '/kubernetes/objects-kubectl.md' }
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediate Level — Practical Skills',
    description: 'Now you start working with real workloads.',
    estimatedDuration: '4 hours 25 mins',
    icon: Workflow,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    modules: [
      { id: 'k8s-workloads', title: '06. Workloads & Controllers', duration: '35 min', type: 'lab', path: '/kubernetes/workloads-networking.md' },
      { id: 'k8s-networking', title: '07. Networking', duration: '40 min', type: 'lab', path: '/kubernetes/networking.md' },
      { id: 'k8s-config', title: '08. Configuration Management', duration: '30 min', type: 'theory', path: '/kubernetes/config.md' },
      { id: 'k8s-storage', title: '09. Storage', duration: '35 min', type: 'lab', path: '/kubernetes/storage.md' },
      { id: 'k8s-scaling', title: '10. Scaling & Updates', duration: '40 min', type: 'lab', path: '/kubernetes/scaling-helm-debug.md' },
      { id: 'k8s-helm', title: '11. Helm', duration: '30 min', type: 'lab', path: '/kubernetes/scaling-helm-debug.md' },
      { id: 'k8s-debugging', title: '12. Debugging', duration: '35 min', type: 'lab', path: '/kubernetes/scaling-helm-debug.md' },
      { id: 'k8s-describe', title: '12.1 Describing Resources', duration: '20 min', type: 'lab', path: '/kubernetes/describe.md' }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Level — Production & DevOps Expertise',
    description: 'This is where you handle real-world systems.',
    estimatedDuration: '5 hours',
    icon: Settings,
    color: 'text-rose-600',
    bgColor: 'bg-rose-100',
    modules: [
      { id: 'k8s-adv-arch', title: '13. Advanced Architecture', duration: '45 min', type: 'theory', path: '/kubernetes/arch-security.md' },
      { id: 'k8s-security', title: '14. Security', duration: '40 min', type: 'theory', path: '/kubernetes/arch-security.md' },
      { id: 'k8s-adv-networking', title: '15. Advanced Networking', duration: '45 min', type: 'theory', path: '/kubernetes/networking-cicd.md' },
      { id: 'k8s-cicd', title: '16. CI/CD Integration', duration: '40 min', type: 'lab', path: '/kubernetes/networking-cicd.md' },
      { id: 'k8s-observability', title: '17. Observability', duration: '45 min', type: 'lab', path: '/kubernetes/observability-optimization.md' },
      { id: 'k8s-adv-deployments', title: '18. Advanced Deployments', duration: '40 min', type: 'lab', path: '/kubernetes/observability-optimization.md' },
      { id: 'k8s-performance', title: '19. Performance & Optimization', duration: '45 min', type: 'theory', path: '/kubernetes/observability-optimization.md' }
    ]
  }
];
