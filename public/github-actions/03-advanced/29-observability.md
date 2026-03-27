# 29. Observability in CI/CD

## Monitoring

Keep track of build times, failure rates, and frequency.

## Notifications

Send alerts to Slack or Email when builds fail.

```yaml
steps:
  - name: Notify Slack
    if: failure()
    uses: slackapi/slack-github-action@v1.24.0
    with:
      channel-id: 'C012345'
      slack-message: "Build failed!"
```

## Lab: Analyze Metrics

1.  **Review:** Go to the "Actions" tab.
2.  **Usage:** Check "Usage metrics" (if available) or simply review the duration of recent runs to identify trends.
