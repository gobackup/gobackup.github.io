---
title: Configuration - SQLite database
---

# SQLite database

GoBackup use `sqlite` utility to export SQLite database into a `.sql` file.

So you need install `sqlite3` first.

```bash
$ sudo apt-get install sqlite3
```

## Database config keys

`type: sqlite`

- `path` - The path of the SQLite 3 database file, for example: `/data/db.sqlite3`.

https://github.com/gobackup/gobackup/blob/main/database/sqlite.go

## Configuration Example

```yml
models:
  my_app:
    databases:
      my_app:
        type: sqlite
        path: /var/data/my_app.sqlite3
```
