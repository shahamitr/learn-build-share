import { Workflow, Play, Settings } from 'lucide-react';

export const promptEngineeringCurriculum = [
  {
    id: 'beginner',
    title: 'Beginner Level — Prompting Basics',
    description: 'Learn the fundamentals of communicating with Large Language Models.',
    estimatedDuration: '45 mins',
    icon: Play,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    modules: [
      { id: 'intro-to-llms', title: '01. Introduction to LLMs', duration: '20 min', type: 'theory', path: '/prompt-engineering/intro.md' },
      { id: 'basic-prompting', title: '02. Basic Prompting Strategies', duration: '25 min', type: 'lab', path: '/prompt-engineering/basic.md' }
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediate Level — Advanced Techniques',
    description: 'Master techniques like few-shot prompting and chain-of-thought.',
    estimatedDuration: '1 hour',
    icon: Workflow,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    modules: [
      { id: 'few-shot', title: '03. Few-Shot Prompting', duration: '30 min', type: 'lab', path: '/prompt-engineering/few-shot.md' },
      { id: 'chain-of-thought', title: '04. Chain-of-Thought Prompting', duration: '30 min', type: 'lab', path: '/prompt-engineering/cot.md' }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Level — System Prompts & Agents',
    description: 'Learn how to build complex AI agents and define system behaviors.',
    estimatedDuration: '40 mins',
    icon: Settings,
    color: 'text-rose-600',
    bgColor: 'bg-rose-100',
    modules: [
      { id: 'system-prompts', title: '05. Designing System Prompts', duration: '40 min', type: 'theory', path: '/prompt-engineering/system-prompts.md' }
    ]
  }
];
