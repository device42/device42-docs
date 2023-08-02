---
title: "Power Monitoring and Control"
sidebar_position: 4
---

This section describes Device42's power monitoring capabilities. If you are just getting started, you'll want to first set up one or more [Remote collectors \[RCs\]](auto-discovery/remote-collector-rc.md).

## Power Heatmaps

![Power Heatmaps](/assets/images/media_1424599764800.png)

When you navigate to a room layout view _(e.g. Datacenter -> Rooms, then choose a room and click 'Show')_, the racks will be color-coded to show both space and power availability. Each rack that is power-enabled will display a rectangular bar graph representing each in-feed of each PDU in the rack. These bars are color-coded, representing the amount of power currently in use over the in-feed divided by the power capacity of that in-feed.

It is important to note that in this case, **Green** is high and **red** is low. You can set the red, yellow, green percentages by navigating to the main menu, _Tools -> Settings -> Global Settings_. Click the Edit button to bring up the following window:

![](/assets/images/media_1424600310591.png)

To set the percentage that will cause a rack to display as red, enter a value in the Critical Power % Used box. In the example above, a rack will display as red if the ratio of power drawn by all its infeeds divided by the total power available is greater than or equal to 80%. Greater than or equal to 70% will cause the rack to display as yellow.

![](/assets/images/media_1424600582457.png)

If you hover over a rack, you will see a popup. The Power/Utilization Charts hyperlink will take you to a display showing power history for each infeed and outlet.

## Rack-level power visualization

![Rack-level power visualization](/assets/images/media_1416079634123.png)

Here you will see the last 24 hours of power data for each infeed and outlet for each pdu in the rack. If you want to look at a different time (eg. the last week, month, or year), click the Show Settings hyperlink.

![](/assets/images/media_1415393982492.png)

In the dialog box above, you can move sliders for the time period (set for the past week in the example above).

You can also specify the data density. A higher data density will bring back more data points but may also take a little longer to retrieve.

Last, you can specify the type of data to retrieve. This option requires a bit of explanation: When you define an autodiscovery spec for a set of pdu's, one option will be the polling interval in minutes. For example, if you set it to poll every minute, the database will hold minute-by-minute data. But if you request, say, a week's data, Device42 will not bring back every individual data point. Instead, it will aggregate the data points based on the Type of Data. The Average setting will bring back average data points, the Maximum setting will bring back the maximum value observed for each set of data points, and the Minimum setting will bring back the minimum value.

![](/assets/images/media_1416079778471.png)

As you are observing the data, you may see spikes or observe other data patterns that cause you to want to drill down into more detail. You can do by highlighted the period in which to drill...

![](/assets/images/media_1416079871175.png)

After you release the mouse button, the view will expand to the highlighted period.

![](/assets/images/media_1416079930654.png)

Rack-level power charts are also available from the Rack View page by clicking the 'Power' button at the top right of the page.

## PDU-level power data

![View Power Unit PDU](/assets/images/view_power_unit.png)

When you drill into a PDU, you will see power details for both infeeds and outlets. In the example above, the pdu has 3 infeeds and 24 outlets (only 5 are shown above).

For each infeed and each outlet, you will see a **Power Draw**. This is the amount of power that was drawn by the infeed or outlet the last time the pdu was polled via SNMP. As mentioned earlier, you can set the polling interval via the Device42 main menu, _Discovery -> SNMP_.

If you have the Power Control option, you will see a Power Control section for each outlet. In the example above, each of the outlets is currently powered on, so the "Power On" option is grayed out. However, you can click Power Off or Restart to Power Off the outlet (and any connected device) or Restart to restart a connected device. You will also see Power On / Off / Restart hyperlinks on the device view pages for any connected devices so that you can power on/off/restart devices directly.

For the infeeds, the **Rated Power** is autodiscovered.

For each outlet, you will see the **Override Watts** and the **Bootstrap Power** in addition to the **Power Draw.** The Bootstrap Power column shows the power required for this outlet at boot time. In the PDU header section at the top, the Bootstrap Power for the PDU will be the sum of the Bootstrap Power for each of the outlets.

By default, the Bootstrap Power column will be empty if there is no device connected. If there is a device connected, by default, the Bootstrap Power will show the nameplate watts of the hardware model of the device. Sometimes, however, you may wish to use a different number for the Bootstrap Power. If so, you would enter that number in the Override Watts field. In the example above, the user has entered 30 watts as the Override Watts for each of the outlets above. There are no connected devices in the above example; however, even if there were connected devices, the Override Watts would still be the value used for the Bootstrap Power column. You can also have a mix of outlets where some outlets get their Bootstrap Power from the device hardware model and some have an Override Watts value.

If you click the Power button for the PDU, you will see tables and graph showing the historical power details for the infeeds and outlets...

![](/assets/images/media_1416823791271.png)

Just as for the rack detail power page discussed above, you can click Show Settings to see historical charts and/or min/max/avg data.

### Power Control Note

For those leveraging Device42's power control module, _SNMP community strings will require write access_ to enable control the power on PDUs, iPDUs, CRAC, & any other supported units!
