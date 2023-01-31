---
title: Local storage
---

# Local storage

Storage backup file in local path.

## Storage config keys

`type: local`

- `path` - path you need to store backup files.

https://github.com/gobackup/gobackup/blob/main/storages/local.go

## For example

```yml
models:
  my_backup:
    storages:
      local:
        type: local
        path: /data/my-backups
```
