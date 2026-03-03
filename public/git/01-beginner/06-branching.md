# Branching Basics

## 1. Concept

A **Branch** is a parallel universe for your code.

*   **Main Universe (`main`):** The working, production-ready code.
*   **Your Universe (`feature-login`):** A copy where you can break things, experiment, and build half-finished features without affecting the Main Universe.

Creating a branch is cheap and fast. It doesn't copy all the files; it just creates a new pointer to the current commit.

### Visualizing Branches

![Git Branch Diagram](./images/git-branch.png)

**Diagram Explanation:**
*   **Checkout:** Switching your "HEAD" (current view) to a different branch.
*   **Divergence:** `main` moves forward with bug fixes, while `feature` moves forward with new code. They grow separately.

---

## 2. Why It Matters in Industry

*   **Isolation:** You are building a new Payment System. It takes 2 weeks. You don't want your half-written, broken code to stop your teammates from fixing a typo on the Homepage.
*   **Code Review:** You can't review code if it's already mixed in with everyone else's. A branch packages your changes neatly for review (Pull Request).
*   **Experimentation:** "What if we rewrote the UI in React?" Create a branch `experiment/react`. If it fails, delete the branch. No harm done.

**Senior Engineer Insights:**
*   **"Branch early, branch often."** Never work directly on `main`. Ever.
*   **"Descriptive names."** Don't name branches `test` or `amit`. Name them `feature/user-login`, `bugfix/header-crash`, `chore/update-deps`.

---

## 3. Common Mistakes

### 1. Working on the Wrong Branch
*   **Mistake:** Coding for 3 hours and realizing you are still on `main`.
*   **Why it happens:** Forgetting to run `git checkout -b`.
*   **Real-world Consequence:** You can't push. You have to do messy stash/pop operations to move your work.
*   **Correction:** Always check your terminal prompt (configure it to show the current branch).

### 2. Detached HEAD
*   **Mistake:** Checking out a commit hash instead of a branch name.
*   **Why it happens:** Trying to look at old code.
*   **Real-world Consequence:** You code on "no branch". If you switch away, your commits are lost (garbage collected).
*   **Correction:** Always create a branch if you plan to make changes.

---

## 4. Hands-on Lab

Let's create and switch between parallel universes.

**Prerequisites:** Open your terminal.

### Step 1: Check Current Branch
```bash
git branch
```
*The one with the `*` is where you are (probably `main`).*

### Step 2: Create a New Branch
Create a universe for a new feature.
```bash
git branch feature/dark-mode
```

### Step 3: Switch to It
Teleport to the new universe.
```bash
git checkout feature/dark-mode
```
*(Or use the modern command: `git switch feature/dark-mode`)*

### Step 4: Verify
```bash
git branch
```
*The `*` should now be on `feature/dark-mode`.*

### Step 5: Make a Change
This change only exists in this universe.
```bash
echo "Dark mode is active" > settings.txt
git add settings.txt
git commit -m "Enable dark mode"
```

### Step 6: Switch Back to Main
Go back to the main universe.
```bash
git checkout main
```

### Step 7: Verify Isolation
Check if the file exists.
```bash
ls settings.txt
```
*It should be GONE! (or empty). That's because the change only exists in the other branch.*

**Success!** You have successfully isolated your work.
