export const rustCurriculum = [
  {
    id: 'beginner',
    level: 'Beginner',
    title: 'Rust Basics',
    description: 'Learn the fundamentals of the Rust programming language.',
    modules: [
      {
        id: 'intro-to-rust',
        title: 'Introduction to Rust',
        description: 'What is Rust? Explore the language features and setup.',
        path: '/rust/intro.md'
      },
      {
        id: 'rust-syntax',
        title: 'Rust Syntax & Variables',
        description: 'Learn about variables, data types, and basic syntax.',
        path: '/rust/syntax.md'
      }
    ]
  },
  {
    id: 'intermediate',
    level: 'Intermediate',
    title: 'Ownership & Borrowing',
    description: 'Master the core concepts of Rust memory management.',
    modules: [
      {
        id: 'rust-ownership',
        title: 'Ownership in Rust',
        description: 'Understand the unique ownership system in Rust.',
        path: '/rust/ownership.md'
      },
      {
        id: 'rust-borrowing',
        title: 'Borrowing & Lifetimes',
        description: 'Learn how to borrow data and manage lifetimes.',
        path: '/rust/borrowing.md'
      }
    ]
  },
  {
    id: 'advanced',
    level: 'Advanced',
    title: 'Advanced Rust',
    description: 'Learn advanced Rust features for high-performance applications.',
    modules: [
      {
        id: 'rust-concurrency',
        title: 'Concurrency in Rust',
        description: 'Learn how to write safe and efficient concurrent code.',
        path: '/rust/concurrency.md'
      }
    ]
  }
];
