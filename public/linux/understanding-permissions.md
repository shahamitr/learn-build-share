# Understanding Permissions

Linux uses a permission system to control access to files and directories. Each file and directory has an owner, a group, and permissions for the owner, group, and others.

## Permission Types
- **Read (r)**: Allows reading the contents of a file or listing the contents of a directory.
- **Write (w)**: Allows modifying the contents of a file or creating/deleting files in a directory.
- **Execute (x)**: Allows executing a file as a program or entering a directory.

## Viewing Permissions
Use the `ls -l` command to view file permissions.

```bash
$ ls -l
-rw-r--r-- 1 user group 1024 Mar 27 10:00 file.txt
```
The first character indicates the file type (`-` for regular file, `d` for directory). The next nine characters represent the permissions for the owner, group, and others.

- **Owner**: `rw-` (read and write)
- **Group**: `r--` (read only)
- **Others**: `r--` (read only)

## Changing Permissions
You can change permissions using the `chmod` command.

```bash
$ chmod 755 file.txt
```
This sets the permissions to `rwxr-xr-x`.

## Changing Ownership
You can change the owner and group of a file using the `chown` command.

```bash
$ chown user:group file.txt
```
This sets the owner to `user` and the group to `group`.