# 02. Writing Effective Prompts for Developers

## The Art of Prompt Engineering

The quality of the output you get from AI is directly proportional to the quality of your input (prompt). "Garbage in, garbage out" applies perfectly here.

### Key Elements of a Good Prompt

1.  **Context:** Who are you? What is the project? What technologies are you using?
2.  **Task:** What exactly do you want the AI to do?
3.  **Constraints:** What should it *avoid*? What style should it use?
4.  **Output Format:** Do you want code only? A Markdown table? A JSON object?

### Role Prompting

Assigning a role to the AI helps set the tone and depth of the response.

*   *Bad:* "Fix this code."
*   *Good:* "Act as a Senior React Developer. Review this component for performance issues and suggest optimizations."

![Prompt Structure](https://placehold.co/600x400?text=Context+Task+Constraints)

## Iterative Refinement

Rarely will the first prompt give you the perfect result. You must iterate:
1.  **Initial Prompt:** "Write a function to sort a list."
2.  **Refinement 1:** "Sort it by the 'date' property."
3.  **Refinement 2:** "Handle cases where the date is null."

## Lab: Improving Prompts

### Step 1: The Bad Prompt

Try this prompt in your AI tool:
> "Write a Python script for a website."

Observe how vague the result is.

### Step 2: The Improved Prompt

Now, try this structured prompt:

> **Role:** Python Flask Developer
> **Task:** Create a simple API endpoint for a 'To-Do' application.
> **Requirements:**
> *   Use Flask.
> *   The endpoint should be `/todos`.
> *   It should accept a POST request with a JSON body (`title`, `completed`).
> *   It should validate that `title` is not empty.
> **Output:** Provide only the Python code for the route.

### Step 3: Compare Results

Notice the difference in specificity, error handling, and usability.
