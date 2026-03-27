# 10. AI for System Design Brainstorming

## Architecting with an AI Partner

System design involves trade-offs. AI can help you explore different architectural patterns, database choices, and scalability strategies.

### Brainstorming Techniques

1.  **Ask for Options:** "What are 3 ways to build a real-time chat app?"
2.  **Compare Trade-offs:** "Compare SQL vs. NoSQL for an e-commerce product catalog."
3.  **Challenge Assumptions:** "Critique my proposed architecture for a video streaming service."

![System Design](https://placehold.co/600x400?text=Requirements+Options+Tradeoffs)

## Lab: Design a URL Shortener

### Step 1: Define Requirements

*   Functional: Shorten URL, redirect, analytics.
*   Non-functional: High availability, low latency, scalable.

### Step 2: Brainstorm with AI

Prompt:
> "I need to design a URL shortener like Bitly.
> 1.  What database should I use and why?
> 2.  How should I generate unique short keys (collision handling)?
> 3.  How do I handle high read traffic?"

### Step 3: Evaluate the Proposal

*   Did it suggest a Key-Value store (Redis/DynamoDB) or SQL? Why?
*   Did it mention Base62 encoding?
*   Did it suggest caching?

### Step 4: Refine

Ask follow-up questions:
> "What if we need to expire links after 30 days? How does that change the database choice?"
