# Installing Git & Configuration

## 1. Concept

Before you can cook, you need a kitchen. **Installing Git** is setting up your digital kitchen.

**Configuration** (`git config`) is telling Git who you are. Every time you save code, Git stamps it with your name and email. This is not for spam; it's for credit and accountability.

### Visualizing Config

![Git Config Diagram](./images/git-config.png)

**Diagram Explanation:**
*   **System Level:** Settings for every user on the computer.
*   **Global Level:** Settings for YOU (the current user). *Most common.*
*   **Local Level:** Settings for just this specific project.

---

## 2. Why It Matters in Industry

*   **Identity Verification:** In enterprise environments, if your git email doesn't match your company email, the server will reject your code.
*   **Editor Wars:** Git opens a text editor when you write commit messages. If you don't configure this, it might open `vim` (which is hard to exit for beginners). Setting it to VS Code or Nano saves headaches.
*   **Line Endings (CRLF vs LF):** Windows and Mac handle "new lines" differently. Git configuration handles this translation automatically so your team doesn't fight over invisible characters.

**Senior Engineer Insights:**
*   **"Set it and forget it."** You usually only do this once per machine.
*   **"Aliases are life."** Pros configure shortcuts. Instead of typing `git checkout`, they type `git co`.

---

## 3. Common Mistakes

### 1. Using the Wrong Email
*   **Mistake:** Using your personal email (`coolguy99@gmail.com`) for work repos.
*   **Why it happens:** Forgetting to check config.
*   **Real-world Consequence:** Your commits don't link to your corporate GitHub profile, and you lose "contribution graph" credit.
*   **Correction:** Check `git config user.email` in every new work machine.

### 2. Not Setting a Default Branch Name
*   **Mistake:** Leaving the default as `master`.
*   **Why it happens:** Old defaults.
*   **Real-world Consequence:** Most modern CI/CD pipelines expect `main`. Inconsistency causes broken builds.
*   **Correction:** Set `init.defaultBranch` to `main`.

---

## 4. Hands-on Lab

Let's get your environment perfect.

**Prerequisites:** Open your terminal.

### Step 1: Install Git (If needed)
*   **Windows:** Download from [git-scm.com](https://git-scm.com).
*   **Mac:** `brew install git` or run `git` and follow the prompts.
*   **Linux:** `sudo apt install git`

### Step 2: Set Global Identity
This is the most important step.

```bash
git config --global user.name "Your Real Name"
git config --global user.email "your.email@example.com"
```

### Step 3: Set Default Branch to Main
Modernize your workflow.

```bash
git config --global init.defaultBranch main
```

### Step 4: Configure Your Editor
Set VS Code as your default editor (optional, but recommended).

```bash
git config --global core.editor "code --wait"
```
*(If you don't have VS Code, you can use `nano`)*

### Step 5: Verify
See your work.

```bash
git config --list
```

**Success!** Your Git environment is now professional-grade.
