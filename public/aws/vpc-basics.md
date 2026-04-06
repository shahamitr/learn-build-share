# Amazon VPC Basics

Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.

## Key Components

*   **Subnets:** A range of IP addresses in your VPC.
    *   **Public Subnet:** Has a route to the internet gateway.
    *   **Private Subnet:** Does not have a route to the internet gateway.
*   **Route Tables:** A set of rules, called routes, that are used to determine where network traffic is directed.
*   **Internet Gateway:** A horizontally scaled, redundant, and highly available VPC component that allows communication between instances in your VPC and the internet.
*   **NAT Gateway:** Enables instances in a private subnet to connect to the internet or other AWS services, but prevent the internet from initiating a connection with those instances.

## Security

*   **Security Groups:** Acts as a virtual firewall for your instance to control inbound and outbound traffic. Operates at the instance level.
*   **Network ACLs (Access Control Lists):** An optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets. Operates at the subnet level.
