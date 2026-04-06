# Changing Permissions with chmod

The `chmod` command is used to change the permissions of files and directories in Linux. You can use symbolic or numeric modes to specify the new permissions.

## Symbolic Mode
Symbolic mode uses letters to represent the user classes (`u` for owner, `g` for group, `o` for others, `a` for all) and the permissions (`r` for read, `w` for write, `x` for execute).

### Adding Permissions
```bash
$ chmod u+x script.sh
```
This adds execute permission for the owner of `script.sh`.

### Removing Permissions
```bash
$ chmod g-w file.txt
```
This removes write permission for the group of `file.txt`.

### Setting Permissions
```bash
$ chmod o=r file.txt
```
This sets the permissions for others to read-only.

## Numeric Mode
Numeric mode uses octal numbers to represent the permissions. Each permission type has a value: read (4), write (2), execute (1). The sum of these values determines the permissions for each user class.

### Example
```bash
$ chmod 755 script.sh
```
This sets the permissions to `rwxr-xr-x` (7 for owner, 5 for group, 5 for others).

- **7**: 4 (read) + 2 (write) + 1 (execute)
- **5**: 4 (read) + 1 (execute)
- **0**: No permissions