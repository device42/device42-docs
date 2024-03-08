---
title: "Building Business Applications in Device42"
sidebar_position: 1
---

## Overview

This is a technical guide that will walk you through a step-by-step process of building Business Applications within Device42.  [Once you have successfully performed discovery,](auto-discovery/index.md) apply the methods outlined below to create Affinity Groups and then leverage these groups to facilitate the process of building your Business Applications.

## Viewing Discovery Data

After you have performed successful discovery, all discovered Application Dependency data can be viewed under the Applications section in the Device42 main menu. The Application Components section is where discovered infrastructure Application Components are stored. See a complete list of Device42’s supported applications here: [ADM supported applications](apps/enterprise-application-dependency-mapping/adm-supported-applications.md).

![](/assets/images/Web_732_1.png)

The Services section located under _Resources > Services_ will provide you with list views of all your Services including Service Instances, Scheduled Tasks, Listener ports, and Service communications.

![](/assets/images/Web_732_1_Joined.png)

## Device Topology

When viewing a device record (select _Devices_ from the main menu), its _Topology_ view will display the inbound and outbound connectivity to that device.

![](/assets/images/Web_732_2.png)

The _Global View_ (left pane) displays a high-level view of the device communication. The _Local View_ (right pane) will drill down to display the services and applications that are building these connections.  These are connections Device42 has detected to known (in Device42) devices since the very first time you performed the discovery.

To display connections to undiscovered devices, select _Display Options_ above the topology view and uncheck _Hide client IP addresses with no device_, and any connections to undiscovered devices should appear.

![](/assets/images/Web_732_3.png)

## Undiscovered Listening Services

In the Local view of the Topology, you may notice Undiscovered Listening Services appearing in the communication.

![](/assets/images/Web_732_4.png)

These services typically arise due to one of the following conditions:

1. Device42 is discovering the services/service connections on the client device but is not actively discovering services/service connections on the listening device.
2. Device42 is discovering the services on the listener side, but we lack adequate permissions to match the PID to a service name.
3. It is such a short-lived connection that we may see the client connecting to that port, but we cannot match the listening service to a PID/service name on the listener side while the connection is alive (typical of services listening on ephemeral ports).

For highly active servers and environments, these visuals can be quite noisy making it a challenge to identify the key relationships.  To solve this, Device42 offers a feature known as Affinity Groups.

## Affinity Groups

Affinity Groups are a result of a process that evaluates all the connections for a given device and constructs a more consumable view of its inter-dependencies.  Through a process of Pinning, Staring, and Hiding Services, noise is limited to just meaningful connections to better understand the impact or dependency of a particular device.  Please see: [affinity groups](/apps/affinity-groups) to further understand this process.

### Enabling Affinity Groups

Select _Applications > Affinity Groups_, and then select Configure at the right of the page.

![](/assets/images/Web_732_5.png)

Next, select the _Enable Affinity Groups_ check box.

![](/assets/images/Web_732_6.png)

For _Reports_ you can choose either _Generate Impact Groups Only_ or _Generate Impact and Dependency Groups_. We recommend selecting _Generate Impact and Dependency Groups_ to understand upstream and downstream relationships.

Leave the default selection for _Saved DOQL Query_, then select _Save_ and _Process Now_.

### Pinning, Starring, and Hiding Services

Now that we have enabled Affinity Groups, we must identify which services we want to Pin, Star, and Hide to continue to build out our Affinity Groups.  

Pinning a service will make it a focus point and build an Affinity Group for that device.  By default, all database services are assigned a Topology Status of _Pinned_, and an Impact View is built for each discovered database server. 

_Starring_ a service will include that service and its connection in an Affinity Group if applicable.  It is recommended to limit Pinning to database services (done by default), web services (optional), and any custom services that belong to a Business Application.

_Hiding_ a service excludes it from topology and charts. By default, hidden services are excluded from Affinity Groups but this behavior can be overridden in our DOQL.

- The easiest method to understand the service connections that have been detected is to execute the Service Dependency Report.

Navigate to _Reports > Advanced Reporting_, expand the _Pre-Defined Reports_ folder, expand the _Application Discovery_ folder and right click on the _Service Dependency Report_, and select _Export As > Excel_.

![](/assets/images/WEB-519_bus-apps-7-Service-Dependency-Report-1.png)

This report displays each connection that has been detected through discovery. Enable filtering to each column to help with sorting the data. Record the services under the _Listener Service_ and _Client Service_ columns that are important to you as you will want to make sure to **Star** those services in the next step. Please record the devices these services are running on.  If there are any services you would like to **Hide** from your Affinity Group views, make a note of these.

- When this is completed, there are two common options for Pinning, Starring, and Hiding services

