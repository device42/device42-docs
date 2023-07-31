---
title: "SNMP SAN/Server Autodiscovery"
sidebar_position: 5
---

## SNMP Discovery Overview

The SNMP autodiscovery method can be used for any SNMP-compatible devices. For [SNMP Network Device discovery, see our Network Device discovery documentation here](../network-auto-discovery.md). For SNMP based Server autodiscovery, read below. This page discusses discovery of servers and SANs via SNMP. This method will also find Windows and Linux servers. However, more information will be retrieved by the [Linux & UNIX Server Auto-Discovery documentation pages](../linux-unix-server-auto-discovery.md). For Linux and Windows servers, this method retrieves the name, MAC & IP addresses, and IP properties. If the servers happen to be Dell machines and have Dell OpenManage installed, it will additionally find serial #, model, and some other relevant information.

**Note:** Device42 recommends that you execute Hypervisor server discovery using our specialized Hypervisor job types. See the  [Windows / Hyper-V Discovery](discovery/windows-and-hyper-v-auto-discovery.md) page and the [Linux / UNIX server auto-discovery](discovery/linux-unix-server-auto-discovery.md) page for more information.

## NetApp, EMC, & Dell NAS/SAN Storage Discovery

Netapp and EMC SANs are supported. Inventory data such as name, hardware model, serial #, OS, mac address, and IP properties, and more are retrieved. If you happen to run Dell storage devices, the Device42 community has contributed some scripts that support API-level native discovery via Dell Storage Manager. See our [Dell Storage Discovery blog post](https://www.device42.com/blog/2018/06/dell-storage-discovery-script-by-the-device42-community/) for more information, or jump over to the [Device42 GitHub page](https://github.com/device42/dellstorage-device42) if you're only looking for the script!

## Setting up a NAS/SAN Storage autodiscovery job

![](/assets/images/SNMP-menuadd-job-1-700x395.png)

The autodiscovery job specification takes an IP range, port, version, and community string as input. It can also be scheduled like other autodiscovery jobs.

## Run Now or Schedule

![](/assets/images/image-700x115.png)

Select **Run Now** from the list page to run the job right away.

![](/assets/images/AD_Blade-Discovery-Run-Schedule.png)

Select **Add another Autodiscovery Schedule** from the when editing the job to create a run schedule for the job.

A note on autodiscovery scheduling behavior: newly created jobs will not run on the first day they are created, to prevent an unintended large amount of jobs from running initially. If you would like to run a job after its initial creation, simply select the "Run Now" button next to the job after creation.
