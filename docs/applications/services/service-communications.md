---
title: "Service Communications"
sidebar_position: 5
---

Select Resources _> Services > Service Communications_ to view, edit, or add service communication information.  Click the _Client_ device name to edit an existing service communication.

![](/assets/images/WEB-787_1.png)

![](/assets/images/WEB-787_2.png)

### Service Communications Actions

Select one or more Service Communications, and then select an Action to apply the action to the items.

![](/assets/images/WEB-787_3.png)

### Add a Service Communication

Click _Add Service Communication_ to add a new communication.

![](/assets/images/WEB-787_4.png)

Enter a Client IP Address, Listener IP Address. Port, and Protocol. You can also select the Client Device, Listener Device, and enter a Client process display name and a Client process name. Click Save at the bottom of the page to ad the service communication.

### Service Port IP Statistics

Select _Apps > Services > Service Communications_ to view service port IP statistics. As of version 16.00.00, Device42 has revamped statistics collection. Statistics are now only kept from a listener perspective and are client-IP-centric (not per client service). Previously collected statistics now appear in the _Classic Statistics_ section of this page. See below for descriptions of the Netstat and Netflow statistics Device42 collects.

![](/assets/images/WEB-787_5.png)

#### Netstat Statistics

<table>
  <tbody>
    <tr>
      <td width="360"><strong>Attribute</strong></td>
      <td width="360"><strong>Description</strong></td>
    </tr>
    <tr>
      <td width="360">Netstat Total Samples</td>
      <td width="360">How many times D42 has discovered the listener (using Netstats) since this connection was discovered.</td>
    </tr>
    <tr>
      <td width="360">Netstat Active Samples</td>
      <td width="360">How many times D42 found this connection itself.</td>
    </tr>
    <tr>
      <td width="360">Netstat Total Ports</td>
      <td width="360">How many open connections (eports) found. This is a running total.</td>
    </tr>
    <tr>
      <td width="360">Netstat Average Client Connections</td>
      <td width="360">This is actually a calculated number of <em>Netstat Total Ports / Netstat Active Samples</em>.</td>
    </tr>
    <tr>
      <td width="360">Netstat Client Connection First Found</td>
      <td width="360">First time D42 detected this connection.</td>
    </tr>
    <tr>
      <td width="360">Netstat Client Connection Last Found</td>
      <td width="360">Last time D42 detected this connection.</td>
    </tr>
  </tbody>
</table>


#### Values  Extrapolated from Netstat Statistics

<table>
  <tbody>
    <tr>
      <td width="360"><strong>Formula</strong></td>
      <td width="360"><strong>Description</strong></td>
    </tr>
    <tr>
      <td width="360">Netstat Total Ports / Netstat Active Samples</td>
      <td width="360">Weight of connection. This is the average number of client open connections.</td>
    </tr>
    <tr>
      <td width="360">Netstat Active Samples / Netstat Total Samples * 100</td>
      <td width="360">Persistence of connection. Percentage of time that a connection is found when this listener is active. This last part is important as D42 only increments Total Samples when D42 actually discovers the listener. So if a service is only running on weekends for example, D42 doesn't affect the client percentage time during weekdays. So a service could still be connected 100% of the time if every time D42 found this service listening, it also saw this connection, even if the service was only listening 15% of the time.</td>
    </tr>
  </tbody>
</table>


#### Netflow Statistics

<table>
  <tbody>
    <tr>
      <td width="360"><strong>Attribute</strong></td>
      <td width="360"><strong>Description</strong></td>
    </tr>
    <tr>
      <td width="360">Netflow Active Samples</td>
      <td width="360">How many samples D42 found (this is really based on how you configure Netflow).</td>
    </tr>
    <tr>
      <td width="360">Netflow Total Events</td>
      <td width="360">How many events happened within all the samples.</td>
    </tr>
    <tr>
      <td width="360">Netflow Total Ports</td>
      <td width="360">Running total of how many ports were found.</td>
    </tr>
    <tr>
      <td width="360">Netflow Average Client Connections</td>
      <td width="360">This is a actually a calculated number of <em>Netflow Total Ports / Netflow Active Samples</em>.</td>
    </tr>
    <tr>
      <td width="360">Netflow Client Connection First Found</td>
      <td width="360">First time D42 detected this connection.</td>
    </tr>
    <tr>
      <td width="360">Netflow Client Connection Last Found</td>
      <td width="360">Last time D42 detected this connection.</td>
    </tr>
    <tr>
      <td width="360">Netflow Client Active Span</td>
      <td width="360">This is a running total of the time span in between <em>First</em> and <em>Last Found</em> where no connection was found during a full sample period.</td>
    </tr>
    <tr>
      <td width="360">Netflow Client Gap Span</td>
      <td width="360">This is a running total of the time span in between <em>First</em> and <em>Last Found</em> where a connection was found during a full sample period.</td>
    </tr>
  </tbody>
</table>


#### Time Span Notes

For the two time spans – _Netflow Client Active Span_ and _Netflow Client Gap Span_ – these are heavily affected by your sample period. So if you sample every 1 minutes, D42 will consider a connection active as long as D42 sees two communications within this 1 minute period, even if between samples. Consider this example:

**Sample File 1:**

_Communication A <=> B at 12:01:15 AM_

_Communication A <=> B at 12:01:45 AM_

**Sample File 2:**

_Communication A <=> B at 12:02:10 AM_

_Communication A <=> B at 12:02:45 AM_

**Sample File 3:**

_Communication A <=> B at 12:03:50 AM_

_Communication A <=> B at 12:03:55 AM_

**Results for A <=>B stats are:**

Active Samples: 3

Total Events: 6

First Found :12:01:15 AM

Last Found: 12:03:55 AM

Active Span: 1 Min 40 sec

Gap Span: 1 Min 5 Sec (This is the gap between 12:02:45 AM and 12:03:50 AM since it is longer than the sample interval.)

Also note that D42 doesn't count the remaining 5 seconds of the last internal until D42 gets the next sample file. Once D42 gets that, it will either count those 5 seconds as a gap or as active based on when the next _A<=>B_ match appears.
