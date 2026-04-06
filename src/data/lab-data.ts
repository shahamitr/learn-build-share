export interface LabTask {
  id: string;
  task: string;
  initialContent?: string;
  solution: string;
  expectedCommands?: string[];
  expectedOutput?: string;
}

export const labData: Record<string, Record<string, LabTask>> = {
  git: {
    "01-intro": {
      id: "01-intro",
      task: "Check the version of git installed in this environment.",
      solution: "git --version",
      expectedCommands: ["git --version"]
    },
    "02-install": {
      id: "02-install",
      task: "Configure your global git user name and email.",
      solution: "git config --global user.name \"Your Name\" && git config --global user.email \"your.email@example.com\"",
      expectedCommands: ["git config --global user.name", "git config --global user.email"]
    },
    "03-init": {
      id: "03-init",
      task: "Initialize a new git repository in the current directory.",
      solution: "git init",
      expectedCommands: ["git init"]
    },
    "04-lifecycle": {
      id: "04-lifecycle",
      task: "Check the status of your repository to see untracked files.",
      solution: "git status",
      expectedCommands: ["git status"]
    },
    "05-history": {
      id: "05-history",
      task: "View the commit history of your repository.",
      solution: "git log",
      expectedCommands: ["git log"]
    },
    "06-branching": {
      id: "06-branching",
      task: "Create a new branch named 'feature-login'.",
      solution: "git branch feature-login",
      expectedCommands: ["git branch feature-login"]
    },
    "07-merging": {
      id: "07-merging",
      task: "Merge the 'feature-login' branch into the current branch.",
      solution: "git merge feature-login",
      expectedCommands: ["git merge feature-login"]
    },
    "08-undoing": {
      id: "08-undoing",
      task: "Undo the last commit, keeping the changes in your working directory.",
      solution: "git reset HEAD~1",
      expectedCommands: ["git reset HEAD~1"]
    },
    "09-remote": {
      id: "09-remote",
      task: "Add a remote repository named 'origin' with URL 'https://github.com/user/repo.git'.",
      solution: "git remote add origin https://github.com/user/repo.git",
      expectedCommands: ["git remote add origin https://github.com/user/repo.git"]
    },
    "10-workflow": {
      id: "10-workflow",
      task: "Push your local 'main' branch to the 'origin' remote.",
      solution: "git push origin main",
      expectedCommands: ["git push origin main"]
    },
    "14-stashing": {
      id: "14-stashing",
      task: "Stash your current changes.",
      solution: "git stash",
      expectedCommands: ["git stash"]
    },
    "15-interactive-rebase": {
      id: "15-interactive-rebase",
      task: "Start an interactive rebase for the last 3 commits.",
      solution: "git rebase -i HEAD~3",
      expectedCommands: ["git rebase -i HEAD~3"]
    },
    "16-cherry-pick": {
      id: "16-cherry-pick",
      task: "Cherry-pick the commit with hash 'a1b2c3d'.",
      solution: "git cherry-pick a1b2c3d",
      expectedCommands: ["git cherry-pick a1b2c3d"]
    }
  },
  docker: {
    "01-intro": {
      id: "01-intro",
      task: "List all running containers.",
      solution: "docker ps",
      expectedCommands: ["docker ps"]
    },
    "04-images": {
      id: "04-images",
      task: "List all locally available docker images.",
      solution: "docker images",
      expectedCommands: ["docker images"]
    },
    "05-containers": {
      id: "05-containers",
      task: "Run an interactive ubuntu container.",
      solution: "docker run -it ubuntu",
      expectedCommands: ["docker run -it ubuntu"]
    },
    "06-volumes": {
      id: "06-volumes",
      task: "Create a new docker volume named 'my-data'.",
      solution: "docker volume create my-data",
      expectedCommands: ["docker volume create my-data"]
    },
    "07-networking": {
      id: "07-networking",
      task: "List all docker networks.",
      solution: "docker network ls",
      expectedCommands: ["docker network ls"]
    },
    "09-building-images": {
      id: "09-building-images",
      task: "Build a docker image named 'my-app' from the current directory.",
      solution: "docker build -t my-app .",
      expectedCommands: ["docker build -t my-app ."]
    },
    "10-publishing": {
      id: "10-publishing",
      task: "Stop a running container named 'web-server'.",
      solution: "docker stop web-server",
      expectedCommands: ["docker stop web-server"]
    },
    "12-multi-stage": {
      id: "12-multi-stage",
      task: "Remove a stopped container named 'old-app'.",
      solution: "docker rm old-app",
      expectedCommands: ["docker rm old-app"]
    },
    "14-compose-networking": {
      id: "14-compose-networking",
      task: "Remove a docker image named 'ubuntu:latest'.",
      solution: "docker rmi ubuntu:latest",
      expectedCommands: ["docker rmi ubuntu:latest", "docker rmi ubuntu"]
    }
  },
  ai: {
    "01-intro": {
      id: "01-intro",
      task: "Ask the AI to explain what 'AI-Assisted Development' means in one sentence.",
      solution: "Explain AI-assisted development in one sentence."
    },
    "02-prompts": {
      id: "02-prompts",
      task: "Write a prompt to ask an AI to explain 'recursion' to a 5-year-old.",
      solution: "Explain recursion to a 5-year-old using a simple analogy.",
    },
    "03-generation": {
      id: "03-generation",
      task: "Write a prompt to ask an AI to generate a Python function that calculates the factorial of a number.",
      solution: "Write a Python function to calculate the factorial of a given number.",
    },
    "04-debugging": {
      id: "04-debugging",
      task: "Write a prompt to ask an AI to find a bug in a given code snippet.",
      solution: "Find the bug in this code snippet and explain how to fix it: [insert code here]",
    },
    "06-testing": {
      id: "06-testing",
      task: "Write a prompt to ask an AI to generate unit tests for a given function.",
      solution: "Generate unit tests for this function using a testing framework like pytest: [insert function here]",
    },
    "08-pr-reviews": {
      id: "08-pr-reviews",
      task: "Write a prompt to ask an AI to review a pull request.",
      solution: "Review this pull request and suggest improvements or point out potential issues: [insert PR description and code changes here]",
    },
    "09-refactoring": {
      id: "09-refactoring",
      task: "Write a prompt to ask an AI to refactor a piece of legacy code.",
      solution: "Refactor this legacy code to improve readability and maintainability without changing its functionality: [insert code here]",
    },
    "12-devops": {
      id: "12-devops",
      task: "Write a prompt to ask an AI to generate a Dockerfile for a Node.js application.",
      solution: "Generate a Dockerfile for a Node.js application that uses Express and runs on port 3000.",
    },
    "13-test-automation": {
      id: "13-test-automation",
      task: "Write a prompt to ask an AI to write an automated UI test using Selenium.",
      solution: "Write an automated UI test using Selenium in Python to verify the login functionality of a website.",
    },
    "14-optimization": {
      id: "14-optimization",
      task: "Write a prompt to ask an AI to optimize a slow database query.",
      solution: "Optimize this slow SQL query to improve its performance: [insert query here]",
    },
    "16-complex-prompts": {
      id: "16-complex-prompts",
      task: "Write a complex prompt that provides context, constraints, and a specific output format.",
      solution: "Act as a senior software engineer. Given the following context [insert context], write a function that does [task]. Constraints: [insert constraints]. Output format: [insert format].",
    },
    "19-templates": {
      id: "19-templates",
      task: "Write a prompt to ask an AI to create a boilerplate template for a React component.",
      solution: "Create a boilerplate template for a functional React component using TypeScript and Tailwind CSS.",
    }
  },
  "github-actions": {
    "01-intro": {
      id: "01-intro",
      task: "Modify the workflow to echo 'Hello from Learn Build Share!' instead of 'Hello, world!'.",
      initialContent: `name: CI Pipeline
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run a one-line script
        run: echo Hello, world!`,
      solution: "Change 'echo Hello, world!' to 'echo Hello from Learn Build Share!'"
    },
    "02-triggers": {
      id: "02-triggers",
      task: "Change the workflow trigger from 'push' to 'pull_request'.",
      initialContent: `name: CI Pipeline
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3`,
      solution: "Change 'on: [push]' to 'on: [pull_request]'"
    },
    "03-env-vars": {
      id: "03-env-vars",
      task: "Add an environment variable named 'MY_VAR' with value 'Hello' to the step.",
      initialContent: `name: Env Var Pipeline
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Print Env Var
        run: echo $MY_VAR`,
      solution: "Add 'env: MY_VAR: Hello' to the step."
    }
  },
  github: {
    "01-intro": {
      id: "01-intro",
      task: "Check if the GitHub CLI (gh) is installed.",
      solution: "gh --version",
      expectedCommands: ["gh --version"]
    },
    "02-repos": {
      id: "02-repos",
      task: "Create a new repository named 'my-awesome-project' using the GitHub CLI.",
      solution: "gh repo create my-awesome-project --public",
      expectedCommands: ["gh repo create my-awesome-project --public"]
    },
    "03-connecting": {
      id: "03-connecting",
      task: "Check the authentication status of the GitHub CLI.",
      solution: "gh auth status",
      expectedCommands: ["gh auth status"]
    },
    "08-issues": {
      id: "08-issues",
      task: "List all open issues in the current repository using the GitHub CLI.",
      solution: "gh issue list",
      expectedCommands: ["gh issue list"]
    },
    "11-forking": {
      id: "11-forking",
      task: "Fork the 'torvalds/linux' repository using the GitHub CLI.",
      solution: "gh repo fork torvalds/linux",
      expectedCommands: ["gh repo fork torvalds/linux"]
    },
    "19-cli": {
      id: "19-cli",
      task: "List all pull requests for the current repository using the GitHub CLI.",
      solution: "gh pr list",
      expectedCommands: ["gh pr list"]
    }
  },
  "manual-testing": {
    "foundations": {
      id: "foundations",
      task: "Explain the difference between Verification and Validation in one sentence.",
      solution: "Verification is 'Are we building the product right?' while Validation is 'Are we building the right product?'"
    },
    "testing-basics": {
      id: "testing-basics",
      task: "Identify the type of testing performed to ensure that a specific bug fix works as expected.",
      solution: "Retesting"
    },
    "artifacts-and-bugs": {
      id: "artifacts-and-bugs",
      task: "List the stages of a typical Bug Life Cycle in order.",
      solution: "New -> Assigned -> Open -> Fixed -> Retest -> Closed"
    },
    "advanced-testing": {
      id: "advanced-testing",
      task: "What is the primary goal of Integration Testing?",
      solution: "To verify that different modules or services work together as expected."
    },
    "test-design": {
      id: "test-design",
      task: "Identify boundary values for an age input field accepting values from 18 to 65.",
      solution: "Boundary values: 17, 18, 19, 64, 65, 66."
    },
    "practical-skills": {
      id: "practical-skills",
      task: "Which HTTP method is typically used to retrieve data from an API?",
      solution: "GET"
    },
    "strategy-and-agile": {
      id: "strategy-and-agile",
      task: "What is the role of QA in a Scrum team?",
      solution: "QA is responsible for ensuring quality throughout the sprint and participating in all Agile ceremonies."
    },
    "specialized-testing": {
      id: "specialized-testing",
      task: "What is the difference between an Emulator and a Real Device in mobile testing?",
      solution: "An emulator is a software simulation of a device, while a real device is the actual physical hardware."
    },
    "leadership-and-devops": {
      id: "leadership-and-devops",
      task: "What does CI/CD stand for in the context of DevOps?",
      solution: "Continuous Integration and Continuous Deployment (or Continuous Delivery)."
    }
  },
  "prompt-engineering": {
    "intro-to-llms": {
      id: "intro-to-llms",
      task: "Ask the AI to explain what an LLM is in simple terms.",
      solution: "Explain what a Large Language Model is to a beginner."
    },
    "basic-prompting": {
      id: "basic-prompting",
      task: "Write a prompt to generate a recipe for chocolate chip cookies.",
      solution: "Write a detailed recipe for homemade chocolate chip cookies, including ingredients and step-by-step instructions."
    },
    "few-shot": {
      id: "few-shot",
      task: "Use few-shot prompting to classify the sentiment of 'I love this product!'.",
      solution: "Classify the sentiment of the following sentence: 'I love this product!'. Examples: 'This is terrible' -> Negative, 'This is okay' -> Neutral."
    },
    "chain-of-thought": {
      id: "chain-of-thought",
      task: "Use chain-of-thought prompting to solve a math word problem.",
      solution: "If John has 5 apples and gives 2 to Mary, how many does he have left? Let's think step-by-step."
    },
    "system-prompts": {
      id: "system-prompts",
      task: "Write a system prompt for an AI assistant that acts like a pirate.",
      solution: "You are a helpful AI assistant, but you must always speak like a pirate."
    }
  },
  "cybersecurity": {
    "cyber-core-concepts": {
      id: "cyber-core-concepts",
      task: "Explain the CIA triad in cybersecurity.",
      solution: "The CIA triad stands for Confidentiality, Integrity, and Availability."
    },
    "cyber-networking-basics": {
      id: "cyber-networking-basics",
      task: "What is the purpose of DNS (Domain Name System)?",
      solution: "DNS translates domain names (like google.com) into IP addresses."
    },
    "cyber-tools-intro": {
      id: "cyber-tools-intro",
      task: "Run an nmap scan on localhost.",
      solution: "nmap localhost",
      expectedCommands: ["nmap localhost", "nmap 127.0.0.1"]
    },
    "cyber-web-security": {
      id: "cyber-web-security",
      task: "What is SQL Injection (SQLi)?",
      solution: "SQL Injection is a vulnerability where an attacker can interfere with the queries that an application makes to its database."
    },
    "cyber-ethical-hacking-basics": {
      id: "cyber-ethical-hacking-basics",
      task: "What is the primary purpose of Nmap?",
      solution: "Nmap is used for network discovery and security auditing."
    },
    "cyber-crypto-intermediate": {
      id: "cyber-crypto-intermediate",
      task: "What does SSL/TLS stand for?",
      solution: "Secure Sockets Layer and Transport Layer Security."
    },
    "cyber-adv-hacking": {
      id: "cyber-adv-hacking",
      task: "What is Privilege Escalation?",
      solution: "Gaining higher-level access to a system (e.g., from a user account to an administrator account)."
    },
    "cyber-soc": {
      id: "cyber-soc",
      task: "What is the purpose of a SIEM tool like Splunk?",
      solution: "SIEM tools are used for collecting and analyzing security logs."
    },
    "cyber-forensics": {
      id: "cyber-forensics",
      task: "What is the purpose of Digital Forensics?",
      solution: "Digital forensics is used for collecting and analyzing digital evidence."
    }
  },
  "antigravity": {
    "gravity-physics-foundations": {
      id: "gravity-physics-foundations",
      task: "Explain the difference between Newtonian gravity and General Relativity in one sentence.",
      solution: "Newtonian gravity is a force between masses, while General Relativity is the curvature of spacetime."
    },
    "antigravity-cli": {
      id: "antigravity-cli",
      task: "Create a new Antigravity app named 'my-app'.",
      solution: "npx create-antigravity-app my-app",
      expectedCommands: ["npx create-antigravity-app my-app"]
    },
    "fundamental-laws": {
      id: "fundamental-laws",
      task: "State Newton's Second Law of Motion as a formula.",
      solution: "F = ma"
    },
    "space-science-intro": {
      id: "space-science-intro",
      task: "What is the term for the minimum speed needed to escape a planet's gravitational pull?",
      solution: "Escape velocity"
    },
    "advanced-physics-relativity": {
      id: "advanced-physics-relativity",
      task: "What is the phenomenon where time slows down for an object moving at high speeds?",
      solution: "Time dilation"
    },
    "antigravity-concepts": {
      id: "antigravity-concepts",
      task: "Name a theoretical type of matter often associated with the possibility of antigravity.",
      solution: "Exotic matter"
    },
    "propulsion-simulations": {
      id: "propulsion-simulations",
      task: "What is the 'slingshot effect' used by spacecraft called in physics?",
      solution: "Gravity assist"
    },
    "theoretical-physics-frontier": {
      id: "theoretical-physics-frontier",
      task: "What set of equations describes gravitation as spacetime curvature in General Relativity?",
      solution: "Einstein Field Equations"
    },
    "cutting-edge-gravity": {
      id: "cutting-edge-gravity",
      task: "What is the name of the theoretical metric for a warp drive?",
      solution: "Alcubierre metric"
    },
    "experimental-aerospace": {
      id: "experimental-aerospace",
      task: "What phenomenon involves ripples in spacetime caused by massive accelerating objects?",
      solution: "Gravitational waves"
    }
  },
  gitlab: {
    "gitlab-intro": {
      id: "gitlab-intro",
      task: "What does CI/CD stand for?",
      solution: "Continuous Integration and Continuous Delivery / Deployment."
    },
    "gitlab-yaml-anatomy": {
      id: "gitlab-yaml-anatomy",
      task: "What is the name of the file used to define a GitLab CI/CD pipeline?",
      solution: ".gitlab-ci.yml"
    },
    "gitlab-runners": {
      id: "gitlab-runners",
      task: "Check the status of the gitlab-runner service.",
      solution: "gitlab-runner status",
      expectedCommands: ["gitlab-runner status"]
    },
    "gitlab-testing-artifacts": {
      id: "gitlab-testing-artifacts",
      task: "What are 'artifacts' in a GitLab CI/CD pipeline?",
      solution: "Artifacts are files generated by a job that can be used by subsequent jobs."
    },
    "gitlab-branching-envs": {
      id: "gitlab-branching-envs",
      task: "How do you run a job only on the 'main' branch in GitLab CI/CD?",
      solution: "By using the 'only' or 'rules' keyword in the .gitlab-ci.yml file."
    },
    "gitlab-deployment-strategies": {
      id: "gitlab-deployment-strategies",
      task: "What is the purpose of a 'staging' environment?",
      solution: "A staging environment is used to verify that an application is working correctly before deploying to production."
    },
    "gitlab-advanced-features": {
      id: "gitlab-advanced-features",
      task: "What is a 'parent-child' pipeline in GitLab CI/CD?",
      solution: "A parent-child pipeline is a pipeline that triggers another pipeline."
    },
    "gitlab-security-compliance": {
      id: "gitlab-security-compliance",
      task: "What is 'SAST' in the context of CI/CD security?",
      solution: "Static Application Security Testing (SAST) is a method of analyzing source code for security vulnerabilities."
    },
    "gitlab-devops-custom-runners": {
      id: "gitlab-devops-custom-runners",
      task: "What is a 'canary release' deployment strategy?",
      solution: "A canary release is a deployment strategy that releases a new version of an application to a small group of users first."
    }
  },
  kubernetes: {
    "k8s-core-concepts": {
      id: "k8s-core-concepts",
      task: "What is the smallest deployable unit in Kubernetes?",
      solution: "A Pod."
    },
    "k8s-kubectl": {
      id: "k8s-kubectl",
      task: "What command is used to list all pods in the current namespace?",
      solution: "kubectl get pods",
      expectedCommands: ["kubectl get pods"]
    },
    "k8s-workloads": {
      id: "k8s-workloads",
      task: "Which service type exposes a service on each Node's IP at a static port?",
      solution: "NodePort"
    },
    "k8s-networking": {
      id: "k8s-networking",
      task: "What command is used to list all services in the current namespace?",
      solution: "kubectl get services",
      expectedCommands: ["kubectl get services", "kubectl get svc"]
    },
    "k8s-storage": {
      id: "k8s-storage",
      task: "What does PVC stand for in Kubernetes storage?",
      solution: "Persistent Volume Claim"
    },
    "k8s-debugging": {
      id: "k8s-debugging",
      task: "What is the command to view the logs of a pod named 'my-pod'?",
      solution: "kubectl logs my-pod",
      expectedCommands: ["kubectl logs my-pod"]
    },
    "k8s-describe": {
      id: "k8s-describe",
      task: "What is the command to describe a pod named 'my-pod'?",
      solution: "kubectl describe pod my-pod",
      expectedCommands: ["kubectl describe pod my-pod"]
    },
    "k8s-security": {
      id: "k8s-security",
      task: "What does RBAC stand for in Kubernetes security?",
      solution: "Role-Based Access Control"
    },
    "k8s-cicd": {
      id: "k8s-cicd",
      task: "What is a popular service mesh used with Kubernetes?",
      solution: "Istio"
    },
    "k8s-observability": {
      id: "k8s-observability",
      task: "Which tool is commonly used for visualizing metrics in Kubernetes?",
      solution: "Grafana"
    }
  },
  rust: {
    "rust-foundations": {
      id: "rust-foundations",
      task: "What is the command to create a new Rust project using Cargo?",
      solution: "cargo new <project_name>"
    },
    "rust-build-run": {
      id: "rust-build-run",
      task: "What is the command to build and run a Rust project using Cargo?",
      solution: "cargo run",
      expectedCommands: ["cargo run"]
    },
    "rust-syntax-basics": {
      id: "rust-syntax-basics",
      task: "How do you declare a mutable variable in Rust?",
      solution: "let mut x = 5;"
    },
    "rust-ownership-system": {
      id: "rust-ownership-system",
      task: "What is the symbol used for immutable borrowing in Rust?",
      solution: "&"
    },
    "rust-structs-enums-errors": {
      id: "rust-structs-enums-errors",
      task: "What are the two variants of the Option enum?",
      solution: "Some(T) and None"
    },
    "rust-collections-traits": {
      id: "rust-collections-traits",
      task: "What is the common trait for defining shared behavior in Rust?",
      solution: "trait"
    },
    "rust-lifetimes-closures": {
      id: "rust-lifetimes-closures",
      task: "What is the symbol used for lifetime annotations in Rust?",
      solution: "'"
    },
    "rust-concurrency-async": {
      id: "rust-concurrency-async",
      task: "What is the keyword used to define an asynchronous function in Rust?",
      solution: "async"
    },
    "rust-memory-unsafe": {
      id: "rust-memory-unsafe",
      task: "What keyword is used to bypass Rust's safety checks?",
      solution: "unsafe"
    },
    "rust-macros-testing": {
      id: "rust-macros-testing",
      task: "What attribute is used to mark a function as a unit test in Rust?",
      solution: "#[test]"
    }
  },
  linux: {
    "linux-intro": {
      id: "linux-intro",
      task: "Check the current kernel version of Linux.",
      solution: "uname -r",
      expectedCommands: ["uname -r"]
    },
    "linux-filesystem": {
      id: "linux-filesystem",
      task: "List all files in the root directory.",
      solution: "ls /",
      expectedCommands: ["ls /"]
    },
    "linux-navigating": {
      id: "linux-navigating",
      task: "Print the current working directory.",
      solution: "pwd",
      expectedCommands: ["pwd"]
    },
    "linux-creating-files": {
      id: "linux-creating-files",
      task: "Create a new empty file named 'hello.txt'.",
      solution: "touch hello.txt",
      expectedCommands: ["touch hello.txt"]
    },
    "linux-moving-copying": {
      id: "linux-moving-copying",
      task: "Copy 'hello.txt' to 'hello_backup.txt'.",
      solution: "cp hello.txt hello_backup.txt",
      expectedCommands: ["cp hello.txt hello_backup.txt"]
    },
    "linux-deleting": {
      id: "linux-deleting",
      task: "Remove the file 'hello_backup.txt'.",
      solution: "rm hello_backup.txt",
      expectedCommands: ["rm hello_backup.txt"]
    },
    "linux-understanding-permissions": {
      id: "linux-understanding-permissions",
      task: "List files with detailed permission information.",
      solution: "ls -l",
      expectedCommands: ["ls -l"]
    },
    "linux-chmod": {
      id: "linux-chmod",
      task: "Give the owner execute permission on 'script.sh'.",
      solution: "chmod u+x script.sh",
      expectedCommands: ["chmod u+x script.sh"]
    },
    "linux-chown": {
      id: "linux-chown",
      task: "Change the owner of 'file.txt' to user 'admin'.",
      solution: "chown admin file.txt",
      expectedCommands: ["chown admin file.txt"]
    },
    "linux-grep": {
      id: "linux-grep",
      task: "Search for the word 'Hello' in 'hello.txt'.",
      solution: "grep 'Hello' hello.txt",
      expectedCommands: ["grep Hello hello.txt", "grep 'Hello' hello.txt", "grep \"Hello\" hello.txt"]
    },
    "linux-find": {
      id: "linux-find",
      task: "Find all files named 'hello.txt' in the current directory (.).",
      solution: "find . -name 'hello.txt'",
      expectedCommands: ["find . -name hello.txt", "find . -name 'hello.txt'", "find . -name \"hello.txt\""]
    },
    "linux-pipes": {
      id: "linux-pipes",
      task: "List files (ls) and pipe the output to grep 'txt'.",
      solution: "ls | grep txt",
      expectedCommands: ["ls | grep txt", "ls | grep 'txt'", "ls | grep \"txt\""]
    },
    "linux-tar": {
      id: "linux-tar",
      task: "Create a gzipped tar archive named 'archive.tar.gz' containing 'file.txt'.",
      solution: "tar -czvf archive.tar.gz file.txt",
      expectedCommands: ["tar -czvf archive.tar.gz file.txt", "tar -zcvf archive.tar.gz file.txt"]
    },
    "linux-wget": {
      id: "linux-wget",
      task: "Download 'https://example.com/file.zip' using wget.",
      solution: "wget https://example.com/file.zip",
      expectedCommands: ["wget https://example.com/file.zip"]
    },
    "linux-top": {
      id: "linux-top",
      task: "List all processes running on the system using ps.",
      solution: "ps -e",
      expectedCommands: ["ps -e", "ps aux"]
    },
    "linux-df": {
      id: "linux-df",
      task: "View disk space usage in human-readable format.",
      solution: "df -h",
      expectedCommands: ["df -h"]
    },
    "linux-sed": {
      id: "linux-sed",
      task: "Use 'sed' to replace all occurrences of 'apple' with 'orange' in a file named 'fruits.txt'.",
      solution: "sed 's/apple/orange/g' fruits.txt",
      expectedCommands: ["sed 's/apple/orange/g' fruits.txt"]
    },
    "linux-awk": {
      id: "linux-awk",
      task: "Use 'awk' to print the first and third columns of a file named 'data.txt'.",
      solution: "awk '{ print $1, $3 }' data.txt",
      expectedCommands: ["awk '{ print $1, $3 }' data.txt", "awk '{print $1, $3}' data.txt"]
    }
  },
  aws: {
    "aws-what-is-cloud": {
      id: "aws-what-is-cloud",
      task: "Check the version of the AWS CLI.",
      solution: "aws --version",
      expectedCommands: ["aws --version"]
    },
    "aws-global-infrastructure": {
      id: "aws-global-infrastructure",
      task: "List all available AWS regions for EC2.",
      solution: "aws ec2 describe-regions",
      expectedCommands: ["aws ec2 describe-regions"]
    },
    "aws-cli-intro": {
      id: "aws-cli-intro",
      task: "Configure the AWS CLI with your credentials.",
      solution: "aws configure",
      expectedCommands: ["aws configure"]
    },
    "aws-ec2-basics": {
      id: "aws-ec2-basics",
      task: "List all EC2 instances.",
      solution: "aws ec2 describe-instances",
      expectedCommands: ["aws ec2 describe-instances"]
    },
    "aws-ec2-cli": {
      id: "aws-ec2-cli",
      task: "Start an EC2 instance with ID 'i-1234567890abcdef0'.",
      solution: "aws ec2 start-instances --instance-ids i-1234567890abcdef0",
      expectedCommands: ["aws ec2 start-instances --instance-ids i-1234567890abcdef0"]
    },
    "aws-lambda-basics": {
      id: "aws-lambda-basics",
      task: "List all Lambda functions.",
      solution: "aws lambda list-functions",
      expectedCommands: ["aws lambda list-functions"]
    },
    "aws-s3-basics": {
      id: "aws-s3-basics",
      task: "List all S3 buckets.",
      solution: "aws s3 ls",
      expectedCommands: ["aws s3 ls"]
    },
    "aws-s3-cli": {
      id: "aws-s3-cli",
      task: "Create a new S3 bucket named 'my-new-bucket'.",
      solution: "aws s3 mb s3://my-new-bucket",
      expectedCommands: ["aws s3 mb s3://my-new-bucket"]
    },
    "aws-iam-cli": {
      id: "aws-iam-cli",
      task: "List all IAM users.",
      solution: "aws iam list-users",
      expectedCommands: ["aws iam list-users"]
    },
    "aws-ebs-efs": {
      id: "aws-ebs-efs",
      task: "List all EBS volumes.",
      solution: "aws ec2 describe-volumes",
      expectedCommands: ["aws ec2 describe-volumes"]
    },
    "aws-cloudwatch": {
      id: "aws-cloudwatch",
      task: "List the available CloudWatch metrics for the 'AWS/EC2' namespace.",
      solution: "aws cloudwatch list-metrics --namespace AWS/EC2",
      expectedCommands: ["aws cloudwatch list-metrics --namespace AWS/EC2"]
    }
  },
  sql: {
    "sql-what-is-db": {
      id: "sql-what-is-db",
      task: "Connect to the database using the command line client.",
      solution: "mysql -u root -p",
      expectedCommands: ["mysql -u root -p"]
    },
    "sql-select-basics": {
      id: "sql-select-basics",
      task: "Select all columns from the 'users' table.",
      solution: "SELECT * FROM users;",
      expectedCommands: ["SELECT * FROM users;"]
    },
    "sql-filtering": {
      id: "sql-filtering",
      task: "Select users where age is greater than 18.",
      solution: "SELECT * FROM users WHERE age > 18;",
      expectedCommands: ["SELECT * FROM users WHERE age > 18;"]
    },
    "sql-insert": {
      id: "sql-insert",
      task: "Insert a new user with name 'Alice' and age 25.",
      solution: "INSERT INTO users (name, age) VALUES ('Alice', 25);",
      expectedCommands: ["INSERT INTO users (name, age) VALUES ('Alice', 25);"]
    },
    "sql-update": {
      id: "sql-update",
      task: "Update the age of the user named 'Alice' to 26.",
      solution: "UPDATE users SET age = 26 WHERE name = 'Alice';",
      expectedCommands: ["UPDATE users SET age = 26 WHERE name = 'Alice';"]
    },
    "sql-delete": {
      id: "sql-delete",
      task: "Delete the user named 'Alice'.",
      solution: "DELETE FROM users WHERE name = 'Alice';",
      expectedCommands: ["DELETE FROM users WHERE name = 'Alice';"]
    },
    "sql-null-values": {
      id: "sql-null-values",
      task: "Select all users whose email is NULL.",
      solution: "SELECT * FROM users WHERE email IS NULL;",
      expectedCommands: ["SELECT * FROM users WHERE email IS NULL;"]
    },
    "sql-functions": {
      id: "sql-functions",
      task: "Find the maximum age of all users.",
      solution: "SELECT MAX(age) FROM users;",
      expectedCommands: ["SELECT MAX(age) FROM users;"]
    },
    "sql-like": {
      id: "sql-like",
      task: "Select all users whose name starts with 'A'.",
      solution: "SELECT * FROM users WHERE name LIKE 'A%';",
      expectedCommands: ["SELECT * FROM users WHERE name LIKE 'A%';"]
    },
    "sql-in-between": {
      id: "sql-in-between",
      task: "Select all users whose age is between 20 and 30.",
      solution: "SELECT * FROM users WHERE age BETWEEN 20 AND 30;",
      expectedCommands: ["SELECT * FROM users WHERE age BETWEEN 20 AND 30;"]
    },
    "sql-sorting": {
      id: "sql-sorting",
      task: "Select all users ordered by age descending.",
      solution: "SELECT * FROM users ORDER BY age DESC;",
      expectedCommands: ["SELECT * FROM users ORDER BY age DESC;"]
    },
    "sql-grouping": {
      id: "sql-grouping",
      task: "Count the number of users in each city.",
      solution: "SELECT city, COUNT(*) FROM users GROUP BY city;",
      expectedCommands: ["SELECT city, COUNT(*) FROM users GROUP BY city;"]
    },
    "sql-joins": {
      id: "sql-joins",
      task: "Select user names and their order dates by joining 'users' and 'orders' tables on user_id.",
      solution: "SELECT users.name, orders.order_date FROM users JOIN orders ON users.id = orders.user_id;",
      expectedCommands: ["SELECT users.name, orders.order_date FROM users JOIN orders ON users.id = orders.user_id;"]
    },
    "sql-aliases": {
      id: "sql-aliases",
      task: "Select the 'name' column as 'User_Name' from the 'users' table.",
      solution: "SELECT name AS User_Name FROM users;",
      expectedCommands: ["SELECT name AS User_Name FROM users;"]
    },
    "sql-union": {
      id: "sql-union",
      task: "Combine the 'name' column from 'users' and 'employees' tables using UNION.",
      solution: "SELECT name FROM users UNION SELECT name FROM employees;",
      expectedCommands: ["SELECT name FROM users UNION SELECT name FROM employees;"]
    },
    "sql-having": {
      id: "sql-having",
      task: "Count the number of users in each city, but only show cities with more than 3 users.",
      solution: "SELECT city, COUNT(*) FROM users GROUP BY city HAVING COUNT(*) > 3;",
      expectedCommands: ["SELECT city, COUNT(*) FROM users GROUP BY city HAVING COUNT(*) > 3;"]
    },
    "sql-case": {
      id: "sql-case",
      task: "Select the name and a new column 'status' which is 'Adult' if age >= 18, else 'Minor'.",
      solution: "SELECT name, CASE WHEN age >= 18 THEN 'Adult' ELSE 'Minor' END AS status FROM users;",
      expectedCommands: ["SELECT name, CASE WHEN age >= 18 THEN 'Adult' ELSE 'Minor' END AS status FROM users;"]
    },
    "sql-create-table": {
      id: "sql-create-table",
      task: "Create a table named 'products' with columns 'id' (INT) and 'name' (VARCHAR).",
      solution: "CREATE TABLE products (id INT, name VARCHAR(255));",
      expectedCommands: ["CREATE TABLE products (id INT, name VARCHAR(255));", "CREATE TABLE products (id INT, name VARCHAR);"]
    },
    "sql-alter-table": {
      id: "sql-alter-table",
      task: "Add a column named 'email' of type VARCHAR to the 'users' table.",
      solution: "ALTER TABLE users ADD email VARCHAR(255);",
      expectedCommands: ["ALTER TABLE users ADD email VARCHAR(255);", "ALTER TABLE users ADD email VARCHAR;"]
    },
    "sql-drop-table": {
      id: "sql-drop-table",
      task: "Drop the table named 'old_users'.",
      solution: "DROP TABLE old_users;",
      expectedCommands: ["DROP TABLE old_users;"]
    },
    "sql-views": {
      id: "sql-views",
      task: "Create a view named 'active_users' that selects all users where status is 'active'.",
      solution: "CREATE VIEW active_users AS SELECT * FROM users WHERE status = 'active';",
      expectedCommands: ["CREATE VIEW active_users AS SELECT * FROM users WHERE status = 'active';", "CREATE VIEW active_users AS SELECT * FROM users WHERE status='active';"]
    },
    "sql-injection": {
      id: "sql-injection",
      task: "Read about SQL Injection.",
      solution: "Read the provided material."
    },
    "sql-hosting": {
      id: "sql-hosting",
      task: "Read about SQL Hosting.",
      solution: "Read the provided material."
    }
  }
};
