# Interactive Rebase & History Rewriting

## 1. Concept

**Interactive Rebase** (`git rebase -i`) is the "Photoshop" of Git. It allows you to edit your commit history *before* you share it with others.

While `git merge` preserves history exactly as it happened (warts and all), `git rebase` allows you to rewrite history to tell a clean, coherent story. You can:
*   **Squash:** Combine multiple small "wip" commits into one meaningful commit.
*   **Reword:** Change a typo in a commit message.
*   **Drop:** Delete a commit that introduced a bug or wasn't needed.
*   **Reorder:** Change the order in which commits appear.

### Visualizing Rebase

![Git Rebase Diagram](https://placehold.co/600x400?text=Git+Rebase+Diagram)

**Diagram Explanation:**
*   **Before:** Commits `A -> B -> C` (where B is a typo fix).
*   **Rebase:** You squash B into A.
*   **After:** Commits `A+B -> C`. The history looks like you got it right the first time.

---

## 2. Why It Matters in Industry

A clean history is the mark of a senior engineer.

*   **Debuggability (`git bisect`):** If you have 50 commits saying "wip", "fix", "typo", and you introduce a bug, finding *which* commit caused it is a nightmare. If you have 5 atomic, working commits, finding the bug is trivial.
*   **Code Review Fatigue:** Reviewers hate seeing 10 commits where 8 of them are fixing mistakes made in the first 2. Squashing them lets the reviewer see the *final result*.
*   **Documentation:** The git log is the documentation of *why* changes were made. A messy log is useless documentation.

**Senior Engineer Insights:**
*   **"The Golden Rule of Rebase:"** NEVER rebase a public branch (like `main`). Only rebase your local feature branch *before* you push it. If you rebase shared history, you break everyone else's repo.
*   **"Tell a story."** Your commits should read like a changelog. "Add login", "Add tests for login", "Refactor login styling". Not "work", "more work", "fixed it".

---

## 3. Common Mistakes

### 1. Rebasing Public Branches
*   **Mistake:** Running `git rebase` on `main` or a shared `develop` branch.
*   **Why it happens:** Trying to "clean up" the main history.
*   **Real-world Consequence:** You rewrite commit IDs that your teammates have already pulled. When they try to pull again, they get massive conflicts and duplicate history.
*   **Correction:** Only rebase branches that *only you* are working on.

### 2. Squashing Too Much
*   **Mistake:** Squashing a 3-month feature into a single "Add feature" commit.
*   **Why it happens:** Wanting a "perfect" history.
*   **Real-world Consequence:** That single commit is now 5,000 lines long. If it causes a bug, you have to revert the *entire* feature instead of just the bad part.
*   **Correction:** Squash related changes (e.g., "implementation" + "typo fix"), but keep distinct logical steps separate.

### 3. Losing Code During Rebase
*   **Mistake:** Dropping a commit by accident during the interactive step.
*   **Why it happens:** The text editor interface for rebase can be confusing.
*   **Real-world Consequence:** Work is lost.
*   **Correction:** Learn to use `git reflog`. It tracks *every* movement of HEAD, even deleted commits. You can almost always undo a bad rebase with reflog.

---

## 4. Hands-on Lab

We will create a messy history and then clean it up to look professional.

**Prerequisites:** Open your terminal.

### Step 1: Setup the Mess
Create a repo and make some "bad" commits.

```bash
mkdir git-lab-rebase
cd git-lab-rebase
git init
echo "Start" > file.txt
git add file.txt
git commit -m "Initial commit"
```

### Step 2: Create the "WIP" Chain
Simulate a frantic coding session.

```bash
echo "Feature part 1" >> file.txt
git add file.txt
git commit -m "Add feature logic"

echo "Feature part 2" >> file.txt
git add file.txt
git commit -m "wip"

echo "Feature part 3" >> file.txt
git add file.txt
git commit -m "fix typo in part 2"

echo "Feature part 4" >> file.txt
git add file.txt
git commit -m "done with feature"
```

### Step 3: Inspect the Mess
Look at your log. It's ugly.

```bash
git log --oneline
```
*You should see 5 commits, with messages like "wip" and "fix typo".*

### Step 4: Start Interactive Rebase
We want to combine the last 4 commits into one clean commit.
We target the commit *before* the ones we want to change (HEAD~4).

```bash
git rebase -i HEAD~4
```

### Step 5: The Rebase Editor
Your default text editor will open with a list of commits. It looks like this:

```text
pick a1b2c3d Add feature logic
pick e5f6g7h wip
pick i8j9k0l fix typo in part 2
pick m1n2o3p done with feature
```

**Action:** Change the word `pick` to `squash` (or just `s`) for the bottom 3 commits. Keep the top one as `pick`.

```text
pick a1b2c3d Add feature logic
squash e5f6g7h wip
squash i8j9k0l fix typo in part 2
squash m1n2o3p done with feature
```

Save and close the file.

### Step 6: The Commit Message Editor
Git will now ask you to combine the messages. A new editor window opens.
You will see all the old messages.

**Action:** Delete the "wip", "fix typo", and "done" lines. Write one clean message:

```text
Feat: Implement full feature logic with 4 parts
```

Save and close the file.

### Step 7: Verify the Clean History
Check your log again.

```bash
git log --oneline
```

**Result:** You should now see only **two** commits:
1.  `Initial commit`
2.  `Feat: Implement full feature logic with 4 parts`

**Success!** You have transformed a messy development process into a clean, professional history.
