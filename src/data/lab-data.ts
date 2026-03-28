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
    }
  },
  docker: {
    "01-intro": {
      id: "01-intro",
      task: "List all running containers.",
      solution: "docker ps",
      expectedCommands: ["docker ps"]
    },
    "02-images": {
      id: "02-images",
      task: "List all locally available docker images.",
      solution: "docker images",
      expectedCommands: ["docker images"]
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
      task: "Write a prompt to explain the concept of 'Recursion' to a 10-year old.",
      solution: "Explain recursion to a 10-year old using a simple analogy like a mirror or a set of Russian dolls."
    },
    "03-generation": {
      id: "03-generation",
      task: "Ask the AI to generate a Python function that calculates the factorial of a number.",
      solution: "Generate a Python function for factorial."
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
    "19-cli": {
      id: "19-cli",
      task: "List all pull requests for the current repository using the GitHub CLI.",
      solution: "gh pr list",
      expectedCommands: ["gh pr list"]
    }
  },
  "manual-testing": {
    "intro-to-testing": {
      id: "intro-to-testing",
      task: "Write a simple test case for a login page.",
      solution: "Test Case: Verify successful login with valid credentials."
    },
    "test-cases": {
      id: "test-cases",
      task: "Write a test case to check the 'Forgot Password' functionality.",
      solution: "Test Case: Verify that clicking 'Forgot Password' redirects to the reset password page."
    },
    "black-box": {
      id: "black-box",
      task: "Identify boundary values for an age input field accepting values from 18 to 65.",
      solution: "Boundary values: 17, 18, 19, 64, 65, 66."
    },
    "exploratory": {
      id: "exploratory",
      task: "Describe how you would perform exploratory testing on a new shopping cart feature.",
      solution: "I would try adding items, removing items, changing quantities, and checking out with different payment methods without a predefined script."
    },
    "bug-reporting": {
      id: "bug-reporting",
      task: "Write a bug report for a broken 'Submit' button on a contact form.",
      solution: "Title: Submit button on contact form is unresponsive. Steps: 1. Go to contact page. 2. Fill out form. 3. Click Submit. Expected: Form submits. Actual: Nothing happens."
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
    "intro-to-cybersecurity": {
      id: "intro-to-cybersecurity",
      task: "Explain the CIA triad in cybersecurity.",
      solution: "The CIA triad stands for Confidentiality, Integrity, and Availability."
    },
    "passwords-and-auth": {
      id: "passwords-and-auth",
      task: "List three characteristics of a strong password.",
      solution: "A strong password should be long, complex (using mixed characters), and unique."
    },
    "network-fundamentals": {
      id: "network-fundamentals",
      task: "What is the purpose of a firewall?",
      solution: "A firewall monitors and controls incoming and outgoing network traffic based on predetermined security rules."
    },
    "encryption": {
      id: "encryption",
      task: "Explain the difference between symmetric and asymmetric encryption.",
      solution: "Symmetric encryption uses the same key for encryption and decryption, while asymmetric uses a public key for encryption and a private key for decryption."
    },
    "owasp-top-10": {
      id: "owasp-top-10",
      task: "What is SQL Injection (SQLi)?",
      solution: "SQL Injection is a vulnerability where an attacker can interfere with the queries that an application makes to its database."
    }
  },
  "antigravity": {
    "intro-to-antigravity": {
      id: "intro-to-antigravity",
      task: "Explain what the Antigravity framework is used for.",
      solution: "Antigravity is a modern web framework for building fast and scalable applications."
    },
    "setup-and-installation": {
      id: "setup-and-installation",
      task: "Write the command to create a new Antigravity project.",
      solution: "npx create-antigravity-app my-app"
    },
    "routing": {
      id: "routing",
      task: "How do you define a route in Antigravity?",
      solution: "Routes are typically defined using a file-based routing system or a dedicated router configuration file."
    },
    "state-management": {
      id: "state-management",
      task: "What is the recommended way to manage global state in Antigravity?",
      solution: "Antigravity often uses built-in context or recommended libraries like Redux or Zustand for state management."
    },
    "performance-optimization": {
      id: "performance-optimization",
      task: "Name one technique for optimizing performance in Antigravity.",
      solution: "Code splitting or lazy loading components."
    }
  },
  gitlab: {
    "intro-to-gitlab": {
      id: "intro-to-gitlab",
      task: "Check the version of gitlab-runner installed.",
      solution: "gitlab-runner --version",
      expectedCommands: ["gitlab-runner --version"]
    },
    "gitlab-projects": {
      id: "gitlab-projects",
      task: "List all projects in your GitLab namespace.",
      solution: "gitlab project list",
      expectedCommands: ["gitlab project list"]
    },
    "gitlab-ci-basics": {
      id: "gitlab-ci-basics",
      task: "Create a basic .gitlab-ci.yml file with a single 'test' job.",
      solution: "test_job:\n  script: echo 'Running tests'",
      expectedCommands: [".gitlab-ci.yml"]
    },
    "gitlab-runners": {
      id: "gitlab-runners",
      task: "Register a new GitLab runner.",
      solution: "gitlab-runner register",
      expectedCommands: ["gitlab-runner register"]
    },
    "gitlab-security": {
      id: "gitlab-security",
      task: "Enable SAST (Static Application Security Testing) in your pipeline.",
      solution: "include:\n  - template: Jobs/SAST.gitlab-ci.yml",
      expectedCommands: ["SAST.gitlab-ci.yml"]
    }
  },
  kubernetes: {
    "intro-to-k8s": {
      id: "intro-to-k8s",
      task: "Check the status of the Kubernetes cluster.",
      solution: "kubectl cluster-info",
      expectedCommands: ["kubectl cluster-info"]
    },
    "k8s-objects": {
      id: "k8s-objects",
      task: "Describe the 'nginx' deployment.",
      solution: "kubectl describe deployment nginx",
      expectedCommands: ["kubectl describe deployment nginx"]
    },
    "k8s-config": {
      id: "k8s-config",
      task: "Create a ConfigMap named 'app-config' from a literal value.",
      solution: "kubectl create configmap app-config --from-literal=key=value",
      expectedCommands: ["kubectl create configmap app-config"]
    },
    "k8s-storage": {
      id: "k8s-storage",
      task: "List all Persistent Volumes (PV) in the cluster.",
      solution: "kubectl get pv",
      expectedCommands: ["kubectl get pv"]
    },
    "k8s-networking": {
      id: "k8s-networking",
      task: "Expose a deployment as a Service of type NodePort.",
      solution: "kubectl expose deployment nginx --port=80 --type=NodePort",
      expectedCommands: ["kubectl expose deployment"]
    }
  },
  rust: {
    "intro-to-rust": {
      id: "intro-to-rust",
      task: "Check the version of rustc installed.",
      solution: "rustc --version",
      expectedCommands: ["rustc --version"]
    },
    "rust-syntax": {
      id: "rust-syntax",
      task: "Compile a single Rust file named 'main.rs'.",
      solution: "rustc main.rs",
      expectedCommands: ["rustc main.rs"]
    },
    "rust-ownership": {
      id: "rust-ownership",
      task: "Check the code for ownership errors without building it.",
      solution: "cargo check",
      expectedCommands: ["cargo check"]
    },
    "rust-borrowing": {
      id: "rust-borrowing",
      task: "Build the project in release mode for optimization.",
      solution: "cargo build --release",
      expectedCommands: ["cargo build --release"]
    },
    "rust-concurrency": {
      id: "rust-concurrency",
      task: "Run tests in your Rust project.",
      solution: "cargo test",
      expectedCommands: ["cargo test"]
    }
  }
};
