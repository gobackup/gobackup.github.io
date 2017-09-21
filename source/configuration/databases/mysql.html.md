---
title: Configuration - MySQL database
---

# MySQL database

GoBackup use `mysqldump` utility to export MySQL database into a `.sql` file.

So you need install `mysql-client` first.

```bash
$ sudo apt-get install mysql-client
```

## Database config keys

`type: mysql`

- `host` - MySQL server host, default: `localhost`
- `port` - MySQL server port, default: `3306`
- `database` - database name
- `username` - default: `root`
- `password`
- `additional_options` - Additional options for mysqldump utility, for example: `--single-transaction --quick`


https://github.com/huacnlee/gobackup/blob/master/database/mysql.go
