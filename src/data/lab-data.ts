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
    "cyber-foundations": {
      id: "cyber-foundations",
      task: "Explain the CIA triad in cybersecurity.",
      solution: "The CIA triad stands for Confidentiality, Integrity, and Availability."
    },
    "cyber-networking-os": {
      id: "cyber-networking-os",
      task: "What is the purpose of DNS (Domain Name System)?",
      solution: "DNS translates domain names (like google.com) into IP addresses."
    },
    "cyber-security-tools": {
      id: "cyber-security-tools",
      task: "Explain the difference between Symmetric and Asymmetric encryption.",
      solution: "Symmetric encryption uses one key for both encryption and decryption, while asymmetric uses a public key for encryption and a private key for decryption."
    },
    "cyber-web-security": {
      id: "cyber-web-security",
      task: "What is SQL Injection (SQLi)?",
      solution: "SQL Injection is a vulnerability where an attacker can interfere with the queries that an application makes to its database."
    },
    "cyber-ethical-hacking": {
      id: "cyber-ethical-hacking",
      task: "What is the primary purpose of Nmap?",
      solution: "Nmap is used for network discovery and security auditing."
    },
    "cyber-crypto-system": {
      id: "cyber-crypto-system",
      task: "What does SSL/TLS stand for?",
      solution: "Secure Sockets Layer and Transport Layer Security."
    },
    "cyber-vapt": {
      id: "cyber-vapt",
      task: "What is Privilege Escalation?",
      solution: "Gaining higher-level access to a system (e.g., from a user account to an administrator account)."
    },
    "cyber-soc-malware": {
      id: "cyber-soc-malware",
      task: "What is the purpose of a SIEM tool like Splunk?",
      solution: "SIEM tools are used for collecting and analyzing security logs."
    },
    "cyber-forensics-grc": {
      id: "cyber-forensics-grc",
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
    "gitlab-foundations": {
      id: "gitlab-foundations",
      task: "What does CI/CD stand for?",
      solution: "Continuous Integration and Continuous Delivery / Deployment."
    },
    "gitlab-intro-first-pipeline": {
      id: "gitlab-intro-first-pipeline",
      task: "What is the name of the file used to define a GitLab CI/CD pipeline?",
      solution: ".gitlab-ci.yml"
    },
    "gitlab-runners-basics": {
      id: "gitlab-runners-basics",
      task: "What is the purpose of a GitLab Runner?",
      solution: "A GitLab Runner is an application that works with GitLab CI/CD to run jobs in a pipeline."
    },
    "gitlab-pipeline-structure": {
      id: "gitlab-pipeline-structure",
      task: "What are 'artifacts' in a GitLab CI/CD pipeline?",
      solution: "Artifacts are files generated by a job that can be used by subsequent jobs."
    },
    "gitlab-branch-testing-docker": {
      id: "gitlab-branch-testing-docker",
      task: "How do you run a job only on the 'main' branch in GitLab CI/CD?",
      solution: "By using the 'only' or 'rules' keyword in the .gitlab-ci.yml file."
    },
    "gitlab-environments-deploy": {
      id: "gitlab-environments-deploy",
      task: "What is the purpose of a 'staging' environment?",
      solution: "A staging environment is used to verify that an application is working correctly before deploying to production."
    },
    "gitlab-advanced-features": {
      id: "gitlab-advanced-features",
      task: "What is a 'parent-child' pipeline in GitLab CI/CD?",
      solution: "A parent-child pipeline is a pipeline that triggers another pipeline."
    },
    "gitlab-security-iac": {
      id: "gitlab-security-iac",
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
    "k8s-foundations": {
      id: "k8s-foundations",
      task: "What is the smallest deployable unit in Kubernetes?",
      solution: "A Pod."
    },
    "k8s-objects-basics": {
      id: "k8s-objects-basics",
      task: "What command is used to list all pods in the current namespace?",
      solution: "kubectl get pods"
    },
    "k8s-workloads-networking": {
      id: "k8s-workloads-networking",
      task: "Which service type exposes a service on each Node's IP at a static port?",
      solution: "NodePort"
    },
    "k8s-config-storage": {
      id: "k8s-config-storage",
      task: "What does PVC stand for in Kubernetes storage?",
      solution: "Persistent Volume Claim"
    },
    "k8s-scaling-helm-debug": {
      id: "k8s-scaling-helm-debug",
      task: "What is the command to view the logs of a pod named 'my-pod'?",
      solution: "kubectl logs my-pod"
    },
    "k8s-arch-security": {
      id: "k8s-arch-security",
      task: "What does RBAC stand for in Kubernetes security?",
      solution: "Role-Based Access Control"
    },
    "k8s-networking-cicd": {
      id: "k8s-networking-cicd",
      task: "What is a popular service mesh used with Kubernetes?",
      solution: "Istio"
    },
    "k8s-observability-optimization": {
      id: "k8s-observability-optimization",
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
  }
};
