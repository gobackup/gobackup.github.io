---
title: Qiniu Kodo
---

# Qiniu Kodo

> since: v1.2.0

Storage backup file to [Qiniu Kodo](https://www.qiniu.com/products/kodo), this is base on S3 compatible.

## Storage config keys

`type: kodo`

- `bucket` - Qiniu Kodo bucket name
- `region` - Qiniu Kodo region, default: `cn-east-1`
- `path` - remote path for save
- `access_key_id` - Qiniu API key
- `secret_access_key` - Qiniu API secret
- `timeout` - Set timeout of remote upload, default: `300`
- `max_retries` - Max retries, default: 3

## Regions

https://developer.qiniu.com/kodo/4088/s3-access-domainname
