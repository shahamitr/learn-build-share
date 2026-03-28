import { Workflow, Play, Settings } from 'lucide-react';

export const manualTestingCurriculum = [
  {
    id: 'beginner',
    title: 'Beginner Level — Foundation',
    description: 'Start here if you’re new to software testing. Learn the core concepts and basic artifacts.',
    icon: Play,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    modules: [
      { id: 'foundations', title: '01. Core Concepts & SDLC', duration: '20 min', type: 'theory', path: '/manual-testing/foundations.md' },
      { id: 'testing-basics', title: '02. Testing Types & Techniques', duration: '25 min', type: 'theory', path: '/manual-testing/testing-basics.md' },
      { id: 'artifacts-and-bugs', title: '03. Test Artifacts & Bug Life Cycle', duration: '30 min', type: 'lab', path: '/manual-testing/artifacts-and-bugs.md' }
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediate Level — Practical',
    description: 'Move from theory to real project work. Master test design and specialized testing.',
    icon: Workflow,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    modules: [
      { id: 'advanced-testing', title: '04. Integration, System & Exploratory', duration: '30 min', type: 'lab', path: '/manual-testing/advanced-testing.md' },
      { id: 'test-design', title: '05. Test Design Techniques', duration: '35 min', type: 'theory', path: '/manual-testing/test-design.md' },
      { id: 'practical-skills', title: '06. Web, API & SQL for Testers', duration: '40 min', type: 'lab', path: '/manual-testing/practical-skills.md' }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Level — Professional',
    description: 'Become a Senior QA. Master strategy, Agile, and specialized domains.',
    icon: Settings,
    color: 'text-rose-600',
    bgColor: 'bg-rose-100',
    modules: [
      { id: 'strategy-and-agile', title: '07. Test Strategy & Agile QA', duration: '35 min', type: 'theory', path: '/manual-testing/strategy-and-agile.md' },
      { id: 'specialized-testing', title: '08. Mobile, Security & Performance', duration: '40 min', type: 'theory', path: '/manual-testing/specialized-testing.md' },
      { id: 'leadership-and-devops', title: '09. DevOps Awareness & Leadership', duration: '45 min', type: 'theory', path: '/manual-testing/leadership-and-devops.md' }
    ]
  }
];
