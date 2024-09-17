---
title: "Resource Utilization Overview"
sidebar_position: 25
---

## What is Resource Utilization?

Device42's Resource Utilization (RU) features are enabled for users with an installed RU license. RU is also known as the "enable monitoring for discovered devices" setting. This powerful module collects and examines server resource usage metrics, which can fuel advanced business and capacity planning decisions, migration planning, move-group selection (via Affinity Groups), cloud target rightsizing, and support a variety of other digital transformation projects.

Once enabled, you will see a 'monitoring' option on Hypervisor/\*nix/Windows autodiscovery jobs. On Linux and Windows-based platform CIs, stats are currently displayed.

![](/assets/images/D42-22008_RU-sampling-interval-700x420.png)

**Resource utilization is only available and will only function if:**

- The licensing module is enabled. Check if **Resource Utilization** is **Enabled** under **Tools > Settings > Licensing**. The **Enable Resource Utilization Tracking for Device(s)** checkbox (pictured above) will be disabled if the licensing module is disabled.
- The **Enable Resource Utilization Tracking for Device(s)** is checked at the time of discovery.
- The 'verify monitoring' option is checked after a device has been discovered. If the job is scheduled to run again, it should bring in data the next time the discovery job runs.

* * *

## Handling of the Same IP/Machine Instance Across Multiple RCs

If an IP is discovered across multiple RCs, Device42 will **not** monitor that IP again if it is already being monitored; were this otherwise permitted, unexpected behavior would likely result. We will adjust this and other RU workflows based on user feedback - please do let us know about any ideas or changes you have that would help you!

### Monitoring Management - Example Scenarios

Let’s consider three Devices A, B, and C, and two Remote Collectors, RC#1 & #2. Monitoring is currently **disabled** on all three.

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

Note that DeviceB does not switch which RC it's attached to.

* * *

### How Can I Switch Device RU Monitoring to Another RC?

If you _want_ to move a device to another RC, open the device list, select the device, and select a **Disable monitoring for selected devices...** action. After disabling monitoring, re-run the job again with monitoring re-enabled on the new target RC.

![Disable RU Monitoring on devices](/assets/images/disable_RU_monitoring_device_list_view-1.png)

The difference between the options deals with the handling of historical data for the device in question. The **...but keep Data** action stores data for as long as needed, and if the same device were rediscovered, the existing data will be automatically utilized. The **...and delete data** option simply deletes all existing data from the server. When a previously existent device is rediscovered with this option selected, its history begins anew.

Now re-run Job#2 on RC#2 with monitoring enabled once again. After that run, you can see the device has moved to RC2:

- DeviceA with monitoring on RC#1
- DeviceB with monitoring on RC#2
- DeviceC with monitoring on RC#2

* * *

## Technical Details: RU Data Storage

### The Time-Series Database (TSDB)

Monitoring data is kept on the RC in a TSDB. A dedicated database called `sensors` is used for this purpose, and it contains the following series:

- **`infeeds`**: Stores infeeds stats
- **`outlets`**: Stores outlets stats
- **`banks`**: Stores banks stats
- **`battery`**: Stores battery stats
- **`device`**: Stores device sensors - usually load, power factor, etc.
- **`env_sensor`**: Stores all types of `device_sensors` - humidity, temperature, CPU, etc.

You can think about these series as if they were Excel sheets, with the first column always consisting of a timestamp. For example, a memory series looks like this:

![A memory series in Device42](/assets/images/sensor_data_series.png)

In general, charts don't use all data points as there tends to be quite a lot of them. For example, a 30-second interval for a month equals 86,400 data points. Instead, data is aggregated, which is a common way to visualize data of this type.

Aggregation takes multiple data points and converts their values to one depending on the selected aggregation function. Currently, Device42 does this one of three ways: `MIN`, `AVG`, and `MAX`.

* * *

