export const awsCurriculum = [
  {
    id: 'aws-cloud-concepts',
    title: 'Cloud Concepts',
    description: 'Understand the fundamental concepts of cloud computing and AWS.',
    modules: [
      {
        id: 'aws-what-is-cloud',
        title: 'What is Cloud Computing?',
        description: 'Introduction to cloud computing models (IaaS, PaaS, SaaS) and deployment models.',
        duration: '20 mins',
        type: 'video',
        path: '/aws/what-is-cloud.md',
        icon: 'Cloud',
        color: 'amber',
        bgColor: 'amber'
      },
      {
        id: 'aws-global-infrastructure',
        title: 'AWS Global Infrastructure',
        description: 'Regions, Availability Zones, and Edge Locations.',
        duration: '25 mins',
        type: 'reading',
        path: '/aws/global-infrastructure.md',
        icon: 'Globe',
        color: 'amber',
        bgColor: 'amber'
      },
      {
        id: 'aws-cli-intro',
        title: 'Introduction to AWS CLI',
        description: 'Learn how to interact with AWS using the command line interface.',
        duration: '30 mins',
        type: 'interactive',
        path: '/aws/cli-intro.md',
        icon: 'Terminal',
        color: 'amber',
        bgColor: 'amber'
      }
    ]
  },
  {
    id: 'aws-compute',
    title: 'Compute Services',
    description: 'Learn about the core compute services offered by AWS.',
    modules: [
      {
        id: 'aws-ec2-basics',
        title: 'Amazon EC2 Basics',
        description: 'Virtual servers in the cloud. Instance types and pricing models.',
        duration: '30 mins',
        type: 'video',
        path: '/aws/ec2-basics.md',
        icon: 'Server',
        color: 'amber',
        bgColor: 'amber'
      },
      {
        id: 'aws-ec2-cli',
        title: 'Managing EC2 with CLI',
        description: 'Use the AWS CLI to describe and manage EC2 instances.',
        duration: '25 mins',
        type: 'interactive',
        path: '/aws/ec2-cli.md',
        icon: 'Terminal',
        color: 'amber',
        bgColor: 'amber'
      },
      {
        id: 'aws-lambda-basics',
        title: 'AWS Lambda',
        description: 'Serverless compute. Run code without provisioning or managing servers.',
        duration: '20 mins',
        type: 'reading',
        path: '/aws/lambda-basics.md',
        icon: 'Zap',
        color: 'amber',
        bgColor: 'amber'
      }
    ]
  },
  {
    id: 'aws-storage',
    title: 'Storage Services',
    description: 'Explore the different storage options available in AWS.',
    modules: [
      {
        id: 'aws-s3-basics',
        title: 'Amazon S3 Basics',
        description: 'Object storage built to store and retrieve any amount of data.',
        duration: '25 mins',
        type: 'video',
        path: '/aws/s3-basics.md',
        icon: 'Database',
        color: 'amber',
        bgColor: 'amber'
      },
      {
        id: 'aws-s3-cli',
        title: 'Managing S3 with CLI',
        description: 'Use the AWS CLI to create buckets and upload objects.',
        duration: '30 mins',
        type: 'interactive',
        path: '/aws/s3-cli.md',
        icon: 'Terminal',
        color: 'amber',
        bgColor: 'amber'
      },
      {
        id: 'aws-ebs-efs',
        title: 'Amazon EBS and EFS',
        description: 'Block storage and file storage solutions for EC2.',
        duration: '20 mins',
        type: 'reading',
        path: '/aws/ebs-efs.md',
        icon: 'HardDrive',
        color: 'amber',
        bgColor: 'amber'
      }
    ]
  },
  {
    id: 'aws-security-network',
    title: 'Security & Networking',
    description: 'Learn about AWS security and networking services.',
    modules: [
      {
        id: 'aws-iam-basics',
        title: 'AWS IAM Basics',
        description: 'Identity and Access Management. Securely manage access to AWS services and resources.',
        duration: '30 mins',
        type: 'video',
        path: '/aws/iam-basics.md',
        icon: 'Shield',
        color: 'amber',
        bgColor: 'amber'
      },
      {
        id: 'aws-iam-cli',
        title: 'Managing IAM with CLI',
        description: 'Use the AWS CLI to list users and manage IAM resources.',
        duration: '25 mins',
        type: 'interactive',
        path: '/aws/iam-cli.md',
        icon: 'Terminal',
        color: 'amber',
        bgColor: 'amber'
      },
      {
        id: 'aws-vpc-basics',
        title: 'Amazon VPC Basics',
        description: 'Virtual Private Cloud. Provision a logically isolated section of the AWS Cloud.',
        duration: '35 mins',
        type: 'reading',
        path: '/aws/vpc-basics.md',
        icon: 'Network',
        color: 'amber',
        bgColor: 'amber'
      }
    ]
  },
  {
    id: 'aws-databases',
    title: 'Databases',
    description: 'Learn about AWS database services.',
    modules: [
      {
        id: 'aws-rds-basics',
        title: 'Amazon RDS Basics',
        description: 'Relational Database Service. Set up, operate, and scale a relational database in the cloud.',
        duration: '25 mins',
        type: 'video',
        path: '/aws/rds-basics.md',
        icon: 'Database',
        color: 'amber',
        bgColor: 'amber'
      },
      {
        id: 'aws-dynamodb-basics',
        title: 'Amazon DynamoDB Basics',
        description: 'Fast and flexible NoSQL database service for any scale.',
        duration: '25 mins',
        type: 'reading',
        path: '/aws/dynamodb-basics.md',
        icon: 'Database',
        color: 'amber',
        bgColor: 'amber'
      }
    ]
  },
  {
    id: 'aws-messaging-monitoring',
    title: 'Messaging & Monitoring',
    description: 'Learn about AWS messaging and monitoring services.',
    modules: [
      {
        id: 'aws-sns-sqs',
        title: 'Amazon SNS & SQS',
        description: 'Simple Notification Service and Simple Queue Service for decoupled applications.',
        duration: '30 mins',
        type: 'reading',
        path: '/aws/sns-sqs.md',
        icon: 'MessageSquare',
        color: 'amber',
        bgColor: 'amber'
      },
      {
        id: 'aws-cloudwatch',
        title: 'Amazon CloudWatch',
        description: 'Monitor resources and applications in AWS.',
        duration: '25 mins',
        type: 'interactive',
        path: '/aws/cloudwatch.md',
        icon: 'Activity',
        color: 'amber',
        bgColor: 'amber'
      }
    ]
  }
];
