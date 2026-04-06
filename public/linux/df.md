# Disk Usage

In Linux, you can check disk space usage and file sizes using the `df` and `du` commands.

## The df Command

The `df` command (Disk Free) displays information about total space and available space on a file system.

To view disk space usage for all mounted file systems:

```bash
df
```

To view disk space usage in human-readable format (e.g., MB, GB), use the `-h` option:

```bash
df -h
```

To view disk space usage for a specific file system or directory:

```bash
df -h /var/log
```

## The du Command

The `du` command (Disk Usage) estimates file space usage.

To view the disk usage of all files and directories in the current directory:

```bash
du
```

To view the disk usage in human-readable format, use the `-h` option:

```bash
du -h
```

To view the total disk usage for a specific directory, use the `-s` (summarize) option:

```bash
du -sh /var/log
```
