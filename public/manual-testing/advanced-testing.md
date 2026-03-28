# Integration, System & Exploratory Testing

In this module, we'll explore more advanced testing types and techniques.

## Integration Testing
Integration testing focuses on the interactions between different modules or services.
- **Top-Down Integration:** Testing starts from the top-level modules and moves down.
- **Bottom-Up Integration:** Testing starts from the bottom-level modules and moves up.
- **Big Bang Integration:** All modules are integrated and tested at once.
- **Incremental Integration:** Modules are integrated and tested one by one.
- **Stubs & Drivers:**
    - **Stub:** A dummy module used to simulate a lower-level module.
    - **Driver:** A dummy module used to simulate a higher-level module.

## System Testing
System testing is the first level where the entire application is tested as a whole.
- **Functional System Testing:** Verifying the application's features against requirements.
- **Non-Functional System Testing:** Testing performance, security, and usability at the system level.
- **End-to-End (E2E) Testing:** Testing the complete flow of the application from start to finish.

## User Acceptance Testing (UAT)
- **Alpha Testing:** Performed by the internal QA team in a development environment.
- **Beta Testing:** Performed by a limited number of real users in their own environment.
- **UAT:** The final stage of testing before the application is released to production.

## Exploratory Testing
Exploratory testing is a powerful technique for finding bugs that are often missed by scripted test cases. It involves:
- **Learning:** Understanding the software's behavior.
- **Test Design:** Creating tests on the fly.
- **Test Execution:** Running the tests.
- **Reporting:** Documenting findings.
- **Heuristics:** Using rules of thumb to guide testing (e.g., "Test the boundaries").
- **Session-Based Testing:** Time-boxed exploratory testing with a specific goal.

## Ad-hoc Testing
Testing without any formal documentation or plan. It's often used for quick checks or when time is limited.

## Practical Tip
When performing exploratory testing, focus on **edge cases** and **unexpected user behaviors**. Use a **test charter** to guide your exploration and keep track of what you've tested.
