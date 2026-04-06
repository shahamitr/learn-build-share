# AWS IAM Basics

AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely. Using IAM, you can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources.

## Key Concepts

*   **Users:** End users (people, employees of an organization, etc.).
*   **Groups:** A collection of users. Each user in the group will inherit the permissions of the group.
*   **Roles:** You can create roles and can then assign them to AWS resources.
*   **Policies:** Policies are made up of documents, formatted in JSON, and they give permissions as to what a user/group/role is able to do.

## Best Practices

*   **Least Privilege:** Always give users the minimum amount of access required.
*   **MFA (Multi-Factor Authentication):** Enable MFA for all users.
*   **Use Roles:** Use roles for applications that run on Amazon EC2 instances.
