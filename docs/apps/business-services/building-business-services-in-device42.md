---
title: "Building Business Services in Device42"
sidebar_position: 1
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'


:::info 
*Business Applications* are now named **Business Services**. Also, *Affinity Groups* have been renamed to **Application Groups**. See [**Calculation Rules**](/apps/application-groups/calculation-rules) (previously *AppFocus Filters*) for details on the new ADM flow.
:::

## Overview

This is a technical guide that will walk you through a step-by-step process of building Business Services within Device42.  [Once you have successfully performed discovery,](auto-discovery) apply the methods outlined below to create Application Groups and then leverage these groups to facilitate the process of building your Business Applications.

## Viewing Discovery Data

After you have performed successful discovery, all discovered Application Dependency data can be viewed under the **Applications** section in the Device42 main menu. 

The Application Components section is where discovered infrastructure Application Components are stored. See a complete list of Device42’s supported applications here: [ADM supported applications](apps/enterprise-application-dependency-mapping/adm-supported-applications).

<ThemedImage
  alt="Applications menu"
  sources={{
    light: useBaseUrl('/assets/images/building-business-services-in-device42/applications-menu-light.png'),
    dark: useBaseUrl('/assets/images/building-business-services-in-device42/applications-menu-dark.png'),
  }}
/>

The Services section located under **Resources > Services** will provide you with list views of all your Services including Service Instances, Scheduled Tasks, Listener ports, and Service communications.

<ThemedImage
  alt="Services menu"
  sources={{
    light: useBaseUrl('/assets/images/building-business-services-in-device42/services-menu-light.png'),
    dark: useBaseUrl('/assets/images/building-business-services-in-device42/services-menu-dark.png'),
  }}
/>

## Device Topology

When viewing a device record (select **Resources > All Devices** from the main menu), its **Topology** view will display the inbound and outbound connectivity to that device.

<ThemedImage
  alt="Device view with Topology link"
  sources={{
    light: useBaseUrl('/assets/images/building-business-services-in-device42/device-view-light.png'),
    dark: useBaseUrl('/assets/images/building-business-services-in-device42/device-view-dark.png'),
  }}
/>

The **Global View** (left pane) displays a high-level view of the device communication. The **Local View** (right pane) will drill down to display the services and applications that are building these connections. These are connections Device42 has detected to known (in Device42) devices since the very first time you performed the discovery.

To display connections to undiscovered devices, select **Display Options** above the topology view and uncheck **Hide client IP addresses with no device/Managed Resources**, and any connections to undiscovered devices should appear.

<ThemedImage
  alt="'Hide client IP addresses with no device' option unchecked"
  sources={{
    light: useBaseUrl('/assets/images/building-business-services-in-device42/display-options-light.png'),
    dark: useBaseUrl('/assets/images/building-business-services-in-device42/display-options-dark.png'),
  }}
/>

:::tip
When viewing a service in the device Topology view, you can **hover** over a Service to **Star** or **Hide** this individual service instance.
:::

    ![](/assets/images/Web_732_16.png)

## Undiscovered Listening Services

In the Local view of the Topology, you may notice Undiscovered Listening Services appearing in the communication.

![](/assets/images/Web_732_4.png)

These services typically arise due to one of the following conditions:

1. Device42 is discovering the services/service connections on the client device but is not actively discovering services/service connections on the listening device.
2. Device42 is discovering the services on the listener side, but we lack adequate permissions to match the PID to a service name.
3. It is such a short-lived connection that we may see the client connecting to that port, but we cannot match the listening service to a PID/service name on the listener side while the connection is alive (typical of services listening on ephemeral ports).

For highly active servers and environments, these visuals can be quite noisy making it a challenge to identify the key relationships.  To solve this, Device42 offers a feature known as Application Groups.

## Application Groups

Application Groups are a result of a process that evaluates all the connections for a given device and constructs a more consumable view of its inter-dependencies.  Through a process of configuring Starting Points, End Points, using [Calculation Rules](/apps/application-groups/calculation-rules), the noise is limited to just meaningful connections to better understand the impact or dependency of a particular device.  

:::note
Please see [Application Groups](/apps/application-groups/) to further understand generating Application Groups.
:::

### Enabling Application Groups

Applications Groups are enabled by default in Device42, but you can disable the feature at any time. 

- Select **Applications > Application Groups**, and then select **Settings** at the right of the page.

    <ThemedImage
    alt="Application Groups Settings"
    sources={{
        light: useBaseUrl('/assets/images/building-business-services-in-device42/app-group-settings-light.png'),
        dark: useBaseUrl('/assets/images/building-business-services-in-device42/app-group-settings-dark.png'),
    }}
    />

- Next, toggle the **Application Groups Enabled** option.

    <ThemedImage
    alt="Enable Application Groups"
    sources={{
        light: useBaseUrl('/assets/images/building-business-services-in-device42/app-group-enabled-light.png'),
        dark: useBaseUrl('/assets/images/building-business-services-in-device42/app-group-enabled-dark.png'),
    }}
    />


### (Legacy) Pinning, Starring, and Hiding Services

Now that we have enabled Application Groups, we must identify which services we want to Pin, Star, and Hide to continue to build out our Application Groups.  

Pinning a service will make it a focus point and build an Application Group for that device.  By default, all database services are assigned a Topology Status of _Pinned_, and an Impact View is built for each discovered database server. 

