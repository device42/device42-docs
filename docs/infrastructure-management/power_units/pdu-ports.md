---
title: "PDU ports"
sidebar_position: 4
---

In this section, we will discuss details regarding the PDU (Power Distribution Unit) ports. To edit PDU ports, open any PDU CI & invoke "Edit" mode via the main menu: _Infrastructure -> Power Units -> Power Units_

![](/assets/images/D42-22673_pdus-menu.png)

## Power Unit/PDU Port Connectivity

PDU ports can be connected to a device, an asset (such as a modem), or another PDU. Set the **connection type** via the _Content Type_ pulldown.

The **Object ID** is the ID of the _Content Type_ (the Device, Asset or PDU) object. Set the ID, click on the lookup icon. You will then see a list of existing object of the selected content type and you should select the device, asset or pdu that connects to this port.

![PDU Port connectivity](/assets/images/port_connectivity_PDUs.png)

**Field Definitions:**

- **Outlet Name:** The outlet name or # on the PDU.
- **Port Number:** The outlet or port # as labeled on the PDU.
- **Object Name:** object name is auto-generated (after saving) based on the selected _Content Type_ and _Object ID_, and provides a link to the device, asset, or PDU that is connected to the port.
- **Object PSU label:** The label of the power supply on the device/asset side.
- **Override Watts:** _Optional_ - Enter a value, in Watts, to override the wattage detected from hardware.
- **Bootstrap Power:** This field shows the peak power draw from this outlet at device boot time; empty if no device is connected.
- **Power Draw:** This field shows the _actual \[aka true\] power_ draw as measured from this outlet the last time it was polled; empty if no device is connected.
- **Active Power:** This field shows the _Active power_ \[aka reactive power: power absorbed then returned by the load\] draw as measured from this outlet; empty if no device is connected.
- **Apparent Power:** This field shows _Apparent \[aka true\] power_ draw, a combination of _Active \[reactive\] Power & True Power_ measurements; empty if no device is connected.
- **Power Factor:** This field shows _Calculated Power Factor_ \[PF = True Power / Apparent Power\]; empty if no device is connected.

### PDU/Power Unit Ports viewed from the device perspective

![PDU Ports on Device View ](/assets/images/pdu_ports_device_perspective-hl.png)

When viewing a PDU-connected device, the _Other_ tab shows the PDU port connections and power information (with Power Monitoring license for that device.

Only the _PSU object label_ is editable from a Physical Device's edit screen. All other PDU-related edits must be made on the PDU's edit page.

### PDU list view

![PDU List View](/assets/images/PDU_list_view.png)

The PDU List view _**\[Main Menu, Infrastructure > Power Units > Power Units\]**_ shows a high-level overview of the PDUs you have discovered in Device42.

### Infeed Power

The "Infeeds" Section will show the Power Draw Per Phase, both Rated Power & Actual Power Draw as measured. In addition, if your particular PDU supports it, Apparent Power, Power Factor, Voltage, and Active Power will also be displayed:

![PDU Infeed Power Details](/assets/images/Infeeds_PDU_power_view.png)

## PDUs & Available ports visible on the Rack View

Power units will also be found in the Rack View, which can be found in the main menu: _(Infrastructure-> Racks)_: ![PDUs on the Rack View](/assets/images/PDU_rack_view.png)

The PDU watts sum will also be visible on the rack layout page as shown below. Click _Power Details_ in the left pane to see PDU power details.

![](/assets/images/D42-22673_pdus-power-details-1.png)

### Understanding Power per PDU port & Override values

![Override PDU Watts](/assets/images/Override_watts-PDU.png)

The "Override Watts" field can be used for PDU port power estimations. By default, the watts value will be the device hardware value as measured _(if a device is connected to that port)_ - however, you can enter any value to override the default.

If there is no default value (e.g. an asset connected to a PDU port would not have default power value), you may use this field to manually enter the value. Overridden and default values will be used by Device42 to estimate the total power for that PDU. The sum is visible on all the PDU pages _(list, view, and change pages)_.
