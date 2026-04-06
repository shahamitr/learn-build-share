# Amazon EBS and EFS

Amazon Elastic Block Store (Amazon EBS) and Amazon Elastic File System (Amazon EFS) are two primary storage options for Amazon EC2 instances.

## Amazon EBS
Amazon EBS provides persistent block storage volumes for use with Amazon EC2 instances in the AWS Cloud.

### Key Features
- **Block Storage:** Provides block-level storage volumes for EC2 instances.
- **Persistence:** Data persists independently from the life of an instance.
- **Snapshots:** You can create point-in-time snapshots of EBS volumes, which are backed up to Amazon S3.
- **Encryption:** Supports encryption of data at rest and in transit.

## Amazon EFS
Amazon EFS provides simple, scalable, elastic file storage for use with AWS Cloud services and on-premises resources.

### Key Features
- **File Storage:** Provides a file system interface and file system access semantics (such as strong consistency and file locking).
- **Scalability:** Automatically scales up and down as you add and remove files.
- **Shared Access:** Can be accessed by multiple EC2 instances concurrently.
- **Availability:** Designed to be highly available and durable across multiple Availability Zones.