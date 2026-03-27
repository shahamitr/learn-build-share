# 20. Pull Request Automation

## Quality Gates

You can require checks to pass before a PR can be merged.

1.  **Create Workflow:** Trigger on `pull_request`.
2.  **Settings:** Go to Repository Settings > Branches > Add protection rule.
3.  **Require Status Checks:** Check "Require status checks to pass before merging".
4.  **Select Check:** Search for your job name (e.g., `build`).

## Lab: Block PR if Tests Fail

1.  **Workflow:** Create a workflow that runs tests on PRs.
2.  **Branch Protection:** Enable protection on `main` (if you have a public repo or Pro plan).
3.  **Test:** Open a PR with failing tests. Verify that the "Merge" button is blocked or warns you.
