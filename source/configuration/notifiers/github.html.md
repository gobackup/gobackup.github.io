---
title: GitHub Issue Comment - Notifier
---

# GitHub Issue Comment - Notifier

> since: 1.5.0

This notifier send notification by create comment to a GitHub Issue or Pull Request. Then you can subscribe the issue or pull request to get the notification.

## Get GitHub Access Token

You need to create a [Personal Access Token](https://github.com/settings/tokens/new) and give this token permissions:

- `repo`

<img src="https://user-images.githubusercontent.com/5518/207225184-44b80745-8cc5-431b-ad0e-6fcde8892d54.png" style="max-width: 650px">

And then, you well get your `ACCESS_TOKEN`.

## Configuration

```yml
models:
  my_app:
    storages:
      local:
        type: local
        keep: 10
    notifiers:
      github_issue:
        type: github
        url: https://github.com/gobackup/gobackup/pull/111
        token: your-github-access-token
```

## Message Example

<img src="https://user-images.githubusercontent.com/5518/207224986-49984fef-794a-40bc-873e-e635033b0cc9.png" style="max-width: 650px">
