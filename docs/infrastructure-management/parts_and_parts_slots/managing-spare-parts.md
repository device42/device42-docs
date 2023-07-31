---
title: "Managing Spare Parts"
sidebar_position: 3
---

Manage and track spare parts and inventories across your entire IT operation with powerful spare parts management capabilities built in to Device42.

## Parts Overview

Below is an example of the 'View Parts Model' screen. A parts model is a **template** of sorts; each parts model represents one or more physical, real world parts. Once a Parts Model is created, inventory of that part model can then be tracked & managed: ![View Parts Model Detail Page](/assets/images/View_Parts_model.png)

### Parts Model vs. Parts (IMPORTANT)

**What is a Parts Model?**

- A Parts Model is a template that devices are deployed from. Parts model templates hold information that describes each unique part, for example: The model #, size/type (for HDD or RAM), # of Cores (for CPU), etc.

**What is a Part?**

- A part is added as an actual CI created from a Parts Model (template).
    
- A part is a specific instance of a hard disk, memory chip, NIC card, etc.
    
- A part may be placed into a _part slot_ on a hardware chassis.
    
- Parts assignments can be tracked. For example, where the Part is located or being used. A part can be assigned to a Storage Room, Device, or a status of RMA, In Transit, or Storage Rack (or Cabinet).
    
- Before an actual Part can be added to Device42, a model must first be created, then Parts can be added as line items.
    

### The Parts Model Screen

Model information (indicated in the **Top half** of the Part's Model screenshot above) Part inventory information for this model (indicated in the **green** box above)

### Parts Counts

Every part has a specific "count" which tracks the inventory, aka the # of units of that part 'in stock'. When assigning parts _(or spare parts)_ to specific devices, each part assigned will subtract one unit _(or the number used if >1)_ from the parts count inventory for that part. Be sure your part has sufficient parts count inventory (>0) before attempting to assign that part; should you have trouble, verify the part has sufficient inventory, and if need be, increase the inventory as appropriate.

## Parts Menu

![Parts Menu Item](/assets/images/parts_MENU_highlighted.png)

Parts management features are located in the Device42 main menu under **DATACENTER --> Parts**, as shown above

### Adding a Parts Model

Add a new part model/type by adding a "Parts Model". As an example, let's add a new Parts Model.

To add a Parts Model, from the main menu navigate to _Datacenter --> Parts --> Model List_, and on the top right of the list choose "Add Parts Model":

![Add Parts Model button ](/assets/images/add_parts_model_button.png)

1. Choose a Part Type or create a custom type by clicking the green plus sign \[right of the dropdown\]. Available selections for the "Type" field include CPU, RAM, Hard Disk, Disk drive, Physical Memory, NIC, HBA, SCSI, Serial Bus, Riser Card, FPGA, Cable, psu, and more. Options like CPU, RAM, & Hard Disk have custom attributes (see example below), while NIC, HBA, SCSI, Serial Bus, and custom types have a "Connectivity" attribute: ![Parts model type dropdown](/assets/images/parts_model_type_dropdown.png)
    
2. Give this Parts Model a Name and fill in any appropriate information you have such as: the Model #, Part #, and the Manufacturer.
3. Press the "Save" button to finish adding your part. If you would like to add inventory of this part type, see the "Adding Parts to Inventory" section below.

### CPU, RAM, and Hard Disk Attributes

It is important to note that each part type will contain attributes specific to that part type, e.g. CPU, RAM, and Hard Disk have attributes specific to each:

![CPU, RAM, and Hard Disk Attributes](/assets/images/wpid6822-media_1436381812852.png)

### Adding Part to Inventory

After creating a Parts Model, actual Parts can be added via “Add new Part”.

1. From any Parts Model View screen _(Main menu -> Datacenter -> Parts -> Model List and click on an existing part)_, click the "+ Add New Part" link at the bottom of the screen, in the "Parts" section: ![add new part](/assets/images/add_new_part.png)
2. Fill out the "Add Part" dialog that popped up with a part count (number in inventory), Serial # & Asset # (if available), Firmware Version, Assignment, part Location, and optionally a RAID Type, RAID Group, and a Description: ![add part screen](/assets/images/add_part_window.png)

**A few notes about the Add Part screen (above):**

- Each line item added can contain an inventory of one or more of a given part, and must have an 'Assignment' _(specify where the part is checked out/stored)_. Please Note: All the Parts in a given line item _must_ share the same 'Assignment'.
    
- The Assignment choices are Storage Room, Device, In RMA, In Transit, or Storage Rack (or Cabinet).
    
- If you choose Storage Room or Device assignments, you have the option to choose existing objects (where an object is a Storage Room or Device) or create new objects.
    
- If you are tracking serial numbers, you can only have one Part per line.
    

Adding a Part can also be done via the Parts List screen; see section below.

## The Parts List Screen

If you navigate to DATACENTER | Parts | Parts List, this takes you to a list page of Parts where you can see any Parts you've already created.

![Select part to view - Parts list screen](/assets/images/select_Part_to_view.png)

The Parts List can be thought of as the "master inventory", which shows each part that is being tracked by Device42. The list is similar to other lists in Device42, which includes an Action menu and the ability to search, sort and filter.

Parts can also be added from the Parts List by clicking "Add Part" in the top right.

### Parts associated with a Device

![Parts associated with a Device](/assets/images/wpid6827-media_1436382246066.png)

As shown above, parts associated with a device can be viewed from the 'Parts' tab of a device record. Here you have the ability to edit the fields of the Part or Parts associated to the device, as well as "Add another Part". The "Add another Part" link provides an alternate way to add or create a Part assigned to a device.

### Setting up an Alerts for Low Inventory Levels

To set up an alert, navigate to the main menu, _Reports -> Setup Alerts_, and press the "Add Alert" button in the upper right. You can set up alerting rules for either an individual part model _(as in the example above)_, or against _any_ part model - _(i.e. the rule will trigger if ANY parts model has an inventory level that meets the rule condition)_.

![Setting up an Alert Level](/assets/images/2016-07-12-parts-4.png)

In the example above, the rule will trigger if the inventory count of "Intel XEON" machines shown above falls below 15. (For rules that apply to parts, leave the 'Seconds Before Action' at the default of 0.) In this case, an email will be sent to hal@device42.com when the rule triggers. You can have multiple emails separated by commas or semicolons. You can also setup it so that an email is sent if enough parts are added to get back over the trigger level. And you can set it up to send escalation emails if no one acknowledges the alert.
