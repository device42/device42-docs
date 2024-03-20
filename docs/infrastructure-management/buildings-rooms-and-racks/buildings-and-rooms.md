---
title: "Buildings and Rooms"
sidebar_position: 2
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

From the main menu, navigate to **Infrastructure > DataCenter > Buildings** to view and enter information about the buildings that house your data centers. In device42, a Room is part of a Building. You can add Rooms, Racks, and other asset details to a Building's information. 

To view, create, and edit rooms directly, navigate to **Infrastructure > DataCenter > Rooms**.

### Building List View

View, edit, create, and perform bulk actions on selected Buildings from the building list page.

You can also add an image, like a floor plan, to the building and view the image from the list page by clicking on the link.

<ThemedImage
  alt="Building List View"
  sources={{
    light: useBaseUrl('/assets/images/buildings-and-rooms/building-list-view-light.png'),
    dark: useBaseUrl('/assets/images/buildings-and-rooms/building-list-view-dark.png'),
  }}
/>

### Building View

You can add Rooms to existing Buildings by opening a building view from the list page and clicking the **Edit** button. When added, click on a room name from its Building view to go to that room view.

<ThemedImage
  alt="Building View"
  sources={{
    light: useBaseUrl('/assets/images/buildings-and-rooms/view-building-rooms-light.png'),
    dark: useBaseUrl('/assets/images/buildings-and-rooms/view-building-rooms-dark.png'),
  }}
/>

View the **Impact Chart** of the building using the button on the top right of the building view.

<ThemedImage
  alt="Building View"
  sources={{
    light: useBaseUrl('/assets/images/buildings-and-rooms/building-impact-chart-light.png'),
    dark: useBaseUrl('/assets/images/buildings-and-rooms/building-impact-chart-dark.png'),
  }}
/>

### Rooms List View

The rooms list view is located under **Infrastructure > DataCenter > Rooms**. The table shows **Available Us** along with other details.

You can filter by **Building** and **Tags** using the dropdown menus above the table. 

Click the **Show** link next to the room name to view its layout.

Perform bulk actions on selected rooms from the **Select an action** dropdown menu. Execute the action by clicking the **hammer icon**.

<ThemedImage
  alt="Rooms List View"
  sources={{
    light: useBaseUrl('/assets/images/buildings-and-rooms/rooms-list-view-light.png'),
    dark: useBaseUrl('/assets/images/buildings-and-rooms/rooms-list-view-dark.png'),
  }}
/>

### View Room Details

Click on the name of a Room from the list view table to view or change its details. The basic information is located at the top of the page: **Name**, **Building**, **Units of measure**, **Group Permissions**, **Tags**, and **Notes**.

The buttons located at the top right of the page do the following:

