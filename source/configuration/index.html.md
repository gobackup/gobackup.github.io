---
title: Configuration
---

<h1>Configuration</h1>

GoBackup will read config from follow paths:

- `~/.gobackup/gobackup.yml`
- `/etc/gobackup.yml`

You must use [YAML](http://yaml.org/) format.

## Full config struct

```yml
# root
models:
  # special a model name
  model_name1:
    # config compress
    compress_with:
      # compress type
      type: tgz
    split_with:
      # Split backup file into multiple files, each file in 1gb.
      chunk_size: 1g
    # storage
    storages:
      ftp:
        # storage type
        type: ftp
        # other config for this storage type
        host: ftp.your-host.com
        username: ...
        password: ...
    # database source support multiple instance
    databases:
      # special a database name
      my_app1:
        # database type
        type: mysql
        # other config for this database type
        host: localhost
        database: my_app_production
        username: root
      my_app_redis1:
        type: redis
        host: localhost
        port: 6379
        mode: sync
      my_app_redis2:
        type: redis
        host: localhost
        port: 6380
        mode: sync
    # archive config
    archive:
      # archive multiple files / directoies
      includes:
        - /home/git/.ssh/
        - /etc/mysql/my.conf
        - /etc/nginx/nginx.conf
        - /etc/nginx/conf.d
        - /etc/redis/redis.conf
        - /etc/logrotate.d/
      # path will exclude
      excludes:
        - /home/ubuntu/.ssh/known_hosts
        - /etc/logrotate.d/syslog
  # another model
  my_app2:
    databases:
      mysql:
        type: mysql
        host: localhost
        database: my_app_production
      redis:
        type: redis
        host: localhost
        port: 6379
    compress_with:
      type: tgz
    storages:
      local_a:
        type: local
        path: /data/backups/my_app2
      cloud_s3:
        type: s3
        keep: 20
        bucket: your-bucket
        region: ap-southeast-1
        path: backups
        access_key_id: xxxxx
        secret_access_key: xxxxxxxx
```

More example: https://github.com/gobackup/gobackup/blob/main/gobackup_test.yml
