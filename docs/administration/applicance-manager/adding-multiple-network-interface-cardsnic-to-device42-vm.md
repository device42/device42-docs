---
title: "Adding multiple Network Interface Cards(NIC) to Device42 VM"
sidebar_position: 1
---

If you need to reach networks that can not be reached from the primary virtual machine network adapter (e.g. for autodiscovery), you can add additional network adapters to your virtual machine as outlined below.

### Add multiple NICs to the VM

![Add multiple NICs to the VM](/assets/images/wpid4810-vmware_nic.png)

First, create an additional network adapter in the virtual machine settings. This is illustrated above for VMWare ESX.

Please note: Some virtualization platforms do not support adding NIC cards to a running instance. If this is the case for your virtualization platform, you will need to shutdown the Device42 instance first.

You can add as many NICs as you want.

One of the NICs will be the primary interface and will have default gateway and DNS defined. The other NICs will serve as the direct connection to specific network segments only.

### Configuring the assigned NICs

![Configuring the assigned NICs](/assets/images/wpid4809-vmware_console_ip_settings.png)

From the Device42 virtual machine console, select option 1, then choose 'n' at the 'Use DHCP' prompt.

For each NIC, you will be prompted for the IP Address, Netmask, Gateway, and DNS Server (see below). As displayed above, the console will display the MAC address of the NIC being configured. Please make sure you are assigning the right IPs to each card. To make sure, please compare the displayed MAC address with the one shown in the virtual machine console.

### First interface vs. other interfaces

![First interface vs. other interfaces](/assets/images/wpid4807-first_vs_rest_interface.png)

As shown in the image above, first add the Gateway and DNS info for the first NIC card. For the rest of the NIC cards, please add the IP Address and Netmask but please do NOT add the Gateway and DNS for any of the additional NIC cards. If you do, it will significantly slow down the boot up process while configuring the network interfaces.

You can check your config after from the Device42 appliance manager as discussed in next step.

### Checking your network config

![Checking your network config](/assets/images/wpid4626-usage-network-info.png)

You can check your network config from the appliance manager under System > Usage/Network Info.
