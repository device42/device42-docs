---
title: "Device - Other Tab"
sidebar_position: 8
---

### Other Tab

![device other tab](/assets/images/other_tab_screenshot_HL.png)

The Other Tab includes:

- **Device URLs** - see below
- **Power Unit (PDU) Ports** - see below
- **BIOS info** - BIOS version details
- **Patch Panel Ports** - see below
- **Device direct connection** - see below
- **[Custom Key / Values](administration/custom-key-value-pairs-explained.mdx)** - create and store custom attributes
- **File Attachments** - attach files associated to this device
- **Power Monitoring** - see below

### Device URLs

![device URLs on other tab](/assets/images/device_URLs.png)

Device URLs enable you to create links associated to the device.

The following variables can be used: 

- `{{device.name}}` = device name 
- `{{device.serial\_no}}` = serial number associated with this device
- `{{device.asset\_no}}` = asset number associated with this device

See also - [How to video adding links and other URLs](how-to-videos/adding-links-and-other-urls-to-devices.md)

### Ports in PDU

![ports in PDU](/assets/images/power_unit_ports.png)

If this device has associated PDU ports, the ports would be shown here.

### File Attachements

![Uploaded File Attachements](/assets/images/file_attachments_other_tab.png)

Any files you have uploaded and/or associated with this device will be shown here.

See also - managing [patch panels](infrastructure-management/connectivity/patch-panels/patch-panel-cable-management-definitions-and-legends-2.md) and [switch ports](infrastructure-management/ipam/switch-ports.md) in Device42
