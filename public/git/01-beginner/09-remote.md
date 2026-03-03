# Remote Collaboration: Fetch, Pull, and Push

## 1. Concept

Git is **distributed**. Your computer has a full copy of the repo, and the server (GitHub/GitLab) has another copy. They do not sync automatically. You must manually push and pull changes.

1.  **`git remote`**: A bookmark to the server's URL (usually named `origin`).
2.  **`git fetch`**: Downloads new data from the server but **does not** touch your working files. It just updates your knowledge of what the server has.
3.  **`git pull`**: `fetch` + `merge`. Downloads data AND tries to combine it with your current files immediately.
4.  **`git push`**: Uploads your commits to the server.

### Visualizing the Flow

![Git Remote Diagram](./images/git-remote.png)

**Diagram Explanation:**
*   **Remote Repo:** The source of truth.
*   **Fetch:** Updates your local "Remote Tracking Branch" (`origin/main`).
*   **Merge:** Updates your local "Working Branch" (`main`).
*   **Pull:** Does both in one step.

---

## 2. Why It Matters in Industry

You never work alone. Understanding remotes is the difference between "it works on my machine" and "it works in production."

*   **The "Reject" Error:** You try to push, but Git says "Updates were rejected". This means a teammate pushed code while you were working. You must `pull` (sync) their changes before you can `push` yours.
*   **Code Review Workflow:** You push a branch → Open Pull Request → Teammate reviews → You push fixes to the *same branch*.
*   **Safety:** `git fetch` is safer than `git pull`. If you `pull`, you might trigger a messy merge conflict unexpectedly. `fetch` lets you *look* at the changes (`git log origin/main`) before deciding to merge them.

**Senior Engineer Insights:**
*   **"Always pull before you start."** Start your day with `git checkout main && git pull`. Don't build new features on top of week-old code.
*   **"Force push with lease."** Never use `git push -f` (force). It destroys history. If you must overwrite history (after a rebase), use `git push --force-with-lease`. It checks if anyone else pushed code you might be overwriting.

---

## 3. Common Mistakes

### 1. Pushing to Wrong Branch
*   **Mistake:** Working on `main` locally and pushing directly to `main`.
*   **Why it happens:** Forgetting to create a feature branch.
*   **Real-world Consequence:** Most companies block pushes to `main`. Your push will be rejected, and you'll have to move your commits to a branch manually.
*   **Correction:** Always check `git branch` before committing.

### 2. Fear of Fetching
*   **Mistake:** Only using `git pull`.
*   **Why it happens:** It's easier.
*   **Real-world Consequence:** You pull a broken build or a massive conflict right into your working directory without warning.
*   **Correction:** Get in the habit of `git fetch --all` to see what's happening without modifying your files.

### 3. Detached HEAD
*   **Mistake:** Checking out a remote branch directly (`git checkout origin/main`).
*   **Why it happens:** Trying to look at remote code.
*   **Real-world Consequence:** You are in "Detached HEAD" state. Any commits you make here belong to *no branch* and will be lost when you switch away.
*   **Correction:** Create a local tracking branch: `git checkout -b main origin/main`.

---

## 4. Hands-on Lab

Since we don't have a real GitHub server here, we will simulate a remote using a second folder. This is exactly how Git works internally!

**Prerequisites:** Open your terminal.

### Step 1: Create the "Server" (Remote Repo)
We will create a "bare" repository. This acts just like GitHub.

```bash
mkdir git-lab-remote-server.git
cd git-lab-remote-server.git
git init --bare
cd ..
```

### Step 2: Create "Developer A" (You)
Clone the server to create your local workspace.

```bash
git clone ./git-lab-remote-server.git developer-a
cd developer-a
```

### Step 3: Push First Commit
Create the project and push it "upstream".

```bash
echo "Project Start" > README.md
git add README.md
git commit -m "Initial commit"
git push origin master
```

### Step 4: Create "Developer B" (Teammate)
Simulate a teammate cloning the same repo in a different folder.

```bash
cd ..
git clone ./git-lab-remote-server.git developer-b
cd developer-b
```

### Step 5: Teammate Pushes Code
Developer B makes a change and pushes.

```bash
echo "Teammate was here" >> README.md
git add README.md
git commit -m "Update from teammate"
git push origin master
```

### Step 6: The Conflict (Back to You)
Go back to Developer A. You don't have B's changes yet.
You make a conflicting change.

```bash
cd ../developer-a
echo "I was here first" >> README.md
git add README.md
git commit -m "Update from me"
```

### Step 7: The Rejected Push
Try to push.

```bash
git push origin master
```
**Result:** Git will reject this! `error: failed to push some refs... updates were rejected`.
*Why?* Because the server has "Teammate's" commit, and you don't.

### Step 8: The Fix (Pull and Merge)
You must pull the changes first.

```bash
git pull origin master
```
*Git will try to merge. You will likely get a conflict.*

**Action:**
1.  Open `README.md`.
2.  Fix the conflict (keep both lines?).
3.  Save.

```bash
git add README.md
git commit -m "Merge teammate changes"
git push origin master
```

**Success!** You have successfully collaborated with a remote repository and resolved a "rejected push" scenario.
