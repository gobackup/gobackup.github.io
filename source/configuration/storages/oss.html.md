---
title: Aliyun OSS storage
---

# Aliyun OSS storage

Storage backup file to [Aliyun OSS](https://www.aliyun.com/product/oss).

## Storage config keys

`type: oss`

- `bucket` - OSS bucket name
- `endpoint` - Endpoint of OSS server, default: `oss-cn-beijing.aliyuncs.com`
- `path` - remote path for save, default: `/`
- `access_key_id` - Aliyun access_key_id
- `access_key_secret` - Aliyun access_key_secret
- `timeout` - Set timeout of remote upload, default: `300`
- `max_retries` - Max retries, default: 3

https://github.com/gobackup/gobackup/blob/master/storages/oss.go
