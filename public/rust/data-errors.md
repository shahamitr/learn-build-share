# Data Structures & Errors

In this module, we'll explore the more advanced data structures and error handling in Rust.

## Structs & Enums
- **Defining Structs:** A way to group related data together. You can define methods for structs using `impl`.
    - **Unit-like Structs:** No fields.
    - **Tuple Structs:** Fields are unnamed.
    - **Classic Structs:** Named fields.
- **Enums:** A way to define a type that can be one of several variants. Enums can also hold data.
- **Pattern Matching:** Use `match` to handle different variants of an enum or to destructure structs.

## Error Handling
Rust has two types of errors: recoverable and unrecoverable.
- **Recoverable Errors (`Result<T, E>`):** Used for errors that the program can handle (e.g., file not found, network error).
- **Unrecoverable Errors (`panic!`):** Used for errors that the program cannot recover from (e.g., index out of bounds).
- **`Option<T>`:** A type that represents a value that may or may not be present (`Some(T)` or `None`).

### Proper Error Handling
- `unwrap()`: Returns the value if it's `Ok` or `Some`, otherwise it panics. Use sparingly.
- `expect()`: Returns the value if it's `Ok` or `Some`, otherwise it panics with a custom message. Better than `unwrap()`.
- `?`: A shorthand for returning the error if it's `Err`. It propagates the error to the caller.

### Example: Result
```rust
fn divide(a: i32, b: i32) -> Result<i32, String> {
    if b == 0 {
        return Err("Cannot divide by zero".to_string());
    }
    Ok(a / b)
}

// Using the Result
match divide(10, 2) {
    Ok(result) => println!("Result: {}", result),
    Err(e) => println!("Error: {}", e),
}
```

## Practical Tip
Always prefer **`Result<T, E>`** over `panic!` for recoverable errors. Use the **`?`** operator to make your error handling code cleaner and more concise.
