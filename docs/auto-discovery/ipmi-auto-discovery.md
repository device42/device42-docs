---
title: "IPMI/Redfish Autodiscovery"
sidebar_position: 15
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

## IP Management Interface (IPMI) Discovery

Device42 can discover a device via its IPMI/BMC (iDrac, iLo, etc.) board. From a device's IPMI interface, Device42 can discover the hardware model, serial number, and the BMC interface's IP address and MAC address, both of which are added to the device record as an interface labeled "mgmt".

## Add a New IPMI Autodiscovery Job

Navigate to **Discovery > IPMI / Redfish** and click **+  Add IPMI/Redfish Autodiscovery Job** to create the IPMI autodiscovery job. 

<ThemedImage
  alt="Add IPMI/Redfish job"
  sources={{
    light: useBaseUrl('/assets/images/ipmi-auto-discovery/ipmi-job-light.png'),
    dark: useBaseUrl('/assets/images/ipmi-auto-discovery/ipmi-job-dark.png'),
  }}
/>

Fill in the basic job details:

- **Job Name:** Enter a unique name for the job. 
- **Server(s):** Input the IP address range against which you want to run the job. 
- **Exclude Server(s):** Add any servers for which you want to exclude fetching information.
- **Discovery Target(s) Credential(s):** Add credentials to connect to the IPMI board.
  
    <ThemedImage
    alt="Add credentials"
    sources={{
        light: useBaseUrl('/assets/images/ipmi-auto-discovery/target-credentials-light.png'),
        dark: useBaseUrl('/assets/images/ipmi-auto-discovery/target-credentials-dark.png'),
    }}
    />


## Hostname To Use Option

Under the **Hostname to use** option, select a naming order to apply to newly discovered devices. When an IPMI discovery job is the first to discover a device, or there is no match against an existing device, a new device record is created with the hostname order you select. 

Note that this option does not affect devices that have already been discovered; in this case, the existing record is updated with the discovered MAC address and IP address from the BMC interface, with an interface label of "mgmt". 

Select one of the **Hostname to use** options:
- **Serial # / Reverse DNS / IP**: If the serial number is found, it is used as the device name. Otherwise, the reverse DNS name is used. If neither the serial number nor reverse DNS name is found, the IP address is used to name the device.
- **Discovered Name / Serial # / Reverse DNS / IP**: If the discovered name from IPMI is found, it is used to name the device. If no discovered name is found, the naming order is the same as above.
- **Reverse DNS / Discovered Name / Serial # / IP**: If the reverse DNS name is found, it is used as the device name. Otherwise, the discovered name is used. If neither the reverse DNS name nor the discovered name is found, the serial number is used to name the device. If neither those names nor the serial number is found, the IP address is  used as the device name.
  
<ThemedImage
  alt="Hostname to use option"
  sources={{
    light: useBaseUrl('/assets/images/ipmi-auto-discovery/hostname-light.png'),
    dark: useBaseUrl('/assets/images/ipmi-auto-discovery/hostname-dark.png'),
  }}
/>

- **Add hardware model, if found:** Select this option to add the hardware model discovered via the naming method. Note that the naming method is ignored for existing devices with hardware models.
- **Debug Level:** Select **Debug On** to generate a debug log that can be sent to the support via log bundle.

## Ensure IPMI Over LAN Is Enabled

The following image is an example from the Dell iDrac web portal that shows why IPMI over LAN must be enabled for autodiscovery to work.

![Make sure IPMI over LAN is enabled](/assets/images/ipmi-settings.png)

## Disabling Run as Operator

Deselect **Run as Operator** to allow autodiscovery to run as an administrator on the IPMI device. By default, IPMI autodiscovery is run as an operator rather than an administrator, which may result in some details not being autodiscovered. 

<ThemedImage
  alt="Run as operator option"
  sources={{
    light: useBaseUrl('/assets/images/ipmi-auto-discovery/run-as-operator-light.png'),
    dark: useBaseUrl('/assets/images/ipmi-auto-discovery/run-as-operator-dark.png'),
  }}
/>

## Run Now or Schedule

When creating or editing the job, select **Add another Autodiscovery Schedule** to run the job according to a schedule.

<ThemedImage
  alt="Schedule job"
  sources={{
    light: useBaseUrl('/assets/images/ipmi-auto-discovery/schedule-light.png'),
    dark: useBaseUrl('/assets/images/ipmi-auto-discovery/schedule-dark.png'),
  }}
/>

From the list page under **Discovery > IPMI / Redfish**, click **Run Now**  to run the job immediately.

<ThemedImage
  alt="Run now"
  sources={{
    light: useBaseUrl('/assets/images/ipmi-auto-discovery/ipmi-run-now-light.png'),
    dark: useBaseUrl('/assets/images/ipmi-auto-discovery/ipmi-run-now-dark.png'),
  }}
/>

Newly created jobs will not run on the first day they are created, to prevent an unintentionally large amount of jobs from running initially. If you want to run a job after its initial creation, select the **Run Now** button next to the job after creation.

