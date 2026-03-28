# Ethical Hacking & Tools

In this module, we'll explore the basics of ethical hacking and the tools used in the process.

## The 5 Phases of Hacking
1. **Reconnaissance (Footprinting):** Gathering information about the target (Passive vs Active). Tools: Google Dorking, Whois, Shodan, Maltego.
2. **Scanning:** Identifying open ports, services, and vulnerabilities. Tools: Nmap, Nessus, Nikto.
3. **Gaining Access:** Exploiting vulnerabilities to enter the system. Tools: Metasploit, Burp Suite, SQLmap.
4. **Maintaining Access:** Establishing a persistent presence (Backdoors, Rootkits).
5. **Clearing Tracks:** Deleting logs and hiding evidence of the intrusion.

## Ethical Hacking Tools (Practical)
- **Nmap (Network Mapper):**
    - `-sS`: Stealth (SYN) scan.
    - `-sV`: Service version detection.
    - `-O`: OS detection.
    - `-A`: Aggressive scan (includes OS detection, version detection, script scanning, and traceroute).
- **Metasploit Framework:**
    - **Exploit:** Code that takes advantage of a vulnerability.
    - **Payload:** Code that runs on the target after exploitation (e.g., Meterpreter).
    - **Auxiliary:** Tools for scanning, fuzzing, and sniffing.
- **Burp Suite:**
    - **Proxy:** Intercepts and modifies HTTP requests.
    - **Intruder:** Automates customized attacks (e.g., brute-forcing).
    - **Repeater:** Manually resends individual requests.
- **Netcat (The Swiss Army Knife):** Used for reading from and writing to network connections using TCP or UDP.
- **Hydra:** A very fast network logon cracker.

## Vulnerability Scanning
- **Nessus:** A widely used vulnerability scanner.
- **OpenVAS:** An open-source alternative to Nessus.
- **Nikto:** A web server scanner that tests for dangerous files, outdated versions, and other problems.

## Practical Tip
Always have written permission (a "Get Out of Jail Free" card) before performing any security testing. Use a lab environment (like TryHackMe or HackTheBox) to practice your skills legally and safely.
