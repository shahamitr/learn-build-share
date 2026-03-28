# Black Box Testing Techniques

Black box testing focuses on the inputs and outputs of the software without looking at the internal code structure.

## Key Techniques

### 1. Equivalence Partitioning
Divide input data into groups (partitions) that are expected to be processed similarly. Test one value from each partition.
- **Example:** If an input accepts numbers 1-100, partitions could be: <1, 1-100, >100.

### 2. Boundary Value Analysis (BVA)
Test the edges of the equivalence partitions. Most bugs occur at the boundaries.
- **Example:** For 1-100, test 0, 1, 2, 99, 100, 101.

### 3. Decision Table Testing
Used for complex business logic with multiple conditions. Create a table mapping combinations of inputs to expected outputs.

### 4. State Transition Testing
Focuses on how the software moves between different states (e.g., from "Pending" to "Approved").
