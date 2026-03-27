# 15. Using Secrets Securely

## Managing Secrets

Secrets are encrypted environment variables.

1.  **Add Secret:** Settings > Secrets > Actions > New repository secret (e.g., `API_KEY`).
2.  **Use Secret:**
    ```yaml
    steps:
      - name: Use Secret
        env:
          MY_API_KEY: ${{ secrets.API_KEY }}
        run: echo "The key is $MY_API_KEY"
    ```

**Note:** GitHub Actions automatically masks secrets in logs. If you try to echo it, you will see `***`.

## Lab: Use API Key

1.  **Create Secret:** Create a secret named `SUPER_SECRET` with value `12345`.
2.  **Workflow:**
    ```yaml
    steps:
      - run: echo "My secret is ${{ secrets.SUPER_SECRET }}"
    ```
3.  **Run:** Check the logs. You should see `My secret is ***`.
