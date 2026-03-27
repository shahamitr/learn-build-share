# 23. Code Owners and Review Policies

## CODEOWNERS File

The `CODEOWNERS` file defines individuals or teams that are responsible for code in a repository.

### Automatic Reviewers

When a PR modifies code owned by someone, they are automatically requested for review.

### Syntax

```
# This is a comment.
# Each line is a file pattern followed by one or more owners.

*       @global-owner1 @global-owner2
*.js    @js-owner
/docs/  @docs-team
```

## Lab: Create CODEOWNERS Configuration

1.  **Create File:** Create a file named `CODEOWNERS` in the root (or `.github/`) directory.
2.  **Add Rule:** `* @your-username`
3.  **Commit:** Push to `main`.
4.  **Test:** Create a PR from another account (or ask a friend). You should see yourself automatically added as a reviewer.
