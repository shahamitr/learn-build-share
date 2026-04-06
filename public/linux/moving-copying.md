# Moving and Copying Files

Managing files in Linux often involves moving and copying them between directories. The `mv` and `cp` commands are used for these tasks.

## `mv` Command
The `mv` command is used to move or rename files and directories.

### Moving a File
```bash
$ mv file.txt /path/to/destination/
```
This moves `file.txt` to the specified destination directory.

### Renaming a File
```bash
$ mv oldname.txt newname.txt
```
This renames `oldname.txt` to `newname.txt` in the current directory.

## `cp` Command
The `cp` command is used to copy files and directories.

### Copying a File
```bash
$ cp file.txt /path/to/destination/
```
This copies `file.txt` to the specified destination directory.

### Copying a Directory
Use the `-r` (recursive) option to copy a directory and its contents:
```bash
$ cp -r dir1 /path/to/destination/
```