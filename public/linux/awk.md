# Text Processing with awk

`awk` is a powerful programming language designed for text processing and typically used as a data extraction and reporting tool.

It is particularly useful for processing structured data, such as log files or CSVs, where each line is a record and fields are separated by a delimiter (like spaces or commas).

## Basic Syntax

The basic syntax of `awk` is:

```bash
awk 'pattern { action }' file
```

*   **pattern:** A condition that determines if the action should be executed for the current line. If omitted, the action applies to all lines.
*   **action:** The command(s) to execute when the pattern matches. If omitted, the default action is to print the entire line.

## Common Uses

### 1. Printing Specific Columns

`awk` automatically splits each line into fields based on whitespace (by default).

*   `$0` represents the entire line.
*   `$1` represents the first field.
*   `$2` represents the second field, and so on.

**Example:** Print the first and third columns of a file:

```bash
awk '{ print $1, $3 }' filename
```

### 2. Filtering by Pattern

You can use regular expressions or string matching to filter lines before processing them.

**Example:** Print lines containing the word "error":

```bash
awk '/error/ { print $0 }' filename
```

### 3. Using a Custom Delimiter

If your data is separated by something other than whitespace (e.g., a comma in a CSV file or a colon in `/etc/passwd`), use the `-F` option to specify the field separator.

**Example:** Print the first field (username) from `/etc/passwd`, which uses a colon (`:`) as a delimiter:

```bash
awk -F: '{ print $1 }' /etc/passwd
```

### 4. Mathematical Operations

`awk` can perform arithmetic operations on fields.

**Example:** Add the values in the second column and print the total:

```bash
awk '{ sum += $2 } END { print sum }' filename
```

*Note: The `END` block executes after all lines have been processed.*

## Try it out!

In the interactive lab, try using `awk` to extract specific columns from a file.
