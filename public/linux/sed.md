# Text Processing with sed

`sed` stands for **stream editor**. It is a powerful utility for parsing and transforming text.

Unlike a text editor like `nano` or `vim`, `sed` edits data based on a set of rules or commands you provide, making it ideal for automated text processing.

## Basic Syntax

The basic syntax of `sed` is:

```bash
sed [options] 'command' file
```

## Common Uses

### 1. Substitution (Find and Replace)

The most common use of `sed` is substitution. The `s` command replaces the first occurrence of a pattern on each line.

```bash
sed 's/old_text/new_text/' filename
```

**Example:** Replace "apple" with "orange" in `fruits.txt`:

```bash
sed 's/apple/orange/' fruits.txt
```

### 2. Global Substitution

To replace *all* occurrences of a pattern on a line, add the `g` (global) flag at the end of the substitution command.

```bash
sed 's/old_text/new_text/g' filename
```

### 3. Deleting Lines

The `d` command deletes lines that match a specific pattern or line number.

**Example:** Delete the 3rd line of a file:

```bash
sed '3d' filename
```

**Example:** Delete all lines containing the word "error":

```bash
sed '/error/d' filename
```

### 4. In-Place Editing

By default, `sed` outputs the modified text to the standard output (your terminal) without changing the original file.

To save the changes directly to the file, use the `-i` (in-place) option.

```bash
sed -i 's/old_text/new_text/g' filename
```

*Warning: Be careful with `-i` as it overwrites the original file. It's good practice to test your `sed` command without `-i` first.*

## Try it out!

In the interactive lab, try using `sed` to replace text in a file.
