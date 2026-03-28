# Scaling, Helm & Debugging

In this module, we'll explore how to scale applications, manage them with Helm, and troubleshoot issues in Kubernetes.

## Scaling & Updates
Kubernetes makes it easy to scale your applications and update them without downtime.
- **Manual Scaling:** Using `kubectl scale deployment my-app --replicas=5` to increase or decrease the number of replicas.
- **Horizontal Pod Autoscaler (HPA):** Automatically scales the number of Pods in a replication controller, deployment, replica set, or stateful set based on observed CPU utilization (or other metrics).
- **Vertical Pod Autoscaler (VPA):** Automatically sets the resource limits and requests for your containers, allowing them to scale up or down based on their actual usage.
- **Rolling Updates:** Kubernetes updates your application by replacing old Pods with new ones, one by one, ensuring zero downtime.
- **Rollbacks:** If an update fails, you can easily revert to a previous version using `kubectl rollout undo deployment my-app`.

## Helm (The Package Manager for Kubernetes)
Helm helps you manage Kubernetes applications — Helm Charts help you define, install, and upgrade even the most complex Kubernetes application.
- **Charts:** A collection of files that describe a related set of Kubernetes resources.
- **Templates:** YAML files with placeholders that are filled with values from a `values.yaml` file.
- **Releases:** A specific instance of a chart running in a cluster.
- **Helm Repositories:** Places where charts can be collected and shared (like Artifact Hub).
- **Common Commands:** `helm install`, `helm upgrade`, `helm list`, `helm rollback`, `helm uninstall`.

## Debugging & Troubleshooting
When things go wrong, Kubernetes provides several tools to help you find the root cause.
- **`kubectl get pods`:** Check the status of your pods (e.g., `Running`, `Pending`, `CrashLoopBackOff`).
- **`kubectl describe pod <pod-name>`:** View the events and detailed status of a pod. This is often the first step in debugging.
- **`kubectl logs <pod-name>`:** View the logs of the containers in a pod. Use `-f` for real-time logs.
- **`kubectl exec -it <pod-name> -- /bin/bash`:** Open an interactive shell inside a container to inspect the file system or run commands.
- **`kubectl get events`:** View the events in the current namespace to see what's happening in the cluster.
- **`kubectl top`:** View the resource usage (CPU/Memory) of nodes and pods.

## Practical Tip
When debugging, always start with **`kubectl describe`** to see the status and events of a resource. If the pod is in `CrashLoopBackOff`, check the **`kubectl logs`** to see why the application is crashing.
