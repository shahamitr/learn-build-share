import { Workflow, Play, Settings } from 'lucide-react';

export const manualTestingCurriculum = [
  {
    id: 'beginner',
    title: 'Beginner Level — Foundation',
    description: 'Start here if you’re new to software testing. Learn the core concepts and basic artifacts.',
    estimatedDuration: '2 hours 30 mins',
    icon: Play,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    modules: [
      { id: 'foundations', title: '01. Core Concepts & SDLC', duration: '20 min', type: 'theory', path: '/manual-testing/foundations.md', xp: 50 },
      { id: 'testing-basics', title: '02. Testing Types & Techniques', duration: '25 min', type: 'theory', path: '/manual-testing/testing-basics.md', xp: 100 },
      { id: 'artifacts-and-bugs', title: '03. Test Artifacts & Bug Life Cycle', duration: '30 min', type: 'lab', path: '/manual-testing/artifacts-and-bugs.md', xp: 100 },
      { id: 'test-planning', title: '04. Introduction to Test Planning', duration: '30 min', type: 'theory', path: '/manual-testing/test-planning.md', xp: 100 },
      { id: 'beginner-challenge', title: '05. Beginner QA Challenge', duration: '45 min', type: 'lab', path: '/manual-testing/beginner-challenge.md', xp: 150 }
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediate Level — Practical',
    description: 'Move from theory to real project work. Master test design and specialized testing.',
    estimatedDuration: '4 hours 30 mins',
    icon: Workflow,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    modules: [
      { id: 'advanced-testing', title: '06. Integration, System & Exploratory', duration: '30 min', type: 'lab', path: '/manual-testing/advanced-testing.md', xp: 150 },
      { id: 'test-design', title: '07. Test Design Techniques', duration: '35 min', type: 'theory', path: '/manual-testing/test-design.md', xp: 150 },
      { id: 'practical-skills', title: '08. Web, API & SQL for Testers', duration: '40 min', type: 'lab', path: '/manual-testing/practical-skills.md', xp: 200 },
      { id: 'api-testing', title: '09. API Testing Basics', duration: '30 min', type: 'lab', path: '/manual-testing/api-testing.md', xp: 150 },
      { id: 'performance-testing', title: '10. Performance Testing Basics', duration: '30 min', type: 'theory', path: '/manual-testing/performance-testing.md', xp: 150 },
      { id: 'security-testing', title: '11. Security Testing Basics', duration: '35 min', type: 'theory', path: '/manual-testing/security-testing.md', xp: 150 },
      { id: 'accessibility-testing', title: '12. Accessibility Testing Basics', duration: '30 min', type: 'theory', path: '/manual-testing/accessibility-testing.md', xp: 150 },
      { id: 'intermediate-challenge', title: '13. Intermediate QA Challenge', duration: '40 min', type: 'lab', path: '/manual-testing/intermediate-challenge.md', xp: 200 }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Level — Professional',
    description: 'Become a Senior QA. Master strategy, Agile, and specialized domains.',
    estimatedDuration: '4 hours',
    icon: Settings,
    color: 'text-rose-600',
    bgColor: 'bg-rose-100',
    modules: [
      { id: 'strategy-and-agile', title: '14. Test Strategy & Agile QA', duration: '35 min', type: 'theory', path: '/manual-testing/strategy-and-agile.md', xp: 200 },
      { id: 'specialized-testing', title: '15. Mobile, Security & Performance', duration: '40 min', type: 'theory', path: '/manual-testing/specialized-testing.md', xp: 200 },
      { id: 'leadership-and-devops', title: '16. DevOps Awareness & Leadership', duration: '45 min', type: 'theory', path: '/manual-testing/leadership-and-devops.md', xp: 250 },
      { id: 'test-automation-intro', title: '17. Intro to Test Automation', duration: '40 min', type: 'theory', path: '/manual-testing/test-automation-intro.md', xp: 200 },
      { id: 'advanced-capstone', title: '18. QA Capstone Project', duration: '120 min', type: 'lab', path: '/manual-testing/advanced-capstone.md', xp: 500 }
    ]
  }
];
