# 28. GitHub Templates

## Issue Templates

Guide users to provide specific information when opening issues.

## Pull Request Templates

Standardize PR descriptions with a checklist.

## Lab: Create Templates

1.  **Create Directory:** `.github/ISSUE_TEMPLATE/`
2.  **Create File:** `bug_report.md`
    ```markdown
    ---
    name: Bug report
    about: Create a report to help us improve
    title: ''
    labels: ''
    assignees: ''
    ---

    **Describe the bug**
    A clear and concise description of what the bug is.

    **To Reproduce**
    Steps to reproduce the behavior:
    1. Go to '...'
    2. Click on '...'
    3. Scroll down to '...'
    4. See error

    **Expected behavior**
    A clear and concise description of what you expected to happen.
    ```
3.  **Commit:** Push to `main`.
4.  **Test:** Go to **Issues** -> **New Issue**. You should see your template.
