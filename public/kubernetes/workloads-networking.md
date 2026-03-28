# Workloads & Networking

In this module, we'll dive deeper into the different types of workloads and how networking works in Kubernetes.

## Workloads & Controllers
Kubernetes provides several workload resources that help you manage your applications.
- **Deployments:** The most common workload. Ideal for stateless applications. It manages ReplicaSets and provides rolling updates and rollbacks.
- **ReplicaSets:** Ensures that a specific number of pod replicas are running at any given time. Usually managed by a Deployment.
- **StatefulSets:** Used for stateful applications (like databases) that require stable network identifiers and persistent storage. Pods are created in a specific order and have unique, persistent names (e.g., `db-0`, `db-1`).
- **DaemonSets:** Ensures that all (or some) Nodes run a copy of a Pod. Useful for cluster-level background tasks like log collection (`fluentd`) or node monitoring (`prometheus-node-exporter`).
- **Jobs & CronJobs:**
    - **Job:** Creates one or more Pods and ensures that a specified number of them successfully terminate.
    - **CronJob:** Manages Jobs that run on a periodic schedule (like a crontab in Linux).

## Networking
Kubernetes networking is based on the principle that every Pod gets its own IP address.
- **Service Types:**
    - **ClusterIP (Default):** Exposes the Service on a cluster-internal IP. Choosing this value makes the Service only reachable from within the cluster.
    - **NodePort:** Exposes the Service on each Node's IP at a static port (the `NodePort`). You can contact the NodePort Service, from outside the cluster, by requesting `<NodeIP>:<NodePort>`.
    - **LoadBalancer:** Exposes the Service externally using a cloud provider's load balancer. NodePort and ClusterIP Services, to which the external load balancer routes, are automatically created.
    - **ExternalName:** Maps a Service to the contents of the `externalName` field (e.g. `foo.bar.example.com`), by returning a `CNAME` record with its value.
- **Ingress:** An API object that manages external access to the services in a cluster, typically HTTP. Ingress can provide load balancing, SSL termination, and name-based virtual hosting.
- **Service Discovery:** Kubernetes uses DNS for service discovery. For example, a pod can reach a service named `my-service` in the same namespace by just using the name `my-service`.

## Practical Tip
When exposing your application, always start with a **ClusterIP** for internal communication and use an **Ingress Controller** (like Nginx or Traefik) for external access. This is more flexible and cost-effective than using a `LoadBalancer` for every service.
