---
title: MongoDB database
---

# MongoDB database

GoBackup use `mongodump` utility to backup MongoDB database files.

## Database config keys

`type: mongodb`

- `host` - server host, default: `127.0.0.1`
- `port` - server port, default: `27017`
- `database` - database name
- `username` - default: `root`
- `password`
- `authdb` - authenticationDatabase arg or `mongodump`
- `oplog` - oplog arg or `mongodump`, default: `false`


https://github.com/huacnlee/gobackup/blob/master/database/mongodb.go
