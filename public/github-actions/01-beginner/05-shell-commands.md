# 05. Running Shell Commands

## The `run` Keyword

The `run` keyword executes a command in the runner's shell.

### Single Line

```yaml
- name: Install dependencies
  run: npm install
```

### Multi-Line

Use the pipe `|` character for multi-line scripts.

```yaml
- name: Build and Test
  run: |
    echo "Starting build..."
    npm install
    npm run build
    echo "Build complete."
```

### Shell Types

By default, `ubuntu-latest` uses `bash`. Windows runners use PowerShell. You can specify a shell:

```yaml
- name: Run PowerShell script
  shell: pwsh
  run: Get-Date
```

## Lab: Run Multiple Commands

1.  **Update Workflow:** Modify your workflow to run multiple commands.
    ```yaml
    steps:
      - name: Display System Info
        run: |
          echo "Node version:"
          node -v
          echo "NPM version:"
          npm -v
          echo "Current Directory:"
          pwd
    ```
2.  **Commit & Push:** Observe the output in the logs.
