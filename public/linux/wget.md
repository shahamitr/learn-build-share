# Downloading Files

In Linux, `wget` and `curl` are powerful command-line tools for downloading files from the internet.

## Using wget

`wget` is a non-interactive network downloader. It supports HTTP, HTTPS, and FTP protocols.

To download a file, simply provide the URL:

```bash
wget https://example.com/file.zip
```

To save the downloaded file with a specific name, use the `-O` (output document) option:

```bash
wget -O custom_name.zip https://example.com/file.zip
```

To download a file in the background, use the `-b` option:

```bash
wget -b https://example.com/large_file.iso
```

## Using curl

`curl` is a tool to transfer data from or to a server. It supports many protocols.

To download a file and save it with its original name, use the `-O` (remote name) option:

```bash
curl -O https://example.com/file.zip
```

To save the downloaded file with a specific name, use the `-o` (output) option:

```bash
curl -o custom_name.zip https://example.com/file.zip
```
