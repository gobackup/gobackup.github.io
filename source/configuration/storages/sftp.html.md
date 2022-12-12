---
title: SFTP storage
---

# SFTP storage

Storage backup file to remote SFTP server.

## Storage config keys

`type: sftp`

- `host` - FTP server host
- `port` - FTP server port, default: `22`
- `path` - FTP remote path for save
- `timeout` - Set timeout of remote upload, default: `300`
- `username` - username
- `password` - password
- `private_key` - Private Key of the SSH key pair, default: `~/.ssh/id_rsa`.
- `passpharase` - Password of the private key, if is present.

https://github.com/gobackup/gobackup/blob/master/storages/ftp.go