<table><tbody><tr><td width="50%">As an example, to generate <strong>`AVG`</strong> physical values from 5-minute intervals with a point every minute from the table in the screenshot above, we will get:</td><td width="30%">The <strong>`MIN`</strong> setting, instead, would return the smallest value from each set:</td></tr><tr><td width="50%"><ul><li><code>(53.242 + 51.672) / 2</code> = <b>52.457</b></li><li><code>(52.688 + 52.676) / 2</code> = <b>52.682</b></li></ul></td><td width="30%"><ul><li><code>53.242 &lt; <b>51.672</b></code> = <b>51.672</b></li><li><code>52.688 &gt; <b>52.676</b></code> = <b>52.676</b></li></ul></td></tr></tbody></table>

* * *

### What Happens if an RC Is Down?

When an RC is down, no data will be shown as the RC must be responsive to queries for data. Charts and reports will show empty gaps in data for periods where RCs were down.

### Data Capture Intervals

Available intervals:

- SNMP: 1 second
- Linux: 5 seconds
- Windows: 15 seconds

### Data Visualization

To visualize data, choose the **Trends** option from the **...** (ellipsis) menu in the upper-right hand corner of any device that has RU enabled.

Note this option will not be displayed if monitoring is not active or the license does not allow it:

![Trends menu item ellipse button](/assets/images/trends_button_ellipse_menu.png)

Note that `device_sensors` will also be shown here for those users that have power monitoring enabled.

* * *

## Captured Data Details

### CPU

- **`CPU`**: The mathematical mean of `CPU-1...N` loads, expressed as a percentage
- **`CPU-1...N`**: The real CPU load as a percentage

### Memory

- **`Total`**: Sum of physical and swap in megabytes
- **`Physical`**: RAM used in megabytes
- **`Swap`**: Swap/page file used in megabytes

### Disks

- **`Name`**: Name of the HDD
- **`WriteLatency`**: Latency of the write operations in ms
- **`WriteIORate`**: Speed of the write operations in MB/s
- **`WriteIOPS`**: Number of write operations per second
- **`WriteTransfer`**: Raw number of bytes written to disk
- **`ReadLatency`**: Latency of the read operations in ms
- **`ReadIORate`**: Speed of the read operations in MB/s
- **`ReadIOPS`**: Number of read operations per second
- **`ReadTransfer`**: Raw number of bytes read from disk

### Network

- **`Name`**: Name of the adapter
- **`InSpeed`**: Download speed in MB/s
- **`InTransfer`**: Raw number of bytes received by adapter
- **`OutSpeed`**: Upload speed in MB/s
- **`OutTransfer`**: Raw number of bytes transmitted by adapter

For the most part, Device42 will display **aggregated values**.

The only exception to this in v1 is for `Transfer` values. They are written as raw numbers and are constantly growing so there is logic behind the display of the values themselves. Instead, the difference for a given interval is displayed:

<table><tbody><tr><td width="40%">So, let’s look at the following example data for <code>ReadTransfer</code>:<ul><li>00:01 – 100 bytes</li><li>00:02 – 123 bytes</li><li>00:03 – 234 bytes</li></ul></td><td width="40%">If a user requests data between <i>00:01 and 00:03</i> with <code>density=3</code> <small>(see API section for density details)</small>, Device42 will print:<ul><li>00:01 – 0 bytes</li><li>00:02 – 23 bytes</li><li>00:03 – 111 bytes</li></ul></td></tr></tbody></table>

If results cannot be retrieved from an RC (if the RC is down, etc.), an **Inaccessible Remote Collector** message will be displayed on trend reports.

* * *

## Reporting

There are three types of Resource Utilization data reports available via **Analytics > Reports** based on captured RU data.

**Users may select the "Type of Data" they would like to see:**

- **Minimum**: Report uses data minimums.
- **Maximum**: Report uses data maximums.
- **Average**: Report uses data averages.

**Peak (Maximum) calculations:**

- **CPU**: A single number that represents the sum of all (CPU power times percentage peak usage)
- **Memory**: Total Peak, RAM, Swap, and RAM + Swap
- **Network**: Peak per card
- **Disk**: Peak IO across disks and Peak latency

* * *

## APIs

