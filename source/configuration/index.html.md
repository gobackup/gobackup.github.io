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
    # storage
    store_with:
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
    compress_with:
      type: tgz
    store_with:
      type: local
      path: /data/backups/my_app2
    databases:
      ...
```
