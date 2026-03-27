import { BookOpen, GitBranch, Terminal, Shield, Zap, Bot, Code, Cpu, Container, Layers, Server, Users, Globe, Lock, Workflow, Play, Settings } from 'lucide-react';

export const githubActionsCurriculum = [
  {
    id: 'beginner',
    title: 'Beginner Level — GitHub Actions Fundamentals',
    description: 'Understand automation and create simple workflows.',
    icon: Play,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    modules: [
      { id: '01-intro-cicd', title: '01. Introduction to CI/CD', path: '/github-actions/01-beginner/01-intro-cicd.md' },
      { id: '02-intro-actions', title: '02. Introduction to GitHub Actions', path: '/github-actions/01-beginner/02-intro-actions.md' },
      { id: '03-workflow-files', title: '03. Understanding Workflow Files', path: '/github-actions/01-beginner/03-workflow-files.md' },
      { id: '04-triggers', title: '04. Workflow Triggers', path: '/github-actions/01-beginner/04-triggers.md' },
      { id: '05-shell-commands', title: '05. Running Shell Commands', path: '/github-actions/01-beginner/05-shell-commands.md' },
      { id: '06-prebuilt-actions', title: '06. Using Prebuilt GitHub Actions', path: '/github-actions/01-beginner/06-prebuilt-actions.md' },
      { id: '07-env-vars', title: '07. Environment Variables', path: '/github-actions/01-beginner/07-env-vars.md' },
      { id: '08-logs-debugging', title: '08. Workflow Logs and Debugging', path: '/github-actions/01-beginner/08-logs-debugging.md' },
      { id: '09-running-tests', title: '09. Running Tests with GitHub Actions', path: '/github-actions/01-beginner/09-running-tests.md' },
      { id: '10-build-automation', title: '10. Build Automation', path: '/github-actions/01-beginner/10-build-automation.md' }
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediate Level — Real CI/CD Workflows',
    description: 'Build pipelines similar to production systems.',
    icon: Workflow,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    modules: [
      { id: '11-artifacts', title: '11. Workflow Artifacts', path: '/github-actions/02-intermediate/11-artifacts.md' },
      { id: '12-job-dependencies', title: '12. Job Dependencies', path: '/github-actions/02-intermediate/12-job-dependencies.md' },
      { id: '13-matrix-builds', title: '13. Matrix Builds', path: '/github-actions/02-intermediate/13-matrix-builds.md' },
      { id: '14-caching', title: '14. Caching Dependencies', path: '/github-actions/02-intermediate/14-caching.md' },
      { id: '15-secrets', title: '15. Using Secrets Securely', path: '/github-actions/02-intermediate/15-secrets.md' },
      { id: '16-deploying', title: '16. Deploying Applications', path: '/github-actions/02-intermediate/16-deploying.md' },
      { id: '17-web-pipeline', title: '17. CI Pipeline for Web Applications', path: '/github-actions/02-intermediate/17-web-pipeline.md' },
      { id: '18-reusable-workflows', title: '18. Reusable Workflows', path: '/github-actions/02-intermediate/18-reusable-workflows.md' },
      { id: '19-scheduled-workflows', title: '19. Scheduled Workflows', path: '/github-actions/02-intermediate/19-scheduled-workflows.md' },
      { id: '20-pr-automation', title: '20. Pull Request Automation', path: '/github-actions/02-intermediate/20-pr-automation.md' }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Level — Production DevOps Automation',
    description: 'Build enterprise-grade CI/CD systems.',
    icon: Settings,
    color: 'text-rose-600',
    bgColor: 'bg-rose-100',
    modules: [
      { id: '21-advanced-strategies', title: '21. Advanced Workflow Strategies', path: '/github-actions/03-advanced/21-advanced-strategies.md' },
      { id: '22-self-hosted-runners', title: '22. Self-Hosted Runners', path: '/github-actions/03-advanced/22-self-hosted-runners.md' },
      { id: '23-container-workflows', title: '23. Container-Based Workflows', path: '/github-actions/03-advanced/23-container-workflows.md' },
      { id: '24-infrastructure', title: '24. Infrastructure Automation', path: '/github-actions/03-advanced/24-infrastructure.md' },
      { id: '25-multi-env', title: '25. Multi-Environment Deployments', path: '/github-actions/03-advanced/25-multi-env.md' },
      { id: '26-release-automation', title: '26. Release Automation', path: '/github-actions/03-advanced/26-release-automation.md' },
      { id: '27-security', title: '27. Security in CI/CD', path: '/github-actions/03-advanced/27-security.md' },
      { id: '28-performance', title: '28. Performance Optimization', path: '/github-actions/03-advanced/28-performance.md' },
      { id: '29-observability', title: '29. Observability in CI/CD', path: '/github-actions/03-advanced/29-observability.md' }
    ]
  }
];
