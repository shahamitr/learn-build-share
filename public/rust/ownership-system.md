# Ownership & Borrowing

In this module, we'll dive into the heart of Rust's memory safety: the ownership system.

## Ownership Rules
1. Each value in Rust has a variable that's called its *owner*.
2. There can only be one owner at a time.
3. When the owner goes out of scope, the value will be dropped (memory is automatically freed).

### Move vs Copy
- **Move:** When you assign a value to another variable, the ownership is moved. The original variable is no longer valid.
- **Copy:** For types that have a known size at compile time (like integers), Rust copies the value instead of moving it.

## Borrowing
Borrowing is the mechanism that allows you to access a value without taking ownership of it.
- **Immutable Borrowing (`&T`):** You can have any number of immutable references to a value at the same time. You cannot modify the value through an immutable reference.
- **Mutable Borrowing (`&mut T`):** You can have only **one** mutable reference to a value at a time, and no other references (immutable or mutable) can exist simultaneously. This prevents data races at compile time.

## References
References are pointers that point to a value without taking ownership. They are always valid in Rust because the compiler ensures that the value they point to stays in scope as long as the reference exists.
- **Dangling References:** Rust prevents dangling references (pointers pointing to invalid memory) at compile time.

## Why Rust Avoids Data Races?
By enforcing the borrowing rules at compile time (specifically the rule that you can have either one mutable reference OR any number of immutable references), Rust prevents multiple threads from accessing and modifying the same data simultaneously, which is the root cause of data races.

## Practical Tip
When working with ownership, remember that if you pass a value to a function, the function takes ownership of it unless you pass it as a reference (`&` or `&mut`). If you want to use the value after passing it to a function, **pass it by reference**.
