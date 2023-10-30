---
title: "Jira Service Management Integration"
sidebar_position: 17
---
import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

Integrate your Device42 instance with Jira Service Management (JSM) to manage your team's tasks, linking them directly to the affected assets. 

_For installation of the [Device42 for JSM **Assets**](https://marketplace.atlassian.com/apps/1229672/device42-for-jira-service-management-assets?hosting=cloud&tab=overview) app, see the [JSM Assets integration](jira-assests-itegration.mdx) page. This version of the integration is for Jira Service Management Cloud only. If you are looking to integrate Device42 with a self-hosted version of Jira software, see [Device42-Jira (Self-Hosted) integration page.](device42-jira-integration.md)._

## Installation and Configuration

### Integration Prerequisites

To make the Device42-Jira integration, users must have:

* **Device42 v15.11.01+** The virtual appliance, running and populated with configuration items (CIs) to sync to Jira. 
* **Jira Cloud account** You must be a Jira administrator to install and configure the Device42 [Jira Service Management](https://marketplace.atlassian.com/apps/1218369/device42-for-jira-service-management?hosting=cloud&tab=overview) app.

### Set Up Device42 Cloud Services

Prepare your Device42 instance for cloud service integrations by navigating to **Tools > Integrations > Cloud Services** and inputting the required details. Fill in the "D42 URL for SaaS apps" field with the hostname from which your Device42 instance can be accessed, along with your "Company Name" and "Email".

[image placeholder]

### Configuring Device42

1. From the Device42 menu, go to **Tools > Integrations > External Integrations** and click on the **Add External Integration** button.

    ![Add external Jira integration](/assets/images/add_external_Jira_integration_menu.png)

2. Input the URL of your Jira Cloud instance: `https://YOURURL.atlassian.net/` and select _Jira Cloud_ as the integration "Type". 

    ![Jira Service Desk external integration settings](/assets/images/external_integration_settings.png)

3. Copy the Device42 "Verification Token" which you'll use to configure the JSM app in the next section. 

    ![Global integration settings SaaS](/assets/images/global_SaaS_settings.png)

### Configuring Jira

To install and configure the Jira-side integration, log in to your Jira Cloud account and proceed as follows:

1. Locate the [Device42 for Jira Service Management](https://marketplace.atlassian.com/apps/1218369/device42-for-jira-service-management?tab=overview&hosting=cloud) app from the Atlassian Marketplace and click on the yellow "Get it now" button to install it.

    [placeholder image]

2. Navigate to **Apps > Manage Your Apps > Device42 Jira Service Management > Configure**. Paste your verification token in the "Linking" field and click on the "Link to Device42" button. The account status will display a green "Linked" label once complete. 

    [placeholder image]

3. Now add the _Linked Assets_ field as an issue type in Jira; your Device42 data is related to Jira using this field. Go to **Projects > Project Settings > Issue Type** and select the "External asset platform" option then provide a relevant name for this field in the textbox to its left.

    ![Linked Issues field configuration](/assets/images/Linked_issues_field_config.png) 

### Configuring, Uninstalling, or Verifying the Installation of the JSM App

1. You can view and manage the JSM app from your Jira instance. Go to **Apps > Manage your apps** and click on the "Device42 Jira Service Management" app under the "User-installed apps" heading.
2. Click on "Configure" to link your Device42 instance as detailed in the [previous section](#configuring-jira).
3. Click on the "Uninstall" button and confirm to remove the app from your Jira product instance.

[image]

* * *

## Integration Usage and Features

### The JSM Interface in Device42 

Once the Device42 for Jira Service Desk app has been installed and configured, you will see a new entry for _"Jira - your-Jira-instance-address"_ (e.g. `Jira - https://d42product.atlassian.net`) at the bottom of your Device42 assets pages.

Note: you can go to **Resources > Compute > All Devices** and select or search for an asset from your list of devices.

![Jira Service Desk tickets on Device42 Asset](/assets/images/Jira-integration-interface-on-D42-Asset-HL.png)

* Linked Jira issues to a given CI will display information about the issue's "Reporter", "Assignee", and "Status".

* Under the "Action" column, click on the red "x" to the right of a linked issue to remove that issue from the Asset. _Note this will not delete the issue from Jira._

You can create a brand new Jira issue or link an existing issue using the 'control links' located at the bottom of the interface. Refer to the [Create a New Jira Issue](#create-a-new-jira-issue-from-device42) section or the [Link an Existing Jira Issue](#link-an-existing-jira-issue-from-device42) section for more information.

[image]

### Create a New Jira Issue From Device42

1. Click on "Add Jira Issue" and search for your Jira project name. By default, a Jira project name is the first three letters of the automatically assigned issue keys (e.g.'KAN-3`).
2. Choose a Jira issue "Type" from the dropdown menu. 
3. The "Reporter" value is visible but is fixed by the Jira integration configuration process.
4. Fill in the "Assignee", "Summary", and "Description" fields, and add any attachments if needed.
5. Submit the issue. A confirmation box will display the new Jira issue ID.

Now, the new issue is attached to the CI.

![Linking an issue](/assets/images/Add_Jira_Issue_Magnified.PNG)

### Link an Existing Jira Issue From Device42

1. Click on the “Link to Jira Issue” option and input your Jira project name. Note that the project name is the first three letters of an issue ID by default.
2. Provide the issue ID or a link to the issue you'd like to link to the CI.
3. A confirmation notification will open displaying the linked issue ID. 

[image]

### Customizing Which Assets Sync

By default, syncs run daily at 2 AM and only sync "Devices". You can customize the data that is synced from Device42 by adding new Sync [DOQL queries](reports/device42-doql/index.md), customizing them, or writing your own.

![Add new DOQL](/assets/images/Sync_DOQL_queries.png)

The following data element types can be synced with the default saved DOQLs:

* Application Components
* Buildings
* Customers
* Devices
* End Users
* Parts
* Power Units
* Purchases
* Racks
* Rooms

NOTE: When adding or modifying DOQL settings or queries, be sure to reset the last synced time. Default queries are time-constrained and if not reset, newly selected categories will NOT sync.

![Reset last successful DOQL sync](/assets/images/Reset_last_run_success_Time-1.png)

### Working with Device42 Assets from Jira

1. To add an asset to an issue, click on the "+ Link Asset" link from that issue. Start typing the name of the Asset you would like to add, and it will be matched against your partial entry. Click the asset of interest from the search results. Repeat to attach another: 

    ![Add D42 asset Jira](/assets/images/add_d42_asset_jira.png)

2. Once a record is linked, it will be present on the Jira record. Selecting it will display its associated information present in Device42:

    ![assets from d42 on a Jira Service Desk ticket](/assets/images/D42_assets_in_Jira.png)

3. To unlink an issue from the Jira Cloud interface, hover your cursor on the left of the down arrow symbol on the CI you'd like to detach; click on the revealed ellipsis icon. Then select "Unlink asset" to confirm. 

    [image placeholder]

### JSM Integration Feature Highlights

Integrate Device42 with your Jira Service Management account to do the following: 

* Attach Device42 Assets directly to Jira tickets (known as issues).
* Create new Jira tickets and attach existing tickets right from the Device42 interface; i.e. from any Device or Asset CI detail view.
* See all Jira issues associated with a particular Device or Asset CI.
* Filter a set of Device42 Assets or Devices to display within the custom field of a specific project or custom field set
* Control which assets are available within Jira Service Management. You can modify the default saved DOQL query _(the integration leverages Device42 Object Query Language)_, or create your own completely custom DOQL.
