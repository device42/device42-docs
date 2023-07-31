---
title: "PowerBI Integration"
sidebar_position: 23
---

## Microsoft PowerBI Integration - Device42 ODBC driver

Device42 integrates with Microsoft PowerBI using the [Device42 ODBC driver package \[click to download\]](https://www.device42.com/miscellaneous-tools/), currently available for Microsoft Windows. With the Microsoft PowerBI / ODBC integration, users to connect to Device42 and pull data via an ODBC \[Open Database Connectivity\] data source presented by the driver.

The current ODBC driver installs on Microsoft Windows, and we provide instructions to leverage the ODBC connectivity through PowerBI below. _If you're looking to use the Device42 ODBC driver with an ODBC-compatible consumer other than PowerBI, you should be able to do that as well. See the Device42 [ODBC driver documentation page here](integration/external-integrations/odbc-driver-integration.md) to obtain the driver and for more information._

## Obtaining the Device42 PowerBI ODBC Driver

Download the Device42 ODBC Driver at [https://www.device42.com/integrations/powerbi/](https://www.device42.com/integrations/powerbi/).

## Connecting PowerBI to the Device42 ODBC datasource

To connect PowerBI to the Device42 ODBC datasource, follow the instructions below. _Note that this section assumes you have completed the D42 ODBC driver installation and otherwise meet all of the requirements listed in the "ODBC System Requirements" section on this page._

1. Begin by launching the PowerBI software, and clicking the "Get Data" icon in the upper left hand corner: 

![PowerBI Get Data button](/assets/images/powerBI-get-data.png)

2. In the "Search" field, enter `ODBC` to narrow down the listed data source options (1). Highlight ODBC (2), and click "Connect"(3): 

![PowerBI search for and choose ODBC](/assets/images/PowerBI_search_ODBC.png)

3. To connect using a DSN, see the _“Creating a DSN” section below_ to learn how to create a DSN which will show in this list; otherwise, continue by simply supplying a connection string manually by **expanding the "Advanced Options"** section by clicking on it: 

![Expand advanced options ](/assets/images/expand_advanced_options.png)

4. In the connection string field, enter the string as follows: `DRIVER={Device42 ODBC Driver};SERVER=YOUR-D42-SERVER.COM;`. Leave the SQL Statement (optional) section blank, and click OK: 

![Advanced connection options](/assets/images/powerBI_advanced_options.png)

5. Enter the **User Name** and **Password** that were provided to you, and the click the **Connect** button. Setup is complete!

## Creating a DSN

1. To create / pre-define a DSN (Data Source Name), open the Windows ODBC Data Source Administrator via the Windows Start Menu. Windows 10: click **_Start -> Windows Administrative Tools -> ODBC Data Sources (64-bit)_**; \[note there is also a 32-bit version, which you can ignore\]. Windows 7: Click **_Start -> All Programs -> Administrative Tools -> Data Sources (ODBC)_**: 

![ODBC Datasource Admin](/assets/images/ODBC_Datasource_Administrator.png)

2. Click the **Add** button to begin adding a new datasource. In the "Create New Data Source" window that is displayed, choose the "Device42 ODBC Driver" and click "Finish": 

![Add Device42 ODBC Driver DSN](/assets/images/add_device42_ODBC_driver_source.png)

3. On the "Device42 ODBC Driver DSN Configuration" screen that is displayed, enter values as explained below: 

![Device42 DSN configuration](/assets/images/DSN_Configuration_Screen.png)

- **DSN Name**: The name to identify this DSN.
- **Server Host**: The host name of the Device42 server.
- **Port**: The port number that the Device42 server is servicing requests on. The default value is the standard SSL port of 443. If you leave this field blank, it will also default to 443.
- **Username**: The username you use to login to Device42.
- **Password**: The password you use to login to Device42.

4. Click the “Test” button to try connecting using the information you specified. You will receive a message if the connection could or could not be made. If the connection could not be made, verify that the information you entered is correct.
5. Click the “Save” button to save the changes you made to the DSN. Your changes will only be saved if the information entered results in a successful connection. If the connection could not be made, verify that the information you entered is correct.

Setup of the Device42 ODBC DSN is complete. You should now be able to utilize the pre-configured DSN throughout PowerBI.

_Should you have any questions about the Device42 ODBC driver that aren't answered here, please open a ticket at [https://support.device42.com](https://support.device42.com) or email support@device42.com._
