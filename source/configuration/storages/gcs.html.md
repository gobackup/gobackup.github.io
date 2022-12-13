---
title: Google Cloud Storage
---

# Google Cloud Storage

> since: v1.2.0

Storage backup file to [Google Cloud Storage](https://cloud.google.com/storage).

## Storage config keys

`type: gcs`

- `bucket` - Bucket name
- `path` - remote path for save
- `timeout` - Timeout in seconds, default: `300`, keep `0` to no limit.
- `credentials` - JSON text of the Google Cloud Application Credentials, optional
- `credentials_file` - Path to the Google Cloud Application Credentials file, optional

For example:

```yml
models:
  my_backup:
    storages:
      google_cloud:
        type: gcs
        bucket: my-bucket
        path: my-backups/path
        timeout: 300
        credentials: |
          {
            "type": "service_account",
            "project_id": "your-project",
            "private_key_id": "d34a8bec191068177e7ce6c92c4a249d",
            "private_key": "-----BEGIN PRIVATE KEY-----\n....\n-----END PRIVATE KEY-----\n",
            "client_email": "test@your.iam.gserviceaccount.com",
            "client_id": "12345",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/gobackup-test%40your.iam.gserviceaccount.com"
          }
```

https://github.com/gobackup/gobackup/blob/main/storage/gcs.go
