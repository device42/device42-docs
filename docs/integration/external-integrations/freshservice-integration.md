---
title: "Freshservice Integration"
sidebar_position: 12
---

# Device42 Freshservice Integration

![](/assets/images/freshservice-logo-smaller-40.png)

## Requirements

- Device42 version 16.12.00+
- Freshservice agent account with access to the Freshservice Marketplace
- Freshservice API token

## Note on Freshworks API

The Freshservice API, by default, is limited to 1000 API calls per hour. To process a single asset, multiple API calls are made. While we do our best to work with the default limit, if for any reason sync times are inconvenient, please contact Freshworks to increase your API limit. They will increase this limit but on a need case basis.

To integrate Freshservice with Device42, setting up the Device42 Cloud Connector is a prerequisite. The Cloud Connector acts as a bridge between Freshservice and Device42.

## Get Freshservice API Token

To setup the Freshservice integration with Device42, you need a Freshservice API. This API token is used to import devices and software items into Freshservice and also create relational mappings between them.

1. To retrieve the Freshservice API token login to your Freshservice dashboard with an agent profile.
2. Select the logged in user profile in the top right corner of the page and navigate to profile settings
3. Your API token will be displayed on the right side of the page. Copy this code to use later to setup your integration in Device42.

![](/assets/images/FS_Console_1-700x255.png)

![](/assets/images/FS_Console_2-700x315.png)

## Add the Freshservice Token to Device42 Secrets

![](/assets/images/D42_Passwords_1-700x337.png)

1. Select _Secrets_ from the Device42 menu bar.
2. Click _Add Password_ on the top right of the Select Password to view page.
3. Enter a name for the API token in the _Username_ field. This can be any value, but remember you'll use it to create the integration later.
4. Enter the Freshservice API token in the _Password_ field. Ensure that there are no white spaces or new line characters before and after this API token.
5. Finally, save the API token by clicking _Save_ at the bottom right of corner of the page.

![](/assets/images/D42_Add_Password_2-700x349.png)

## Setup Integration in Device42

![](/assets/images/D42_Select_Ext_Integration_1-700x339.png)

