# 19. Building AI-Assisted Coding Templates

## Standardizing AI Usage

To scale AI adoption, build reusable prompt templates for common tasks. This ensures consistency and quality across the team.

### Template Types

1.  **Project Scaffolding:** "Create a new React component with tests, styles, and Storybook."
2.  **Code Review:** "Review this PR for security, performance, and style (Airbnb guide)."
3.  **Bug Report:** "Analyze this stack trace and suggest fixes."

### Building a Library

Store these prompts in a shared repository or a tool like PromptLayer.

![Prompt Templates](https://placehold.co/600x400?text=Scaffold+Review+Bug+Report)

## Lab: Create a Component Generator

### Step 1: Define the Standard

"All React components must:
*   Be functional components.
*   Use TypeScript interfaces for props.
*   Have a corresponding `.test.tsx` file.
*   Use Tailwind CSS for styling."

### Step 2: Create the Prompt Template

> "Act as a Senior React Developer. Generate a component named `{{ComponentName}}`.
> Requirements:
> *   Functional component with TypeScript.
> *   Props interface: `{{Props}}`.
> *   Tailwind CSS for styling.
> *   Include a basic Jest test file."

### Step 3: Test It

Replace `{{ComponentName}}` with `Button` and `{{Props}}` with `label: string, onClick: () => void`.
Does the output match your standard?
