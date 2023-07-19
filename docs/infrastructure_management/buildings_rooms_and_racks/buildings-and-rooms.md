---
title: "Buildings and Rooms"
sidebar_position: 2
---

From the main menu, navigate to DataCenter > Building to enter information about the building(s) that house your data center(s). You can then add rooms and then racks and other assets. Navigate to DataCenter > Room for rooms. In device42, a Room is part of a Building.

### Building View

![Building View](/assets/images/wpid6000-wpid-Building_View1.png)

Once you add a building, you can add rooms inline and click on the rooms to go that room view.

### Building List View

![Building List View](/assets/images/wpid5999-wpid-Building_List_View1.png)

You can add an image such as a floor plans from the list page, you can see the full size image by clicking on the image.

### Rooms List View

![Rooms List View](/assets/images/wpid6001-wpid-media_13603217743371.png)

Main Menu: Datacenter | Rooms

- The Room View shows available Us along with other details.
- You can filter by building from the right hand side bar.
- To view the Room Layout click "Show" next to the room you wish to view.
- To view/edit room details, click on the Name of the room you wish view in the Name column.

### View Room Details

![View Room Details](/assets/images/wpid6005-wpid-viewroomdetails1.png)

View Room page allows you to view and/or change room information. Basic information is located at the top of the page; name, building, notes.

Links:

- Edit - edit room details.
- History - view history log of changes made to room information.
- Impact Chart - view impact of this room - will display a chart that includes all devices, assets, applications that rely on this room.
- Room Layout - logical representation of the room, see next section "Room Layout View"
- Power Utilization - power statistics if add-on modules in use.

Detailed room information includes:

- Racks - view basic rack info, access rack details by clicking rack name, assign row number, or add a new rack.
- Devices such as CRAC, UPS - view basic device info, access device details by clicking name, or add a new device.
- Assets such as Breaker panels and DMARC locations, view basic asset info, access asset details by clicking name, or add new asset.

### Room Layout View

Room Layout View now displays halo temperature shading (red, yellow, or green) around racks in the room that have temperature information to provide a quick view of the room’s environment.

The shading color corresponds to the following temperatures. The color value is based on the maximum temperature of the rack.

- Green:  highest temperature <=75F (23.88C)
- Yellow:  highest temperature > 75F (23.88C) but <= 90F (32.22C)
- Red:  highest temperature > 90F (32.22C)

![](/assets/images/Room-heat-map-NEW-2-700x396.png)

As noted above, the Room Layout views can be accessed via the Room Details page or the Show option from the Rooms List page.

Click the Edit Mode "Turn On" button to enable change to the rayout. Once you do this, you can: - Drag in racks and other objects from the palette on the left. - Drag the edge of a rack or other object to stretch it vertically or horizonally to cause it to use more than 1 grid square - Drag a rack or other object from one grid square to another (you can drag multiple objects by using the mouse to "lasso" a group of objects which you can then drag) - Rotate the rack 90 or 180 degrees by hovering over the rack and clicking the appropriate link (see below) - Add or remove entire grid rows or grid columns by using the + and - controls in the left hand panel

You can also resize the racks and other objects in the room by clicking the edge of the object and dragging. You can make an object take up multiple grid spaces or reduce the size to as little as 1/10 of a grid cell. This is illustrated in the image below...

![Room Layout View](/assets/images/variable-objects-in-room.gif)

Also illustrated above are grid row/column numbers that can be added in the Edit Room screen. The numbering can be either numeric or alphabetic.

You can also add objects to the room by going to the the Data Center>>Rooms menu entry, clicking the name of a room, and clicking the Edit button. From here, you can also add any asset type to the room (i.e. not just the ones show above in the palette). You can even create your own asset types.

Racks and other objects can also be added via the API or from Tools>>Import/Export.

The available options enable you to represent a room and its objects in almost any shape or configuration. You can layout a room that is longer than it is wide, one that is wider than it is long, or an L-shaped room like the one below...

![](/assets/images/media_1424647987758.png)

The image above also highlights the Zoom slider which can be used to make the room bigger or smaller.

### Mouse-over Options

![](/assets/images/Room-heat-map-NEW-3-details-700x305.png)

If you hover over a rack, you will see a popup with some basic information about the rack and a number of links:

- Name:
- Size:
- Vendor:
- Available (Us):
- Number of Devices:
- Total Power Ports: – (The total number of port for all PDUs in the rack)
- Open Power Ports: – (The number of available power port by connector type)
- Temperature: – (min-max range from all sensors in the rack)
- Relative Humidity: – (min-max range from all sensors in the rack)
- View Layout: This will drill down to a detailed visualization of the rack layout (and the device in the rack)
- View Connections: This will display a visualization of the PDU connections in the rack
- View Details: This will take you to the Rack Details page for the rack
- Power/Utilization Charts: This will display power history for each infeed and out. (Note: You will only see this link if you have the Power Monitoring option)

You can also "lasso" a group of racks. This will highlight the group of racks. In addition to dragging the group of racks, you can click either Rotate button in the hover-over and this will cause all the racks in the group to be rotated.

### Heatmaps

![Heatmaps](/assets/images/wpid6004-media_1424515509781.png)

Each rack is color-coded to show availability with U slots within the rack. There are 5 color codes available ranging from green (high availability) to red (low availability). You can change the availability percentage for each color by going to Tools>>Settings>Global Settings.

If you have the Power Monitoring option, you will also see a rectangular bar for each infeed of each PDU in the rack. These bars are color-coded for power usage and represent the amount of power currently in use over the infeed divided by the power capacity of the infeed. Here also, green is high and red is low and you can change the percentages in Global Settings.
