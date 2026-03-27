# 12. Multi-stage Docker Builds

## Separating Build from Runtime

You don't need your build tools (compiler, headers, test runners) in your production image. Multi-stage builds let you use one image to build and another to run.

### How It Works

1.  **Stage 1 (Builder):** Compiles the code.
2.  **Stage 2 (Runner):** Copies only the compiled binary/artifacts from Stage 1.

![Multi-stage Build](https://placehold.co/600x400?text=Builder+Image+Artifact+Runtime+Image)

## Lab: Go Application Example

A Go binary is tiny, but the Go compiler is huge.

```dockerfile
# Build Stage
FROM golang:1.19 AS builder
WORKDIR /app
COPY . .
RUN go build -o myapp main.go

# Run Stage
FROM alpine:latest
WORKDIR /root/
COPY --from=builder /app/myapp .
CMD ["./myapp"]
```

The final image will be ~10MB instead of ~800MB!
