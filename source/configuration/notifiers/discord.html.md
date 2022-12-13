---
title: Discord - Notifier
---

# Discord - Notifier

> since: 1.5.0

[Discord](https://discordapp.com) is a free voice, video and text chat app for gamers.

We can send Discord message by use [Webhook API](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks), you can follow the [Discord Webhook Guide](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) to get the webhook `url`.

## Configuration

```yml
models:
  my_app:
    storages:
      local:
        type: local
        keep: 10
    notifiers:
      discord:
        type: discord
        url: https://discordapp.com/api/webhooks/1051827238108135424/lWrAw9okY-6LCimnWlHn3pKMr-e3rr4fWn5rKgcjfn92n_RiZbRK9M7Kse-esKDBepV21
```

## Message Example

<img src="https://user-images.githubusercontent.com/5518/207214792-055c99a2-5b6c-406b-85ff-f8f56fbd05da.png" style="max-width: 650px">
