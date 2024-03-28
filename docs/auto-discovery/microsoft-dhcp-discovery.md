---
title: "Microsoft DHCP Discovery"
sidebar_position: 4.8
---

# Microsoft DHCP Discovery

As of v18.14, Microsoft DHCP Discovery has been added as an additional discovery type located under **Discovery > DHCP**. 

Microsoft Dynamic Host Configuration Protocol (DHCP) is a service provided by the Microsoft Windows Server operating system. DHCP is a network management protocol used to dynamically assign IP addresses and other network configuration parameters (such as subnet mask, default gateway, DNS servers, etc.) to devices on a network.

If you are already using Microsoft DHCP Servers in your environment, Microsoft DHCP Discovery can automatically populate records on discovered DHCP Servers, IP Addresses, and subnets, including additional DHCP details like DHCP Scope, State, Lease Duration, DNS information, and Start/End address ranges. 

![](/assets/images/microsoft-dhcp-discovery/microsoft-dhcp-3.png)

## Discovery

Microsoft DHCP Discovery uses WMI by default but WinRM is also supported and can be optionally enabled in the job configuration. (Example Below)

![](/assets/images/microsoft-dhcp-discovery/microsoft-dhcp-1.png)

:::note
If **Discover Using WinRM** is not enabled, you must have a WDS paired with the selected Remote Collector to use WMI. 
:::

## Miscellaneous
The following miscellaneous discovery options are also available:

![](/assets/images/microsoft-dhcp-discovery/microsoft-dhcp-2.png)