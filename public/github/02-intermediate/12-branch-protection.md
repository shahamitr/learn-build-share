# 12. Branch Protection Rules

## Protecting Main

In a team, you want to prevent accidental pushes to `main` or force pushes that rewrite history.

### Required PR Reviews

You can require that all changes to `main` must be made via a Pull Request and approved by at least one other person.

### Prevent Force Pushes

Force pushing (`git push -f`) can delete commits from the remote history. This is dangerous on shared branches.

## Lab: Configure Branch Protection

1.  **Settings:** Go to your repository **Settings**.
2.  **Branches:** Click **Branches** in the sidebar.
3.  **Add Rule:** Click **Add branch protection rule**.
4.  **Pattern:** Enter `main`.
5.  **Require PR:** Check **Require a pull request before merging**.
6.  **Require Approvals:** Check **Require approvals** (set to 1).
7.  **Create:** Click **Create**.
8.  **Test:** Try to push directly to `main` from your terminal. It should fail!
