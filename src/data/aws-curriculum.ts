export const awsCurriculum = [
  {
    id: 'beginner',
    title: 'Beginner Level — AWS Foundations',
    description: 'Start here to build your base understanding of AWS.',
    estimatedDuration: '2 hours',
    modules: [
      { id: 'aws-what-is-cloud', title: '01. Cloud Concepts', duration: '20 min', type: 'theory', path: '/aws/what-is-cloud.md' },
      { id: 'aws-global-infrastructure', title: '02. Global Infrastructure', duration: '25 min', type: 'theory', path: '/aws/global-infrastructure.md' },
      { id: 'aws-cli-intro', title: '03. AWS CLI Basics', duration: '30 min', type: 'lab', path: '/aws/cli-intro.md' },
      { id: 'aws-iam-basics', title: '04. IAM Basics', duration: '30 min', type: 'theory', path: '/aws/iam-basics.md' },
      { id: 'aws-beginner-challenge', title: '05. AWS Beginner Challenge', duration: '15 min', type: 'lab', path: '/aws/beginner-challenge.md' }
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediate Level — Core Services',
    description: 'Master core compute, storage, and networking services.',
    estimatedDuration: '3 hours 30 mins',
    modules: [
      { id: 'aws-ec2-basics', title: '06. EC2 Basics', duration: '30 min', type: 'lab', path: '/aws/ec2-basics.md' },
      { id: 'aws-lambda-basics', title: '07. Lambda Basics', duration: '20 min', type: 'theory', path: '/aws/lambda-basics.md' },
      { id: 'aws-s3-basics', title: '08. S3 Basics', duration: '25 min', type: 'lab', path: '/aws/s3-basics.md' },
      { id: 'aws-vpc-basics', title: '09. VPC Basics', duration: '35 min', type: 'theory', path: '/aws/vpc-basics.md' },
      { id: 'aws-rds-basics', title: '10. RDS Basics', duration: '25 min', type: 'lab', path: '/aws/rds-basics.md' },
      { id: 'aws-intermediate-challenge', title: '11. AWS Intermediate Challenge', duration: '45 min', type: 'lab', path: '/aws/intermediate-challenge.md' }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Level — Architecture & Scalability',
    description: 'Learn advanced architectural patterns and professional skills.',
    estimatedDuration: '4 hours',
    modules: [
      { id: 'aws-route53', title: '12. Route 53', duration: '25 min', type: 'theory', path: '/aws/route53.md' },
      { id: 'aws-cloudfront', title: '13. CloudFront', duration: '30 min', type: 'theory', path: '/aws/cloudfront.md' },
      { id: 'aws-dynamodb-basics', title: '14. DynamoDB Basics', duration: '25 min', type: 'theory', path: '/aws/dynamodb-basics.md' },
      { id: 'aws-sns-sqs', title: '15. SNS & SQS', duration: '30 min', type: 'theory', path: '/aws/sns-sqs.md' },
      { id: 'aws-cloudwatch', title: '16. CloudWatch', duration: '25 min', type: 'lab', path: '/aws/cloudwatch.md' },
      { id: 'aws-advanced-capstone', title: '17. AWS Capstone Project', duration: '105 min', type: 'lab', path: '/aws/advanced-challenge.md' }
    ]
  }
];
