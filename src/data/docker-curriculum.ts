export const dockerCurriculum = [
  {
    level: "Beginner",
    id: "beginner",
    description: "Docker Fundamentals. Understand containers and run applications using Docker.",
    modules: [
      { id: "01-intro", title: "01. Introduction to Containers and Docker", path: "/docker/01-beginner/01-intro.md" },
      { id: "02-install", title: "02. Installing Docker", path: "/docker/01-beginner/02-install.md" },
      { id: "03-architecture", title: "03. Docker Architecture", path: "/docker/01-beginner/03-architecture.md" },
      { id: "04-images", title: "04. Working with Docker Images", path: "/docker/01-beginner/04-images.md" },
      { id: "05-containers", title: "05. Managing Containers", path: "/docker/01-beginner/05-containers.md" },
      { id: "06-volumes", title: "06. Docker Volumes (Data Persistence)", path: "/docker/01-beginner/06-volumes.md" },
      { id: "07-networking", title: "07. Docker Networking Basics", path: "/docker/01-beginner/07-networking.md" },
      { id: "08-dockerfile-intro", title: "08. Introduction to Dockerfile", path: "/docker/01-beginner/08-dockerfile-intro.md" },
      { id: "09-building-images", title: "09. Building Docker Images", path: "/docker/01-beginner/09-building-images.md" },
      { id: "10-publishing", title: "10. Publishing Images to Docker Hub", path: "/docker/01-beginner/10-publishing.md" },
    ]
  },
  {
    level: "Intermediate",
    id: "intermediate",
    description: "Real Development Workflows. Use Docker for development and multi-service applications.",
    modules: [
      { id: "11-optimizing", title: "11. Optimizing Dockerfiles", path: "/docker/02-intermediate/11-optimizing.md" },
      { id: "12-multi-stage", title: "12. Multi-stage Docker Builds", path: "/docker/02-intermediate/12-multi-stage.md" },
      { id: "13-compose-intro", title: "13. Docker Compose Introduction", path: "/docker/02-intermediate/13-compose-intro.md" },
      { id: "14-compose-networking", title: "14. Docker Compose Networking", path: "/docker/02-intermediate/14-compose-networking.md" },
      { id: "15-env-vars", title: "15. Environment Variables & Configuration", path: "/docker/02-intermediate/15-env-vars.md" },
      { id: "16-debugging", title: "16. Container Debugging Techniques", path: "/docker/02-intermediate/16-debugging.md" },
      { id: "17-dev-envs", title: "17. Docker for Development Environments", path: "/docker/02-intermediate/17-dev-envs.md" },
      { id: "18-security-basics", title: "18. Docker Security Basics", path: "/docker/02-intermediate/18-security-basics.md" },
      { id: "19-private-registries", title: "19. Private Docker Registries", path: "/docker/02-intermediate/19-private-registries.md" },
      { id: "20-compose-production", title: "20. Docker Compose Production Setup", path: "/docker/02-intermediate/20-compose-production.md" },
    ]
  },
  {
    level: "Advanced",
    id: "advanced",
    description: "Production & DevOps. Use Docker like a professional DevOps engineer.",
    modules: [
      { id: "21-internals", title: "21. Docker Internals", path: "/docker/03-advanced/21-internals.md" },
      { id: "22-resources", title: "22. Container Resource Management", path: "/docker/03-advanced/22-resources.md" },
      { id: "23-logging", title: "23. Docker Logging Drivers", path: "/docker/03-advanced/23-logging.md" },
      { id: "24-monitoring", title: "24. Container Monitoring", path: "/docker/03-advanced/24-monitoring.md" },
      { id: "25-hardening", title: "25. Docker Security Hardening", path: "/docker/03-advanced/25-hardening.md" },
      { id: "26-cicd", title: "26. Docker in CI/CD Pipelines", path: "/docker/03-advanced/26-cicd.md" },
      { id: "27-scanning", title: "27. Docker Image Scanning", path: "/docker/03-advanced/27-scanning.md" },
      { id: "28-swarm", title: "28. Docker Swarm Introduction", path: "/docker/03-advanced/28-swarm.md" },
      { id: "29-multi-arch", title: "29. Multi-Architecture Docker Images", path: "/docker/03-advanced/29-multi-arch.md" },
    ]
  }
];
