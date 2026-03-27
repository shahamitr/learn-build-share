# 28. Docker Swarm Introduction

## Orchestration

Managing 100 containers manually is impossible. You need an orchestrator.

### Swarm vs Kubernetes

*   **Swarm:** Built into Docker. Simple, easy to set up. Good for small clusters.
*   **Kubernetes (K8s):** The industry standard. Complex, powerful.

### Swarm Concepts

*   **Manager Node:** Controls the cluster.
*   **Worker Node:** Runs tasks.
*   **Service:** Defines desired state (e.g., "Run 3 replicas of Nginx").

![Swarm Cluster](https://placehold.co/600x400?text=Manager+Workers+Services)

## Lab: Init Swarm

Turn your single Docker host into a Swarm manager.

```bash
docker swarm init
```

Now create a service with 3 replicas.

```bash
docker service create --replicas 3 --name web -p 80:80 nginx
```
