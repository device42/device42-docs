---
title: "Cloud Recommendation Engine"
sidebar_position: 6
---

## What is the Cloud Recommendation Engine?

Cloud Recommendation Engine is a powerful feature that can provide you with exactly the details you need to plan your next cloud migration, compare costs between Amazon AWS, Microsoft Azure, Google Cloud Platform, Oracle, and VMware Cloud on AWS cloud platforms, and right-size your next cloud deployment.

Select _Analytics > Reports > Cloud Recommendation Engine_ and get clear recommendations for sizing cloud instances to suit your physical or virtual workloads.

**CRE Feature Overview**

- Cloud Recommendation Engine leverages Device42's industry-leading autodiscovery and resource utilization data to understand your workloads.  You can now also select Business Applications you have created as an option when you run a CRE report. This simplifies moving devices in groups, waves, or by logical groupings defined by applications.
- Cloud instance recommendations are provided for Amazon AWS, Microsoft Azure, Google Cloud Platform, Oracle, and VMware Cloud on AWS cloud platforms (including instance sizing recommendations and pricing information).
- Instance recommendations are calculated based on a combination of your observed workloads (CPU, RAM, HDD, NIC, etc.), and utilizing Resource Utilization data, if available, plus a user-selected _Safety Factor_ you can select via the slider (for example, if your current instance peaks at 16GB RAM usage, and you chose 50% safety factor, CRE will size cloud instance at 24GB).
- CRE reports now include the following monthly and annual cost information for all vendors:

    - On-Demand Instance Cost 
    - 1-Year Reserved Instance Cost – Prorated 3-Year Reserved Instance Cost 
    - Storage Cost (does not apply to VMware Cloud on AWS) 
    - Networking Cost (does not apply to VMware Cloud on AWS)

![](/assets/images/WEB-606_CRE-Setup.png)

 

![](/assets/images/CRE_Bottom-of-Page.png)

## How does Cloud Recommendation Engine Work?

1. A summary of CPU, memory, and OS info is created based on autodiscovered inventory data.
2. If you have the resource utilization feature enabled, peak CPU and memory usage over the last month is factored in.
3. When you click the “Send to Cloud and Analyze Data” button, Device42 anonymizes your data and sends it to our cloud servers, finding matching AWS, Azure, GCP, Oracle, or VMware Cloud on AWS workloads.
4. Device42’s bots do the hard work, returning workload recommendations that have been best-matched to each particular device in your main appliance. The anonymized data is then re-matched with your actual device names, and an output sheet is generated that contains both your device names and matched workloads for the following scenarios:

    - AWS based on inventory data
    - AWS based on resource utilization
    - Azure based on inventory data
    - Azure based on resource utilization
    - GCP based on inventory data
    - GCP based on resource utilization
    - Oracle based on inventory data
    - Oracle based on resource utilization
    - VMware Cloud on AWS based on inventory data
    - VMware Cloud on AWS based on resource utilization

**Downloaded Data Sample**

![Downloaded Device42 inventory data sample](/assets/images/inventory-data-sample.png)

Google Cloud Platform based on Device42 inventory data sample: ![Google cloud platform based on inventory CRE sample](/assets/images/Google-Cloud-Platform-based-on-inventory-example.png)

Azure based on Inventory Sample: ![Cloud Recommendation Engine Azure based on inventory recommendations](/assets/images/Azure-based-on-inventory-example.png)

### Disk (HDD) and NIC RU Details Considered by CRE

CRE also factors NIC and HDD config details as well as new RU information into recommendation calculations (in addition to CPU and Memory (RAM) RU and inventory data as noted above).

The following RU data for NICs and HDDs is now available:

<table><tbody><tr><td width="312"><b>RU-based recommendations:</b><ul><li>Original NIC Speed (MB/s) &amp; original NIC transfer out (MB)</li><li>Original Hard Disk Size (GB)</li><li>Original Disk IOPS &amp; Throughput (MB/s)</li><li>Monthly Networking Cost</li><li>Monthly Storage Cost</li></ul></td><td width="312"><b>Inventory-based (non-RU)</b><ul><li>Original Hard Disk Size (GB)</li><li>Monthly Storage Cost</li></ul></td></tr></tbody></table>

<table><tbody><tr><td width="312"><u>NIC-specific data considered:</u><ul><li>nic_in_speed</li><li>nic_out_speed</li><li>nic_in_transfer</li><li>nic_out_transfer</li></ul></td><td width="312"><u>HDD-specific RU data considered:</u><ul><li>disk_iops_read &amp; disk_iops_write</li><li>disk_read_io_rate &amp; disk_write_io_rate</li><li>disk_read_latency &amp; disk_write_latency</li><li>disk_total, disk_used, &amp; disk_free</li></ul></td></tr></tbody></table>

### CRE Communication Details

Cloud recommendation engine communicates with the Device42 main appliance (MA) over https/443, reaching out to either _connect.device42.io (non-EU)_ or _connect-eu.device42.io for EU users._ IP address details for this communication (current as of 2018-19) is as follows:

```
FQDN/IPS: 
connect.device42.io  https/443
connect-eu.device42.io https/443
```


## Global Cloud Recommendation Engine Settings and Scheduling

You can use Global Cloud Recommendation Engine Settings to select settings and options for your CRE  report and schedule the report to run on a daily basis.  Changes you make to the Global CRE Settings are reflected on the _Analytics > Reports > Cloud Recommendation Engine_ page.

- Select _Tools > Settings > Global Settings_ to display the settings page and then click _Edit_ at the top right of the page.
- Scroll down to the bottom of the page click _Show_ to expand the CRE settings section.

![](/assets/images/WEB-641_CRE-Global-Settings-Tab.png)

![](/assets/images/WEB-641_CRE-Global-Settings-General-Fields.png)

- Use the check boxes, field, and drop-down lists on the page to select the options and settings for your CRE report.

![](/assets/images/WEB-641_CRE-Global-Settings-Pick-Lists.png)

- To schedule the CRE report, check the _Run CRE on schedule_ box and select the _Scheduled time window_ for the report.

![](/assets/images/WEB-641_CRE-Global-Settings-Schedule-Fields.png)

- Click _Save_ to save the CRE settings.
