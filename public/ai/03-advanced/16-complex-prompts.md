# 16. Prompt Engineering for Complex Tasks

## Advanced Prompting Techniques

Simple prompts work for simple tasks. For complex, multi-step problems, you need advanced techniques like Chain-of-Thought (CoT), Few-Shot Prompting, and Role Chaining.

### Techniques

1.  **Chain-of-Thought (CoT):** Ask the AI to "think step-by-step" before giving the answer. This improves reasoning.
2.  **Few-Shot Prompting:** Provide examples of input/output pairs to guide the AI's style.
3.  **Role Chaining:** Break a task into sub-tasks assigned to different "roles" (e.g., Architect -> Developer -> QA).

![Advanced Prompting](https://placehold.co/600x400?text=CoT+Few-Shot+Chaining)

## Lab: Multi-Stage Feature Development

### Step 1: The Complex Task

"Build a REST API for a blog with authentication, posts, and comments."

### Step 2: Chain the Prompts

Instead of one prompt, use a sequence:

1.  **Architect:** "Design the database schema for a blog API (Users, Posts, Comments)."
2.  **Developer:** "Using that schema, write the Sequelize/TypeORM models."
3.  **Developer:** "Now write the Express routes for creating a post."
4.  **QA:** "Write Jest tests for the 'create post' route, covering validation errors."

### Step 3: Evaluate

Compare the result of this chained approach vs. asking for everything in one prompt. The chained approach usually yields higher quality, more consistent code.
