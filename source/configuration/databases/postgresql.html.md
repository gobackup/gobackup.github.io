---
title: Configuration - PostgreSQL database
---

# PostgreSQL database

GoBackup use `pg_dump` utility to backup PostgreSQL database into a `.sql` file.

## Database config keys

`type: postgresql`

- `host` - PostgreSQL server host, default: `localhost`
- `port` - PostgreSQL server port, default: `5432`
- `socket` - PostgreSQL server, if use socket, for example: `/var/run/postgresql/.s.PGSQL.5432`, default: ``
- `database` - database name
- `username` - default: `root`
- `password`
- `args` - More additions arguments for `pg_dump`

https://github.com/gobackup/gobackup/blob/main/database/postgresql.go

## Configuration Example

```yml
models:
  my_app:
    databases:
      my_app:
        type: postgresql
        host: localhost
        port: 5432
        database: my_app_production
        username: root
        password: root
        args: --if-exists --no-owner
```
