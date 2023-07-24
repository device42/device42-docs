---
title: "Device - Blade Chassis"
sidebar_position: 4
---

The device blades tab will be present for blade chassis devices.

![](/assets/images/wpid5666-media_1424466777768.png)

The Blades tab shows information about each device in the chassis. Blades are sorted by slot #. Each blade has a link to its device page and displays device name, serial #, asset #, slot # and hardware model.

### Add new blades from the chassis device tab

![Add new blades from the chassis device tab](/assets/images/wpid5667-media_1424467098621.png)

In edit mode, you can add blades to a chassis right from the chassis edit page by going to the blades tab and clicking on Add new blade. The hardware model for the blade device must exist beforehand. The list to select the hardware model starts populating as you start typing the hardware model name.

### Interactive chassis layout

![v15+ Interactive chassis layout](/assets/images/v15_blade_layout_visual_editor.png)

To visually edit a blade, that blades' hardware model must first have been defined. Details around defining hardware models can be found in the [hardware model (templates) documentation](/device/hardware/), as these actions are universal to all devices.

For blade-specific templating information, see the [blade slots documentation page here](/device/device-blade-slots/).

If you click the layout button on the top right of the page, you can visualize the blades in a chassis and use drag and drop to position the blades in the correct slots. Please note that in order to edit/move blades within the interactive layout, the blade slots numbers must be numeric and not alphanumeric.

There are fields that you can set in the Hardware Model for the blade chassis that will determine how the blades are positioned...

![](/assets/images/media_1424516428153.png)

- **Max # of normal blade size** : The number of blades that the chassis holds. 
- **Normal Blade Size for regular slot** : The size of blades for the Max # of normal blade size parameter. 
- **Max blades per row** : The number of vertical columns of blades. 
- **Slot Numbering** : How to number the slots. 
- **Module Positioning** : Horizontal or vertical positioning

