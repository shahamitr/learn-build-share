export const kubernetesCurriculum = [
  {
    id: 'beginner',
    level: 'Beginner',
    title: '🟢 Beginner Level (Foundations)',
    description: 'Start by understanding containers, Kubernetes architecture, and basic objects.',
    modules: [
      {
        id: 'k8s-foundations',
        title: 'Foundations & Architecture',
        description: 'What is Kubernetes, why it is used, and a high-level look at cluster architecture.',
        path: '/kubernetes/foundations.md'
      },
      {
        id: 'k8s-objects-basics',
        title: 'Key Objects & kubectl',
        description: 'Learn about Pods, Deployments, Services, and mastering the kubectl CLI.',
        path: '/kubernetes/objects-kubectl.md'
      }
    ]
  },
  {
    id: 'intermediate',
    level: 'Intermediate',
    title: '🟡 Intermediate Level (Practical Skills)',
    description: 'Work with real workloads, networking, configuration, storage, and Helm.',
    modules: [
      {
        id: 'k8s-workloads-networking',
        title: 'Workloads & Networking',
        description: 'Deployments, StatefulSets, Services (ClusterIP, NodePort, LB), and Ingress.',
        path: '/kubernetes/workloads-networking.md'
      },
      {
        id: 'k8s-config-storage',
        title: 'Config & Storage',
        description: 'Managing application state with ConfigMaps, Secrets, PVs, and PVCs.',
        path: '/kubernetes/config-storage.md'
      },
      {
        id: 'k8s-scaling-helm-debug',
        title: 'Scaling, Helm & Debugging',
        description: 'Auto-scaling, Helm charts, and troubleshooting with logs and exec.',
        path: '/kubernetes/scaling-helm-debug.md'
      }
    ]
  },
  {
    id: 'advanced',
    level: 'Advanced',
    title: '🔴 Advanced Level (Production Expertise)',
    description: 'Master advanced architecture, security, observability, and optimization.',
    modules: [
      {
        id: 'k8s-arch-security',
        title: 'Architecture & Security',
        description: 'Control Plane deep dive, RBAC, Network Policies, and Security Standards.',
        path: '/kubernetes/arch-security.md'
      },
      {
        id: 'k8s-networking-cicd',
        title: 'Networking & CI/CD',
        description: 'CNI, Service Mesh (Istio), and integrating with GitLab CI/CD or Jenkins.',
        path: '/kubernetes/networking-cicd.md'
      },
      {
        id: 'k8s-observability-optimization',
        title: 'Observability & Optimization',
        description: 'Monitoring with Prometheus/Grafana, and cluster performance optimization.',
        path: '/kubernetes/observability-optimization.md'
      }
    ]
  }
];
