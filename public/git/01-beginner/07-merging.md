# Merging Basics

## 1. Concept

**Merging** is bringing two universes back together. You took a branch, built a feature, and now you want to combine it back into `main`.

*   **Fast-Forward Merge:** If `main` hasn't changed since you left, Git just moves the `main` pointer forward to catch up with you. Easy.
*   **Merge Commit:** If `main` *did* change (someone else pushed code), Git creates a new "Merge Commit" that ties the two histories together.

### Visualizing Merge

![Git Merge Diagram](https://placehold.co/600x400?text=Git+Merge+Diagram)

**Diagram Explanation:**
*   **Fast Forward:** A straight line.
*   **Merge Commit:** A diamond shape where lines diverge and rejoin.

---

## 2. Why It Matters in Industry

*   **Integration:** This is how the team's work becomes one product.
*   **Continuous Delivery:** When you merge to `main`, it often triggers an automatic deployment to production. Merging is "shipping".
*   **History Preservation:** Merging keeps the history of exactly when a feature was added and who added it.

**Senior Engineer Insights:**
*   **"Delete after merge."** Once a branch is merged, delete it. It's clutter.
*   **"Squash and Merge."** (Advanced) On GitHub, we often "Squash" all your branch commits into one big commit when merging, to keep the main history clean.

---

## 3. Common Mistakes

### 1. Merging in the Wrong Direction
*   **Mistake:** Running `git merge main` while on `feature-branch` (updates feature), instead of `git merge feature-branch` while on `main` (updates main).
*   **Why it happens:** Confusion about "source" and "destination".
*   **Real-world Consequence:** Your feature is updated, but production is still empty.
*   **Correction:** Always switch to the **destination** branch (the one receiving code) before running merge.

### 2. Fear of the Merge Commit Message
*   **Mistake:** Git opens `vim` to ask for a merge message, and you panic and kill the terminal.
*   **Why it happens:** Unfamiliarity with default editors.
*   **Real-world Consequence:** A dangling lock file (`index.lock`) that prevents future git commands.
*   **Correction:** Type `:wq` and Enter to save and exit Vim.

---

## 4. Hands-on Lab

Let's merge the "Dark Mode" feature we created in the previous lab.

**Prerequisites:** You must have the `feature/dark-mode` branch from the previous lab.

### Step 1: Switch to Destination
We want to bring changes INTO `main`.
```bash
git checkout main
```

### Step 2: Merge
Bring the feature in.
```bash
git merge feature/dark-mode
```

### Step 3: Verify
Check that the file is now here.
```bash
ls settings.txt
```
*It should appear!*

### Step 4: Check History
See the merge in the log.
```bash
git log --oneline --graph
```

### Step 5: Cleanup
Delete the old branch since we are done with it.
```bash
git branch -d feature/dark-mode
```

**Success!** You have shipped your feature to the main codebase.
