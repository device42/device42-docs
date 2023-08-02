---
title: "Setting up backup via Device42 Appliance Manager"
sidebar_position: 18
---

This section describes the steps to setup one time and scheduled backups in the device42 Appliance Manager.

### Setting the passphrase

![wpid2239-Setting_the_passphrase.png](/assets/images/backup-passphrase.png)

Choose a 12-20 character passphrase to encrypt the backup file. You will need this passphrase to do the restore, so make sure to save it in a safe location. This is a required step. You won't be able to do the backup until this step is done)

### One time backup

![backup-now-15.png](/assets/images/backup-now-15.png)

Click on Run (in Backup Now tab). A backup file is created immediately and you will be prompted to save the file.

### Backing up metadata

Choosing the "Backup Metadata" option will include the password passphrase, Active Directory settings, backup passphrase, and any appliance manager settings in the backup as well.

Bullet list of settings included in Metadata:

- Passphrases for Back-Up's and Password Encryption
- Language
- Time
- SSL/HTTPS
- host/hostname info
- All appliance manager settings (Including back-up schedules)
- All certificates

### Backup to an SFTP server

![backup-sftp-15.png](/assets/images/backup-sftp-15.png)

The backup file can be scheduled to be sent to a SFTP server. All fields are required.

### Backup to an NFS server

![Backup to an NFS server](/assets/images/nfs-15.png)

The backup file can be scheduled to be sent to an NFS server. All fields are required. The IP address should be the address of the target NFS server, the folder path should be the path to the directory in which the backups will be stored. This folder should be writeable by a user with uid=1000.

### Backup using Amazon S3

![Backup using Amazon S3](/assets/images/s3-15.png)

The backup file can be scheduled to be sent to Amazon S3 as well by visiting the "Amazon S3 Settings" sub-menu.

Note that _Region Endpoint_ field **is not** simply the endpoint name, as each region has many endpoints. Endpoint URLs, if not known, can be looked up in the ["AWS Regions and Endpoints"](http://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) section of the AWS Documentation. All fields are required.

### Scheduling the Backup

You can create schedules for your mail server, SFTP, NFS, or S3 an automatic backup and use your email server to send the backup file to multiple recipients. In the above form, all fields except username and password are required. You can add multiple "to" addresses separated by commas.

![Scheduling the backup](/assets/images/backup-schedule-15.png)

Choose the time and days of the week you want backup to run and whether to use Mail Server,SFTP, AWS S3 or NFS as the source for the back-up.

You can test the backup by clicking the "Save and Test backup now" button.

Please be sure to check your time settings in Tools > Settings > Time Settings.(Image below).

![time-settings-15.png](/assets/images/time-settings-15.png)

If your Current System Time is incorrect, \["AWS Regions and Endpoints"\]you will need to change it in your VM system configuration console.

### Important Note for Scheduled Back-Up's

If you intend to use a back-up schedule for an auto-restore configuration to a stand-by appliance, as described in our ["Warm HA Configuration."](administration/appliance-manager/warm-ha-setup-failover-and-automated-backups.md)

It is critical that you select to include "Backup Meta Data" as an option for the Back-up Schedule.

Without the meta data, restore and passphrase settings will not be in the back-up archive so the appliance will have no reference as to using the data when attempting to restore from schedule.

A back-up file without meta data can still be used for an on-demand "Restore".

### Limiting Backup Retention

You may only be interested in retaining backups for the past 7 days or so. In that case, if using a linxu server, the easiest solution is to create a cronjob that runs a command such as the following to automatically delete backup files past a certain age.

```
find /device42/backup/directory -type f -mtime +7 -delete
```

This command will delete any files in the mentioned directory that have a modified timestamp greater than 7 days.

For Windows Servers, a powershell script as follows will delete files older than 7 days from the targeted directory:

```
# Delete all Files in C:temp older than 7 day(s)
$Path = "C:device42backups"
$Daysback = "-7"
$CurrentDate = Get-Date
$DatetoDelete = $CurrentDate.AddDays($Daysback)
Get-ChildItem $Path | Where-Object { $_.LastWriteTime -lt $DatetoDelete } | Remove-Item
```
