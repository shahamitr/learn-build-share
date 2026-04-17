export const goCurriculum = [
  {
    id: 'go-beginner',
    title: 'Go Beginner',
    description: 'Learn the basics of Go.',
    estimatedDuration: '2 hours',
    modules: [
      {
        id: 'go-intro',
        title: 'Introduction to Go',
        description: 'Get started with Go.',
        duration: '30 mins',
        type: 'interactive',
        path: '/go/intro.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 100
      },
      {
        id: 'go-variables',
        title: 'Variables & Types',
        description: 'Understand Go types.',
        duration: '40 mins',
        type: 'interactive',
        path: '/go/variables.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 150
      },
      {
        id: 'go-beginner-challenge',
        title: 'Go Beginner Challenge',
        description: 'Test your Go basics.',
        duration: '50 mins',
        type: 'interactive',
        path: '/go/beginner-challenge.md',
        icon: 'Award',
        color: 'amber',
        bgColor: 'amber',
        xp: 300
      }
    ]
  },
  {
    id: 'go-intermediate',
    title: 'Go Intermediate',
    description: 'Master functions and structures.',
    estimatedDuration: '3 hours',
    modules: [
      {
        id: 'go-functions',
        title: 'Functions',
        description: 'Define and call functions.',
        duration: '60 mins',
        type: 'interactive',
        path: '/go/functions.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 200
      },
      {
        id: 'go-structs',
        title: 'Structs',
        description: 'Work with Go structs.',
        duration: '60 mins',
        type: 'interactive',
        path: '/go/structs.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 250
      },
      {
        id: 'go-intermediate-challenge',
        title: 'Go Intermediate Challenge',
        description: 'Practice Go intermediate concepts.',
        duration: '60 mins',
        type: 'interactive',
        path: '/go/intermediate-challenge.md',
        icon: 'Award',
        color: 'amber',
        bgColor: 'amber',
        xp: 400
      }
    ]
  },
  {
    id: 'go-advanced',
    title: 'Go Advanced',
    description: 'Learn concurrency and advanced features.',
    estimatedDuration: '4 hours',
    modules: [
      {
        id: 'go-concurrency',
        title: 'Concurrency',
        description: 'Master Goroutines and Channels.',
        duration: '120 mins',
        type: 'interactive',
        path: '/go/concurrency.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 500
      },
      {
        id: 'go-advanced-capstone',
        title: 'Go Capstone',
        description: 'Build a concurrent Go application.',
        duration: '120 mins',
        type: 'interactive',
        path: '/go/advanced-challenge.md',
        icon: 'Award',
        color: 'rose',
        bgColor: 'rose',
        xp: 1000
      }
    ]
  }
];
