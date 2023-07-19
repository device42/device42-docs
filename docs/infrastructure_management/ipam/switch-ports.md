---
title: "Switch Ports"
sidebar_position: 8
---

Switch ports can be auto-discovered using SNMP network discovery. Switch ports can also be added in bulk via switch templates _\[as discussed in next chapter\]_.  
Using Device42's RESTful APIs is an easy way to programmatically add (or edit) many switch ports at once.

### Add/Edit page

The switch port View and Edit pages show connectivity for a switch port. Access this page by clicking the "Switch Ports" button on any switch's device page:

![add switch ports](/assets/images/switch_ports_button.png)

From the "Switch Ports" page, you may view/edit existing switch ports by clicking on any Port ID, or may add one or more new ports by clicking the "Add Port" button on the upper right:

![Select Switch Port to view](/assets/images/Select-SwitchPort-to-view.png)

**Port**: Name of the switch port as found in auto-discovery or user generated.  
**Name**: As found in auto-discovery or user generated.  
**Description**: As found in auto-discovery or user generated.  
**Type**: You can add type of port using this. Use + sign to add a new type.  
**Network Device**: This would be a device with network switch value as checked.  
**Vlans**: All the vlans this port belongs to. **Module**: If this port is part of a module in a chassis-based switch, the module association can be made here.  
**Asset**: If the port is part of FEX or similar asset connected to switch, that association can be made here. You can either assign to module or asset.  
**Network Switch 2nd**: For stacked switches, this is the clustered switch. For paired switches, this is the second switch through which port can be managed.

Module, Asset and Network switch 2nd association can be done effectively using switch templates.

**Up**: Whether port is up or not.  
**Up admin**: Whether port is administratively up or not. **Count**: Count in number of ports. **Discovered type**: This is the port type as discovered in auto-discovery. This field is read-only. It can be used to mark certain ports as not counted, delete those or ignore certain port types in auto-discovery.  
**Remote Port:** If the port is connected to another switch port, you can make that association here. This can be auto-discovered as well.  
**Don't change via api**: If you override remote port connectivity manually, check this so auto-discovery or API doesn't make this change automatically.  
**Tags**: A comma separated list of tags you would like attributed to the switch port. **HW Address**: Any MAC addresses and devices that are connected to the switch port and the VLAN associated with the MAC address.

### Adding a new switch from switch port add/edit page

Clicking the "Add Port" button on the upper right brings you to the "Add Port" page:

![Add Switch Port](/assets/images/Add-Switch-Port.png)

More "Add Port" options:

![Add Switch Port cont'd](/assets/images/Add-Switch-Port-Part2.png)

### Switch port bulk operations

![Bulk switch port operations](/assets/images/Switch-port-bulk-operations.png)

You can filter ports by up/down status, network switch or by discovered type. You can choose selected ports to be not counted or counted in the total as shown in the image.

### Switch port count

![Switch_port_count.png](/assets/images/Switch_port_count.png)

In the rack layout view, the hover over shows the total "counted" ports and up ports for that switch.  
Also, from the switch port list page, you can filter by switch and up/down status and it shows the count of filtered ports.

### Switch port visualization

![Switch Port Impact Chart](/assets/images/switch_port_visualization_v15.png)

You can click on Impact Chart" for physical switches and it will show all the ports with connectivity including each MAC to device relationship. Even virtual devices are shown; They appear as 2nd layer devices (connected its vHost, or a '?' if the vHost is unknown). You can also click "follow remote ports" to expand the topology to include all remote ports and connectivity paths to connected switches.

### How do I represent a stacked switch?

All switches, stacked or not, are represented by their underlying hardware model. Therefore, the configuration of a "stacked" switched is handled when configuring the hardware model; adding an instance of a stacked switch simply involves selecting the underlying hardware model that you created previously.

To add a new stacked switch, head to Datacenter -> Device Hardware Models, and choose "Add a device Hardware Model". When creating the new device, begin by supplying a name, type, and other basic information and be sure to check the "Network Device" checkbox. Choose "Save and continue editing" and you will see more options.

### How to represent FEX modules?

![How_to_represent_FEX_modules.png](/assets/images/How_to_represent_FEX_modules.png)

FEX modules can be added as Asset type "Fabric Extender" and then associated with the switch using asset device relations. Again, this is easier to add using the switch templates as discussed in next chapter.
