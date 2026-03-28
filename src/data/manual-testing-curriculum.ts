export const manualTestingCurriculum = [
  {
    id: 'beginner',
    level: 'Beginner',
    title: '🟢 Beginner Level (Foundation)',
    description: 'Start here if you’re new to software testing. Learn the core concepts and basic artifacts.',
    modules: [
      {
        id: 'foundations',
        title: 'Core Concepts & SDLC',
        description: 'Understand SDLC, STLC, QA vs QC, and the basics of software testing.',
        path: '/manual-testing/foundations.md'
      },
      {
        id: 'testing-basics',
        title: 'Testing Types & Techniques',
        description: 'Learn about Functional, Smoke, Sanity testing and Black Box techniques.',
        path: '/manual-testing/testing-basics.md'
      },
      {
        id: 'artifacts-and-bugs',
        title: 'Test Artifacts & Bug Life Cycle',
        description: 'Master test cases, scenarios, and the complete bug life cycle.',
        path: '/manual-testing/artifacts-and-bugs.md'
      }
    ]
  },
  {
    id: 'intermediate',
    level: 'Intermediate',
    title: '🟡 Intermediate Level (Practical)',
    description: 'Move from theory to real project work. Master test design and specialized testing.',
    modules: [
      {
        id: 'advanced-testing',
        title: 'Integration, System & Exploratory',
        description: 'Learn how to test complex systems and perform exploratory testing.',
        path: '/manual-testing/advanced-testing.md'
      },
      {
        id: 'test-design',
        title: 'Test Design Techniques',
        description: 'Master EP, BVA, Decision Tables, and State Transition testing.',
        path: '/manual-testing/test-design.md'
      },
      {
        id: 'practical-skills',
        title: 'Web, API & SQL for Testers',
        description: 'Hands-on with Web UI, Postman for APIs, and SQL for backend validation.',
        path: '/manual-testing/practical-skills.md'
      }
    ]
  },
  {
    id: 'advanced',
    level: 'Advanced',
    title: '🔴 Advanced Level (Professional)',
    description: 'Become a Senior QA. Master strategy, Agile, and specialized domains.',
    modules: [
      {
        id: 'strategy-and-agile',
        title: 'Test Strategy & Agile QA',
        description: 'Learn test planning, risk-based testing, and QA in Agile/Scrum.',
        path: '/manual-testing/strategy-and-agile.md'
      },
      {
        id: 'specialized-testing',
        title: 'Mobile, Security & Performance',
        description: 'Explore mobile testing, security basics, and performance concepts.',
        path: '/manual-testing/specialized-testing.md'
      },
      {
        id: 'leadership-and-devops',
        title: 'DevOps Awareness & Leadership',
        description: 'Understand CI/CD, test metrics, and mentoring junior testers.',
        path: '/manual-testing/leadership-and-devops.md'
      }
    ]
  }
];
