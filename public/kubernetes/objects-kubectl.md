# Key Objects & kubectl

In this module, we'll explore the core objects in Kubernetes and the command-line tool used to manage them.

## Key Objects
- **Pod:** The smallest and simplest Kubernetes object. A Pod represents a set of running containers on your cluster. Pods are ephemeral; they are created, live, and die.
- **Deployment:** A Deployment provides declarative updates for Pods and ReplicaSets. You describe a desired state in a Deployment, and the Deployment Controller changes the actual state to the desired state at a controlled rate.
- **Service:** An abstract way to expose an application running on a set of Pods as a network service. It provides a stable IP address and DNS name for a set of Pods.
- **Namespace:** A way to divide cluster resources between multiple users or projects. Namespaces are intended for use in environments with many users spread across multiple teams, or projects.
- **ReplicaSet:** A ReplicaSet's purpose is to maintain a stable set of replica Pods running at any given time. It is often used to guarantee the availability of a specified number of identical Pods.

## kubectl Basics
- **What is kubectl:** The command-line tool for interacting with the Kubernetes API server. It uses the Kubernetes API to interact with the cluster.
- **Common commands:**
    - `kubectl get`: List resources (e.g., `kubectl get pods`, `kubectl get nodes`, `kubectl get svc`).
    - `kubectl describe`: Show detailed information about a resource (e.g., `kubectl describe pod my-pod`).
    - `kubectl apply`: Create or update resources from a file (e.g., `kubectl apply -f deployment.yaml`).
    - `kubectl delete`: Remove resources (e.g., `kubectl delete pod my-pod`).
    - `kubectl logs`: Print the logs for a container in a pod (e.g., `kubectl logs my-pod`).
    - `kubectl exec`: Execute a command in a container (e.g., `kubectl exec -it my-pod -- /bin/bash`).
    - `kubectl port-forward`: Forward one or more local ports to a pod (e.g., `kubectl port-forward my-pod 8080:80`).

### 👉 Example:
```bash
# List all pods in the current namespace
kubectl get pods

# Create a deployment from a YAML file
kubectl apply -f deployment.yaml

# Check the status of the deployment
kubectl get deployments

# Get detailed info about a specific pod
kubectl describe pod <pod-name>
```

## Practical Tip
Use `kubectl get <resource> -o yaml` to see the full YAML definition of a running resource. This is very helpful for learning and debugging.
