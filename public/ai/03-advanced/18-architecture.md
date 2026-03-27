# 18. AI for Architecture Documentation

## Visualizing Systems with AI

Architecture diagrams are often outdated or non-existent. AI can help generate diagrams (Mermaid.js, PlantUML) and convert requirements into technical specs.

### Diagram Generation

1.  **Mermaid.js:** Text-based diagramming tool. AI is great at generating Mermaid syntax.
2.  **PlantUML:** Another popular text-to-diagram tool.
3.  **Sequence Diagrams:** Visualize API flows or microservice interactions.

### Best Practices

*   **Provide Clear Steps:** Describe the flow step-by-step (e.g., "User clicks login -> Frontend calls API -> API checks DB").
*   **Iterate:** Ask for corrections (e.g., "Add a retry loop to the API call").

![Architecture Diagrams](https://placehold.co/600x400?text=Mermaid+PlantUML+Sequence)

## Lab: Generate a Sequence Diagram

### Step 1: The Scenario

"A user purchases an item.
1.  Frontend sends `POST /checkout`.
2.  API validates stock.
3.  API charges Stripe.
4.  API saves order to DB.
5.  API sends confirmation email (async via queue)."

### Step 2: Prompt for Mermaid

> "Generate a Mermaid sequence diagram for this checkout flow. Include the Frontend, API, Database, Stripe, and Email Service."

### Step 3: Visualize

Paste the output into a Mermaid live editor (or use a plugin).
*   Does it capture the async nature of the email?
*   Are the participants correct?
