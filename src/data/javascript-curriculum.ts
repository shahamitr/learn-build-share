export const javascriptCurriculum = [
  {
    id: 'js-beginner',
    title: 'JavaScript Beginner',
    description: 'Learn the basics of JavaScript.',
    estimatedDuration: '2 hours',
    modules: [
      {
        id: 'js-intro',
        title: 'Introduction to JS',
        description: 'Get started with JavaScript.',
        duration: '20 mins',
        type: 'interactive',
        path: '/js/intro.md',
        icon: 'Terminal',
        color: 'yellow',
        bgColor: 'yellow',
        xp: 50
      },
      {
        id: 'js-variables',
        title: 'Variables & Data Types',
        description: 'Understand variables, strings, and numbers.',
        duration: '30 mins',
        type: 'interactive',
        path: '/js/variables.md',
        icon: 'Terminal',
        color: 'yellow',
        bgColor: 'yellow',
        xp: 75
      },
      {
        id: 'js-beginner-challenge',
        title: 'JS Beginner Challenge',
        description: 'Test your JS fundamentals.',
        duration: '30 mins',
        type: 'interactive',
        path: '/js/beginner-challenge.md',
        icon: 'Award',
        color: 'amber',
        bgColor: 'amber',
        xp: 200
      }
    ]
  },
  {
    id: 'js-intermediate',
    title: 'JavaScript Intermediate',
    description: 'Master functions, objects, and arrays.',
    estimatedDuration: '2 hours 30 mins',
    modules: [
      {
        id: 'js-functions',
        title: 'Functions',
        description: 'Define and call functions.',
        duration: '40 mins',
        type: 'interactive',
        path: '/js/functions.md',
        icon: 'Terminal',
        color: 'yellow',
        bgColor: 'yellow',
        xp: 100
      },
      {
        id: 'js-objects',
        title: 'Objects & Arrays',
        description: 'Work with complex data structures.',
        duration: '50 mins',
        type: 'interactive',
        path: '/js/objects-arrays.md',
        icon: 'Terminal',
        color: 'yellow',
        bgColor: 'yellow',
        xp: 150
      },
      {
        id: 'js-intermediate-challenge',
        title: 'JS Intermediate Challenge',
        description: 'Practice complex JS concepts.',
        duration: '40 mins',
        type: 'interactive',
        path: '/js/intermediate-challenge.md',
        icon: 'Award',
        color: 'amber',
        bgColor: 'amber',
        xp: 300
      }
    ]
  },
  {
    id: 'js-advanced',
    title: 'JavaScript Advanced',
    description: 'Learn asynchronous JS and modern features.',
    estimatedDuration: '3 hours',
    modules: [
      {
        id: 'js-async',
        title: 'Async JavaScript',
        description: 'Master Promises and Async/Await.',
        duration: '60 mins',
        type: 'interactive',
        path: '/js/async.md',
        icon: 'Terminal',
        color: 'yellow',
        bgColor: 'yellow',
        xp: 200
      },
      {
        id: 'js-es6',
        title: 'Modern JS (ES6+)',
        description: 'Learn modern JS features.',
        duration: '60 mins',
        type: 'interactive',
        path: '/js/es6.md',
        icon: 'Terminal',
        color: 'yellow',
        bgColor: 'yellow',
        xp: 200
      },
      {
        id: 'js-advanced-challenge',
        title: 'JS Advanced Capstone',
        description: 'Build a complex JS application.',
        duration: '60 mins',
        type: 'interactive',
        path: '/js/advanced-challenge.md',
        icon: 'Award',
        color: 'rose',
        bgColor: 'rose',
        xp: 500
      }
    ]
  }
];
