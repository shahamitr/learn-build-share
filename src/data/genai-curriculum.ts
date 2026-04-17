export const genAiCurriculum = [
  {
    id: 'genai-beginner',
    title: 'Gen AI Beginner',
    description: 'Learn the basics of Generative AI.',
    estimatedDuration: '2 hours',
    modules: [
      {
        id: 'genai-intro',
        title: 'Introduction to Gen AI',
        description: 'Understand LLMs and Generative AI.',
        duration: '30 mins',
        type: 'interactive',
        path: '/genai/intro.md',
        icon: 'Brain',
        color: 'indigo',
        bgColor: 'indigo',
        xp: 100
      },
      {
        id: 'genai-prompting',
        title: 'Prompt Engineering',
        description: 'Master prompt engineering basics.',
        duration: '40 mins',
        type: 'interactive',
        path: '/genai/prompting.md',
        icon: 'Brain',
        color: 'indigo',
        bgColor: 'indigo',
        xp: 150
      },
      {
        id: 'genai-beginner-challenge',
        title: 'Gen AI Beginner Challenge',
        description: 'Practice prompt engineering.',
        duration: '50 mins',
        type: 'interactive',
        path: '/genai/beginner-challenge.md',
        icon: 'Award',
        color: 'amber',
        bgColor: 'amber',
        xp: 300
      }
    ]
  },
  {
    id: 'genai-intermediate',
    title: 'Gen AI Intermediate',
    description: 'Learn about LLM APIs and applications.',
    estimatedDuration: '3 hours',
    modules: [
      {
        id: 'genai-apis',
        title: 'LLM APIs',
        description: 'Use LLM APIs in your applications.',
        duration: '60 mins',
        type: 'interactive',
        path: '/genai/apis.md',
        icon: 'Brain',
        color: 'indigo',
        bgColor: 'indigo',
        xp: 250
      },
      {
        id: 'genai-rag',
        title: 'RAG Basics',
        description: 'Understand Retrieval-Augmented Generation.',
        duration: '60 mins',
        type: 'interactive',
        path: '/genai/rag.md',
        icon: 'Brain',
        color: 'indigo',
        bgColor: 'indigo',
        xp: 300
      },
      {
        id: 'genai-intermediate-challenge',
        title: 'Gen AI Intermediate Challenge',
        description: 'Build a RAG application.',
        duration: '60 mins',
        type: 'interactive',
        path: '/genai/intermediate-challenge.md',
        icon: 'Award',
        color: 'amber',
        bgColor: 'amber',
        xp: 500
      }
    ]
  },
  {
    id: 'genai-advanced',
    title: 'Gen AI Advanced',
    description: 'Learn advanced Gen AI topics.',
    estimatedDuration: '4 hours',
    modules: [
      {
        id: 'genai-fine-tuning',
        title: 'Fine-Tuning',
        description: 'Learn how to fine-tune LLMs.',
        duration: '120 mins',
        type: 'interactive',
        path: '/genai/fine-tuning.md',
        icon: 'Brain',
        color: 'indigo',
        bgColor: 'indigo',
        xp: 600
      },
      {
        id: 'genai-advanced-capstone',
        title: 'Gen AI Capstone',
        description: 'Build an advanced Gen AI application.',
        duration: '120 mins',
        type: 'interactive',
        path: '/genai/advanced-challenge.md',
        icon: 'Award',
        color: 'rose',
        bgColor: 'rose',
        xp: 1200
      }
    ]
  }
];
