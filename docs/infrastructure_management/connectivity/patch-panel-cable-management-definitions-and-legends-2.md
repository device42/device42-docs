---
title: "Patch panels and cable management"
sidebar_position: 4
---

Patch panels can be added as "assets" from Device > Assets > Assets

### Adding a patch panel

![Adding a patch panel](/assets/images/wpid5712-Adding_patch_panel.png)

The system defined type "Patch Panel" for asset gives you the option to assign a patch panel model.

### Ports and properties based on the patch panel model

![Ports and properties based on the patch panel model](/assets/images/2016-04-07-Patch-Panel-Model-01.png)

When creating a new patch panel model you can enter the number of ports in the patch panel, where to start numbering and in which direction to number. You can also enter the port type. The first time a patch panel model is assigned to a patch panel, it takes the "Number of ports" entry shown above and creates and associates that number of ports with the patch panel. The image and vendor info from the model are also passed along to the patch panel if it's not already there.

If you have different cable types in the same patch panel, you should use modular as the Type.

### Modular patch panels

![Modular patch panels](/assets/images/2016-04-08-patch-panel-modules-02.png)

You can add modules to your patch panels and configure different port types or just modules. For a modular type patch panel, you will be given an option to add modules. Ports for each module will be created based on "patch panel module models". All the module ports will show up in the original patch panel view.

![](/assets/images/wpid5721-media_1362573323178.png)

Once you choose a modular patch panel, you can add patch panel models as shown above the ports section.

### Patch panel connectivity

![Patch panel connectivity](/assets/images/wpid5726-Patch_panel_connectivity.png)

Once a model is chosen and the "save and continue editing" button is clicked, you will see all the ports created.

Each port can be connected to either a:

- Switch Port
- Device
- or, Patch panel port

If patch panel is racked, by default only the devices in that rack are shown. You can choose other devices as well. If device is connected, you can also choose which mac address on the device is connected using Mac of device lookup button.

### Individual back connectivity per port

![Individual back connectivity per port](/assets/images/wpid5718-media_1362572445983.png)

You can choose the individual back connectivity option per port and add a cable type for back connectivity with this option. You can add cable speed and other attributes for back connectivity for each port. In addition to the edit screens above, there are RESTful APIs and spreadsheet imports available to do this more easily and there is a bulk operations option to provision back connectivity as discussed below.

### Bulk back ports connectivity

![Bulk back ports connectivity](/assets/images/wpid5720-media_1362573106362.png)

From Tools > Templates & Bulk Operations > Panel back connectivity, you can choose the patch panel, its modules(if any), starting port #, ending port #, then patch panel and module, starting port # and cable type and provision back connectivity in bulk.

### color coded full path display in hover over

![color coded full path display in hover over](/assets/images/wpid5713-color_coded_full_path_display_in_hover_over.png)

You can get full path details when you mouse over any of color codes images.

### Patch panel layout

![Patch panel layout](/assets/images/wpid5727-Patch_panel_layout.png)

View or edit page of that asset(patch panel) adds a new button "View Patch Panel Layout".

![](/assets/images/wpid5722-media_1362573692043.png)

If the patch panel is connected to another patch panel, both panels are displayed side by side. Hover over any port(or device) highlights the path and displays the text for port and what is connected. Each port is color coded same as in the port display.

### Creating connections with drag and drop

![Creating connections with drag and drop](/assets/images/wpid5725-media_1424468901800.png)

From the patch panel layout page, you can turn on the edit mode and then connect patch panel ports to other devices or switch ports by simply dragging from the port to the device or other port. This makes it very easy to manage your patch panel connectivity and keep information up-to-date.

### Drag and drop for switch port

![Drag and drop for switch port](/assets/images/media_1424513259125.png)

From the patch panel layout page, you can also drag and drop from switch ports to devices or to patch panel ports. When you do so, a popup will appear giving you the opportunity to enter a port label.

### Direct patch panel port to patch panel ports connections

![](/assets/images/2015-10-10-pp-drag-1.png)

You can add front patch panel connections to the ports of another patch panel via drag and drop.

### Devices outside the rack

![Devices outside the rack](/assets/images/wpid5715-Devices_outside_the_rack.png)

By default, only the devices in the same rack as asset would show up. You can reset the filter by clicking on total devices as shown above and choose device outside the rack. These are displayed on the left side of the patch panel as shown below.

![](/assets/images/wpid5717-media_1355834288356.png)

### Half depth devices

![Half depth devices](/assets/images/wpid5716-Half_depth_devices.png)

Half depth devices are displayed side by side to show the cabling.

### Multiple hops or patch panels in between

![Multiple hops or patch panels in between](/assets/images/wpid5714-Complete_network_path_from_the_patch_panel_display.png)

If a connection spans multiple patch panels, it is displayed when you mouse over that port (or connected device, switch port etc.). Displayed on the left side of the panel.

### Create connections using drag and drop

![Create connections using drag and drop](/assets/images/wpid5723-media_1414406394456.png)

From the patch panel layout page, you can turn on the edit mode and then connect patch panel ports to other devices or switch ports by simply dragging from the port to the device or other port. This makes it very easy to manage your patch panel connectivity and keep information up-to-date.

![](/assets/images/wpid5724-media_1414407289415.png)
