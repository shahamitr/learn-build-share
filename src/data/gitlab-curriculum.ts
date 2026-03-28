export const gitlabCurriculum = [
  {
    id: 'beginner',
    level: 'Beginner',
    title: '🟢 Beginner Level (Foundations)',
    description: 'Start by understanding version control, basic CI/CD concepts, and your first GitLab pipeline.',
    modules: [
      {
        id: 'gitlab-foundations',
        title: 'CI/CD & Git Foundations',
        description: 'What is CI/CD, pipelines, stages, jobs, and Git basics (commits, branches, merge).',
        path: '/gitlab/foundations.md'
      },
      {
        id: 'gitlab-intro-first-pipeline',
        title: 'GitLab Intro & First Pipeline',
        description: 'Creating projects, UI navigation, and writing your first .gitlab-ci.yml file.',
        path: '/gitlab/first-pipeline.md'
      },
      {
        id: 'gitlab-runners-basics',
        title: 'GitLab Runners (Basics)',
        description: 'What is a GitLab Runner, shared vs. specific runners, and how they execute jobs.',
        path: '/gitlab/runners-basics.md'
      }
    ]
  },
  {
    id: 'intermediate',
    level: 'Intermediate',
    title: '🟡 Intermediate Level (Practical Pipelines)',
    description: 'Build practical CI/CD workflows with multiple stages, variables, testing, and Docker.',
    modules: [
      {
        id: 'gitlab-pipeline-structure',
        title: 'Pipeline Structure & Variables',
        description: 'Multiple stages, artifacts, caching, variables, and YAML anchors for reusability.',
        path: '/gitlab/pipeline-structure.md'
      },
      {
        id: 'gitlab-branch-testing-docker',
        title: 'Branching, Testing & Docker',
        description: 'Branch-based pipelines, unit tests, code coverage, and Docker integration.',
        path: '/gitlab/testing-docker.md'
      },
      {
        id: 'gitlab-environments-deploy',
        title: 'Environments & Deployment',
        description: 'Dev/Staging/Prod environments, manual approvals, and deployment via SSH/Scripts.',
        path: '/gitlab/environments-deploy.md'
      }
    ]
  },
  {
    id: 'advanced',
    level: 'Advanced',
    title: '🔴 Advanced Level (Production & DevOps)',
    description: 'Design scalable, enterprise-level pipelines with optimization, security, and IaC.',
    modules: [
      {
        id: 'gitlab-advanced-features',
        title: 'Advanced Features & Optimization',
        description: 'Parent-child, multi-project, and dynamic pipelines with caching strategies.',
        path: '/gitlab/advanced-features.md'
      },
      {
        id: 'gitlab-security-iac',
        title: 'Security & IaC',
        description: 'Secret/masked variables, dependency scanning, SAST/DAST, and Terraform/K8s.',
        path: '/gitlab/security-iac.md'
      },
      {
        id: 'gitlab-devops-custom-runners',
        title: 'DevOps & Custom Runners',
        description: 'Blue-Green/Canary deployments, Auto DevOps, and setting up custom runners.',
        path: '/gitlab/devops-runners.md'
      }
    ]
  }
];
