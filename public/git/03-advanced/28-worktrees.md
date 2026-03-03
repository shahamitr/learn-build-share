# Git Worktrees

## 1. Concept

**Git Worktrees** allow you to have **multiple branches checked out at the same time** in different folders, all linked to the same repository.

**Scenario:**
*   You are working on `feature-A` in your main folder.
*   You need to fix a bug on `main` immediately.
*   Instead of `git stash` -> `git checkout main`, you create a new folder next door that contains `main`.
*   You fix the bug in the new folder while `feature-A` stays open in your editor in the first folder.

### Visualizing Worktrees

![Git Worktree Diagram](https://placehold.co/600x400?text=Git+Worktree+Diagram)

**Diagram Explanation:**
*   **Repo:** `.git` folder (Shared).
*   **Worktree 1:** Folder A (Checked out `feature`).
*   **Worktree 2:** Folder B (Checked out `main`).

---

## 2. Why It Matters in Industry

*   **Context Switching:** If your app takes 10 minutes to `npm install` and start up, switching branches is expensive. With worktrees, you keep the server running in Folder A, and fix the bug in Folder B.
*   **Comparing Versions:** You can run the app in `v1.0` mode in one terminal and `v2.0` mode in another to visually compare behavior.

**Senior Engineer Insights:**
*   **"Don't abuse it."** Don't open 50 worktrees. You'll forget which is which. Use it for "The current task" and "The emergency task".
*   **"Disk space."** Remember, each worktree is a full copy of the files. `node_modules` will be duplicated.

---

## 3. Common Mistakes

### 1. Checking out the Same Branch
*   **Mistake:** Trying to checkout `main` in Worktree A when Worktree B is already on `main`.
*   **Why it happens:** Git prevents two folders from writing to the same branch ref to avoid corruption.
*   **Real-world Consequence:** Error: `'main' is already checked out`.
*   **Correction:** Detach HEAD in one of them, or create a temp branch.

---

## 4. Hands-on Lab

We will create a parallel workspace.

**Prerequisites:** Open your terminal.

### Step 1: Setup
```bash
mkdir git-lab-worktree
cd git-lab-worktree
git init
echo "v1" > app.txt
git add app.txt
git commit -m "v1"
```

### Step 2: Start Feature
```bash
git checkout -b feature
echo "v2" > app.txt
git commit -am "v2"
```

### Step 3: Create Worktree
We need to look at `main` (v1) without closing `feature` (v2).

```bash
# Create a new folder named 'hotfix-space' checking out 'main'
git worktree add ../hotfix-space master 2>/dev/null || git worktree add ../hotfix-space main
```

### Step 4: Verify
```bash
# Check original folder
cat app.txt
# Output: v2

# Check new folder
cat ../hotfix-space/app.txt
# Output: v1
```

### Step 5: Cleanup
When done, remove the worktree.
```bash
git worktree remove ../hotfix-space
```

**Success!** You have multitasked like a pro.
