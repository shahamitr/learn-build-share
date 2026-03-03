# Understanding the Git Lifecycle

## 1. Concept

Files in a Git repo don't just exist; they live in specific **states**. Understanding this lifecycle is the key to not losing work.

1.  **Untracked:** Git sees the file but is ignoring it. It's not in the database yet.
2.  **Unmodified:** The file is saved in Git and hasn't changed since the last commit.
3.  **Modified:** You changed the file, but haven't told Git to save it yet.
4.  **Staged:** You marked the modified file to be included in the next snapshot.

### Visualizing the Lifecycle

![Git Lifecycle Diagram](https://placehold.co/600x400?text=Git+Lifecycle+Diagram)

**Diagram Explanation:**
*   **Add:** Untracked/Modified → Staged.
*   **Commit:** Staged → Unmodified (Saved).
*   **Edit:** Unmodified → Modified.

---

## 2. Why It Matters in Industry

*   **Accidental Commits:** If you don't understand "Staged", you might run `git commit -a` and accidentally commit a password you pasted into a file for testing.
*   **Partial Commits:** Senior engineers often edit 5 files but only commit 2. They use the Staging area to separate "Feature A" from "Bug Fix B".
*   **Data Loss Prevention:** If a file is **Untracked**, Git cannot save you if you accidentally delete it. If it's **Committed**, it's safe forever.

**Senior Engineer Insights:**
*   **"Status is your dashboard."** Run `git status` constantly. It tells you exactly where every file is in the lifecycle.
*   **"Don't stage everything blindly."** `git add .` is a bad habit. Add specific files to be precise.

---

## 3. Common Mistakes

### 1. Thinking "Saved" means "Committed"
*   **Mistake:** Saving the file in VS Code (Ctrl+S) and thinking it's safe in Git.
*   **Why it happens:** Confusion between file system and Git.
*   **Real-world Consequence:** You delete the file or break the code, try to revert, and realize Git has no record of your work.
*   **Correction:** Save (Editor) → Add (Git) → Commit (Git).

### 2. Modifying a Staged File
*   **Mistake:** Staging a file, then editing it again, then committing.
*   **Why it happens:** Forgetting that Staging is a *snapshot* at that moment.
*   **Real-world Consequence:** You commit the *old* version of the file, not the latest edits.
*   **Correction:** If you edit a staged file, you must `git add` it again.

---

## 4. Hands-on Lab

We will move a file through every stage of the lifecycle.

**Prerequisites:** Open your terminal inside a git repo.

### Step 1: Create a File (Untracked)
```bash
echo "Life is a journey" > life.txt
git status
```
*Notice it says "Untracked files".*

### Step 2: Stage the File (Staged)
```bash
git add life.txt
git status
```
*Notice it says "Changes to be committed" (Green).*

### Step 3: Commit the File (Unmodified)
```bash
git commit -m "Start the journey"
git status
```
*Notice "working tree clean". The file is now safely in the database.*

### Step 4: Modify the File (Modified)
```bash
echo "Life is an adventure" >> life.txt
git status
```
*Notice "Changes not staged for commit" (Red).*

### Step 5: View the Diff
See exactly what changed.
```bash
git diff
```

### Step 6: Stage and Commit
```bash
git add life.txt
git commit -m "Update definition of life"
```

**Success!** You have successfully navigated the full Git lifecycle.