Option 1 (UI) – Navigate to Resources > Services > Services Instances to view a list of ALL the service instances.

Search for a name of one of the recorded services you want to Star, select one or more service instances by selecting their check box, and then use the drop-down _Action_ menu to set their _Topology status_ to Starred or Hidden (the example below shows a service instance search for _Java_).

![](/assets/images/Web_732_7.png)

 

To _Pin_ or _Unpin_ a service instance, select the corresponding option from the same drop-down _Action_ menu.

![](/assets/images/Web_732_8.png)

_Option 2 (Excel)_ _–_ Navigate to _Tools > Imports/Exports (xls)_ and scroll down to _Create or update Service Instances_.  Select _Download Current Data_ to the right.

Add a column at the end named **topology\_status**.  Set the column **Service\_display\_name** to be filterable, then locate the services you recorded from the Service Dependency Report you generated above and enter a value of either **Starred** or **Hidden** for their **topology \_status.**

![](/assets/images/WEB-519_bus-apps-10-Service-Instance-Impt-Expt.png)

For any service instances you would like **pinned**, enter a value of **yes** under the **pinned** column.

After editing the Service Instances file, navigate back to _Tools > Imports/Exports (xls)_ and import the XLS file back into Device42.

Once you have completed the process above, navigate back to _Apps > Affinity Groups_, select _Configure_ then select _Process Now_.

After your Affinity Groups have been processed, select the _Chart_ button next to an Impact or Dependency to see the view.

![](/assets/images/WEB-519_bus-apps-11-Affinity-Groupd-View.png)

You should see a _Global View_ to highlight the relationships and arrows to represent the direction of communication.  By selecting any of the lines, a _Local View_ will display the services and any Application Components that exist in that relationship.

![](/assets/images/WEB-519_bus-apps-12-Affinity-Groupd-Chart.png)

Hovering over the timeline above the view will allow you to identify changes to this Affinity Group.  This process runs every night to calculate connections that take place each day. As changes are detected, blue checkpoints are created to demonstrate a change has occurred to better understand the changes that occur in your environment.

![](/assets/images/WEB-519_bus-apps-13-Affinity-Group-Chart-Timeline.png)

## Building Business Applications

To build a Business Application, navigate to Applications > Business Applications, and then select Add Business Application at the top right of the page.

![](/assets/images/Web_732_10.png)

After you’ve given your Business Application a name, you should see a blank canvas with the ability to drag a _Device_ or _Affinity Group_ (on the left) over to start building your application. Select _Affinity Group_ and drag it onto the canvas.

You have several options to search for an existing Affinity Group; in the below example, we used a device name and then selected _Search_.

![](/assets/images/Web_732_11.png)

You should see that an Affinity Group was found along with the number of devices that are part of that group.

![](/assets/images/Web_732_12.png)

Select _Add_ to add all devices that belong to this Affinity Group.  Repeat this process if there are any other Affinity Groups or devices that need to be added to this Business Application.

Once you have successfully imported everything over, use the toolbars at the top and right of the screen to label and color code the objects

Select a box with a device name, then use the _Style_ tab on the right to change the color of this box.

![](/assets/images/Web_732_13.png)

Double click a line or anywhere on the canvas to add text. Use this to represent a service, a port, or a logical name/grouping for the relationship.

![](/assets/images/Web_732_14.png)

Congratulations! You have now built a Business Application by leveraging Device42’s discovery and Affinity Group capabilities.

![](/assets/images/Web_732_15.png)

 

## Tips & Tricks

- When viewing a service in the device Topology view, you can **hover** over a Service to **Star** or **Hide** this individual service instance.

![](/assets/images/Web_732_16.png)

- In the _Add/Change Windows and \*nix discovery_ job pages, you can expand the _Miscellaneous_ section to apply _Tags for discovered devices_.

![](/assets/images/Web_732_17.png)

- If you know the servers that are part of your Business Application, you can tag them with the Business Application name, then easily search for these devices by this tag when you are building your Business Applications.

When creating a Business Application, drag the _Device_ icon on the left, and then search for the tag to choose the devices you previously tagged in the discovery job.

![](/assets/images/Web_732_18.png)

![](/assets/images/Web_732_19.png)

- Affinity groups are generated by a saved DOQL query. There are times when choosing a different query to generate your Affinity Groups may be better suited for your environment. Navigate to _Tools > Integrations > Saved DOQL Queries_.

![](/assets/images/Web_732_20.png)

 

The name of the query provides some indication as to what the query is doing.  Select the name to view the query itself.

To choose one of these queries to generate your Affinity Groups, navigate to _Apps > Affinity Groups_ and then select _Configure._ Choose your preferred query from the _Saved DOQL Query_ drop-down menu.

![](/assets/images/Web_732_21.png)

