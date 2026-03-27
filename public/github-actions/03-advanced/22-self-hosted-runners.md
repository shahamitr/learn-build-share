# 22. Self-Hosted Runners

## Why Self-Hosted?

*   **Hardware:** Need GPUs or specific hardware.
*   **Software:** Need pre-installed licensed software.
*   **Network:** Need access to internal private networks.
*   **Cost:** Free for public/private repos (you pay for the machine).

## Configuration

1.  Settings > Actions > Runners > New self-hosted runner.
2.  Follow instructions to download and configure the runner agent on your machine.

## Lab: Configure Self-Hosted Runner (Conceptual)

*Note: This requires a server/VM.*

1.  **Download:** Download runner package.
2.  **Config:** `./config.sh --url ... --token ...`
3.  **Run:** `./run.sh`
4.  **Workflow:** Change `runs-on: ubuntu-latest` to `runs-on: self-hosted`.
