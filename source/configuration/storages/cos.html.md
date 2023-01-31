---
title: QCloud COS
---

# QCloud COS

> since: v1.2.0

Storage backup file to [QCloud COS](https://cloud.tencent.com/product/cos), this is based on S3 compatibility.

## Storage config keys

`type: cos`

- `bucket` - QCloud COS bucket name
- `region` - QCloud COS region, default: `s3-cn-bj`
- `path` - remote path for save
- `access_key_id` - QCloud API key
- `secret_access_key` - QCloud API secret
- `timeout` - Set timeout of remote upload, default: `300`
- `max_retries` - Max retries, default: 3

## Regions

https://cloud.tencent.com/document/product/436/6224
