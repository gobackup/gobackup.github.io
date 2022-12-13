---
title: Notifiers
---

> since: 1.5.0

# Notifiers

GoBackup Notifiers for send notifications to your, when the backup has been successfully or failed.

For example the success message:

```
[GoBackup] Backup of demo completed successfully

Backup of demo completed successfully at 2022-12-13 10:31:20.419711 +0800 CST
```

## Configuration

Each model you can use `notifier` config key to special which notifier to use.

The `on_success`, `on_failure` option (default: `true`) for toggle when backup has been successfully or failed.

For example:

```yml
models:
  my_app:
    storages:
      local:
        type: local
        keep: 10
      s3:
        type: s3
        ...
    notifiers:
      discord:
        type: discord
        url: https://discordapp.com/api/webhooks/1051827238108135424/lWrAw9okY-6LCimnWlHn3pKMr-e3rr4fWn5rKgcjfn92n_RiZbRK9M7Kse-esKDBepV21
        on_success: false
      github:
        type: github
        url: https://github.com/gobackup/gobackup/pull/111
        token: xxxxxxxxxxxx
        on_failure: false
```

After that, when the backup has been successfully or failed, GoBackup will send the notification to your.

<img src="https://user-images.githubusercontent.com/5518/207214792-055c99a2-5b6c-406b-85ff-f8f56fbd05da.png" style="max-width: 650px">
