# 03. AI for Code Generation (Basics)

## Generating Boilerplate and Utilities

One of the strongest use cases for AI is generating "boring" code—boilerplate, utility functions, and standard algorithms. This frees you up to focus on business logic.

### Best Practices for Generation

1.  **Be Specific:** Name your functions and variables in the prompt if you have a convention.
2.  **Ask for Validation:** Ask the AI to include input validation in the generated code.
3.  **Review Logic:** Never copy-paste blindly. AI often makes subtle off-by-one errors or assumes libraries you don't have.

![Code Generation Flow](https://placehold.co/600x400?text=Prompt+Generate+Review)

## Lab: Building Utilities

### Step 1: Generate a Color Converter

Ask the AI to generate a utility function:
> "Write a TypeScript function that converts a HEX color code (e.g., #FFFFFF) to an RGB object `{r: 255, g: 255, b: 255}`. Handle both 3-digit and 6-digit hex codes."

### Step 2: Generate a Date Formatter

Ask for a date formatter:
> "Write a JavaScript function that takes a Date object and returns a string saying how much time has passed (e.g., '5 minutes ago', '2 days ago')."

### Step 3: Manual Review

Review the generated code.
*   Does the HEX converter handle invalid inputs (like `ZZZ`)?
*   Does the date formatter handle future dates?

If not, ask the AI to fix it:
> "Update the HEX function to throw an error if the input string is not a valid hex code."
