# Reflog & Recovery

## 1. Concept

**Reflog** (Reference Log) is Git's safety net. It records **every movement of HEAD**.

Even if you delete a branch, do a hard reset, or amend a commit, the data is not gone immediately. It is still in the `.git` folder, and the Reflog knows where it is.

`git log` shows the history of the *code*.
`git reflog` shows the history of *your actions*.

### Visualizing Reflog

![Git Reflog Diagram](https://placehold.co/600x400?text=Git+Reflog+Diagram)

**Diagram Explanation:**
*   **HEAD@{0}:** Where you are now.
*   **HEAD@{1}:** Where you were 1 minute ago (before the reset).
*   **HEAD@{2}:** Where you were 5 minutes ago (before the merge).

---

## 2. Why It Matters in Industry

*   **"I deleted the wrong branch!"** You worked for 3 days on `feature-x`. You accidentally ran `git branch -D feature-x`. Reflog can find the commit hash of the tip of that branch so you can restore it.
*   **"I reset too far!"** You ran `git reset --hard HEAD~5` but meant `HEAD~1`. Reflog lets you jump back to the state before the reset.

**Senior Engineer Insights:**
*   **"Reflog is local only."** Your reflog is not pushed to the server. If you delete your local folder, the reflog is gone.
*   **"Time limit."** Git garbage collects old reflog entries (usually after 30-90 days). Don't wait too long to recover.

---

## 3. Common Mistakes

### 1. Panicking and Closing Terminal
*   **Mistake:** Making a mistake and deleting the repo to re-clone.
*   **Why it happens:** Not knowing Reflog exists.
*   **Real-world Consequence:** You lose all local un-pushed work.
*   **Correction:** Check `git reflog` first. 99% of mistakes are reversible.

---

## 4. Hands-on Lab

We will delete a branch and bring it back from the dead.

**Prerequisites:** Open your terminal.

### Step 1: Setup
```bash
mkdir git-lab-reflog
cd git-lab-reflog
git init
echo "Main" > file.txt
git add file.txt
git commit -m "Initial"
```

### Step 2: Create Important Work
```bash
git checkout -b important-feature
echo "Critical Code" >> file.txt
git commit -am "Finish critical feature"
```

### Step 3: The Accident
Switch to main and delete the branch.
```bash
git checkout master 2>/dev/null || git checkout main
git branch -D important-feature
```
*Git says "Deleted branch important-feature". It seems gone.*

### Step 4: The Recovery
Find the hash.
```bash
git reflog
```
*Look for: `checkout: moving from important-feature to main`. The line *before* that (or the commit message "Finish critical feature") is your lost commit.*

### Step 5: Restore
```bash
# Replace <hash> with the hash you found
git branch resurrected-feature <hash>
git checkout resurrected-feature
cat file.txt
```

**Success!** You have cheated death (of code).
