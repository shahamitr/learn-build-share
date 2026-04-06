import { Workflow, Play, Settings } from 'lucide-react';

export const gitlabCurriculum = [
  {
    id: 'beginner',
    title: 'Beginner Level — GitLab CI/CD Foundations',
    description: 'Start by understanding version control, basic CI/CD concepts, and your first GitLab pipeline.',
    estimatedDuration: '2 hours 35 mins',
    icon: Play,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    modules: [
      { id: 'gitlab-intro', title: '01. Introduction to CI/CD & GitLab', duration: '15 min', type: 'theory', path: '/gitlab/01-beginner/01-intro.md' },
      { id: 'gitlab-architecture', title: '02. GitLab CI/CD Architecture', duration: '20 min', type: 'theory', path: '/gitlab/01-beginner/02-architecture.md' },
      { id: 'gitlab-runners', title: '03. Setting up GitLab Runners', duration: '25 min', type: 'lab', path: '/gitlab/01-beginner/03-runners.md' },
      { id: 'gitlab-yaml-anatomy', title: '04. Anatomy of .gitlab-ci.yml', duration: '20 min', type: 'theory', path: '/gitlab/01-beginner/04-yaml-anatomy.md' },
      { id: 'gitlab-first-pipeline', title: '05. Creating Your First Pipeline', duration: '30 min', type: 'lab', path: '/gitlab/01-beginner/05-first-pipeline.md' },
      { id: 'gitlab-stages-jobs', title: '06. Pipeline Stages & Jobs', duration: '25 min', type: 'theory', path: '/gitlab/01-beginner/06-stages-jobs.md' },
      { id: 'gitlab-troubleshooting', title: '07. Troubleshooting Pipeline Failures', duration: '20 min', type: 'lab', path: '/gitlab/01-beginner/07-troubleshooting.md' }
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediate Level — Practical Pipelines',
    description: 'Build practical CI/CD workflows with multiple stages, variables, testing, and Docker.',
    estimatedDuration: '3 hours 20 mins',
    icon: Workflow,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    modules: [
      { id: 'gitlab-pipeline-structure', title: '08. Pipeline Structure & Variables', duration: '25 min', type: 'theory', path: '/gitlab/02-intermediate/08-pipeline-structure.md' },
      { id: 'gitlab-branching-envs', title: '09. Branching Strategies & Environments', duration: '30 min', type: 'lab', path: '/gitlab/02-intermediate/09-branching-envs.md' },
      { id: 'gitlab-testing-artifacts', title: '10. Testing & Artifacts', duration: '35 min', type: 'lab', path: '/gitlab/02-intermediate/10-testing-artifacts.md' },
      { id: 'gitlab-docker', title: '11. Using Docker in Pipelines', duration: '30 min', type: 'lab', path: '/gitlab/02-intermediate/11-docker.md' },
      { id: 'gitlab-caching-optimization', title: '12. Pipeline Caching & Optimization', duration: '25 min', type: 'theory', path: '/gitlab/02-intermediate/12-caching-optimization.md' },
      { id: 'gitlab-deployment-strategies', title: '13. Deployment Strategies', duration: '30 min', type: 'lab', path: '/gitlab/02-intermediate/13-deployment-strategies.md' },
      { id: 'gitlab-templates', title: '14. GitLab CI/CD Templates', duration: '25 min', type: 'theory', path: '/gitlab/02-intermediate/14-templates.md' }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Level — Production & DevOps',
    description: 'Design scalable, enterprise-level pipelines with optimization, security, and IaC.',
    estimatedDuration: '4 hours 20 mins',
    icon: Settings,
    color: 'text-rose-600',
    bgColor: 'bg-rose-100',
    modules: [
      { id: 'gitlab-advanced-features', title: '15. Advanced Pipeline Features (Rules, Needs, DAG)', duration: '35 min', type: 'theory', path: '/gitlab/03-advanced/15-advanced-features.md' },
      { id: 'gitlab-security-compliance', title: '16. Security & Compliance (SAST/DAST)', duration: '40 min', type: 'lab', path: '/gitlab/03-advanced/16-security-compliance.md' },
      { id: 'gitlab-iac', title: '17. Infrastructure as Code (IaC) Integration', duration: '35 min', type: 'lab', path: '/gitlab/03-advanced/17-iac.md' },
      { id: 'gitlab-custom-runners', title: '18. Custom Runners & Scaling', duration: '45 min', type: 'lab', path: '/gitlab/03-advanced/18-custom-runners.md' },
      { id: 'gitlab-monitoring', title: '19. Monitoring & Observability', duration: '35 min', type: 'theory', path: '/gitlab/03-advanced/19-monitoring.md' },
      { id: 'gitlab-multi-project', title: '20. GitLab CI/CD for Multi-Project Pipelines', duration: '40 min', type: 'theory', path: '/gitlab/03-advanced/20-multi-project.md' },
      { id: 'gitlab-enterprise-devops', title: '21. Enterprise DevOps Best Practices', duration: '30 min', type: 'theory', path: '/gitlab/03-advanced/21-enterprise-devops.md' }
    ]
  }
];
