---
title: "Relutech for AWS Migration"
sidebar_position: 13
---

## Introduction

Relutech and Device42 have teamed up to ease migrations to AWS. Device42’s deep discovery provides Relutech with the information required to price your on-premise physical assets for purchase and leaseback as well as third-party maintenance. Relutech then purchases those assets and provides them back to the customer on a leasing schedule. As you migrate those workloads to AWS, the workload is then rolled off of your lease thereby reducing your on-premises costs as you increase consumption in AWS.

## Getting Started

The instructions below provide a recommended approach to capture your Physical (bare metal) server inventory.  Using Device42’s Operating System-level discovery, you will be able to collect inventory data relating to each server targeted on the network. Subsequent SNMP scans against a BMC (e.g., iDRAC, HP iLO, etc) will augment the data collected from OS-level scanning by identifying management MAC’s and IP’s as well as discovering the parts installed on each targeted server. Please follow the steps below to create and execute these inventory jobs.

The initial recommended approach starts by performing Operating System level scans, followed by SNMP scans against a BMC, then by the Warranty sync (if applicable).

1. **Hypervisor/*nix/Windows**  - You'll want to ensure that these sets of Operating System level jobs are configured and run first. This discovery process will create the device record and capture parts that include  CPU and HBA Card  information.
2. **SNMP** - Once the OS-level scans have been completed, create and execute SNMP scans against the management IP’s of the targeted servers.  These jobs will update the existing devices by adding additional parts as well as the management MAC Address and IP Address.The SNMP scan captures part information such as Ram, Disk(s) and PSU.
3. **Warranty** - Depending on the vendor, these particular jobs will retrieve service contracts associated with each server from the vendor system. If the vendor system is unavailable, the warranty data can be added manually via the UI or via spreadsheet imports. Please see the referenced link below for documentation on this discovery in Device42.

![Discovery menu](/assets/images/relu-discovery-menu.png)


## Hypervisor/*nix/Windows Job Creation

- Set up Discovery jobs for device inventory discovery with the [*Hypevisor / *nix / Windows](/auto-discovery/linux-unix-server-auto-discovery.mdx) jobs. Set up a standard discovery scan for each type of device focusing on the physical devices (Hypervisors, *nix and Windows).
    - For the Windows and *nix jobs, ensure that the Discover Parts is checked. In the Host Discovery section.
    - For the Hypervisor jobs, the “Discover Parts” option is enabled as default and not changeable.

![Host discovery](/assets/images/relu-host-discovery.png)

## SNMP Job Creation


For the [SNMP](auto-discovery/storage-arrays-autodiscovery/snmp-san-server-auto-discovery.md) autodiscovery job:

- First enter the IP/FQDN of all the devices that the credentials and access apply to under "servers".

![Add servers](/assets/images/relu-snmp-servers.png)

- Then set up 1) and 2) as standard access settings, and in 3) add any community strings for the device(s).

![Ports and community strings](/assets/images/relu-port-community-strings-light.png)

## Warranty Job Creation

- See the [Warranty Sync](auto-discovery/warranty-autodiscovery.mdx) documentation for instructions on setting up the Warranty Sync autodiscovery.

## Recommended Automated Scheduling

- For the Hypervisor/*nix/Windows scan jobs, the jobs should be scheduled to run **_daily_**.
- For the SNMP scan jobs, the jobs should be scheduled to run **_weekly_**.
- For the Warranty Sync, the jobs should be scheduled to run **_weekly_**.

## Run the Relutech Report

After the discovery jobs have been completed, navigate to _Insights+_ to extract the data for Relutech. The Relutech report is located under _Advanced Reporting_  -> _Integrations_ > _IT Asset Disposition_ > _Relutech_. 

![Accessing the Relutech report](/assets/images/relu-relutech-insights.png)

For more information about Relutech, click [here.](https://relutech.com/request-a-quote/)
