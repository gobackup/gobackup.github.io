---
title: Configuration - Redis database
---

# Redis database

GoBackup use `redis-cli` utility to export MySQL database into a `dump.db` file.

## Database config keys

`type: mysql`

- `mode` - Redis dump mode, default: `sync`
  - `sync` - For remote Redis server use sync to export.
  - `copy` - For local Redis server use copy, just copy Redis `dump.db`
- `host` - MySQL server host, default: `127.0.0.1`
- `port` - MySQL server port, default: `6379`
- `invoke_save` - Invoke save before backup, default: `true`
- `password` - If your Redis server need, default: ``
- `rdb_path` - `mode: copy` need special this config, default: `/var/lib/redis/dump.rdb`


https://github.com/huacnlee/gobackup/blob/master/database/redis.go
