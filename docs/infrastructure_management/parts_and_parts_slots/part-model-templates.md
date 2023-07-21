---
title: "Part Model Templates"
sidebar_position: 4
---

v15.04.00+ supports parts having ports, parts slots, and more. If you are looking for information about [adding parts slots (and/or blade slots) to devices has its own section.](/device/device-parts-slots/)

### Part Model Templates

"Part Models" are templates that define parts. As of v15.04.00, users may now create parts templates that optionally include ports.

Define a new part by visiting DataCenter > Parts > Parts Models, or edit any existing by simply viewing it and choosing the “Ports Layout” button in the upper right hand corner:

![Edit ports layout button on a part template](/assets/images/view_PARTS_MODEL_Ports_Layout_BUTTON-HL.PNG)

Add a parts model from DataCenter > Parts > Model list, and clicking “Add Parts Model” in the upper right:

![Add a parts model button](/assets/images/add_parts_model_button.png)

From this screen you can add a parts model:

![Add a parts model screen](/assets/images/add_parts_model_page.png)

During the creation of a new Parts Model, you can add a new part type classification if the type of part you are adding doesn’t already exist. Do this by clicking the Green (+) next to “Type”.

You will see the following window:

![Add new part sub-type](/assets/images/change_part_type_SUPPORTS_PORTS.png)

**The 'Supports Ports' CheckBox**

While creating a part type, you may select the ‘Supports Ports’ checkbox if you’d like to define ports & a port layout. You may set the ‘Supports Ports’ flag while creating a new part, or modifying a part.

_Note: Users will not find the supports ports option on parts designated ‘disk drives’ or ‘physical memory’!_

Parts (with or without ports), once defined, may optionally be placed into “parts slots”. Or, if desired, a parts slot also may simply be left empty.

### Port Templates

A port template may include a name prefix, a name template that configures the port naming scheme, and a port type. Ports may also be added in bulk, automatically named based on information configured in the template.

You may now elect to “auto-create ports” during creation of a new device. If the “Add Ports When Creating Device” checkbox is checked on the chosen hardware model template, the new device will be created with all its model-defined ports. Following a discovery run, Device42 will add discovered connections to these ports automatically.
