# Architecture & Security

In this module, we'll explore the more advanced features of Kubernetes architecture and security.

## Advanced Architecture
A deeper look at how the Kubernetes Control Plane works.
- **kube-apiserver:** The only component that talks to the `etcd` store. All other components must go through the API server.
- **etcd:** A distributed, reliable key-value store for the most critical data of a distributed system. It stores the entire state of the cluster.
- **kube-scheduler:** Uses a two-step process to select a node for a Pod: **Filtering** (finding nodes that meet the Pod's requirements) and **Scoring** (ranking the remaining nodes to find the best fit).
- **kube-controller-manager:** A daemon that embeds the core control loops (e.g., Node Controller, Job Controller, Deployment Controller).

## Security (The 4C's of Cloud Native Security)
Security in Kubernetes is often described in layers: **Cloud**, **Cluster**, **Container**, and **Code**.
- **RBAC (Role-Based Access Control):**
    - **Role / ClusterRole:** Defines a set of permissions (verbs like `get`, `list`, `create` on resources like `pods`, `services`).
    - **RoleBinding / ClusterRoleBinding:** Grants the permissions defined in a role to a user, group, or service account.
- **Network Policies:** Acts like a firewall for Pods. By default, Pods are non-isolated; they accept traffic from any source. Network Policies allow you to specify which Pods can talk to each other.
- **Pod Security Admission:** Replaces the deprecated Pod Security Policies. It provides three levels of security: **Privileged** (unrestricted), **Baseline** (prevents known privilege escalations), and **Restricted** (highly restricted).
- **Secrets Management:**
    - **Encryption at Rest:** Ensuring that secrets are encrypted when stored in `etcd`.
    - **External Secret Managers:** Integrating with tools like HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault.
- **Admission Controllers:** Plugins that intercept requests to the Kubernetes API server prior to persistence of the object (e.g., `ImagePolicyWebhook`, `ResourceQuota`).

## Practical Tip
When using **RBAC**, always follow the **principle of least privilege**. Use **Namespaced Roles** whenever possible instead of `ClusterRoles` to limit the blast radius of a compromised service account.
