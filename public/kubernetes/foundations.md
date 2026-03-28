# Foundations & Architecture

Start by understanding containers and why Kubernetes exists.

## Core Concepts
- **What is Kubernetes (K8s):** An open-source platform for automating deployment, scaling, and management of containerized applications. Originally developed by Google.
- **Why Kubernetes is used:**
    - **Container Orchestration:** Automating the deployment and management of containers across a cluster of machines.
    - **Self-healing:** Automatically restarts failed containers, replaces and reschedules containers when nodes die.
    - **Horizontal Scaling:** Scaling applications up or down with a simple command or based on CPU usage.
    - **Service Discovery & Load Balancing:** K8s can expose a container using a DNS name or their own IP address.
    - **Automated Rollouts & Rollbacks:** You can describe the desired state for your deployed containers, and K8s can change the actual state to the desired state at a controlled rate.

## Prerequisites (Very Important)
- **Containers & Docker Basics:**
    - **Images vs Containers:** An image is a read-only template; a container is a runnable instance of an image.
    - **Dockerfile:** A text document that contains all the commands a user could call on the command line to assemble an image.
- **Basic Linux Commands:** `ls`, `cd`, `cat`, `grep`, `top`, `ps`, `chmod`.
- **Networking Basics:** IP addresses, ports, DNS, load balancers.

## Kubernetes Architecture (High-level)
A Kubernetes cluster consists of a set of worker machines, called **nodes**, that run containerized applications. Every cluster has at least one worker node.

### Control Plane Components
The Control Plane's components make global decisions about the cluster (for example, scheduling), as well as detecting and responding to cluster events.
- **kube-apiserver:** The front end for the Kubernetes control plane. It exposes the Kubernetes API.
- **etcd:** Consistent and highly-available key-value store used as Kubernetes' backing store for all cluster data.
- **kube-scheduler:** Watches for newly created Pods with no assigned node, and selects a node for them to run on.
- **kube-controller-manager:** Runs controller processes (e.g., Node Controller, Job Controller, EndpointSlice Controller).
- **cloud-controller-manager:** Links your cluster into your cloud provider's API.

### Node Components
Node components run on every node, maintaining running pods and providing the Kubernetes runtime environment.
- **kubelet:** An agent that runs on each node in the cluster. It makes sure that containers are running in a Pod.
- **kube-proxy:** A network proxy that runs on each node in your cluster, implementing part of the Kubernetes Service concept.
- **Container Runtime:** The software that is responsible for running containers (e.g., Docker, containerd, CRI-O).

## Key Objects (Intro)
- **Pod:** The smallest and simplest Kubernetes object. A Pod represents a set of running containers on your cluster.
- **Namespace:** Provides a mechanism for isolating groups of resources within a single cluster.
