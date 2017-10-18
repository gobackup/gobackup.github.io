---
title: Storage
---

# Storages

GoBackup includes the following Storages:

- [Local](local)
- [FTP](ftp)
- [SCP](scp)
- [AWS S3](s3)
- [Aliyun OSS](oss)

## Cycling Stored Backups

Each Storage supports the keep setting, which specifies how many backups to keep at this location.

For example:

```yml
models:
  my_app:
    store_with:
      type: local
      keep: 10
```

**`keep` as a Number**

If `keep` have specified and once the `keep` limit  has been reached, the older backup files will be removed.

GoBackup will save the backup histories in `~/.gobackup/cycler.json`.
