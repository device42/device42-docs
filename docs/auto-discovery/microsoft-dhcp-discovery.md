---
title: "Microsoft DHCP Discovery"
sidebar_position: 4.8
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

# Microsoft DHCP Discovery

As of v18.14, Microsoft DHCP Discovery has been added as an additional discovery type located under **Discovery > DHCP**. 

<ThemedImage
  alt="DHCP menu location and list page"
  sources={{
    light: useBaseUrl('/assets/images/microsoft-dhcp-discovery/dhcp-menu-and-list-page-light.png'),
    dark: useBaseUrl('/assets/images/microsoft-dhcp-discovery/dhcp-menu-and-list-page-dark.png'),
  }}
/>

Microsoft Dynamic Host Configuration Protocol (DHCP) is a service provided by the Microsoft Windows Server operating system. DHCP is a network management protocol used to dynamically assign IP addresses and other network configuration parameters (such as subnet mask, default gateway, DNS servers, etc.) to devices on a network.

If you are already using Microsoft DHCP Servers in your environment, Microsoft DHCP Discovery can automatically populate records on discovered DHCP Servers, IP Addresses, and subnets, including additional DHCP details like DHCP Scope, State, Lease Duration, DNS information, and Start/End address ranges. 

## Discovery

Microsoft DHCP Discovery uses WMI by default but WinRM is also supported and can be optionally enabled in the job configuration. 

<ThemedImage
  alt="DHCP WinRM option"
  sources={{
    light: useBaseUrl('/assets/images/microsoft-dhcp-discovery/enable-winrm-discovery-light.png'),
    dark: useBaseUrl('/assets/images/microsoft-dhcp-discovery/enable-winrm-discovery-dark.png'),
  }}
/>

:::note
If **Discover Using WinRM** is not enabled, you must have a WDS paired with the selected Remote Collector to use WMI. 
:::

## Miscellaneous
The following miscellaneous discovery options are also available:

<ThemedImage
  alt="DHCP WinRM option"
  sources={{
    light: useBaseUrl('/assets/images/microsoft-dhcp-discovery/dhcp-miscellaneous-options-light.png'),
    dark: useBaseUrl('/assets/images/microsoft-dhcp-discovery/dhcp-miscellaneous-options-dark.png'),
  }}
/>