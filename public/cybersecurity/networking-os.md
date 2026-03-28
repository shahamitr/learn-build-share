# Networking & OS Basics

In this module, we'll cover the fundamental building blocks of networks and operating systems.

## Networking Fundamentals
- **OSI Model (7 Layers):**
    1. **Physical:** Cables, bits.
    2. **Data Link:** MAC addresses, frames, switches.
    3. **Network:** IP addresses, packets, routers.
    4. **Transport:** TCP/UDP, segments, port numbers.
    5. **Session:** Session management.
    6. **Presentation:** Encryption, formatting.
    7. **Application:** HTTP, FTP, SMTP, DNS.
- **TCP vs UDP:**
    - **TCP (Transmission Control Protocol):** Connection-oriented, reliable, 3-way handshake (SYN, SYN-ACK, ACK).
    - **UDP (User Datagram Protocol):** Connectionless, fast, unreliable (best-effort).
- **IP Addressing:** IPv4 (32-bit) vs IPv6 (128-bit). Public vs Private IPs.
- **Common Ports:**
    - 21: FTP
    - 22: SSH
    - 23: Telnet
    - 25: SMTP
    - 53: DNS
    - 80: HTTP
    - 443: HTTPS
    - 3389: RDP

## Operating Systems Security
- **Windows Security:**
    - **User Account Control (UAC):** Prevents unauthorized changes.
    - **NTFS Permissions:** Access control for files and folders.
    - **Windows Registry:** Central database for configuration.
    - **Active Directory:** Centralized management of users and computers.
- **Linux Security:**
    - **Root User:** The superuser with absolute power.
    - **Permissions:** Read (r), Write (w), Execute (x) for Owner, Group, and Others.
    - **Sudo:** Execute commands with root privileges.
    - **Shells:** Bash, Zsh, Sh.
    - **Package Managers:** apt, yum, pacman.

## Practical Tip
Use `ipconfig` (Windows) or `ip addr` (Linux) to find your IP address. Use `ping` to test connectivity and `traceroute` (or `tracert`) to see the path to a destination.
