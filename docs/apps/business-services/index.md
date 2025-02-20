---
title: "Business Services"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl'

:::info 
Business Applications are now named **Business Services**. Also, Affinity Groups have been renamed to **Application Groups**. See [**Calculation Rules**](/apps/application-groups/calculation-rules) (previously AppFocus Filters) for details on the new ADM flow.
:::

## Overview

Device42 Business Services offers a powerful way to build custom maps of business critical functions. Besides looking different than [Application Groups](/apps/application-groups/), Business Applications are also different because they are not automatically built out based solely on discovered connections and devices. Business Services can be totally designed and customized by you, and can _include any and all of the resources that you identify as critical to your business!_

Using Business Services, you'll be able to catalog all of your business and mission-critical applications. All of the following are possible:

- Creating Business Services from scratch or from existing Application Groups
- Adding and removing devices and connectivity
- Customizing the resource layout, connections, and their labels
- Saving customized layout(s) and returning to edit them at any time
- Migrating Business Services

* * *

Navigate to **Applications > Business Services** from the Device42 menu to display the Business Services list page.

<ThemedImage
  alt="Business Services list page"
  sources={{
    light: useBaseUrl('/assets/images/business-services/list-page-light.png'),
    dark: useBaseUrl('/assets/images/business-services/list-page-dark.png'),
  }}
/>

## Create a Business Service

Business Services are created in two steps. First fill out the **Info** form, and then add Devices, Application Groups, and Application Components to your Business Service from the visualization canvas. You can also clone an existing Business Service and make changes to the cloned Business Service to work from an existing layout.

Select **Applications > Business Services** from the Device42 menu to display the applications list, and then click **Create**.

<ThemedImage
  alt="Business Services Info"
  sources={{
    light: useBaseUrl('/assets/images/business-services/add-details-1-light.png'),
    dark: useBaseUrl('/assets/images/business-services/add-details-1-dark.png'),
  }}
/>

- Enter the application **Name** and select the **Application Type** (COTS, COTS with Customization, or Custom) and add a **Description** if wanted.
- Use the magnifying glass icons to select or enter the **Technical Application Owner**, **Business Application Owner**, and **Responsible Customer or Department**.
- For **DR Recovery Point Objective** and **DR Recovery Time Objective**, use the format **1w 2d 3h 4m 5s** (1 week, 2 days, 3 hours, 4 minutes, and 5 seconds) to denote the time period. The individual terms are optional and numbers must be integers. For example, you can enter **2d 6h** to define two days and six hours.
  
<ThemedImage
  alt="Business Services Info"
  sources={{
    light: useBaseUrl('/assets/images/business-services/add-details-2-light.png'),
    dark: useBaseUrl('/assets/images/business-services/add-details-2-dark.png'),
  }}
/>

- Select or enter the **Migration Group** and **Criticality**, and add any **Notes** or **Tags** you want.
- Click **Save** at the bottom right of the page to save the application and add it to the applications list page.

You'll be directed to a summary page for the new Business Service. Now it's time to work from the visualization canvas to add Devices, Application Groups, and Application Components to your new Business Service.

### Visualizations

Click the **View Application** button from the Business Services details page to display the visualization canvas.

<ThemedImage
  alt="View Application button"
  sources={{
    light: useBaseUrl('/assets/images/business-services/view-application-light.png'),
    dark: useBaseUrl('/assets/images/business-services/view-application-dark.png'),
  }}
/>

Toggle on **Edit** mode using the toggle button on the top right of the canvas.

<ThemedImage
  alt="Blank visualization canvas"
  sources={{
    light: useBaseUrl('/assets/images/business-services/blank-canvas-light.png'),
    dark: useBaseUrl('/assets/images/business-services/blank-canvas-light.png'),
  }}
/>

From the left panel drag the **Device**, **Resource**, **Application Group**, and **Application Component** boxes onto the canvas to open the dialog that allows you to search for specific items to add to the canvas.

### Add Application Components

Drag the **Application Component** block to the canvas – this will open the **Add Application Component** box. 

Search for a component by name, **Device name**, and **Category**, select a component from the list, and **Add** it to the canvas. 

<ThemedImage
  alt="Application Component add box"
  sources={{
    light: useBaseUrl('/assets/images/business-services/add-app-comp-light.png'),
    dark: useBaseUrl('/assets/images/business-services/add-app-comp-dark.png'),
  }}
