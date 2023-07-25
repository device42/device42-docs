---
title: "Cables"
sidebar_position: 1
---

### Cabling Overview

The Device42 cables module can track the origin, end connection(s), length, and path for each of your cables.

The origin and end point types can be a patch panel port, a switch port, a device, a circuit, or another cable. A given cable endpoint can also be an origin for multiple other cables.

Find the "Add A Cable" screen under _DATACENTER --> Cables_

![Add A Cable](/assets/images/201802add-cables.png)

Cables also have their own unique properties (see "Add Cable" screen in the above image). Aside from length, connector type, and location, cables support [custom fields](../../administration/custom-key-value-pairs-explained), as well.

### Drag and Drop Cabling from the Rack View

From the rack view, you can create, move, edit, and trace cables visually via drag and drop, in addition to the above method.

From the "Rack View" (DATACENTER --> Racks --> YourRack --> View Rack Layout), you can view or easily add a cable connection by clicking "Physical Connections" under "Rack Details" on the left, and enabling "Edit Mode":

![Visually Add a Cable](/assets/images/2018002-add_cable_visually.png)

### View Cables on Impact Charts

If your network Device has cables connected to it (A Load balancer, for example), you'll be able to view those connections in the device's impact chart. See the following image:

View cables on Impact Charts: ![Trace Cables in impact view](/assets/images/Cable-Impact-Chart-Local-View.png)
