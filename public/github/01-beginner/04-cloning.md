# 04. Cloning Repositories

## Cloning

Cloning creates a local copy of a remote repository. It downloads all files, history, and branches.

### Cloning Public Repositories

You can clone any public repository on GitHub to study its code or contribute to it.

```bash
git clone https://github.com/facebook/react.git
```

### Remote Tracking Branches

When you clone, Git automatically sets up a remote connection called `origin`. It also creates local copies of the remote branches (e.g., `origin/main`).

You can see all remote branches with:

```bash
git branch -r
```

## Lab: Explore Project Structure

1.  **Clone:**
    ```bash
    git clone https://github.com/octocat/Spoon-Knife.git
    ```
2.  **Explore:**
    ```bash
    cd Spoon-Knife
    git status
    git remote -v
    ```
3.  **View History:**
    ```bash
    git log --oneline --graph --all
    ```
