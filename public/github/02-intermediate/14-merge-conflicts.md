# 14. Resolving Merge Conflicts in PRs

## Conflict Detection

GitHub automatically checks for merge conflicts when you open a PR. If there are conflicts, the "Merge pull request" button will be disabled.

### Conflict Resolution Workflow

1.  **Identify:** GitHub tells you which files have conflicts.
2.  **Resolve Locally:**
    ```bash
    git checkout feature-branch
    git pull origin main  # Pull latest changes from main into your branch
    # Fix conflicts in your editor
    git add .
    git commit -m "Resolve merge conflicts"
    git push origin feature-branch
    ```
3.  **Resolve on GitHub:** For simple text conflicts, you can use the web editor.

## Lab: Resolve Merge Conflict

1.  **Setup:** Create two branches: `branch-a` and `branch-b`.
2.  **Conflict:**
    *   On `branch-a`, change line 1 of README to "Hello A". Commit & Push.
    *   On `branch-b`, change line 1 of README to "Hello B". Commit & Push.
3.  **PR:** Open a PR for `branch-a` merging into `main`. Merge it.
4.  **PR:** Open a PR for `branch-b` merging into `main`. GitHub will report a conflict.
5.  **Resolve:** Click **Resolve conflicts**.
6.  **Edit:** Choose which version to keep (or combine them).
7.  **Mark as Resolved:** Click **Mark as resolved**.
8.  **Commit Merge:** Click **Commit merge**.
9.  **Merge PR:** Now you can merge the PR.
