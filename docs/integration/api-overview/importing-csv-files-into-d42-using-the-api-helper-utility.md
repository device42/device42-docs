---
title: "Importing CSV files into D42 using the API helper utility"
sidebar_position: 3
---

Device42 RESTful APIs make it simple to import data into the D42 appliance. In this section, we will discuss how you can use the API helper script to import csv files into Device42 using the APIs.

## Requirement and script location

Only requirement is python 2.7.x. Available at: [https://www.python.org/download/releases/](https://www.python.org/download/releases/)

The API helper script is available at: [https://github.com/device42/API\_Helpers](https://github.com/device42/API_Helpers)

## Get the URL and field names

This sample script can be easily modified to read a comma-delimited csv file of data for any of the API's supported by Device42.

- From the [API documentation](https://api.device42.com/), determine which API call you need to use.
- From the documentation of the API call, note the URL (e.g. /api/1.0/custom\_fields/appcomp/) and the URL method (either PUT or POST).

    ![URL method](/assets/images/importing-csv-files/api-docs-method.png)

- From the documentation of the API call, identity the mandatory fields you must include and the optional fields you wish to include.
- 
    ![Required fields](/assets/images/importing-csv-files/api-docs-required-fields.png)

## Create the CSV file

![Table with data for API use](/assets/images/importing-csv-files/table-data-for-api.png)

Create comma separated CSV file with following:

- The header row (first line) values must match the API field names found in the [documentation](https://api.device42.com/).
- After the header row, there should be one row of values for each data record that you need to send to the device42 appliance.
- Each line in the CSV file must have a value for each mandatory field.

## Modify the script

![Python script](/assets/images/importing-csv-files/api-python-script.png)

You will need to Change lines 25-30 in the script to match your environment:

- **D42\_API\_URL** includes your Device42 IP or FQDN (1) followed by the API call URL (2) that you found in the API documentation.
- Add your **D42\_USERNAME** and **D42\_PASSWORD**.
- **API\_METHOD** will be put or post, depending on the documentation for the particular API.
- **CSV\_FILE\_NAME** will be the name of the CSV file with data you created [previously](#create-the-csv-file).
- **DEBUG** can be changed to True or False, depending on how verbose you want the output to be.

## Execute the script

Once you save the file, you can execute _(python script\_name.py)_. After the script completes, it will print two sections of information: The **added** section will show all the rows that were added successfully. The **notadded** section will have any rows that failed and the reason for the failure.

## Additional Resources

Watch our [API Imports hardware models](how-to-videos/api-imports-add-create-hardware-models.md) video for an example of how to use the API helper utility to import CSV files into Device42. 
