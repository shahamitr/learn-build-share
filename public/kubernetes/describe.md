# Describing Kubernetes Resources

When debugging issues in Kubernetes, getting a high-level overview of a resource is often not enough. You need detailed information about its configuration, current state, and recent events. This is where the `kubectl describe` command comes in.

## The `kubectl describe` Command

The `kubectl describe` command provides a detailed, human-readable description of a specific Kubernetes object or a group of objects. It aggregates information from various sources, including the object's configuration, its current status, and related events.

### Describing a Pod

To get detailed information about a specific pod, use:

```bash
kubectl describe pod <pod-name>
```

This will output a wealth of information, including:
- **Name, Namespace, Node:** Basic identification and location.
- **Labels, Annotations:** Metadata attached to the pod.
- **Status:** The current phase of the pod (e.g., Running, Pending, Failed).
- **IPs:** The pod's IP address and the node's IP address.
- **Containers:** Details about each container in the pod, including image, ports, state, readiness/liveness probes, and resource requests/limits.
- **Conditions:** A list of conditions the pod has passed or failed (e.g., Initialized, Ready, PodScheduled).
- **Volumes:** Information about the volumes mounted in the pod.
- **Events:** A chronological list of recent events related to the pod. This is often the most crucial part for debugging, as it shows errors like "FailedScheduling", "ImagePullBackOff", or "CrashLoopBackOff".

### Describing Other Resources

You can describe almost any Kubernetes resource:

- **Nodes:** `kubectl describe node <node-name>` (useful for checking resource capacity and node-level issues).
- **Services:** `kubectl describe service <service-name>` (useful for checking endpoints and routing).
- **Deployments:** `kubectl describe deployment <deployment-name>` (useful for checking rollout status and replica counts).

## Interactive Lab

In the interactive lab, you will practice describing a pod named `my-pod` using `kubectl`.
