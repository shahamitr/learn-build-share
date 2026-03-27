# 21. Docker Internals

## How Docker Works

Docker is not magic. It uses Linux kernel features to isolate processes.

### Key Technologies

1.  **Namespaces:** Isolate what a process can *see* (PID, Network, Mount, User).
2.  **cgroups (Control Groups):** Limit what a process can *use* (CPU, Memory, Disk I/O).
3.  **Union Filesystem (OverlayFS):** Layers images efficiently.

![Docker Internals](https://placehold.co/600x400?text=Kernel+Namespaces+Cgroups)

## Lab: Explore Namespaces

Run a container and check its PID namespace.

```bash
docker run --rm -it alpine ps aux
```

Inside the container, PID 1 is the shell. On the host, it's a random high number.
