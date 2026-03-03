# Managing Large Repositories

## 1. Concept

As projects grow, they get slow. `git status` takes seconds instead of milliseconds. `git clone` takes hours. This is usually due to **Binary Bloat** (storing large images, videos, or compiled binaries in Git).

Git is designed for text. It compresses text efficiently. It *cannot* compress a 500MB `.mp4` file. Every time you change that video, Git stores a *new* 500MB copy.

### Visualizing Bloat

![Git Bloat Diagram](https://placehold.co/600x400?text=Git+Bloat+Diagram)

**Diagram Explanation:**
*   **Text:** Git stores deltas (changes). Small.
*   **Binary:** Git stores full snapshots. Huge.

---

## 2. Why It Matters in Industry

*   **Clone Times:** A 5GB repo takes 20 minutes to clone. This slows down new developers and CI/CD pipelines.
*   **Disk Space:** Developers with small SSDs will hate you.
*   **Performance:** Every git command has to scan the index. If the index is huge, everything lags.

**Senior Engineer Insights:**
*   **"LFS is mandatory."** Use **Git LFS (Large File Storage)** for anything over 50MB. It stores the file on S3 and just puts a tiny text pointer in Git.
*   **"Never commit `node_modules`."** This is the #1 rookie mistake. It adds 50,000 files to your repo instantly.

---

## 3. Common Mistakes

### 1. Committing Build Artifacts
*   **Mistake:** Committing the `dist/` or `build/` folder.
*   **Why it happens:** "I want to save the executable."
*   **Real-world Consequence:** Every build changes these binary files. The repo grows by 100MB every day.
*   **Correction:** Add `dist/` to `.gitignore`. Use a "Artifact Registry" (like Nexus or Artifactory) for binaries.

### 2. Retroactive Cleaning
*   **Mistake:** Deleting a large file and committing the deletion.
*   **Why it happens:** Thinking "It's gone now."
*   **Real-world Consequence:** It's still in the `.git` history! The repo size doesn't shrink.
*   **Correction:** You must use tools like `git-filter-repo` or BFG Repo-Cleaner to rewrite history and remove the file *forever*.

---

## 4. Hands-on Lab

We will simulate a bloated repo and clean it.

**Prerequisites:** Open your terminal.

### Step 1: Setup a "Bad" Repo
```bash
mkdir git-lab-large
cd git-lab-large
git init
```

### Step 2: Create a Large File (Simulation)
We'll create a 10MB dummy file.
```bash
# MacOS/Linux
mkfile 10m big_video.mp4 2>/dev/null || dd if=/dev/zero of=big_video.mp4 bs=1048576 count=10
git add big_video.mp4
git commit -m "Add marketing video"
```

### Step 3: Check Size
```bash
du -sh .git
```
*It should be around 10MB.*

### Step 4: The "Wrong" Fix
Delete the file.
```bash
rm big_video.mp4
git add .
git commit -m "Delete video"
```

### Step 5: Check Size Again
```bash
du -sh .git
```
*It is STILL 10MB! The file is gone from your workspace, but lives in history.*

### Step 6: The Real Fix (BFG/Filter-Branch Simulation)
Since we can't install BFG here easily, we will use a git internal command to prune it (Advanced).

*Note: In production, use `git-filter-repo`.*

For this lab, we will just demonstrate `.gitignore` prevention.

```bash
echo "*.mp4" > .gitignore
git add .gitignore
git commit -m "Prevent future videos"
```

**Success!** You understand why repos get big and how to prevent it.
