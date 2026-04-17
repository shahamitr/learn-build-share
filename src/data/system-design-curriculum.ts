export const systemDesignCurriculum = [
  {
    id: 'system-design-beginner',
    title: 'System Design Beginner',
    description: 'Learn the basics of system design and scalability.',
    estimatedDuration: '2 hours',
    modules: [
      {
        id: 'sd-intro',
        title: 'Introduction to System Design',
        description: 'Understand the basics of scalability and reliability.',
        duration: '30 mins',
        type: 'interactive',
        path: '/system-design/intro.md',
        icon: 'Layout',
        color: 'rose',
        bgColor: 'rose',
        xp: 100
      },
      {
        id: 'sd-load-balancing',
        title: 'Load Balancing',
        description: 'Learn how to distribute traffic.',
        duration: '40 mins',
        type: 'interactive',
        path: '/system-design/load-balancing.md',
        icon: 'Layout',
        color: 'rose',
        bgColor: 'rose',
        xp: 150
      },
      {
        id: 'sd-beginner-challenge',
        title: 'System Design Beginner Challenge',
        description: 'Test your system design basics.',
        duration: '50 mins',
        type: 'interactive',
        path: '/system-design/beginner-challenge.md',
        icon: 'Award',
        color: 'amber',
        bgColor: 'amber',
        xp: 300
      }
    ]
  },
  {
    id: 'system-design-intermediate',
    title: 'System Design Intermediate',
    description: 'Master databases and caching strategies.',
    estimatedDuration: '3 hours',
    modules: [
      {
        id: 'sd-databases',
        title: 'Database Design',
        description: 'Understand SQL vs NoSQL and sharding.',
        duration: '60 mins',
        type: 'interactive',
        path: '/system-design/databases.md',
        icon: 'Layout',
        color: 'rose',
        bgColor: 'rose',
        xp: 250
      },
      {
        id: 'sd-caching',
        title: 'Caching Strategies',
        description: 'Learn how to use Redis and Memcached.',
        duration: '60 mins',
        type: 'interactive',
        path: '/system-design/caching.md',
        icon: 'Layout',
        color: 'rose',
        bgColor: 'rose',
        xp: 300
      },
      {
        id: 'sd-intermediate-challenge',
        title: 'System Design Intermediate Challenge',
        description: 'Practice system design.',
        duration: '60 mins',
        type: 'interactive',
        path: '/system-design/intermediate-challenge.md',
        icon: 'Award',
        color: 'amber',
        bgColor: 'amber',
        xp: 500
      }
    ]
  },
  {
    id: 'system-design-advanced',
    title: 'System Design Advanced',
    description: 'Learn advanced architectural patterns.',
    estimatedDuration: '4 hours',
    modules: [
      {
        id: 'sd-microservices',
        title: 'Microservices Architecture',
        description: 'Learn how to design microservices.',
        duration: '120 mins',
        type: 'interactive',
        path: '/system-design/microservices.md',
        icon: 'Layout',
        color: 'rose',
        bgColor: 'rose',
        xp: 600
      },
      {
        id: 'sd-advanced-capstone',
        title: 'System Design Capstone',
        description: 'Design a complex system.',
        duration: '120 mins',
        type: 'interactive',
        path: '/system-design/advanced-challenge.md',
        icon: 'Award',
        color: 'rose',
        bgColor: 'rose',
        xp: 1200
      }
    ]
  }
];
