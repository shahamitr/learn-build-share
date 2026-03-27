# 27. Docker Image Scanning

## Vulnerability Management

Dependencies in your image might have CVEs (Common Vulnerabilities and Exposures).

### Tools

1.  **Docker Scan:** Built-in (powered by Snyk).
2.  **Trivy:** Open-source, fast scanner.
3.  **Clair:** Static analysis.

![Vulnerability Scan](https://placehold.co/600x400?text=Image+Scanner+Report)

## Lab: Scan an Image

If you have Docker Desktop, try:

```bash
docker scan nginx
```

Or use Trivy (if installed):

```bash
trivy image nginx
```
