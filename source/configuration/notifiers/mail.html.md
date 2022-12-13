---
title: Mail - Notifier
---

# Mail - Notifier

> since: 1.5.0

Mail notifier will send email to your email address by SMTP.

## Configuration

```yml
models:
  my_app:
    storages:
      local:
        type: local
        keep: 10
    notifiers:
      mail:
        type: mail
        host: smtp.example.com
        port: 587
        username: your-username
        password: your-password
        from: from@example.com
        to: to@example.com
```
