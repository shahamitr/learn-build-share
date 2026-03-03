# Subtree vs Submodule

## 1. Concept

We learned about **Submodules** (links to other repos). **Subtree** is the alternative.

*   **Submodule:** "I want a link to that repo." (Reference).
*   **Subtree:** "I want to copy that repo's code into mine, but keep the ability to sync updates." (Copy + Sync).

With Subtree, the code lives *inside* your repo. Users cloning your repo don't need to do anything special. It just looks like files.

### Visualizing Difference

![Subtree vs Submodule Diagram](./images/subtree-vs-submodule.png)

**Diagram Explanation:**
*   **Submodule:** A pointer. Requires 2 requests to fetch.
*   **Subtree:** Actual files. Requires 1 request to fetch.

---

## 2. Why It Matters in Industry

*   **Ease of Use:** Submodules are hard for juniors (must remember `git submodule update`). Subtrees are invisible to juniors; they just see code.
*   **Upstream Contributions:** If you modify the code, Submodules make it easy to push back to the library. Subtrees make it harder (need complex commands).

**Senior Engineer Insights:**
*   **"Default to Submodules for read-only."** If you just need to *use* a library, Submodule is cleaner.
*   **"Default to Subtree for scaffolding."** If you are merging a template into your project, Subtree is better.

---

## 3. Common Mistakes

### 1. Mixing Them Up
*   **Mistake:** Trying to run `git submodule update` on a subtree.
*   **Why it happens:** Confusion.
*   **Real-world Consequence:** Nothing happens.
*   **Correction:** Know which strategy your team uses.

---

## 4. Hands-on Lab

We will merge a remote repo into ours as a subtree.

**Prerequisites:** Open your terminal.

### Step 1: Setup
```bash
mkdir git-lab-subtree
cd git-lab-subtree
git init
git commit --allow-empty -m "Init"
```

### Step 2: Add Remote
We will use a public repo (e.g., a simple hello world) as a subtree.
For this lab, we simulate it with a local folder.

```bash
mkdir ../lib-repo
cd ../lib-repo
git init
echo "Library Code" > lib.js
git add lib.js
git commit -m "Init Lib"
cd ../git-lab-subtree
```

### Step 3: Add Subtree
```bash
git subtree add --prefix=vendor/lib ../lib-repo master --squash
```
*   `--prefix`: Where to put it.
*   `--squash`: Combine library history into one commit (cleaner).

### Step 4: Verify
```bash
ls vendor/lib
```
*The file is there! It's real code, not a link.*

**Success!** You have embedded another project into yours seamlessly.
