import { Workflow, Play, Settings } from 'lucide-react';

export const gitCurriculum = [
  {
    id: 'beginner',
    title: 'Beginner Level — Git Foundations',
    description: 'Understand Git basics and work independently on simple projects.',
    icon: Play,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    modules: [
      { id: '01-intro', title: '01. Introduction to Version Control & Git', duration: '15 min', type: 'theory', path: '/git/01-beginner/01-intro.md' },
      { id: '02-install', title: '02. Installing Git & Configuration', duration: '10 min', type: 'lab', path: '/git/01-beginner/02-install.md' },
      { id: '03-init', title: '03. Git Init & First Commit', duration: '15 min', type: 'lab', path: '/git/01-beginner/03-init.md' },
      { id: '04-lifecycle', title: '04. Understanding the Git Lifecycle', duration: '20 min', type: 'theory', path: '/git/01-beginner/04-lifecycle.md' },
      { id: '05-history', title: '05. Viewing History', duration: '15 min', type: 'lab', path: '/git/01-beginner/05-history.md' },
      { id: '06-branching', title: '06. Branching Basics', duration: '20 min', type: 'lab', path: '/git/01-beginner/06-branching.md' },
      { id: '07-merging', title: '07. Merging Basics', duration: '20 min', type: 'lab', path: '/git/01-beginner/07-merging.md' },
      { id: '08-undoing', title: '08. Undoing Changes', duration: '20 min', type: 'lab', path: '/git/01-beginner/08-undoing.md' },
      { id: '09-remote', title: '09. Working with Remote Repositories', duration: '20 min', type: 'lab', path: '/git/01-beginner/09-remote.md' },
      { id: '10-workflow', title: '10. Basic GitHub Workflow', duration: '20 min', type: 'lab', path: '/git/01-beginner/10-workflow.md' }
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediate Level — Team Collaboration',
    description: 'Work effectively in a team environment.',
    icon: Workflow,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    modules: [
      { id: '11-branching-strategy', title: '11. Advanced Branching Strategy', duration: '25 min', type: 'theory', path: '/git/02-intermediate/11-branching-strategy.md' },
      { id: '12-merge-vs-rebase', title: '12. Merge vs Rebase', duration: '30 min', type: 'theory', path: '/git/02-intermediate/12-merge-vs-rebase.md' },
      { id: '13-conflicts', title: '13. Handling Merge Conflicts Properly', duration: '30 min', type: 'lab', path: '/git/02-intermediate/13-conflicts.md' },
      { id: '14-stashing', title: '14. Stashing Changes', duration: '20 min', type: 'lab', path: '/git/02-intermediate/14-stashing.md' },
      { id: '15-interactive-rebase', title: '15. Interactive Rebase', duration: '30 min', type: 'lab', path: '/git/02-intermediate/15-interactive-rebase.md' },
      { id: '16-cherry-pick', title: '16. Cherry Picking', duration: '20 min', type: 'lab', path: '/git/02-intermediate/16-cherry-pick.md' },
      { id: '17-tags', title: '17. Tags & Releases', duration: '20 min', type: 'lab', path: '/git/02-intermediate/17-tags.md' },
      { id: '18-large-repos', title: '18. Managing Large Repositories', duration: '25 min', type: 'theory', path: '/git/02-intermediate/18-large-repos.md' },
      { id: '19-submodules', title: '19. Submodules', duration: '25 min', type: 'lab', path: '/git/02-intermediate/19-submodules.md' },
      { id: '20-hooks', title: '20. Git Hooks (Introduction)', duration: '25 min', type: 'theory', path: '/git/02-intermediate/20-hooks.md' }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Level — Deep Git Mastery',
    description: 'Understand Git deeply and handle complex real-world scenarios.',
    icon: Settings,
    color: 'text-rose-600',
    bgColor: 'bg-rose-100',
    modules: [
      { id: '21-internals', title: '21. Git Internals', duration: '35 min', type: 'theory', path: '/git/03-advanced/21-internals.md' },
      { id: '22-detached-head', title: '22. Detached HEAD State', duration: '25 min', type: 'theory', path: '/git/03-advanced/22-detached-head.md' },
      { id: '23-advanced-rebase', title: '23. Advanced Rebase Scenarios', duration: '35 min', type: 'lab', path: '/git/03-advanced/23-advanced-rebase.md' },
      { id: '24-bisect', title: '24. Bisect for Debugging', duration: '30 min', type: 'lab', path: '/git/03-advanced/24-bisect.md' },
      { id: '25-reflog', title: '25. Reflog & Recovery', duration: '30 min', type: 'lab', path: '/git/03-advanced/25-reflog.md' },
      { id: '26-performance', title: '26. Performance Optimization', duration: '30 min', type: 'theory', path: '/git/03-advanced/26-performance.md' },
      { id: '27-monorepo', title: '27. Monorepo Strategies', duration: '35 min', type: 'theory', path: '/git/03-advanced/27-monorepo.md' },
      { id: '28-worktrees', title: '28. Git Worktrees', duration: '30 min', type: 'lab', path: '/git/03-advanced/28-worktrees.md' },
      { id: '29-subtree', title: '29. Subtree vs Submodule', duration: '30 min', type: 'theory', path: '/git/03-advanced/29-subtree.md' },
      { id: '30-capstone', title: '30. Enterprise Git Workflow Simulation', duration: '45 min', type: 'lab', path: '/git/03-advanced/30-capstone.md' }
    ]
  }
];
