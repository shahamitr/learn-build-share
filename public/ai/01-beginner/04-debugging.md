# 04. AI for Debugging

## Debugging with an AI Partner

Debugging is often about narrowing down the search space. AI can act as a "rubber duck" that talks back, suggesting potential causes you might have missed.

### How to Debug with AI

1.  **Provide the Error:** Paste the exact error message and stack trace.
2.  **Provide the Code:** Paste the relevant code snippet (and the function calling it).
3.  **Provide Context:** Explain what you were trying to do when it crashed.

### The "Diagnostic Questions" Technique

Instead of asking for the fix immediately, ask the AI to help you diagnose:
> "What are the top 3 reasons this error might occur in a React application?"

This helps you learn *why* it broke, rather than just patching it.

![Debugging Workflow](https://placehold.co/600x400?text=Error+Context+Solution)

## Lab: Fix the Broken Code

### Step 1: The Buggy Code

Copy this broken JavaScript code:

```javascript
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

console.log(calculateAverage([10, 20, 30]));
```

### Step 2: Run it (Mental or Console)

If you run this, you'll get `NaN`.

### Step 3: Ask AI to Fix

Prompt the AI:
> "I am getting NaN when I run this function. Can you find the bug and explain why it is happening?"

### Step 4: Understand the Fix

The AI should identify the off-by-one error in the loop condition (`i <= numbers.length` should be `i < numbers.length`).
