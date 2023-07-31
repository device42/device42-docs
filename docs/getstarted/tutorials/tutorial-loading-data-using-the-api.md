---
title: "Tutorial:  Loading Data using the API"
sidebar_position: 2
---

The purpose of this tutorial is twofold: First, we will show you how easy it is to load data using the device42 API without any programming other than executing a shell script of curl commands. Second, by loading the data in this script into an empty device42 appliance, you can explore the device42 feature set without having to load your own data. Two important notes: (1) The script used in this tutorial assumes an empty appliance. It will not work on an appliance that already has data. (2) To run the script, you will need to get to a Linux (or Ubuntu) command prompt. You can run this script from any \*nix system with curl installed.

### Running the API Script

The API script can be found on the [device42 automation scripts page](https://github.com/device42/demo-data-shell-scripts). To run the script: (1) From your browser, do a Save As command to save the file to your local disk. (2) Open the file in any text editor like Windows Notepad or Ubuntu Gedit (but not a word processor like Windows Word).

![wpid3348-media_1375606956746.png](/assets/images/wpid3348-media_1375606956746.png)

In the area with the red oval, you will need to change the URL to point to your device42 appliance. If you have changed, the username and/or password on the appliance, you will need to change these also. (3) Run this script $ sh /tmp/demo\_script.sh (Obviously, if you've downloaded to a different directory and/or with a different name, you will need to modify the above accordingly). You will see a lot of information displayed on the screen. Specifically, for each curl statement in the shell script, you will see a success message. Now if you point your browser to the device42 appliance, you will see the following dashboard:

![wpid3349-media_1375607516111.png](/assets/images/wpid3349-media_1375607516111.png)

This is the core data we have just loaded via the API commands. There was other data also loaded (e.g. custom key / value pairs) that aren't displayed in the dashboard but which will see when you browse the data in the system.

### Understanding the API Script

Now, let's look at the script we just executed. If you are sure that you will never use the API, you can safely skip this section.

![wpid3350-media_1375607843550.png](/assets/images/wpid3350-media_1375607843550.png)

Each line in the shell script has a curl statement like this one. Curl is a data transfer tool that is built into Linux and Ubuntu. The -i, -H, and --insecure parameters should be in all device42 API calls: 1. The -i command specifies that the header should be included in the output. 2. The -H command tells the device42 application that a json-formatted response will be accepted. 3. The --insecure command is required because the device42 appliance does not have a certificate. The -X and -d commands will vary according to the device42 API being used as will the url (e.g. '/api/1.0/buildings/' in the example above). The appropriate values for each of these can be by going to the [device42 API list page](how-to-videos/api-imports-add-create-hardware-models.md) and finding the API you need.

![wpid3351-media_1375610020246.png](/assets/images/wpid3351-media_1375610020246.png)

The curl statement shown earlier uses the parameters in the selection in red above

![wpid3352-media_1375610227026.png](/assets/images/wpid3352-media_1375610227026.png)

The documentation for this API command tells you that: (1) The url is /api/1.0/buildings/ (2) The -X command should be POST (3) The only required -d parameter is **name**. There are a number of optional parameters. Also, (4) All API's have a curl example.

### Unique ID's

![wpid3353-media_1375610622694.png](/assets/images/wpid3353-media_1375610622694.png)

This is the documentation for the Create/Update Rooms API. Highlighted in red is an optional room\_id parameter. You would use this parameter if you wanted to specify which room the rack is in. There are two ways to get an id (id's are required for parameters whose names end in \_id): First, as specified above, you can do it programmatically via the [Retrieval API](getstarted/tutorials/tutorial-loading-data-using-the-api.md) for the object. However, this method is most appropriate for a more complex program written in a language such as Java or Python. If you are just executing curl commands in a shell script, you can do the following: Click on Datacenter / Rooms. Then, hover over the name of the room for which you wish to find the id.

![wpid3354-media_1375694823287.png](/assets/images/wpid3354-media_1375694823287.png)

For example, hover over the "2nd Floor" hyperlink, and look at the lower left corner of your screen. You should see the url of the building. The unique id is the last element of the url. In the example above, the unique id is 2. If you hover over the "1st Floor" hyperlink, you will see that the unique id is 1. At this point, our demo system has multiple buildings, rooms, racks, and devices.

![wpid3355-media_1375697151375.png](/assets/images/wpid3355-media_1375697151375.png)

We've reached the end of this tutorial. Next, we encourage you to follow the Tutorial [Navigating the device42 User Interface](getstarted/tutorials/tutorial-navigating-the-device42-user-interface.md). We'd also like to encourage you browse through the documentation for more detailed information on the various device42 features.
