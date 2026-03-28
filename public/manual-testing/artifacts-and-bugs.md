# Test Artifacts & Bug Life Cycle

In this module, we'll cover the essential documents and the life cycle of a bug.

## Test Artifacts
- **Test Case:** A set of conditions or variables under which a tester will determine whether a system under test satisfies requirements or works correctly.
- **Test Scenario:** A high-level description of a test case. For example, "Verify the login functionality."
- **Test Plan:** A document detailing the objectives, resources, and schedule for a specific testing project.
- **Test Strategy:** A high-level document that defines the testing approach.
- **Test Summary Report:** A document that summarizes the testing activities and results.
- **Bug / Defect:** An error, flaw, failure, or fault in a computer program or system that causes it to produce an incorrect or unexpected result.

### Components of a Test Case
1. **Test Case ID:** Unique identifier.
2. **Test Scenario:** High-level description.
3. **Test Description:** Detailed steps to perform the test.
4. **Pre-requisites:** Conditions that must be met before testing.
5. **Test Steps:** Step-by-step instructions.
6. **Test Data:** Data used for testing (e.g., username, password).
7. **Expected Result:** What should happen if the test passes.
8. **Actual Result:** What actually happened during testing.
9. **Status:** Pass, Fail, Blocked, or Not Run.

## Bug Life Cycle
The bug life cycle is the specific set of states that a bug goes through from discovery to closure.
- **New:** A bug is reported.
- **Assigned:** A developer is assigned to fix the bug.
- **Open:** The developer is actively working on the fix.
- **Fixed:** The developer has fixed the bug.
- **Pending Retest:** The bug is ready for the tester to verify.
- **Retest:** The tester verifies the fix.
- **Verified:** The tester confirms the fix.
- **Closed:** The bug is confirmed as fixed and closed.
- **Reopened:** The bug is still present after the fix.
- **Deferred:** The fix is postponed to a later release.
- **Rejected:** The bug is not a bug (e.g., works as designed).
- **Duplicate:** The bug has already been reported.

## Severity vs Priority
- **Severity:** The impact of the bug on the system's functionality (e.g., Critical, Major, Minor).
- **Priority:** The urgency of fixing the bug (e.g., High, Medium, Low).
- **Examples:**
    - **High Severity, High Priority:** System crash on login.
    - **High Severity, Low Priority:** System crash on a rarely used feature.
    - **Low Severity, High Priority:** Typo on the homepage.
    - **Low Severity, Low Priority:** Typo on a rarely used page.

## Basic Tools (Intro)
- **Excel / Google Sheets:** Often used for writing and managing test cases.
- **JIRA:** A popular tool for tracking bugs and managing testing projects.
- **Bugzilla:** An open-source bug tracking system.

## Practical Tip
When reporting a bug, always include **clear steps to reproduce**, the **expected result**, and the **actual result**. Attach screenshots or videos if possible.
