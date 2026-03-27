# 02. Installing Docker

## Installation Overview

Docker is available on all major platforms.

### Windows & Mac

*   **Docker Desktop:** The easiest way to get started. It includes the Docker Engine, CLI client, Docker Compose, and a GUI dashboard.
*   **Requirement:** WSL 2 (Windows Subsystem for Linux) is recommended for Windows.

### Linux

*   **Docker Engine:** Installed directly on the host OS.
*   **Server-side:** Preferred for production environments.

![Docker Desktop](https://placehold.co/600x400?text=Docker+Desktop+Installation)

## Verifying Installation

Check the versions to ensure everything is set up.

```bash
docker --version
docker compose version
```

## Lab: Run Nginx Container

Nginx is a popular web server. Let's run it in the background.

### Step 1: Run Nginx

```bash
docker run -d -p 8080:80 nginx
```

*   `-d`: Detached mode (run in background).
*   `-p 8080:80`: Map port 8080 on your host to port 80 in the container.

### Step 2: Verify

Open your browser and go to `http://localhost:8080`. You should see the "Welcome to nginx!" page.
