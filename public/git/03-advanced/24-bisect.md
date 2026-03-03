# Bisect for Debugging

## 1. Concept

**Git Bisect** is a binary search algorithm for your history.

**Scenario:**
*   The code works in v1.0 (Commit A).
*   The code is broken in v2.0 (Commit Z).
*   There are 100 commits between A and Z.
*   You don't know which commit caused the bug.

Instead of checking all 100 commits, Bisect cuts the history in half.
1.  Checks commit 50. Good or Bad? -> Bad.
2.  Checks commit 25. Good or Bad? -> Good.
3.  Checks commit 37...

It finds the bad commit in `log2(100) = ~7` steps.

### Visualizing Bisect

![Git Bisect Diagram](https://placehold.co/600x400?text=Git+Bisect+Diagram)

**Diagram Explanation:**
*   **Good:** Known working state.
*   **Bad:** Known broken state.
*   **Bisect:** Jumps to the middle. You test and say "good" or "bad". It jumps again.

---

## 2. Why It Matters in Industry

*   **Regression Hunting:** When a bug appears mysteriously, Bisect is the fastest way to find the culprit.
*   **Blame Assignment:** It tells you exactly *who* broke it and *what* code they changed.
*   **Automated Debugging:** You can run `git bisect run <script>`. Git will run your unit test on every step automatically and find the bug while you get coffee.

**Senior Engineer Insights:**
*   **"Testable Commits."** Bisect only works if every commit in your history actually compiles. If half your commits are broken "wip" builds, Bisect is painful.
*   **"The culprit is often surprising."** Often the bug isn't in the logic you suspect, but in a dependency upgrade or a config change 20 commits ago.

---

## 3. Common Mistakes

### 1. Forgetting to Reset
*   **Mistake:** Finding the bug and starting to code immediately.
*   **Why it happens:** Excitement.
*   **Real-world Consequence:** You are in Detached HEAD state in the middle of history.
*   **Correction:** Always run `git bisect reset` when done to go back to the tip of the branch.

---

## 4. Hands-on Lab

We will create a history with a hidden bug and find it.

**Prerequisites:** Open your terminal.

### Step 1: Setup
```bash
mkdir git-lab-bisect
cd git-lab-bisect
git init
```

### Step 2: Create History (100 commits)
We will use a loop to create 100 commits.
Commit 50 will introduce a bug.

```bash
# Create 100 commits
for i in {1..100}
do
   echo "Line $i" >> app.txt
   # Introduce bug at commit 50
   if [ $i -eq 50 ]; then
     echo "BUG" >> app.txt
   fi
   git add app.txt
   git commit -m "Commit $i"
done
```

### Step 3: Start Bisect
We know HEAD (100) is Bad. We know Commit 1 is Good.

```bash
git bisect start
git bisect bad HEAD
# Find the hash of the first commit
git log --oneline | tail -n 1
# git bisect good <first-hash>
# (Or just assume HEAD~99 is good)
git bisect good HEAD~99
```

### Step 4: The Hunt
Git will checkout a commit in the middle.
Check if the bug exists:
```bash
grep "BUG" app.txt
```
*   If you see "BUG", type `git bisect bad`.
*   If you don't, type `git bisect good`.

Repeat this until Git says:
`Commit ... is the first bad commit`

### Step 5: Finish
```bash
git bisect reset
```

**Success!** You found the needle in the haystack.
