---
title: "Importing Data from Existing Spreadsheets"
sidebar_position: 4
---

This article will guide you through getting started with Device42 using existing data in spreadsheet (.xls) format, e.g.: any existing spreadsheet or export from Rackmonkey, or other system. If the data exists in a spreadsheet, or you can easily get it there, the Device42 API import feature makes it easy to import. Import and auto discovery features are complimentary, it is not either/or, i.e.: auto discovery can be enabled before or after spreadsheet imports or vice versa, Device42 will correlate the data appropriately.

## API Import Excel Sheet Page

![Generic API Import Excel Sheet](/assets/images/generic_import_screen.png)

Navigate to: Tools | Import | API Import (xls) On this page you will find sample spreadsheets and links to detailed documentation.

Notes regarding API Sample Files:

- Row 1 and 2 - Required, do not change.
- Row 3 - Parameters must be on Row 3. However, only the parameters required for the specific API call are needed - all other parameters can be removed from file, though it is not required to do so. The parameters can be arranged in any order on Row 3.

The parameters used in the following steps are those required and commonly used. Please refer to the documentation for additional options, i.e.: parameters for adding various data elements not covered here.

## Step 1 - Add Buildings

![Step 1 - Add Buildings](/assets/images/apibuildings2.png)

Sample file: _Create or update buildings_.  
Name = building name is the only parameter required

1. Enter your information, save file
2. On the API Import Page, click Choose File (selecting the file saved in step 1)
3. Click Import, the following message will appear _"Importing File Please Wait..."_ Upon completion, results of the import will be displayed
4. the imported data can be viewed here: Datacenter | Buildings

## Step 2 - Adding Rooms

![Step 2 - Adding Rooms](/assets/images/apirooms2.png)

Sample file: _Create Rooms_.  
Name = room name, and building name are both required

1. Enter your information, save file
2. On the API Import Page, click Choose File (selecting the file saved in step 1)
3. Click Import, the following message will appear _"Importing File Please Wait..."_ Upon completion, results of the import will be displayed
4. the imported data can be viewed here: Datacenter | Rooms

## Step 3 - Adding Racks

![Step 3 - Adding Racks](/assets/images/apiracks2.png)

Sample file: _Create Racks_.  
Name = rack name, size (u size), and room name are all required

1. Enter your information, save file
2. On the API Import Page, click Choose File (selecting the file saved in step 1)
3. Click Import, the following message will appear _"Importing File Please Wait..."_ Upon completion, results of the import will be displayed
4. the imported data can be viewed here: Datacenter | Racks

## Step 4 - Adding Hardware Models

![Step 4 - Adding Hardware Models](/assets/images/apiaddinghardware.png)

Sample file: _Create or update hardware models_.  
Name = hardware model name is required. Type, size (u size)\*, and manufacturer are optional, but recommended if known.

1. Enter your information, save file
2. On the API Import Page, click Choose File (selecting the file saved in step 1)
3. Click Import, the following message will appear _"Importing File Please Wait..."_ Upon completion, results of the import will be displayed
4. the imported data can be viewed here: Datacenter | Hardware

\*Note: U Size is required for adding devices to racks. Devices are based on hardware models, U size should be specified when adding hardware models. U size can be updated for existing hardware models in Device42: Tools | Templates & Bulk Operations | Bulk Hardware Edit

## Step 5 - Adding Devices

![Step 5 - Adding Devices](/assets/images/apidevices.png)

Sample file: _Create or update devices_.  
Name = hardware model name is required.

1. Enter your information, save file
2. On the API Import Page, click Choose File (selecting the file saved in step 1)
3. Click Import, the following message will appear _"Importing File Please Wait..."_ Upon completion, results of the import will be displayed
4. the imported data can be viewed here: Devices | All Devices

## Step 6 - Adding Devices to Racks

![Step 6 - Adding Devices to Racks](/assets/images/apidevrack.png)

Sample file: _Add devices to racks_.  
Device = device name and start\_at are required. Start\_at = starting U location of device, starting with version 5.3.5, "auto" can be used to automatically mount the device in next available slot.

1. Enter your information, save file
2. On the API Import Page, click Choose File (selecting the file saved in step 1)
3. Click Import, the following message will appear _"Importing File Please Wait..."_ Upon completion, results of the import will be displayed
4. the imported data can be viewed here: Datacenter | Racks

## Adding Assets

![Adding Assets](/assets/images/apiassetscreate.png)

Sample file: _Create /assets_.  
Type = asset type is required. Patch panel models must be created manually, this can be done before or after creating asset\*. Vendor must already exist.

1. Enter your information, save file
2. On the API Import Page, click Choose File (selecting the file saved in step 1)
3. Click Import, the following message will appear _"Importing File Please Wait..."_ Upon completion, results of the import will be displayed
4. the imported data can be viewed here: Devices | Assets | Assets

\*Note: [Creating Patch Panel Models](infrastructure-management/connectivity/patch-panels/creating-patch-panels-from-scratch-in-device42-an-example.md)

## Adding Assets to Racks

![Adding Assets to Racks](/assets/images/apiassetsupdate.png)

Sample file: _Modify /assets_.  
rack\_id, start\_at (starting U location, specify or us "Auto"), size (U size), and asset\_id are required. All other parameters are optional. Optional parameters can be removed from the file.

- Rack ID's can be found by exporting rack info: Tools | Export > Rack
- Asset ID's can be found by exporting /assets: Tools | Export > Asset

1. Enter your information, save file
2. On the API Import Page, click Choose File (selecting the file saved in step 1)
3. Click Import, the following message will appear _"Importing File Please Wait..."_ Upon completion, results of the import will be displayed
4. the imported data can be viewed here: Devices | Assets | Assets
