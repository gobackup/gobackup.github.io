---
title: Baidu BOS
---

# Baidu BOS

> since: v1.5.0

Storage backup file to [Baidu BOS](https://cloud.baidu.com/product/bos.html), this is base on S3 compatible.

## Storage config keys

`type: bos`

- `bucket` - QCloud COS bucket name
- `region` - QCloud COS region, default: `bj`
- `path` - remote path for save
- `access_key_id` - Baidu BOS Access Key ID
- `secret_access_key` - Baidu BOS Access Key secret
- `timeout` - Set timeout of remote upload, default: `300`
- `max_retries` - Max retries, default: 3

## Regions

https://cloud.baidu.com/doc/BOS/s/akrqd2wcx
