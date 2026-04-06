# Managing IAM with CLI

The AWS Command Line Interface (CLI) allows you to manage Identity and Access Management (IAM) resources directly from your terminal. This is essential for automating security tasks and managing users, groups, and roles.

## Listing IAM Users

To see a list of all IAM users in your AWS account, you can use the `list-users` command:

```bash
aws iam list-users
```

This command returns a JSON object containing an array of users, including their `UserName`, `UserId`, `Arn` (Amazon Resource Name), and `CreateDate`.

## Creating an IAM User

You can create a new IAM user with the `create-user` command:

```bash
aws iam create-user --user-name my-new-user
```

## Creating an Access Key

To allow a user to use the AWS CLI or API, they need an access key. You can create one for a specific user:

```bash
aws iam create-access-key --user-name my-new-user
```

**Important:** This command will output the `AccessKeyId` and `SecretAccessKey`. This is the *only* time you will be able to see the secret key, so make sure to save it securely.

## Attaching a Policy

To give a user permissions, you need to attach a policy to them. For example, to give a user read-only access to IAM:

```bash
aws iam attach-user-policy --user-name my-new-user --policy-arn arn:aws:iam::aws:policy/IAMReadOnlyAccess
```

## Interactive Lab

In the interactive lab, you will practice listing IAM users using the AWS CLI.
