# 19. Scheduled Workflows

## Cron Syntax

You can schedule workflows to run at specific times.

```yaml
on:
  schedule:
    # Minute Hour DayOfMonth Month DayOfWeek
    - cron: '0 0 * * *' # Every day at midnight
```

## Lab: Run Nightly Workflow

1.  **Create Workflow:**
    ```yaml
    name: Nightly Build
    on:
      schedule:
        - cron: '*/5 * * * *' # Every 5 minutes (for testing)
    jobs:
      tick:
        runs-on: ubuntu-latest
        steps:
          - run: echo "Tick tock"
    ```
2.  **Wait:** Wait 5-10 minutes.
3.  **Check:** See if the workflow triggered automatically.
