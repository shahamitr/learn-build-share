# Deleting Files and Directories

In Linux, deleting files and directories is done using the `rm` and `rmdir` commands. Be careful when using these commands, as deleted files are generally not recoverable.

## `rm` Command
The `rm` command is used to remove files and directories.

### Removing a File
```bash
$ rm file.txt
```
This removes `file.txt` from the current directory.

### Removing a Directory
Use the `-r` (recursive) option to remove a directory and its contents:
```bash
$ rm -r dir1
```
This removes `dir1` and all its contents.

### Force Removal
Use the `-f` (force) option to remove files without prompting for confirmation:
```bash
$ rm -rf dir1
```
Be extremely careful with `rm -rf`, as it will delete everything in the specified directory without asking.

## `rmdir` Command
The `rmdir` command is used to remove empty directories.

```bash
$ rmdir emptydir
```
This removes the empty directory named `emptydir`. If the directory is not empty, `rmdir` will fail.