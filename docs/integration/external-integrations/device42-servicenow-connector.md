---
title: "ServiceNow Integration"
sidebar_position: 28
---

The Device42 ServiceNow Integration connects Device42 to ServiceNow. The integration enables users to seamlessly add Device42’s IT infrastructure management capabilities to their ServiceNow solution for an enhanced IT experience. 

![](/assets/images/WEB-377_servicenow-logo.png)

# Device42-ServiceNow Integration

Using the Device42-ServiceNow integration connector, ServiceNow users can synchronize Device42’s enhanced asset management and tracking capabilities to their ServiceNow IP-enabled configuration items (CI) data maintained inside ServiceNow’s Configuration Management Database (CMDB). This synchronization can be manually refreshed at any time by the user and also scheduled for an automatic refresh at user-defined intervals.

![](/assets/images/SN_Dashboard_1.png)

## ServiceNow Integration -- Technical Overview

## Managing ServiceNow Data Sources

Each ServiceNow data source points to one data source endpoint. From ServiceNow, the URI endpoints look something like this:

**Version 3.0.0+**

_Cloud Connector Configuration_

sn/route\_doql\_csv/&#123;DOQL Name}

_Direct Connection Configuration (3.0.0+ only)_

/services/data/v1.0/query/?saved\_query\_name=&#123;DOQL Name}&delimiter=,&header=yes&output\_type=csv

**Version 2.0.1 (or previous)**

_Cloud Connector Configuration_

sn/route\_doql\_csv/&#123;VERIFICATION TOKEN}/&#123;DOQL NAME}

**The general request flow is as follows:**

_Cloud Connector Configuration_

1. When a request is made to the CC (Cloud Connector), the CC finds the appropriate account _(by matching verification tokens)_. That account’s appliance\_guid and am\_guid are then utilized by the WebSocket server to route the request to the appropriate client.
2. The verification token is then validated on the Device42 instance to ensure that the cloud connector has appropriate access to the utilized resources. If the integration is configured for direct connections only, the request is rejected. Otherwise, the request is processed.
3. The CC then runs the appropriate DOQL query against the proper Device42 instance on behalf of the requesting ServiceNow instance and then returns the query results to ServiceNow for processing by the data source transformation maps.

_Direct Connection Configuration_

1. When a request is made directly to the Device42 appliance, Device42 searches for a configured integration with a matching verification token. The request goes through a verification procedure to ensure that the request is valid, and that the integration can make direct connection to the Device42 appliance. If it fails, the request is rejected. Otherwise, the request is processed.
2. The Device42 instance then runs the appropriate DOQL query, then returns the query results to ServiceNow for processing by the data source transformation maps.

### Custom Device42 DOQL Datasources

Using Device42's stored DOQL (Device42 object query language), ServiceNow integration users are able to customize exactly the data that their Device42 instance sends to ServiceNow, leveraging the full power of DOQL in any way they wish. Simply add a new Saved DOQL query in Device42, and then add a new ServiceNow datasource that points to that query. Saved DOQL queries are managed via the D42 Main Menu -> _Tools -> Integrations -> Saved DOQL Queries_.

In ServiceNow, you can create and/or modify existing data sources, setting the ‘file’ path as such, modifying the string below to reference the name of your new D42 Saved DOQL query:

**Note:**

The file path field for a data source is limited to 100 characters by default; if for any reason you are unable to enter the entirety of your file path, you can work around this by assigning your custom query to a system property and utilizing it in the field using _$&#123;name\_of\_your\_system\_property}_, or simply increasing the character limit of the data source file path field.

**System Property Method:**

_Cloud Connection:_

**Name:** name\_of\_your\_system\_property

**Type:** String

**Value:** _YOUR\_DOQL\_NAME_

_Direct Connection:_

**Name:** name\_of\_your\_system\_property

**Type:** String

**Value:** saved\_query\_name=_YOUR\_DOQL\_NAME_&delimiter=,&header=yes&output\_type=csv

