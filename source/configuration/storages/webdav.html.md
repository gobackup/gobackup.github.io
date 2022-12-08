---
title: WebDAV storage
---

# WebDAV storage

> since: 1.3.0

Storage backup file to [WebDAV](http://www.webdav.org).

## Storage config keys

`type: webdav`

- `root` - WebDAV server root, example: `http://localhost:8080`
- `path` - WebDAV remote path for save
- `username` - username
- `password` - password

https://github.com/gobackup/gobackup/blob/master/storages/webdav.go