_Starring_ a service will include that service and its connection in an Application Group if applicable.  It is recommended to limit Pinning to database services (done by default), web services (optional), and any custom services that belong to a Business Application.

_Hiding_ a service excludes it from topology and charts. By default, hidden services are excluded from Application Groups but this behavior can be overridden in our DOQL.

- The easiest method to understand the service connections that have been detected is to execute the Service Dependency Report.

Navigate to _Reports > Advanced Reporting_, expand the _Pre-Defined Reports_ folder, expand the _Application Discovery_ folder and right click on the _Service Dependency Report_, and select _Export As > Excel_.

![](/assets/images/WEB-519_bus-apps-7-Service-Dependency-Report-1.png)

This report displays each connection that has been detected through discovery. Enable filtering to each column to help with sorting the data. Record the services under the _Listener Service_ and _Client Service_ columns that are important to you as you will want to make sure to **Star** those services in the next step. Please record the devices these services are running on.  If there are any services you would like to **Hide** from your Application Group views, make a note of these.

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

Once you have completed the process above, navigate back to _Apps > Application Groups_, select _Configure_ then select _Process Now_.

After your Application Groups have been processed, select the _Chart_ button next to an Impact or Dependency to see the view.

![](/assets/images/WEB-519_bus-apps-11-Affinity-Groupd-View.png)

You should see a _Global View_ to highlight the relationships and arrows to represent the direction of communication.  By selecting any of the lines, a _Local View_ will display the services and any Application Components that exist in that relationship.

![](/assets/images/WEB-519_bus-apps-12-Affinity-Groupd-Chart.png)

Hovering over the timeline above the view will allow you to identify changes to this Application Group.  This process runs every night to calculate connections that take place each day. As changes are detected, blue checkpoints are created to demonstrate a change has occurred to better understand the changes that occur in your environment.

![](/assets/images/WEB-519_bus-apps-13-Affinity-Group-Chart-Timeline.png)

### (Legacy) Refactoring Application Groups

- There are times when choosing a different query to generate your Application Groups may be better suited for your environment. Navigate to _Tools > Integrations > Saved DOQL Queries_.

![](/assets/images/Web_732_20.png)

The name of the query provides some indication as to what the query is doing.  Select the name to view the query itself.

To choose one of these queries to generate your Application Groups, navigate to _Apps > Application Groups_ and then select _Configure._ Choose your preferred query from the _Saved DOQL Query_ drop-down menu.

![](/assets/images/Web_732_21.png)


## Building Business Services

To build a Business Service, navigate to **Applications > Business Applications**, and then click **Create** at the top right of the page.

<ThemedImage
  alt="Create button"
  sources={{
    light: useBaseUrl('/assets/images/building-business-services-in-device42/create-button-bs-light.png'),
    dark: useBaseUrl('/assets/images/building-business-services-in-device42/create-button-bs-dark.png'),
  }}
  style={{ width: '60%' }} 
/>

After naming and saving your new Business Service, click the **View Application** button and toggle on **Edit** mode.  You'll see a blank canvas. Drag items from the left panel to start building the Business Service. 

Select **Application Group** and drag it onto the canvas.

You have several options to search for existing Application Groups; in the example, we searched for part of a server name (`server`) that we know is within the AppFocus group of the Application Group we're looking for. The AppFocus group is the focus point for the Application Group and is defined as the group's [Starting Point](/apps/application-groups/calculation-rules).

You'll see that two Application Groups were found that have items containing the word `server` as their focus points.

<ThemedImage
  alt="Add Application Group modal window"
  sources={{
    light: useBaseUrl('/assets/images/building-business-services-in-device42/app-group-search-light.png'),
    dark: useBaseUrl('/assets/images/building-business-services-in-device42/app-group-search-dark.png'),
  }}
  style={{ width: '60%' }} 
/>

Select the group you want to add and click **Add** to include it on the canvas.  Repeat this process if there are any other Application Groups, Components, Resources, and Devices that need to be added to this Business Service.

Once you have successfully imported everything over, use the toolbars at the top and right of the screen to label and color code the objects

Select a box with a device name, then use the **Style** tab on the right to change the color of this box.

<ThemedImage
  alt="Style tab"
  sources={{
    light: useBaseUrl('/assets/images/building-business-services-in-device42/style-tab-light.png'),
    dark: useBaseUrl('/assets/images/building-business-services-in-device42/style-tab-dark.png'),
  }}
  style={{ width: '30%' }} 
/>

Double click a line or anywhere on the canvas to add text. Use this to represent a service, a port, or a logical grouping for the relationship.

![](/assets/images/Web_732_14.png)

Congratulations! You have now built a Business Service by leveraging Device42’s discovery and Application Group capabilities.

![](/assets/images/Web_732_15.png)
 

## Tips and Tricks: Use Tags    

In the add or edit mode of the **Hypervisors/\*nix/win for Autodiscovery** job pages, you can expand the **Miscellaneous** section to apply **Tags for discovered devices**. 

- If you know the servers that are part of your Business Service, you can tag them with the Business Service name, then easily search for these devices by this tag when you are building your Business Service.

- When creating a Business Service, drag the **Device** icon on the left, and then search for the tag to choose the devices you previously tagged in the discovery job.

    <ThemedImage
    alt="Searching Devices using tags"
    sources={{
        light: useBaseUrl('/assets/images/building-business-services-in-device42/tagged-device-search-light.png'),
        dark: useBaseUrl('/assets/images/building-business-services-in-device42/tagged-device-search-dark.png'),
    }}
    />
