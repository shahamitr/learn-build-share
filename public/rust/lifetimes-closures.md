# Lifetimes & Closures

In this module, we'll explore the more advanced concepts of lifetimes, closures, and iterators in Rust, which are essential for writing expressive and efficient code.

## Lifetimes
Lifetimes are a way for the Rust compiler to ensure that all references are valid.
- **Lifetime Annotations (`'a`):** A way to tell the compiler how long a reference should live. They don't change how long a reference actually lives, but they help the compiler verify that references are valid.
- **Lifetime Elision:** In many cases, the compiler can infer lifetimes automatically, so you don't need to annotate them explicitly.
- **Avoiding Dangling References:** The compiler ensures that references are always valid by checking their lifetimes. If a reference could potentially point to invalid memory, the code won't compile.

## Closures & Iterators
Rust supports functional programming concepts like closures and iterators, which make data transformation concise and efficient.
- **Closures:** Anonymous functions that can capture their environment. They can be stored in variables or passed as arguments to other functions.
- **Iterators:** A way to process a sequence of elements. Iterators in Rust are lazy, meaning they don't do anything until you consume them (e.g., using `collect()`).
- **Common Iterator Methods:**
    - `map()`: Transforms each element.
    - `filter()`: Filters elements based on a condition.
    - `fold()` / `reduce()`: Aggregates elements into a single value.
    - `collect()`: Consumes the iterator and collects the elements into a collection (like a `Vec`).

### Example: Closure
```rust
let add = |a: i32, b: i32| a + b;
let result = add(1, 2);
println!("Result: {}", result);
```

### Example: Iterator
```rust
let numbers = vec![1, 2, 3];
// Iterators are lazy, so we use collect() to consume them
let doubled: Vec<i32> = numbers.iter().map(|n| n * 2).collect();
println!("Doubled: {:?}", doubled);
```

## Crates & Ecosystem
- **Using External Crates:** Rust has a rich ecosystem of external crates (libraries) available on [crates.io](https://crates.io/).
- **Project Dependencies:** Cargo makes it easy to add and manage dependencies in your `Cargo.toml` file.
- **Crate Features:** Many crates allow you to enable or disable features to reduce binary size or compile time.

## Practical Tip
When working with **iterators**, always prefer them over manual loops for data transformation. They are usually more concise, easier to read, and can be just as fast as manual loops due to Rust's zero-cost abstractions.
