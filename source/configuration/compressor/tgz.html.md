---
title: Compress with TGZ
---

# Compress with TGZ

Use `.tar.gz` format to compress backup file.

```yml
compress_with:
  type: tgz
```

## Speedup with pigz

> since: v1.1.2

[Pigz](https://zlib.net/pigz) is a parallel implementation of gzip for modern
multi-processor for speedup compress.

When you has been installed pigz, GoBackup will auto enable it.

### Install on Ubuntu

```bash
$ sudo apt-get install pigz
```

### Install on macOS

```bash
$ brew install pigz
```
