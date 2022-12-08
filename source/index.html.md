---
title: Simple tool for backup your databases, files to cloud storages.
---

<div class="welcome">
  <img class="logo" src="https://user-images.githubusercontent.com/5518/205909959-12b92929-4ac5-4bb5-9111-6f9a3ed76cf6.png" alt="GoBackup" />
  <h1>GoBackup</h1>
  <h2>Simple tool for backup your databases, files to cloud storages.</h2>
  <p class="badges">
    <a href="https://github.com/gobackup/gobackup/actions?query=workflow%3AGo"><img src="https://github.com/gobackup/gobackup/workflows/Go/badge.svg" alt="Build Status" /></a>
   <a href="https://github.com/gobackup/gobackup/releases"><img src="https://img.shields.io/github/v/release/gobackup/gobackup?label=Version&color=1" alt="GitHub release (latest by date)"></a>
   <a href="https://hub.docker.com/r/huacnlee/gobackup"><img src="https://img.shields.io/docker/v/huacnlee/gobackup?label=Docker&color=blue" alt="Docker Image Version (latest server)"></a>
  </p>
</div>

<pre style="text-align: center">curl -sSL https://gobackup.github.io/install | sh</pre>

GoBackup is a fullstack backup tool design for web servers similar with [backup/backup](https://github.com/backup/backup), work with Crontab to backup automatically.

You can write a config file, run `gobackup perform` command by once to dump database as file, archive config files, and then package them into a single file.

It's allow you store the backup file to local, FTP, SCP, S3 or other cloud storages.

GoBackup 是一个类似 [backup/backup](https://github.com/backup/backup) 的一站式备份工具，为中小型服务器／个人服务器而设计，配合 Crontab 以实现定时备份的目的。

使用 GoBackup 你可以通过一个简单的配置文件，一次（执行一个命令）将服务器上重要的（数据库、配置文件）东西导出、打包压缩，并备份到指定目的地（如：本地路径、FTP、云存储...）。

## Features

- No dependencies.
- Multiple Databases source support.
- Multiple Storage type support.
- Archive paths or files into a tar.
- Split large backup file into multiple parts.
- Run as daemon to backup in schedully.

## Current Support status

### Databases

- MySQL
- PostgreSQL
- Redis - `mode: sync/copy`
- MongoDB

### Archive

Use `tar` command to archive many file or path into a `.tar` file.

### Compressor

| Type                            | Extension   | Parallel Support by |
| ------------------------------- | ----------- | ------------------- |
| `gz`, `tgz`, `taz`, `tar.gz`    | `.tar.gz`   | pigz                |
| `Z`, `taZ`, `tar.Z`             | `.tar.Z`    |                     |
| `bz2`, `tbz`, `tbz2`, `tar.bz2` | `.tar.bz2`  | pbzip2              |
| `lz`, `tar.lz`                  | `.tar.lz`   |                     |
| `lzma`, `tlz`, `tar.lzma`       | `.tar.lzma` |                     |
| `lzo`, `tar.lzo`                | `.tar.lzo`  |                     |
| `xz`, `txz`, `tar.xz`           | `.tar.xz`   | pixz                |
| `zst`, `tzst`, `tar.zst`        | `.tar.zst`  |                     |
| `tar`                           | `.tar`      |                     |
| default                         | `.tar`      |                     |

### Encryptor

- OpenSSL - `aes-256-cbc` encrypt

### Storages

<ul>
  <li><a href="/configuration/storages/local">Local</a></li>
  <li><a href="/configuration/storages/ftp">FTP</a></li>
  <li><a href="/configuration/storages/scp">SCP</a></li>
  <li><a href="/configuration/storages/s3">AWS S3</a></li>
  <li><a href="/configuration/storages/oss">Aliyun OSS</a></li>
  <li><a href="/configuration/storages/gcs">Google Cloud Storage</a></li>
  <li><a href="/configuration/storages/r2">Cloudflare R2</a></li>
  <li><a href="/configuration/storages/spaces">DigitalOcean Spaces</a></li>
  <li><a href="/configuration/storages/b2">Backblaze B2</a></li>
  <li><a href="/configuration/storages/cos">QCloud COS</a></li>
  <li><a href="/configuration/storages/us3">UCloud US3</a></li>
  <li><a href="/configuration/storages/kodo">Qiniu Kodo</a></li>
</ul>