Do not include \`?\` symbols in your system property as ServiceNow will percent encode them when retrieving the system property value. Instead include them in the file path field itself.

/services/data/v1.0/query/?$&#123;name\_of\_your\_system\_property}

**Increase Field Length:**

You may also increase the character limit of this field by navigating to System Definition > Tables > sys\_data\_source > File Path and increasing the max character length on this page and update the table.

**Version 3.0.0+**

_Cloud Connection_

File Path: sn/route\_doql\_csv/YOUR\_DOQL\_NAME

Username: You may use any value here, but it is required

Password: $&#123;x\_192652\_device42.instance\_key}

Please note: in versions 3+, because we use the Identification and REconsiliation Engine (IRE) all records will appear to be ignored.

**_Direct Connection (3.0.0+ Only)_**

File Path: **/**services/data/v1.0/query/?saved\_query\_name=YOUR\_DOQL\_NAME&delimiter=,&header=yes&output\_type=csv

Username: You may use any value here, but it is required

Password: $&#123;x\_192652\_device42.instance\_key}

**Version 2.0.1 (or previous)**

_Cloud Connection_

sn/route\_doql\_csv/$&#123;x\_192652\_device42.instance\_key}/SAVEDDOLQNAME

 

To add a custom DOQL data-source, in Servicenow, head to _**System Import Sets -> Administration -> Data sources**_: ![ServiceNow add external datasource DOQL](/assets/images/ServiceNow_add_external_datasource.png)

Then go ahead and add your new data source: ![](/assets/images/SN_Dashboard_3.png)

_Note that you must create a data-source per endpoint to add more than one!_ That's all there is to it! ServiceNow should now have access to your new data source. Should you run into any issues, email [support@device42.com](mailto:support@device42.com).

| Name             | The name of your data source, this can be any value you choose                                                                         |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| Import set table | The table which you would like the data to be imported to                                                                              |
| Type             | Default: File                                                                                                                          |
| Format           | Default: CSV                                                                                                                           |
| Server           | Default: $&#123;x\_192652\_device42.server}                                                                                                   |
| Port             | Default: 443                                                                                                                           |
| File Path        | Cloud Connector sn/route\_doql\_csv/YOUR\_DOQL\_QUERY\_NAME Direct Connect /services/data/v1.0/query/?saved\_query\_name=YOUR\_DOQL\_QUERY\_NAME |
| Username         | Username is required to send credentials with request, use any value eg. “servicenow\_data\_source”                                     |
| Password         | Password will be the verification token of the integration you setup within Device42                                                   |


 

### The Cloud Connector

The ServiceNow integration uses the Device42 Cloud Connector to facilitate communication between a user’s ServiceNow Cloud instance and Device42 instance without requiring that Device42 be exposed to the internet.

This is accomplished by re-use of a WebSocket connection initiated by the Device42 appliance to the Cloud Connector.

For a detailed rundown of the Cloud Connector communication & security architecture, see our [Cloud Connector documentation](integration/external-integrations/device42-cloud-connector-overview.md) here.

There is also a direct connection option available on version 3.0.0+ of the ServiceNow integration plugin for users who would like to keep their integration in their private network.

## Integration Setup / Configuration Overview

### Downloading the ServiceNow Integration

Download the Device42 - ServiceNow connector from the [ServiceNow Marketplace](https://store.servicenow.com/sn_appstore_store.do#!/store/application/42597533db201300a189622dca961964/4.2.0?sl=sh)

### Installing and Configuring the Integration

**Version 3.0.0+**

If you have the latest version of the ServiceNow integration plugin, you will be required to follow a few additional steps to configure the plugin and utilize ServiceNow’s Identification and Reconciliation Engine (IRE).

Install needed dependencies on ServiceNow (New York only; Orlando+ has this dependency pre-installed).

1. Navigate to System Definition > Plugins.
2. Search for _Configuration Management For Scoped Apps (CMDB)_.
3. Click install and allow the dependency to be installed.

Add Device42 as the Datasource choice list record (New York and Orlando+).

1. Navigate to System Definition > Scripts – Background.
2. Ensure that the script is set to run in the _global_ scope.
3. Paste the following script into the run script text box and select run script'


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

If you are not on version 3.0.0+, or have completed these steps, continue with the rest of the configuration.

1) Begin by ensuring that the _External Integration Settings_ section of your Cloud Services Configuration is correctly set. Head to the Device42 main menu, _Tools -> Cloud Services_ and enter your Device42 instance’s URL or IP address in the the _D42 URL for SaaS apps_ field (e.g. `https://myd42url.com`) along with your company name and email address. If you aren’t based in the USA, you can change to the optional Europe-based Cloud connector in the same section:

![External Integration / Cloud Connector config](/assets/images/WEB-813_1.jpg)

![External Integration / Cloud Connector config](/assets/images/WEB-813_2.jpg)

2) Login to Device42, go to _Tools > Integrations > External Integrations._

3) Create a new External Integration using ServiceNow from the drop down, and set the URL as your ServiceNow URL.

![](/assets/images/WEB-813_3.jpg)

**For version 3.0.0+:**

_Direct Connection_

If you have the latest version of Device42 you will see an option on the ServiceNow external integration page that displays a _Direct Connect_ option. If you would like to configure the integration to use direct connection, ensure that this option is checked. You cannot go back and change this option (you will have to delete and setup a new configuration), so confirm your settings before creating the integration.

_Cloud Connection_

Ensure that the _Direct Connect_ option is unchecked.

**For version 2.0.1:**

_Cloud Connection_

Create the integration by following entering the URL of your ServiceNow instance. The Token credential field is not utilized in the ServiceNow integration so you may use whatever you wish for this field.

Note the Verification Token, you'll need to enter this in ServiceNow:

![Select External integration to view](/assets/images/select_d42_external_integration_view.png)

4) Login to your ServiceNow instance and install the Device42 integration.

