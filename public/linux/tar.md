# Archiving with tar

The `tar` command is used to compress and extract files and directories in Linux. It stands for Tape Archive.

## Creating an Archive

To create a new archive, use the `-c` (create) and `-f` (file) options:

```bash
tar -cvf archive.tar file1 file2 directory1
```

- `-c`: Create a new archive.
- `-v`: Verbose output (shows progress).
- `-f`: Specifies the filename of the archive.

To create a gzip-compressed archive (`.tar.gz`), add the `-z` option:

```bash
tar -czvf archive.tar.gz file1 file2 directory1
```

## Extracting an Archive

To extract an archive, use the `-x` (extract) option:

```bash
tar -xvf archive.tar
```

To extract a gzip-compressed archive:

```bash
tar -xzvf archive.tar.gz
```

To extract to a specific directory, use the `-C` option:

```bash
tar -xzvf archive.tar.gz -C /path/to/directory
```
