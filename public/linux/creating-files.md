# Creating Files and Directories

In Linux, creating files and directories is a common task. You can use the `touch` and `mkdir` commands to accomplish this.

## `touch` Command
The `touch` command is used to create empty files or update the access and modification timestamps of existing files.

```bash
$ touch newfile.txt
```
This creates an empty file named `newfile.txt` in the current directory.

## `mkdir` Command
The `mkdir` command is used to create new directories.

```bash
$ mkdir newdir
```
This creates a new directory named `newdir` in the current directory.

You can also create multiple directories at once:
```bash
$ mkdir dir1 dir2 dir3
```

To create a directory tree, use the `-p` option:
```bash
$ mkdir -p parent/child/grandchild
```