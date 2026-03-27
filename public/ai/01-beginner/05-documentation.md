# 05. AI for Documentation

## Generating Documentation with AI

Documentation is often the most neglected part of software development. AI excels at generating initial drafts, explaining complex logic, and keeping docs up-to-date.

### Types of Documentation AI Can Generate

1.  **README Files:** Summarize project purpose, installation steps, and usage.
2.  **Code Comments:** Explain *why* a block of code exists (not just *what* it does).
3.  **API Documentation:** Generate OpenAPI/Swagger specs from code.

### Best Practices

*   **Provide Context:** Tell the AI who the audience is (e.g., "Write a README for a junior developer").
*   **Review for Accuracy:** AI might hallucinate features that don't exist.
*   **Keep it Concise:** Ask for bullet points or specific sections.

![Documentation Generation](https://placehold.co/600x400?text=Code+Context+Docs)

## Lab: Generate a README

### Step 1: The Project Description

Imagine you have a simple Node.js script that fetches weather data from an API.

### Step 2: Prompt the AI

> "Write a README.md for a Node.js CLI tool called 'weather-cli'.
> Features:
> *   Fetches current weather for a city.
> *   Uses the OpenWeatherMap API.
> *   Requires an API key in a `.env` file.
> *   Usage: `node index.js --city London`."

### Step 3: Review and Refine

Check the generated README.
*   Did it include installation instructions (`npm install`)?
*   Did it mention the `.env` file setup?
*   Is the usage example correct?

If anything is missing, ask the AI to add it:
> "Add a section on troubleshooting common API errors."
