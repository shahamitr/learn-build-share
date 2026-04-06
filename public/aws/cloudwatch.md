# Amazon CloudWatch

Amazon CloudWatch is a monitoring and observability service built for DevOps engineers, developers, site reliability engineers (SREs), and IT managers.

CloudWatch provides you with data and actionable insights to monitor your applications, respond to system-wide performance changes, optimize resource utilization, and get a unified view of operational health.

## Key Features

### 1. CloudWatch Metrics

CloudWatch collects and tracks metrics, which are variables you can measure for your resources and applications.

*   **Built-in Metrics:** AWS services automatically send metrics to CloudWatch (e.g., EC2 CPU utilization, S3 bucket size, DynamoDB read capacity).
*   **Custom Metrics:** You can publish your own custom metrics to CloudWatch using the AWS CLI or SDKs.
*   **Dashboards:** Create customized views of the metrics and alarms for your AWS resources.

### 2. CloudWatch Logs

CloudWatch Logs enables you to centralize the logs from all of your systems, applications, and AWS services that you use, in a single, highly scalable service.

*   **Log Groups and Log Streams:** Organize logs logically.
*   **Metric Filters:** Extract metric observations from ingested events and transform them into data points in a CloudWatch metric.
*   **Log Insights:** Interactively search and analyze your log data.

### 3. CloudWatch Alarms

You can create an alarm to watch a single CloudWatch metric or the result of a math expression based on CloudWatch metrics.

*   **Thresholds:** The alarm performs one or more actions based on the value of the metric or expression relative to a threshold over a number of time periods.
*   **Actions:** Actions can be sending a notification to an Amazon SNS topic, performing an Amazon EC2 action (like stopping or terminating an instance), or executing an Auto Scaling policy.

### 4. CloudWatch Events (EventBridge)

CloudWatch Events delivers a near real-time stream of system events that describe changes in AWS resources.

*   **Rules:** You can set up rules to route events to one or more target functions or streams.
*   **Targets:** Targets can include AWS Lambda functions, Amazon SNS topics, Amazon SQS queues, and more.
*   *Note: CloudWatch Events is now part of Amazon EventBridge.*

## Try it out!

In the interactive lab, try using the AWS CLI to view CloudWatch metrics.
