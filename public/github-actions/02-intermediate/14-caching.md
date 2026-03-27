# 14. Caching Dependencies

## Why Cache?

Downloading dependencies (e.g., `node_modules`) takes time. Caching speeds up workflows by reusing files from previous runs.

## Using `actions/cache`

```yaml
- name: Cache node modules
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

## Lab: Cache NPM Dependencies

1.  **Create Workflow:**
    ```yaml
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - name: Cache NPM
        uses: actions/cache@v3
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('package-lock.json') }}
      - run: npm ci
    ```
2.  **Run Twice:** Run it once (cache miss). Run it again (cache hit).
3.  **Compare:** Check the execution time of `npm ci`. It should be faster the second time.
