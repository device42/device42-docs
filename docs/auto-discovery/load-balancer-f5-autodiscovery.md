---
title: "UCS / ACI / Load Balancer / F5 Autodiscovery"
sidebar_position: 32
---

## Discovering F5, NetScaler and other load balancers or cluster devices

Device42 Load Balancer discovery will discover virtual servers, pools and devices with dependencies. Basic inventory information includes hardware model, serial number, hostname(s), OS details, and more. Cisco ASA, Cisco UCS, NetScaler, and Cluster devices can be discovered by Device42 via their native APIs. Devices from A10 Networks should also produce good output using SNMP. 

Note that [SNMP discovery](network-auto-discovery.mdx) is needed for identifying the actual chassis and virtual appliances. 

Load balancer virtual server and pool member discovery is a simple process. To discover these devices, add a job under **Discovery > UCS/ACI/Load Balancers**.

## Load balancer discovery

### Prerequisites

For F5 discovery, ensure you have a **local username** with access to the F5 API. The API calls currently appear to require administrative access, and F5 devices do not currently allow username/password-based authentication for accounts that use an external auth provider (e.g. Active Directory, etc., which uses token-based authentication).

### Create a load balancer discovery job

If you're discovering an F5, do the following. You'll want to scan your F5 pool members via either SSH or the API, depending on the device's OS.

1. Start by scanning an F5 device via SNMP. Do this by adding a job under _Discovery → SNMP_ (Make sure you configure SNMP on your F5!), and input the correct (matching) community string. See the [Load Balancers](auto-discovery/load-balancers.md) page for more information about SNMP discovery.
2. After you've discovered via SNMP, go ahead and scan the F5 with the native F5 interface that can be found in _Discovery -> _UCS/ACI/Load Balancers_._ _(Note: This requires an account w/ F5 API permissions!)_.

- For other load balancer types, select the _Platform_ for that type from the drop-down menu.

![](/assets/images/D42-21271_UCS-F5-AD-add-job.png)

### Create a cluster device (UCS) discovery job

To discover a UCS or other Cluster Device, select "UCS" from the **Platform:** drop down (pictured above). _Visit the [dedicated Cisco UCS / ACI discovery docs page](cisco-ucs-auto-discovery.mdx) for more information._

1. Give your job a descriptive name that is meaningful to you, and specify the server hostnames, IP addresses, IP ranges, or CIDR blocks for your cluster devices.
2. Choose an RC, if desired, specify the correct port, and select or un-select the SSL option as needed
3. Choose a one or more sets of credentials that will allow Device42 to authenticate to & query your UCS/Cluster devices.
4. Set other options (explained below) as needed. Create a schedule if desired, and save your job.
5. Select "Run now" to run the discovery job now.

### Discovery Options Definitions

- Hostname to use: Discovered Name or Serial #; Choose the hostname format to use for newly discovered devices.
  (Note: This option only exists for UCS & ACI devices.)

- Give precedence to hostname: Select to force overwrite the existing hostname in Device42 for devices that already exist using the hostname option in "Hostname to use".
  (Note: This option is applicable to ACS/UCI devices only.)

- VRF Group for discovered devices: Place discovered devices into the following VRF group.
  (Note: This option is applicable to UCS/ACI devices only.)

- Object Category for discovered devices: Place discovered objects into the chosen category in Device42.
  (Note: This option is applicable to UCS/ACI devices only.)

- Overwrite existing object categories: Select to force overwrite of category on devices that already exist in Device42.
  (Note: This option is applicable to UCS/ACI devices only.)


## Run Now or Schedule

![](/assets/images/image-700x115.png)

Select **Run Now** from the list page to run the job right away.

![](/assets/images/AD_Blade-Discovery-Run-Schedule.png)

Select **Add another Autodiscovery Schedule** from the when editing the job to create a run schedule for the job.

A note on autodiscovery scheduling behavior: newly created jobs will not run on the first day they are created, to prevent an unintended large amount of jobs from running initially. If you would like to run a job after its initial creation, simply select the "Run Now" button next to the job after creation.
