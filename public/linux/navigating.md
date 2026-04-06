# Navigating the Filesystem

Navigating the Linux filesystem is a fundamental skill. You use the command line to move between directories and view their contents.

## Basic Commands

### `pwd` (Print Working Directory)
Shows the absolute path of the directory you are currently in.
```bash
$ pwd
/home/user/project
```

### `ls` (List)
Lists the contents of a directory.
```bash
$ ls
hello.txt  script.sh
```
Use `ls -l` for a detailed list, including permissions, owner, size, and modification date.
```bash
$ ls -l
total 12
drwxr-xr-x 2 user user 4096 Mar 27 10:00 .
drwxr-xr-x 3 user user 4096 Mar 27 09:00 ..
-rw-r--r-- 1 user user   15 Mar 27 10:00 hello.txt
```

### `cd` (Change Directory)
Changes your current working directory.
```bash
$ cd /var/log
```
Use `cd ..` to go up one directory level, and `cd ~` to go to your home directory.