---
title: "Importing CSV files into D42 using the API helper utility"
sidebar_position: 3
---

Device42 RESTful APIs make it simple to import data into the D42 appliance. In this section, we will discuss how you can use the API helper script to import csv files into Device42 using the APIs.

## Requirement and script location

Only requirement is python 2.7.x. Available at: [https://www.python.org/download/releases/](https://www.python.org/download/releases/)

v2.1 of the API helper script is available at: [https://github.com/device42/API\_Helpers](https://github.com/device42/API_Helpers)

## Get the URL and field names

This sample script can be easily modified to read a comma-delimited csv file of data for any of the API's supported by Device42.

- From the documentation, determine which API call you need to use.
- From the documentation of the API call, note the URL (e.g. /api/1.0/custom\_fields/appcomp/) and the URL method (either PUT or POST).
- From the documentation of the API call, identity the mandatory fields you must include and the optional fields you wish to include.

## Create the CSV file

![media_1369966124651.png](/assets/images/media_1369966124651.png)

Create comma separated CSV file with following:

- The header row (first line) values must match the API field names found in the [documentation](https://docs.device42.com/api/).
- After the header row, there should be one row of values for each data record that you need to send to the device42 appliance.
- Each line in the CSV file must have a value for each mandatory field.

## Modify the script

![media_1369966137098.png](/assets/images/media_1369966137098.png)

You will need to Change lines 26-31 in the script to match your environment:

- **D42\_API\_URL** will be the D42 instance base url plus the api call url that you found in the API documentation.
- **D42\_USERNAME** and **D42\_PASSWORD** are self explanatory.
- **API\_METHOD** will be put or post, depending on the documentation for the particular API.
- **CSV\_FILE\_NAME** will be the name of the csv file with data. (As created in Step #4)
- **DEBUG** can be changed to True or False, depending on how verbose you want the output to be.

## Execute the script

Once you save the file, you can execute _(python script\_name.py)_. After the script completes, it will print two sections of information: The **added** section will show all the rows that were added successfully. The **notadded** section will have any rows that failed and the reason for the failure.