/>

### Add Application Groups

Efficiently keep track of changes and additions of devices by setting up an Application Group. After adding an Application Group to an application, configure an alert to send notifications when devices are added or changed to the Application Group. First, add a new Application Group as follows: 

- Drag an **Application Group** block to the canvas – this will bring up the Add Application Group box.  You can **Search** by group type, group name, tag, primary device name, or service name
- When you click on a group in the list, you will see the number of devices in that group.
- Select an Application Group from the list, and then click **Add**. Device42 adds the Application Group with all its devices and connections to the canvas.

<ThemedImage
  alt="Application Group add box"
  sources={{
    light: useBaseUrl('/assets/images/business-services/add-app-group-light.png'),
    dark: useBaseUrl('/assets/images/business-services/add-app-group-dark.png'),
  }}
/>

### Add Devices

To add a device to a Business Service, drag a **Device** block to the canvas – this will open the **Add Device** box. You can **Search** for a device by the device name, service level, tag, or service name.

Select a device from the list, and then click **Add**. Device42 adds the device to the canvas.

<ThemedImage
  alt="Device add box"
  sources={{
    light: useBaseUrl('/assets/images/business-services/add-device-light.png'),
    dark: useBaseUrl('/assets/images/business-services/add-device-dark.png'),
  }}
/>

### Draw Connections

Hover over items to reveal a green circle, then drag from the circle to draw the line to the item you want to connect to. You can change the line's appearance by selecting the line options from the toolbar.

<ThemedImage
  alt="Draw connections"
  sources={{
    light: useBaseUrl('/assets/images/business-services/draw-line-light.png'),
    dark: useBaseUrl('/assets/images/business-services/draw-line-dark.png'),
  }}
  style={{ width: '40%' }} 
/>

### Include Text

Double click anywhere on the canvas to create a text box with a background color.

To label connection lines, click on the connection itself and type the description or name for the connection.

<ThemedImage
  alt="Label connection"
  sources={{
    light: useBaseUrl('/assets/images/business-services/named-connection-light.png'),
    dark: useBaseUrl('/assets/images/business-services/named-connection-dark.png'),
  }}
  style={{ width: '60%' }} 
/>

### Save the Visualization

Click the **File** menu at the top of the canvas and select **Save**.

<ThemedImage
  alt="Save option"
  sources={{
    light: useBaseUrl('/assets/images/business-services/save-menu-light.png'),
    dark: useBaseUrl('/assets/images/business-services/save-menu-dark.png'),
  }}
/>

## Clone a Business Service

From the Business Services list page, you can easily clone an existing Business Service. You might want to do this to experiment without editing the original, or as the base of a new Business Service, or even to plan out a future deployment or migration. Follow these steps:

From the Business Services list page, select the checkbox for the application you want to clone, and then click **Clone Business Service**.

<ThemedImage
  alt="Clone button"
  sources={{
    light: useBaseUrl('/assets/images/business-services/clone-button-light.png'),
    dark: useBaseUrl('/assets/images/business-services/clone-button-dark.png'),
  }}
/>

- Click the **Business Services to clone** magnifying glass to select (or search for) the application you want to clone.
- Enter the **# of Business Services** to make and the name or names (**Comma separated names**) to give the newly cloned Business Services and click **Clone**.

<ThemedImage
  alt="Clone form"
  sources={{
    light: useBaseUrl('/assets/images/business-services/clone-form-light.png'),
    dark: useBaseUrl('/assets/images/business-services/clone-form-dark.png'),
  }}
/>

## Alerts

:::note
For existing Business Services, you need to edit the Business Service and add the Application Group (previously known as "Affinity Group") to it to continue getting alerts for it.
:::

Business Services are now linked to Application Groups so that you can set up alerts to notify you when a new Application Group dependency is found. 

Select **Analytics > Setup Alerts** from the Device42 main menu and click **Create**.

<ThemedImage
  alt="Setup Alert menu"
  sources={{
    light: useBaseUrl('/assets/images/business-services/alerts-menu-light.png'),
    dark: useBaseUrl('/assets/images/business-services/alerts-menu-dark.png'),
  }}
/>


