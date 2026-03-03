# Basic GitHub Workflow

## 1. Concept

**GitHub** (or GitLab/Bitbucket) is the cloud hosting for your Git repositories. The workflow involves syncing your local work with the cloud.

1.  **Repo:** The project folder on GitHub.
2.  **Push:** Uploading your local commits to GitHub.
3.  **Pull Request (PR):** A request to merge your branch into the main codebase. This is where code review happens.

### Visualizing the Workflow

![GitHub Workflow Diagram](https://placehold.co/600x400?text=GitHub+Workflow+Diagram)

**Diagram Explanation:**
*   **Local:** You code and commit.
*   **Push:** You send branch to GitHub.
*   **PR:** You ask teammates to review.
*   **Merge:** GitHub updates the main branch.

---

## 2. Why It Matters in Industry

*   **Code Review is Mandatory:** In professional teams, you are rarely allowed to push directly to `main`. You MUST use a Pull Request. This ensures a second pair of eyes checks your code for bugs.
*   **CI/CD Pipelines:** When you open a PR, robots (CI) automatically run tests on your code. If the tests fail, you can't merge.
*   **Backup:** If your laptop explodes, your code is safe on GitHub.

**Senior Engineer Insights:**
*   **"Small PRs are good PRs."** A PR with 200 lines of code gets a good review. A PR with 2,000 lines gets a "looks good to me" (LGTM) because no one can read that much.
*   **"Description matters."** When opening a PR, explain *what* you did and *why*. Don't leave it blank.

---

## 3. Common Mistakes

### 1. Pushing to Main
*   **Mistake:** `git push origin main`.
*   **Why it happens:** Habit from solo projects.
*   **Real-world Consequence:** "Error: Protected Branch". You will be blocked.
*   **Correction:** Create a branch, push the branch, open a PR.

### 2. Forgetting to Push
*   **Mistake:** Committing locally and shutting down the computer.
*   **Why it happens:** Thinking "Commit" = "Upload".
*   **Real-world Consequence:** Your team can't see your work.
*   **Correction:** Always `git push` at the end of the day.

---

## 4. Hands-on Lab

We will simulate the full loop.

**Prerequisites:** You need a GitHub account (or just simulate the commands).

### Step 1: Create a Repo on GitHub
*   Go to github.com/new.
*   Name it `git-learning-lab`.
*   Do NOT check "Initialize with README".

### Step 2: Link Local to Remote
In your terminal (inside your lab folder):
```bash
git remote add origin https://github.com/YOUR_USERNAME/git-learning-lab.git
git branch -M main
```

### Step 3: Push Your Code
Upload your `main` branch.
```bash
git push -u origin main
```
*`-u` links your local main to the remote main.*

### Step 4: Create a Feature Branch
```bash
git checkout -b feature/update-readme
echo "Learning Git is fun" >> README.md
git add README.md
git commit -m "Update README"
```

### Step 5: Push the Feature
```bash
git push origin feature/update-readme
```

### Step 6: Open a Pull Request
*   Go to your GitHub repo URL.
*   You will see a yellow banner: "feature/update-readme had recent pushes".
*   Click **"Compare & pull request"**.
*   Click **"Create pull request"**.

**Success!** You have officially joined the world of collaborative software engineering.
