# Concurrency & Async

In this module, we'll explore the more advanced concepts of concurrency and asynchronous programming in Rust, which are essential for building high-performance, scalable applications.

## Concurrency & Parallelism
Rust's ownership model makes it easier to write safe, concurrent code.
- **Threads (`std::thread`):** A way to run multiple tasks concurrently. Rust's threads are OS-level threads.
- **Message Passing (`mpsc`):** A way for threads to communicate with each other using channels (Multi-Producer, Single-Consumer). This is a core concept in Rust's concurrency model.
- **Shared State (`Arc`, `Mutex`):**
    - `Arc<T>` (Atomic Reference Counting): Allows multiple threads to own the same data.
    - `Mutex<T>` (Mutual Exclusion): Ensures that only one thread can access the data at a time.
- **Data Races:** Rust prevents data races at compile time by ensuring that shared data is protected by synchronization primitives like `Mutex`.

## Async Programming
Asynchronous programming allows you to write non-blocking code, which is crucial for I/O-bound applications (like web servers).
- **`async`/`await`:** A way to write asynchronous code that looks like synchronous code. `async` functions return a `Future`.
- **Futures:** A trait that represents a value that may or may not be present in the future. Futures are lazy; they don't do anything until they are polled by an executor.
- **Popular Runtimes (Tokio):** A popular runtime for building asynchronous applications in Rust. It provides the executor, I/O primitives, and timers needed to run async code.
- **Async Traits:** While not natively supported yet, you can use crates like `async-trait` to define traits with async methods.

### Example: Async
```rust
use tokio;

async fn fetch_data() -> String {
    // Simulate some async work (e.g., network request)
    tokio::time::sleep(std::time::Duration::from_secs(1)).await;
    "data".to_string()
}

#[tokio::main]
async fn main() {
    // .await pauses the execution of the function until the future completes
    let data = fetch_data().await;
    println!("Fetched: {}", data);
}
```

## Practical Tip
When building asynchronous applications, always use a **runtime like Tokio**. It's the industry standard for Rust and provides everything you need to run async code efficiently. Avoid using `std::thread` for I/O-bound tasks; use `async` instead.
