---
title: "Autodiscovery"
sidebar_position: 1
---

## Device42 Autodiscovery jobs

Device42 offers a number of different autodiscovery tools, some of which are internal to Device42 while some run externally, as discussed below. You may run the autodiscovery tools in any combination and/or order that makes sense for your environment, and all can be run on a regular schedule, thus enabling the automation of a significant portion of your network documentation.

### Start with the network

Running network discovery first is recommended, and is important because it lays the framework for rest of your discoveries. By discovering your network first, you bring in the in-use subnets that will contain all of the to-be-discovered IP addresses and construct the layer 2 framework by discovering VLANs with live MAC addresses. Note that this _is not a requirement_, but that if IPs are discovered before adding subnets, those IPs will end up in a "catch-all" subnet named "undefined". In this case, you can simply manually add relevant subnets before re-running the discovery.

### Discovery credentials

**_WARNING_: Please do not set up an autodiscovery / scan using critical production account credentials!** _Depending on permissions granted & your configured password policies, account lock-out could result in an otherwise completely avoidable outage. You, the customer, are responsible for any such behavior that might result if you choose to ignore this requirement._

### Cloning Discovery Jobs

You can now clone an autodiscovery job while editing it to create a copy of the job with all its settings, which lets you replicate the job without having to manually re-enter all the job details. You can then modify the cloned job for your specific purposes. Click on a discovery _Job Name_ in a View listing to select the job you want to clone and then click _Edit_. Click the ellipse menu in edit mode and then click _Clone Job._

![](/assets/images/WEB-729_ad-page-clone-job-1.png)

Enter a _New Name_ for the cloned job and click _Create_.

![](/assets/images/WEB-729_ad-page-clone-job-2.png)

## Agent-based Discovery

