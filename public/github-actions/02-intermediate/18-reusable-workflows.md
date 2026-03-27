# 18. Reusable Workflows

## DRY (Don't Repeat Yourself)

You can define a workflow in one file and call it from another.

### Caller Workflow

```yaml
jobs:
  call-workflow:
    uses: ./.github/workflows/reusable.yml
    with:
      username: mona
```

### Reusable Workflow (`reusable.yml`)

```yaml
name: Reusable
on:
  workflow_call:
    inputs:
      username:
        required: true
        type: string

jobs:
  print-username:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Hello ${{ inputs.username }}"
```

## Lab: Create Reusable Workflow

1.  **Create `reusable.yml`:** Use the content above.
2.  **Create `main.yml`:** Call the reusable workflow.
3.  **Run:** Verify the parameter is passed correctly.
