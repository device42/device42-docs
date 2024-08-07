---
title: "Setting up backup via Device42 Appliance Manager"
sidebar_position: 18
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

Follow the steps below to set up one-time and scheduled backups in the Device42 Appliance Manager.

### Set the Passphrase

Choose a 12-20 character passphrase to encrypt the backup file. 

You will need this passphrase to restore the backup, so please save it in a safe location. This is a required step as you won't be able to do the backup until a backup passphrase is set.

![Set the passphrase](/assets/images/setting-up-backup-device42-appliance-manager/set-passphrase.png)

### One-Time Backup

Configure the backup using the available options.

Select the **Backup Meta Data** option to include the password passphrase, backup passphrase, Active Directory settings, and the following settings in the backup as well:

- Passphrases for backups and password encryption
- Language
- Time
- SSL/HTTPS
- Host/hostname info
- All appliance manager settings (including backup schedules)
- All certificates

![Run the backup](/assets/images/setting-up-backup-device42-appliance-manager/run-backup-now.png)

### Backup to an SFTP Server

The backup file can be scheduled to be sent to a SFTP server. All fields are required.

![Backup to an SFTP server](/assets/images/setting-up-backup-device42-appliance-manager/sftp-server-settings.png)

### Backup to an NFS server

The backup file can be scheduled to be sent to an NFS server. All fields are required. The IP address should be the address of the target NFS server, the folder path should be the path to the directory in which the backups will be stored. This folder should be writeable by a user with uid=1000.

![Backup to an NFS server](/assets/images/setting-up-backup-device42-appliance-manager/nfs-server-settings.png)

### Backup Using Amazon S3

The backup file can be scheduled to be sent to Amazon S3 as well. All fields are required.

The **Region Endpoint** field **is not** simply the endpoint name, as each region has many endpoints. Unknown endpoint URLs can be looked up in the [AWS Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) section of the AWS Documentation. 

![Backup using Amazon S3](/assets/images/setting-up-backup-device42-appliance-manager/s3-settings.png)

### Schedule the Backup

You can create multiple backup schedules to automate the backup process. All fields are required.

Choose the time and days of the week you want the backup to run and whether to use Mail Server, SFTP, Amazon S3, or NFS as the source for the backup.

Test the backup by clicking the **Save and Test backup now** button.

![Scheduling the backup](/assets/images/setting-up-backup-device42-appliance-manager/backup-schedule.png)

Please check your time settings to avoid potential issues with AWS services. From the Device42 Main Appliance, navigate to **Tools > Settings > Time Settings**.

If your **Current System Time** is incorrect, change it in your VM system configuration console.

<ThemedImage
  alt="Schedule the backup"
  sources={{
    light: useBaseUrl('/assets/images/setting-up-backup-device42-appliance-manager/time-settings-light.png'),
    dark: useBaseUrl('/assets/images/setting-up-backup-device42-appliance-manager/time-settings-dark.png'),
  }}
/>

### Important Note for Scheduled Backups

If you intend to use a backup schedule for an auto-restore configuration to a stand-by appliance, as described in our [Warm HA Configuration](administration/appliance-manager/warm-ha-setup-failover-and-automated-backups.md) documentation, it's critical that you select **Backup Meta Data** as an option for the backup schedule.

Without the metadata for scheduled backups, the restore and passphrase settings will not be in the backup archive and the appliance will have no reference on how to use the data when attempting to restore it.

A backup file without metadata can still be used for an on-demand "restore".

### Limit Backup Retention

You might want to limit the time that backups are retained for. 

If you're using a Linux server, the easiest solution is to create a cron job that runs a command to automatically delete backup files past a certain age.

This command deletes any files in the mentioned directory that have a modified timestamp greater than seven days:

```
find /device42/backup/directory -type f -mtime +7 -delete
```

For Windows Servers, the following PowerShell script can be used to delete files older than seven days from the targeted directory:

```
# Delete all Files in C:temp older than 7 day(s)

$Path = "C:device42backups"
$Daysback = "-7"
$CurrentDate = Get-Date
$DatetoDelete = $CurrentDate.AddDays($Daysback)
Get-ChildItem $Path | Where-Object { $_.LastWriteTime -lt $DatetoDelete } | Remove-Item
```
