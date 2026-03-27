# 19. GitHub CLI

## GitHub CLI (gh)

The GitHub CLI brings GitHub to your terminal.

### Installation

(Instructions vary by OS. Assume pre-installed or provide link to `cli.github.com`).

### Common Commands

*   `gh repo clone <repo>`
*   `gh pr create`
*   `gh pr list`
*   `gh issue create`
*   `gh repo view --web`

## Lab: Create PR Using CLI

1.  **Auth:** Run `gh auth login` and follow the prompts.
2.  **Branch:** Create a new branch and make a change.
3.  **Push:** Push the branch.
4.  **Create PR:**
    ```bash
    gh pr create --title "CLI PR" --body "Created via CLI"
    ```
5.  **View:** Select **Submit**. Then run `gh pr view --web` to see it in the browser.
