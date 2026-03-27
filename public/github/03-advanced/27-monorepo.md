# 27. Monorepo Collaboration Strategies

## Large Repository Management

Monorepos (multiple projects in one repo) require special handling.

### Multi-Team Workflows

*   **Code Owners:** Assign different folders to different teams.
*   **Sparse Checkout:** Developers only check out the folders they need.
*   **Git LFS:** Use Large File Storage for binary assets.

## Lab: Simulate Monorepo Structure

1.  **Structure:**
    ```
    /apps
      /web
      /mobile
    /libs
      /ui-kit
      /utils
    ```
2.  **Code Owners:**
    ```
    /apps/web/ @web-team
    /apps/mobile/ @mobile-team
    ```
3.  **Commit:** Push this structure.
