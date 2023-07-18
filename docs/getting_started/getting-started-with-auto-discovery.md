---
title: "Getting Started with Autodiscovery"
sidebar_position: 2
---

The following how-to runs down quickly enumerating network objects with Device42 Autodiscovery.

## Getting Started with Device42 Videos

**If you're new** to Device42, you'll want to start with our [**getting started videos** \[new window\]](https://www.youtube.com/playlist?list=PLJ9je_qSNumJ-rMzIXUufY-XsbrwWfeCR). In under 5 minutes, you'll learn how to get your RC (Remote Collector) set up, connect a WDS (Windows Discovery Service) instance to that RC, and you'll run your first discovery job! [Watch 'em now](https://www.youtube.com/watch?v=ClkvR9zLQUU&t=0s&list=PLJ9je_qSNumJ-rMzIXUufY-XsbrwWfeCR&index=2), and you'll be an expert in no time!

Ready to learn more? For those that prefer videos, there's a [video-based Device42 "How-To" series on YouTube](https://www.youtube.com/playlist?list=PLJ9je_qSNumJ4HuNVS75wzRgBRrtCh6_q), (it's got its own [section](/how-to-videos/)). Have a specific question and you don't see what you're looking for here in the docs, email support@device42 and let us know -- there's a good chance other people are wondering the same thing, and we'll be happy to create a new video ... _Happy discovering!_

## Autodiscovery Account WARNING

**Discovery Account _WARNING:_ Please do _not_ set up an autodiscovery / scan using critical \[production\] account credentials! Please create a separate, dedicated account to use _only_ for discovery.**

_Depending on permissions granted & your configured password policies, account lock-out could result in an otherwise completely avoidable outage. You, the customer, are responsible for any such behavior that might result._

## Creating Subnets

![Create a new subnet](/assets/images/add_new_subnet_2018v15.PNG)

All discovered IP addresses will be placed in their respective subnets if subnets have been pre-defined. Otherwise, IPs end up in an "undefined" subnet.

**Go to IPAM > Subnets, click on +Add Subnet on the top right corner.**

The required fields are Name, Network and mask bits. Others are optional. The begin and end range are automatically calculated based on network and bits if left empty.

 

![View or edit existing subnets](/assets/images/select_subnet_to_view-2018v15.PNG)

## Setting up Autodiscovery

### Set up WDS (Windows Discovery Service)

**Note: All recent releases \[v14+\] of Device42 can run all discoveries from the web UI \[and/or via [Remote Collectors](/auto-discovery/remote-collector-rc/)\], including WMI discovery as long as the [WDS service](/getstarted/installation/windows-discovery-service-installation/) (Windows Discovery Service) has been configured.** Now is a good time to set up a [Remote Collector (RC)](https://docs.device42.com/auto-discovery/remote-collector-rc/), as RCs, being dedicated to discovery, can handle larger network ranges than your MA. If you'll be discovering any Microsoft Windows OS-based servers/guests, go ahead and set up an instance of WDS. Note that your WDS instance can be connected to either your Main Appliance OR to a Remote Collector. If you do have an RC set up, it's recommended to connect WDS to it as opposed to connecting it to your MA.

### Creating your first discovery job

Once you've installed the [WDS](/getstarted/installation/windows-discovery-service-installation/) (if you'll be discovering any Microsoft Windows-based products), you're ready to run your first discovery. See the [Auto-discovery best practices](/auto-discovery/autodisc-best-practices/) page for our recommendations on the best order in which to run initial discovery, or jump right in to a [Network SNMP discovery if you're already familiar!](/auto-discovery/network-auto-discovery/)

Now, create your first discovery job! Start by discovering your Network first - begin with an [SNMP/Network discovery job](https://docs.device42.com/auto-discovery/network-auto-discovery/) _(main menu, Discovery --> SNMP)_ to build out a base for the rest of your network before moving on to vServer discovery, followed Windows/Linux servers, etc. ![Add SNMP discovery](/assets/images/add_SNMP_discovery_RC_v15.png)

* * *

## Dealing with device type "unknowns"

Any devices that are not virtual will come over as device type "unknown" initially. The reason is that the appliance has not been told whether the hardware belongs to the physical, blade or another category.

The following device types have a hardware model. Each hardware model can be one of 3 types: regular, blade or other.

- **Regular:** device type represents physical devices
- **Blade:** device type represents blade devices
- **Other:** device type represents 'other' devices, e.g. laptops, workstations, network printers, etc. _(that are not rack mounted)_

Once you change a hardware type, all the corresponding devices that refer to that hardware and are type unknown, will automatically be categorized accordingly.

The "Bulk hardware edit" feature allows changing hardware properties in bulk for all undefined hardware types and it will automatically categorize all devices belonging to it. See the Bulk Edit [YouTube](/how-to-videos/add-and-bulk-edit-hardware-models-how-to/) videos or [Bulk edit documentation](/device/hardware/) for more information!

Also, once a hardware type is defined, any new imported or discovered devices will go into the right category.

* * *

## \[DEPRECIATED\] - Using the .NET Stand-alone Discovery Tool

_The .NET discovery tool has been depreciated and is replaced by the [WDS service.](/getstarted/installation/windows-discovery-service-installation/) See ["Setting up WDS and RC for Windows Discovery from the UI"](/getstarted/installation/windows-discovery-service-installation/)._

Add the URL and the credentials for your Device42 appliance to the settings tab, and head over to the Windows and Linux tab to configure discovery. Simply enter the IP range (or server names), credentials (if required), and start the discovery!

The Linux tab requires you enter a username and password, and the Help tab has brief tips around this. See the Documentation page for the Device42 auto-discovery client \[or for the remote collector\] for more information.

**The image below is an example of the DEPRECIATED Windows Discovery Tool UI** _(aka the .NET discovery tool):_ ![wpid1961-media_1344827110858.png](/assets/images/wpid1961-media_1344827110858.png)

CI Details screens \[pre-v15\] looked like this:

![Device Details Example](/assets/images/wpid1962-media_1344828425174.png)

This is the same screen in the new D42 UI \[v15+\]: ![Device Details example, v15+](/assets/images/device_details_example.PNG)

Device details like name, hardware model, serial #, CPU & RAM info, OS, MAC, and IP info are populated depending on what is discovered.
