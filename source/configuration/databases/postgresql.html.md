---
title: Configuration - PostgreSQL database
---

# PostgreSQL database

GoBackup use `pg_dump` utility to backup PostgreSQL database into a `.sql` file.

## Database config keys

`type: postgresql`

- `host` - server host, default: `localhost`
- `port` - server port, default: `5432`
- `database` - database name
- `username` - default: `root`
- `password`

https://github.com/gobackup/gobackup/blob/master/database/postgresql.go