- Enter a **Name** for the alert, and then select the **Business Service** for the **Rule Type** of the alert. Each Rule Type has associated Triggers, which define the conditions that will generate an alert.
- For the **Trigger**, select **New Application Group Dependency Found** or **Application Group Dependency Removed**.
- Select the **Alert Type**.
    - If you select **D42 Notification**, select or add the **Escalation Profile** to use for the alert. You use Escalation Profiles to set up email notification escalation tiers. Select **Tools > Admins & Permissions > Escalation Profiles** to add or edit escalation profiles.


<ThemedImage
  alt="Business Service alert"
  sources={{
    light: useBaseUrl('/assets/images/business-services/add-alert-light.png'),
    dark: useBaseUrl('/assets/images/business-services/add-alert-dark.png'),
  }}
/>

As you construct your alert, Device42 displays the alert definition based on the options you select or enter. For example:

> When the individual Business Service Jupiter service app has reported New Application Group Dependency Found then send notification to users assigned to Main profile 
> 
Depending on the alert Rule Type you select, you may also see an **Apply To:** option that you use to select the objects you want to apply the alert to. Use the **Available objects** list on the left to select the objects you want to add to the **Chosen objects** list on the right.

<ThemedImage
  alt="Choose objects"
  sources={{
    light: useBaseUrl('/assets/images/business-services/alert-objects-light.png'),
    dark: useBaseUrl('/assets/images/business-services/alert-objects-dark.png'),
  }}
/>

**Additional Options**

- **Priority**: Choose between Critical, High Priority, Medium Priority, and Low Priority.
- **Resend Notification**: Number of seconds to wait before sending an email notification for the alert. Leave this field blank to send the email only once.
- **Seconds Before Action**: Number of seconds that the alert condition (the trigger) exists before the Device42 generates the alert.

<ThemedImage
  alt="Alert options"
  sources={{
    light: useBaseUrl('/assets/images/business-services/add-alert-priority-light.png'),
    dark: useBaseUrl('/assets/images/business-services/add-alert-priority-dark.png'),
  }}
/>

- **Notification Template**: Customize the alert notification and **Save** the alert.

<ThemedImage
  alt="Alert options"
  sources={{
    light: useBaseUrl('/assets/images/business-services/add-alert-template-light.png'),
    dark: useBaseUrl('/assets/images/business-services/add-alert-template-dark.png'),
  }}
/>

