---
title: "Tutorial: Loading Data Using Spreadsheets"
sidebar_position: 1
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'
import apiImage from '/assets/images/tutorial-loading-data-using-spreadsheets/buildings-api-parameters.png'

In this tutorial, we will load data to the Main Appliance using the API import feature. You can load any type of data that can be loaded via the Device42 API, which means it is possible to import just about all of your data using the import feature. 

To get started, navigate to **Tools > Imports/Exports (xls)**.

<ThemedImage
  alt="Imports/Exports (xls) menu item"
  sources={{
    light: useBaseUrl('/assets/images/tutorial-loading-data-using-spreadsheets/imports-xls-menu-location-light.png'),
    dark: useBaseUrl('/assets/images/tutorial-loading-data-using-spreadsheets/imports-xls-menu-location-dark.png'),
  }}
  style={{ width: '80%' }} 
/>

## Workflow Overview

The easiest way to create an API Import spreadsheet is to look through the list of import types (3) on the page to find the one you need. Click the **Download Sample Excel File** link (4) and add your data to it. 

To learn what the fields in the spreadsheet mean and which parameters are required, click the **View Documentation** link (5) to go to the API documentation.

Click the **Browse** button (1) to select a prepared Excel file on your machine and click the green **Import** button (2) to upload the data.

<ThemedImage
  alt="Imports/Exports (xls) page"
  sources={{
    light: useBaseUrl('/assets/images/tutorial-loading-data-using-spreadsheets/import-excel-page-light.png'),
    dark: useBaseUrl('/assets/images/tutorial-loading-data-using-spreadsheets/import-excel-page-dark.png'),
  }}
  style={{ width: '110%' }} 
/>

Alternatively, you can download all your current data (6) and add new data to it. If the **Type of Import** contains the words "Create" or "Update", you can change and add data elements, and then upload the spreadsheet with the **Import** button (2).

## Buildings Example

### Prepare the Excel Data

![Loading sample data](/assets/images/tutorial-loading-data-using-spreadsheets/building-xls-modified-sample.png)

Let's start by uploading building data. When you open the downloaded sample spreadsheet, you'll see the API URL and HTTP request method on the first two rows. 

The third row contains the field names. The actual data starts from the fourth row onwards. The example above shows two buildings to be loaded into Device42. If we wanted to load 20 buildings, we would put the data on rows 4 through 23 of the spreadsheet.

### Consult the API Docs

As you can see from the [documentation](https://api.device42.com/#Buildings_postBuildings), the name of the building is required but the rest of the fields are optional and can be left blank.

<img src={apiImage} width="90%"/>

### Upload the Excel File

From the Main Appliance, **Browse** to your buildings spreadsheet and click the **Import** button to upload the data.

You'll see a message indicating a successful upload.

<ThemedImage
  alt="Imports success message"
  sources={{
    light: useBaseUrl('/assets/images/tutorial-loading-data-using-spreadsheets/success-message-light.png'),
    dark: useBaseUrl('/assets/images/tutorial-loading-data-using-spreadsheets/success-message-dark.png'),
  }}
  style={{ width: '110%' }} 
/>

### View the Uploaded Data

Navigate to **Infrastructure > Buildings** and find the two buildings listed in the table. You can click on a building name to view its details, edit, or add more information to it.

<ThemedImage
  alt="Buildings list page with new data"
  sources={{
    light: useBaseUrl('/assets/images/tutorial-loading-data-using-spreadsheets/buildings-list-page-light.png'),
    dark: useBaseUrl('/assets/images/tutorial-loading-data-using-spreadsheets/buildings-list-page-dark.png'),
  }}

/>

You can also view the new building data from the **Classic Dashboard** on the home page. Click the number across the **Buildings** statistics to go to the buildings list page.

<ThemedImage
  alt="Buildings list page with new data"
  sources={{
    light: useBaseUrl('/assets/images/tutorial-loading-data-using-spreadsheets/classic-dashboard-light.png'),
    dark: useBaseUrl('/assets/images/tutorial-loading-data-using-spreadsheets/classic-dashboard-dark.png'),
  }}
  
/>

## Load Related Data

Next, let's add a couple of rooms. Download the **Rooms - Create Rooms** sample spreadsheet and add room data to it.

A unique `building` name or the `building_id` is required to add a new room record,  which means that building data needs to be added before room data. Most of the other imports will have logical references like these.

### Upload Order

A good order for uploading objects to Device42 is the following:

* Add Buildings 
* Add Rooms 
* Add Vendors 
* Add Racks 
* Add Hardware Models 
* Add Devices 
* Add Devices to Racks 
* Add Assets 
* Add Switches (Devices) 
* Add VLANs 
* Add Subnets 
* Add IP Addresses 
* Add Application Components

## Next Steps

Next, we encourage you to follow the [Navigating the Device42 User Interface](getstarted/tutorials/tutorial-navigating-the-device42-user-interface.md) tutorial. Browse through the documentation for more detailed information on the various Device42 features.