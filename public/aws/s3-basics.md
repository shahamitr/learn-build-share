# Amazon S3 Basics

Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance.

## Key Features
- **Object Storage:** Store and retrieve any amount of data from anywhere on the web.
- **Buckets:** Data is stored in buckets, which are containers for objects.
- **Scalability:** Automatically scales to accommodate growing data volumes.
- **Durability:** Designed for 99.999999999% (11 9's) of durability.

## Storage Classes
- **S3 Standard:** General-purpose storage for frequently accessed data.
- **S3 Intelligent-Tiering:** Automatically moves data to the most cost-effective access tier based on access patterns.
- **S3 Standard-IA (Infrequent Access):** For data that is accessed less frequently but requires rapid access when needed.
- **S3 One Zone-IA:** For data that is accessed less frequently and does not require the multiple Availability Zone resilience of S3 Standard-IA.
- **S3 Glacier:** Secure, durable, and low-cost storage class for data archiving.