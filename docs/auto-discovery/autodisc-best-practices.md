---
title: "Autodiscovery Best Practices"
sidebar_position: 5
---

## Automating Device Discovery – Introduction

With its agentless, automated, device discovery tools, Device42 automates a significant portion of building an accurate picture of a user’s IT infrastructure. These device discovery tools work seamlessly in the background to “collect” inventory data and then populate Device42’s Configuration Management Database (CMDB).

Autodiscoveries can be scheduled to ensure the accuracy of the CMDB, based on each client’s unique requirements. Because these autodiscoveries are only collecting and reporting inventory data, the process is not network load intensive, and clients can schedule many autodiscoveries in a single day or even a single hour. The frequency of autodiscovery is often dependent on the amount of change occurring within the data center the more change, the more frequently autodiscoveries should be scheduled.

## Initial Discovery Sequence

While the discoveries can be run in any order, we suggest the following order to minimize some reconciliation work later on.

**Network:** Network auto-discovery builds your L2 Network landscape and pulls in your network devices inventory, VLANs, Subnets, IP Addresses, Mac Addresses, etc.

**V-Server:** V-Server auto-discovery collects data from hypervisors such as VMware,Citrix Xen, libvirt and oVirt

**Windows/Linux/Hyper-V:** Brings in Windows, Linux, Hyper-V machines

**Cloud auto-discovery:** Brings in virtual machines and storage in Amazon Web Services, Microsoft Azure, Cloudstack, Openstack, and numerous other platforms.

**Blade:** Blade server auto discovery identifies the blade chassis, the s blade servers, and their location within the chassis. By matching serial numbers to previously discovered data, Device42 builds a comprehensive blade database (see note below).

**IPMI:** Intelligent Platform Management Interface defines a set of interfaces used by system administrators for out-of-band management of computer systems and monitoring of their operation. We recommend this as last to run because IPMI might not have the correct hostname of the machine, but it will reconcile with a server discovered by any of the methods discussed above based on serial number.

## Matching Devices in Device42

With Autodiscovery jobs Device42 will check against serial number, UUID and name, in that order, to verify if it is an existing device to update or a new device to create. When looking for name Device42 also looks at any aliases that exist for a device as well.

Any info with the discovery that is related to an existing device will always use the latest info found. Meaning, if there was manual change to the device stating it has 2 CPUs and then an Autodiscovery job is run that pulls information for this device and it contains data for 3 CPUs, the newest data will be used and override the old entry.

## Building Comprehensive Discovery Profiles

Don’t be alarmed if one autodiscovery method does not provide the level of detail you were expecting. As you run subsequent autodiscoveries, Device42 constructs a comprehensive device profile by matching data such as serial number, UUID, and device name that is collected during subsequent discovery stages.

_For example:_

The Network discovery identifies the switch, its serial number, the number of ports to the switch, and MAC addresses associated with each port.

The V-Server (Hypervisor) discovery will identify the Hypervisors’ IP and MAC address data that links it to the Network discovered switch port data. This discovery adds hosts, virtual machines, and operating systems information to Device42’s CMDB.

The next level, Blade discovery, identifies the serial number, linking it to the Device42 CMDB, while adding the chassis, and the slot where the blade is located in that chassis.

The native Windows and Linux OS discovery matches the serial number and UUID, and adds new data to Device42 including the number of CPUs associated with the VM, the amount of RAM, and any other OS-related information (version and version number) specific to that VM.

So in the example above, you can find out what blade server is in which chassis slot, what network ports it is connected to (or chassis is connected to), what VMs are on that blade server (if it happens to be Hypervisor) and all the services that are running on those VMs and all the software that is installed on those VMs.

The result is a comprehensive profile of the devices, their characteristics, locations, software, and the physical/virtual interdependencies between the devices. This not only populates the detailed CMDB records, but also serves as the data for constructing Device42’s impact and dependency mapping functionality.

## Choosing a user account for autodiscovery

:::caution

Please do _not_ set up an autodiscovery scan using critical (production) account credentials!

Doing so, depending on permissions granted and configured password policies, could result in account lock-out, causing an otherwise completely avoidable outage.
:::

