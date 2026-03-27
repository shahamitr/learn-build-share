# 13. AI-Assisted Test Automation

## Scaling Testing with AI

Beyond unit tests, AI can help with integration tests, end-to-end (E2E) tests, and improving test coverage. It can generate mocks for external services and suggest scenarios you missed.

### Strategies

1.  **Integration Tests:** Ask AI to write tests that verify how components interact (e.g., API + Database).
2.  **Mock Generation:** Generate mock data or mock service responses for testing.
3.  **Coverage Analysis:** Paste a file and ask: "What parts of this code are not covered by tests?"

![Test Automation](https://placehold.co/600x400?text=Integration+Mocks+Coverage)

## Lab: Improve Test Coverage

### Step 1: The Code

Copy a function that has multiple branches (e.g., `if/else` logic).

```javascript
function calculateDiscount(price, type) {
  if (type === 'VIP') return price * 0.8;
  if (type === 'Member') return price * 0.9;
  if (price > 100) return price * 0.95;
  return price;
}
```

### Step 2: Ask for Coverage

Prompt:
> "I have this function. Write a test suite using Jest that achieves 100% branch coverage."

### Step 3: Analyze the Tests

Did it cover:
*   VIP user?
*   Member user?
*   Regular user with price > 100?
*   Regular user with price <= 100?

### Step 4: Edge Cases

Ask:
> "What about negative prices or invalid types?"
