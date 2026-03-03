# Merge vs Rebase

## 1. Concept

**Merge** and **Rebase** are two ways to combine code from one branch into another. They achieve the same goal (code integration) but create very different histories.

*   **Merge:** Preserves history exactly as it happened. It creates a "Merge Commit" that ties two branches together. It's non-destructive.
*   **Rebase:** Rewrites history. It takes your commits and "replays" them on top of the target branch. It creates a linear history without merge commits.

### Visualizing the Difference

![Merge vs Rebase Diagram](./images/merge-vs-rebase.png)

**Diagram Explanation:**
*   **Merge:** A diamond shape. History splits and rejoins.
*   **Rebase:** A straight line. It looks like you wrote your code *after* the other person finished theirs, even if you worked in parallel.

---

## 2. Why It Matters in Industry

*   **Clean History:** Large projects (like the Linux Kernel) prefer Rebase because it avoids "railroad tracks" (messy crossing lines) in the history graph.
*   **Traceability:** Highly regulated industries (Banking, Medical) often prefer Merge because it preserves the *exact* time and context of every change.
*   **Conflict Resolution:** Rebase forces you to resolve conflicts *per commit*. Merge resolves them *once*.

**Senior Engineer Insights:**
*   **"Local Rebase, Public Merge."** Rebase your feature branch locally to keep it clean. But once you push a Pull Request, use Merge (or Squash & Merge) to merge it into main.
*   **"Don't fear the Rebase."** It's cleaner, but dangerous if you don't understand it.

---

## 3. Common Mistakes

### 1. Rebasing Public Branches
*   **Mistake:** `git checkout main && git rebase feature`.
*   **Why it happens:** Trying to update main.
*   **Real-world Consequence:** You rewrite the history of `main`. Everyone else on the team now has a broken repo and has to delete/re-clone.
*   **Correction:** NEVER rebase a shared branch. Only rebase *your* private branch.

### 2. Resolving the Same Conflict 10 Times
*   **Mistake:** Rebasing a branch with 10 commits that all touch the same file.
*   **Why it happens:** Rebase replays commits one by one. You have to fix the conflict for *each* commit.
*   **Real-world Consequence:** Developer fatigue and rage quitting.
*   **Correction:** Squash your commits first, *then* rebase. Or just use Merge.

---

## 4. Hands-on Lab

We will see the difference in action.

**Prerequisites:** Open your terminal.

### Step 1: Setup
Create a repo with a split history.
```bash
mkdir git-lab-rebase-vs-merge
cd git-lab-rebase-vs-merge
git init
echo "Base" > file.txt
git add file.txt
git commit -m "Initial commit"
```

### Step 2: Create Two Branches
```bash
git branch feature-merge
git branch feature-rebase
```

### Step 3: Advance Main
Simulate work happening on main.
```bash
echo "Update on Main" >> file.txt
git add file.txt
git commit -m "Update main"
```

### Step 4: The Merge Way
```bash
git checkout feature-merge
echo "Merge Feature" >> file.txt
git add file.txt
git commit -m "Feature work"
# Now merge main into feature
git merge main
# You will likely get a conflict or a merge editor. Save and exit.
git log --graph --oneline --all
```
*Notice the branch structure.*

### Step 5: The Rebase Way
```bash
git checkout feature-rebase
echo "Rebase Feature" >> file.txt
git add file.txt
git commit -m "Feature work"
# Now rebase feature onto main
git rebase main
# Fix conflicts if any.
git log --graph --oneline --all
```
*Notice the linear structure. Your commit is now "on top" of main.*

**Success!** You now understand the two fundamental ways to integrate code.
