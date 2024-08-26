---
title: "Autodiscovery Best Practices"
sidebar_position: 5
---

## Automating Device Discovery – Introduction

Device42 automates a significant portion of your IT infrastructure with agentless, automated, device discovery tools to build an accurate picture. The discovery tools work seamlessly in the background to collect inventory data and populate the Device42 Configuration Management Database (CMDB).

Autodiscovery is based on your unique requirements and can be scheduled to keep your CMDB updated. The process isn't network-load intensive because autodiscovery only collects and reports inventory data. You can schedule many autodiscoveries in a day or even in an hour. The autodiscovery frequency depends on the amount of change occurring in the data center, with more change requiring more frequent autodiscovery jobs.

## Initial Discovery Sequence

While the discoveries can be run in any order, Device42 suggests the following order to minimize reconciliation work later on:

**Network:** Network autodiscovery builds your Layer 2 network landscape and pulls in your network devices inventory, VLANs, Subnets, IP Addresses, Mac Addresses, and more.

**V-Server:** V-Server autodiscovery collects data from hypervisors such as VMware, Citrix Xen, libvirt, and oVirt.

**Windows/Linux/Hyper-V:** Brings in Windows, Linux, and Hyper-V machine data.

**Cloud autodiscovery:** Brings in virtual machine and storage data from Amazon Web Services, Microsoft Azure, Cloudstack, OpenStack, and numerous other platforms.

**Blade:** Blade server autodiscovery identifies the blade chassis, S blade servers, and their location within the chassis. By matching serial numbers to previously discovered data, Device42 builds a comprehensive blade database.

**IPMI:** Intelligent Platform Management Interface defines a set of interfaces used by system administrators for out-of-band management of computer systems and monitoring of their operation. Device42 recommends running this last because IPMI might not have the correct hostname of the machine, but it will reconcile with a server discovered by any of the methods discussed above based on serial numbers.

## Matching Devices in Device42

Autodiscovery checks against the serial number, UUID, and name, in that order, to check if it is an existing device to update or a new device to create. When looking for a name, Device42 also looks at any aliases that exist for a device.

The latest discovered information on an existing device is always used. For example, if there was a manual change to a device stating it has two CPUs, and an autodiscovery job pulls information for this device with three CPUs, the newer discovered data will override the old entry.

## Building Comprehensive Discovery Profiles

Don’t be alarmed if one autodiscovery method doesn't provide the level of detail you were expecting. As more auto discoveries are run, Device42 constructs a comprehensive device profile by matching data such as the serial number, UUID, and device name collected during subsequent discovery stages.

### Example Discovery Scenario

The Network discovery identifies the switch, its serial number, the number of ports to the switch, and the MAC addresses associated with each port.

The V-Server (Hypervisor) discovery identifies the Hypervisor’s IP and MAC address data that links it to the Network discovered switch port data. This discovery adds hosts, virtual machines, and operating system information to the Device42 CMDB.

The next level, blade discovery, identifies the Serial Number and adds it to the Device42 CMDB, along with details about the chassis and the slot where the blade is located in that chassis.

The native Windows and Linux OS discovery matches the Serial Number and UUID. The new data is added to Device42 including the number of CPUs associated with the VM, the amount of RAM, VM version, version number, and other OS-related information.

In the example above, you'll find out which blade server is in which chassis slot, what network ports or chassis it's connected to, what VMs are on that blade server (if it's a Hypervisor), all the services that are running on those VMs, and all the software installed on those VMs.

The result is a comprehensive profile of the discovered devices, their characteristics, locations, software, and the physical and virtual interdependencies between the devices. The discoveries populate the CMDB with detailed records and uses that information to construct Device42 impact and dependency mapping charts.

## User Account for Autodiscovery

:::caution
Do not set up an autodiscovery scan using critical production account credentials! Please create a separate, dedicated account to use only for discovery.

Account lock-out could result in an otherwise avoidable outage depending on your permissions and configured password policies. You as a customer are responsible for any such behavior.
:::
