# Testing Types & Techniques

In this module, we'll explore the different types of testing and the techniques used to identify defects.

## Levels of Testing
Testing is performed at different stages of the development process.
1. **Unit Testing:** Testing individual components or units of code (usually by developers).
2. **Integration Testing:** Testing how different units or modules work together.
3. **System Testing:** Testing the entire application as a whole to ensure it meets requirements.
4. **Acceptance Testing:** Testing the application from the user's perspective to ensure it's ready for release (UAT).

## Types of Testing (Functional)
- **Functional Testing:** Verifies that each function of the software application operates in conformance with the requirement specification.
- **Smoke Testing:** A quick check to ensure the most critical functions work (Build Verification Testing).
- **Sanity Testing:** A subset of regression testing, performed to verify that a specific bug fix or change works as expected.
- **Regression Testing:** Re-running functional and non-functional tests to ensure that previously developed and tested software still performs after a change.
- **Retesting:** Testing a specific bug after it has been fixed to ensure it's truly gone.

## Types of Testing (Non-Functional)
- **Performance Testing:** Testing the application's speed, scalability, and stability under load.
- **Security Testing:** Identifying vulnerabilities and ensuring data protection.
- **Usability Testing:** Evaluating how easy and intuitive the application is for users.
- **Compatibility Testing:** Testing the application across different browsers, OS, and devices.
- **Reliability Testing:** Testing the application's ability to perform its required functions under stated conditions for a specified period.

## Testing Techniques
- **Black Box Testing:** Testing without knowledge of the internal code or structure. Focuses on inputs and outputs.
- **White Box Testing:** Testing with knowledge of the internal code and structure. Focuses on code coverage, paths, and logic.
- **Grey Box Testing:** A combination of black box and white box testing. Testing with partial knowledge of the internal structure.

## Practical Tip
When starting a new project, always perform **Smoke Testing** first to ensure the build is stable enough for further testing.
