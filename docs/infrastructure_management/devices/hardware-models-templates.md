---
title: "Hardware Models (templates)"
sidebar_position: 20
---

This section discusses management of hardware models for physical, blade, and other device types. A _'hardware model'_ in Device42 refers to a template that hardware CIs are deployed from. Each Hardware Model template specifies the rack display size, depth, image, part slots and connectivity, and power calculations for a given device model.

### Hardware Model properties

![Hardware Model properties](/assets/images/Add_edit_hardware_model.PNG)

In the **Name** field, enter the model name. The manufacturer name will be appended automatically whenever this hardware model is displayed. For example, you can enter PE2950 for a Dell PE2950 and if the manufacturer chosen is Dell, it will add Dell in front when displaying the model.

**Type** : Indicate whether the model is for a physical device (regular), blade device, or other device (such as laptops, workstations etc.). Depending on what you choose, you will see size or blade size populated in the form.

**Size** is the size of physical device or type regular in Us. You can enter 1/2 U as well by entering 0.5.

**Blade size** : the various combinations for possible blade sizes.

**Depth** : If you want to add back to back devices in the rack, use half depth. Default is Full Depth.

### Defining Ports on Hardware Models

During creation of a hardware model, users can now specify all of the direct ports, part slots, and blade slots for each hardware model.

Direct ports specify ports that are part of the hardware chassis (not removable).

![Define ports on Device hardware model](/assets/images/add_device_hardware_model_blade_HL.png)

**Add ports when creating device:** Select this option and the system will automatically create all defined direct ports when a device is created.

**Add ports when auto-discovery new device:** Direct ports are automatically created according to the template when autodiscovery creates a brand new device the first time.

### Editing the Layout of an existing hardware device

Users may edit the layout of existing hardware devices visually as long as they are on v15.04.00+. Do this by visiting the CI details page for any existing hardware device, and clicking the _"Layout"_ button in the upper right hand corner:

![Modify the layout of existing hardware device](/assets/images/edit_existing_hardware_device_Layout_button-HL.png)

This brings you to the layout view. _"Turn ON"_ edit mode to add Parts slots, parts, and/or direct ports to the hardware chassis. Do this by dragging and dropping the grey icons from the left column onto either the "Front" or the "Back" representation of the device.

**Note that if you attempt to edit the layout of a device that doesn't have its ports / part slots / blade slots defined at the Hardware Model level, you will essentially be stuck.** _If your editing screen doesn't have any defined parts (and looks similar to this), You must first edit the Hardware Model:_

![If your hardware layout is blank, edit the model first!](/assets/images/blank_model_layout_existing_hardware.PNG)

Proceed to edit the hardware model that the CI you are looking at is based on.

1. Do this by going back to the CI details page, and clicking the link to the hardware model page (highlighted):
    
    ![Link to a hardware device CIs hardware model](/assets/images/device_CI_page_EDIT_HW_MODEL.PNG)
2. Do this by clicking the "Model Layout" button, at which point, you can edit hardware model to add missingpart slots, direct ports, and/or blade slots:
    
    ![Model layout edit button](/assets/images/edit_hardware_model_layout_button_existing_hardware.png)
3. And proceed to add the missing ports & slots to match the layout of the actual physical hardware (example, not accurate):
    
    ![Adding parts and ports to hardware model](/assets/images/edit_existing_hardware_model_layout_arrows.png)
4. You are now able to go back to the original hardware device CI itself, and modify it's layout as desired.

### Device type and hardware type relation

By default, when a device is discovered using auto-discovery, it is classified as type "unknown" (unless it is a virtual device). This is because the discovered device could be a physical device, a blade device or "other" type.

You can easily change the device type in bulk by changing the type of the associated hardware model.

_Example:_ 1. You discovered 50 devices with hardware Dell PE1950 and all devices show as unknown. 2. PE1950 hardware is also created by auto-discovery. You go and change the type to regular (rack mountable) and assign a size of 1U. 3. All associated devices will automatically change to type physical. 4. Any future device discovery with hardware PE1950 is automatically categorized as type physical.

You can do also this efficiently using hardware bulk edit and hardware excel import features.

### Hardware Bulk Edit

The video above shows how to make a bulk edit. As shown in the video, choose _Tools > Bulk Operations > Hardware Bulk Edit_. You can quickly change discovered hardware properties and it will automatically add devices to appropriate categories.

### Adding images for hardware

![Adding images for hardware](/assets/images/wpid4460-Adding_images_for_hardware.png)

You can quickly import images for hardware models and add the images in the hardware edit page, bulk hardware edit page or hardware excel import. Quickly adding images:

1. Go to Tools > Settings > Image files.
2. Browse to the image file.
3. Save and Add another.
4. Repeat 2 & 3.

Image files can be in multiple formats including png, jpg, tif, and others.

### Hardware List View

![Hardware List View](/assets/images/wpid4464-Hardware_List_View.png)

The hardware list view gives you an overview with PSUs and thumbnails for the images. You can filter by manufacturer, size or type from the right hand side bar.

### Hardware Merge Function

Using auto-discovery, imports, or the APIs, you sometimes might end up with multiple hardware names describing the same hardware model, and could have devices assigned to each of these.

There is a function to merge hardware models with another hardware model. You have to just make sure size, depth, type and blade size(for blade type) match for these 2 models. It would ask you to choose which hardware to merge into and would re-assign device relationships to chosen hardware object and delete this object.

### Hardware Bulk Merge Function

![Hardware Merge Function](/assets/images/merge_hardware_models_2018v15.png)

Datacenter > Hardware - select the two more items you wish to merge. From the Action menu, choose "Merge selected hardware models" then click Go.

![Confirm Hardware Merge](/assets/images/Confirm_Hardware_Merge_2018v15.PNG)

Next you will be prompted to confirm the hardware model merge.

1. Choose the model to become the master, i.e.: the hardware model tha all of the other models will be merged into.
2. Optionally you can choose to add the merged hardware model names as alias in the new master. This is strictly for reference. All existing devices will associated with the new master hardware model.

Click "Merge hardware models" to complete the merge.

![](/assets/images/wpid4461-after-merge.png)

Note that we still have two hardware models remaining. In the event that the U size is different, the models will not be merged.
