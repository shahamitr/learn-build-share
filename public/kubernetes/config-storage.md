# Config & Storage

In this module, we'll explore how to manage application configuration and persistent data in Kubernetes.

## Configuration Management
Kubernetes provides objects to separate configuration from your container images, making your applications more portable.
- **ConfigMaps:** Used to store non-confidential data in key-value pairs. You can use them as environment variables, command-line arguments, or as configuration files in a volume.
- **Secrets:** Similar to ConfigMaps but specifically for sensitive data like passwords, OAuth tokens, and SSH keys. Secrets are stored in `base64` encoded format (not encrypted by default at rest, but can be configured to be).
- **Environment Variables:** You can inject values from ConfigMaps and Secrets into your container's environment variables.

## Storage
By default, data in a container is ephemeral. If the container crashes or is deleted, the data is lost. Kubernetes Volumes solve this problem.
- **Volumes:** A directory accessible to the containers in a Pod. The lifetime of a volume is the same as the Pod.
- **PersistentVolumes (PV):** A piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes. It is a resource in the cluster just like a node is a cluster resource.
- **PersistentVolumeClaims (PVC):** A request for storage by a user. It is similar to a Pod. Pods consume node resources and PVCs consume PV resources.
- **StorageClasses:** Allows administrators to describe the "classes" of storage they offer. Different classes might map to quality-of-service levels, or to backup policies.
- **Dynamic Provisioning:** When a PVC is created, Kubernetes can automatically provision a PV based on a StorageClass.

## Practical Tip
When using **Secrets**, remember that they are only **base64 encoded**, not encrypted. For production environments, consider using a more secure solution like **HashiCorp Vault** or cloud-native secret managers (AWS Secrets Manager, Azure Key Vault, GCP Secret Manager) integrated with Kubernetes.
