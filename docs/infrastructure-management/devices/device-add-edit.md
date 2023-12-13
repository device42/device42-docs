---
title: "Add/Edit a Device"
sidebar_position: 1
---

## Device List and Add/Change Pages

The Device Add and  Change pages have direct entry for device properties such as name, asset number, and serial number. You can also set the device _Type_, which allows you to define a Physical, Virtual or Cluster device. The _Network Device_ checkbox should be checked for all network hardware, _Blade Chassis_ if the device happens to be a blade chassis, and _Virtual/Container Host_ if the device will host virtual devices. Service Level defines a device's production status, while _Hardware_ allows a user to select the appropriate hardware model.

:::note
As of  v16.19.00, devices found by autodiscovery that have hardware models are now presented in Device42 as physical devices (previously these devices were sometimes presented as ‘unknown’ or ‘other’). 'Other' type devices are now also identified as physical, with the “other” device subtypes now being physical device subtypes. Previously any previously undiscovered hardware would come in as ‘unknown’ device types until defined by the user.
:::

### View Devices

- Select _Devices > All Devices_ (or one of the listed device types) to display a list of devices.

![](/assets/images/WEB-764_1.png)

- Click on a device _Name_ to see details about the device.

![](/assets/images/WEB-764_2.png)

Though the tabs will change by device type, most devices will have these tabs:

- Properties
- Other
- Parts

We will discuss the direct properties of devices below and the four tabs in the other sections of the documentation.

* * *

### Add a Device

- Select _Devices > All Devices_ (or one of the listed device types) and then click _Add Device_ in the upper right hand corner.

![](/assets/images/WEB-764_3.png)

- When you select _Add Device_,  you will see the generic device add page with the _Type_ shown as blank. New devices also default to _In Service_, with a _Service Level_ set to Production.
- Enter a _Name_ for the device and then select the device Type (physical, virtual, or cluster).

![](/assets/images/WEB-764_4.png)

The available options and fields on the Add Device page are different depending on which device _Type_ you select.

- For example, for physical devices, you can select or add a _Physical Subtype_.

![](/assets/images/WEB-764_5.png)

- For virtual devices, you can select a _Virtual Subtype_.

![](/assets/images/WEB-764_6.png)

- The cluster devices, the page displays a list of _Available Devices in Cluster_.

![](/assets/images/WEB-764_7.png)

Enter or select the options you want for the device, and then click  _Save_ to save the device and add it to the appropriate device list.

## Basic Device Addition / Editing

- Select _Devices > All Devices_ (or one of the listed device types) to display a list of devices.
- Click on a device _Name_ to see details about the device, and then click _Edit_ at the top right of the View page.

![](/assets/images/WEB-764_8.png)

_As an example, let us consider a network switch:_

- The highlighted check boxes above represent whether the device is a Network Device, Blade Chassis, a Virtual/Container Host, and its Service Level status.
- **It is important to choose the correct attributes**: you can only add switch ports to devices designated a Network Device (with the Network Device option checked). Similarly, blades can be ONLY be added to a Blade Chassis, and only a Virtual/Container Host can have guests.
- Service Level above highlights the current service level of that device. For example, if you have a server which is in procurement and waiting to be installed, you can add a service level called In Procurement, and reserve rack space for the device in future – you are free to customize services levels as you see fit.
- The fields Hardware, Serial #, and Asset # are displayed for physical and blade device.

### Non-editable Fields 

Fields populated through EnrichAI, like **OS Version** or OS **End of Life**, are not editable. To set these fields, EnrichAI must be disabled and the record disconnected from the EnrichAI record.

![Non-editable fields for device OS](/assets/images/device-operating-systems-enriched.png)

### Warning: Changing a Device Type

It is possible to change a device type (e.g. from physical to virtual, cluster, or unknown). Please be aware that when you change a device type, you will lose all attributes that are specific to the device type. Device42 presents an alert of potential change conflicts when a user chooses to change the type of a device.

![](/assets/images/WEB-764_9.png)

**When you change from a physical device to another device type, you will lose the following:**

- the rack, room, or storage room information
- the hardware model
- any IP or power connectivity
- if it was a blade chassis, it will no longer be one
- all blade information

**When you change from a virtual device to another device type, you will lose the following:**

- if it was a virtual host, it will no longer be one
- any cloud instance Data

**When you change from a blade device to another device type, you will lose the following:**

- blade host information
- the blade chassis slot # will be cleared
- the hardware model
- storage room information
- any IP or power connectivity

**When you change from a cluster device to another device type, you will lose all cluster associations.**
