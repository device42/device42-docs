---
title: "Tutorials Overview"
sidebar_position: 0
---

## Introduction to Device42

So you’ve downloaded the Device42 appliance and fired up the application. That was easy. You've logged in using the default credentials, and now you're looking at the dashboard below - except yours shows zero buildings, no rooms, not a single device ... _and so on_.

If you're wondering what to do next, you're in the right place! **This [Getting Started](../) section will quickly get you up to speed on common Device42 terms while also providing a primer to acclimate you with the Device42 UI.**

### **Let's get started!**

Below, you'll find:

1. Device42 object hierarchy & some common Device42 terminology in the first section;
2. An overview of the various ways to get data into Device42;
3. Last, but not least, a quick explanation of two more available tutorials which will help you decide if following one or both will be helpful to you!

![Device42 Dashboard](/assets/images/dashboard_d42v1511-sm.png)

* * *

## Hierarchies and Terminology in Device42

### **Let’s start by defining some common Device42 terminology:**

 - **Buildings, rooms, racks, and devices** are common Device42 terms that we collectively refer to as **objects**.
- **_Individual instances_** of **_objects_** in Device42 are also known as **CIs** (AKA Configuration Items).
        

* * *

At the top of the object hierarchy are buildings. In Device42, buildings refer to physical buildings that house one or more computer rooms. Each room may contain one or more racks _(aka "cabinets")_ plus un-racked objects _(more on these shortly)_. Buildings are at the top of the object hierarchy in Device42; there are no higher-level objects.

Let's consider a campus with multiple buildings. The following are two common approaches utilized to represent this scenario in Device42:

