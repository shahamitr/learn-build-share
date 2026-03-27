# 05. Branching Workflow in GitHub

## The GitHub Flow

GitHub encourages a branch-based workflow.

### Default Branch

The `main` (formerly `master`) branch is the default branch. It should always contain deployable, production-ready code.

### Feature Branches

When working on a new feature or bug fix, you should create a new branch off of `main`.

*   **Naming:** Use descriptive names like `feature/login-page`, `bugfix/header-alignment`, or `docs/update-readme`.

### Why Avoid Committing to Main?

1.  **Stability:** `main` stays stable for other developers.
2.  **Code Review:** Working on a branch allows you to open a Pull Request for review before merging.
3.  **CI/CD:** Automated tests can run on the branch to ensure nothing breaks.

## Lab: Create Feature Branch and Push It

1.  **Create Branch:**
    ```bash
    git checkout -b feature/update-readme
    ```
2.  **Edit:** Open `README.md` and add a line: "This project is for learning GitHub."
3.  **Commit:**
    ```bash
    git add README.md
    git commit -m "Update README description"
    ```
4.  **Push:**
    ```bash
    git push -u origin feature/update-readme
    ```
5.  **Check GitHub:** Go to your repo page. You should see a yellow banner saying "feature/update-readme had recent pushes".
