# Tags & Releases

## 1. Concept

A **Tag** is a permanent bookmark in your history. While branches move (the `main` pointer moves every time you commit), a Tag stays put.

*   **Lightweight Tag:** Just a name pointing to a commit. Like a sticky note.
*   **Annotated Tag:** A full object with an author, date, message, and GPG signature. Like a sealed certificate.

**Releases** are usually built *from* tags. When you tag `v1.0.0`, your CI/CD pipeline sees it and builds the production artifacts.

### Visualizing Tags

![Git Tags Diagram](./images/git-tags.png)

**Diagram Explanation:**
*   **Commits:** Moving forward.
*   **Tag:** A signpost stuck in the ground at a specific commit.

---

## 2. Why It Matters in Industry

*   **Versioning:** Semantic Versioning (v1.0.0, v1.0.1) relies on tags. It tells users what version they are running.
*   **Rollbacks:** "Production is down! Revert to v2.4.1!" If you don't have tags, you have to guess which commit hash was v2.4.1. With tags, it's instant.
*   **Changelogs:** We generate changelogs by comparing `v1.0` and `v1.1`.

**Senior Engineer Insights:**
*   **"Always Annotate."** Use `git tag -a`. It stores *who* created the tag and *when*. Lightweight tags are for local temporary use only.
*   **"Tags are immutable (mostly)."** Never move a tag once it's public. If v1.0 was buggy, release v1.0.1. Don't move the v1.0 tag.

---

## 3. Common Mistakes

### 1. Forgetting to Push Tags
*   **Mistake:** Running `git push` and expecting tags to upload.
*   **Why it happens:** By default, `git push` only pushes branches.
*   **Real-world Consequence:** Your CI/CD pipeline doesn't trigger, and the release never happens.
*   **Correction:** Run `git push --tags` or configure `push.followTags`.

### 2. Tagging the Wrong Commit
*   **Mistake:** Tagging `HEAD` when you meant to tag the commit *before* the merge.
*   **Why it happens:** Rushing.
*   **Real-world Consequence:** The release includes code that wasn't tested.
*   **Correction:** You can tag specific hashes: `git tag -a v1.0 <hash>`.

---

## 4. Hands-on Lab

Let's release some software.

**Prerequisites:** Open your terminal.

### Step 1: Setup
```bash
mkdir git-lab-tags
cd git-lab-tags
git init
echo "v1.0 Code" > app.js
git add app.js
git commit -m "Release v1.0"
```

### Step 2: Create an Annotated Tag
This is the professional way.
```bash
git tag -a v1.0.0 -m "Official Release version 1.0.0"
```

### Step 3: Verify
```bash
git show v1.0.0
```
*Notice it shows the Tagger (you) and the date.*

### Step 4: Continue Work
```bash
echo "v1.1 Work" >> app.js
git commit -am "Fix bugs"
```

### Step 5: Create a Lightweight Tag
Quick bookmark.
```bash
git tag v1.1-beta
```

### Step 6: List Tags
```bash
git tag
```

### Step 7: Push Tags (Simulation)
If you had a remote:
```bash
# git push origin v1.0.0
# OR
# git push --tags
```

**Success!** You have marked your history with professional release points.
