---
title: "IPMI/Redfish Autodiscovery"
sidebar_position: 15
---

## IPMI (IP Management Interface) Discovery

Device42 can discover a device via it's IPMI/BMC (iDrac, iLo etc.) board. From a device's IPMI interface, Device42 can discover the hardware model, serial #, and the BMC interface's IP address and MAC address, both of which are added to the device record as an interface labeled "mgmt".

## Add a new IPMI discovery job

![Add IPMI auto discovery job](/assets/images/IPMI-auto-discovery.png)

Select _Discovery > IPMI / Redfish_ to create the IPMI autodiscovery job. **Job Name** : A unique name to label this job. **Server(s):** Address range against which you want to run the job. **Username and password** : Credentials to connect to IPMI board **Hostname to use:** This is discussed below in more detail. **Add hardware model, if found:** Check this if you want to add the hardware model found via this method. If this is updating an existing device with an existing hardware model - this is ignored. **Debug Level** : On for more debug log that can be sent to the support via log bundle.

* * *

## Hostname to use

![IPMI Hostname to use setting](/assets/images/ipmi-job-small.png) 

The **Hostname to use** option comes into play when an IPMI discovery job is the FIRST to discover a device _(or cannot match against an existing device)_, and thus a new device record is created with the **hostname** determined by the order specified in the selected "Hostname to use" option. Note that this option does not affect devices that have already been discovered using a previous method (record already exists in Device42); in this case, the existing record is simply updated with the discovered MAC address and IP Address from the BMC interface, with an interface label of _"mgmt"._ **The following 3 options are available:**

- **Serial # / Reverse DNS / IP**: With this option, name use preference is Serial #, reverse DNS, IP address - If the serial # is found, it is used as the device name; Otherwise, the reverse DNS name is used. If neither of those two were found, the IP address is used to name the device.
- **Discovered Name / Serial # / Reverse DNS / IP**: With this, discovered name from IPMI is used first, if found; then the order is the same as above.
- **Reverse DNS/Discovered Name/Serial #/IP**: This option uses Reverse DNS name first, if found, then name as discovered via IPMI, then Serial #, and finally IP address.

* * *

## Make sure IPMI over LAN is enabled

![Make sure IPMI over LAN is enabled](/assets/images/ipmi-settings.png)

Above image is an example from Dell iDrac web portal to show that IPMI over LAN must be enabled for autodiscovery to work.

* * *

## Disabling Run as Operator

![](/assets/images/AD_IPMI-Redfish_Run-as-Op-box.png)

By default, IPMI autodiscovery is run as an operator rather than an administrator, which may result in some details not being autodiscovered. To allow autodiscovery to run as an administrator on the IPMI device, deselect "Run as Operator" in the autodiscovery job settings.

## Run Now or Schedule

![](/assets/images/image-700x115.png)

Select **Run Now** from the list page to run the job right away.

![](/assets/images/AD_Blade-Discovery-Run-Schedule.png)

Select **Add another Autodiscovery Schedule** from the when editing the job to create a run schedule for the job.

A note on autodiscovery scheduling behavior: newly created jobs will not run on the first day they are created, to prevent an unintended large amount of jobs from running initially. If you would like to run a job after its initial creation, simply select the "Run Now" button next to the job after creation.
