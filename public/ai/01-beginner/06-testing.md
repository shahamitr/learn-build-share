# 06. AI for Test Case Generation

## Automating Test Creation

Writing comprehensive tests is time-consuming. AI can help by generating test cases, suggesting edge cases, and even writing the test code itself.

### Benefits of AI-Generated Tests

1.  **Speed:** Generate boilerplate test code instantly.
2.  **Coverage:** AI often thinks of edge cases you might miss (e.g., empty strings, null values, large numbers).
3.  **Consistency:** Ensure all tests follow the same structure.

### Limitations

*   **Logic Errors:** AI might write a test that passes but doesn't actually test the logic correctly.
*   **Mocking:** Complex mocking scenarios can confuse AI.

![Test Generation](https://placehold.co/600x400?text=Function+Edge+Cases+Tests)

## Lab: Generate Unit Tests

### Step 1: The Function to Test

Copy this function:

```javascript
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
```

### Step 2: Prompt for Tests

> "Write unit tests for this `isValidEmail` function using Jest. Include positive cases, negative cases, and edge cases."

### Step 3: Review the Output

Check the generated tests.
*   Did it test valid emails (`user@example.com`)?
*   Did it test invalid emails (`user@`, `@example.com`, `user space@example.com`)?
*   Did it test edge cases (`null`, `undefined`, empty string)?

### Step 4: Run (Mental Check)

Would these tests pass with the provided regex? (Hint: The regex is simple, so some complex valid emails might fail, or some invalid ones might pass. This is a good learning moment about regex limitations too!)
