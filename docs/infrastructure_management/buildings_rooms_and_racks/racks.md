---
title: "Racks"
sidebar_position: 4
---

To get a list of racks, go to Data Center>>Racks. This takes you to the Racks List View page...

![List of Racks](/assets/images/select_rack_view.PNG)

Like the list view pages for other objects, you see the list of your racks on the left and a number of columns of information, all of which are sortable.

You also see an availability heatmap to the far right so that you can see at a glance where there is space availability in the racks.

There are a number of available filters (not shown above) and a search box, both of which can be used to narrow the list of racks displayed.

Last, you can select one or more racks and apply any of the actions shown above in the Actions dropdown. For example, you could select multiple racks and ask to see a view showing the layouts of each selected racks. From that layout view, you can drag and drop devices from one rack to another (more on this below).

If you click on one of the rack names, you will see the Rack View Page which shows all the details about the rack. From there if you click the Edit button, you can makes changes to the rack. The screen shot below shows the Rack Edit Page.

### Rack View/Edit Overview

![Rack View/Edit Overview](/assets/images/change_rack_2018v15.png)

The parameters on the rack edit page are:

Name: Name of the rack.

Size: Size of rack in U's. 42 is standard and is default value.

Numbering start from bottom: This is the default (i.e. the 1 slot is at the bottom of the rack in the visual layout) but you can unselect if you prefer numbering from the top in the visual layout of the rack.

First number: Rack numbering will start at one by default, but change it here to customize (e.g. you might want the first number to be 0).

Number between U's: By default, the visual rack layout will display U numbers between U's. Uncheck to display U numbers at the U's.

Row: If you have a name for the Row, put it here. Please note that this is information only and will not affect the layout of the room. In the visual room layout, rows will initially be created automatically and will not use this setting. You can then drag and drop racks to create rows. If all racks in a given row in the visual layout have the same Row value, the value will appear to the left of the row. The same will be true for columns in the visual layout. If all the racks in a given column have the same Row value, the value will appear at the top of the column.

Room: Choose the room for the rack. You can use the plus sign ( + ) to create a new room from this page.

Manufacturer: Rack manufacturer.

Notes: Any additional notes.

![](/assets/images/wpid6455-rack-unit-num-display-start-vs-end.png)

### Visualize Rack Availability

![Visualize Rack Availability](/assets/images/wpid6442-media_1424465614349.png)

You can get a quick analysis of rack availability by looking at the color-coded Available Us column.

### Adding Devices to the Rack

![Adding Devices to the Rack](/assets/images/wpid6454-wpid-rack-add-devices-find-next1.png)

You can easily add devices, assets, and PDUs to the rack right from the rack edit page. You will see a lookup indicator (the highlighted magnifying glass above) which will display a listing of all "physical" devices, where you can search, filter and choose a device from a list of existing devices as shown below in the next screen image.

There are three other ways to add devices, assets, and PDUs to racks:

1. From the device (or asset or PDU) edit page
2. From Tools >> Import, using an excel sheet (there are spreadsheets for adding devices, assets, and PDUs to racks)
3. Using APIs
4. From the rack layout (see next section)

Devices must have hardware models with a defined size before adding them to a rack as "rack-mounted". You can add them to the left, right, top, or bottom without a hardware model. You can also add a new device from the lookup page.

Start at: Starting U location for the device. Orientation: Choose the orientation of the mounted device here. Device depth is determined by the hardware model properties.

The "Find next slot" option pictured above automatically finds an available space in the rack based on the device U size.

![](/assets/images/wpid6439-media_1414229537336.png)

### Visually adding devices to the rack from the rack layout screen

From the rack layout screen, you will see the option to add a device:

![Visually adding devices to the rack from the rack layout screen](/assets/images/2015-10-10-add-device-to-rack.png)

Choose a hardware model and a template object will appear. Drag the template object to a rack slot and the popup shown above will appear. Fill in at least the rack name and the move is complete.

### Rack Unit Numbering Layout Options

![Rack Unit Numbering Layout Options](/assets/images/wpid6456-rack-unit-options.png)

Displaying rack unit numbers between the U's is the default setting - pictured above (top) - unselecting "Number between U's" will display the rack unit numbers at the U's.

When displaying between the U's, there are two options. Pictured above (bottom) - the "Rack Number Between U's Option" is located in the Global Settings Menu (Tools >> Settings >> Global Settings).

The options:

- Start At - pictured below (left) displays the starting U number between the U's.
- End At - pictured below (right) displays the ending U number between the U's.

### Adding assets to the rack from the rack edit screen

![Adding assets to the rack from the rack edit screen](/assets/images/wpid6433-Adding_assets_to_the_rack.png)

Assets could be your patch panels, filler panels, fans etc. that take U space and/or power in the rack. These can be added from the rack edit page or from the Assets menu.

You can add a new asset (or choose an existing asset) using the lookup button, add the size and starting location. (along with depth and orientation)

Unlike devices, assets can have the same names and even blank names are allowed (but not recommended). The following is a quick video showing how to easily add assets to the rack.

### Visually adding assets to the rack from the rack layout screen

![Visually adding assets to the rack from the rack layout screen](/assets/images/wpid6434-AssetTemplates.png)

Asset templates can be dragged and dropped into racks as illustrated above. However, first you must create asset templates. You can do this in Devices > Assets > Racked Asset Templates. Once you add the racked asset template, you can just drag and drop the template from the sidebar to the rack position where you need it to be.

### Add new asset template from the rack layout

![Add new asset template from the rack layout](/assets/images/wpid6445-media_1424466227206.png)

### Rack elevations physical connections with drag and drop

![Rack elevations physical connections with drag and drop](/assets/images/wpid6444-media_1424466162974.png)

