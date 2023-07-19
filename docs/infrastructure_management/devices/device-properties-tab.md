---
title: "Device - Properties Tab"
sidebar_position: 11
---

The device properties tab holds basic properties such as horsepower, memory, OS, MAC, switch port mappings, IP info and rack details.

With the exception of HDD and rack details, most other fields will be populated automatically if autodiscovery is working correctly.

![](/assets/images/wpid5504-media_1347919479539.png)

### CPU Memory and HDD for device

![CPU Memory and HDD for device](/assets/images/wpid5501-CPU_Memory_and_HDD_for_device.png)

This section holds values for total CPUs, cores/cpu, cpu speed, total RAM and basic HDD info. If you don't want CPU and memory info to be changed via autodiscovery, you can check "Dont change via api" as highlighted above.

### Operating System for device

![Operating System for device](/assets/images/wpid5506-Operating_System_for_device.png)

The OS, OS version and OS version # cover the basic Operating system details for the device. These can be entered by the autodiscovery client or scripts. The OS license key, OS support vendor and support expiry can be manually entered. Count in licensing is checked by default. You can uncheck if this doesn't need to count towards OS licensing for that OS. Dont change via API: same as above. Check this if you don't want properties to be changed via autodiscovery.

### Rack Info for device

![Rack Info for device](/assets/images/wpid5507-Rack_Info_for_device.png)

Rack information will only display for physical devices. When on the edit page, "show rack" will open the selected rack in a new tab for you to see where to place the device.

You can add devices in rack from rack view and excel import as well.

### MAC address and switch port mapping

![MAC address and switch port mapping](/assets/images/wpid5503-MAC_address_and_switch_port_mapping.png)

This section displays the MAC addresses and switch port mapping for each mac address. Device autodiscovery finds the IP and MAC address. Network snmp autodiscovery finds the mac address and switch port connectivity and those are automatically correlated to give you switch port mapping.

### IP Addresses

![IP Addresses](/assets/images/wpid5502-IP_Addresses.png)

You can choose a subnet and click on Assign IP button to automatically assign next available IP in that subnet.

It prompts you for confirmation and automatically assigns either the first available IP or creates next IP in the range and assigns to device. It refreshes the page after that ( **so make sure you don't have any other un-saved changes on the page** ).

If IP is already assigned, the same button will, upon confirmation, clear the device and MAC relations for that IP and make it available.

Once added you can correlate the device mac to IP using the lookup button next to MAC address as shown below and pick the label and IP type.

![](/assets/images/wpid5505-media_1347928201694.png)
