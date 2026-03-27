# 09. AI for Refactoring Legacy Code

## Modernizing Codebases with AI

Refactoring legacy code is daunting. It's often poorly documented, lacks tests, and uses outdated patterns. AI can help break down large files, improve naming, and remove duplication.

### Strategies for Refactoring

1.  **Explain First:** Ask AI to explain what a complex function does before changing it.
2.  **Incremental Changes:** Refactor small chunks, not the whole file at once.
3.  **Generate Tests:** Before refactoring, ask AI to generate tests for the existing code to ensure behavior doesn't change.

![Refactoring Cycle](https://placehold.co/600x400?text=Explain+Test+Refactor)

## Lab: Refactor a Messy Function

### Step 1: The Legacy Code

Copy this messy JavaScript function:

```javascript
function doStuff(a, b, c) {
  if (a > 10) {
    if (b === 'foo') {
      return c * 2;
    } else {
      return c;
    }
  } else {
    return 0;
  }
}
```

### Step 2: Ask AI to Improve

Prompt:
> "Refactor this function to be more readable. Use early returns and meaningful variable names (assume `a` is `score`, `b` is `type`, `c` is `value`)."

### Step 3: Review the Result

Did the AI:
*   Rename variables correctly?
*   Flatten the nested `if` statements (guard clauses)?
*   Make the logic clearer?

### Step 4: Verify Behavior

Does the new code behave exactly the same as the old code for all inputs?
