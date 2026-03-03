# Performance Optimization

## 1. Concept

Git is fast, but it can get slow if the repository gets cluttered with "loose objects" and excessive history.

**Garbage Collection (`git gc`):**
Git doesn't delete things instantly. It leaves them as "loose objects". `git gc` packs these loose files into highly compressed "packfiles" to save disk space and speed up commands.

**Maintenance:**
Modern Git has `git maintenance`, a background process that optimizes the repo automatically.

### Visualizing GC

![Git GC Diagram](./images/git-gc.png)

**Diagram Explanation:**
*   **Before:** Thousands of tiny files (loose objects). Slow to read.
*   **After:** One big file (packfile). Fast to read.

---

## 2. Why It Matters in Industry

*   **CI/CD Speed:** A slow repo slows down every deployment.
*   **Developer Experience:** If `git status` takes 5 seconds, developers get frustrated.
*   **Disk Usage:** A repo can shrink from 10GB to 500MB after a good GC.

**Senior Engineer Insights:**
*   **"Prune remote branches."** Run `git fetch -p` (prune). It deletes local references to branches that were deleted on GitHub. This keeps your autocomplete clean.
*   **"Shallow Clones."** For CI pipelines, use `git clone --depth 1`. It downloads only the latest commit, not the entire history. It's 100x faster.

---

## 3. Common Mistakes

### 1. Interrupting GC
*   **Mistake:** Killing the `git gc` process because it's taking too long.
*   **Why it happens:** Impatience.
*   **Real-world Consequence:** You might leave the repo in a locked or inconsistent state.
*   **Correction:** Let it run. Run it overnight if needed.

---

## 4. Hands-on Lab

We will optimize a repo.

**Prerequisites:** Open your terminal.

### Step 1: Setup
```bash
mkdir git-lab-perf
cd git-lab-perf
git init
```

### Step 2: Create Noise
Create 1000 commits.
```bash
for i in {1..1000}; do
  echo $i > file.txt
  git add file.txt
  git commit -q -m "Commit $i"
done
```

### Step 3: Check Object Count
```bash
git count-objects -v
```
*Look at "count". It's high.*

### Step 4: Run GC
```bash
git gc --prune=now
```
*It compresses everything.*

### Step 5: Check Again
```bash
git count-objects -v
```
*Count should be near 0. "size-pack" will be larger, but overall size is smaller.*

**Success!** Your repo is tuned and ready for speed.
