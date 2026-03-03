# Viewing History

## 1. Concept

Git is a time machine. `git log` is the logbook of that time machine. It allows you to see every change that has ever happened in your project.

You can see:
*   **Who** made the change (Author).
*   **When** it happened (Date).
*   **What** changed (Message & Diff).
*   **Where** you are right now (HEAD).

### Visualizing History

![Git Log Diagram](https://placehold.co/600x400?text=Git+Log+Diagram)

**Diagram Explanation:**
*   **Commit Hash (SHA):** The unique ID (e.g., `a1b2c3d`).
*   **HEAD:** A pointer to the commit you are currently looking at.

---

## 2. Why It Matters in Industry

*   **Debugging Regressions:** "This feature worked yesterday!" You use `git log` to find what changed since yesterday.
*   **Code Audits:** "Why is this password logic so weird?" You look at the history to find the commit from 3 years ago and read the message (or ask the author).
*   **Release Notes:** When releasing v2.0, you look at the log since v1.0 to write the "What's New" list.

**Senior Engineer Insights:**
*   **"One line is enough."** The default `git log` is too verbose. Pros use `git log --oneline`.
*   **"Graph view."** To see how branches merged, use `git log --graph --oneline --all`. It draws a ASCII art tree in your terminal.

---

## 3. Common Mistakes

### 1. Getting Stuck in the Log
*   **Mistake:** Running `git log` and not knowing how to exit.
*   **Why it happens:** Git uses a "pager" (like `less`).
*   **Real-world Consequence:** You close the terminal in frustration.
*   **Correction:** Press **`q`** to quit.

### 2. Ignoring the Hash
*   **Mistake:** Referring to a commit as "the one from yesterday".
*   **Why it happens:** Hashes look scary.
*   **Real-world Consequence:** Ambiguity. "Yesterday" could be 50 commits.
*   **Correction:** Always use the first 7 characters of the hash (e.g., `a1b2c3d`) to identify a commit.

---

## 4. Hands-on Lab

Let's explore the history of your repo.

**Prerequisites:** Open your terminal in a repo with some commits.

### Step 1: Standard Log
View the full detail.
```bash
git log
```
*Press `Space` to scroll down, `q` to quit.*

### Step 2: The Pro View (One Line)
This is what you will use 90% of the time.
```bash
git log --oneline
```

### Step 3: See What Changed (Stat)
See which files were modified in each commit.
```bash
git log --stat
```

### Step 4: See the Actual Code Changes (Patch)
See the exact lines of code added/removed.
```bash
git log -p
```

### Step 5: Filter by Author
Find only your commits.
```bash
git log --author="Your Name"
```

**Success!** You can now navigate the past to understand the present.
