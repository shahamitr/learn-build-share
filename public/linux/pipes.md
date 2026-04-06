# Pipes and Redirection

Linux provides powerful mechanisms to chain commands together and redirect their input and output.

## Redirection

* `>`: Redirect standard output to a file (overwrites).
* `>>`: Redirect standard output to a file (appends).
* `<`: Redirect standard input from a file.

Example:
```bash
echo "Hello World" > hello.txt
```

## Pipes

The pipe operator `|` takes the standard output of one command and passes it as the standard input to another command.

Example:
```bash
ls -l | grep "txt"
```
This lists all files in detailed format, and then filters the output to only show lines containing "txt".

## Try It Yourself!

Use the interactive lab to list files (`ls`) and pipe the output to `grep "txt"`.
