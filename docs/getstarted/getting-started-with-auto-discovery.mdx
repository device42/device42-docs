---
title: "Getting Started with Autodiscovery"
sidebar_position: 2
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

The following how-to runs down quickly enumerating network objects with Device42 Autodiscovery.

## Getting Started with Device42 Videos

**If you're new to Device42**, begin with our [**getting started videos**](https://www.youtube.com/playlist?list=PLJ9je_qSNumJ-rMzIXUufY-XsbrwWfeCR). In under 5 minutes, you'll learn how to set up your Remote Collector (RC), connect a Windows Discovery Service (WDS) instance to that RC, and run your first discovery job! [Watch 'em now](https://www.youtube.com/watch?v=ClkvR9zLQUU&t=0s&list=PLJ9je_qSNumJ-rMzIXUufY-XsbrwWfeCR&index=2) and you'll be an expert in no time!

Ready to learn more? If you prefer videos visit our [Device42 "How-To" playlist on YouTube](https://www.youtube.com/playlist?list=PLJ9je_qSNumJ4HuNVS75wzRgBRrtCh6_q) or go to the [How-To video section](how-to-videos/index.md) here in the docs. 

If you can't find the answer you're looking for, please email support@device42 and let us know. There's a good chance other people are wondering the same thing, and we'll be happy to create a new video... _Happy discovering!_

## Autodiscovery Account Notice

:::caution
Please do _not_ set up an autodiscovery scan using critical production account credentials! Please create a separate, dedicated account to use _only_ for discovery.
:::

Depending on permissions granted and your configured password policies, account lock-out could result in an otherwise completely avoidable outage. You, the customer, are responsible for any such behavior that might result.

## Creating Subnets

Go to **Resources > Networks > All Subnets** and click **+Add** on the top right corner.

<ThemedImage
alt="View or edit existing subnets"
sources={{
    light: useBaseUrl('/assets/images/getting-started-with-auto-discovery/subnets-list-page-light.png'),
    dark: useBaseUrl('/assets/images/getting-started-with-auto-discovery/subnets-list-page-dark.png'),
}}
/>

The required fields are **Network**, **Mask Bits**, and **Service Level**. The other fields are optional. If left empty, **Range Begin** and **Range End** are automatically calculated based on network and bits.

<ThemedImage
alt="Create a new subnet"
sources={{
    light: useBaseUrl('/assets/images/getting-started-with-auto-discovery/add-subnet-light.png'),
    dark: useBaseUrl('/assets/images/getting-started-with-auto-discovery/add-subnet-dark.png'),
}}
/>

If subnets have been pre-defined, all discovered IP addresses will be placed in their respective subnets. Otherwise, the IPs will end up in an "undefined" subnet.

## Set Up Autodiscovery

### Set Up WDS (Windows Discovery Service)

Now is a good time to set up a [Remote Collector](auto-discovery/remote-collector-rc.md), as RCs are dedicated to discovery and can handle larger network ranges than your Main Appliance (MA). 

If you’ll be discovering any Microsoft Windows OS-based servers/guests, go ahead and set up an instance of WDS. Note that your WDS instance can be connected to either your Main Appliance OR to a Remote Collector. If you do have an RC set up, it’s recommended to connect to WDS rather than connecting it to your MA.

### Create Your First Discovery Job

If you're discovering any Microsoft or Windows-based products, install the [WDS](installation/windows-discovery-service-installation.md) first.

Create your first discovery job! Start by discovering your network first. Navigate to **Discovery > SNMP** and click **+ Add Jobs** to create a [SNMP/Network discovery job](auto-discovery/network-auto-discovery.mdx). This will build out a base for the rest of your network. Then move on to vServer discovery, followed Windows/Linux servers, etc.

:::info
See [auto-discovery best practices](auto-discovery/autodisc-best-practices.md) for recommendations on the order in which to run initial discovery. If you're familiar, jump right in to [SNMP/Network discovery](auto-discovery/network-auto-discovery.mdx).
:::

<ThemedImage
alt="Add SNMP discovery"
sources={{
    light: useBaseUrl('/assets/images/getting-started-with-auto-discovery/add-snmp-discovery-light.png'),
    dark: useBaseUrl('/assets/images/getting-started-with-auto-discovery/add-snmp-discovery-dark.png'),
}}
/>

## The "unknown" Device Type 

Any devices that are not virtual will come over as device type "unknown" initially. The reason is that the appliance has not been told whether the hardware belongs to the physical, blade or another category.

The following device types have a hardware model. Each hardware model can be one of 3 types: regular, blade or other.

- **Regular:** device type represents physical devices
- **Blade:** device type represents blade devices
- **Other:** device type represents 'other' devices, e.g. laptops, workstations, network printers, etc. _(that are not rack mounted)_

Once you change a hardware type, all the corresponding devices that refer to that hardware and are type unknown, will automatically be categorized accordingly.

The "Bulk hardware edit" feature allows changing hardware properties in bulk for all undefined hardware types and it will automatically categorize all devices belonging to it. See the Bulk Edit [YouTube](how-to-videos/add-and-bulk-edit-hardware-models-how-to.md) videos or [Bulk edit documentation](infrastructure-management/devices/hardware-models-templates.mdx) for more information!

Also, once a hardware type is defined, any new imported or discovered devices will go into the right category.

## View Details of Discovered Items

To view the details of discovered items, navigate to the that item's list page and select an item from the table. 

For example, go to **Resources > All Devices** and click on an device name to view device details. Depending on the device and information available, fields like **Hardware**, **Serial #**, **Total CPUs**, **RAM**, **OS**, and **IP Address** can be populated.

<ThemedImage
alt="View device details"
sources={{
    light: useBaseUrl('/assets/images/getting-started-with-auto-discovery/view-ci-details-light.png'),
    dark: useBaseUrl('/assets/images/getting-started-with-auto-discovery/view-ci-details-dark.png'),
}}
/>

* * *

## \[DEPRECIATED\] - Using the .NET Stand-alone Discovery Tool

_The .NET discovery tool has been depreciated and is replaced by the [WDS service.](installation/windows-discovery-service-installation.md) See ["Setting up WDS and RC for Windows Discovery from the UI"](installation/windows-discovery-service-installation.md)._

Add the URL and the credentials for your Device42 appliance to the settings tab, and head over to the Windows and Linux tab to configure discovery. Simply enter the IP range (or server names), credentials (if required), and start the discovery!

The Linux tab requires you enter a username and password, and the Help tab has brief tips around this. See the Documentation page for the Device42 auto-discovery client \[or for the remote collector\] for more information.

**The image below is an example of the DEPRECIATED Windows Discovery Tool UI** _(aka the .NET discovery tool):_

![wpid1961-media_1344827110858.png](/assets/images/wpid1961-media_1344827110858.png)

CI Details screens \[pre-v15\] looked like this:

![Device Details Example](/assets/images/wpid1962-media_1344828425174.png)