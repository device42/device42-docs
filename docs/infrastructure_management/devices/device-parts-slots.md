---
title: "Device - Parts Slots"
sidebar_position: 9
---

## Part Slot Overview

Part slots may be added to both new and existing blade-based and non-blade hardware. Parts slots can optionally receive parts. Define parts slots on hardware templates, or add one directly to an existing hardware device.

For information on blade slots, which work similarly, but accept blades instead of parts, see [Blade Slots documentation](device-blade-slots/)

## Add Parts slots to hardware models

To add a parts slot to a hardware model, click the “Model Layout” button visible while viewing any Device Hardware Model:

![Add parts slot to hardware model](/assets/images/Model_layout_button-VIEW_Device_hardware_model.PNG)

You’ll then be at the Hardware Model “Layout” editor screen. You can turn edit mode on or off via the “Turn On” button:

![Hardware Model Layout editor screen](/assets/images/Model_layout_EDIT_screen.PNG)

Add a parts slot by Dragging and dropping a the “New Slot” Icon to the front or the back of the chassis. You can specify the part model to put in the parts slot during this process:

![Add parts slot and part](/assets/images/enter_parts_slot_information.png)

## Adjust Layout on Existing Hardware Model

You can easily edit the layout of the slots after creation by clicking the “Model Layout” button on the hardware model.

![Edit blade chassis model layout](/assets/images/view_hardware_model_Model_layout_button-HL.PNG)

### Note about manually moving parts when using the auto-add ports option

Should you manually move one or more parts around the layout _(e.g. from Slot A to Slot B)_, any ports associated with that part that were auto-added **\*will not automatically regenerate\***. It is assumed that if you are manually moving existing parts, you are attempting to correct the location of a part.

Should you be actually **moving the physical part from one slot to another**, to represent this in Device42, you should **first remove the part from the device, save, and then add it back to its new slot**. The system will then delete all associated network ports from the device, and will auto-add new ones back to the new slot ID _(as long as auto-add ports is enabled for that hardware model)_.

## Using the Visual Model Editor

Click “Turn ON” to enable edit mode, and then drag and drop parts slots as desired. Slots that were created when the part model was defined will appear in the left column “Unmapped Existing Parts” and/or “Unmapped Existing Blade Slots”:

![Un-mapped templated blade slots](/assets/images/UNMAPPED_EXISTING_BLADE_SLOTS-Blade_chassis_populated.PNG)

Click any parts or blade slot and click the “Edit” button on the lower left to reorient, rename, or to place a part into a parts slot:

![Edit a part slots](/assets/images/edit_a_parts_slot_part_layout_view.png)

_Note that editing a BLADE slot offers different options:_

![Editing a blade has different options](/assets/images/EDIT_BLADE_SLOT_Blade_chassis_Layout_view.PNG)

When editing a blade slot, similar to a parts slot, you may add a number and/or change the orientation between horizontal and vertical. However, you can not put a part into a blade slot; you instead have the ability to set the blade height.

![Enter Blade Slot Information](/assets/images/enter_parts_slot_information.png)

When you have finished editing your layout, simply “Save” the edits you made. You will see a green save confirmation in the upper left. You may now “Turn OFF” edit mode and your changes will remain saved:

![Changes saved succesfully, complete blade chassis layout](/assets/images/Dell_m1000_example_layout_COMPLETE.PNG)
