---
title: "DNS Autodiscovery"
sidebar_position: 12
---

In this section, we will explain how to prep your Microsoft DNS server for DNS autodiscovery and set up Device42 to do the autodiscovery.

## Allowing zone transfers from your DNS server to your Device42 virtual appliance

![1. Allowing zone transfer from your DNS server to device42 virtual appliance IP.](/assets/images/2016-03-22-dns-01.png) Right click on the zone name, go to Properties and go to the zone transfers tab.

## Allow your Device42 virtual appliance's IP

![2. Allow device42 virtual appliance IP](/assets/images/2016-03-22-dns-02.png) You can enable zone transfers to Device42 appliance IP at your discretion.

## Set up Device42 DNS Zone autodiscovery

![Add DNS zone discovery](/assets/images/add_dns_zone_autodiscovery.png) Next, go back to your Device42 webconsole and go to _Discovery > DNS Zone Sync (One way)_. Then add a new zone for autodiscovery and fill out following: **Name** : Enter the zone name to be transferred (often this will be the one that you just enabled). **Nameserver** : Enter the FQDN or IP address for the DNS server. The FQDN will work only if DNS is configured correctly from the console. **Auto Delete Enabled:** This will cause deletion of records in device42 that were not found in new transfer but were found in older transfers. Selecting this option will also cause deletion of any entries that you have manually added for that zone in device42 that were not yet added to your DNS server. You can save this and choose to run now. If you see "Success!" in the Last Status box, then the new zone, IPs, and so on should be available in device42.

## Run Now or Schedule

![](/assets/images/image-700x115.png)

Select **Run Now** from the list page to run the job right away.

![](/assets/images/AD_Blade-Discovery-Run-Schedule.png)

Select **Add another Auto Discovery Schedule** from the when editing the job to create a run schedule for the job.

A note on autodiscovery scheduling behavior: newly created jobs will not run on the first day they are created, to prevent an unintended large amount of jobs from running initially. If you would like to run a job after its initial creation, simply select the "Run Now" button next to the job after creation.
