# Git Internals

## 1. Concept

Git is not magic; it is a **Content-Addressable Filesystem**. It's a simple key-value store.

Everything in Git is one of four objects:
1.  **Blob:** The file content (binary large object). It doesn't know the filename, just the data.
2.  **Tree:** A directory listing. It maps filenames to Blobs (or other Trees).
3.  **Commit:** A snapshot. It points to a Tree, has an author, a message, and a parent commit.
4.  **Tag:** A named pointer to a commit.

**SHA-1:** The "Key". Every object is named by the SHA-1 hash of its contents. If two files have the same content, they have the same hash and are stored only once.

### Visualizing Objects

![Git Internals Diagram](./images/git-internals.png)

**Diagram Explanation:**
*   **Commit** points to **Tree**.
*   **Tree** points to **Blob** (file.txt) and **Tree** (folder/).

---

## 2. Why It Matters in Industry

*   **Corruption Recovery:** If your repo breaks, knowing internals helps you manually stitch it back together.
*   **Performance Tuning:** Understanding that Git snapshots *everything* (not just diffs) explains why large files kill performance.
*   **Cool Factor:** You will be the wizard who understands `.git` folder.

**Senior Engineer Insights:**
*   **"Git doesn't store diffs."** Contrary to popular belief, Git stores full snapshots. It calculates diffs on the fly when you run `git diff`.
*   **"Dangling Objects."** When you delete a branch, the commits aren't deleted immediately. They become "dangling". You can recover them until `git gc` runs.

---

## 3. Common Mistakes

### 1. Manual `.git` Editing
*   **Mistake:** Deleting files inside `.git/objects` to save space.
*   **Why it happens:** Trying to clean up.
*   **Real-world Consequence:** You corrupt the database. Git will refuse to run.
*   **Correction:** Use `git gc` (Garbage Collect) to clean up safely.

---

## 4. Hands-on Lab

We will perform "Git Plumbing" - using the low-level commands to manually create a commit without `git commit`.

**Prerequisites:** Open your terminal.

### Step 1: Setup
```bash
mkdir git-lab-internals
cd git-lab-internals
git init
```

### Step 2: Create a Blob (Hash Object)
We will hash a string and store it.
```bash
echo "Hello Internals" | git hash-object -w --stdin
```
*Output: `a042389...` (Save this hash!)*

### Step 3: Verify Storage
Look in the database.
```bash
find .git/objects -type f
```
*You will see a file named with that hash.*

### Step 4: Create a Tree
We need to assign a filename to that blob.
```bash
# Replace <hash> with the output from Step 2
git update-index --add --cacheinfo 100644 <hash> hello.txt
git write-tree
```
*Output: A new hash (The Tree Hash).*

### Step 5: Create a Commit
Now wrap that tree in a commit.
```bash
# Replace <tree-hash> with output from Step 4
echo "First internal commit" | git commit-tree <tree-hash>
```
*Output: A new hash (The Commit Hash).*

### Step 6: Update HEAD
Point the branch to this new commit.
```bash
# Replace <commit-hash> with output from Step 5
git update-ref refs/heads/master <commit-hash>
```

### Step 7: Verify
```bash
git log
cat hello.txt
```

**Success!** You just did Git's job manually. You are now a Git Plumber.
