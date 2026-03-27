# 08. Introduction to Dockerfile

## What is a Dockerfile?

A `Dockerfile` is a text document that contains all the commands a user could call on the command line to assemble an image. It automates image creation.

### Basic Instructions

*   `FROM`: The base image (e.g., `FROM node:18`).
*   `WORKDIR`: Set the working directory inside the container.
*   `COPY`: Copy files from host to container.
*   `RUN`: Execute commands during the build (e.g., `npm install`).
*   `CMD`: The command to run when the container starts.

![Dockerfile Structure](https://placehold.co/600x400?text=FROM+COPY+RUN+CMD)

## Lab: Create a Dockerfile

Create a file named `Dockerfile` with the following content:

```dockerfile
# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Run a command to say hello (simulating a build step)
RUN echo "Building..."

# Run python when the container launches
CMD ["python", "-c", "print('Hello from Dockerfile!')"]
```
