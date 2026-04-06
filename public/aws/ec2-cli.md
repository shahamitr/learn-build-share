# Managing EC2 with CLI

You can use the AWS CLI to manage your Amazon EC2 instances. This includes describing, starting, stopping, and terminating instances.

## Describing Instances
To list your EC2 instances and their details, use the `describe-instances` command.

```bash
$ aws ec2 describe-instances
```
This returns a JSON object containing information about your instances, such as their IDs, states, and IP addresses.

## Starting and Stopping Instances
You can start and stop instances using their IDs.

### Starting an Instance
```bash
$ aws ec2 start-instances --instance-ids i-1234567890abcdef0
```
This starts the specified instance.

### Stopping an Instance
```bash
$ aws ec2 stop-instances --instance-ids i-1234567890abcdef0
```
This stops the specified instance.

## Terminating Instances
To permanently delete an instance, use the `terminate-instances` command.

```bash
$ aws ec2 terminate-instances --instance-ids i-1234567890abcdef0
```
This terminates the specified instance. Be careful, as this action cannot be undone.