# Searching Text with grep

The `grep` command is used to search text or search the given file for lines containing a match to the given strings or words.

## Basic Syntax

```bash
grep "pattern" filename
```

## Common Options

* `-i`: Ignore case distinctions
* `-v`: Invert match (select non-matching lines)
* `-r` or `-R`: Search directories recursively
* `-n`: Prefix each line of output with the line number within its input file

## Examples

Search for the word "error" in a log file:
```bash
grep "error" /var/log/syslog
```

Search for "warning" ignoring case:
```bash
grep -i "warning" /var/log/syslog
```

## Try It Yourself!

Use the interactive lab to search for the word "Hello" in the `hello.txt` file.
