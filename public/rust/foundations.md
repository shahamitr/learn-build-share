# Core Concepts & Setup

Welcome to Rust! This module covers the core philosophy of Rust and how to get your environment ready.

## What is Rust?
Rust is a multi-paradigm, general-purpose programming language designed for performance and safety, especially safe concurrency. It was created by Graydon Hoare at Mozilla Research.

## Why Rust is Popular?
- **Memory Safety:** Rust achieves memory safety without a garbage collector through its ownership system. This prevents common bugs like null pointer dereferences, dangling pointers, and buffer overflows.
- **Performance:** Rust is comparable to C and C++ in terms of speed and resource usage, making it ideal for systems programming, game engines, and performance-critical applications.
- **Fearless Concurrency:** The type system and ownership model prevent data races at compile time, making it easier to write safe, concurrent code.
- **Zero-Cost Abstractions:** Rust's abstractions have no runtime overhead; you only pay for what you use.
- **Tooling:** Rust comes with excellent built-in tooling, including `cargo` (package manager) and `rustfmt` (code formatter).

## Setup & Tools
- **rustup:** The official installer and version management tool for Rust. It allows you to manage different Rust toolchains (stable, beta, nightly) and cross-compile for different targets.
- **Cargo:** Rust's build system and package manager. It handles building your code, downloading dependencies, and building those dependencies.
- **rustc:** The Rust compiler. Usually, you use `cargo` to invoke `rustc`, but it's good to know it exists.

### Basic Cargo Commands
- `cargo new <project_name>`: Creates a new Rust project with a standard directory structure.
- `cargo build`: Compiles the current project into a binary.
- `cargo run`: Compiles and runs the current project.
- `cargo check`: Quickly checks the code for errors without producing a binary. This is much faster than `cargo build`.
- `cargo test`: Runs tests in the project.
- `cargo doc`: Generates documentation for the project.
- `cargo update`: Updates dependencies in `Cargo.lock`.

## Practical Tip
When starting a new project, always use **`cargo new`**. It sets up a `Cargo.toml` file (for configuration and dependencies) and a `src/main.rs` file (the entry point of your application).
