export const promptEngineeringCurriculum = [
  {
    id: 'beginner',
    level: 'Beginner',
    title: 'Prompting Basics',
    description: 'Learn the fundamentals of communicating with Large Language Models.',
    modules: [
      {
        id: 'intro-to-llms',
        title: 'Introduction to LLMs',
        description: 'What are Large Language Models and how do they work?',
        path: '/prompt-engineering/intro.md'
      },
      {
        id: 'basic-prompting',
        title: 'Basic Prompting Strategies',
        description: 'Learn how to write clear, concise, and effective prompts.',
        path: '/prompt-engineering/basic.md'
      }
    ]
  },
  {
    id: 'intermediate',
    level: 'Intermediate',
    title: 'Advanced Techniques',
    description: 'Master techniques like few-shot prompting and chain-of-thought.',
    modules: [
      {
        id: 'few-shot',
        title: 'Few-Shot Prompting',
        description: 'Provide examples to guide the model\'s output format and style.',
        path: '/prompt-engineering/few-shot.md'
      },
      {
        id: 'chain-of-thought',
        title: 'Chain-of-Thought Prompting',
        description: 'Encourage the model to break down complex problems step-by-step.',
        path: '/prompt-engineering/cot.md'
      }
    ]
  },
  {
    id: 'advanced',
    level: 'Advanced',
    title: 'System Prompts & Agents',
    description: 'Learn how to build complex AI agents and define system behaviors.',
    modules: [
      {
        id: 'system-prompts',
        title: 'Designing System Prompts',
        description: 'Set the persona, constraints, and overall behavior of an AI assistant.',
        path: '/prompt-engineering/system-prompts.md'
      }
    ]
  }
];
