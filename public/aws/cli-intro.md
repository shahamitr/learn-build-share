# Introduction to AWS CLI

The AWS Command Line Interface (CLI) is a unified tool to manage your AWS services. With just one tool to download and configure, you can control multiple AWS services from the command line and automate them through scripts.

## Installation and Configuration
Before you can use the AWS CLI, you need to install it and configure it with your AWS credentials.

### Checking the Version
```bash
$ aws --version
aws-cli/2.15.0 Python/3.11.6 Linux/5.15.0-101-generic exe/x86_64.ubuntu.22 prompt/off
```

### Configuring the CLI
Use the `aws configure` command to set up your credentials. You will need your AWS Access Key ID, Secret Access Key, default region name, and default output format.

```bash
$ aws configure
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Default region name [None]: us-east-1
Default output format [None]: json
```

Once configured, you can start running commands against your AWS environment.