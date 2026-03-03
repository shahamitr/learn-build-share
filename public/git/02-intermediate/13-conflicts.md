# Resolving Merge Conflicts

## 1. Concept

A **Merge Conflict** occurs when Git cannot automatically determine how to combine two changes. This usually happens when two developers modify the **same line** of the **same file** in different ways, or if one developer deletes a file while another modifies it.

Git is smart, but it is not a mind reader. It pauses the merge and asks you (the human) to decide which version is correct.

### Visualizing a Conflict

![Merge Conflict Diagram](./images/merge-conflict.png)

**Diagram Explanation:**
*   **Branch A:** Changes line 10 to "Color: Blue".
*   **Branch B:** Changes line 10 to "Color: Red".
*   **Merge:** Git stops and marks the file with `<<<<<<<`, `=======`, and `>>>>>>>`.

---

## 2. Why It Matters in Industry

Conflicts are not a sign of failure; they are a sign of collaboration. In an active team, they happen daily.

*   **Communication Trigger:** A conflict often means two people are working on the same logic. It forces a conversation: "Why did you change this function? My code relies on the old behavior."
*   **The "Fear" Factor:** Junior developers often panic and delete their work or force-push to avoid conflicts. Mastering conflict resolution removes this fear and makes you a confident contributor.
*   **CI/CD Blockers:** You cannot deploy or merge a Pull Request if it has conflicts. Resolving them quickly keeps the delivery pipeline moving.

**Senior Engineer Insights:**
*   **"Pull often."** The longer you wait to pull changes from the main branch, the scarier the conflicts will be.
*   **"Don't panic."** A conflict is just a text file edit. You have all the time in the world to fix it. Nothing is broken yet.
*   **"Talk to the author."** If you don't know why a line was changed, `git blame` it, find the author, and ask. Don't guess.

---

## 3. Common Mistakes

### 1. Committing the Markers
*   **Mistake:** Saving the file with the `<<<<<<< HEAD` markers still inside and committing it.
*   **Why it happens:** The developer thinks they fixed it but missed a line, or the IDE didn't highlight it clearly.
*   **Real-world Consequence:** The code will not compile, or the app will crash with syntax errors.
*   **Correction:** Search for `<<<` in the file before adding it.

### 2. "Mine is Right, Yours is Wrong"
*   **Mistake:** Blindly accepting "Current Change" (your work) and discarding "Incoming Change" (teammate's work).
*   **Why it happens:** Ego or lack of context.
*   **Real-world Consequence:** You might accidentally delete a critical bug fix your teammate just added.
*   **Correction:** Read both changes. Often, the correct answer is a combination of both.

### 3. Resolving on the Wrong Branch
*   **Mistake:** Trying to fix conflicts directly on `main`.
*   **Why it happens:** Not checking `git branch` before starting.
*   **Real-world Consequence:** You pollute the production branch with broken merge attempts.
*   **Correction:** Always resolve conflicts on your feature branch by merging `main` *into* your branch (or rebasing).

---

## 4. Hands-on Lab

We will artificially create a conflict and resolve it.

**Prerequisites:** Open your terminal.

### Step 1: Setup the Repo
Initialize a repo and create a base file.

```bash
mkdir git-lab-conflicts
cd git-lab-conflicts
git init
echo "The sky is blue." > nature.txt
git add nature.txt
git commit -m "Initial commit"
```

### Step 2: Create Branch A (The "Teammate")
Simulate a teammate making a change.

```bash
git checkout -b feature/teammate
echo "The sky is green." > nature.txt
git add nature.txt
git commit -m "Update sky color to green"
```

### Step 3: Create Branch B (You)
Go back to the start and make a conflicting change.

```bash
git checkout master 2>/dev/null || git checkout main
git checkout -b feature/me
echo "The sky is purple." > nature.txt
git add nature.txt
git commit -m "Update sky color to purple"
```

### Step 4: The Conflict
Now, try to merge your teammate's work into yours.

```bash
git merge feature/teammate
```

**Output:** You should see `CONFLICT (content): Merge conflict in nature.txt`.

### Step 5: Inspect the Damage
Open the file to see what Git did.

```bash
cat nature.txt
```

You will see something like:
```text
<<<<<<< HEAD
The sky is purple.
=======
The sky is green.
>>>>>>> feature/teammate
```

### Step 6: Resolve It
Edit the file `nature.txt`. Decide what the truth is.
Let's say we compromise and change it to "The sky is blue-green."

**Action:** Open the file in your editor, remove the markers (`<<<`, `===`, `>>>`), and make the text look exactly how you want it.

```bash
# Simulate editing the file
echo "The sky is blue-green." > nature.txt
```

### Step 7: Finalize the Merge
Tell Git you have resolved the conflict.

```bash
git add nature.txt
git commit -m "Merge branch 'feature/teammate' into feature/me"
```

### Step 8: Verify
Check the history to see the merge commit.

```bash
git log --oneline --graph --all
```

**Success!** You have successfully navigated a merge conflict and preserved the integrity of the codebase.
