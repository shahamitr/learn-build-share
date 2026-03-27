# 01. Introduction to Containers and Docker

## What are Containers?

Containers are lightweight, standalone, executable packages of software that include everything needed to run an application: code, runtime, system tools, system libraries, and settings.

### Containers vs Virtual Machines

*   **Virtual Machines (VMs):** Virtualize the hardware. Each VM has a full OS, making them heavy and slow to start.
*   **Containers:** Virtualize the OS. They share the host OS kernel, making them lightweight and fast.

![Containers vs VMs](https://placehold.co/600x400?text=Containers+vs+VMs)

## Why Docker?

Docker standardized containers, making it easy to build, ship, and run applications anywhere.

*   **Consistency:** "It works on my machine" becomes "It works everywhere."
*   **Isolation:** Apps don't conflict with each other.
*   **Speed:** Start in seconds, not minutes.

## Lab: Run Your First Container

Let's verify your setup by running the classic "Hello World" container.

### Step 1: Run the Command

Open your terminal and run:

```bash
docker run hello-world
```

### Step 2: What Happened?

1.  The Docker client contacted the Docker daemon.
2.  The daemon checked for the `hello-world` image locally.
3.  If missing, it pulled it from Docker Hub (the registry).
4.  It created a new container from that image.
5.  The container ran, printed a message, and exited.
