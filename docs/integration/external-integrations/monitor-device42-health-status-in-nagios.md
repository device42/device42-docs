---
title: "Nagios Integration"
sidebar_position: 19
---

# Monitor Device42 Health Status in Nagios

Device42 offers a [Nagios plugin for Device42](https://github.com/device42/Device42-Nagios-Health-Check). It is available for download via Github, and allows easy monitoring of the health status of your Device42 appliance. Data returned includes:

- Device42 Database Size
- Appliance Disk space usage
- Memory usage
- CPU usage

* * *

## Installing the Nagios add-on

Prior to installing the plugin, there are a couple prerequisites we should make sure are installed.

On Ubuntu:

```
apt-get install libnagios-plugin-perl libjson-perl libwww-perl
```

On Redhat:

```
yum install perl-JSON.noarch perl-Nagios-Plugin.noarch
```

To install the Nagios plugin, clone the repository to your nagios server, e.g.:

```
git clone https://www.github.com/device42/nagios
```

Copy the check\_d42\_health.pl file to your Nagios plugin directory:

```
cp check_d42_health.pl /usr/local/nagios/libexec/
```

And make it executable:

```
chmod +x /usr/local/nagios/libexec/check_d42_health.pl
```

Next, copy the d42.cfg file to your Nagios configuration path, (e.g. /usr/local/nagios/etc/objects):

```
cp d42.cfg /usr/local/nagios/etc/objects
```

Edit d42.cfg in your favorite editor and customize the following lines, starting on line 30:

```
define host{
  host_name           device42 # if you edit the hostname, be sure to edit the hostname in the services defined as well
  alias               device42
  address               192.168.11.211
```

### Using SSL with the integration

To enable checking over SSL, in the Health Check Command section of d42.cfg, add the port number with the -P option and --ssl to enable ssl, e.g:

```
command_line    /usr/bin/perl $USER1$/check_d42_health.pl -H $HOSTADDRESS$ -I $ARG1$ -w $ARG2$ -c $ARG3$ -P 4343 --ssl
```

## Adding Device42 to Nagios

With the scripts in place and configured, the last step is to edit your nagios.cfg file and add a line to add the Device42 configuration:

```
cfg_file=/usr/local/nagios/etc/objects/d42.cfg
```

Be sure to change the path to reflect where you've place the d42.cfg file.

After this, restart Nagios:

```
service nagios restart
```

Now when you browse to Nagios, you should see your Device42 instance start to report information:

## Viewing Device42's Health Status in Nagios

When you select the Device42 host from Nagios, you will now be able to see the appliance's current status via the various health checks:

![Device42 Health Status in Nagios](/assets/images/2016-03-26-Nagios-01.png)

The Backup Status will report an error if any one of your backup jobs has failed. The Free disk space, memory, and swap statuses have thresholds that can be set in d42.cfg. When setting the thresholds “50” will trigger the flag if the value is greater than 50 while “50:” will trigger the flag if the value is less than 50.

The following are suggested 'sane' thresholds for the default Device42 disk size and default allotted memory. Note if your appliance is using difference settings, you'll want to configure these appropriately: 50GB HDD, and 4GB RAM:

* * *

| Health Check | Warning Threshold | Critical Threshold |
| --- | --- | --- |
| cpu\_used\_percent | 85 | 95 |
| dbsize | 1000 | 2000 |
| disk\_used\_percent | 60 | 80 |
| memtotal | <= 4000 | <= 3000 |
| cached |  |  |
| swapfree | <=15% | <= 5% |
| swaptotal | <= 2000 | <= 1000 |
| memfree | <=15% | <=10% |
| buffers |  |  |

* * *

![Device42 Trending Stats](/assets/images/2016-03-26-Nagios-02.png)

You can also view the trending data for any health stat by clicking the service and then "View Trending Data for this Service"

![Device42 Health Log](/assets/images/2016-03-26-Nagios-03.png)

A log of all statuses is available for the host by clicking "View Notifications for this Host".
