# Memory & Unsafe Rust

In this module, we'll explore advanced memory management concepts and the `unsafe` keyword in Rust, which allows for low-level operations when necessary.

## Memory & Performance
Rust provides powerful tools for managing memory safely and efficiently.
- **Smart Pointers:**
    - `Box<T>`: Allocates data on the heap. Useful for recursive data structures or large data.
    - `Rc<T>` (Reference Counting): Allows multiple owners for data in a single-threaded context.
    - `Arc<T>` (Atomic Reference Counting): Allows multiple owners for data in a multi-threaded context.
- **Interior Mutability (`Cell`, `RefCell`):** A pattern that allows you to modify data even when there are immutable references to it. It moves the borrow checking from compile-time to runtime.
- **Zero-cost Abstractions:** Rust's high-level abstractions (like iterators and closures) are designed to compile down to machine code that is as efficient as hand-written low-level code.

## Unsafe Rust
Sometimes, you need to perform operations that the compiler cannot guarantee are safe.
- **`unsafe` Keyword:** Used to tell the compiler that you are taking responsibility for memory safety. Within an `unsafe` block, you can:
    - Dereference raw pointers (`*const T`, `*mut T`).
    - Call unsafe functions or methods.
    - Access or modify mutable static variables.
    - Implement unsafe traits.
- **When and Why to Use It:** Unsafe Rust should be used sparingly and only when necessary (e.g., for FFI, low-level hardware access, or implementing performance-critical data structures). Always wrap `unsafe` code in a safe abstraction.
- **FFI (Foreign Function Interface):** Rust can call C code and vice-versa using the FFI. This is essential for integrating with existing C/C++ libraries.

### Example: Unsafe
```rust
let mut num = 5;
let r1 = &num as *const i32;
let r2 = &mut num as *mut i32;

unsafe {
    // Dereferencing raw pointers is unsafe
    println!("r1 is: {}", *r1);
    *r2 = 10;
    println!("num is: {}", num);
}
```

## Practical Tip
Always strive to write safe Rust. If you find yourself using `unsafe` blocks, **document why** it's necessary and ensure that the safety invariants are maintained within the safe wrapper.
