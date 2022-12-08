---
title: Simple tool for backup your databases, files to cloud storages.
---

<div class="welcome">
  <img class="logo" src="/images/gobackup.svg" alt="GoBackup" />
  <h1>GoBackup</h1>
  <h2>Simple tool for backup your databases, files to cloud storages.</h2>
  <p class="badges">
    <a href="https://github.com/gobackup/gobackup/actions?query=workflow%3AGo"><img src="https://github.com/gobackup/gobackup/workflows/Go/badge.svg" alt="Build Status" /></a>
   <a href="https://github.com/gobackup/gobackup/releases"><img src="https://img.shields.io/github/v/release/gobackup/gobackup?label=Version&color=1" alt="GitHub release (latest by date)"></a>
   <a href="https://hub.docker.com/r/huacnlee/gobackup"><img src="https://img.shields.io/docker/v/huacnlee/gobackup?label=Docker&color=blue" alt="Docker Image Version (latest server)"></a>
  </p>
</div>

GoBackup is a fullstack backup tool design for web servers similar with [backup/backup](https://github.com/backup/backup), work with Crontab to backup automatically.

You can write a config file, run `gobackup perform` command by once to dump database as file, archive config files, and then package them into a single file.

It's allow you store the backup file to local, FTP or other cloud storages.

---

GoBackup 是一个类似 backup/backup 的一站式备份工具，为中小型服务器／个人服务器而设计，配合 Crontab 以实现定时备份的目的。

使用 GoBackup 你可以通过一个简单的配置文件，一次（执行一个命令）将服务器上重要的（数据库、配置文件）东西导出、打包压缩，并备份到指定目的地（如：本地路径、FTP、云存储...）。

## Features

- No deprecations.
- Multiple Databases source support.
- Multiple Storage type support.
- Archive paths or files into a tar.

### Databases

- MySQL
- PostgreSQL
- Redis - `mode: sync/copy`
- MongoDB

### Archive

Use `tar` command to archive many file or path into a `.tar` file.

### Compressor

- Tgz - `.tar.gz`

### Encryptor

- OpenSSL

### Storages

- Local
- FTP
- SCP - Upload via SSH copy
- [Amazon S3](/configuration/storages/s3/)
- [Aliyun OSS](/configuration/storages/oss)
- [Google Cloud Storage](/configuration/storages/gcs)
- [Backblaze B2 Cloud Storage](/configuration/storages/b2)
- [Cloudflare R2](/configuration/storages/r2)
- [DigitalOcean Spaces](/configuration/storages/spaces)
- [QCloud COS](/configuration/storages/cos)
- [UCloud US3](/configuration/storages/us3)
- [Qiniu Kodo](/configuration/storages/kodo)
