# Finding Files with find

The `find` command in UNIX is a command line utility for walking a file hierarchy. It can be used to find files and directories and perform subsequent operations on them.

## Basic Syntax

```bash
find [path] [expression]
```

## Common Expressions

* `-name`: Search for files by name
* `-iname`: Search for files by name (case-insensitive)
* `-type`: Search by file type (`f` for file, `d` for directory)
* `-size`: Search by file size
* `-mtime`: Search by modification time

## Examples

Find a file named "hello.txt" in the current directory and subdirectories:
```bash
find . -name "hello.txt"
```

Find all directories in the `/etc` directory:
```bash
find /etc -type d
```

## Try It Yourself!

Use the interactive lab to find all files named `hello.txt` in the current directory (`.`).
