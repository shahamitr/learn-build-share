# Enterprise Git Workflow Simulation (Capstone)

## 1. The Scenario

Welcome to **MegaCorp Inc.** You are the Lead Engineer.
It is **Black Friday**. Traffic is high.

**The Situation:**
1.  The team is working on `feature-checkout-v2`.
2.  A critical bug is found in Production (`main`): The "Buy" button is broken.
3.  You must fix the bug immediately (`hotfix`).
4.  You must release the hotfix.
5.  You must ensure `feature-checkout-v2` gets the fix too, so we don't re-introduce the bug later.

This lab combines: Branching, Stashing, Hotfixes, Tagging, and Merging.

---

## 2. The Lab

**Prerequisites:** Open your terminal.

### Phase 1: The Setup
Initialize the repo representing the current production state.

```bash
mkdir git-capstone
cd git-capstone
git init
echo "App v1.0" > app.txt
echo "Buy Button Logic" >> app.txt
git add app.txt
git commit -m "Deploy v1.0"
git tag v1.0
```

### Phase 2: The Feature Work
The team starts working on v2.

```bash
git checkout -b feature-v2
echo "New Fancy UI" >> app.txt
git commit -am "WIP: Start new UI"
```

### Phase 3: The Emergency
**ALERT:** Production Buy Button is broken!
You are in the middle of v2 work.

1.  **Stash** your uncommitted changes (if any).
    *(We committed above, so we are clean, but let's pretend).*
2.  **Switch** to main.
    ```bash
    git checkout master 2>/dev/null || git checkout main
    ```
3.  **Create Hotfix Branch**.
    ```bash
    git checkout -b hotfix-buy-button
    ```

### Phase 4: The Fix
Fix the bug.

```bash
echo "Buy Button Logic (FIXED)" > app.txt
git commit -am "Fix critical buy button bug"
```

### Phase 5: The Release
Merge to main and Tag.

```bash
git checkout master 2>/dev/null || git checkout main
git merge hotfix-buy-button
git tag -a v1.0.1 -m "Hotfix Release"
# Simulate Deploy
echo "Deploying v1.0.1..."
```

### Phase 6: The Reconciliation
Now `feature-v2` is outdated. It has the broken button code!
We must update it.

```bash
git checkout feature-v2
# Merge main (with the fix) into our feature
git merge main
```
*You might get a conflict here because both branches touched `app.txt`. This is expected.*

**Conflict Resolution:**
1.  Open `app.txt`.
2.  You want "New Fancy UI" AND "Buy Button Logic (FIXED)".
3.  Edit the file to include both.

```bash
# Simulate fixing conflict
echo "Buy Button Logic (FIXED)" > app.txt
echo "New Fancy UI" >> app.txt
git add app.txt
git commit -m "Merge hotfix into feature"
```

### Phase 7: Finish Feature
```bash
git commit --allow-empty -m "Finish v2"
git checkout main
git merge feature-v2
git tag -a v2.0 -m "Release v2.0"
```

**Mission Accomplished.**
You handled a production fire without losing data, kept the history clean, and successfully released the next version. You are ready for the industry.
