---
title: Getting Started
---

<h1>Getting Started</h1>

The following is a simple walk-through to familiarize you with how GoBackup works.

If you have not yet installed GoBackup, see the [Installation](/installation) page.

## Generating config file

```bash
$ touch ~/.gobackup/gobackup.yml
```

> NOTE: Or put config file in there: `/etc/gobackup/gobackup.yml`

And then edit config file like this:

```yml
models:
  my_app:
    compress_with:
      type: tgz
    store_with:
      type: local
      path: /data/backups
    databases:
      my_app:
        database: my_app_production
        type: mysql
        host: localhost
        port: 3306
        username: root
    archive:
      includes:
        - /var/www/my_app/uploads
        - /var/www/my_app/shared/ssl
```

## Run backup

```bash
$ gobackup perform
```

```
2017/09/08 06:47:36 ======== my_app ========
2017/09/08 06:47:36 WorkDir: /tmp/gobackup/1504853256396379166

2017/09/08 06:47:36 ------------- Databases --------------
2017/09/08 06:47:36 => database | MySQL: my_app
2017/09/08 06:47:36 Dump mysql dump to /tmp/gobackup/1504853256396379166/mysql/my_app/my_app_production.sql
2017/09/08 06:47:36 ----------- End databases ------------

2017/09/08 06:47:36 ------------- Compressor --------------
2017/09/08 06:47:36 => Compress with Tgz...
2017/09/08 06:47:39 -> /tmp/gobackup/2017.09.08.06.47.39.tar.gz
2017/09/08 06:47:39 ----------- End Compressor ------------

2017/09/08 06:47:39 => storage | Local
2017/09/08 06:47:39 -> Copying...
2017/09/08 06:47:39 -> /data/backups/my_app/2017.09.08.06.47.39.tar.gz

2017/09/08 06:48:04 Cleanup temp dir...
2017/09/08 06:48:04 ======= End my_app =======
```

## Check your backup files

```
$ ls /data/backups/my_app/
```