1. The simplest and most direct option is to define each of the individual physical buildings as buildings in Device42 1:1. The building naming scheme is your choice, but a common approach would be to include a commonly used moniker for each building along with the building address, e.g. ‘East Campus / 151 Main St.’; A second option would be just the address, e.g. "115 Main St."
2. Alternatively, you might find you have multiple buildings that you would like to logically divide into 'deployments'. In this case, it might make sense to create a Device42 building called, for example, ‘East Campus’ (referencing the entire East Campus deployment), treating this deployment within Device42 as if it were physically all in one a single building. In this case, each data room of interest across all physical buildings on East Campus would be created within the 'East Campus' room, neatly and logically grouping all managed compute /assets across East Campus. Perhaps each room name would begin with the physical building name (e.g. two rooms within 'East Campus" might be ‘151 Main St / 2nd Floor Data Closet’ & '155 Main St. / Basement Server Installation').

* * *

### Devices & Assets

Everything that you place inside a room is either a device or an asset, and each and every one is an individual CI. The main difference between a device and an asset is that devices have IP addresses.

Devices include physical devices (e.g. servers and switches), virtual devices (virtual machines), cluster devices (e.g. disk clusters), blade devices (that go inside a chassis), other devices (includes IP-addressable UPS’s, PDU’s, …), and unknown devices. Unknown devices are sometimes created by the device42 autodiscovery processes (see below) when devices are discovered that have an unknown type. Assets include CRAC’s, Breaker Panels, Cable Modems, Fax Machines, Monitors, Scanners, Shredders, Speaker Phones, Software, Filler Panels, Patch Panels, AC’s, Fabric Extenders, TAP’s, and DMARC’s. You can also define other asset types.

Other Device42 object types include:

- **Permissions** : Each of the 100+ Device42 object types (e.g. rooms, physical devices, patch panels, and so on) has add, change, view, and delete permissions. These 400+ permissions can be assigned to both individuals and groups of individuals.
- **Customers** : This object holds owner or user of a device or asset. You can use this object to define actual customers (e.g. if you are a service provider), corporate entities, corporate departments, or any other organizational entity.
- **Vendors** : Providers of devices, /assets, and services (e.g. Dell or HP).
- **Passwords** : Device42 can track service passwords (e.g. database passwords) and offers individual and role-based authorization for each password that is independent of the individual and role-based permissions that can be applied to the various Device42 objects.
- **Hardware Models** : There are numerous attributes that can be assigned to each device. However, if we had only individual attributes for each device, and a site had, for example, 80 Dell 1950 servers, then one would be required to repeat the attributes of the Dell 1950 server 80 times. For this reason, we have a hardware model object. You define the attributes of a particular hardware model once and then just add the hardware model to the device.
- **PDU Models** : Similar concept to Hardware models (see above) but for PDU’s.
- **Operating Systems** : Similar concept to Hardware models. Enter information about an OS once and add the OS to a device.
- **Parts** : Most companies maintain an inventory of spare parts (e.g. disk drives, RAM, cpu’s, and so on). These are tracked in Device42 as Parts.
- **Purchases/Contracts** : Holds basic purchasing information for devices and /assets. Also HW support warrant and other contract info.
- **Circuits** : Track telco, internet, or WAN circuits.
- **Cost Centers** : Cost centers can be assigned to purchases and purchase line items.
- **Service Profiles** : Stores Cisco UCS service profiles
- **IP Addresses** : Track IP addresses. Related objects tracked via Device42 are Subnets, VLANs, VRF Groups, MAC Addresses, and IP/NAT records.
- **DNS Zones / Records**
- **Switch Ports:** Track connections to switches, TAP’s, patch panels, and devices
- **Application Components** : Application components (e.g. web server, Oracle server, and so on) are assigned to devices and dependencies between application components are defined to enable impact charts.

* * *

## Discovering your infrastructure: Getting your data into Device42

There are numerous ways to get data into (and out of!) Device42. As a **best practice**, we suggest most users start with autodiscovery. It's best to begin by discovering your network, working your way up from there. Learn about the recommended infrastructure discovery order and more in the [Auto-Discovery Best Practices section](auto-discovery/autodisc-best-practices.md).

Device42's autodiscovery tools can be run in any order, and most can be scheduled to keep things up-to-date automatically. Device42's [advanced device matching](https://support.device42.com/hc/en-us/articles/360009292494-Release-Summary-15-09-02) algorithm will take care of correlating and de-duplicating discovered information to ensure you don't end up with multiple entries for the same CIs (where possible!). For example, should one autodiscovery tool find a server, its serial number, its IP address, and its MAC address, while another autodiscovery job or tool finds that same MAC address connected to a switch port, these details are all automatically reconciled.

Another way to get data into Device42 quickly is by using [Device42's RESTful APIs](https://api.device42.com). With Device42's RESTful APIs, data can be easily transferred to & from anywhere you'd like - from files on your local disk or network, spreadsheets, other applications, custom Windows or Linux shell scripts, automation, both one-time and/or on a recurring basis. All of Device42's APIs are RESTful, meaning only a minimum level of programming is required to interact, as all endpoints utilize the familiar, standardized calls: _\[GET, POST, PUT, & DELETE\]_.

For customers and/or companies that don’t have programming skills at their disposal, or just desire a simpler to enter data in bulk, all APIs are also available for use via spreadsheet, as well. Using spreadsheets, you can both load new data and/or download existing data, easily manipulating & re-uploading as well - _and FAST!_ Prior efforts spent documenting /assets, IPs, subnets, etc. in spreadsheets need not go to waste -- Simply use the [Device42 Generic Import Tool](https://www.device42.com/bulk-data-management/) & load your existing data, too!

Of course, there are forms available for screen-based data entry via the UI, as well. Note that you may use any desired combination of autodiscovery, RESTful APIs, spreadsheet imports, and screen-based data entry methods as needed/preferred to enter, manipulate, & export your data.

## Tutorials & How-To Videos

Three tutorials are available to help familiarize you with the Device42 system, and a selection of How-to videos are available that address common questions: ([Check out the how-to videos index here!](docs/how-to-videos/index.md))

1. The [Loading Data Using the API Tutorial](getstarted/tutorials/tutorial-loading-data-using-the-api.md) uses the API to load a fairly robust set of data into Device42 system. Don't be concerned if you are not a programmer. The script used in this tutorial is a very simple bash script. Please send us a note if you would like a sample in PowerShell, Python or other languages.
2. The [Loading Data Using Spreadsheets Tutorial](getstarted/tutorials/device42-tutorial.md) uses spreadsheets to load data. There is no scripting involved. If you are fairly certain that you will never script API calls, this is the tutorial you should use.
3. The [Navigating The Device42 User Interface Tutorial](getstarted/tutorials/tutorial-navigating-the-device42-user-interface.md) explores the Device42 core features using your data (follow the above tutorials to create data, or should you not have time to create your own data, request a sample spreadsheet of data by emailing support@device42.com. This sample spreadsheet will load a wide variety of data in Device42; use tutorial #2, "Loading data using spreadsheets" to load the sample data).

It might not be necessary to work through all of the tutorials, but we absolutely recommend that you work through at least one of them if you're new. Many will find it beneficial to follow through on more than one tutorial, as well, gaining valuable experience along the way. If you'd like to keep your Device42 instance fresh for each tutorial, or would like to revert back to fresh after doing one, simply use hypervisor snapshots (ask your IT/sysadmin if you don't manage Device42!), start with a new copy of the Device42 virtual appliance, or set up a dedicated training environment!

You now should be well on your way to becoming a D42-wiz, and we sincerely hope you're enjoying Device42 as much as we enjoy building it! If you've got any questions, comments, or feature requests, please let us know at [support@device42.com](mailto:support@device42.com).
