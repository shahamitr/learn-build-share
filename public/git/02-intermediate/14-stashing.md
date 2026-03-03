# Stashing & Context Switching

## 1. Concept

**Git Stash** is a temporary storage area (a clipboard) for your uncommitted changes.

Imagine you are working on a complex feature (messy desk). Suddenly, your boss runs in: "Critical bug in production! Fix it now!"
You can't switch branches because your desk is messy (uncommitted files).
You don't want to commit "half-broken code" just to save it.

**Solution:** `git stash`. You sweep everything off your desk into a drawer. Your desk is clean. You fix the bug. Then you open the drawer and put everything back exactly how it was.

### Visualizing Stash

![Git Stash Diagram](https://placehold.co/600x400?text=Git+Stash+Diagram)

**Diagram Explanation:**
*   **Working Directory:** Dirty (Modified files).
*   **Stash:** Pushes changes to a stack. Working Directory becomes clean (matches HEAD).
*   **Pop:** Takes changes from stack and applies them back to Working Directory.

---

## 2. Why It Matters in Industry

Context switching is the #1 reality of professional engineering.

*   **The "Hotfix" Interrupt:** You are 3 days into a 5-day feature. A customer reports a crash. You stash, switch to `main`, create a `hotfix` branch, fix it, merge, and then pop your stash to resume work.
*   **Pulling Updates:** You try to `git pull` but Git complains: "Your local changes would be overwritten by merge." You stash, pull, and then pop.
*   **Testing Clean State:** You want to verify if a bug exists in the clean version of the code, without your current changes affecting it.

**Senior Engineer Insights:**
*   **"Name your stashes."** By default, stashes are named "WIP on branch...". If you stash 5 times, you won't know which is which. Use `git stash save "working on login logic"`.
*   **"Don't use stash as permanent storage."** Stashes are not commits. They are easy to lose (e.g., if you delete the repo). Use them for hours/days, not weeks.

---

## 3. Common Mistakes

### 1. Stashing and Forgetting
*   **Mistake:** Stashing work, fixing the bug, and then forgetting you stashed.
*   **Why it happens:** Out of sight, out of mind.
*   **Real-world Consequence:** You rewrite the same code again next week, wasting days.
*   **Correction:** Run `git stash list` regularly.

### 2. Stash Conflicts
*   **Mistake:** Stashing changes, the file changes on the branch, and then you `stash pop`.
*   **Why it happens:** The base code moved while your changes were in the drawer.
*   **Real-world Consequence:** Merge conflicts in your stash pop.
*   **Correction:** Resolve them just like merge conflicts.

### 3. Not Stashing Untracked Files
*   **Mistake:** Running `git stash` but your new file `NewService.js` is still there.
*   **Why it happens:** By default, stash only takes *tracked* (previously added) files.
*   **Real-world Consequence:** You switch branches, and `NewService.js` is still there, potentially causing errors or being committed to the wrong branch.
*   **Correction:** Use `git stash -u` (include untracked).

---

## 4. Hands-on Lab

We will simulate a "Hotfix Interrupt" workflow.

**Prerequisites:** Open your terminal.

### Step 1: Setup the Workspace
Create a repo representing our app.

```bash
mkdir git-lab-stash
cd git-lab-stash
git init
echo "Main App Logic" > app.js
git add app.js
git commit -m "Initial commit"
```

### Step 2: Start a Feature (The "Messy Desk")
Start working on a new feature.

```bash
git checkout -b feature/login
echo "Login Function (Incomplete)..." >> app.js
git status
# Output: modified: app.js
```

### Step 3: The Interrupt
**Boss:** "Stop! There's a typo in the main app logic! Fix it on main immediately!"

Try to switch to main:
```bash
git checkout main
```
*Git might let you switch if the conflict is simple, but often it will block you saying "Please commit your changes or stash them".*

### Step 4: Stash Your Work
Save your state safely.

```bash
git stash push -m "WIP: Login function half done"
git status
# Output: nothing to commit, working tree clean
```
*Notice `app.js` is back to the original state.*

### Step 5: The Hotfix
Now you are free to fix the bug.

```bash
git checkout main
echo "Main App Logic (Fixed)" > app.js
git add app.js
git commit -m "Fix critical typo"
```

### Step 6: Return to Work
Go back to your feature branch and retrieve your work.

```bash
git checkout feature/login
git stash list
# Output: stash@{0}: On feature/login: WIP: Login function half done
```

Apply the stash:
```bash
git stash pop
```

### Step 7: Resolve the Conflict (If any)
Since we changed `app.js` on main AND in the stash, we might have a conflict.
If Git says `CONFLICT`, open `app.js`, fix the markers, and save.

```bash
cat app.js
# Verify your "Login Function" code is back.
```

**Success!** You handled a high-pressure context switch without losing a single line of code.
