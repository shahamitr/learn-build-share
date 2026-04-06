# Amazon DynamoDB Basics

Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale. It's a fully managed, multiregion, multimaster, durable database with built-in security, backup and restore, and in-memory caching for internet-scale applications.

## Key Concepts

*   **Tables:** Similar to other database systems, DynamoDB stores data in tables.
*   **Items:** Each table contains zero or more items. An item is a group of attributes that is uniquely identifiable among all of the other items.
*   **Attributes:** Each item is composed of one or more attributes. An attribute is a fundamental data element, something that does not need to be broken down any further.

## Primary Keys

*   **Partition Key:** A simple primary key, composed of one attribute known as the partition key.
*   **Partition Key and Sort Key:** Referred to as a composite primary key, this type of key is composed of two attributes.

## Benefits

*   **Performance at Scale:** Consistent, single-digit millisecond response times at any scale.
*   **Serverless:** No servers to provision, patch, or manage.
*   **Highly Available:** Data is synchronously replicated across multiple Availability Zones.
