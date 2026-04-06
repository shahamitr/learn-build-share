# Amazon SNS & SQS

Amazon Simple Notification Service (SNS) and Amazon Simple Queue Service (SQS) are fully managed messaging services that help you decouple and scale microservices, distributed systems, and serverless applications.

## Amazon SNS (Simple Notification Service)

Amazon SNS is a highly available, durable, secure, fully managed pub/sub messaging service that enables you to decouple microservices, distributed systems, and serverless applications.

*   **Pub/Sub Model:** Publishers send messages to topics, and subscribers receive messages from topics.
*   **Push-based:** SNS pushes messages to subscribers.
*   **Subscribers:** Can be SQS queues, AWS Lambda functions, HTTP/S endpoints, email addresses, or SMS numbers.
*   **Use Cases:** Fanout (sending one message to multiple systems), application alerts, mobile push notifications.

## Amazon SQS (Simple Queue Service)

Amazon SQS is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.

*   **Queue Model:** Producers send messages to a queue, and consumers poll the queue to retrieve messages.
*   **Pull-based:** Consumers must actively request (poll) messages from the queue.
*   **Types of Queues:**
    *   **Standard Queues:** Maximum throughput, best-effort ordering, at-least-once delivery.
    *   **FIFO (First-In-First-Out) Queues:** Messages are processed exactly once, in the exact order that they are sent.
*   **Use Cases:** Decoupling application components, buffering requests to handle traffic spikes, asynchronous processing.

## SNS + SQS Fanout Pattern

A common architectural pattern is to use SNS and SQS together in a "fanout" pattern.

1.  A publisher sends a message to an SNS topic.
2.  Multiple SQS queues are subscribed to that SNS topic.
3.  SNS pushes a copy of the message to each subscribed SQS queue.
4.  Independent consumer applications poll their respective SQS queues and process the messages asynchronously.

This allows you to add new consumers without modifying the publisher.
