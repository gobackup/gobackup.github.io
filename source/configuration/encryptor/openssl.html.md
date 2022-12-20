---
title: Encrypt with OpenSSL
---

# Encrypt with OpenSSL

Create a password-protected backup file with `my_password` as the password.

## Configuation

- `type: openssl`
- `chiper` - The cipher to use, default: `aes-256-cbc`.
- `password` - Set password to encrypt the backup file, required.
- `salt` - Use a salt in the key derivation routines, default: `true`
- `base64` - Whether to encode the encrypted file with base64, default: `false`
- `args` - Additional arguments to pass to the openssl command.

For example

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
