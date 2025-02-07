---
title: "Business Applications"
---

:::info 
Business Applications are now named **Business Services**. Also, Affinity Groups have been renamed to **Application Groups**. See [**Calculation Rules**](/apps/application-groups/calculation-rules) (previously AppFocus Filters) for details on the new ADM flow.
:::

## Using Business Services

Device42 Business Services offers a powerful way to build custom maps of business critical functions. Besides looking different than [Application Groups](/apps/application-groups/), Business Applications are also different because they are not automatically built out based solely on discovered connections and devices. Business Services can be totally designed and customized by you, and can _include any and all of the resources that you identify as critical to your business!_

Using Business Services, you'll be able to catalog all of your business and mission-critical applications. All of the following are possible:

- Creating Business Services from scratch or from existing Application Groups
- Adding and removing devices and connectivity
- Customizing the resource layout, connections, and their labels
- Saving customized layout(s) and returning to edit them at any time

* * *

- Select **Applications > Business Services** from the Device42 menu to display a list of existing applications.

![](/assets/images/D42-23306_biz-app-list-page.png)

- Click on a Business Service **Name** to view details about the application.

![](/assets/images/D42-23306_biz-app-view-page.png)

**Note:**  Business Services display information about any Devices and Application Components associated with the Business Service. (Device42 automatically categorizes application components as Database, Application Layer, Web Server, Load Balancer, or Other.) Application Component information also appears on the Business Service visualization canvas (see below).

- Click **View Application** to see the visualization of the application.  Click the **Edit** button at the top right to turn edit mode on.

![](/assets/images/D42-23306_biz-app-canvas.png)

The page displays the Business Service name; hover over **Application Details** to see information about the application. The left panel contains icons for adding devices, Application Groups, or Application Components to your Business Service and a menu bar above the icons.  You can also now run a **Service Dependencies Report** for the Business Service, which details all the communications for the devices within the Business Service

Click a device, Application Group, or Application Component object on the canvas to see details about that item. Links in the details box or below the object take you to the view pages for those items.

![](/assets/images/D42-23306_biz-app-object-details.png)

## Add a Business Service

- Select **Applications > Business Services** from the Device42 menu to display the applications list, and then click **Add Business Service**.

![](/assets/images/D42-23306_biz-app-add-page.png)

- Enter the application **Name** and select the **Application Type** (COTS, COTS with Customization, or Custom) and add a **Description** if wanted.
- Use the magnifying glass icons to select or enter the **Technical Application Owner**, **Business Application Owner**, and **Responsible Customer or Department**.
- Use the format **1w 2d 3h 4m 5s** (1 week, 2 days, 3 hours, 4 minutes, and 5 seconds) to denote the time period for **DR Recovery Point Objective** and **DR Recovery Time Objective**. The individual terms are optional and numbers must be integers. For example, you can enter **2d 6h** to define two days and six hours.
- Select or enter the **Migration Group** and **Criticality**, and add any **Notes** or **Tags** you want.
- Click **Save** at the bottom right of the page to save the application and add it to the applications list page.

**Note**: To edit an existing service, click its **Name** in the Business Services list page, and then click **Edit**.

![](/assets/images/D42-23306_biz-app-edit-page.png)

## Add or Edit Business Service Visualizations

- Select **Applications > Business Services** to display the Business Services list, select an application **Name**, and then click **View Service**.
- Device42 displays the visualization canvas.  Click the **Edit** button at the top right to turn edit mode on.

![](/assets/images/D42-23306_biz-app-add-resource-1.png)

### Add Devices

- To add a device to a Business Service, drag a **Device** block to the canvas – this will open the **Add Device** box.  You can **Search** for a device by the device name, service level, tag, or service name.
- Select a device from the list, and then click **Add**. Device42 adds the device to the canvas.

![](/assets/images/D42-23306_biz-app-add-device-popup.png)

### Add Application Groups

Efficiently keep track of changes and additions of devices by setting up an Application Group. After adding an Application Group to an application, configure an alert to send notifications when devices are added or changed to the Application Group. First, add a new Application Group as follows: 

- Drag an **Application Group** block to the canvas – this will bring up the Add Application Group box.  You can **Search** by group type, group name, tag, primary device name, or service name
- When you click on a group in the list, you will see the number of devices in that group.
- Select an Application Group from the list, and then click **Add**. Device42 adds the Application Group with all its devices and connections to the canvas.

