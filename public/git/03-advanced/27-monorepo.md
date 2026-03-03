# Monorepo Strategies

## 1. Concept

A **Monorepo** is a single Git repository that holds the code for **multiple projects** (e.g., Frontend, Backend, Mobile App, Library).

Instead of `repo-frontend` and `repo-backend`, you have one `repo-company`.

**Challenges:**
*   **Size:** It gets huge.
*   **Noise:** `git log` shows commits for projects you don't care about.
*   **Permissions:** Everyone can see everything.

### Visualizing Monorepo

![Monorepo Diagram](./images/monorepo.png)

**Diagram Explanation:**
*   **Polyrepo:** Multiple distinct git repos.
*   **Monorepo:** One root git repo with folders `/apps/web`, `/apps/api`, `/libs/ui`.

---

## 2. Why It Matters in Industry

*   **Google/Facebook/Uber:** They all use Monorepos. It allows atomic changes across the stack. (e.g., Change the API model in Backend and update the Frontend to use it in ONE commit).
*   **Code Sharing:** Sharing a "Utils" library is as simple as importing a file. No need to publish to npm/maven.
*   **Unified Tooling:** One CI pipeline, one linter config, one build system.

**Senior Engineer Insights:**
*   **"Tooling is key."** You cannot manage a Monorepo with just Git. You need tools like **Nx**, **Turborepo**, or **Bazel**. They ensure you only rebuild what changed.
*   **"Sparse Checkout."** Use `git sparse-checkout` to only download the folders you are working on, keeping your disk usage low.

---

## 3. Common Mistakes

### 1. Building Everything
*   **Mistake:** Running `npm install` and `npm build` at the root for every small change.
*   **Why it happens:** Lack of tooling.
*   **Real-world Consequence:** CI takes 4 hours. Developers wait 20 minutes to see a Hello World change.
*   **Correction:** Use smart build tools (Nx/Turbo) that use caching.

---

## 4. Hands-on Lab

We will simulate a Monorepo and use Sparse Checkout to focus.

**Prerequisites:** Open your terminal.

### Step 1: Setup Monorepo
```bash
mkdir git-lab-monorepo
cd git-lab-monorepo
git init
mkdir -p apps/frontend
mkdir -p apps/backend
mkdir -p libs/shared
echo "Frontend" > apps/frontend/app.js
echo "Backend" > apps/backend/server.js
echo "Shared" > libs/shared/utils.js
git add .
git commit -m "Init Monorepo"
```

### Step 2: Enable Sparse Checkout
Imagine this repo is 50GB. You only want to work on `backend`.

```bash
git sparse-checkout init --cone
```

### Step 3: Select Folders
```bash
git sparse-checkout set apps/backend
```

### Step 4: Verify
```bash
ls apps
```
*You should ONLY see `backend`. `frontend` is hidden (but safe in git).*

### Step 5: Restore
```bash
git sparse-checkout set apps/frontend apps/backend libs/shared
# OR
git sparse-checkout disable
```

**Success!** You can now handle massive repositories without melting your laptop.