Currently, this API endpoint provides results in CSV format. JSON format may be implemented in the future:

`/service/data/v1.0/trends/?id=2714&metric=AVG&timezoneoffset=-180&timeperiod=3&density=110&end_date=09%2F24%2F17+21%3A17%3A24`

### General API Parameters

- **`type`**: Type of report, currently supports only device. _Optional_.
- **`id`**: Device ID
- **`ids`**: Comma-separated list of IDs. _Optional_.
- **`metric`**: The aggregation function that will be used. Can be `AVG`, `MIN`, or `MAX`.
- **`timezoneoffset`**: Your timezone GMT offset in minutes. For Moscow it is -180 (minus) and for NY 240 (without plus)
- **`end_date`**: The date of the final data point in US date and 24H time format, 12/31/17 15:16:17.
- **`timeperiod`**: The number of hours that you want to observe.

### Possible Values:

Pass an integer, `1-9`, to represent the following values:

| Value | Time Interval   |
|-------|-----------------|
| `1`   | 30 minutes      |
| `2`   | 1 hour          |
| `3`   | 3 hours         |
| `4`   | 6 hours         |
| `5`   | 12 hours        |
| `6`   | 24 hours        |
| `7`   | 7 days          |
| `8`   | 31 days         |
| `9`   | 183 days        |


### Data Points Control Parameters

To control the number of data points, use the `interval` or `density` parameter. Choose one or the other, as trying to use both will cause one to override the other.

- **`interval`**: Specify the number of seconds between data points. For example, if you want to get AVG/MIN/MAX data at 5-minute intervals for the last 24 hours, set `interval=300` and you will receive 288 data points.
- **`density`**: The number of points to collect per interval. This is similar to `interval`, but you should use it if you want to get an exact number of points for a given interval. For example, if you use a time of `period=6` (24 hours) and `density=100`, you will get 100 points with an interval of approximately 14.5 minutes. With a density of 1000, you will get 1000 points with a 1.5-minute interval.

**Important Limitation**: If the device polling interval is `N` seconds, and `N > interval`, the RC will reset `interval` to `N`. For example, if the polling interval for the device is 15 seconds and you set `density=1000` and `period=1` (30 min), you will not get 1000 points. Instead, you will get `30 min * 60 seconds = 1800 seconds / 15 seconds polling interval = 120 points`.

**CSV contains next type-measure combinations of data:**

- **`CPU-load`**: Aggregated CPU load for the selected interval as a percentage (for CPUs without a number, it is averaged across all numbered CPUs)
- **`Mem-physical`**: Aggregated physical memory used
- **`Mem-swap`**: Aggregated swap used
- **`Disk-(total,write,read)_iops`**: Aggregated IOPS for the disk
- **`Disk-(total,write,read)_iorate`**: Aggregated IORate for the disk
- **`Disk-(total,write,read)_latency`**: Aggregated latency for the disk
- **`Disk-(total,write,read)_transfer`**: Raw transfer for the disk at the end of the interval
- **`Disk-(total,write,read)_transfer_diff`**: Difference between raw transfer at the end and the start of the interval
- **`Nic-(in,out)_speed`**: Aggregated speed for the interface
- **`Nic-(in,out)_transfer`**: Raw transfer for the network interface at the end of the interval
- **`Nic-(in,out)_transfer_diff`**: Difference between raw transfer at the end and the start of the interval

### What if My RC Is Offline?

If your target Remote Collector is offline, you will not be able to fetch data from it. All fields will either come back empty or will display the `-` character. Charts, too, will be empty. One exception is the PDU main page, which will display the latest values because its data is cached.

### RU Note: Use Static IP Addresses

If an RC and the Windows discovery service are both using DHCP IPs, automated IP changes can break the connection between them, and therefore affect running jobs, etc. 

:::warning
We strongly recommended that **static** IP Addresses be used for all Device42 appliances, RCs, etc.
:::

In the case that DHCP does break a connection, re-run the discovery job to resume monitoring. DHCP IP addresses are **not** a supported configuration.
