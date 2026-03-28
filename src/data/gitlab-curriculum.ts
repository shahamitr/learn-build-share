export const gitlabCurriculum = [
  {
    id: 'beginner',
    level: 'Beginner',
    title: 'GitLab Basics',
    description: 'Learn the fundamentals of GitLab, from projects to basic CI/CD.',
    modules: [
      {
        id: 'intro-to-gitlab',
        title: 'Introduction to GitLab',
        description: 'What is GitLab? Explore the interface and core features.',
        path: '/gitlab/intro.md'
      },
      {
        id: 'gitlab-projects',
        title: 'Managing GitLab Projects',
        description: 'Learn how to create and manage projects, issues, and merge requests.',
        path: '/gitlab/projects.md'
      }
    ]
  },
  {
    id: 'intermediate',
    level: 'Intermediate',
    title: 'GitLab CI/CD',
    description: 'Master the powerful CI/CD capabilities of GitLab.',
    modules: [
      {
        id: 'gitlab-ci-basics',
        title: 'GitLab CI/CD Fundamentals',
        description: 'Learn how to write your first .gitlab-ci.yml file.',
        path: '/gitlab/ci-basics.md'
      },
      {
        id: 'gitlab-runners',
        title: 'Working with GitLab Runners',
        description: 'Understand how runners execute your CI/CD jobs.',
        path: '/gitlab/runners.md'
      }
    ]
  },
  {
    id: 'advanced',
    level: 'Advanced',
    title: 'GitLab for Enterprise',
    description: 'Learn advanced GitLab features for large-scale development.',
    modules: [
      {
        id: 'gitlab-security',
        title: 'GitLab Security & Compliance',
        description: 'Learn about secret detection, SAST, and DAST in GitLab.',
        path: '/gitlab/security.md'
      }
    ]
  }
];
