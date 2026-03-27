# 26. Release Automation

## Automated Releases

Create a GitHub Release whenever a tag is pushed.

```yaml
on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Create Release
        uses: softprops/action-gh-release@v1
```

## Lab: Create Release Pipeline

1.  **Workflow:** Use the snippet above.
2.  **Tag:** `git tag v1.0.0`
3.  **Push:** `git push origin v1.0.0`
4.  **Verify:** Check the "Releases" section of your repo. A new release should appear.
