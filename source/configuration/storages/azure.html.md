---
title: Microsoft Azure Blob Storage
---

# Microsoft Azure Blob Storage

> since: v1.4.0

Storage backup file to [Microsoft Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/).

You must visit [Azure Portal](https://portal.azure.com) to create a storage account and a container.

And then visit [Azure Active Directory / App registrations](https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/RegisteredApps), and go to **Certificates & secrets**, click **New Client secret** to get a `client_secret`.

## Storage config keys

`type: azure`

- `account` - Azure Storage Account name, alias: `bucket`
- `container` - Container name
- `tenant_id` - Azure Tenant ID, you can find in [Azure Active Directory - Overview](https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/Overview) page, e.g. `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
- `client_id` - Azure Client ID, you can find in [Azure Active Directory - App registrations](https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/RegisteredApps) list (The column named **Application (client) ID**) after you have been created a App registration, e.g. `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
- `client_secret` - Azure Client Secret
- `timeout` - Timeout in seconds, default: `300`, keep `0` to no limit.

## Config example

```yml
models:
  my_backup:
    storages:
      azure:
        type: azure
        account: gobackup-test
        container: backups
        tenant_id: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
        client_id: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
        client_secret: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        timeout: 300
```

## Links

- [How to find your Azure Active Directory tenant ID](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-how-to-find-tenant)
