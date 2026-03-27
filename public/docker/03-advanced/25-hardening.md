# 25. Docker Security Hardening

## Advanced Security

Beyond basics, you can lock down containers tightly.

### Techniques

1.  **Read-only Root Filesystem:** Prevent malware from writing to disk.
    *   `docker run --read-only ...`
2.  **Drop Capabilities:** Remove Linux capabilities (like `NET_ADMIN` or `SYS_ADMIN`) the app doesn't need.
    *   `docker run --cap-drop ALL --cap-add NET_BIND_SERVICE ...`
3.  **Seccomp Profiles:** Whitelist allowed syscalls.

![Security Layers](https://placehold.co/600x400?text=Capabilities+Seccomp+ReadOnly)

## Lab: Drop Capabilities

Try to change the system time (requires `SYS_TIME`) in a standard container vs a restricted one.

```bash
docker run --rm --cap-drop ALL alpine date -s "2020-01-01"
```

It should fail: `date: settimeofday: Operation not permitted`.
