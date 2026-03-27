# 13. Pull Request Best Practices

## Writing Good PR Descriptions

A good PR description helps reviewers understand your changes quickly.

*   **Summary:** What does this PR do?
*   **Motivation:** Why is this change necessary?
*   **Screenshots:** Visual proof (if applicable).
*   **Testing:** How did you verify this works?

### Linking Issues

You can link a PR to an issue using keywords.

*   `Closes #123`
*   `Fixes #123`
*   `Resolves #123`

When the PR is merged, the issue is automatically closed.

### Small vs Large PRs

Aim for small, focused PRs. Large PRs are hard to review and prone to bugs.

## Lab: Create Structured PR

1.  **Create Issue:** Create an issue titled "Update README structure". Note the number (e.g., #2).
2.  **Branch:** Create a branch `feature/readme-structure`.
3.  **Edit:** Reorganize your README sections.
4.  **Commit:** `git commit -m "Refactor README sections"`
5.  **Push:** Push the branch.
6.  **PR:** Open a PR. In the description, write: "This PR reorganizes the README for better readability. Closes #2."
7.  **Merge:** Merge the PR. Check that Issue #2 is now closed.