There exist special situations in which an agent simply makes more sense, and for that reason, we over _optional_ autodiscovery agents for many platforms. Learn more on the [Device42 Agent-based discovery docs page](https://docs.device42.com/auto-discovery/agent-based-discovery/).

## Agent-based Offline Discovery & Upload Tool

There are some edge cases where discovery is desired but the network _(or lack of network!)_ doesn’t allow communication back to the main Device42 appliance _(for a variety of reasons)_.

Whether remote collectors can’t be deployed or policy simply doesn’t allow it, we've got the solution: See the [Device42 Offline Agent-based discovery page here](https://docs.device42.com/auto-discovery/agent-based-offline-discovery/), or simply [click here to download the Offline Discovery Data Processing Tool / Upload Utility](http://device42.s3.amazonaws.com/d42_uploadtool.zip?X-Amz-Expires=604794&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJIVJCNUSKR6MAOMQ/20190318/us-east-1/s3/aws4_request&X-Amz-Date=20190318T213954Z&X-Amz-SignedHeaders=host&X-Amz-Signature=ad5ce3a01cd88054a5a75465dacf9752c7793e66a5ef92e1555987f1131c10a4).

## Blade systems Discovery

HP & IBM Blade System (or Blade Center) chassis and blade details can be discovered using SNMP. This is discussed in more detail at: [https://docs.device42.com/auto-discovery/hp-bladesystem-auto-discovery/](https://docs.device42.com/auto-discovery/hp-bladesystem-auto-discovery/). Cisco UCS Manager is supported as well. You can grab chassis, blade, service profile information, and more. Details can be found at: [https://docs.device42.com/auto-discovery/cisco-ucs-auto-discovery/](https://docs.device42.com/auto-discovery/cisco-ucs-auto-discovery/)

## Cloud Platform Discovery

Connect to Amazon AWS, Alibaba Cloud, Microsoft Azure, Digital Ocean, Google Cloud, Linode, and Openstack from the cloud discovery under _Discovery > Cloud_. Cloud discovery details can be found here: [https://docs.device42.com/auto-discovery/cloud-auto-discovery/](https://docs.device42.com/auto-discovery/cloud-auto-discovery/)

## DNS Autodiscovery

DNS autodiscovery is built into Device42, and can do zone transfer(s) from your DNS server(s). It can be run and/or scheduled from the Device42 web UI: _Discovery > DNS Zone Sync (One way)_.

## Hypervisor / \*nix / Windows Autodiscovery

Hypervisors, Windows & Linux/UNIX discovery jobs can all be created using the main menu, _Discovery -> HyperVisors / \*nix / Windows_.

- Windows-based machine inventory details are discovered with WMI
- Linux machines inventory details are discovered via SSH
- VMWare hypervisor host and guest VM details are discovered using appropriate APIs <small(VMware, WMI)
- Hyper-V hypervisors / guests are discovered as Windows machines using WinRM, and documented separately.

Click here for the [VMware & VM discovery docs](https://docs.device42.com/auto-discovery/virtual-machine-auto-discovery/) page, and find the [Linux/UNIX discovery page](https://docs.device42.com/auto-discovery/linux-unix-server-auto-discovery/) here. Finally, learn more about [Windows (and HyperV) discoveries are documented here](https://docs.device42.com/auto-discovery/windows-and-hyper-v-auto-discovery/).

## IPMI Autodiscovery

Discover iLO, iDrac or other IPMI/BMC boards with basic hardware info and BMC IP and MAC address for a given IP range. If the server has already been discovered by OS level discovery methods, BMC IP and MAC address show up in device properties.

Discussed here in detail: [https://docs.device42.com/auto-discovery/ipmi-auto-discovery/](https://docs.device42.com/auto-discovery/ipmi-auto-discovery/)

## Midrange / Mainframe discovery (IBM AS/400 and z/OS)

Device42 supports agent-less mainframe and mid-range discovery of both the [IBM i / AS400 mid-range](/auto-discovery/ibm-i-as400/) platform & the [IBM z/OS mainframe platform](/auto-discovery/z-os-ibm-mainframe/).

- See the [IBM i/AS400 mid-range discovery documentation page here.](https://docs.device42.com/auto-discovery/ibm-i-as400/)
- See the [IBM z/OS mainframe discovery documentation page here](https://docs.device42.com/auto-discovery/z-os-ibm-mainframe/).

## Network / SNMP Autodiscovery

Run an SNMP discovery from the Device42 web UI main menu: _Discovery > SNMP_.

Using SNMP v1/v2c/v3 discovery for network devices, you can automate discovery of:

- Network device inventory
- Subnets/VLANs
- IP to MAC associations
- MAC to switch port associations
- Switch port status and remote port associations

SNMP Network discovery is covered in more detail at: [https://docs.device42.com/auto-discovery/setup-network-auto-discovery/](https://docs.device42.com/auto-discovery/setup-network-auto-discovery/)

## Node data from Chef and Puppet

Send Ohai node data from Chef server to Device42: [Sync node data from Chef](https://github.com/device42/chef_to_device42_sync_py) Sync puppet facts to Device42: [Script to sync Puppet nodes information](https://github.com/device42/puppet_to_device42_sync_py)

Another Puppet integration script is available on [API Autodisc repo](https://github.com/device42/Device42-AutoDiscovery-Scripts) that reads the YAML factor files and populates inventory details in Device42 using the RESTful API.

## Other SNMP-based discovery

SNMP discoveries can also be used to discover many other types of devices: Power devices are usually discovered using SNMP, e.g. UPS, ATS, and other SNMP-compatible network-connected hardware; Many environmental sensors also support SNMP discovery/polling. To run an SNMP v1/v2c/v3 discovery against any SNMP-compatible endpoint, see the SNMP section of [the SNMP/Network Discovery DOCS page](https://docs.device42.com/auto-discovery/network-auto-discovery/).

## Ping Sweep Utility

The [open source, standalone ping sweep tool](https://www.device42.com/autodiscovery/) uses NMAP in the background to run ping sweeps against the selected network(s), uploading discovered _IP, MAC, & reverse DNS_ details via Device42's the RESTful APIs; the tool is written in .NET.

There is also a ping sweep tool built in to Device42. Find it in the UI via the main menu, _Discovery > Ping Sweep_. (_note that the UI based option, may, in the future, be depreciated, and that the standalone tool is much faster_).

## Remote Collector (RC)

The Device42 remote collector (RC) is a lightweight virtual appliance (a VM) that can be quickly deployed wherever is necessary, for example, places like a secure network segment. RCs can be selected to run autodiscovery jobs by simply choosing them when creating the job. Simply choose the desired RC from the _"Remote Collector"_ drop-down when initially setting up a new autodiscovery job, or edit an existing discovery job, selecting the desired RC. Most autodiscovery jobs that can be launched from the Device42 "Discovery" menu support running from a deployed RC.

For more information, and full RC documentation, head to the dedicated [Remote Collector page](https://docs.device42.com/auto-discovery/remote-collector/)

## Scripts for Linux, Solaris, Windows and Mac

Alternatively, there are a selection of open-source scripts on the Device42 GitHub page available for use: For Mac, Linux, and Solaris autodiscovery, use this repo: [https://github.com/device42/nix\_bsd\_mac\_inventory](https://github.com/device42/nix_bsd_mac_inventory)

Windows discovery scripts can be found here: [Device42 GitHub repository](https://github.com/device42/Device42-API). Windows scripts use PowerShell 2.0/iPython to get individual Windows host details and/or to get Windows machines from AD. Details are relayed to the Device42 Main Appliance (MA) via the API. The Linux, Solaris, and Mac scripts connect to remote servers using SSH to gather inventory data, sending that data back via Device42's RESTful API.

## Using REST APIs

You can automate inventory management and integrate with your own scripts or other programs using the Device42 RESTful APIs as discussed at : [Device42 API docs](https://docs.device42.com/how-to-videos/api-imports-add-create-hardware-models/).

## VMware / Citrix XenServer / oVirt / Redhat Virtualization / KVM

Hypervisors are discovered via the Device42 web UI: _Discovery > HyperVisors / \*nix / Windows_. Using native APIs, Device42 connects to your VMWare vCenter server(s), ESX server(s), Citrix XenServer, oVirt, or Redhat Virtualization servers and retrieves host details, inventory details, and guest VM details.

Discussed in depth: [https://docs.device42.com/auto-discovery/vmware-auto-discovery/](https://docs.device42.com/auto-discovery/vmware-auto-discovery/)

* * *
