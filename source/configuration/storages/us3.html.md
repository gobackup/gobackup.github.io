---
title: UCloud US3
---

# UCloud US3

> since: v1.2.0

Storage backup file to [UCloud US3](https://www.ucloud.cn/site/product/ufile.html), this is based on S3 compatibility.

## Storage config keys

`type: us3`

- `bucket` - US3 bucket name
- `region` - US3 region, default: `s3-cn-bj`
- `path` - remote path for save
- `access_key_id` - UCloud API key
- `secret_access_key` - UCloud API secret
- `timeout` - Set timeout of remote upload, default: `300`
- `max_retries` - Max retries, default: 3

## Regions

https://docs.ucloud.cn/ufile/s3/s3_introduction
