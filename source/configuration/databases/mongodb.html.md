---
title: MongoDB database
---

# MongoDB database

GoBackup uses `mongodump` utility to backup MongoDB database files.

## Database config keys

`type: mongodb`

- `host` - MongoDB server host, default: `127.0.0.1`
- `port` - MongoDB server port, default: `27017`
- `socket` - MongoDB server, if use socket, for example: `/tmp/mongodb-27017.sock`, default: ``
- `database` - database name
- `username` - default: ``, keep empty can use empty password.
- `password`
- `authdb` - authenticationDatabase arg or `mongodump`
- `oplog` - oplog arg or `mongodump`, default: `false`

https://github.com/huacnlee/gobackup/blob/master/database/mongodb.go

## Configuration Example

```yml
models:
  my_app:
    databases:
      my_app:
        type: mongodb
        host: 127.0.0.1
        port: 27017
        database: my_app_production
        username: root
        password: root
        oplog: true
```