From the rack layout page, you can go to Physical connections and visualize power and network connectivity from this page. You can optionally turn off either of the connections to see only power or only network cables. Also, in the edit mode, drag and drop is now available for PDU ports and network ports (from/to patch panel ports or switch ports).

![](/assets/images/wpid6447-media_1424515989100.png)

When you view the physical connections, you will see outlets that resemble the outlet receptacle type. Examples of the receptacle types are show below.

![](/assets/images/wpid6448-media_1424516011534.png)

### Selected/highlighted paths and port label display in physical connectivity layouts

![Selected/highlighted paths and port label display in physical connectivity layouts](/assets/images/wpid6452-media_1424517266968.png)

In the physical connection layout, you can select a port for a device and the display will highlight the path.

### Adding PDUs to the rack

- You can add PDUs in and around the rack, details for adding and displaying PDUs is discussed in detailed in the PDU section at: [PDU Rack Display](infrastructure_management/power_units/pdu-rack-display.md)

### Bulk operations

![Bulk operations](/assets/images/wpid6435-media_1362134989530.png)

From the Racks view, you can select one, several, or all racks and apply a number of bulk operations:

Delete: Delete the selected racks

Show Front Layout: Show the visual layout (front view) of all the selected racks

Show Back Layout: Show the visual layout (back view) of all the selected racks

Change orientation to left: Change the orientation of the selected racks in the visual layout to left-pointing racks

Change orientation to right: Change the orientation of the selected racks in the visual layout to right-pointing racks

Put U numbers between U's: In the visual layout of the selected racks, place the U numbers between the U's

Put U numbers at U's: In the visual layout of the selected racks, place the U numbers at the U's

### Visualize multiple racks together

![Visualize multiple racks together](/assets/images/wpid6437-media_1414075593772.png)

As mentioned in the bulk operations in the step above, you can select multiple racks, choose "show front (or back) layout of selected racks" and see multiple racks together.

### Moving devices between racks

![Moving devices between racks](/assets/images/wpid6438-media_1414075696026.png)

You can also drag and drop devices between racks. On a tablet, this can be done with a swipe of the finger.

When you drag a device from one rack to another, the power and network connections to the device be removed and you will be prompted to select what PDU ports you want to connect the device to.

![Transfer PDU Connections](/assets/images/2015-10-10-rack-drag.png)

You can choose 1 or more ports per PDU.

### Clone select racks

![Clone select racks](/assets/images/wpid6450-media_1424517172751.png)

Using the action drop down on the rack page, you can choose the “Clone selected racks” action and it will clone the selected racks as well as the PDUs and the devices in those racks. Device to PDU outlet connections are also cloned. You can choose the room where the cloned racks go, choose a device naming profile, a prefix for rack and PDU names and some other optional fields as shown below.

![](/assets/images/wpid6451-media_1424517217056.png)

Note: The Rack name prefix will be prepended to each rack name. The Rack name prefix to ignore will be removed from the rack name.

### Audit reports from racks

![Audit reports from racks](/assets/images/wpid6440-media_1414445113486.png)

Looking to audit your racks in a jiffy? Download the ready to go Audit excel file for selected racks and inventory/audit all assets like PDUs, devices and assets in the rack.

The export sheet is sorted by rack name and includes PDUs on the side and then devices, PDUs and assets from top to bottom in the rack. With this sheet, you can use a handheld wireless scanner to read the asset #s(from barcode labels) to the sheet and quickly verify the correctness of your inventory.

**Note:** The start\_col=1, start\_row=1 refers to the upper left cell regarding of the row numbering scheme. 2, 2 refers to the 2nd row, 2nd column. 3.5, 3.5 refers to a rack that is position between the 3rd and 4th cells both vertically and horizontally. Effectively this means that the start\_row, start\_col will correspond with the room "Grid and Numbering" scheme only if numbers are used and vertical and horizontal are both set to 1.

 

### Visualizing PDU Connections

![Visualizing PDU Connections](/assets/images/wpid6441-media_1414490904015.png)

You can now visualize PDU connections by clicking the PDU Map button. Quickly see what is connected where with respect to power and visualize dual or single connected servers from the rack level. You can zoom-in and zoom-out using the mouse wheel and drag the layout around.

### What-If Simulation

To do what-if simulations, navigate to Tools >> Templates and Bulk Operations >> What If...

![Visualizing PDU Connections](/assets/images/2015-10-10-what-if-1.png)

Here you can enter device and power information for devices that need to be racked and choose a simulation based on racks in a building, room, or chosen from a list. When you click What If, you will see a list of simulated results...

![Visualizing PDU Connections](/assets/images/2015-10-10-what-if-2.png)

### Bulk Rack Adds / Updates

![Bulk Rack Adds / Updates](/assets/images/wpid6457-racks-api-creation.png)

Adding and/or updating racks in bulk can be done via API and/or API Imports. Tools | Imports (.xls)

Additional information can be found here: [Create / Update Racks via API / API Imports](https://api.device42.com/#create-/-update-racks) [Getting started - importing data from existing spreadsheets](getstarted/importing-data-from-existing-spreadsheets.md)

### Bulk add - device, assets, PDUs

![Bulk add - device, assets, PDUs](/assets/images/wpid6453-rack-add-device-asset-pdu.png)

Devices, assets, and PDUs can be added / updated to racks in bulk via API and/or API Imports.

Devices: How to video: [adding devices to racks via API Import](videos/api-imports-adding-devices-to-racks.md)

Assets: Documentation: bulk add update assets to racks

PDUs: Documentation: bulk add / update PDUs to racks

[Getting started - importing data from existing spreadsheets](getstarted/importing-data-from-existing-spreadsheets.md)
