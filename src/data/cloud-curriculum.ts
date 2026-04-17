export const cloudComputingCurriculum = [
  {
    id: 'cloud-beginner',
    title: 'Cloud Computing Beginner',
    description: 'Learn the basics of Cloud Computing and AWS.',
    estimatedDuration: '2 hours',
    modules: [
      {
        id: 'cloud-intro',
        title: 'Introduction to Cloud',
        description: 'Understand cloud concepts and benefits.',
        duration: '30 mins',
        type: 'interactive',
        path: '/cloud/intro.md',
        icon: 'Cloud',
        color: 'sky',
        bgColor: 'sky',
        xp: 100
      },
      {
        id: 'aws-basics',
        title: 'AWS Fundamentals',
        description: 'Get started with AWS services.',
        duration: '40 mins',
        type: 'interactive',
        path: '/cloud/aws-basics.md',
        icon: 'Cloud',
        color: 'sky',
        bgColor: 'sky',
        xp: 150
      },
      {
        id: 'cloud-beginner-challenge',
        title: 'Cloud Beginner Challenge',
        description: 'Test your cloud fundamentals.',
        duration: '50 mins',
        type: 'interactive',
        path: '/cloud/beginner-challenge.md',
        icon: 'Award',
        color: 'amber',
        bgColor: 'amber',
        xp: 300
      }
    ]
  },
  {
    id: 'cloud-intermediate',
    title: 'Cloud Computing Intermediate',
    description: 'Master core AWS services.',
    estimatedDuration: '3 hours',
    modules: [
      {
        id: 'aws-compute',
        title: 'AWS Compute',
        description: 'Learn EC2 and Lambda.',
        duration: '60 mins',
        type: 'interactive',
        path: '/cloud/compute.md',
        icon: 'Cloud',
        color: 'sky',
        bgColor: 'sky',
        xp: 250
      },
      {
        id: 'aws-storage',
        title: 'AWS Storage',
        description: 'Understand S3 and EBS.',
        duration: '60 mins',
        type: 'interactive',
        path: '/cloud/storage.md',
        icon: 'Cloud',
        color: 'sky',
        bgColor: 'sky',
        xp: 300
      },
      {
        id: 'cloud-intermediate-challenge',
        title: 'Cloud Intermediate Challenge',
        description: 'Practice AWS services.',
        duration: '60 mins',
        type: 'interactive',
        path: '/cloud/intermediate-challenge.md',
        icon: 'Award',
        color: 'amber',
        bgColor: 'amber',
        xp: 500
      }
    ]
  },
  {
    id: 'cloud-advanced',
    title: 'Cloud Computing Advanced',
    description: 'Learn advanced cloud architecture.',
    estimatedDuration: '4 hours',
    modules: [
      {
        id: 'aws-architecture',
        title: 'Cloud Architecture',
        description: 'Learn how to design scalable cloud systems.',
        duration: '120 mins',
        type: 'interactive',
        path: '/cloud/architecture.md',
        icon: 'Cloud',
        color: 'sky',
        bgColor: 'sky',
        xp: 600
      },
      {
        id: 'cloud-advanced-capstone',
        title: 'Cloud Capstone',
        description: 'Build a complete cloud application.',
        duration: '120 mins',
        type: 'interactive',
        path: '/cloud/advanced-challenge.md',
        icon: 'Award',
        color: 'rose',
        bgColor: 'rose',
        xp: 1200
      }
    ]
  }
];
