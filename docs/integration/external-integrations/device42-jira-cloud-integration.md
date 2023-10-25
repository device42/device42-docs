---
title: "Jira Service Desk & Jira Cloud Integration"
sidebar_position: 17
---

## Prerequisites and Installation

### Integration Prerequisites

To use the Device42-Jira integration, users must have:

\- **Device42 v15.11.01+** virtual appliance, running, properly configured, and populated with CIs (to sync to Jira) - **Jira instance _\[ServiceDesk, or Cloud for this version\]_**, properly configured, with the Device42 plugin installed. _\*This version of the integration is for Jira Service Desk / Cloud only. If you are looking to integration Device42 with a self-hosted version of Jira software, see the [Device42-Jira (Self-Hosted) integration page.](device42-jira-integration.md)_

### Configuring Device42

1. You must be a Jira Administrator to install & configure the Device42 Jira Service Desk / Jira Cloud Addon.
2. In the Device42 Menu, TOOLS → Settings → Global Settings → \[External Integration Settings\]: ![Add external Jira integration](/assets/images/add_external_Jira_integration_menu.png)
3. Input the URL of your Jira Service Desk / Jira Cloud instance: `https://YOURURL.atlassian.net/` & select _Jira Cloud_ as the integration "Type". ![Jira Service Desk external integration settings](/assets/images/external_integration_settings.png)
4. Head to the Global Settings Page _Tools menu -> Settings -> Global Settings_ and scroll all the way to the bottom. Ensure all three required settings under heading "External Integration Settings” are correctly configured _(D42 URL for SaaS apps, Company Name, and Email):_ ![Global integration settings SaaS](/assets/images/global_SaaS_settings.png)
5. Proceed to the next section (below) to complete Jira-side configuration & install the integration plugin!

### Configuring Jira - Installing the integration plugin & configuring Jira Service Desk / Jira Cloud

