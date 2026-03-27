# 24. Container Monitoring

## Observability

You need to know if your containers are healthy.

### Metrics to Watch

*   CPU Usage
*   Memory Usage
*   Network I/O
*   Disk I/O

### Tools

1.  **docker stats:** Real-time CLI view.
2.  **Prometheus + Grafana:** The industry standard for metrics collection and visualization.
3.  **cAdvisor:** Google's tool for container metrics.

![Monitoring Dashboard](https://placehold.co/600x400?text=Grafana+Prometheus+cAdvisor)

## Lab: Docker Stats

Run a few containers and watch them live.

```bash
docker stats
```
