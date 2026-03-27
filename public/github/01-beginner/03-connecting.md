# 03. Connecting Local Git with GitHub

## Connecting a Local Project

Often, you start a project locally and then want to push it to GitHub.

### Adding a Remote

A "remote" is a link to the version of your repository hosted on the internet. By convention, the primary remote is named `origin`.

```bash
git remote add origin https://github.com/username/repo-name.git
```

### Pushing Code

"Pushing" sends your committed changes to a remote repository.

```bash
git push -u origin main
```

*   `-u`: Sets the upstream (tracking) reference. You only need to use this once. Afterward, you can just type `git push`.
*   `origin`: The name of the remote.
*   `main`: The branch you are pushing.

### Fetch vs Pull

*   **Fetch:** Downloads new data from a remote repository but doesn't integrate any of it into your working files. It's safe and non-destructive.
*   **Pull:** Fetches and *immediately merges* the remote content into your local branch.

## Lab: Push a Local Project to GitHub

1.  **Local Setup:**
    ```bash
    mkdir my-local-project
    cd my-local-project
    git init
    echo "# My Local Project" > README.md
    git add .
    git commit -m "Initial commit"
    ```
2.  **GitHub Setup:** Create an *empty* repository on GitHub named `my-local-project` (do *not* add a README).
3.  **Connect:**
    ```bash
    git remote add origin <YOUR_REPO_URL>
    git branch -M main
    git push -u origin main
    ```
4.  **Verify:** Refresh the GitHub page. You should see your README.
