# 01. Introduction to CI/CD

## What is CI/CD?

CI/CD stands for **Continuous Integration** and **Continuous Delivery/Deployment**. It is a method to frequently deliver apps to customers by introducing automation into the stages of app development.

### Continuous Integration (CI)

CI is a coding philosophy and set of practices that drive development teams to implement small changes and check in code to version control repositories frequently.

*   **Goal:** Establish a consistent and automated way to build, package, and test applications.
*   **Key Practice:** Developers merge their changes back to the main branch as often as possible.

### Continuous Delivery (CD)

Continuous Delivery picks up where Continuous Integration ends. CD automates the delivery of applications to selected infrastructure environments.

*   **Goal:** Ensure that you can release new changes to your customers quickly in a sustainable way.

### Continuous Deployment (CD)

Continuous Deployment goes one step further than Continuous Delivery. Every change that passes all stages of your production pipeline is released to your customers. There is no human intervention, and only a failed test will prevent a new change to be deployed to production.

## Why Automation Matters

*   **Speed:** Automated tests and builds are faster than manual ones.
*   **Reliability:** Automation reduces human error.
*   **Consistency:** Every build runs in the exact same environment.

## Lab: Manual vs Automated Workflow

1.  **Manual:** Imagine manually running `npm install`, `npm test`, and then FTPing files to a server every time you change a line of code.
2.  **Automated:** Imagine pushing code to GitHub, and having a system automatically run tests and deploy if they pass.
