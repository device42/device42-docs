---
title: "UCS / ACI / Load Balancer / F5 Autodiscovery"
sidebar_position: 32
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

## Discovering F5, NetScaler, and Other Load Balancers or Cluster Devices

Device42 Load Balancer discovery will discover virtual servers, pools, and devices with dependencies. Basic inventory information includes hardware model, serial number, hostname(s), OS details, and more. 

Cisco ASA, Cisco UCS, NetScaler, and Cluster devices can be discovered by Device42 via their native APIs. Devices from A10 Networks should also produce good output using SNMP. 

Note that [SNMP discovery](network-auto-discovery.mdx) is needed for identifying the actual chassis and virtual appliances. 

To discover load balancer virtual server and pool member devices, add a job under **Discovery > UCS/ACI/Load Balancers**.

## Load Balancer Discovery

### Prerequisites

For F5 discovery, ensure you have a **local username** with access to the F5 API. The API calls currently appear to require administrative access, and F5 devices do not support username and password authentication for accounts that use external authentication providers - such as Active Directory, which uses token-based authentication.

### Create a Load Balancer Discovery Job

Navigate to **Discovery > UCS/ACI/Load Balancers**, click **+ Add UCS/ACI/Load Balancers for Autodiscovery**, and select the **Platform** for load balancer type from the dropdown menu.

<ThemedImage
  alt="Platform list"
  sources={{
    light: useBaseUrl('/assets/images/load-balancer-f5-autodiscovery/platform-list-light.png'),
    dark: useBaseUrl('/assets/images/load-balancer-f5-autodiscovery/platform-list-dark.png'),
  }}
/>

If you're discovering an F5 device, follow these steps:

1. Start by scanning an F5 device via SNMP. Add a job under **Discovery > SNMP** and input the correct matching community string. Make sure you configure SNMP on your F5. See the [Load Balancers](auto-discovery/load-balancers.mdx) page for more information about SNMP discovery.
2. Once discovered via SNMP, scan your F5 pool members via either SSH or the API, depending on the device's OS. This will allow you to gather detailed information about the F5's pool members.
3. After you've discovered via SNMP, scan the F5 by creating a discovery job under **Discovery > UCS/ACI/Load Balancers** as shown above. This requires an account with F5 API permissions.

### Create a Cluster Device (UCS) Discovery Job

To discover a UCS or other Cluster Device, select **UCS** from the **Platform** dropdown menu(pictured above). 

1. Give your job a descriptive name that is meaningful to you, and specify the server hostnames, IP addresses, IP ranges, or CIDR blocks for your cluster devices.
2. Choose an RC, if desired, specify the correct port, and select or unselect the SSL option as needed
3. Choose one or more sets of credentials that will allow Device42 to authenticate to and query your UCS/Cluster devices.
4. Set other options (explained below) as needed. Create a schedule if desired, and save your job.
5. Select **Run now** from the list page to run the discovery job now.

Visit the [dedicated Cisco UCS / ACI discovery docs page](cisco-ucs-auto-discovery.mdx) for more information.

### Discovery Options Definitions

<ThemedImage
  alt="Discovery options"
  sources={{
    light: useBaseUrl('/assets/images/load-balancer-f5-autodiscovery/discovery-options-light.png'),
    dark: useBaseUrl('/assets/images/load-balancer-f5-autodiscovery/discovery-options-dark.png'),
  }}
/>

These options are applicable to UCS/ACI devices.

- **Hostname to use:** Choose the hostname format to use for newly discovered devices. Choose between **Discovered Name** or **Serial #**.

- **Give precedence to hostname** Select to force overwrite the existing hostname in Device42 for devices that already exist using the hostname option in **Hostname to use**.

- **VRF Group for discovered devices:** Place discovered devices into the following VRF group.

- **Object Category for discovered devices:** Place discovered objects into the chosen category in Device42.

- **Overwrite existing object categories:** Select to force overwrite of category on devices that already exist in Device42.


## Run Now or Schedule

Select **Add another Autodiscovery Schedule** from the when editing the job to create a run schedule for the job.

<ThemedImage
  alt="Add a schedule"
  sources={{
    light: useBaseUrl('/assets/images/load-balancer-f5-autodiscovery/discovery-schedule-light.png'),
    dark: useBaseUrl('/assets/images/load-balancer-f5-autodiscovery/discovery-schedule-dark.png'),
  }}
/>

Select **Run Now** from the list page to run the job right away.

<ThemedImage
  alt="Run now option"
  sources={{
    light: useBaseUrl('/assets/images/load-balancer-f5-autodiscovery/run-discovery-now-light.png'),
    dark: useBaseUrl('/assets/images/load-balancer-f5-autodiscovery/run-discovery-now-dark.png'),
  }}
/>

Newly created jobs will not run on the first day they are created to prevent an unintentionally large amount of jobs from running initially. If you would like to run a job after its initial creation, select the **Run Now** from the autodiscovery list page.