- **Edit**: edit the Room's details.
- **History (Audit Logs)**: see a log of the changes made to the Room's information.
- **Impact Chart**: display a chart that includes all devices, assets, and applications that rely on this room.
- **Room Layout**: logical representation of the room, see the [Room Layout View](#room-layout-view) section below.

<ThemedImage
  alt="Rooms List View"
  sources={{
    light: useBaseUrl('/assets/images/buildings-and-rooms/room-detailed-view-light.png'),
    dark: useBaseUrl('/assets/images/buildings-and-rooms/room-detailed-view-dark.png'),
  }}
/>

The detailed room information also includes:

- **Racks**: view basic rack info, access rack details by clicking the rack name, assign row number, or add a new rack.
- **Devices** (like CRAC, UPS): view basic device info, access device details by clicking the name, or add a new device.
- **Assets** (like Breaker panels and DMARC locations): view basic asset info, access asset details by clicking its name, or add a new asset.

## Room Layout View

The Room Layout views can be accessed from the detailed page view of a room, or via the **Show** links in the Room list page table. 

You can represent a room and its objects in almost any shape or configuration. You can have a room that is longer than it is wide, one that is wider than it is long, or even an L-shaped room.

Use the Zoom slider to increase or decrease the size of the displayed layout.

<ThemedImage
  alt="Room layout view"
  sources={{
    light: useBaseUrl('/assets/images/buildings-and-rooms/room-layout-general-light.png'),
    dark: useBaseUrl('/assets/images/buildings-and-rooms/room-layout-general-dark.png'),
  }}
/>

To make changes to the layout, first enable editing by clicking **Turn ON** on the left. You'll be able to change the room layout provided you have the necessary user permissions.

## Room Layout Editing

To add or remove the number of rows and columns of the layout, use the **plus** and **minus** buttons located on the left panel.

<ThemedImage
  alt="Change room size controls"
  sources={{
    light: useBaseUrl('/assets/images/buildings-and-rooms/change-room-size-light.png'),
    dark: useBaseUrl('/assets/images/buildings-and-rooms/change-room-size-dark.png'),
  }}
  style={{ width: '30%' }}
/>

You can change the grid’s default row and column labeling sequence. Choose between numerical or alphabetical numbering and set the value to start with.

<ThemedImage
  alt="Grid and row numbering options"
  sources={{
    light: useBaseUrl('/assets/images/buildings-and-rooms/grid-numbering-light.png'),
    dark: useBaseUrl('/assets/images/buildings-and-rooms/grid-numbering-dark.png'),
  }}
  style={{ width: '40%' }}
/>

### Object Layout Editing

You can add racks and objects to the layout, move them around, resize and rotate them.

- Add object templates by dragging them from the left panel onto the layout.

<ThemedImage
  alt="Drag room object template to layout"
  sources={{
    light: useBaseUrl('/assets/images/buildings-and-rooms/room-object-templates-light.png'),
    dark: useBaseUrl('/assets/images/buildings-and-rooms/room-object-templates-dark.png'),
  }}
  style={{ width: '80%' }}
/>

- To increase the size of an object, drag an object's vertical or horizontal edge. You can make an object take up multiple grid spaces or reduce the size to as little as 1/10 of a grid cell.

    Unselect the **Show details on hover** checkbox on the left panel when resizing objects so the objects don't get covered up when working. 

<ThemedImage
  alt="Resizing objects"
  sources={{
    light: useBaseUrl('/assets/images/buildings-and-rooms/object-resizing-light.gif'),
    dark: useBaseUrl('/assets/images/buildings-and-rooms/object-resizing-dark.gif'),
  }}
/>

- Rotate objects by 90 or 180 degrees by hovering over the object and clicking the rotate buttons located on the pop-up panel.

<ThemedImage
  alt="Rotating objects"
  sources={{
    light: useBaseUrl('/assets/images/buildings-and-rooms/rotate-buttons-light.png'),
    dark: useBaseUrl('/assets/images/buildings-and-rooms/rotate-buttons-dark.png'),
  }}
/>

- You can select multiple objects by dragging your cursor over them. When selected, drag the group to reposition the objects. Rotate all the objects in the selected group using the rotate buttons that are available when hovering over the selection.

### Adding Objects to a Layout

Ensure that the editing mode is enabled first. Navigate to **Infrastructure > DataCenter > Rooms**, click on the **Show** link under the **Layout** column, and from the layout view **Turn ON** the editing mode.  

You can add any asset type to the room and are not confined to just the template objects available in the left panel as shown above. You can even create your own asset types.

Racks and other objects can be added via the API or from the **Tools > Imports/Exports** menu.

### Mouse-Over Options

If you hover over an object, you will see a popup with detailed information about the object.

<ThemedImage
  alt="Object details"
  sources={{
    light: useBaseUrl('/assets/images/buildings-and-rooms/detail-panel-light.png'),
    dark: useBaseUrl('/assets/images/buildings-and-rooms/detail-panel-dark.png'),
  }}
  style={{ width: '80%' }}
/>

For racks, you'll see the following information:

- **Name**
- **Size**
- **Vendor**
- **Available (Us)**
- **Number of Devices**
- **Total Power Ports**: The total number of ports for all PDUs in the rack.
- **Open Power Ports**: The number of available power ports by connector type.
- **Tags**: Any tags added to the rack for labeling and classification purposes.
- **Notes**
- **Temperature**: The minimum to maximum temperature range from all sensors in the rack.
- **Relative Humidity**: The minimum to maximum relative humidity range from all sensors in the rack.

You'll also see links for the following:

- **View [name] Layout**: This will drill down to a detailed visualization of the rack layout and the device in the rack.
  
    <ThemedImage
    alt="Rack layout"
    sources={{
    light: useBaseUrl('/assets/images/buildings-and-rooms/rack-layout-light.png'),
    dark: useBaseUrl('/assets/images/buildings-and-rooms/rack-layout-dark.png'),
    }}
    />

- **View [name] Power Unit Map**:

    <ThemedImage
    alt="Power Unit map"
    sources={{
        light: useBaseUrl('/assets/images/buildings-and-rooms/power-unit-map-light.png'),
        dark: useBaseUrl('/assets/images/buildings-and-rooms/power-unit-map-dark.png'),
    }}
    />  

- **View [name] details**: This will take you to the Rack Details page for the rack.

    <ThemedImage
    alt="Power Unit map"
    sources={{
        light: useBaseUrl('/assets/images/buildings-and-rooms/rack-detail-view-light.png'),
        dark: useBaseUrl('/assets/images/buildings-and-rooms/rack-detail-view-dark.png'),
    }}
    />  

- **View Connections**: This will display a visualization of the PDU connections in the rack. Find this link by mousing over the rack displayed on the object pop-up panel.
  
    <ThemedImage
    alt="View connections link"
    sources={{
        light: useBaseUrl('/assets/images/buildings-and-rooms/view-connections-option-light.png'),
        dark: useBaseUrl('/assets/images/buildings-and-rooms/view-connections-option-dark.png'),
    }}
    />

- **Power/Utilization Charts**: This will display the power history for each input and output. Note that this link is only available if you have the Power Monitoring option.

### Heat Maps

Each rack is color-coded to show the availability of U slots within the rack. There are five color codes available ranging from green (high availability) to red (low availability). You can change the availability percentage for each color by going to **Tools > Settings > Global Settings**.

<ThemedImage
  alt="Heat map legend"
  sources={{
    light: useBaseUrl('/assets/images/buildings-and-rooms/heat-map-legend-light.png'),
    dark: useBaseUrl('/assets/images/buildings-and-rooms/heat-map-legend-dark.png'),
  }}
/>

If you have the Power Monitoring option, you will see a rectangular bar for each input of every PDU in the rack. These bars are color-coded for power usage and represent the amount of power currently in use, divided by the power capacity of the input. Green is high and red is low. You can change the percentages in **Tools > Settings > Global Settings**.

![Heat Maps](/assets/images/wpid6004-media_1424515509781.png)

### Temperature Shading

The halo temperature shading around racks, in the room that have temperature information, provides a quick view of the room’s environment.

The color value is based on the maximum temperature of the rack and corresponds to the following temperatures:

- **Green**: \<\= 75°F (23.88°C)
- **Yellow**: between > 75°F (23.88°C) and \<\= 90°F (32.22°C)
- **Red**: > 90°F (32.22°C)

![](/assets/images/Room-heat-map-NEW-2-700x396.png)
