---
title: "Adding PDUs"
sidebar_position: 2
---

## Adding a PDU

Add a new PDU by heading to the Device42 main menu: **DataCenter > Power Units > Power Units**. Relevant PDU-related fields are listed & defined below. _Note that PDUs (like almost all D42 CI) can also be added and/or manipulated [via the API](https://api.device42.com/#pdu)._

![Add new PDU](/assets/images/add_new_PDU-p1.png)

### PDU Field descriptions

**PDU field**: description - _required \[yes/no\]_

- **Name**: Name your PDU _\- required_ 
- **Type**: PDU, UPS, or ATS _\- required_ 
- **Power Unit Model**: Choose the PDU model - _Must be defined if the PDU is rack mounted and/or to track individual ports on the PDU_ 
- **Serial #**: Name your PDU _\- required_ 
- **Is monitoring enabled**: Name your PDU _\- required_ 
- **Storage Room**: Name your PDU _\- required_ 
- **Bootstrap Power**: Name your PDU _\- required_ 
- **Rated Power**: Name your PDU _\- required_ 
- **First Added**: Name your PDU _\- required_ 
- **Last updated**: Name your PDU _\- required_ 
- **Object Category**: Name your PDU _\- required_ 
- **Tags**: Name your PDU _\- required_ 
- **Notes**: Name your PDU _\- required_

### Device Mapping section

![Add new PDU Rack info & Infeeds](/assets/images/add_new_PDU_p2.png)

### Device Mapping Section - PDU:

**Device**: Associating your PDU with a device is required only if you want to track IP address, life cycle, or other asset information for the PDU; IP and asset info is tracked via the chosen device - _optional_.

- **Serial #**: If PDU is mapped to a device, the serial number of the mapped device is shown here.
- **Asset #**: If PDU is mapped to a device, the asset number of the mapped device is shown here.

### Gateway PDU Mapping Section:

**Gateway PDU**: If this PDU is plugged into another PDU \[aka daisy chained\], identify the "Gateway PDU" it is plugged in to, if any. - _optional_.

**Infeeds**: Power infeed information will display here - _n/a; auto-discovered_. **Custom Fields**: any custom fields you have created for PDUs will display here. Custom fields are _optional_.

Upon saving your new PDU, Device42 will automatically add ports based on the selected PDU model. **Note that ports can only be added at the time of PDU creation and cannot be altered later!**

* * *

## Automatically created Ports

When a new PDU is created via the click of the "Save" button, PDU ports are created automatically based on the port layout defined on the chosen PDU model. For information on defining your PDU model(s), see the [Defining PDU Models](infrastructure_management/power_units/defining-pdu-models.md) section of the Device42 Docs.

![Automatically Created PDU Ports](/assets/images/auto_created_ports-pdu.png)

## Mapping PDU's to a Device

![Add device type other to associate with PDU](/assets/images/create_associated_device_for_PDU-hl.png)

To track details about a PDU, e.g.: The PDU serial #, asset #, PUD IP address, purchase information, life-cycle management, etc., the PDU can be mapped to a device. To create a device for the purpose of PDU mapping, simply do the following:

1. Create a **new Device**, setting its _Device Type = Other_ (see image above). It is recommended (but not required) that the device be named the same as the PDU that you will be mapping it to better organize.
2. Set the new device's _Device Subtype_ to PDU (see the above image). There is no need to define hardware, and all other fields are optional.
3. Save the new device.

5. Head back to the PDU ci that will be linked to the device you just created. Edit the PDU by clicking the "edit" button, and click the magnifying glass on the Device Mapping option (see the image below). Choose the device you created in steps 1-3 by clicking on its name in the "Select Device" popup.
6. Save the changes to the PDU
    
    ![PDU mapped to Device](/assets/images/mapped_device_PDU-HL.png)
    

### Viewing & navigating between a mapped PDU and Device

Jumping from a device to the PDU it's plugged in to, or from a PDU to the device page of a device that's plugged into it is simple: Above image - PDU mapping page, with a link to the device's details page.  
Below image- Device mapping page, links back to the PDU detail page.

![Device w mapped PDU](/assets/images/Device_mapped_PDU-hl.png)
