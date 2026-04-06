import { Workflow, Play, Settings } from 'lucide-react';

export const manualTestingCurriculum = [
  {
    id: 'beginner',
    title: 'Beginner Level — Foundation',
    description: 'Start here if you’re new to software testing. Learn the core concepts and basic artifacts.',
    estimatedDuration: '1 hour 15 mins',
    icon: Play,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    modules: [
      { id: 'foundations', title: '01. Core Concepts & SDLC', duration: '20 min', type: 'theory', path: '/manual-testing/foundations.md', xp: 50 },
      { id: 'testing-basics', title: '02. Testing Types & Techniques', duration: '25 min', type: 'theory', path: '/manual-testing/testing-basics.md', xp: 100 },
      { id: 'artifacts-and-bugs', title: '03. Test Artifacts & Bug Life Cycle', duration: '30 min', type: 'lab', path: '/manual-testing/artifacts-and-bugs.md', xp: 100 }
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediate Level — Practical',
    description: 'Move from theory to real project work. Master test design and specialized testing.',
    estimatedDuration: '3 hours 50 mins',
    icon: Workflow,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    modules: [
      { id: 'advanced-testing', title: '04. Integration, System & Exploratory', duration: '30 min', type: 'lab', path: '/manual-testing/advanced-testing.md', xp: 150 },
      { id: 'test-design', title: '05. Test Design Techniques', duration: '35 min', type: 'theory', path: '/manual-testing/test-design.md', xp: 150 },
      { id: 'practical-skills', title: '06. Web, API & SQL for Testers', duration: '40 min', type: 'lab', path: '/manual-testing/practical-skills.md', xp: 200 },
      { id: 'api-testing', title: '06.1 API Testing Basics', duration: '30 min', type: 'lab', path: '/manual-testing/api-testing.md', xp: 150 },
      { id: 'performance-testing', title: '06.2 Performance Testing Basics', duration: '30 min', type: 'theory', path: '/manual-testing/performance-testing.md', xp: 150 },
      { id: 'security-testing', title: '06.3 Security Testing Basics', duration: '35 min', type: 'theory', path: '/manual-testing/security-testing.md', xp: 150 },
      { id: 'accessibility-testing', title: '06.4 Accessibility Testing Basics', duration: '30 min', type: 'theory', path: '/manual-testing/accessibility-testing.md', xp: 150 }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Level — Professional',
    description: 'Become a Senior QA. Master strategy, Agile, and specialized domains.',
    estimatedDuration: '2 hours',
    icon: Settings,
    color: 'text-rose-600',
    bgColor: 'bg-rose-100',
    modules: [
      { id: 'strategy-and-agile', title: '07. Test Strategy & Agile QA', duration: '35 min', type: 'theory', path: '/manual-testing/strategy-and-agile.md', xp: 200 },
      { id: 'specialized-testing', title: '08. Mobile, Security & Performance', duration: '40 min', type: 'theory', path: '/manual-testing/specialized-testing.md', xp: 200 },
      { id: 'leadership-and-devops', title: '09. DevOps Awareness & Leadership', duration: '45 min', type: 'theory', path: '/manual-testing/leadership-and-devops.md', xp: 250 }
    ]
  }
];