See [Alert Rule Types and Triggers](/reports/reports/setup-alerts-and-notifications/#alert-rule-types-and-triggers) for more information.

### View Alert Notifications

If you select **D42 Notification** as the **Alert Type** when you create an alert, Device42 generates a notification when the alert condition triggers the alert. 

Select **Analytics > Notifications** from the menu bar to go to the **Notifications** page.

![](/assets/images/WEB-219_Alerts_Banner-Bell-icon-1.jpg)

The page displays notifications for all triggered alerts whose **Alert Type** is **Device42 Notification**. Click **My Notifications** or **All Notifications** to see the notification lists.

![](/assets/images/WEB-219_Alerts_Notifications-page-1.jpg)

See [Notifications](/reports/reports/setup-alerts-and-notifications/#notifications) and the following [Customizing Alerts with Notification Variables](/reports/reports/setup-alerts-and-notifications/#customizing-alerts-with-notification-variables) section on the Alerts and Notifications page for more details.

## Edit the Visualization

### Delete a Device

To delete a device (or other objects on the canvas), either select the device and press the **Delete** key, or right-click on a selected device and select **Delete** from the context menu.

![](/assets/images/WEB-542_BusinessApps-Canvas-Ex-3-PopupMenu.png)

**Note**: Removing a device does not remove connections on the canvas, nor does it affect calculated information stored in Application Groups.

### Rename a Device

To rename a device (or other objects on the canvas), select the device, double-click the device name, and type a new name.

**Note:** The name change does not change the device record and is only for display in this specific Business Service visualization.

### Add or Edit Connections in a Visualization

You can add and edit connections between object on the canvas.

1. Hover over a device object to display the object’s connection points (green dots). Click a green dot and drag the connection to a point on any other object. 

   ![](/assets/images/WEB-542_BusinessApps-Canvas-Ex-4-ConnectorPoint.png)

2. To delete a connection, select the connection and press the **Delete** key, or right-click and select **Delete** from the context menu.

**Note:** Deleting a connection does not affect calculated information stored in Application Groups.

## Delete a Business Service

From the **Applications > Business Services** page, select the Business Service(s) you want to delete and choose one of the delete options from the **Actions** dropdown. 

<ThemedImage
  alt="Delete actions"
  sources={{
    light: useBaseUrl('/assets/images/business-services/delete-actions-light.png'),
    dark: useBaseUrl('/assets/images/business-services/delete-actions-dark.png'),
  }}
/>

## View a Device's Business Service

View which Business Services a device belongs from that device's **Info** tab without running a custom report or opening multiple tabs.

![Device with Business Service](/assets/images/business-services/device-business-service.png)

## Migrate Business Services

You can export Business Services directly for migration by third-party migration software suites. Device42 currently supports export to Microsoft Azure, RiverMeadow, and Carbonite.

- From **Applications > Business Services**, and select the applications you want to migrate and choose the **Create Migration for Selected Objects** action from the **Actions** dropdown.

    <ThemedImage
    alt="Create migrations action"
    sources={{
        light: useBaseUrl('/assets/images/business-services/create-migrations-action-light.png'),
        dark: useBaseUrl('/assets/images/business-services/create-migrations-action-dark.png'),
    }}
    />

- Choose between **RiverMeadow CSV** and **Microsoft Azure Migrate** from the dropdown.

    <ThemedImage
    alt="Target selection"
    sources={{
        light: useBaseUrl('/assets/images/business-services/migration-targets-light.png'),
        dark: useBaseUrl('/assets/images/business-services/migration-targets-dark.png'),
    }}
    />

### Export to Microsoft Azure Migrate (cloud migrations)

Device42 can export one or more of your Business Services directly to the Microsoft [Azure cloud platform](https://portal.azure.com/#home) via [Azure Migrate](https://azure.microsoft.com/en-us/products/azure-migrate/).

For detailed instructions on [how to export a business service to the Azure cloud](integration/external-integrations/azure-migrate.md), go to the dedicated Azure Migrate integration page at [Azure migrate](integration/external-integrations/azure-migrate.md).

### Export to RiverMeadow 

Click the **Export** button to export a CSV file with the IP address(es) and credentials for the server instance(s) that power your chosen Business Services.

Save the exported CSV, and then open it using RiverMeadow to perform your migration.

:::tip
Support for more migration software is being added and will be released shortly. Should you have any questions, please contact [support@device42.com](mailto:support@device42.com).
:::

* * *

## Accessing Business Services through DOQL

Business Services information is available through our query language (DOQL).

The following views support the applications and relationships in Business Services:

- `view_businessapplication_v1`
- `view_businessapplicationelement_v1`
- `view_businessapplicationconnection_v1`

***

## Explore Existing Business Services

Business Services display information about any Devices and Application Components associated with the Business Service. Device42 automatically categorizes Application Components as Database, Application Layer, Web Server, Load Balancer, or Other. Application Component information also appears on the Business Service visualization canvas (see below).

Select **Applications > Business Services** from the Device42 menu to display a list of the existing Business Services.

<ThemedImage
  alt="Business Services list page"
  sources={{
    light: useBaseUrl('/assets/images/business-services/list-page-light.png'),
    dark: useBaseUrl('/assets/images/business-services/list-page-dark.png'),
  }}
/>

- Click on a Business Service to open the info panel. The left **Object List** panel allows you to select other Business Services and the right **Breakdown** panel displays information about the selected Business Service.

    <ThemedImage
    alt="Business Services panel view"
    sources={{
        light: useBaseUrl('/assets/images/business-services/bs-info-panel-light.png'),
        dark: useBaseUrl('/assets/images/business-services/bs-info-panel-dark.png'),
    }}
    />

- An Application Groups that were included in the Business Service are displayed under **Info**.

    <ThemedImage
    alt="Business Service with Application Group"
    sources={{
        light: useBaseUrl('/assets/images/business-services/panel-view-app-group-light.png'),
        dark: useBaseUrl('/assets/images/business-services/panel-view-app-group-dark.png'),
    }}
    />

- Click the **View Application** button to see the visualization of the application. Hover over **Application Details** to see information about the application. The left panel contains icons for adding devices, Application Groups, or Application Components to your Business Service and a menu bar above the icons.  You can also now run a **Service Dependencies Report** for the Business Service, which details all the communications for the devices within the Business Service
    
    ![](/assets/images/D42-23306_biz-app-canvas.png)

- Click a device, Application Group, or Application Component object on the canvas to see details about that item. Links in the details box or below the object take you to the view pages for those items.

    ![](/assets/images/D42-23306_biz-app-object-details.png)
