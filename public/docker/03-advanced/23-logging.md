# 23. Docker Logging Drivers

## Managing Logs

Where do `docker logs` go? By default, to a JSON file on disk.

### Logging Drivers

You can send logs directly to external systems.

1.  **json-file:** Default.
2.  **syslog:** Send to system log daemon.
3.  **journald:** Send to systemd journal.
4.  **awslogs:** Send to CloudWatch.
5.  **fluentd:** Send to Fluentd aggregator.

![Logging Architecture](https://placehold.co/600x400?text=Container+Driver+Destination)

## Lab: Use Syslog

Start a container that logs to syslog.

```bash
docker run --log-driver syslog alpine echo "Hello Syslog"
```

Check `/var/log/syslog` (on Linux) to see the message.
