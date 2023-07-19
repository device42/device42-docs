---
title: "Resource Utilization Overview"
sidebar_position: 25
---

## What is Resource Utilization?

Device42's _Resource Utilization_ features \[_aka 'RU', the "enable monitoring for discovered devices" setting_\] are enabled for users with an installed RU license. This powerful module allows for the collection and examination of server resource usage metrics, which can fuel advanced business and capacity planning decisions as well as migration planning, move-group selection (via Affinity Groups), cloud target rightsizing, and support a variety of other digital transformation projects, as well.

Once enabled, you will see a 'monitoring' option on the Hypervisor/\*NIX/Windows Discovery settings screen, and stats are currently displayed on Linux and Windows-based platform CIs.

![](/assets/images/D42-22008_RU-sampling-interval-700x420.png)

**Resource utilization is only available and will only function if:**

- The licensing module is enabled - on/off -\[the enable checkbox (pictured above) will be disabled if the licensing module is disabled\]
- Resource Utilization Tracking Checkbox is checked at time of discovery
- Verify monitoring option is checked after the device has been discovered (assuming the job is set to run again -- but verify when the schedule is set and next time its run, it should bring in data)

* * *

## Handling of the same IP/machine instance across multiple RCs

If an IP is discovered across multiple RCs, Device42 will _not_ monitor that IP again if it is already being monitored; were this otherwise permitted, unexpected behavior would likely result. We will adjust this and other RU workflows based on user feedback - please do let us know about any ideas or changes you have that would help you!

### Monitoring management - Example scenarios

Let’s consider three Devices A, B and C, and two Remote Collectors, RC#1 & #2. Monitoring is currently _disabled_ on all three.

Consider a scenario where two discovery jobs are configured:

1. Job#1 includes Device A and Device B
2. Job#2 includes Device B and Device C

* * *

You run Job#1 on RC#1 with monitoring enabled. After discovery, you will have:

- DeviceA with monitoring on RC#1
- DeviceB with monitoring on RC#1
- DeviceC without monitoring

Then you decide to run discovery using Job#2 on RC#2 with monitoring disabled. After this discovery job runs, you will have:

- DeviceA with monitoring on RC#1
- DeviceB with monitoring on RC#1
- DeviceC without monitoring

Then you change the settings on Job #2 and run it from RC#2 with monitoring enabled. The end result will be:

- DeviceA with monitoring on RC#1
- DeviceB with monitoring on RC#1
- DeviceC with monitoring on RC#2

Note that _DeviceB_ does not switch which RC it's attached to!

* * *

### How can I switch device RU monitoring to another RC

If you _want_ to move a device to another RC, this can be accomplished by opening the device list, selecting the device, and setting the `Disable monitoring…` option. After disabling monitoring, re-run the job yet again with monitoring re-enabled on the new target RC.

![Disable RU Monitoring on devices](/assets/images/disable_RU_monitoring_device_list_view-1.png)

The difference between the options deal with the handling of historical data for the device in question. If “Keep Data” is selected, data is stored for as long as is needed, and if the same device were rediscovered, the existing data will be automatically utilized. The second option simply deletes all existing data from the server. When a previously existent device is re-discovered with the second option selected, its history begins anew.

Now re-run Job#2 on RC#2 with monitoring enabled once again. After that run, you can see the device has moved to RC2:

- DeviceA with monitoring on RC#1
- DeviceB with monitoring on RC#2
- DeviceC with monitoring on RC#2

* * *

## Technical Details: RU data storage

### The time-series database \[TSDB\]

Monitoring data is kept on the RC in a TSDB. A dedicated database called `sensors` is used for this purpose, and it contains the following series:

- **infeeds** - stores infeeds stats
- **outlets** - stores outlets stats
- **banks** - stores banks stats
- **battery** - stores battery stats
- **device** - stores device sensors - usually load, power factor, etc.
- **env\_sensor** - stores all types of device\_sensors - humidity, temperature, cpu, etc.

You can think about these series as if they were Excel sheets, in which the first column is always a timestamp. For example, a memory series looks like this:

