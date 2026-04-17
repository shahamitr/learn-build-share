export const bashCurriculum = [
  {
    id: 'bash-beginner',
    title: 'Bash Beginner',
    description: 'Learn basic command line operations.',
    estimatedDuration: '1 hour',
    modules: [
      {
        id: 'bash-intro',
        title: 'Introduction to Bash',
        description: 'Get started with the shell.',
        duration: '20 mins',
        type: 'interactive',
        path: '/bash/intro.md',
        icon: 'Terminal',
        color: 'gray',
        bgColor: 'gray',
        xp: 50
      },
      {
        id: 'bash-basics',
        title: 'Basic Commands',
        description: 'Learn common file and directory commands.',
        duration: '40 mins',
        type: 'interactive',
        path: '/bash/basics.md',
        icon: 'Terminal',
        color: 'gray',
        bgColor: 'gray',
        xp: 100
      }
    ]
  },
  {
    id: 'bash-intermediate',
    title: 'Bash Intermediate',
    description: 'Master scripting basics.',
    estimatedDuration: '2 hours',
    modules: [
      {
        id: 'bash-scripting',
        title: 'Scripting Basics',
        description: 'Learn variables, loops, and conditions.',
        duration: '60 mins',
        type: 'interactive',
        path: '/bash/scripting.md',
        icon: 'Terminal',
        color: 'gray',
        bgColor: 'gray',
        xp: 200
      },
      {
        id: 'bash-intermediate-challenge',
        title: 'Bash Intermediate Challenge',
        description: 'Practice scripting.',
        duration: '60 mins',
        type: 'interactive',
        path: '/bash/intermediate-challenge.md',
        icon: 'Award',
        color: 'amber',
        bgColor: 'amber',
        xp: 300
      }
    ]
  },
  {
    id: 'bash-advanced',
    title: 'Bash Advanced',
    description: 'Learn advanced scripting and automation.',
    estimatedDuration: '3 hours',
    modules: [
      {
        id: 'bash-automation',
        title: 'Automation',
        description: 'Automate system tasks.',
        duration: '90 mins',
        type: 'interactive',
        path: '/bash/automation.md',
        icon: 'Terminal',
        color: 'gray',
        bgColor: 'gray',
        xp: 400
      },
      {
        id: 'bash-advanced-capstone',
        title: 'Bash Capstone',
        description: 'Build a complex automation script.',
        duration: '90 mins',
        type: 'interactive',
        path: '/bash/advanced-challenge.md',
        icon: 'Award',
        color: 'rose',
        bgColor: 'rose',
        xp: 750
      }
    ]
  }
];
