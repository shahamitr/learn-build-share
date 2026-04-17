export const devopsCurriculum = [
  {
    id: 'devops-beginner',
    title: 'DevOps Beginner',
    description: 'Learn the basics of DevOps and CI/CD.',
    estimatedDuration: '2 hours',
    modules: [
      {
        id: 'devops-intro',
        title: 'Introduction to DevOps',
        description: 'Understand the DevOps culture and lifecycle.',
        duration: '30 mins',
        type: 'interactive',
        path: '/devops/intro.md',
        icon: 'Workflow',
        color: 'emerald',
        bgColor: 'emerald',
        xp: 100
      },
      {
        id: 'devops-ci-cd',
        title: 'CI/CD Basics',
        description: 'Learn the fundamentals of Continuous Integration and Deployment.',
        duration: '40 mins',
        type: 'interactive',
        path: '/devops/ci-cd.md',
        icon: 'Workflow',
        color: 'emerald',
        bgColor: 'emerald',
        xp: 150
      },
      {
        id: 'devops-beginner-challenge',
        title: 'DevOps Beginner Challenge',
        description: 'Test your DevOps fundamentals.',
        duration: '50 mins',
        type: 'interactive',
        path: '/devops/beginner-challenge.md',
        icon: 'Award',
        color: 'amber',
        bgColor: 'amber',
        xp: 300
      }
    ]
  },
  {
    id: 'devops-intermediate',
    title: 'DevOps Intermediate',
    description: 'Master Docker and containerization.',
    estimatedDuration: '3 hours',
    modules: [
      {
        id: 'devops-docker',
        title: 'Docker Basics',
        description: 'Learn how to containerize applications.',
        duration: '60 mins',
        type: 'interactive',
        path: '/devops/docker.md',
        icon: 'Workflow',
        color: 'emerald',
        bgColor: 'emerald',
        xp: 250
      },
      {
        id: 'devops-kubernetes',
        title: 'Kubernetes Basics',
        description: 'Understand container orchestration.',
        duration: '60 mins',
        type: 'interactive',
        path: '/devops/kubernetes.md',
        icon: 'Workflow',
        color: 'emerald',
        bgColor: 'emerald',
        xp: 300
      },
      {
        id: 'devops-intermediate-challenge',
        title: 'DevOps Intermediate Challenge',
        description: 'Practice containerization.',
        duration: '60 mins',
        type: 'interactive',
        path: '/devops/intermediate-challenge.md',
        icon: 'Award',
        color: 'amber',
        bgColor: 'amber',
        xp: 500
      }
    ]
  },
  {
    id: 'devops-advanced',
    title: 'DevOps Advanced',
    description: 'Learn advanced CI/CD and infrastructure as code.',
    estimatedDuration: '4 hours',
    modules: [
      {
        id: 'devops-iac',
        title: 'Infrastructure as Code',
        description: 'Learn Terraform basics.',
        duration: '120 mins',
        type: 'interactive',
        path: '/devops/iac.md',
        icon: 'Workflow',
        color: 'emerald',
        bgColor: 'emerald',
        xp: 600
      },
      {
        id: 'devops-advanced-capstone',
        title: 'DevOps Capstone',
        description: 'Build a complete CI/CD pipeline.',
        duration: '120 mins',
        type: 'interactive',
        path: '/devops/advanced-challenge.md',
        icon: 'Award',
        color: 'rose',
        bgColor: 'rose',
        xp: 1200
      }
    ]
  }
];
