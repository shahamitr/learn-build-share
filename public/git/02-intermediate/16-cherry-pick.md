# Cherry Picking

## 1. Concept

**Cherry Picking** is a precise surgical tool. Instead of merging an entire branch, you pick **one specific commit** from anywhere in the repository and apply it to your current branch.

It copies the *changes* introduced by that commit and creates a new commit with a new hash.

### Visualizing Cherry Pick

![Cherry Pick Diagram](./images/cherry-pick.png)

**Diagram Explanation:**
*   **Source:** Branch A has commits `C1`, `C2`, `C3`.
*   **Target:** Branch B needs the fix from `C2`, but NOT `C1` or `C3`.
*   **Action:** `git cherry-pick C2`.
*   **Result:** Branch B gets a copy of `C2`.

---

## 2. Why It Matters in Industry

*   **Hotfixes:** You fixed a critical bug on the `develop` branch (which has unstable features). You need to deploy *just that bug fix* to `production` immediately. You cherry-pick the fix commit to the `release` branch.
*   **Backporting:** You fixed a bug in v2.0. A customer is still paying for v1.0 support. You cherry-pick the fix back to the v1.0 branch.
*   **Undo/Redo:** You accidentally committed to the wrong branch. You switch to the right branch, cherry-pick the commit, and then reset the wrong branch.

**Senior Engineer Insights:**
*   **"Use sparingly."** Cherry picking creates duplicate commits (same content, different hash). If you merge the branches later, Git might get confused.
*   **"Always use `-x`."** Run `git cherry-pick -x <hash>`. This appends "cherry picked from commit..." to the message. It helps future you understand why this duplicate exists.

---

## 3. Common Mistakes

### 1. Cherry Picking Merge Commits
*   **Mistake:** Trying to pick a merge commit.
*   **Why it happens:** Misunderstanding history.
*   **Real-world Consequence:** Git errors out because it doesn't know which "parent" to diff against.
*   **Correction:** Avoid picking merges. Pick the individual commits inside the merge.

### 2. Dependency Hell
*   **Mistake:** Picking a commit that relies on a previous commit you *didn't* pick.
*   **Why it happens:** Code is interconnected.
*   **Real-world Consequence:** The code won't compile or runs with runtime errors.
*   **Correction:** Check the diff carefully. Ensure you pick the full chain of dependencies.

---

## 4. Hands-on Lab

Let's perform surgery on our history.

**Prerequisites:** Open your terminal.

### Step 1: Setup
```bash
mkdir git-lab-cherry
cd git-lab-cherry
git init
echo "Base" > app.txt
git add app.txt
git commit -m "Initial commit"
```

### Step 2: Create a Feature Branch
```bash
git checkout -b feature
echo "Feature A" >> app.txt
git commit -am "Feat: A"
echo "Feature B (Bug Fix)" >> app.txt
git commit -am "Fix: Critical Bug"
echo "Feature C" >> app.txt
git commit -am "Feat: C"
```

### Step 3: The Scenario
We are on `main`. We need the "Critical Bug" fix, but we are NOT ready for Feature A or C.

```bash
git checkout main
git log feature --oneline
```
*Find the hash for "Fix: Critical Bug". Let's assume it is `abc1234`.*

### Step 4: Cherry Pick
```bash
# Replace <hash> with the actual hash from your log
git cherry-pick <hash>
```

### Step 5: Verify
```bash
cat app.txt
git log --oneline
```
*You should see "Fix: Critical Bug" on main, but NOT "Feat: A" or "Feat: C".*

**Success!** You have extracted a specific change without taking the baggage of the entire branch.
