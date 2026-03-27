# 14. AI for Code Optimization

## Performance Tuning with AI

AI can identify performance bottlenecks, suggest algorithmic improvements, and optimize memory usage. It's like having a performance engineer on your shoulder.

### Optimization Techniques

1.  **Algorithmic Complexity:** Ask AI to analyze the Big O complexity of your code.
2.  **Memory Leaks:** Spot potential memory leaks in closures or event listeners.
3.  **Database Queries:** Optimize SQL queries or suggest indexes.

### Caveats

*   **Premature Optimization:** Don't optimize everything. Focus on hotspots.
*   **Readability:** Sometimes optimized code is harder to read. Balance is key.

![Code Optimization](https://placehold.co/600x400?text=Performance+Memory+Complexity)

## Lab: Optimize a Slow Function

### Step 1: The Slow Code

Copy this inefficient function (O(n^2)):

```javascript
function findDuplicates(arr) {
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }
  return duplicates;
}
```

### Step 2: Ask AI to Optimize

Prompt:
> "Optimize this function to be more performant. It currently uses nested loops. Can we do it in O(n)?"

### Step 3: Review the Solution

Did it suggest using a `Set` or a Hash Map (Object)?
*   `Set` lookups are O(1), making the whole operation O(n).

### Step 4: Benchmark (Mental)

Why is the new solution faster for large arrays?
