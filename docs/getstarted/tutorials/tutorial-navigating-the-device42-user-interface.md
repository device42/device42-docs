---
title: "Tutorial:  Navigating the Device42 User Interface"
sidebar_position: 3
---

![Populated D42 Dashboard](/assets/images/d42_dashboard_v15.png)

At this point, you should have data in your Device42 system from following one of the two "Loading Data" tutorials provided. If you go to the Device42 Home Page by clicking the 'Home' button on the menu bar, you will see the Dashboard above if you followed the [Spreadsheets tutorial](/getstarted/tutorials/device42-tutorial.mdx) and you will see a Dashboard with more objects if you followed the [API tutorial](getstarted/tutorials/tutorial-loading-data-using-the-api.md).

In either case, let's take a tour through what we've created.

Let's click on the Buildings hyperlink...

![Select building to view](/assets/images/select_building_to_view_long.png)

Let's click on 'New Haven DC'...

![View New Haven bldg](/assets/images/view_bldg_new_haven.png)

 

And let's click on the _Room Layout_ button:

![Room layout button](/assets/images/view_room_layout.png)

 

### Room Layout View

![Room layout view](/assets/images/room_layout_view.png)

 

This is the room layout view. Here we can view the racks and their layout in a room. Notice that some racks are colored yellow and some are red -- while the others are colored green. **Green** means the _racks are empty and have lots of room_ to accomodate new devices. **Yellow** means _the rack has devices but there is still plenty of room_. **Red** indicates that the _rack is full_. There are 5 colors available and the colors can be assigned in Tools / Settings / Global Settings.

If you have the **DCM Power Module** , you will also see options for power and temperature heat maps.

Now let's hover over rack NH-DC1-04...

![mouseover rack hover popup](/assets/images/mouse_hover_over_rack.png)

 

When you do this, you will see a hover box with detailed information about the rack.

Now let's click 'View RA1 layout'...

 

### Rack Layout View

![rack layout view](/assets/images/rack_layout_view.png)

Here you see an image of the front of the rack on the left and the back of the rack on the right.

As with the room layout view, if you have the DCM Power Module, you will see options for power and temperature heat maps.

Notice while hovering over the 'NHCTCC01' device, we not only see the details about the device itself, but because the device is a blade chassis, you also see hyperlinks that will take you to the details page for each of the individual blades in chassis NHCTCC01.

If you click 'View Toplogy', you will see a visual diagram of the physical and virtual machines and the applications they support....

 

### Impact Charts

![View topology impact chart](/assets/images/impact_chart_topology_view.png)

 

This is a fairly simple example but they can get quite complex. These impact charts are very useful for assessing the impact of losing a particular server. This can be helpful during business continuity planning and/or when trying to track down root cause during a production outage.

 

![](/assets/images/wpid3603-media_1375389640738.png)

Similar to the blade chassis, if a device host virtual machines, you will see hyperlinks to each virtual machine.

Now, let's learn how to edit data. Please go to _Devices --> All Devices..._

 

### Viewing and Editing Data: The List View

![view all devices overview](/assets/images/view_all_devices.png)

 

Here you see a list view of all your devices. On the right side of the screen you see a button to add a device. Below the add button, you see a number of filters that can be applied to reduce the size of the list. You can filter by device type, hardware model, OS, and so on. If you have hundreds or thousands of devices, these filters can be very useful. Similarly, there is a search box for filtering the list. If I type 'nh-demo' into the search box, the list will filter down to just the devices that contain the string 'nh-demo'. Last, there is an action bar for bulk operations such as delete (more on this later).

All Device42 objects have a list view. The Add, Filter, Search, and Action tools are common to all Device42 objects. Add and Search will be present on all object list pages. Filter and Action will be present for most objects.

### Bulk Actions

![bulk actions dropdown](/assets/images/bulk_actions_dropdown.png)

If you highlight one or more devices and then click the Action pulldown, you will see a number of bulk action choices. You can delete the selected devices or perform any of the actions in the dropdown on the selected devices.

You will find bulk actions on most Device42 objects. Of course, the options will vary for each object.

Next, click the a device hyperlink to see the Detail View for that device... We clicked device '08-upload-2-229':

### Detail View

![device detail view overview](/assets/images/detail_view_overview.png)

The Detail View contains a great deal of information about the Device. A number of fields are cut out in the middle of image above to make it readable but you should be able to see them all on your screen if you are following along.

Notice that there are 4 tabs of data (highlighted by the #1 red circle). Clicking on a tab brings you to another page of data for the device.

There are also a set of Action Buttons (highlighted by the #2 red circle). The Edit button takes you to the Edit View for the device. The Edit View has the same information as the Detail View (including the tabs); however, the fields are editable.

The History button takes you to an audit trail of the views and changes for this device. The Impact Chart brings up the impact chart we saw above. The Passwords button brings you to a List View for the password(s) for this device.

All objects in Device42 have a List View, a Detail View, and an Edit View. Most also have a History button that shows the audit trail.

 

We've now reached the end of this tutorial. We'd like to encourage you browse through the documentation for more detailed information on the various Device42 features.
