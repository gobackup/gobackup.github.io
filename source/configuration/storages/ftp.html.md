---
title: FTP storage
---

# FTP storage

Storage backup file to remote FTP server.

## Storage config keys

`type: ftp`

- `host` - FTP server host
- `port` - FTP server port, default: `21`
- `path` - FTP remote path for save
- `timeout` - Set timeout of remote upload, default: `300`
- `username` - username
- `password` - password

https://github.com/gobackup/gobackup/blob/master/storages/ftp.go
