# Changing Ownership with chown

The `chown` command is used to change the owner and group of files and directories in Linux. This is useful when you need to transfer ownership of a file to another user or group.

## Changing the Owner
To change the owner of a file, use the following syntax:

```bash
$ chown newowner file.txt
```
This changes the owner of `file.txt` to `newowner`.

## Changing the Owner and Group
To change both the owner and group, use a colon (`:`) to separate the user and group names:

```bash
$ chown newowner:newgroup file.txt
```
This changes the owner to `newowner` and the group to `newgroup`.

## Changing the Group Only
To change only the group, omit the owner name and keep the colon:

```bash
$ chown :newgroup file.txt
```
This changes the group of `file.txt` to `newgroup`.

## Recursive Ownership Change
Use the `-R` (recursive) option to change the ownership of a directory and all its contents:

```bash
$ chown -R newowner:newgroup directory/
```
This changes the owner and group of `directory/` and everything inside it.