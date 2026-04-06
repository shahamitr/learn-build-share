import { Workflow, Play, Settings } from 'lucide-react';

export const antigravityCurriculum = [
  {
    id: 'beginner',
    title: 'Beginner Level — Foundations of Gravity & Physics',
    description: 'Start by understanding how gravity actually works through core physics concepts and fundamental laws.',
    icon: Play,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    modules: [
      { id: 'gravity-physics-foundations', title: '01. Core Physics Concepts', duration: '20 min', type: 'theory', path: '/antigravity/foundations.md' },
      { id: 'antigravity-cli', title: '01.1 Antigravity CLI', duration: '15 min', type: 'lab', path: '/antigravity/cli.md' },
      { id: 'fundamental-laws', title: '02. Fundamental Laws', duration: '25 min', type: 'theory', path: '/antigravity/laws.md' },
      { id: 'space-science-intro', title: '03. Intro to Space Science', duration: '30 min', type: 'lab', path: '/antigravity/space-science.md' }
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediate Level — Understanding Gravity in Depth',
    description: 'Move into deeper physics, relativity, and theoretical concepts related to antigravity.',
    icon: Workflow,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    modules: [
      { id: 'advanced-physics-relativity', title: '04. Advanced Physics & Relativity', duration: '30 min', type: 'theory', path: '/antigravity/relativity.md' },
      { id: 'antigravity-concepts', title: '05. Concepts Related to "Antigravity"', duration: '35 min', type: 'theory', path: '/antigravity/antigravity-concepts.md' },
      { id: 'propulsion-simulations', title: '06. Propulsion & Simulations', duration: '40 min', type: 'lab', path: '/antigravity/propulsion.md' }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Level — Frontier Research & Speculation',
    description: 'Explore advanced theoretical physics, cutting-edge concepts like warp drives, and experimental research.',
    icon: Settings,
    color: 'text-rose-600',
    bgColor: 'bg-rose-100',
    modules: [
      { id: 'theoretical-physics-frontier', title: '07. Advanced Theoretical Physics', duration: '40 min', type: 'theory', path: '/antigravity/theoretical-physics.md' },
      { id: 'cutting-edge-gravity', title: '08. Cutting-edge Concepts', duration: '45 min', type: 'theory', path: '/antigravity/cutting-edge.md' },
      { id: 'experimental-aerospace', title: '09. Experimental Physics & Aerospace', duration: '50 min', type: 'lab', path: '/antigravity/experimental.md' }
    ]
  }
];
