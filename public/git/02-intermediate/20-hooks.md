# Git Hooks

## 1. Concept

**Git Hooks** are scripts that run automatically before or after Git events like:
*   `commit`
*   `push`
*   `merge`

They are the "Gatekeepers" of your repo. You can use them to block bad code from ever entering the history.

*   **Client-Side Hooks:** Run on your computer (e.g., `pre-commit`).
*   **Server-Side Hooks:** Run on GitHub/GitLab (e.g., `pre-receive`).

### Visualizing Hooks

![Git Hooks Diagram](https://placehold.co/600x400?text=Git+Hooks+Diagram)

**Diagram Explanation:**
*   **Command:** You type `git commit`.
*   **Hook:** The `pre-commit` script runs.
*   **Pass:** If script exits with 0, commit happens.
*   **Fail:** If script exits with 1, commit is aborted.

---

## 2. Why It Matters in Industry

*   **Linting:** "Did you forget a semicolon?" The hook checks your style. If it's messy, it rejects the commit.
*   **Secrets Detection:** "Are you committing an AWS Key?" The hook scans for patterns like `AKIA...` and blocks the commit to prevent a security breach.
*   **Unit Tests:** "Did you break the build?" Run tests on push.

**Senior Engineer Insights:**
*   **"Husky is standard."** In the JS world, we use a tool called `husky` to manage hooks easily. Writing raw shell scripts in `.git/hooks` is painful to share with the team.
*   **"Don't make it too slow."** If your pre-commit hook takes 2 minutes, developers will use `git commit --no-verify` to skip it. Keep it under 5 seconds.

---

## 3. Common Mistakes

### 1. Local Hooks Don't Push
*   **Mistake:** Writing a hook in `.git/hooks/pre-commit` and thinking your team has it.
*   **Why it happens:** The `.git` folder is not shared.
*   **Real-world Consequence:** You have great checks, but your teammate commits broken code because they don't have your hook.
*   **Correction:** Use a tool like `husky` or `pre-commit` framework that stores config in the repo.

### 2. Blocking Critical Fixes
*   **Mistake:** A strict hook that prevents committing if *any* test fails.
*   **Why it happens:** Perfectionism.
*   **Real-world Consequence:** You need to save a "WIP" commit to switch branches, but the hook blocks you.
*   **Correction:** Allow bypassing hooks with `--no-verify` for emergencies.

---

## 4. Hands-on Lab

We will write a simple hook that prevents you from committing the word "TODO".

**Prerequisites:** Open your terminal.

### Step 1: Setup
```bash
mkdir git-lab-hooks
cd git-lab-hooks
git init
```

### Step 2: Locate Hooks
```bash
ls .git/hooks
```
*You see samples like `pre-commit.sample`.*

### Step 3: Create the Hook
We will create a script that searches for "TODO".

```bash
# Create the file
echo '#!/bin/sh' > .git/hooks/pre-commit
echo 'if git grep -q "TODO"; then' >> .git/hooks/pre-commit
echo '  echo "Error: You have a TODO in your code. Finish it!"' >> .git/hooks/pre-commit
echo '  exit 1' >> .git/hooks/pre-commit
echo 'fi' >> .git/hooks/pre-commit
```

### Step 4: Make Executable
Hooks must be executable.
```bash
chmod +x .git/hooks/pre-commit
```

### Step 5: Test the Block
Try to commit a TODO.
```bash
echo "// TODO: Fix this later" > app.js
git add app.js
git commit -m "Add lazy code"
```
**Result:** `Error: You have a TODO...` Commit failed.

### Step 6: Test the Pass
Remove the TODO.
```bash
echo "// Fixed code" > app.js
git add app.js
git commit -m "Add good code"
```
**Result:** Success!

**Success!** You have automated quality control in your repo.
