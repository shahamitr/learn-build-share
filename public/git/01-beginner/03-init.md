# Git Basics: The Three States

## 1. Concept

Git is not just a "Save" button; it is a time machine. To use it effectively, you must understand the **Three States** of a file in Git.

1.  **Working Directory:** This is your current workspace. It's where you edit files, delete them, or create new ones. These changes are "untracked" by Git initially.
2.  **Staging Area (Index):** This is the "loading dock." You choose specific changes from your working directory to "stage" here. It allows you to prepare a commit precisely.
3.  **Repository (HEAD):** This is the permanent database. When you "commit," you take a snapshot of the Staging Area and save it to the Repository history.

### Visualizing the Flow

![Git Three States Diagram](./images/git-three-states.png)

**Diagram Explanation:**
*   **Edit file** → Change is in *Working Directory*.
*   **`git add`** → Change moves to *Staging Area*.
*   **`git commit`** → Change moves to *Repository*.

---

## 2. Why It Matters in Industry

In professional software engineering, we don't just "save everything." We craft commits that tell a story.

*   **Atomic Commits:** Ideally, one commit should fix one bug or add one feature. The Staging Area allows you to edit 10 files but only commit the 3 relevant to the bug fix first.
*   **Code Review Readiness:** If you dump a week's worth of work into one commit, your teammates cannot review it effectively.
*   **Rollbacks:** If a specific change breaks production, granular commits allow us to revert *just that change* without losing other work.

**Senior Engineer Insights:**
*   **"Commit often, push less."** Make many small local commits to save your progress. You can clean them up later before sharing.
*   **"The Staging Area is your filter."** Use it to separate configuration changes (that shouldn't be committed) from code changes.

---

## 3. Common Mistakes

### 1. The "Blind Add"
*   **Mistake:** Running `git add .` without checking `git status` first.
*   **Why it happens:** It's fast and easy.
*   **Real-world Consequence:** You accidentally commit a 500MB log file, a secret API key, or a temporary build folder. This bloats the repo and causes security incidents.
*   **Correction:** Always run `git status` first. Use `.gitignore` to block unwanted files.

### 2. The "WIP" Commit
*   **Mistake:** Committing broken code just to save it, with the message "wip" (work in progress).
*   **Why it happens:** Fear of losing work.
*   **Real-world Consequence:** If the build server runs on every commit, you just broke the build for everyone.
*   **Correction:** Use `git stash` to save temporary work without committing, or commit to a private feature branch.

### 3. Ignoring `.gitignore`
*   **Mistake:** Not setting up `.gitignore` at the start of the project.
*   **Why it happens:** Forgetting that system files (like `.DS_Store` or `node_modules`) are generated automatically.
*   **Real-world Consequence:** Merge conflicts on files that shouldn't even be tracked.
*   **Correction:** Initialize every repo with a standard `.gitignore` for your language/framework.

---

## 4. Hands-on Lab

We will walk through the lifecycle of a file from creation to permanent history.

**Prerequisites:** Open your terminal.

### Step 1: Initialize a New Repo
Create a clean slate for this lab.

```bash
mkdir git-lab-basics
cd git-lab-basics
git init
```

### Step 2: Create a File (Working Directory)
Create a simple text file.

```bash
echo "Hello World" > hello.txt
# Check status - notice it is "Untracked" (Red)
git status
```

### Step 3: Stage the File (Staging Area)
Move the file to the staging area.

```bash
git add hello.txt
# Check status - notice it is "Changes to be committed" (Green)
git status
```

### Step 4: Modify the File Again (Hybrid State)
This demonstrates the power of the staging area. We will modify the file *after* adding it.

```bash
echo "Hello Universe" >> hello.txt
# Check status - notice hello.txt appears TWICE!
# Once in "Changes to be committed" (Green - the first version)
# Once in "Changes not staged for commit" (Red - the second line)
git status
```

### Step 5: Commit the First Version (Repository)
We will commit only what was staged (the first line), ignoring the second line for now.

```bash
git commit -m "Feat: Add initial greeting"
```

### Step 6: Verify the State
Check what happened.

```bash
# The file in the repo has "Hello World"
git log --oneline

# The file on disk has "Hello World" AND "Hello Universe"
cat hello.txt

# The second line is still waiting in the Working Directory
git status
```

### Step 7: Finish the Job
Now stage and commit the second change.

```bash
git add hello.txt
git commit -m "Feat: Expand greeting to universe"
git log --oneline
```

**Success!** You have successfully manipulated the three states of Git to control exactly what goes into your project history.
