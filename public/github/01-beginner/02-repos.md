# 02. Creating and Managing Repositories

## Creating Repositories

A repository (or "repo") is like a project folder. It contains all your project's files and the revision history for each file.

### Public vs Private Repositories

*   **Public:** Anyone on the internet can see this repository. You choose who can commit. Ideally used for open-source projects.
*   **Private:** You choose who can see and commit to this repository. Used for proprietary or personal projects.

### README Files

A `README.md` file is the front page of your repository. It tells people:
*   What the project does.
*   How to install it.
*   How to contribute.

It uses Markdown syntax (more on this in Module 09).

### Repository Visibility

You can change a repository's visibility in the **Settings** tab under the **Danger Zone**. Be careful: making a private repo public exposes all code and history to the world.

## Lab: Create Repository with README and Clone It

1.  **Create:** Create a new repository named `learning-github`.
2.  **Initialize:** Check **Add a README file** and select a **.gitignore** template (e.g., Node).
3.  **Clone:**
    *   Click the green **Code** button.
    *   Copy the HTTPS URL.
    *   Open your terminal.
    *   Run: `git clone <PASTE_URL_HERE>`
    *   `cd learning-github`
    *   `ls -la` (You should see `.git`, `.gitignore`, and `README.md`).