![](/assets/images/D42-23306_biz-app-add-affinity-group-popup.png)

### View Application Groups

You can see which Application Groups are in the Business Services:

![](/assets/images/business-services/groups-business-service.png)

### Add an Alert

Next set up the alert. Select **Analytics > Setup Alerts** from the Device42 menu bar and then click **Add Alert** on the Select Alert to view page.

![](/assets/images/WEB-219_Alerts_Add-Alert-page.jpg)

Business Services are now linked to Application Groups so that you can set up alerts to notify you when a new Application Group dependency is found. 

:::note
For existing Business Services, you need to edit the Business Service and add the Application Group (previously known as "Affinity Group") to it to continue getting alerts for it.
:::

![Add Application Group to existing Business Service](/assets/images/business-services/add-application-group.png)

To set up an alert, follow these steps:

![Set up alert](/assets/images/business-services/bs-alerts-config.png)

- Enter a **Name** for the alert, and then select the **Business Service** for the **Rule Type** of the alert. Each Rule Type has associated Triggers, which define the conditions that will generate an alert.
- For the **Trigger**, select **New Application Group Dependency Found**.
- Select the **Alert Type**.
    - If you select **D42 Notification**, select or add the **Escalation Profile** to use for the alert. You use Escalation Profiles to set up email notification escalation tiers. Select **Tools > Admins & Permissions > Escalation Profiles** to add or edit escalation profiles.
    - If you select **Alert Integration**, select or add the alert integration (for example, PagerDuty, Opsgenie, etc.) to use for the alert. Select **Tools > Integrations > External Integrations** to view or add external integrations. Also see [https://www.device42.com/integrations/](https://www.device42.com/integrations/) for more information about Device42 integrations.

As you construct your alert, Device42 displays the alert definition based on the options you select or enter. The example below shows an Operating System Count alert that sends a notification to the Alert Group 1 escalation profile.

![](/assets/images/WEB-219_Alerts_Contructed-OS-alert-example.jpg)

Depending on the alert Rule Type you select, you may also see an **Apply To:** option that you use to select the objects you want to apply the alert to. Use the **Available objects** list on the left to select the objects you want to add to the **Chosen objects** list on the right.

**Additional Options**

- **Priority** — Critical, High Priority, Medium Priority, Low Priority
- **Resend Notification** — Amount of time (in seconds) to wait before sending an email notification for the alert. Leave this field blank to send the email only once.
- **Seconds Before Action** — Amount of time (in seconds) that the alert condition (the trigger) exists before the Device42 generates the alert.
- **Job Interval Factor Before Action** — (Displayed for specific power alerts in place of Seconds Before Action.) Trigger the action only if the condition persists for the Job Interval Factor times the polling rate for associated jobs. Default value is 1.

![](/assets/images/D42-26290_alerts-job-interval.jpg)

- **Notes** — Any notes about the alert.
- **Notification Template** — Text fields you can use to create templates for the Subject and Message of the alert email.

When you are done, click **Save** at the bottom of the page to save the alert.

![](/assets/images/WEB-219_Alerts_Add-Alert-additional-options.jpg)

See [Alert Rule Types and Triggers](/reports/reports/setup-alerts-and-notifications/#alert-rule-types-and-triggers) for more information.

### View Alert Notifications

If you select **D42 Notification** as the **Alert Type** when you create an alert, Device42 generates a notification when the alert condition triggers the alert. 

Select **Analytics > Notifications** from the menu bar to go to the **Notifications** page.

![](/assets/images/WEB-219_Alerts_Banner-Bell-icon-1.jpg)

The page displays notifications for all triggered alerts whose **Alert Type** is _]**Device42 Notification**. Click **My Notifications** or **All Notifications** to see the notification lists.

![](/assets/images/WEB-219_Alerts_Notifications-page-1.jpg)

See [Notifications](/reports/reports/setup-alerts-and-notifications/#notifications) and the following [Customizing Alerts with Notification Variables](/reports/reports/setup-alerts-and-notifications/#customizing-alerts-with-notification-variables) section on the Alerts and Notifications page for more details.

### Add Application Components

- To add an application component to a Business Service, drag a **Application Component** block to the canvas – this will open the **Add Application Component** box.  You can **Search** for a component by its name or its device name.
- Select a component from the list, and then click **Add**. Device42 adds the application component to the canvas.

![](/assets/images/D42-23306_biz-app-add-app-comp-popup.png)

### Delete a Device

To delete a device (or other objects on the canvas), either select the device and press the **Delete** key, or right-click on a selected device and select **Delete** from the context menu.

![](/assets/images/WEB-542_BusinessApps-Canvas-Ex-3-PopupMenu.png)

**Note**: Removing a device does not remove connections on the canvas, nor does it affect calculated information stored in Application Groups.

### Rename a Device

To rename a device (or other objects on the canvas), select the device, double-click the device name, and type a new name.

**Note:** The name change does not change the device record and is only for display in this specific Business Service visualization.

## Add or Edit Connections in a Visualization

You can add and edit connections between object on the canvas.

1. Hover over a device object to display the object’s connection points (green dots). Click a green dot and drag the connection to a point on any other object. 

   ![](/assets/images/WEB-542_BusinessApps-Canvas-Ex-4-ConnectorPoint.png)

2. To delete a connection, select the connection and press the **Delete** key, or right-click and select **Delete** from the context menu.

**Note:** Deleting a connection does not affect calculated information stored in Application Groups.

### Name Connections

To name connections, simply click on the connection itself and type the description or name for the connection.

## Save a Business Service Visualization

Click the **File** menu at the top of the canvas and select **Save**.

![](/assets/images/BusApps-canvas-6-file-save.png)

## Clone or Delete Business Services

### Clone a Business Service

From the Business Services list page, you can easily clone an existing Business Service. You might want to do this to experiment without editing the original, or as the base of a new Business Service, or even to plan out a future deployment or migration. Follow these steps:

- Select **Applications > Business Services** to display the Business Services list, select the checkbox for the application you want to clone, and then click **Clone Business Service**.

![](/assets/images/D42-23306_biz-app-clone-ba.png)

- Click the **Business Services to clone** magnifying glass to select (or search for) the application you want to clone.
- Enter the **# of Business Services** to make and the name or names (**Comma separated names**) to give the newly cloned Business Services and click **Clone**.

### Delete a Business Application

- Select **Applications > Business Applications** to display the Business Services list, and select the checkbox for the application you want to delete.
- Select **Delete selected Business Service** from the Actions menu and click the blue lightning bolt.

## Exporting a Business Service for Migration

You can export Business Services directly for migration by 3rd-party migration software suites. Device42 currently supports export to Microsoft Azure, RiverMeadow, and Carbonite.

### Exporting to Carbonite Migrate

Device42 can export one or more of your Business Services directly to Carbonite Migrate.

### Exporting to Microsoft Azure Migrate (cloud migrations)

Device42 can export one or more of your Business Services directly to the Microsoft [Azure cloud platform](https://portal.azure.com/#home) via [Azure Migrate](https://azure.microsoft.com/en-us/products/azure-migrate/).

For detailed instructions on [how to export a business service to the Azure cloud](integration/external-integrations/azure-migrate.md), go to the dedicated Azure Migrate integration page at [Azure migrate](integration/external-integrations/azure-migrate.md).

### Exporting to RiverMeadow Data Migration

- Select **Applications > Business Services**, and then select the check boxes for the applications you want to migrate.

![](/assets/images/D42-23306_biz-app-select-migration-menu.png)

- Select **Create Migration for Selected Objects** from the Action menu and click the blue lightning bolt.
- This will bring you to the Create Migration Export page. Select **RiverMeadow CSV** from the **Choose target for migration** dropdown, and click **Export** button to export a CSV file with the IP address(es) and credentials for the server instance(s) that power your chosen Business Services.

![](/assets/images/D42-23306_biz-app-select-migration-report.png)

- Save the exported CSV, and then open it using RiverMeadow to perform your migration.

Support for more migration software is being added and will be released shortly. Should you have any questions, please contact [support@device42.com](mailto:support@device42.com).

* * *

## Accessing Business Services through DOQL

Business Services information is available through our query language (DOQL).

The following views support the applications and relationships in Business Services:

- `view_businessapplication_v1`
- `view_businessapplicationelement_v1`
- `view_businessapplicationconnection_v1`

