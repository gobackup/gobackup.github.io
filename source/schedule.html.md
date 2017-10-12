---
title: Backup Schedule
---

# Backup Schedule

You may want run backup in scheduled, you need [Crontab](https://en.wikipedia.org/wiki/Cron):

```bash
$ crontab -e
```

Append this line and save it:

```
0 0 * * * /usr/local/bin/gobackup perform >> ~/.gobackup/gobackup.log
```

> 0 0 * * * means run at 0:00 AM, every day.

And after a day, you can check up the execute status by ~/.gobackup/gobackup.log.