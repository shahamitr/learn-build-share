# Macros & Testing

In this module, we'll explore Rust's powerful metaprogramming capabilities (macros) and its built-in testing framework, which are essential for building complex and reliable applications.

## Macros
Macros allow you to write code that writes other code (metaprogramming).
- **Declarative Macros (`macro_rules!`):** A way to define macros that match patterns and expand to code. They are similar to `match` statements but for code structure.
- **Procedural Macros:** More powerful macros that operate on the AST (Abstract Syntax Tree). They are used to create custom attributes (`#[derive(MyTrait)]`) or custom derive macros. They are defined in separate crates.

### Example: Macro
```rust
macro_rules! say_hello {
    () => {
        println!("Hello!");
    };
    ($name:expr) => {
        println!("Hello, {}!", $name);
    };
}

fn main() {
    say_hello!();
    say_hello!("Rustacean");
}
```

## Testing & Debugging
Rust has a built-in testing framework that makes it easy to write and run tests.
- **Unit Tests (`#[test]`):** Small, fast tests that verify individual units of code (usually in the same file).
- **Integration Tests:** Tests that verify how different units of code work together (usually in the `tests/` directory).
- **Documentation Tests:** Rust can automatically test code examples in your documentation comments (`///`).
- **Benchmarking:** Use the `criterion` crate for accurate performance benchmarking.

### Example: Test
```rust
// In your main code
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

// In the same file or a separate test module
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add() {
        assert_eq!(add(1, 2), 3);
    }

    #[test]
    #[should_panic]
    fn test_panic() {
        panic!("This test should panic");
    }
}
```

## Practical Tip
Always write **unit tests** for your core logic and use **documentation tests** to ensure your examples are always up-to-date. For performance-critical code, use **`criterion`** to benchmark your functions and prevent regressions.
