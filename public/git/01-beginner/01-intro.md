# Introduction to Version Control & Git

## 1. Concept

**Version Control** is like a "save game" system for your code. Imagine playing a difficult video game where you can save your progress before fighting a boss. If you die, you reload the save.

Version Control Systems (VCS) let you:
1.  **Save** snapshots of your project (Commits).
2.  **Travel back in time** to previous versions.
3.  **Collaborate** with others without overwriting each other's work.

**Git** is a **Distributed Version Control System (DVCS)**. This means every developer has a full copy of the entire project history on their own computer. You don't need to be online to save your work.

### Visualizing Centralized vs Distributed

![Centralized vs Distributed](https://placehold.co/600x400?text=Centralized+vs+Distributed+Diagram)

**Diagram Explanation:**
*   **Centralized (Old way, e.g., SVN):** Everyone connects to one central server. If the server goes down, no one can work.
*   **Distributed (Git):** Everyone has a local server. You push to the central server only when you want to share.

---

## 2. Why It Matters in Industry

Git is the industry standard. 99% of software companies use it.

*   **Safety Net:** I once deleted a critical production configuration file by accident. Thanks to Git, I restored it in 30 seconds. Without Git, I would have been fired.
*   **Parallel Work:** On a team of 50 engineers, we all work on the same app simultaneously. Git manages merging our work so we don't step on each other's toes.
*   **Audit Trail:** "Who broke the login page?" Git `blame` tells us exactly who wrote the code, when, and why. It's not for punishment, but for finding the person who knows how to fix it.

**Senior Engineer Insights:**
*   **"Git is a communication tool."** Your commit history tells a story to your future self and your teammates.
*   **"Don't fear the command line."** GUIs are nice, but the CLI (Command Line Interface) gives you superpowers and works on every server.

---

## 3. Common Mistakes

### 1. Treating Git like Dropbox
*   **Mistake:** Dragging and dropping folders to backup code.
*   **Why it happens:** Habit from non-coding work.
*   **Real-world Consequence:** You overwrite files without a history. You can't undo specific changes.
*   **Correction:** Use `git commit` to save logical snapshots.

### 2. Fear of Experimenting
*   **Mistake:** Making a copy of the folder (`project-v1`, `project-v2-final`, `project-v2-final-real`).
*   **Why it happens:** Fear of breaking the "working" version.
*   **Real-world Consequence:** A mess of folders. You forget which one is real.
*   **Correction:** Use **Branches**. Create a `experiment` branch. If it works, merge it. If not, delete it.

---

## 4. Hands-on Lab

Let's verify you have Git installed and understand the basics.

**Prerequisites:** Open your terminal.

### Step 1: Check Git Version
See if Git is already installed.

```bash
git --version
```
*Output should be something like `git version 2.39.0`.*

### Step 2: Configure Your Identity
Git needs to know *who* you are for the audit trail.

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 3: Verify Configuration
Check that your settings are saved.

```bash
git config --list
```

**Success!** You are ready to start tracking your first project.
