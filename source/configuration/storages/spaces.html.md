---
title: DigitalOcean Spaces
---

# DigitalOcean Spaces

> since: v1.2.0

Storage backup file to [DigitalOcean Spaces](https://www.digitalocean.com/products/spaces/), this is base on S3 compatible.

## Storage config keys

`type: spaces`

- `bucket` - DigitalOcean bucket name
- `region` - DigitalOcean Spaces region, default: `nyc1`
- `path` - remote path for save
- `access_key_id` - DigitalOcean Spaces key
- `secret_access_key` - DigitalOcean Spaces secret
- `timeout` - Set timeout of remote upload, default: `300`
- `max_retries` - Max retries, default: 3

## Regions

https://docs.digitalocean.com/products/platform/availability-matrix
