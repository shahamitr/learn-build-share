# 11. Optimizing Dockerfiles

## Best Practices for Images

Efficient images are small, secure, and fast to build.

### Layer Optimization

*   **Combine RUN instructions:** Each `RUN` creates a layer. Combine `apt-get update` and `apt-get install` to reduce layers and ensure cache consistency.
*   **Order Matters:** Put instructions that change frequently (like `COPY . .`) at the bottom. Put dependencies (like `npm install`) higher up to leverage caching.

![Layer Caching](https://placehold.co/600x400?text=Base+Deps+App+Code)

## Lab: Optimize This Dockerfile

### The Bad Dockerfile

```dockerfile
FROM node:18
COPY . .
RUN npm install
CMD ["node", "app.js"]
```

### The Optimized Dockerfile

Why is this better?

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
CMD ["node", "app.js"]
```

1.  Uses `alpine` (smaller base).
2.  Copies `package.json` first (caches `npm install` layer).
3.  Uses `npm ci` (clean install).
