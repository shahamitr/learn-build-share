import { Workflow, Play, Settings } from 'lucide-react';

export const rustCurriculum = [
  {
    id: 'beginner',
    title: 'Beginner Level — Rust Foundations',
    description: 'Start by understanding Rust basics, its core philosophy, and the unique ownership system.',
    icon: Play,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    modules: [
      { id: 'rust-foundations', title: '01. Core Concepts & Setup', duration: '20 min', type: 'theory', path: '/rust/foundations.md' },
      { id: 'rust-build-run', title: '01.1 Building and Running', duration: '15 min', type: 'lab', path: '/rust/build-run.md' },
      { id: 'rust-syntax-basics', title: '02. Syntax & Control Flow', duration: '25 min', type: 'lab', path: '/rust/syntax-basics.md' },
      { id: 'rust-ownership-system', title: '03. Ownership & Borrowing', duration: '30 min', type: 'theory', path: '/rust/ownership-system.md' }
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediate Level — Core Rust Skills',
    description: 'Move into real Rust development with structs, enums, error handling, and traits.',
    icon: Workflow,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    modules: [
      { id: 'rust-structs-enums-errors', title: '04. Data Structures & Errors', duration: '30 min', type: 'theory', path: '/rust/data-errors.md' },
      { id: 'rust-collections-traits', title: '05. Collections & Traits', duration: '35 min', type: 'lab', path: '/rust/collections-traits.md' },
      { id: 'rust-lifetimes-closures', title: '06. Lifetimes & Closures', duration: '30 min', type: 'theory', path: '/rust/lifetimes-closures.md' }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Level — Professional Rust',
    description: 'Master powerful Rust features like concurrency, async, unsafe Rust, and macros.',
    icon: Settings,
    color: 'text-rose-600',
    bgColor: 'bg-rose-100',
    modules: [
      { id: 'rust-concurrency-async', title: '07. Concurrency & Async', duration: '40 min', type: 'theory', path: '/rust/concurrency-async.md' },
      { id: 'rust-memory-unsafe', title: '08. Memory & Unsafe Rust', duration: '35 min', type: 'theory', path: '/rust/memory-unsafe.md' },
      { id: 'rust-macros-testing', title: '09. Macros & Testing', duration: '30 min', type: 'lab', path: '/rust/macros-testing.md' }
    ]
  }
];
