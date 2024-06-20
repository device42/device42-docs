---
title: "Power Monitoring"
sidebar_position: 4
---

This section describes Device42's power monitoring capabilities. If you are just getting started, you'll want to first set up one or more [Remote collectors (RCs)](auto-discovery/remote-collector-rc.md).

## Power Heatmaps

![Power Heatmaps](/assets/images/media_1424599764800.png)

When you navigate to a room layout view, for example, **DataCenter > Rooms**, choose a room, and click **Show**, the racks will be color-coded to show both space and power availability. Each rack that is power-enabled will display a rectangular bar graph representing each infeed of each PDU in the rack. These bars are color-coded, representing the amount of power currently in use over the infeed divided by the power capacity of that infeed.

It is important to note that in this case, **Green** is high and **Red** is low. You can set the red, yellow, and green percentages by navigating to the main menu then **Tools > Settings > Global Settings**. Click the **Edit** button to bring up the following window:

![](/assets/images/media_1424600310591.png)

To set the percentage that will cause a rack to display as red, enter a value in the Critical Power % Used box. In the example above, a rack will display as red if the ratio of power drawn by all its infeeds divided by the total power available is greater than or equal to 80%. Greater than or equal to 70% will cause the rack to display as yellow.

![](/assets/images/media_1424600582457.png)

If you hover over a rack, you will see a popup. The Power/Utilization Charts hyperlink will take you to a display showing the power history for each infeed and outlet.

## Rack-level power visualization

![Rack-level power visualization](/assets/images/media_1416079634123.png)

Here you will see the last 24 hours of power data for each infeed and outlet for each PDU in the rack. If you want to look at a different time (eg. the last week, month, or year), click the Show Settings hyperlink.

![](/assets/images/media_1415393982492.png)

In the dialog box above, you can move sliders for the period (set for the past week in the example above).

You can also specify the data density. A higher data density will bring back more data points but may also take a little longer to retrieve.

Last, you can specify the type of data to retrieve. This option requires a bit of explanation; when you define an autodiscovery spec for a set of PDUs, one option will be the polling interval in minutes. For example, if you set it to poll every minute, the database will hold minute-by-minute data. But if you request a week's data, Device42 will not bring back every individual data point. Instead, it will aggregate the data points based on the data type. The **Average** setting will bring back average data points, the **Maximum** setting will bring back the maximum value observed for each set of data points, and the **Minimum** setting will bring back the minimum value.

![](/assets/images/media_1416079778471.png)

As you are observing the data, you may see spikes or observe other data patterns that cause you to want to inspect in more detail. You can do this by highlighting the period you want to investigate.

![](/assets/images/media_1416079871175.png)

After you release the mouse button, the view will expand to the highlighted period.

![](/assets/images/media_1416079930654.png)

Rack-level power charts are also available from the Rack View page by clicking the **Power** button at the top right of the page.

## PDU-level power data

![View Power Unit PDU](/assets/images/view_power_unit.png)

When you drill into a PDU, you will see power details for both infeeds and outlets. In the example above, the PDU has three infeeds and 24 outlets (only five are shown above).

For each infeed and each outlet, you will see a **Power Draw**. This is the amount of power that was drawn by the infeed or outlet the last time the PDU was polled via SNMP. As mentioned earlier, you can set the polling interval via the Device42 main menu, **Discovery > SNMP**.

For the infeeds, the **Rated Power** is autodiscovered.

For each outlet, you will see the **Override Watts** and the **Bootstrap Power** in addition to the **Power Draw.** The Bootstrap Power column shows the power required for this outlet at boot time. In the PDU header section at the top, the Bootstrap Power for the PDU will be the sum of the Bootstrap Power for each of the outlets.

By default, the **Bootstrap Power** column will be empty if there is no device connected. If there is a device connected, by default, the Bootstrap Power will show the nameplate watts of the hardware model of the device. Sometimes, however, you may wish to use a different number for the Bootstrap Power. If so, you would enter that number in the **Override Watts** field. In the example above, the user has entered 30 watts as the Override Watts for each of the outlets above. There are no connected devices in the above example; however, even if there were connected devices, Override Watts would still be the value used for the Bootstrap Power column. You can also have a mix of outlets where some outlets get their Bootstrap Power from the device hardware model and some have an Override Watts value.

If you click the **Power** button for the PDU, you will see tables and graphs showing the historical power details for the in-feeds and outlets.

![](/assets/images/media_1416823791271.png)

For the rack detail power page discussed above, you can click **Show Settings** to see historical charts and the minimum, maximum, and average calculations.
