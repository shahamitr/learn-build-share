# 16. Deploying Applications

## Deployment Strategies

GitHub Actions can deploy to AWS, Azure, Google Cloud, Heroku, Netlify, etc.

### Example: Deploy to GitHub Pages

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Lab: Deploy Static Site (Simulation)

1.  **Workflow:**
    ```yaml
    jobs:
      deploy:
        runs-on: ubuntu-latest
        steps:
          - run: echo "Building..."
          - run: echo "Deploying to production server..."
          - run: echo "Deployment complete!"
    ```
2.  **Run:** Verify the steps execute.