1. Select _Tools > Integrations > External Integrations_ from the menu bar.
2. Click _Add External Integration_ at the top right of the page.
3. Enter the required fields on the page starting with your Freshservice _URL_ (e.g., [https://demo-instance.freshservice.com/](https://device42-demo.freshservice.com/support/home)).
4. From the _Type_ drop-down field, select the _Freshservice_ option.
5. For the _Token_ field, select the magnifying glass and the secret containing your Freshservice API token.
6. After you enter all required fields,  copy the _Verification Token_ displayed on the page. You'll use this later to install the Device42 Freshservice App.
7. Click _Save_ at the bottom right corner of the page.

![](/assets/images/D42_Add_Ext_Integration_2-700x339.png)

## Installing the Device42 Integration App on Freshservice

To use the Device42 integration application on your Freshservice instance, you first need to install it.

![](/assets/images/FS_Dashboard_1-700x289.png)

:::note
Please ensure that you have successfully configured the Cloud Connector before proceeding with the File System integration.
:::

1. Navigate to the Settings page from the Freshservice dashboard.
2. From here, navigate to the _Apps_ section from the _Helpdesk Productivity_ section. If you don't see this option on your Freshservice instance, ensure you are logged in using an administrative account.
3. On the Apps page, click the _Get More Apps_ button.

![](/assets/images/FS_Dashboard_Apps_2-700x364.png)

- Search for **Device42**. You will see an application similar to the one listed. If there is more than one application listed for Device42, ensure you select the one with the name **Device42 For Freshservice** and that it gives you the option to _Install_ the application. If the application install button says _Visit site to install_**_,_** then close the window and select the other Device42 application.

![](/assets/images/FS_Dashboard_Apps_3-700x268.png)

1. After selecting the _Install_ button, you will be taken to a settings page where you will be asked to enter your _Freshservice Domain Name_ (this is part of your Freshservice URL between “https://” and “.freshservice.com”), a _Cloud Connector_ as well as a _Verification Token_ in order to proceed with the installation.
2. Enter the required fields. The Cloud Connector will be either **connect.device42.io** or **connect-eu.device42.io**. If you are unsure of which of the two to choose, navigate to _Tools > Settings > Global Settings_ and scroll to the bottom section of the page that says _External Integration Settings_. The Cloud Connector listed will determine which of the two Cloud Connectors you choose. If this is not the case, please contact [Device42 Support](mailto:support@device42.com), and we will be happy to help you set up your Device42 to work with integrations.
3. Once the required fields are entered, click the _Install_ button on the bottom right of the window.

![](/assets/images/WEB-755_FS-config-install.png)

### Freshservice Default Approver Section Added

With new versions of Freshservice, a default approver is a new required field and should now be selected and set in the new section of D42 Freshservice Application.

![Freshservice-Default-Approver](/assets/images/Freshservice-Default-Approver-250x145.png)

## Setting up Scheduled Syncs and Running Manual Syncs

Setting up and running syncs in Freshservice with the Device42 application is a very effective way of moving your discovered data from Device42 to other platforms such as Freshservice. Our integration with Freshservice is meant to make this process as easy as possible by integrating directly with Freshservice and eliminating the need to set up environments and run scripts externally.

![](/assets/images/FS_Sync_1-700x350.png)

### Scheduled Sync

Setting up scheduled sync is quick and easy with the Device42 application.

![](/assets/images/WEB-755_FS-scheduled-sync.png)

1. Navigate to the Device42 application settings page by navigating to _Settings > Apps_ from the Freshservice Dashboard.
2. Under your installed applications, you will see the Device42 application. Select the _settings icon_ for the application.
3. You will now see an additional configurable option on the application settings page. To use the scheduled sync option, ensure that you select the checkbox and choose your desired time to run scheduled syncs. The scheduled sync will run daily at your specified time and is used to bring in new CIs and update existing ones within Freshservice.
4. Select _Save_ to apply these scheduled sync settings.

![](/assets/images/WEB-755_FS-scheduled-sync-2.png)

### Manual Sync

You can run syncs manually if you do not want to create a scheduled sync job.

1. Navigate to the Device42 application settings page by navigating to _Settings > Apps_ from the Freshservice Dashboard.
2. Under your installed applications, you will see the Device42 application. Select the _settings icon_ for the application.
3. Select the _Manual Sync_ button displayed on the page. This will expand and show a panel that allows you to run two different types of syncs and stop the currently running sync.

- _Full Sync_ - Sync all items from D42 to Freshservice regardless of when that item was added or updated in D42.
- _Partial Sync_ - Sync items that have changed in D42 (either added or updated) since the time of the last successful sync.

![](/assets/images/WEB-755_FS-manual-snyc.png)

### View Sync History

Viewing synchronization history is useful for debugging issues and seeing the number of devices brought into Freshservice.

1. Navigate to the Device42 application settings page by navigating to _Settings > Apps_ from the Freshservice Dashboard.
2. Under your installed applications, you will see the Device42 application. Select the _settings icon_ for the application.
3. From the displayed options, select _Sync History_. From here, you can view previous synchronizations and currently running ones. You can select a row from the sync history table to view logs (if any) associated with it.

**Note**: The displayed text is limited to ~4000 characters.

![](/assets/images/WEB-755_FS-view-sync-history.png)

To download full logs, use the _Download Full Log_ button located at the lower-left corner of the text area.

![](/assets/images/WEB-755_FS-view-sync-history-2.png)

### Full Sync Forced Upon Certain Upgrades

A full sync will be forced upon certain upgrades to get all the new data from D42; this will appear as a full upgrade instead of incremental in the synchronization history type when there’s a scheduled synchronization, or you run a Partial Sync. This will occur once until a successful sync is performed.

## Data Types Transferred from D42 to Freshservice

| D42 Data Type                                                                                                            | Freshservice Type (General)  | Type (Specific)                    |
|--------------------------------------------------------------------------------------------------------------------------|------------------------------|------------------------------------|
| Device with physical type and Laptop subtype                                                                             | Assets/Inventory             | Laptop                             |
| Device with physical type and WorkStation subtype                                                                        | Assets/Inventory             | Desktop                            |
| Device with physical type and Network Printer subtype                                                                    | Assets/Inventory             | Printer                            |
| Device with physical type and Router subtype (this is not a built-in subtype and would need to be created by the user)   | Assets/Inventory             | Router                             |
| Device with physical type and Firewall subtype (this is not a built-in subtype and would need to be created by the user) | Assets/Inventory             | Firewall                           |
| Device with OS of F5 or NetScaler                                                                                        | Assets/Inventory             | Load Balancer                      |
| Device with Network Device flag set                                                                                      | Assets/Inventory             | Switch                             |
| Device with physical type and Windows Server OS                                                                          | Assets/Inventory             | Windows Server                     |
| Device with physical type and Unix or Linux OS                                                                           | Assets/Inventory             | Unix Server                        |
| Device with physical type and AIX OS                                                                                     | Assets/Inventory             | AIX Server                         |
| Device with physical type and SunOS or Solaris OS                                                                        | Assets/Inventory             | Solaris Server                     |
| Device with Virtual/Container Host flag set and ESXi OS                                                                  | Assets/Inventory             | VMware VCenter Host                |
| Device with Virtual/Container Host flag set                                                                              | Assets/Inventory             | Host                               |
| Device with virtual type and VMWare subtype                                                                              | Assets/Inventory             | VMware VCenter VM                  |
| Device with virtual type and Amazon EC2 Instance subtype                                                                 | Assets/Inventory             | AWS VM                             |
| Device with virtual type and Azure Virtual Machine subtype                                                               | Assets/Inventory             | Azure VM                           |
| Device with physical type and does not match one of the more specific asset types above                                  | Assets/Inventory             | Server                             |
| Device with virtual type and does not match one of the more specific asset types above                                   | Assets/Inventory             | Virtual Machine                    |
| Device that doesnt match one of the more specific asset types above                                                      | Assets/Inventory             | Computer                           |
| Business Applications                                                                                                    | Assets/Inventory             | Business Service                   |
| Software                                                                                                                 | Assets/Software              | Desktop                            |
| PO Line Item/Contract Type: Warranty                                                                                     | Assets/Contracts             | Warranty                           |
| PO Line Item/Contract Type: BASE (IBM & Lenovo vendors)                                                                  | Assets/Contracts             | Warranty                           |
| PO Line Item/Contract Type: UPGRADE (IBM & Lenovo vendors)                                                               | Assets/Contracts             | Warranty                           |
| PO Line Item/Contract Type: Lease                                                                                        | Assets/Contracts             | Lease                              |
| PO Line Item/Contract Type: Service and all others                                                                       | Assets/Contracts             | Maintenance                        |
| Software Licensing (only for managed software and can come from software or the PO line item)                            | Assets/Contracts             | Software License                   |
| Business Applications Device to Device relationship                                                                      | Relationships between assets | Sends Data To / Receives Data From |
| Business Application to Device Relationships                                                                             | Relationships between assets | Hosted On / Hosts                  |
| Affinity Group Device to Device Relationships                                                                            | Relationships between assets | Depends On / Used By               |
| VM to Host Relationships                                                                                                 | Relationships between assets | Virtualized by / Virtualizes       |



### New Contract Type “Warranty” Added

Now warranties from D42 will sync correctly with the type “Warranty” appearing under the contract type, “Service,” and other types will still fall under the “Maintenance” category.

![](/assets/images/New-Contract-Type-1-250x72.png)

![](/assets/images/New-Contract-Type-2-250x79.png)

### Software Licensing Now Syncs with Contracts

Users can now sync software licensing info in D42 to contracts in Freshservice.

If the licensing information is available on both devices – Purchase line item (type = software licensing) and Software Component page, then the Purchase line item is considered during the sync.

![Software-Licensing-Sync](/assets/images/Software-Licensing-Sync-250x110.png)

### Business Apps Can Now Be Synced

Users can now sync business apps from D42 to business services in Freshservice.  A business service is an asset type in Freshservice. Business app relationships are also available.

![business-apps-sync](/assets/images/business-apps-sync-250x74.png)

![](/assets/images/business-apps-sync-2-250x110.png)

![](/assets/images/business-apps-sync-3-250x261.png)

### Sync Purchase Line Items to Contracts

Users can now sync device purchase line items in D42 to contracts in Freshservice.

If the purchase line item in D42 is of type ‘Lease,’ it will end up as a “Lease” contract type in Freshservice as well. Everything other than ‘Lease’ will go into the ‘Maintenance’ Type, e.g., “Service”

![](/assets/images/Sync-Purchase-Line-Items-250x126.png)

## Data Mapping UI Has Been Updated

New mapping types are now visible on the Data Mapping Chart screen, and the user should start seeing new types of information, such as Warranties, Licenses, Business Apps, etc., wherein before, the user would only see Devices & Software mapping types.

![](/assets/images/Data-Mapping-UI-250x108.png)

## View Current Data Mappings

1. Navigate to the Device42 application settings page by navigating to _Settings > Apps_ from the Freshservice Dashboard.
2. Under your installed applications, you will see the Device42 application. Select the _settings icon_ for the application.
3. From the displayed options, select the _Data Mapping_ button. From here, you can view what fields from Device42 are mapped to Freshservice for the device and software items.

![](/assets/images/WEB-755_FS-current-data-mappings.png)

![](/assets/images/WEB-755_FS-current-data-mappings-2.png)

## View Mapped and Unmapped Data for Specific Assets

We understand that there are some fields within Device42 that may not easily translate to a field within Freshservice. We’ve added the ability to view these fields to eliminate the need to navigate between applications so that you can view all required fields from one location. To view mapped and unmapped data for a device within Freshservice, follow the steps below.

![](/assets/images/FS_Data_Map_2-700x316.png)

1. Navigate to _Assets > Inventory_ from the Freshservice Dashboard.
2. On the inventory screen, select the asset imported from Device42 that you want to view mapped and unmapped data.
3. On the right panel of the page, you will see the Device42 application. Click this to expand the application.
4. Once this window is expanded, click the _View Device42 Data_ button

![](/assets/images/FS_Data_Map_3.png)

- A window will open, and mapped and unmapped data for the current device will be displayed.

![](/assets/images/FS_Data_Map_4-700x318.png)

- If you close this and select the _View Asset in Device42_, you will be redirected to the asset in Device42.

![](/assets/images/D42_View_Virtual_Device_1-700x254.png)

## Known Issues

If devices in Device42 have duplicate serial numbers, only one of these devices will be successfully synced to Freshservice. The rest will fail to be synced, and the overall sync status will be set to fail. This is due to Freshservice not allowing assets with duplicate serial numbers. In the sync log of the Device42 Freshservice app, you will see an error like the following:
```
Error (HTTP POST (api/v2/assets/) Error 400: {"description":"Validation failed","errors":[{"field":"serial_number","message":" must be unique","code":"invalid_value"}]}
```
