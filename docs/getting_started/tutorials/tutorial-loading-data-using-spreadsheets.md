---
title: "Tutorial:  Loading Data Using Spreadsheets"
sidebar_position: 1
---

In this Tutorial, we will be loading data using the API Import feature. Using this feature, you can load any type of data that can be loaded via the device42 API which means it is possible to import just about all your data using this feature. To get started, click on Tools in the main menu and then click on 'Import/Export (xls)'.

![](/assets/images/wpid6270-media_1403088743508.png)

![](/assets/images/wpid6271-media_1403088819265.png)

Each spreadsheet is loaded by first clicking the Choose File button (1) to select an Excel file then clicking the Import Excel File button (2) to load the data.

The easiest way to create an API Import spreadsheet is to look through the list of imports on the page and find the one you need. Let's start by loading our buildings (3). Click on the Download Sample Excel File link (4) to get a sample spreadsheet. Click on the View Documentation link (5) to view the documentation to learn what the fields in the spreadsheet mean, which fields are required, and which are optional.

Alternatively, you can download all your current data (6). If the Type of Import is "Create or update..." or "Modify...", you can then change and add data elements, and then reimport the spreadsheet with the Import Excel File button (2).

### Loading sample data

![Loading sample data](/assets/images/wpid6272-media_1403088949672.png)

When you open the downloaded spreadsheet, the first two lines will have the API command and the API verb. It's not necessary to understand what these mean but if you want to, you can read the API Documentation.

The third line has the field names and the actual data is in lines 4 and below. The example above loads two buildings into device42. If we wanted to load 20 buildings, we would put the data on rows 4 through 23 of the spreadsheet.

When you click the View Documentation link for buildings, you will see...

### Documentation

![Documentation](/assets/images/wpid6273-media_1403089025837.png)

As you can see from the documentation, the name of the building is required but the rest of the fields are optional (meaning you can leave them blank).

Now, click the 'Choose File' button, select the downloaded buildings spreadsheet, and click the 'Import Excel File' button to load this building data.

You should then see the message circled above indicating a successful load.

Next, let's click the 'Home' menu item.

![](/assets/images/wpid6274-media_1403089104159.png)

You should then see the message circled above indicating a successful load.

Next, let's click the 'Home' menu item...

![](/assets/images/wpid6275-media_1403427508156.png)

Your dashboard now shows that you have two buildings loaded.

Click the Buildings hyperlink (circled above in red) to see the buildings data in device42.

![](/assets/images/wpid6268-media_1375377991929.png)

Here you see the two buildings listed. You can click on either building to see more detail about that particular building and/or to edit the building data.

Next, let's add a couple of rooms. Download the 'Create or update rooms' spreadsheet.

 

When you open this sample spreadsheet, there are two rooms. Now, load the rooms spreadsheet just like you did with the building data.

Please note that the room spreadsheet references the building name (or id). Because the building name (or id) is required to add a room, this means that the building has to be loaded before the room. Most of the imports will have logical references like these.

A good order for the key objects is the following:

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

In fact, this is the data we'll be loading in this tutorial and this is the order we'll load the data.

Next, load the Vendors and Racks spreadsheet. Also, please download the Devices spreadsheet.

![](/assets/images/wpid6269-media_1375389545587.png)

A few things to note:

First, note that the device in row 7 is a blade chassis and that the devices in rows 8-10 are blades that go in that chassis.

Second, note that the blade in row 8 is a virtual host and that the device in row 11 is a virtual machine that reside on the blade in row 8 and that the vm's in rows 13-15 reside in the nh-demo-02 physical server.

Now, load this spreadsheet and also load the 'Add Devices to Racks' and 'Application Components' spreadsheet.

At this point, our demo system has multiple buildings, rooms, racks, and devices.

We've reached the end of this tutorial. Next, we encourage you to follow the Tutorial [Navigating the device42 User Interface](https://docs.device42.com/getstarted/tutorials/tutorial-navigating-the-device42-user-interface/). We'd also like to encourage you browse through the documentation for more detailed information on the various device42 features.
