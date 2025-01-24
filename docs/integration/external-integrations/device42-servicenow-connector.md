---
title: "ServiceNow Integration"
sidebar_position: 28
---

Use the Device42-ServiceNow connector (plugin) to sync your IT data from Device42 to your ServiceNow CMDB. Synchronization can be manual or automated on a schedule you set.

The plugin supports the Xanadu, Washington DC, and Vancouver versions of ServiceNow.

![The ServiceNow logo](/assets/images/device42-servicenow-connector/servicenow-logo-50.png)

### Prerequisites

- In Device42, configure your Cloud Connector and add **ServiceNow** as an External Integration. See the [Main Appliance Configuration](#device42-main-appliance-configuration) section below for details.
  
- From your ServiceNow instance, install the **Configuration Management For Scoped Apps (CMDB)** plugin as a dependency.

    ![Configuration Management For Scoped Apps](/assets/images/device42-servicenow-connector/scoped-apps-plugin.png)


### Install the Plugin

1. Find and install the Device42 plugin from either the ServiceNow Store or via the **Plugin** section of your ServiceNow instance:

    - Visit [this ServiceNow Store link](https://store.servicenow.com/sn_appstore_store.do#!/store/application/42597533db201300a189622dca961964/4.2.0?sl=sh) and click **Get** to install the plugin on your ServiceNow instance. 

      ![The Device42 plugin in the ServiceNow store](/assets/images/device42-servicenow-connector/servicenow-store.png)

    - Alternatively, from your ServiceNow instance, search for "plugin" under **All** to navigate to the plugins page, and from there search for "Device42". 

      ![ServiceNow search bar](/assets/images/device42-servicenow-connector/search-plugin-snow.png)

2. Add **Device42** to the data-source choice list. Navigate to **System Definition > Scripts – Background** (search for it under **All**) and paste in the following script. Leave **in scope** as **global.

    ```javascript
    var discoverySource = 'Device42';
    var gr = new GlideRecord('sys_choice');
    gr.addQuery('element', 'discovery_source');
    gr.addQuery('name', 'cmdb_ci');
    gr.addQuery('value', discoverySource);
    gr.query();
    if (!gr.hasNext()) {
        var grNew = new GlideRecord('sys_choice');
        grNew.initialize();
        grNew.setValue('element', 'discovery_source');
        grNew.setValue('name', 'cmdb_ci');
        grNew.setValue('value', discoverySource);
        grNew.setValue('label', discoverySource);
        if (!grNew.insert()) {
            gs.info('Adding discovery source failed for: ' + discoverySource);
        }
    }
    ```
    ![The JS script in ServiceNow](/assets/images/device42-servicenow-connector/the-script.png)

## Technical Overview

:::caution
The following information is accurate for the Washington DC and Vancouver versions of ServiceNow and may not work completely as expected for Xanadu. The approach laid out below is still relevant, but some details may differ. 
:::

Please contact our [support team](mailto:support@device42.com) for technical assistance. We're working on improving and updating this documentation and you can leave feedback by using the **Page Feedback** button at the top of this page.

## Managing ServiceNow Data Sources

Each ServiceNow data source points to one data source endpoint. From ServiceNow, the URI endpoints look something like this:

**Version 3.0.0+**

- Cloud Connector Configuration:
        ```
        sn/route_doql_csv/{DOQL Name}
        ```

- Direct Connection Configuration (3.0.0+ only)
        ```
        /services/data/v1.0/query/?saved_query_name={DOQL Name}&delimiter=,&header=yes&output_type=csv
        ```

**Version 2.0.1 (or previous)**

- Cloud Connector Configuration
        ```
        sn/route_doql_csv/{VERIFICATION TOKEN}/{DOQL NAME}
        ```

The general request flow is laid out in the sections below.

### Cloud Connector Configuration

1. When a request is made to the CC (Cloud Connector), the CC finds the appropriate account by matching verification tokens. That account’s `appliance_guid` and `am_guid` are then used by the WebSocket server to route the request to the appropriate client.
2. The verification token is then validated on the Device42 instance to ensure that the cloud connector has appropriate access to the utilized resources. If the integration is configured for direct connections only, the request is rejected. Otherwise, the request is processed.
3. The CC then runs the appropriate DOQL query against the proper Device42 instance on behalf of the requesting ServiceNow instance and then returns the query results to ServiceNow for processing by the data source transformation maps.

### Direct Connection Configuration

1. When a request is made directly to the Device42 appliance, Device42 searches for a configured integration with a matching verification token. The request goes through a verification procedure to ensure that the request is valid, and that the integration can make a direct connection to the Device42 appliance. If it fails, the request is rejected. Otherwise, the request is processed.
2. The Device42 instance then runs the appropriate DOQL query, then returns the query results to ServiceNow for processing by the data source transformation maps.

### Custom Device42 DOQL Datasources

Using Device42's stored [Device42 object query language (DOQL)](docs/reports/device42-doql/index.md), you can fully customize the data that your Device42 instance sends to ServiceNow.

In Device42, navigate to **Tools > Integrations > Saved DOQL Queries** to add a new Saved DOQL query and then add a new ServiceNow datasource that points to that query.

In ServiceNow, you can create and modify existing data sources and set their file paths by modifying the string discussed below to reference the name of your new Device42 Saved DOQL query.

**Increase Field Length:**

The file path field for a data source is limited to 100 characters by default. If you are unable to enter your entire file path, you can work around the character limit in two ways: 
- Assign your custom query to a system property and use it in the field with `${name_of_your_system_property}`.
- You may also increase the character limit of this field by navigating to **System Definition > Tables > sys_data_source > File Path** and increasing the max character length of the data source-file-path field on this page and update the table.

**System Property Method:**

| **Connection Type** | **Name**                     | **Type** | **Value**                                                                                          |
|----------------------|------------------------------|----------|----------------------------------------------------------------------------------------------------|
| **Cloud Connection** | `name_of_your_system_property` | String   | `YOUR_DOQL_NAME`                                                                                 |
| **Direct Connection**| `name_of_your_system_property` | String   | `saved_query_name=YOUR_DOQL_NAME&delimiter=,&header=yes&output_type=csv`                          |

Don't include the `?` symbol in your system property as ServiceNow will percent-encode them when retrieving the system property value. Instead include the `?` symbol in the file path field itself.
```
/services/data/v1.0/query/?${name_of_your_system_property}
```

**Version 3.0.0+**

Cloud Connection

- File Path: 
        ```
        sn/route_doql_csv/YOUR_DOQL_NAME
        ```

- Username: You may use any value here, but it is required.

- Password : `${x_192652_device42.instance_key}`

Please note in versions 3+, because we use the Identification and Reconciliation Engine (IRE) all records will appear to be ignored.

**Direct Connection (3.0.0+ Only)**

- File path:
        ```
        /services/data/v1.0/query/?saved_query_name=YOUR_DOQL_NAME&delimiter=,&header=yes&output_type=csv
        ```

- Username: You may use any value here, but it is required
- Password: `${x_192652_device42.instance_key}`

**Version 2.0.1 (or previous)**

- Cloud Connection
        ```
        sn/route_doql_csv/${x_192652_device42.instance_key}/SAVEDDOLQNAME
        ```
 
To add a custom DOQL data source, in ServiceNow, head to **System Import Sets -> Administration -> Data sources**:

[ServiceNow add external datasource DOQL](/assets/images/ServiceNow_add_external_datasource.png)

Then go ahead and add your new data source: 

![](/assets/images/SN_Dashboard_3.png)

:::note
You must create a data source per endpoint to add more than one.
:::

That's all there is to it. ServiceNow should now have access to your new data source. Should you run into any issues, email [support@device42.com](mailto:support@device42.com).

| Name             | The name of your data source, this can be any value you choose                                                                         |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| Import set table | The table which you would like the data to be imported to                                                                              |
| Type             | Default: File                                                                                                                          |
| Format           | Default: CSV                                                                                                                           |
| Server           | Default: `${x_192652_device42.server}`                                                                                                   |
| Port             | Default: 443                                                                                                                           |
| File Path        | **Cloud Connector** `sn/route_doql_csv/YOUR_DOQL_QUERY_NAME` **Direct Connect** `/services/data/v1.0/query/?saved_query_name=YOUR_DOQL_QUERY_NAME` |
| Username         | Username is required to send credentials with request, use any value eg. `servicenow_data_source`                                     |
| Password         | Password will be the verification token of the integration you set up in Device42                                                   |


### The Cloud Connector

The ServiceNow integration uses the Device42 Cloud Connector to facilitate communication between your ServiceNow Cloud instance and your Device42 instance without requiring that Device42 be exposed to the internet.

The Cloud Connector achieves this by using a WebSocket connection initiated by the Device42 appliance.

For a detailed rundown of the Cloud Connector communication and security architecture, see our [Cloud Connector documentation](integration/external-integrations/device42-cloud-connector-overview.md).

There is also a direct connection option available on version 3.0.0+ of the ServiceNow integration plugin for users who would like to keep their integration in their private network.

## Integration Setup and Configuration Overview

Download the Device42-ServiceNow connector from the [ServiceNow Marketplace](https://store.servicenow.com/sn_appstore_store.do#!/store/application/42597533db201300a189622dca961964/4.2.0?sl=sh)

### Install and Configure the Integration

**Version 3.0.0+**

If you have the latest version of the ServiceNow integration plugin, you will be required to follow a few additional steps to configure the plugin and utilize ServiceNow’s Identification and Reconciliation Engine (IRE).

Install needed dependencies on ServiceNow (New York only; Orlando+ has this dependency pre-installed).

1. Navigate to **System Definition > Plugins**.
2. Search for **Configuration Management For Scoped Apps (CMDB)**.
3. Click install and allow the dependency to be installed.

Add Device42 as the Datasource choice list record (New York and Orlando+).

1. Navigate to **System Definition > Scripts – Background**.
2. Ensure that the script is set to run in the **global** scope.
3. Paste the following script into the text box and select **Run Script**.

### Run the Script

```javascript
var discoverySource = 'Device42';
var gr = new GlideRecord('sys_choice');
gr.addQuery('element', 'discovery_source');
gr.addQuery('name', 'cmdb_ci');
gr.addQuery('value', discoverySource);
gr.query();
if (!gr.hasNext()) {
    var grNew = new GlideRecord('sys_choice');
    grNew.initialize();
    grNew.setValue('element', 'discovery_source');
    grNew.setValue('name', 'cmdb_ci');
    grNew.setValue('value', discoverySource);
    grNew.setValue('label', discoverySource);
    if (!grNew.insert()) {
        gs.info('Adding discovery source failed for: ' + discoverySource);
    }
}
```

If you are not on version 3.0.0+ or have completed these steps, continue with the rest of the configuration.

### Device42 Main Appliance Configuration 

1. Ensure that the **External Integration Settings** section of your **Cloud Services Configuration** is correctly set. Head to the Device42 main menu under **Tools > Cloud Services** and enter your Device42 instance’s URL or IP address in the the **D42 URL for SaaS apps** field (for example, `https://myd42url.com`). Fill in your company name and email address. If you aren’t based in the USA, you can change to the optional Europe-based Cloud connector in the same section:

    ![External Integration / Cloud Connector config](/assets/images/WEB-813_1.jpg)

    ![External Integration / Cloud Connector config](/assets/images/WEB-813_2.jpg)

2. Login to Device42, go to **Tools > Integrations > External Integrations**.

3. Create a new External Integration using ServiceNow from the dropdown, and set the URL as your ServiceNow URL.

    ![](/assets/images/WEB-813_3.jpg)

**For version 3.0.0+:**

-    Direct Connection

        If you have the latest version of Device42, you will see an option on the ServiceNow external integration page that displays a **Direct Connect** option. If you would like to configure the integration to use a direct connection, ensure that this option is checked. You cannot go back and change this option (you will have to delete and set up a new configuration), so confirm your settings before creating the integration.

- Cloud Connection

    Ensure that the **Direct Connect** option is unchecked.

**For version 2.0.1:**

-   Cloud Connection

        Create the integration by entering the URL of your ServiceNow instance. The Token credential field is not utilized in the ServiceNow integration so you may use whatever you wish for this field.

Note the **Verification Token**, you'll need to enter this in ServiceNow:

![Select External integration to view](/assets/images/select_d42_external_integration_view.png)

4. Log in to your ServiceNow instance and install the Device42 integration.

    [Download](https://store.servicenow.com/sn_appstore_store.do#!/store/application/42597533db201300a189622dca961964/4.2.0?sl=sh) and install the Device42-ServiceNow connector from the ServiceNow store and install it.

    ![](/assets/images/SN_Store_Download_1.png)

5. Once installed, search for **Device42 Settings** and click on it.

    ![](/assets/images/SN_Store_Download_2.png)

    - On the settings page click at the top of the page to enable editing (See below).

    - Fill in the URL for the Device42 connector (`connect.device42.net`),  and paste in the Verification token you have from Device42 (see first steps above) and enter your D42 URL, then **Save**.

![](/assets/images/SN_Store_Download_3.png)

### Scheduled Sync

Configure data sync schedules as appropriate for your environment. Search ServiceNow for **System Import Sets** to find the schedules page:

![](/assets/images/SN_Store_Download_4.png)

These can be scheduled to run at certain times and should be run in the order highlighted above: Devices, IPs, Services, Software Details (version 2.0.1), and Software Instances. You can click on an individual schedule to edit it or to **Execute Now**.

![](/assets/images/SN_Store_Download_5.png)

The scheduled imports first run the respective data source to collect and store data into the import set tables for a given data source. After this data has been imported into this table a transform script is run to map the data into ServiceNow’s internal tables. Version 3.0.0+ of the ServiceNow integration plugin leverages ServiceNow’s IRE module. For more information on this feature, please visit ServiceNow’s documentation page:

[https://docs.servicenow.com/bundle/utah-servicenow-platform/page/product/configuration-management/concept/c_CMDBIdentifyandReconcile.html](https://docs.servicenow.com/bundle/utah-servicenow-platform/page/product/configuration-management/concept/c_CMDBIdentifyandReconcile.html)

![](/assets/images/SN_Imports_1.png)

To view devices that have been imported or to debug any issues, please visit the import log by navigating to **System Import Sets > Import Log**. This is a very useful page utilized by the IRE and can help you track the majority of common problems

### Required ServiceNow User Roles for Non-Admins

For the ServiceNow integration, there are a few user roles that need to be granted to a user to allow them to edit our Data Sources / Transform Maps. This is not required for the application to run "out of the box," but if customers want to make changes, they'll need to add the following user roles to authorized users.

![](/assets/images/SN_User_Roles_1.png) _ServiceNow User Management Screen_

The specific groups required (for users who _are not_ already ServiceNow admins) for full integration functionality and the ability to edit the CI transform maps and data sources are:

- `import_set_loader`
- `import_transformer`
- `import_scheduler`
- `import_admin`
- `x_192652_device42.Device42_Admin`

A quick overview of the Device42-ServiceNow connector, screenshots, and links to the ServiceNow store can be found on our [ServiceNow integration page](https://www.device42.com/integrations/service-now/)

If you have any questions that weren't covered here, feel free to reach out to [support@device42.com](mailto:support@device42.com).

### Increasing the Field Size for Imported Device42 Data

If data coming in from Device42 is being truncated, follow the steps below in ServiceNow to increase the column length limit. These steps are to be done at the discretion of the user. Please be aware that making changes to the `sys_properties` table will affect all applications and cause the field lengths for all import sets to automatically increase in size if the data being imported is greater than the default character limit.

To have the import set table column size automatically based on the size of the data, follow these steps in ServiceNow:

- Search for "tables".
- Click **System Definition > Tables**.
- Find the `sys_properties table` and click it.
- Scroll down the page and find **Related Links**.
- Click **Show List**.
- Add a new system property with the following information:
    - **Name**: `com.glide.loader.verify_target_field_size`
    - **Application**: `Global`
    - **Type**: `true | false`
    - **Value**: `true`
    - **Read Roles**: appropriate roles (e.g. `admin`)
    - **Write Roles**: appropriate roles (e.g. `admin`)
- Click the **Submit** button.
- Run the **D42 Device Import Schedule** scheduled job to sync device data from Device42 to ServiceNow.

The data should now appear in ServiceNow without truncation.

## Updating the Integration

If you updated the ServiceNow app from version 4.0.0 or older, a script should be run to delete old software instance records that were created by the app and are no longer needed. These `cmdb_software_instance` records that will be deleted will have a name that has the format `software_name_instance`. To delete these records, follow the steps below.

- Go to **System Definition > Fix Scripts**.
    
	![](/assets/images/Web-780-1_fix-scripts.png)

- Search for the fix script with the name `D42_Remove_Software_Instances`.

	![](/assets/images/Web-780-2_remove-software-instances.png)

- Click **`D42_Remove_Software_Instances`**.

	![](/assets/images/Web-780_paste-script-3.png)

- Copy all lines from the script field except the first line which has `/*` and the last line which has `*/`.

	![](/assets/images/Web-780-3_.copy-script-1.png)

- Go to **System Definition > Scripts – Background**.

	![](/assets/images/Web-780_paste-script-1.png)

- Paste the script that you copied into the run script field.

	![](/assets/images/Web-780_paste-script-2.png)

- Select **global** for **in scope**.
    
- Click the **Run Script** button.
    
	![](/assets/images/Web-780_running-script-last-pic.png)