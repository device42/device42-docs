---
title: "Warm HA Setup, Failover, and Automated Backups"
sidebar_position: 19
---


**Automate restores to back up your Main Appliance for warm standby/High Availability (HA).**

Device42 allows you to put a second appliance in standby mode and do period restorations to the device for use as a failover. This process consists of two steps: setting up the automated restores, and setting the backup appliance to production in the event of a device failure.

From the [Device42 Appliance Manager](device42-appliance-manager-login.mdx), you can set up automated restores to a backup appliance. This is done by setting the appliance to standby mode and configuring the appliance to restore from a backup file on a remote server. The appliance will then automatically restore from the backup file at the specified interval.

### Set Up Automated Restores for Warm HA Appliance

Log in to the Appliance Manager and navigate to **Global Settings > Appliance Mode**. You will see the following screen with the option to enable standby mode:

![Enable standby in Appliance Manager](/assets/images/warm-ha-setup/enable-standby.png)

You can declare an appliance to be in standby mode, and can then enable regular restores from either an NFS export or an SFTP location. Putting the appliance in standby mode does the following:

- Disables the background scheduler that runs the autodiscovery jobs
- Disables scheduled reports
- Disables running any backups from the appliance

You can add the auto-restore schedule using crontab syntax. Configure the interval of how often you want to pick up the backup file from the remote server. 

![Warm HA Settings](/assets/images/warm-ha-setup/set-up-restore.png)

Credentials for passphrase, SFTP server settings and backup file name should be identical on both production and standby appliance. Both NFS and SFTP paths and credential settings are configured in their respective sub-menu's in the Device42 Appliance Manager. Look for **NFS Server Settings** or **SFTP Server Settings** once you choose your restore method:

![Configure NFS or SFTP Server Settings](/assets/images/warm-ha-setup/sftp-settings.png)

While doing an auto-restore all schedules get disabled, so if there is another one that falls within that window, it will not kick off. To know whether an auto-restore succeeded or failed, we have also added success and failure notifications. Mail server settings must be set for that to work.

### Important Note for Backup Schedules with Auto-Restore

Any attempt to Auto-Restore from a back-up file will fail if Meta Data is not included in the back-up.

It is critical that you select to include “Backup Meta Data” as an option for the Back-up Schedule to your SFTP or NFS.

Without the meta data, restore and passphrase settings will not be in the back-up archive so the appliance will have no reference as to using the data when attempting to restore from schedule.

A back-up file without meta data can still be used for an on-demand “Restore”.

You will be able to find additional details for [Backup Meta Data](administration/appliance-manager/setting-up-backup-device42-appliance-manager.mdx#backing-up-metadata) and [Scheduling the Backup.](administration/appliance-manager/setting-up-backup-device42-appliance-manager.mdx#scheduling-the-backup)

### Setting Appliance mode via API

With automated restores in place on your backup appliance, you're ready to set it to production mode in the event of a device failure. To do so, a POST call sent to /api/1.0/appliancemode/ with payload "appliance\_mode=production" \[or _'=standby'_\] sets the appliance in production or standby mode. This is intended to be triggered from the monitoring software of your choice; see the example below. After switching, a simple update to the DNS settings pointing your domain to the new production instance IP will facilitate continuous use of Device42 without downtime.

### Automatic Failover Using Your Monitoring System \[with Nagios example\]

When running Device42 in HA mode with a Warm Standby configured, in the event of primary instance failure, the secondary instance must be “promoted” from the warm-standby state \[with job processing, scheduler, & backups deactivated\] to primary, and fully active state. The mode of a Device42 appliance instance can be toggled from warm standby to production mode (and back again) with a simple API call.

**To toggle between warm standby and production**, simply pass the _‘appliance\_mode’_ parameter in a POST call to the following API endpoint: _/api/1.0/appliancemode/_

e.g. sending the parameter: _“appliance\_mode=production”_ **will toggle a warm standby appliance to production mode.**, while sending the parameter: _“appliance\_mode=standby”_ **will toggle a production appliance to warm standby mode.**

An example API POST call that toggles a Device42 appliance instance from standby to production with ‘curl’: 

```bash
 curl -X POST -d "appliance\_mode=production" -u 'd42admin:default' https://Device42Instance:4343/api/1.0/appliancemode/ --insecure
```

![Example curl API POST](/assets/images/failover_API_call_curl.PNG)

_By embedding the above call into a script that is called in response to a failure event detected by your monitoring system, the failover process can be fully automated._ The following example uses Nagios along with the above example API call to automate a Device42 warm standby to production in a failover scenario.

**_Nagios Automated Failover Example:_** 

1. First, add the following configuration github link to your Nagios host file: 

    ![nagios host file additions](/assets/images/automated_failover-Nagios_host_file.PNG)

2. Second create a script file similar to this example github link: 
 
    ![Example curl API POST](/assets/images/nagios_automated_failover_script.PNG)

The above example (if utilized exactly as written) only enables automated failover to the secondary instance \[no failback\]. The provisions to failback are present in the example script \[see the commented lines following OK), lines #11+12\], but are currently commented out. Though it may be unnecessary depending on the failure mode of the primary instance, it’s not a bad idea as a precaution that your production script attempts to send an API call to the primary instance, placing it into standby and thus preventing it from running jobs should it recover until a failback is intentionally initiated.

- Please ensure the script runs as the proper Nagios user, and is also allowed execution permissions: ( `$ chown nagios:nagios <> && chmod 755 <>` )
- The current example works by using "check\_http” to detect failure, but it’s entirely possible to change it to utilize other commands
- The production DNS entry must be edited to point at the IP of the new primary Device42 instance to allow reachability via the same URL. For Windows DNS environments, this can be accomplished with the following [powershell example script](https://gallery.technet.microsoft.com/scriptcenter/Update-DNS-records-with-da10910d%5C) - see usage examples by the script's author in [this blog post](https://discoposse.com/2013/04/14/updating-same-as-parent-folder-records-with-dnscmd-and-powershell/). For other platforms, a custom script will have to be written and used.

**How it works:** If the main Device42 server instance goes down and this is detected by monitoring, the above script switches the appliance mode of the secondary server to production with a POST call to the RESTful API endpoint /api/1.0/appliancemode/ with payload “appliance\_mode=production”. If main server comes back up again, the script can switch the secondary appliance’s mode to back to standby, allowing the first server to once again become authoritative. Uncomment lines #11 & 12 to allow this to happen automatically. Ensure provisions have been made to switch the DNS entry back to the primary instance’s IP address, as well.
