import { BookOpen, GitBranch, Terminal, Shield, Zap, Bot, Code, Cpu, Container, Layers, Server, Users, Globe, Lock } from 'lucide-react';

export const githubCurriculum = [
  {
    id: 'beginner',
    title: 'GitHub Fundamentals',
    description: 'Learn how to use GitHub to store code and collaborate with others.',
    estimatedDuration: '2 hours 15 mins',
    icon: 'Users',
    color: 'emerald',
    modules: [
      { id: '01-intro', title: '01. Introduction to GitHub', duration: '10 min', path: '/github/01-beginner/01-intro.md' },
      { id: '02-repos', title: '02. Creating and Managing Repositories', duration: '15 min', path: '/github/01-beginner/02-repos.md' },
      { id: '03-connecting', title: '03. Connecting Local Git with GitHub', duration: '15 min', path: '/github/01-beginner/03-connecting.md' },
      { id: '04-cloning', title: '04. Cloning Repositories', duration: '10 min', path: '/github/01-beginner/04-cloning.md' },
      { id: '05-branching', title: '05. Branching Workflow in GitHub', duration: '15 min', path: '/github/01-beginner/05-branching.md' },
      { id: '06-pull-requests', title: '06. Introduction to Pull Requests', duration: '15 min', path: '/github/01-beginner/06-pull-requests.md' },
      { id: '07-code-reviews', title: '07. Basic Code Reviews', duration: '15 min', path: '/github/01-beginner/07-code-reviews.md' },
      { id: '08-issues', title: '08. Issues and Bug Tracking', duration: '10 min', path: '/github/01-beginner/08-issues.md' },
      { id: '09-markdown', title: '09. Markdown for GitHub', duration: '10 min', path: '/github/01-beginner/09-markdown.md' },
      { id: '10-profile', title: '10. GitHub Profile & Contribution Activity', duration: '10 min', path: '/github/01-beginner/10-profile.md' }
    ]
  },
  {
    id: 'intermediate',
    title: 'Professional Team Workflow',
    description: 'Work effectively in a collaborative team environment.',
    estimatedDuration: '2 hours 25 mins',
    icon: 'Globe',
    color: 'amber',
    modules: [
      { id: '11-forking', title: '11. Forking and Contributing to Open Source', duration: '20 min', path: '/github/02-intermediate/11-forking.md' },
      { id: '12-branch-protection', title: '12. Branch Protection Rules', duration: '15 min', path: '/github/02-intermediate/12-branch-protection.md' },
      { id: '13-pr-best-practices', title: '13. Pull Request Best Practices', duration: '15 min', path: '/github/02-intermediate/13-pr-best-practices.md' },
      { id: '14-merge-conflicts', title: '14. Resolving Merge Conflicts in PRs', duration: '20 min', path: '/github/02-intermediate/14-merge-conflicts.md' },
      { id: '15-projects', title: '15. GitHub Projects (Project Management)', duration: '15 min', path: '/github/02-intermediate/15-projects.md' },
      { id: '16-discussions', title: '16. GitHub Discussions', duration: '10 min', path: '/github/02-intermediate/16-discussions.md' },
      { id: '17-releases', title: '17. Managing Releases', duration: '15 min', path: '/github/02-intermediate/17-releases.md' },
      { id: '18-notifications', title: '18. GitHub Notifications and Watch Settings', duration: '10 min', path: '/github/02-intermediate/18-notifications.md' },
      { id: '19-cli', title: '19. GitHub CLI', duration: '15 min', path: '/github/02-intermediate/19-cli.md' },
      { id: '20-access', title: '20. Managing Repository Access', duration: '10 min', path: '/github/02-intermediate/20-access.md' }
    ]
  },
  {
    id: 'advanced',
    title: 'Enterprise Collaboration',
    description: 'Use GitHub like a professional engineering team.',
    estimatedDuration: '2 hours 45 mins',
    icon: 'Lock',
    color: 'rose',
    modules: [
      { id: '21-actions-overview', title: '21. GitHub Actions Overview', duration: '20 min', path: '/github/03-advanced/21-actions-overview.md' },
      { id: '22-ci', title: '22. Continuous Integration with GitHub Actions', duration: '25 min', path: '/github/03-advanced/22-ci.md' },
      { id: '23-code-owners', title: '23. Code Owners and Review Policies', duration: '15 min', path: '/github/03-advanced/23-code-owners.md' },
      { id: '24-dependencies', title: '24. Dependency Management', duration: '15 min', path: '/github/03-advanced/24-dependencies.md' },
      { id: '25-security', title: '25. Security Features', duration: '20 min', path: '/github/03-advanced/25-security.md' },
      { id: '26-packages', title: '26. GitHub Packages', duration: '15 min', path: '/github/03-advanced/26-packages.md' },
      { id: '27-monorepo', title: '27. Monorepo Collaboration Strategies', duration: '20 min', path: '/github/03-advanced/27-monorepo.md' },
      { id: '28-templates', title: '28. GitHub Templates', duration: '15 min', path: '/github/03-advanced/28-templates.md' },
      { id: '29-org-management', title: '29. Organization-Level Management', duration: '20 min', path: '/github/03-advanced/29-org-management.md' }
    ]
  }
];
