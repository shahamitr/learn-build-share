# 17. AI Hallucination Detection & Mitigation

## Trust but Verify

Hallucinations are the biggest risk in AI development. Learning to spot them and mitigate them is a senior engineering skill.

### Detection Techniques

1.  **Source Verification:** Check if the library/function exists in official docs.
2.  **Logic Check:** Does the code make sense? (e.g., importing a React hook in a Node.js script).
3.  **Cross-Checking:** Ask a different AI model or search engine to confirm.

### Mitigation Strategies

*   **Low Temperature:** Use lower temperature settings (if available) for more deterministic output.
*   **Grounding:** Provide reference documentation in the prompt context.

![Hallucination Detection](https://placehold.co/600x400?text=Verify+Check+Grounding)

## Lab: Detect the Fake API

### Step 1: The "Hallucinated" Code

Imagine AI generated this:

```javascript
import { fetchUser } from 'react-query'; // This is not how react-query works!

const user = fetchUser('/api/user');
```

### Step 2: Verify

*   Check `react-query` docs. Does `fetchUser` exist as a top-level export?
*   (Spoiler: No, it uses `useQuery` hook).

### Step 3: Correct the AI

Prompt:
> "This code uses `fetchUser` from `react-query`. I don't think that exists. Please rewrite it using the standard `useQuery` hook."
