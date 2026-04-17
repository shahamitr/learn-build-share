export const dataScienceCurriculum = [
  {
    id: 'ds-beginner',
    title: 'Data Science Beginner',
    description: 'Learn the basics of Data Science and Python for Data.',
    estimatedDuration: '2 hours',
    modules: [
      {
        id: 'ds-intro',
        title: 'Introduction to Data Science',
        description: 'Understand the data science lifecycle.',
        duration: '30 mins',
        type: 'interactive',
        path: '/ds/intro.md',
        icon: 'Database',
        color: 'violet',
        bgColor: 'violet',
        xp: 100
      },
      {
        id: 'ds-python-basics',
        title: 'Python for Data',
        description: 'Learn Pandas and NumPy basics.',
        duration: '40 mins',
        type: 'interactive',
        path: '/ds/python-basics.md',
        icon: 'Database',
        color: 'violet',
        bgColor: 'violet',
        xp: 150
      },
      {
        id: 'ds-beginner-challenge',
        title: 'Data Science Beginner Challenge',
        description: 'Test your data manipulation skills.',
        duration: '50 mins',
        type: 'interactive',
        path: '/ds/beginner-challenge.md',
        icon: 'Award',
        color: 'amber',
        bgColor: 'amber',
        xp: 300
      }
    ]
  },
  {
    id: 'ds-intermediate',
    title: 'Data Science Intermediate',
    description: 'Master Data Visualization and basic ML.',
    estimatedDuration: '3 hours',
    modules: [
      {
        id: 'ds-visualization',
        title: 'Data Visualization',
        description: 'Learn Matplotlib and Seaborn.',
        duration: '60 mins',
        type: 'interactive',
        path: '/ds/visualization.md',
        icon: 'Database',
        color: 'violet',
        bgColor: 'violet',
        xp: 250
      },
      {
        id: 'ds-ml-basics',
        title: 'Machine Learning Basics',
        description: 'Understand Scikit-Learn.',
        duration: '60 mins',
        type: 'interactive',
        path: '/ds/ml-basics.md',
        icon: 'Database',
        color: 'violet',
        bgColor: 'violet',
        xp: 300
      },
      {
        id: 'ds-intermediate-challenge',
        title: 'Data Science Intermediate Challenge',
        description: 'Practice ML modeling.',
        duration: '60 mins',
        type: 'interactive',
        path: '/ds/intermediate-challenge.md',
        icon: 'Award',
        color: 'amber',
        bgColor: 'amber',
        xp: 500
      }
    ]
  },
  {
    id: 'ds-advanced',
    title: 'Data Science Advanced',
    description: 'Learn advanced ML and Deep Learning.',
    estimatedDuration: '4 hours',
    modules: [
      {
        id: 'ds-deep-learning',
        title: 'Deep Learning',
        description: 'Learn TensorFlow or PyTorch basics.',
        duration: '120 mins',
        type: 'interactive',
        path: '/ds/deep-learning.md',
        icon: 'Database',
        color: 'violet',
        bgColor: 'violet',
        xp: 600
      },
      {
        id: 'ds-advanced-capstone',
        title: 'Data Science Capstone',
        description: 'Build a complete ML model.',
        duration: '120 mins',
        type: 'interactive',
        path: '/ds/advanced-challenge.md',
        icon: 'Award',
        color: 'rose',
        bgColor: 'rose',
        xp: 1200
      }
    ]
  }
];