**From the Atlassian Marketplace** - Locate the [Device42 CMDB for Jira Service Desk](https://marketplace.atlassian.com/search?query=device42).

1. Click the yellow "Get it now" button in the upper right-hand corner of the Atlassian Marketplace listing for the Device42 - Jira Service Desk / Jira Cloud CMDB Integration.
2. Log in using your Atlassian credentials and follow the on-screen instructions.
3. Follow on screen prompts. The installation process is automatic after this point. Installation is complete.

**\[Alternate DEV MODE Installation - Special Circumstances ONLY\]** - If you were provided the plugin file:

1. 1. Go to "Add-ons" –> Manage Add Ons –> "Enable Development Mode" & _Apply_ settings
    2. Next, from "Manage Add-ons" — Input the URL of the plugin:

For the new version of the integration, D42 15.11.01+, specify: `https://connect.device42.net/static/Jira_assets_v3.json` For the previous version of the integration, below D42 15.11.01, specify:`https://connect.device42.net/static/Jira_v2.json`

1. Choose "Upload". The Device42 Cloud Add-on will be installed.

**\*\*Jira Cloud only (not required for Jira Service Desk) - Configure required fields in Jira Cloud**

- Ensure the _Linked Assets_ field is present on your default views for the integration to function as designed. "No Screens" is the default; Click the "Pencil" icon to edit and **check all boxes** under "custom fields" to enable the Linked Assets field: ![Linked Issues field configuration](/assets/images/Linked_issues_field_config.png) Check ALL of the highlighted boxes to show the assets screen on Jira Service Desk: ![Show field checkboxes ](/assets/images/Associate_field_Linked_assets_to_screen.png)**NOTE:** All field are required. If one or more is missing, you won't be able to add an external integration from the TOOLS --> Integration menu.

### Modifying, removing, or verifying installation of the Device42 - Jira Service Desk / Jira Cloud Plugin

1. You can view and/or manage the plugin from the from the Administration menu. In Jira Service Desk (or other Jira software), head over to the “Add-ons” → “Manage add-ons”
2. Choose the Device42 Plugin from the Atlassian Plugin Manager.
3. Follow on-screen prompts. The removal process is automatic.
4. Confirm you no longer see the plugin in your plugin list.

* * *

## Usage and Features Overview

### Device42 - Jira Service Desk / Jira Cloud ITSM Integration Interface Overview

Once the Device42 CMDB for Jira Service Desk integration has been installed, you will see a new entry for _"Jira - Your Jira instance name"_ at the bottom of your Device42 Assets pages (e.g. `Jira - https://d42assets.atlassian.net` below):

![Jira Service Desk tickets on Device42 Asset](/assets/images/Jira-integration-interface-on-D42-Asset-HL.png)

- At the top of the integration 'box', you will see a list of linked Jira issues, the reporter, status, and other useful information about the linked issue.
- The bottom contains 'control' links - Using these links, you can create a brand new Jira ticket/issue, or can link an existing Jira issue. The red "X" at the right of each linked issue will remove that issue attachment from the Asset _(but does \*not\* delete the issue from Jira)_.

### Creating or attaching a Jira issue from Device42 UI

1. Choose "Add Jira Issue" - You'll see a "Select Project" Popup; autocomplete field- type project name & click "Select"
2. You'll now choose a Jira 'issue type' - choose the type ('task'…) and 'reporter' is visible, but fixed by the Jira integration configuration.
3. Add assignee, summary, description, and any attachments.
4. Submit the issue; you'll get a box confirming creation with the issue ID
5. The new issue will now be attached to the CI![Linking an issue](/assets/images/Add_Jira_Issue_Magnified.PNG)

### Linking an Issue to a Device42 CI

Linking an issue is as simple as choosing “Link to Jira Issue” and providing the Issue ID, which is then linked to the CI.

### Working with Device42 Assets in Jira Service Desk / Jira Cloud

1. View any linked issue in Jira Service Desk / Jira Cloud, and you'll see "Device42 Objects" on the lower right. These are CI's linked to the issue, and they themselves are links to the Device42 CI they concern: ![assets from d42 on a Jira Service Desk ticket](/assets/images/D42_assets_in_Jira.png)
2. To link a new issue, open that issue and from the "asset" field, click "Add Asset". Start typing the name of the Asset you would like to add, and it should be match against your partial entry. Click the asset of interest from the 'results', and it's attached. Repeat to attach another: ![Add D42 asset Jira](/assets/images/add_d42_asset_jira.png)
3. To unlink an issue, from the Jira Service Desk / Jira Cloud interface, click the Red X next to the CI you'd like to detach; choose "Unlink!" to confirm. The issue will no longer be linked.

### Customizing which assets sync - DOQL & sync settings

Default syncs run daily at 2AM and sync "Devices" only. Users can customize what is synced by adding new Sync DOQL queries, customizing, or writing their own: 

![Add new DOQL](/assets/images/Sync_DOQL_queries.png)

The following data element types can be synced over with the default saved DOQLs:

- Application Components
- Buildings
- Customers
- Devices
- End Users
- Parts
- Power Units
- Purchases
- Racks
- Rooms

**NOTE: _When adding or modifying DOQL settings or queries, be \*\*SURE\*\* to reset the last synced time. Default queries are time-constrained and if not reset, newly selected categories will NOT sync!\*\*\*_** 

![Reset last successful DOQL sync](/assets/images/Reset_last_run_success_Time-1.png)

### Usage / feature highlights

- Attach Device42 Assets directly to Jira Service Desk and/or Jira Cloud issues / tickets
- View Device42 Asset data natively from Jira Service Desk
- Create Jira Service Desk tickets and attach existing tickets right from the Device42 interface, from any Device / Asset (CI) details view
- See all Jira Service Desk issues associated with a particular Device or Asset CI
- Filter a set of Device42 Assets / Devices to display within the custom field of a specific project and/or custom field set
- Full control over which assets are available within Jira Service Desk - users may modify the default 'saved DOQL query' _(the integration leverages Device42 Object Query Language)_, or can create their own completely custom DOQL
