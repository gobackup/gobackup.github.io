---
title: Encrypt with OpenSSL
---

# Encrypt with OpenSSL

Create a password-protected backup file with `my_password` as the password.

```yml
encrypt_with:
  type: openssl
  password: my_password
  # (enabled by default) improves the security.
  salt: true
  # makes encrypted backups readable in text editors, emails, etc.
  base64: false
```

This will encrypt your backup file using OpenSSL `aes-256-cbc`.

## Decrypting your backup file

To decrypt your backup, use the following command:

```bash
$ openssl aes-256-cbc -d -base64 -in my_backup.tar.gz.enc -out my_backup.tar.gz
```

`-base64` is only required if you used `base64: true`.

You will be prompted for your password.