export const kubernetesCurriculum = [
  {
    id: 'beginner',
    level: 'Beginner',
    title: 'Kubernetes Basics',
    description: 'Learn the core concepts of container orchestration.',
    modules: [
      {
        id: 'intro-to-k8s',
        title: 'Introduction to Kubernetes',
        description: 'What is Kubernetes? Explore the architecture and core components.',
        path: '/kubernetes/intro.md'
      },
      {
        id: 'k8s-objects',
        title: 'Kubernetes Objects',
        description: 'Learn about Pods, Deployments, and Services.',
        path: '/kubernetes/objects.md'
      }
    ]
  },
  {
    id: 'intermediate',
    level: 'Intermediate',
    title: 'Managing Applications',
    description: 'Master application deployment and management in Kubernetes.',
    modules: [
      {
        id: 'k8s-config',
        title: 'ConfigMaps & Secrets',
        description: 'Learn how to manage application configuration and sensitive data.',
        path: '/kubernetes/config.md'
      },
      {
        id: 'k8s-storage',
        title: 'Storage in Kubernetes',
        description: 'Understand Persistent Volumes and Persistent Volume Claims.',
        path: '/kubernetes/storage.md'
      }
    ]
  },
  {
    id: 'advanced',
    level: 'Advanced',
    title: 'Advanced Kubernetes',
    description: 'Learn advanced Kubernetes features for production-ready clusters.',
    modules: [
      {
        id: 'k8s-networking',
        title: 'Advanced Networking',
        description: 'Learn about Ingress, Network Policies, and Service Mesh.',
        path: '/kubernetes/networking.md'
      }
    ]
  }
];
