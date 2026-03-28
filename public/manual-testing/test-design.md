# Test Design Techniques

In this module, we'll master the techniques used to design effective test cases.

## Black Box Test Design Techniques
These techniques focus on the inputs and outputs of the application without knowledge of the internal code.
- **Equivalence Partitioning (EP):** Dividing input data into partitions that are expected to behave similarly. You only need to test one value from each partition.
    - **Example:** If an input field accepts values from 1 to 100, the partitions are: <1 (invalid), 1-100 (valid), >100 (invalid).
- **Boundary Value Analysis (BVA):** Testing the boundaries of input partitions. Most bugs occur at the boundaries.
    - **Example:** For the 1-100 range, the boundary values are: 0, 1, 2, 99, 100, 101.
- **Decision Table Testing:** Using a table to represent complex logic and ensure all combinations are tested. Ideal for systems with multiple inputs and outputs.
- **State Transition Testing:** Testing the transitions between different states of a system. Useful for systems with complex workflows (e.g., an ATM or a shopping cart).
- **Use Case Testing:** Testing the application's features from the user's perspective based on real-world scenarios.
- **Error Guessing:** A technique where the tester uses their experience and intuition to guess where bugs might be.

## White Box Test Design Techniques
These techniques focus on the internal code and structure of the application.
- **Statement Coverage:** Ensuring that every line of code is executed at least once.
- **Branch/Decision Coverage:** Ensuring that every branch of every control structure (e.g., if-else) is executed.
- **Path Coverage:** Ensuring that every possible path through the code is executed.

## Writing Better Test Cases
- **Positive Scenarios:** Testing that the system works as expected with valid inputs.
- **Negative Scenarios:** Testing that the system handles invalid inputs gracefully.
- **Edge Cases:** Testing the extremes of input data.
- **Test Data Preparation:** Ensuring that the necessary data is available for testing.
- **Test Case Review:** Having another tester or developer review your test cases for accuracy and completeness.

## Practical Tip
When using BVA, always test the **exact boundary values** and the **values just outside the boundaries**. This is where most off-by-one errors are found.
