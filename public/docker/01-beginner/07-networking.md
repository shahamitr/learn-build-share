# 07. Docker Networking Basics

## Connecting Containers

Containers need to talk to each other (e.g., Web App -> Database).

### Network Drivers

1.  **Bridge:** The default. Containers on the same bridge network can communicate by IP. If you create a custom bridge, they can communicate by container name (DNS).
2.  **Host:** Removes network isolation. The container shares the host's networking namespace.
3.  **None:** No networking.

![Docker Networking](https://placehold.co/600x400?text=Bridge+Network+Diagram)

## Lab: Connect Two Containers

### Step 1: Create a Network

```bash
docker network create my-net
```

### Step 2: Run Server

Run a container named `server` on this network.

```bash
docker run -d --name server --network my-net nginx
```

### Step 3: Run Client

Run a container named `client` on the same network and try to `curl` the server.

```bash
docker run --rm --network my-net curlimages/curl http://server
```

It works! The `client` container resolved `http://server` to the correct IP address automatically.