![A memory series in Device42](/assets/images/sensor_data_series.png)

In general, chart generation doesn't use all data points, as there tends to be quite a lot of them \[_for example, a 30 sec. interval for a month = 86,400 data points_\]. Instead, data is aggregated, which is a common way to visualize data of this type.

Aggregation takes multiple data points and converts their values to one depending on the selected aggregation function. Currently, Device42 does this one of three ways: _MIN, AVG,_ and _MAX_.

* * *

<table><tbody><tr><td width="50%">As an example, to generate <strong><em>AVG</em></strong> physical values from 5 minutes intervals with a point every minute from the table in the screenshot above, we will get:</td><td width="30%">The <strong><em>MIN</em></strong> setting, instead, would return the smallest value from each set:</td></tr><tr><td width="50%"><ul><li><code>(53.242 + 51.672) / 2</code> = <b>52.457</b></li><li><code>(52.688 + 52.676) / 2</code> = <b>52.682</b></li></ul></td><td width="30%"><ul><li><code>53.242 &lt; <b>51.672</b></code> = <b>51.672</b></li><li><code>52.688 &gt; <b>52.676</b></code> = <b>52.676</b></li></ul></td></tr></tbody></table>

* * *

### What happens if an RC is down?

When an RC is down, no data will be shown as RC must be responsive to queries for data. Charts/reports will show empty gaps in data for periods where RCs were down.

### Data Capture Intervals

Available intervals:

\- SNMP: 1 second - Linux: 5 seconds - Windows: 15 seconds

### Data Visualization

To visualize data, choose the _“Trends”_ option from the **\[...\]** (aka "Ellipse") menu in the upper-right hand corner of any device that has RU enabled.

Note that this option will not be displayed if monitoring is not active and/or the license does not allow it:

![Trends menu item ellipse button](/assets/images/trends_button_ellipse_menu.png)

Note that device\_sensors will also be shown here for those users that have power monitoring enabled, as well.

* * *

## Captured Data Details

### CPU

- **CPU**: the mathmatical mean of `CPU-1...N` loads, expressed as a percent
- **CPU-1...N**: is the real CPU load as a percent

### Memory

- **Total**: sum of physical and swap in megabytes
- **Physical**: RAM used in megabytes
- **Swap**: swap/page file used in megabytes

### Disks

- **Name**: name of the HDD
- **WriteLatency**: latency of the write operations in ms
- **WriteIORate**: speed of the write operations in MB/s
- **WriteIOPS**: number of write operations per second
- **WriteTransfer**: raw number of bytes written to disk
- **ReadLatency**: latency of the read operations in ms
- **ReadIORate**: speed of the read operations in MB/s
- **ReadIOPS**: number of read operations per second
- **ReadTransfer**: raw number of bytes read from disk

### Network

- **Name**: name of the adapter
- **InSpeed**: download speed in MB/s
- **InTransfer**: raw number of bytes received by adapter
- **OutSpeed**: upload speed in MB/s
- **OutTransfer**: raw number of bytes transmitted by adapter

For the most part, Device42 will display _aggregated values_.

The only exception to this in v1 is for `Transfer` values. They are written as raw numbers and are constantly growing so there is logic behind the display of the values themselves. Instead, the difference for a given interval is displayed:

<table><tbody><tr><td width="40%">So, let’s look at the following example data for <code>ReadTransfer</code>:<ul><li>00:01 – 100 bytes</li><li>00:02 – 123 bytes</li><li>00:03 – 234 bytes</li></ul></td><td width="40%">If a user requests data between <i>00:01 and 00:03</i> with <code>density=3</code> <small>(see API section for density details)</small>, Device42 will print:<ul><li>00:01 – 0 bytes</li><li>00:02 – 23 bytes</li><li>00:03 – 111 bytes</li></ul></td></tr></tbody></table>

If results cannot be retreived from an RC (e.g. the RC is down, etc.), an “Inaccessible Remote Collector” message will be displayed on trend reports.

* * *

## Reporting

There are three types of Resource Utilization data reports available via _Reports -> "Legacy Reporting"_ based on captured RU data.

