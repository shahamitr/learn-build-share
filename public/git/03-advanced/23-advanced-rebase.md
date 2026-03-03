# Advanced Rebase Scenarios

## 1. Concept

You know basic rebase. Now let's look at **`--onto`**.

Imagine you have a chain of branches:
`main` → `feature-A` → `feature-B`.

`feature-B` depends on `feature-A`.
Suddenly, `feature-A` is deleted or merged, but you want to move `feature-B` to be based directly on `main`.

A normal rebase might try to re-apply `feature-A`'s commits.
`git rebase --onto` allows you to say: "Take the commits from B, but NOT the ones from A, and put them on Main."

### Visualizing Rebase Onto

![Rebase Onto Diagram](./images/rebase-onto.png)

**Diagram Explanation:**
*   **Before:** `Main -- A -- B`
*   **Command:** `git rebase --onto Main A B`
*   **After:** `Main -- B` (A is skipped).

---

## 2. Why It Matters in Industry

*   **Stacked Pull Requests:** You are working on a huge feature. You split it into Part 1 and Part 2. Part 2 branches off Part 1.
    *   Part 1 gets merged into Main.
    *   Now Part 2 has duplicate commits from Part 1.
    *   You must `rebase --onto main` to clean up Part 2.
*   **Cleaning Up Dependencies:** You branched off a teammate's branch to help them. They deleted their branch. You need to save your work onto main.

**Senior Engineer Insights:**
*   **"Surgery for history."** `--onto` is the scalpel. It gives you total control over ranges of commits.
*   **"The syntax is confusing."** `git rebase --onto <new-base> <old-base> <branch-to-move>`. Memorize this pattern.

---

## 3. Common Mistakes

### 1. Rebasing the Wrong Range
*   **Mistake:** Including the commits you wanted to drop.
*   **Why it happens:** Confusing `<old-base>` (the cutoff point).
*   **Real-world Consequence:** Duplicate commits and massive conflicts.
*   **Correction:** The `<old-base>` is the *last commit you want to skip*.

---

## 4. Hands-on Lab

We will simulate the "Stacked Branch" problem.

**Prerequisites:** Open your terminal.

### Step 1: Setup Main
```bash
mkdir git-lab-onto
cd git-lab-onto
git init
echo "Init" > file.txt
git add file.txt
git commit -m "Initial commit"
```

### Step 2: Create Feature A
```bash
git checkout -b feature-A
echo "A" >> file.txt
git commit -am "Feature A"
```

### Step 3: Create Feature B (Stacked)
```bash
git checkout -b feature-B
echo "B" >> file.txt
git commit -am "Feature B"
```

### Step 4: Merge A into Main
Simulate A getting merged.
```bash
git checkout master 2>/dev/null || git checkout main
git merge feature-A
```

### Step 5: The Problem
Now `feature-B` is based on `feature-A`, but `feature-A` is already in main. We want `feature-B` to base off `main` directly, skipping the "A" commit (since it's already there).

### Step 6: The Fix (--onto)
```bash
git checkout feature-B
# "Take commits from feature-A until feature-B, and place them onto main"
git rebase --onto main feature-A feature-B
```

### Step 7: Verify
```bash
git log --oneline
```
*You should see "Feature B" directly on top of "Feature A" (which came from main).*

**Success!** You have successfully transplanted a branch.
