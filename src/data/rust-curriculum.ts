export const rustCurriculum = [
  {
    id: 'beginner',
    level: 'Beginner',
    title: '🟢 Beginner Level (Foundations)',
    description: 'Start by understanding Rust basics, its core philosophy, and the unique ownership system.',
    modules: [
      {
        id: 'rust-foundations',
        title: 'Core Concepts & Setup',
        description: 'What is Rust, why it is popular, and setting up the environment with Cargo.',
        path: '/rust/foundations.md'
      },
      {
        id: 'rust-syntax-basics',
        title: 'Syntax & Control Flow',
        description: 'Variables, data types, and basic control flow (if, match, loops).',
        path: '/rust/syntax-basics.md'
      },
      {
        id: 'rust-ownership-system',
        title: 'Ownership & Borrowing',
        description: 'Ownership rules, borrowing, and references - the heart of Rust memory safety.',
        path: '/rust/ownership-system.md'
      }
    ]
  },
  {
    id: 'intermediate',
    level: 'Intermediate',
    title: '🟡 Intermediate Level (Core Rust Skills)',
    description: 'Move into real Rust development with structs, enums, error handling, and traits.',
    modules: [
      {
        id: 'rust-structs-enums-errors',
        title: 'Data Structures & Errors',
        description: 'Structs, enums, and robust error handling with Result and Option.',
        path: '/rust/data-errors.md'
      },
      {
        id: 'rust-collections-traits',
        title: 'Collections & Traits',
        description: 'Vectors, HashMaps, Strings, and defining shared behavior with traits.',
        path: '/rust/collections-traits.md'
      },
      {
        id: 'rust-lifetimes-closures',
        title: 'Lifetimes & Closures',
        description: 'Lifetime annotations, closures, iterators, and the Rust ecosystem.',
        path: '/rust/lifetimes-closures.md'
      }
    ]
  },
  {
    id: 'advanced',
    level: 'Advanced',
    title: '🔴 Advanced Level (Professional Rust)',
    description: 'Master powerful Rust features like concurrency, async, unsafe Rust, and macros.',
    modules: [
      {
        id: 'rust-concurrency-async',
        title: 'Concurrency & Async',
        description: 'Threads, message passing, shared state, and async/await with Tokio.',
        path: '/rust/concurrency-async.md'
      },
      {
        id: 'rust-memory-unsafe',
        title: 'Memory & Unsafe Rust',
        description: 'Smart pointers, interior mutability, and when to use the unsafe keyword.',
        path: '/rust/memory-unsafe.md'
      },
      {
        id: 'rust-macros-testing',
        title: 'Macros & Testing',
        description: 'Declarative and procedural macros, unit/integration testing, and benchmarking.',
        path: '/rust/macros-testing.md'
      }
    ]
  }
];
