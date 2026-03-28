# Syntax & Control Flow

In this module, we'll explore the basic syntax of Rust, including variables, data types, and control flow.

## Variables
In Rust, variables are immutable by default. This is a key feature for memory safety and concurrency. To make a variable mutable, use the `mut` keyword.
- **Immutable:** `let x = 5;` (You cannot change `x` after this).
- **Mutable:** `let mut y = 10;` (You can change `y` later).
- **Constants:** `const MAX_POINTS: u32 = 100_000;` (Always immutable, must have a type, can be set to a constant expression).
- **Shadowing:** You can declare a new variable with the same name as a previous variable, effectively "shadowing" it. `let x = 5; let x = x + 1;`

## Data Types
Rust is a statically typed language, which means it must know the types of all variables at compile time.
- **Scalar Types:**
    - **Integers:** Signed (`i8`, `i16`, `i32`, `i64`, `i128`, `isize`) and Unsigned (`u8`, `u16`, `u32`, `u64`, `u128`, `usize`).
    - **Floats:** `f32`, `f64`.
    - **Boolean:** `bool` (`true`, `false`).
    - **Character:** `char` (Unicode scalar value, 4 bytes).
- **Compound Types:**
    - **Tuples:** Fixed-size, can hold different types: `let tup: (i32, f64, u8) = (500, 6.4, 1);`
    - **Arrays:** Fixed-size, all elements must be the same type: `let a = [1, 2, 3, 4, 5];`

## Control Flow
- **if Expressions:** Standard conditional branching. `if` is an expression in Rust, meaning it can return a value.
- **match Expressions:** A powerful pattern-matching tool that allows you to compare a value against a series of patterns. It is exhaustive, meaning all possible cases must be handled.
- **Loops:**
    - `loop`: An infinite loop that can be exited with `break`.
    - `while`: A loop that continues as long as a condition is true.
    - `for`: A loop that iterates over a collection or range (e.g., `for i in 0..5 { ... }`).

### Example: match
```rust
let number = 3;
match number {
    1 => println!("One"),
    2 => println!("Two"),
    3 => println!("Three"),
    _ => println!("Something else"), // The underscore is a catch-all pattern
}
```

## Practical Tip
When using **`match`**, always ensure you handle all possible cases. If you don't need to handle every case, use the **`_`** (underscore) pattern as a catch-all.
