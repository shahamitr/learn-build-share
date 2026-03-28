# Collections & Traits

In this module, we'll explore the common collections and traits in Rust, which are essential for building robust and reusable code.

## Collections
Rust's standard library provides several collection types for storing data.
- **Vectors (`Vec<T>`):** A dynamic array that can grow and shrink in size. It stores elements contiguously in memory.
- **HashMaps (`HashMap<K, V>`):** A key-value store that allows you to store and retrieve values by key. It uses a hashing function to map keys to values.
- **Strings (`String` vs `&str`):**
    - `String`: A growable, heap-allocated, UTF-8 encoded string.
    - `&str`: An immutable reference to a string slice (a view into a string).
- **Other Collections:** `VecDeque`, `LinkedList`, `HashSet`, `BinaryHeap`.

## Traits & Generics
Traits and generics are the foundation of Rust's polymorphism.
- **Defining Traits:** A way to define shared behavior across different types. A trait defines a set of methods that a type must implement.
- **Implementing Traits:** A way to implement a trait for a specific type using the `impl Trait for Type` syntax.
- **Generics (`<T>`):** A way to write code that can work with multiple types. You can use generics in functions, structs, enums, and traits.
- **Trait Bounds:** Restricting generic types to those that implement a specific trait (e.g., `fn print_summary<T: Summary>(item: T)`).

### Example: Trait
```rust
trait Summary {
    fn summarize(&self) -> String;
}

struct Article {
    title: String,
    author: String,
}

impl Summary for Article {
    fn summarize(&self) -> String {
        format!("{} by {}", self.title, self.author)
    }
}

// Using the trait
fn print_summary(item: &impl Summary) {
    println!("{}", item.summarize());
}
```

## Practical Tip
When defining functions that take generic types, always use **trait bounds** to specify the required behavior. This makes your code more robust and provides better error messages if the wrong type is passed.
