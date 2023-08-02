---
title: "Device42 Restore"
sidebar_position: 7
---

Steps to do a restore from a backup file. **Note that backup and restore versions must match EXACTLY for a backup / restore scenario to be supported!**

### Important Steps before a Restore

When restoring from a Back-up file it is important to note if the back-up was created with the "Backup Meta Data" option selected.

Choosing the "Backup Metadata" option will include the password passphrase, Active Directory settings, backup passphrase, and any appliance manager settings in the backup as well.

If Meta Data was not included in the back-up these settings and options will need to be re-entered into the recently restored appliance.

Bullet list of settings included in Metadata:

- Passphrases for Back-Up's and Password Encryption
- Language
- Time
- SSL/HTTPS
- host/hostname info
- All appliance manager settings (Including back-up schedules)
- All certificates

If you have forgotten the password encryption phrase, you can create a new backup by clicking Set Passphrase, then clicking Clear Passphrase, creating a new passphrase, and creating a new backup.

Active directory settings are crucial for logging back in. Otherwise, you can use local accounts to log back in after the restore and add active directory settings later.

**If you are doing a restore and have only active directory users (no device42-only users), you will need to manually add the Active Directory Settings prior to the restore.**

### Restore

![Restore](/assets/images/restore-15.png)

Restore will delete all current data in the appliance. If you are doing a test restore, we recommend the following two options:

1. Spin up a new device42 virtual appliance and restore there. Note: A second instance can also be used for disaster recovery / business continuity purposes. As described in our ["Warm HA Configuration."](administration/appliance-manager/warm-ha-setup-failover-and-automated-backups.md)

(Your license allows one production and one backup instance.)

1. Take a VM snapshot first and then do a test restore.

To do the restore, you will need to enter the passphrase you used for the backup as shown above.

Then, browse to the backup file you want to restore from.

You will need to restart the application once the restore is finished.

![](/assets/images/restart-application.png)
