export const manualTestingCurriculum = [
  {
    id: 'beginner',
    level: 'Beginner',
    title: 'Testing Fundamentals',
    description: 'Learn the core concepts of software testing and quality assurance.',
    modules: [
      {
        id: 'intro-to-testing',
        title: 'Introduction to Software Testing',
        description: 'What is testing? Why is it important? Explore the software testing life cycle (STLC).',
        path: '/manual-testing/intro.md'
      },
      {
        id: 'test-cases',
        title: 'Writing Test Cases',
        description: 'Learn how to write effective, clear, and comprehensive test cases.',
        path: '/manual-testing/test-cases.md'
      }
    ]
  },
  {
    id: 'intermediate',
    level: 'Intermediate',
    title: 'Testing Techniques',
    description: 'Master various manual testing techniques to uncover hidden bugs.',
    modules: [
      {
        id: 'black-box',
        title: 'Black Box Testing',
        description: 'Equivalence partitioning, boundary value analysis, and decision table testing.',
        path: '/manual-testing/black-box.md'
      },
      {
        id: 'exploratory',
        title: 'Exploratory Testing',
        description: 'Learn how to test software without predefined test cases using heuristics.',
        path: '/manual-testing/exploratory.md'
      }
    ]
  },
  {
    id: 'advanced',
    level: 'Advanced',
    title: 'Defect Management',
    description: 'Learn how to report, track, and manage defects effectively.',
    modules: [
      {
        id: 'bug-reporting',
        title: 'Effective Bug Reporting',
        description: 'How to write a bug report that developers will love.',
        path: '/manual-testing/bug-reporting.md'
      }
    ]
  }
];
