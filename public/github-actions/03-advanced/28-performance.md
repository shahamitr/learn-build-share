# 28. Performance Optimization

## Optimization Techniques

1.  **Caching:** Cache dependencies (covered in Module 14).
2.  **Parallelization:** Run independent jobs in parallel.
3.  **Artifacts:** Don't upload unnecessary files.
4.  **Timeouts:** Set timeouts to prevent stuck jobs from consuming minutes.

```yaml
jobs:
  build:
    timeout-minutes: 10
```

## Lab: Optimize Pipeline

1.  **Analyze:** Look at a slow workflow.
2.  **Optimize:** Add caching or split a long job into two parallel jobs.
