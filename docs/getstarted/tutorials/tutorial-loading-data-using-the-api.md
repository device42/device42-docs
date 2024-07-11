---
title: "Tutorial: Loading Data using the API"
sidebar_position: 2
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

The purpose of this tutorial is to load sample data into the Device42 Main Appliance using the Device42 API. You don't need any prior programming knowledge and only need to execute a bash script of curl commands from the command prompt.

To run the script, you need a \*Nix system with curl, a data transfer tool that is built into Linux and Ubuntu.

### Running the API Script

1. Download API script from the [device42 automation scripts page](https://github.com/device42/demo-data-shell-scripts/blob/master/demo_script.sh). 

    ![GitHub download button](/assets/images/tutorial-loading-data-using-the-api/download-script.png)

2. Open the script in a text editor like Windows Notepad or Ubuntu Gedit, but not a word processor like Microsoft Word. 
3. Add your credentials to lines 2 - 4 of the script. Replace `https://IP` with your Device42 IP address or FQDN, and supply your `username` and `password`:
    ```bash
    URL=https://IP
    USER='username'         
    PASS='password' 
    ```
4. Open a Linux terminal and run the script by typing `sh` followed by the path and file name of the script. For example:
    ```bash
    $ sh /tmp/demo_script.sh
    ```
    You will see a lot of information displayed in the terminal as the script executes as each curl statement outputs a success message. 
5. Now log in to your Device42 Main Appliance. 

Running the script adds sample data including a building, two rooms, six vendors, four racks, seven devices, and three customers to your Main Appliance. You'll see statistics of the additions on your dashboard, depending on your settings. Some data like custom keys and value pairs aren't displayed in the dashboard, but you'll see them when browsing the data in the system.

You can view data added for an object category by navigating to that category's list page from the main menu. For example, if you go to **Resources > All Devices** you'll see the newly created records with names beginning with "nh-demo-".

<ThemedImage
  alt="New devices added on the list page"
  sources={{
    light: useBaseUrl('/assets/images/tutorial-loading-data-using-the-api/added-devices-light.png'),
    dark: useBaseUrl('/assets/images/tutorial-loading-data-using-the-api/added-devices-dark.png'),
  }}
/>

### Understanding the API Script

Now, let's look at one of the curl statements you just executed. If you are sure that you will never use curl and the Device42 API, you can safely skip this section. 

Each line in the script has a curl statement like this one. Note that the `\` backslashes aren't in the original script and are used here to continue the command on a new line for readability.

```bash
#Add a Building
curl -i -H "Accept: application/json" \
     -X POST \
     -d "name=New Haven DC" \
     -d "address=123 main st" \
     -d "contact_name=roger" \
     -d "contact_phone=1234567890" \
     -d "notes=super critical" \
     -u $USER:$PASS \
     $URL/api/1.0/buildings/ \
     --insecure
```

The `-i`, `-H`, and `--insecure` parameters should be in all Device42 API calls:
- The `-i` flag specifies that the header should be included in the output. 
- The `-H` flag tells the Device42 application that a JSON-formatted response will be accepted. 
- The `--insecure` flag is required because the Device42 appliance does not have a certificate. 

The values of the following flags and values varies according to the API used:
- The `-X` value specifies the HTTP method used. 
- The `-d` values are object category parameters. For example, a building has the `address=` parameter as an optional field to fill in.
- The `URL` value is the API endpoint. For example, `/api/1.0/buildings/` is the endpoint for the building object category.
  
Watch our videos on using API imports to [create hardware models](how-to-videos/api-imports-add-create-hardware-models.md) or [add devices to racks](how-to-videosapi-imports-adding-devices-to-racks/) for guided examples.

## The API Documentation

The [Device42 API website](https://api.device42.com/) is a resource to find information on the API endpoints you need to get or add data from Device42. 

The documentation for this API command tells you that the `-X` value should be `POST` and the `URL` endpoint is `/api/1.0/buildings/`. Under the "Parameters" section, you'll see a `name` value is required and that `address` is an option. 

![API docs buildings](/assets/images//tutorial-loading-data-using-the-api/api-docs-buildings.png)

### Finding Unique IDs 

Some API parameters use unique IDs of other configuration items. For example, if you are creating a rack and want to specify the room the rack is in, you can find the unique ID of the room. This is especially useful if you have multiple rooms with the same name and want to specify one of them.

This is the documentation for the **Create/update** racks API with the optional `room_id` parameter highlighted. 

![API docs buildings](/assets/images//tutorial-loading-data-using-the-api/racks-api-paramaters.png)

There are two ways to get an ID. First, you can do it programmatically using the endpoint for the object, like `/api.1.0/rooms/`. This method is most appropriate for a more complex program written in Java or Python. 

If you are just executing curl commands in a shell script, do the following. From the Main Appliance, go to **Infrastructure > DataCenter > Rooms**. Then, hover over the name of the room for which you wish to find the ID.

<ThemedImage
  alt="Hover over room name"
  sources={{
    light: useBaseUrl('/assets/images/tutorial-loading-data-using-the-api/hover-room-light.png'),
    dark: useBaseUrl('/assets/images/tutorial-loading-data-using-the-api/hover-room-dark.png'),
  }}
  style={{ width: '60%' }} 
/>

For example, hover over the "IDF2" hyperlink, and look at the lower left corner of your screen to see the small URL of the room. The unique ID is the last number in the URL, which is "26". 

## Next Steps

Next, we encourage you to follow the [Navigating the Device42 User Interface](/getstarted/tutorials/tutorial-navigating-the-device42-user-interface.mdx) tutorial. Browse through the documentation for more detailed information on the various Device42 features.
