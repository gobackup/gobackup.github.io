---
title: DingTalk - Notifier
---

# DingTalk (钉钉) - Notifier

> since: 1.5.0

[DingTalk](https://www.dingtalk.com) is a team communication tool.

We can send DingTalk message by use [Webhook API](https://open.dingtalk.com/document/group/custom-robot-access), you can follow the [DingTalk Webhook Guide](https://open.dingtalk.com/document/group/custom-robot-access) to get the webhook `url`.

The DingTalk webhook URL like this:

```
https://oapi.dingtalk.com/robot/send?access_token=XXXXXX
```

## Configuration

```yml
models:
  my_app:
    storages:
      local:
        type: local
        keep: 10
    notifiers:
      dingtalk:
        type: feishu
        url: https://oapi.dingtalk.com/robot/send?access_token=102f9b03e717078acf830a692e78a07092aca8b6a7fc3f5c2c048baf25de1370r
        on_success: false
```
