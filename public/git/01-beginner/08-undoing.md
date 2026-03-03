# Undoing Changes: Reset, Revert, and Restore

## 1. Concept

In Git, "undo" is not a single button. It depends on *where* the mistake is.

1.  **`git restore`**: Undoes changes in your **Working Directory** (files you haven't added yet). It's like "Discard Changes" in an editor.
2.  **`git reset`**: Undoes changes in your **Staging Area** or **Local History**. It rewinds time locally.
    *   `--soft`: Rewinds history but keeps your work staged.
    *   `--hard`: Rewinds history and destroys your work. **Dangerous.**
3.  **`git revert`**: Undoes changes in **Public History**. It creates a *new* commit that does the exact opposite of the bad commit. This is safe for shared branches.

### Visualizing the Undo

![Git Undo Diagram](./images/git-undo.png)

**Diagram Explanation:**
*   **Reset:** Moves the branch pointer backward. The old commits become "orphaned" and eventually deleted.
*   **Revert:** Adds a forward commit. If Commit A added a line, Commit B (Revert A) removes that line. History is preserved.

---

## 2. Why It Matters in Industry

Mistakes happen. Senior engineers aren't people who never make mistakes; they are people who know how to fix them cleanly.

*   **The "Panic" Push:** You pushed a secret key or a breaking bug to `main`. You need to fix it *now*. If you use `reset`, you break everyone else's history. You MUST use `revert`.
*   **Clean PRs:** You committed a file by accident. `git reset --soft HEAD~1` lets you un-commit it, remove the file from staging, and commit again properly.
*   **Experimentation:** `git restore` gives you the freedom to break your local code completely to test an idea, knowing you can snap back to the last clean state instantly.

**Senior Engineer Insights:**
*   **"Never reset public history."** If you have pushed it, you cannot reset it. You must revert it. Resetting shared history forces everyone on the team to delete their repo and re-clone.
*   **"Soft reset is your friend."** It's the best way to squash the last 3 commits into one without using interactive rebase. It just puts all your work back in the staging area.

---

## 3. Common Mistakes

### 1. Hard Resetting Unsaved Work
*   **Mistake:** Running `git reset --hard` without thinking.
*   **Why it happens:** Trying to fix a small git state issue with a sledgehammer.
*   **Real-world Consequence:** You lose all uncommitted work in your working directory. It is gone forever.
*   **Correction:** Always use `git status` and `git stash` before a hard reset.

### 2. Resetting Pushed Commits
*   **Mistake:** Pushing code, realizing it's wrong, running `git reset`, and then `git push --force`.
*   **Why it happens:** Panic.
*   **Real-world Consequence:** You overwrite the remote branch. If a teammate pulled your bad code, their history is now incompatible with the server.
*   **Correction:** Use `git revert` for pushed code.

### 3. Confusing Restore and Checkout
*   **Mistake:** Using `git checkout .` to discard changes (deprecated way).
*   **Why it happens:** Old tutorials.
*   **Real-world Consequence:** It works, but `checkout` does too many things (branches, files, commits). It's easy to make a mistake.
*   **Correction:** Use `git restore` (introduced in Git 2.23) which is safer and specific to files.

---

## 4. Hands-on Lab

We will simulate a "bad deployment" scenario and fix it using both methods.

**Prerequisites:** Open your terminal.

### Step 1: Setup the Repo
Create a repo representing our production app.

```bash
mkdir git-lab-undo
cd git-lab-undo
git init
echo "Stable v1.0" > app.config
git add app.config
git commit -m "Deploy v1.0"
```

### Step 2: The "Bad" Local Change (Restore)
You accidentally delete the config file locally.

```bash
rm app.config
git status
# Output: deleted: app.config
```

**Fix:** Use restore to bring it back.
```bash
git restore app.config
cat app.config
# Output: Stable v1.0
```

### Step 3: The "Bad" Commit (Reset)
You commit a broken configuration locally, but haven't pushed it yet.

```bash
echo "BROKEN CONFIG" > app.config
git add app.config
git commit -m "v2.0 - WIP"
```

**Fix:** You realize this is wrong. You want to undo the commit but keep the work to fix it.
```bash
# Soft reset to the previous commit (HEAD~1)
git reset --soft HEAD~1

# Check status
git status
# Output: Changes to be committed: modified: app.config
# The commit is gone, but the file change is still staged!
```

### Step 4: The "Bad" Public Push (Revert)
Now simulate a commit that *has* been pushed (we'll pretend).

```bash
# Commit the broken config again
git commit -m "Deploy v2.0 (Broken)"

# We cannot use reset because we pretend this is public.
# We must create a NEW commit that undoes this one.
git revert HEAD
```

**Action:** Git will open an editor for the revert message. Save and close it.

### Step 5: Verify History
Check the log.

```bash
git log --oneline
```

**Result:**
*   `Revert "Deploy v2.0 (Broken)"` (Newest)
*   `Deploy v2.0 (Broken)`
*   `Deploy v1.0`

The bad code is still in history (audit trail), but the *current state* is fixed.

**Success!** You have safely navigated the three levels of "undoing" in Git.
