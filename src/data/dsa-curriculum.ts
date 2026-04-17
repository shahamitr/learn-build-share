export const dsaCurriculum = [
  {
    id: 'dsa-beginner',
    title: 'DSA Beginner',
    description: 'Learn basic data structures and algorithms.',
    estimatedDuration: '3 hours',
    modules: [
      {
        id: 'dsa-arrays',
        title: 'Arrays & Strings',
        description: 'Understand array and string manipulation.',
        duration: '40 mins',
        type: 'interactive',
        path: '/dsa/arrays.md',
        icon: 'Terminal',
        color: 'purple',
        bgColor: 'purple',
        xp: 100
      },
      {
        id: 'dsa-linked-lists',
        title: 'Linked Lists',
        description: 'Learn linked list basics.',
        duration: '50 mins',
        type: 'interactive',
        path: '/dsa/linked-lists.md',
        icon: 'Terminal',
        color: 'purple',
        bgColor: 'purple',
        xp: 150
      },
      {
        id: 'dsa-beginner-challenge',
        title: 'DSA Beginner Challenge',
        description: 'Test your basic DSA knowledge.',
        duration: '40 mins',
        type: 'interactive',
        path: '/dsa/beginner-challenge.md',
        icon: 'Award',
        color: 'amber',
        bgColor: 'amber',
        xp: 300
      }
    ]
  },
  {
    id: 'dsa-intermediate',
    title: 'DSA Intermediate',
    description: 'Master stacks, queues, and basic algorithms.',
    estimatedDuration: '4 hours',
    modules: [
      {
        id: 'dsa-stacks-queues',
        title: 'Stacks & Queues',
        description: 'Understand stack and queue operations.',
        duration: '60 mins',
        type: 'interactive',
        path: '/dsa/stacks-queues.md',
        icon: 'Terminal',
        color: 'purple',
        bgColor: 'purple',
        xp: 200
      },
      {
        id: 'dsa-sorting',
        title: 'Sorting Algorithms',
        description: 'Learn bubble, merge, and quick sort.',
        duration: '80 mins',
        type: 'interactive',
        path: '/dsa/sorting.md',
        icon: 'Terminal',
        color: 'purple',
        bgColor: 'purple',
        xp: 250
      },
      {
        id: 'dsa-intermediate-challenge',
        title: 'DSA Intermediate Challenge',
        description: 'Practice intermediate DSA.',
        duration: '60 mins',
        type: 'interactive',
        path: '/dsa/intermediate-challenge.md',
        icon: 'Award',
        color: 'amber',
        bgColor: 'amber',
        xp: 400
      }
    ]
  },
  {
    id: 'dsa-advanced',
    title: 'DSA Advanced',
    description: 'Learn trees, graphs, and advanced algorithms.',
    estimatedDuration: '5 hours',
    modules: [
      {
        id: 'dsa-trees',
        title: 'Trees',
        description: 'Understand binary trees and traversal.',
        duration: '90 mins',
        type: 'interactive',
        path: '/dsa/trees.md',
        icon: 'Terminal',
        color: 'purple',
        bgColor: 'purple',
        xp: 300
      },
      {
        id: 'dsa-graphs',
        title: 'Graphs',
        description: 'Learn graph representation and traversal.',
        duration: '100 mins',
        type: 'interactive',
        path: '/dsa/graphs.md',
        icon: 'Terminal',
        color: 'purple',
        bgColor: 'purple',
        xp: 350
      },
      {
        id: 'dsa-advanced-challenge',
        title: 'DSA Advanced Capstone',
        description: 'Build a complex DSA application.',
        duration: '90 mins',
        type: 'interactive',
        path: '/dsa/advanced-challenge.md',
        icon: 'Award',
        color: 'rose',
        bgColor: 'rose',
        xp: 750
      }
    ]
  }
];
