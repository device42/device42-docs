---
title: "Cisco UCS Cluster / ACI Fabric Autodiscovery"
sidebar_position: 9
---

## Setting up a Cisco UCS Cluster or ACI Fabric Discovery

### About Cisco UCS Cluster / ACI Fabric jobs

Device42 will poll your Cisco UCS (Unified Computing System) Manager to discover cluster device information or ACI (Application Centric Infrastructure) Fabric to discover your SDN (software defined networks).

UCS jobs will discover chassis, blades, and service profile information, while ACI jobs will discover network policy details that are controlling both your and/or physical network.

Should you be looking to discover a load balancer (which shares this discovery job page), see the [F5/Load balancer discovery docs](load-balancer-f5-autodiscovery.md).

![Cisco UCS Cluster/ACI Fabric Discovery Job](/assets/images/ucs_aci_load-bal-discovery_menu-2019.png)

You may create a job via the main menu at _Discovery > UCS/ACI/Load Balancers_ to add/manage UCS Manager(s).

Add your Cisco UCS (aka Unified Computing System) Manager or ACI (Application Centric Infrastructure) Fabric discovery job by entering one or more IPs or FQDNs, and credentials with permissions on the device (i.e., a valid username/password).

You can click on run now to run immediately or schedule it to run at certain times:

### **Scheduling UCS Cluster or ACI Fabric Discovery Jobs**

![schedule UCS ACI discovery job ](/assets/images/autodiscovery_schedule.png)

Scheduling your autodiscovery job to run on a recurring basis; you can choose to run it on certain weekdays and/or at specific times each day.

## UCS Cluster / ACI Fabric Discovery Option Definitions

**Hostname to use**: Discovered Name or Serial #; Choose the hostname format to use for newly discovered devices - _option only exists for UCS & ACI devices_.  
**Give precedence to hostname**: Select to force overwrite the existing hostname in Device42 for devices that already exist using the hostname option in _hostname to use_ - _ACS/UCI only_.  
**VRF Group for discovered devices**: Place discovered devices into the following VRF group - _UCS/ACI devices only_.  
**Object Category for discovered devices**: Place discovered objects into the chosen category in Device42 - _UCS/ACI devices only_.  
**Overwrite existing object categories**: Select to force overwrite of category on devices that already exist in Device42 - _UCS/ACI devices only_.

### Device and Chassis Names

If an existing device is not found for the chassis or the blade(based on the serial #), Device42 will add a new device. The Name is derived from the DN and the serial # of the device, whether it is a chassis or a blade.  
![UCS ACI hostname to use](/assets/images/UCS_ACI-hostname-to-use.png)

### Service Profiles

Navigate to _DataCenter > UCS Service Profiles_ to see the discovered service profiles. Service profiles show the Name, the DN, the UCSManager, and the Device association. You can search from the service profile list page and the search box on the dashboard.

![](/assets/images/DataCenter_UCS-Service-Profiles-List-1.png)

## Run Now or Schedule

![](/assets/images/image-700x115.png)

Select **Run Now** from the list page to run the job right away.

![](/assets/images/AD_Blade-Discovery-Run-Schedule.png)

Select **Add another Autodiscovery Schedule** from the when editing the job to create a run schedule for the job.

A note on autodiscovery scheduling behavior: newly created jobs will not run on the first day they are created, to prevent an unintended large amount of jobs from running initially. If you would like to run a job after its initial creation, simply select the "Run Now" button next to the job after creation.
