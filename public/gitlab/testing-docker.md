# Branching, Testing & Docker

In this module, we'll explore the use of branching strategies, automated testing, and Docker in GitLab CI/CD pipelines.

## Branch-based Pipelines
- **Branching Strategies:**
    - **GitFlow:** Feature branches, develop, release, and main branches.
    - **GitHub Flow:** Feature branches and main branch.
- **Controlling Job Execution:**
    - **only/except:** Simple branch/tag filtering.
    - **rules:** Advanced logic for job creation.
```yaml
test-job:
  stage: test
  script:
    - npm test
  rules:
    - if: '$CI_PIPELINE_SOURCE == "merge_request_event"'
    - if: '$CI_COMMIT_BRANCH == "main"'
```

## Automated Testing Integration
- **Unit Testing:** Testing individual components of your application.
- **Integration Testing:** Testing how different components work together.
- **End-to-End (E2E) Testing:** Testing the entire application from the user's perspective.
- **Code Coverage:** Measuring the percentage of your code covered by tests. GitLab can display coverage in MRs.
- **JUnit Reports:** GitLab can parse JUnit XML reports to show test results in the UI.

## Docker Integration (Advanced)
- **Docker-in-Docker (DinD):** Running Docker commands inside a Docker container. (Common for building images)
- **Services:** Running auxiliary containers (e.g., database, redis) alongside your job container.
```yaml
test-job:
  stage: test
  services:
    - postgres:13
  variables:
    POSTGRES_DB: test_db
  script:
    - npm test
```
- **Container Registry:** GitLab's built-in registry for storing and managing Docker images.
```yaml
build-docker:
  stage: build
  image: docker:latest
  services:
    - docker:dind
  script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
    - docker build -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA .
    - docker push $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
```

## Practical Tip
When using Docker images in your pipeline, always specify the version of the image to ensure consistent results.
