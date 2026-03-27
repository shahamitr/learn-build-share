# 08. AI in Pull Request Reviews

## Enhancing Code Reviews with AI

Code reviews are critical for maintaining code quality, but they can be tedious. AI can act as a first pass reviewer, catching syntax errors, suggesting improvements, and ensuring consistency.

### How AI Can Help

1.  **Automated Comments:** Tools like CodeRabbit or PR-Agent can automatically comment on PRs.
2.  **Logic Checks:** AI can spot potential logic errors or edge cases humans might miss.
3.  **Style Enforcement:** Ensure code follows project guidelines.

### Limitations in Reviews

*   **Context:** AI might not understand the broader system architecture or business requirements.
*   **False Positives:** It might flag valid code as problematic.

![PR Review Workflow](https://placehold.co/600x400?text=PR+AI+Review+Human+Review)

## Lab: Simulate a PR Review

### Step 1: The "Bad" Code

Imagine a PR containing this Python function:

```python
def process_data(data):
    result = []
    for item in data:
        if item['status'] == 'active':
            result.append(item['value'] * 2)
    return result
```

### Step 2: Ask AI to Review

Prompt the AI:
> "Act as a Senior Python Developer. Review this code for potential issues, performance improvements, and edge cases."

### Step 3: Analyze the Feedback

Did the AI suggest:
*   Using list comprehensions for better readability/performance?
*   Handling cases where `data` is `None` or items are missing keys?
*   Adding type hints?

### Step 4: Compare with Human Review

What would *you* have caught? Did the AI miss anything (e.g., business logic)?
