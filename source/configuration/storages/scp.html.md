---
title: SCP storage
---

# SCP storage

Storage backup file to remote SSH server, like `scp` command.

## Storage config keys

`type: scp`

- `host` - SSH server host
- `port` - SSH server port, default: `22`
- `path` - SSH remote path for save
- `timeout` - Set timeout of remote upload, default: `300`
- `private_key` - Your SSH private key, default: `~/.ssh/id_rsa`
- `username` - SSH username
- `password` - SSH password

https://github.com/gobackup/gobackup/blob/master/storages/scp.go
