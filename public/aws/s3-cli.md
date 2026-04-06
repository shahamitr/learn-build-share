# Managing S3 with CLI

The AWS CLI provides commands for managing Amazon S3 buckets and objects. This includes creating buckets, uploading files, and listing contents.

## Creating a Bucket
Use the `mb` (make bucket) command to create a new S3 bucket.

```bash
$ aws s3 mb s3://my-awesome-bucket
make_bucket: my-awesome-bucket
```
This creates a new bucket named `my-awesome-bucket`.

## Listing Buckets and Objects
Use the `ls` command to list your buckets or the contents of a specific bucket.

### Listing All Buckets
```bash
$ aws s3 ls
2026-03-27 10:00:00 my-awesome-bucket
```
This lists all your S3 buckets.

### Listing Objects in a Bucket
```bash
$ aws s3 ls s3://my-awesome-bucket
```
This lists the objects inside `my-awesome-bucket`.

## Uploading and Downloading Objects
Use the `cp` (copy) command to upload or download files.

### Uploading a File
```bash
$ aws s3 cp local-file.txt s3://my-awesome-bucket/
```
This uploads `local-file.txt` to `my-awesome-bucket`.

### Downloading a File
```bash
$ aws s3 cp s3://my-awesome-bucket/remote-file.txt local-file.txt
```
This downloads `remote-file.txt` from `my-awesome-bucket` to your local machine.