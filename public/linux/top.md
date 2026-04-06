# Process Monitoring

In Linux, you can monitor system processes and resource usage using commands like `top` and `ps`.

## The top Command

The `top` command provides a dynamic, real-time view of a running system. It displays a summary of system information and a list of processes currently being managed by the Linux kernel.

To run `top`, simply type:

```bash
top
```

While `top` is running, you can use various interactive commands:

- `h`: Display help.
- `k`: Kill a process (prompts for PID).
- `q`: Quit `top`.
- `P`: Sort by CPU usage.
- `M`: Sort by memory usage.

## The ps Command

The `ps` command (Process Status) displays information about active processes.

To list processes for the current user in the current terminal:

```bash
ps
```

To list all processes running on the system:

```bash
ps -e
```

To view a detailed list of all processes:

```bash
ps -ef
```

To find a specific process, you can pipe the output to `grep`:

```bash
ps -ef | grep nginx
```
