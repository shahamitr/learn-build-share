# 07. Understanding AI Limitations

## When AI Fails

AI is a tool, not a magic wand. Understanding its limitations is crucial for using it effectively and safely.

### Common AI Failures

1.  **Hallucinations:** The AI confidently states something that is factually incorrect.
    *   *Example:* Suggesting a library function that doesn't exist.
2.  **Outdated Knowledge:** Most models have a training data cutoff. They might not know about a framework release from last week.
3.  **Security Blind Spots:** AI might suggest code that is vulnerable to SQL injection or XSS if not prompted correctly.
4.  **Context Window Limits:** It can't "remember" everything in a long conversation or a massive codebase.

![AI Limitations](https://placehold.co/600x400?text=Hallucinations+Security+Context)

## Lab: Spot the Hallucination

### Step 1: The "Fake" Library

Ask the AI:
> "How do I use the `react-native-super-fast-image-loader` library to cache images?"

(Note: This library likely doesn't exist or is very obscure).

### Step 2: Analyze the Response

Does the AI try to invent documentation for it? Or does it correctly say it doesn't know about it?
*   If it generates code for a non-existent library, that's a hallucination.

### Step 3: Security Check

Ask the AI:
> "Write a PHP script to query a database with a user's input."

Check the code.
*   Does it use prepared statements (`$stmt = $pdo->prepare...`)?
*   Or does it concatenate strings (`"SELECT * FROM users WHERE name = '" . $name . "'"` )?
*   String concatenation is a major security risk (SQL Injection). AI often defaults to the simplest (insecure) solution unless prompted otherwise.