[Download](https://store.servicenow.com/sn_appstore_store.do#!/store/application/42597533db201300a189622dca961964/1.0.6?referer=sn_appstore_store.do%23!%2Fstore%2Fsearch%3Fapptype%3Dintegrations%26orderby%3Dnewest) and install the Device42-ServiceNow connector from the ServiceNow store and install it.

![](/assets/images/SN_Store_Download_1.png)

5) Once installed, search for _Device42 Settings_ and click on it.

![](/assets/images/SN_Store_Download_2.png)

a) On the settings page click at the top of the page to enable editing (See below)

b) Fill in the URL for the Device42 connector (_connect.device42.net_),  and paste in the Verification token you have from D42 (see first steps above) and enter your D42 URL, then Save.

![](/assets/images/SN_Store_Download_3.png)

6) Configure data sync schedules as appropriate for your environment. Search ServiceNow for _System Import Sets_ to find the schedules page:

![](/assets/images/SN_Store_Download_4.png)

These can be scheduled to run at certain times – they should be run in the order highlighted above – Devices, IP’s, Services, Software Details (version 2.0.1) and Software Instances. You can click on an individual schedule to edit it or to _Execute Now_.

![](/assets/images/SN_Store_Download_5.png)

The scheduled imports first run the respective data source to collect and store data into the import set tables for a given data source. After this data has been imported into this table a transform script is run to map the data into ServiceNow’s internal tables. Version 3.0.0+ of the ServiceNow integration plugin leverages ServiceNow’s IRE module. For more information on this feature, please visit ServiceNow’s documentation page:

[https://docs.servicenow.com/bundle/utah-servicenow-platform/page/product/configuration-management/concept/c_CMDBIdentifyandReconcile.html](https://docs.servicenow.com/bundle/utah-servicenow-platform/page/product/configuration-management/concept/c_CMDBIdentifyandReconcile.html)

![](/assets/images/SN_Imports_1.png)

To view devices that have been imported or to debug any issues, please visit the import log by navigating to _System Import Sets > Import Log_. This is a very useful page utilized by the IRE and can help you track the majority of common problems

### Required ServiceNow User Roles for Non-Admins

For the ServiceNow integration, there are a few user roles that need to be granted to a user to allow them to edit our Data Sources / Transform Maps. This is not required for the application to run "out of the box," but if customers want to make changes, they'll need to add the following user roles to authorized users.

![](/assets/images/SN_User_Roles_1.png) _ServiceNow User Management Screen_

The specific groups required (for users who _are not_ already ServiceNow admins) for full integration functionality and the ability to edit the CI transform maps and data sources are:

- import\_set\_loader
- import\_transformer
- import\_scheduler
- import\_admin
- x\_192652\_device42.Device42\_Admin

A quick overview of the Device42-ServiceNow connector, screenshots, and links to the ServiceNow store can be found on our [ServiceNow integration page](https://www.device42.com/integrations/service-now/)

If you have any questions that weren't covered here, feel free to reach out to [support@device42.com](mailto:support@device42.com).

### Increasing Field Size for Imported Device42 Data

If data coming in from Device42 is being truncated, follow the steps below in ServiceNow to increase the column length limit. These steps are to be done at the discretion of the user. Please be aware that making changes to the _sys\_properties_ table will affect all applications and cause the field lengths for all import sets to automatically increase in size if data being imported is greater than the default character limit.

To have the import set table column size automatically based on the size of the data, follow these steps in ServiceNow:

- Search for _tables_.
- Click _System Definition > Tables_.
- Find the _sys\_properties_ table and click it.
- Scroll down the page and find _Related Links_.
- Click _Show List_.
- Add a new system property with the following information:
    - Name = **com.glide.loader.verify\_target\_field\_size**
    - Application = **Global**
    - Type = **true | false**
    - Value = **true**
    - Read Roles = appropriate roles (e.g., **admin**)
    - Write Roles = appropriate roles (e.g., **admin**)
- Click the _Submit_ button.
- Run the _D42 Device Import Schedule_ scheduled job to sync device data from Device42 to ServiceNow.

The data should now appear in ServiceNow without truncation.

## Updating the Integration

If you updated the ServiceNow app from version 4.0.0 or older, a script should be run to delete old software instance records that were created by the app and are no longer needed. These cmdb\_software\_instance records that will be deleted will have a name that has the format \[software\_name\]\_instance. To delete these records, follow the steps below.

- Go to System Definition > Fix Scripts.
    

![](/assets/images/Web-780-1_fix-scripts.png)

- Search for the fix script with the name _D42\_Remove\_Software\_Instances_.

![](/assets/images/Web-780-2_remove-software-instances.png)

- Click _D42\_Remove\_Software\_Instances_.

![](/assets/images/Web-780_paste-script-3.png)

- Copy all lines from the script field except the first line which has /\* and the last line which has \*/.

![](/assets/images/Web-780-3_.copy-script-1.png)

- Go to System Definition > Scripts – Background.

![](/assets/images/Web-780_paste-script-1.png)

- Paste the script that you copied into the run script field.

![](/assets/images/Web-780_paste-script-2.png)

- Select _global_ for _in scope_.
    
- Click the _Run script_ button.
    

![](/assets/images/Web-780_running-script-last-pic.png)