**Users may select the "Type of Data" they would like to see:**

- _Minimum_ - Report uses data minimums.
- _Maximum_ - Report uses data maximums.
- _Average_ - Report uses data averages.

**Peak \[Maximum\] calculations:**

- _CPU_ - A single # that represents the sum of all _(cpu power times percentage peak usage)_
- _Memory_ - Total Peak, RAM, Swap and RAM + Swap
- _Network_ - Peak per card
- _Disk_ - Peak IO across disks and Peak latency

* * *

## APIs

Currently, this API endpoint provides results in CSV format; \[JSON format may be implemented in the future\]:

`/service/data/v1.0/trends/?id=2714&metric=AVG&timezoneoffset=-180&timeperiod=3&density=110&end_date=09%2F24%2F17+21%3A17%3A24`

### General API parameters

- **type** - type of report, currently supports only device. _\[Optional\]_.
- **id** - device ID
- **ids** - comma separated list of IDs. Optional.
- **metric** - is actually aggregation function that will be used. Can be AVG, MIN, MAX.
- **timezoneoffset** - is your TZ GMT offset in minutes. For Moscow it is -180 (minus) and for NY 240 (without plus)
- **end\_date** - is the date of the final data point in format: 12/31/17 15:16:17 (US date + 24H time)
- **timeperiod** - is the number of hours that you want to observe.

### Possible values:

Pass an integer, 1-9, to represent the following values:

- Pass the value 1 for `30` minutes
- Pass 2 thru 6 = `1`, `3`, `6`, `12`, or `24` hours, respectively
- or pass 7, 8, or 9 = `7` days, `31` days, and `183` days

### Data points control parameters

For data points control, you should use one of these parameters. Choose one or the other, as trying to use both will cause one to override the other.

- **interval** - specify the number of seconds between data points. If you want to get AVG/MIN/MAX data at 5 minute intervals for last 24 hours, set _interval=300_ and you will receive 288 data points.
- **density** - the number of the points to collect per interval. This is similar to interval but you should use it if you want to get exact number of the points for given interval. If you will use time period=6 (24 hours) and density=100. You will get 100 points with interval ~14.5 minutes. With density 1000 you will get 1000 points - with 1.5 interval.

There is an important limitation for both control parameters. If the device polling interval is N seconds, and N > interval, the RC will reset interval to N. For example, if the polling interval for device is 15 seconds and you set density=1000 & period=1 (30 min) you will not get 1000 points. You will get 30 min \* 60 second = 1800 sec / 15 sec polling interval = 120 points.

**CSV contains next type-measure combinations of data:**

- **CPU-load** - aggregated CPU load for selected interval in % (for CPU without number it is averaged for all numbered CPUs)
- **Mem-physical** - aggregated physical memory used
- **Mem-swap** - aggregated swap used
- **Disk-(total,write,read)\_iops** - aggregated iops for disk
- **Disk-(total,write,read)\_iorate** - aggregated iorate for disk
- **Disk-(total,write,read)\_latency** - aggregated latency or disk
- **Disk-(total,write,read)\_transfer** - raw transfer for disk at the end of the interval
- **Disk-(total,write,read)\_transfer\_diff** - difference between raw transfer at end and start of interval
- **Nic-(in,out)\_speed** - aggregated speed for interface
- **Nic-(in,out)\_transfer** - raw transfer for operation disk at the end of the interval
- **Nic-(in,out)\_tranfer\_diff** - difference between raw transfer at end and start of interval

### What if my RC is offline?

If your target Remote Collector is offline, you will not be able to fetch data from it. All fields will either come back empty or will display the `-` character. Charts, too, will be empty. One exception is the PDU main page, which will display the latest values because its data is cached.

### RU Note: Use STATIC IP addresses!

If an RC and the Windows discovery service are both using DHCP IPs, automated IP changes can break the connection between them, and therefore effect running jobs etc. It is _STRONGLY recommended_ that STATIC IPs be used for all Device42 appliances, RCs, etc.

In the case that DHCP does break a connection, re-run the discovery job to resume monitoring. DHCP IP addresses are **NOT** a supported configuration.
