# Building and Running Rust Projects

Once you have created a Rust project using `cargo new`, you need to know how to compile and execute it. Cargo, the Rust package manager and build system, makes this incredibly easy.

## Building a Project

To compile your Rust project without running it, use the `cargo build` command:

```bash
cargo build
```

This command compiles your code and places the resulting executable in the `target/debug/` directory. This is an unoptimized build, suitable for development and debugging.

If you want to create an optimized build for release, you can use the `--release` flag:

```bash
cargo build --release
```

This will place the optimized executable in the `target/release/` directory. Release builds take longer to compile but run much faster.

## Running a Project

To compile and immediately run your project in one step, use the `cargo run` command:

```bash
cargo run
```

This is the most common command you'll use during development. If your code hasn't changed since the last build, `cargo run` will simply execute the existing binary, saving time.

## Checking for Errors

Sometimes you just want to check if your code compiles without actually producing an executable. This is faster than a full build and is useful for quickly catching syntax errors. You can do this with the `cargo check` command:

```bash
cargo check
```

## Interactive Lab

In the interactive lab, you will practice building and running a Rust project using the `cargo run` command.
