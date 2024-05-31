---
title: "Importing CSV files into D42 using the API helper utility"
sidebar_position: 3
---

Device42 RESTful APIs make it simple to import data into the Main Appliance. This guide will show you how to use the Device42 API helper script to import CSV files into Device42 using APIs.

## Requirements

You'll need the following to get started:

- A Python installation that's available from [https://www.python.org/download/releases/](https://www.python.org/download/releases/).

- The sample API helper script from [https://github.com/device42/API\_Helpers](https://github.com/device42/API_Helpers).

## Get the URL and Field Names

This sample script can be easily modified to read a comma-delimited CSV file for any of the APIs supported by Device42.  Visit the [API documentation](https://api.device42.com/) and find the API call you need to use.

- Note the URL endpoint (for example, `/api/1.0/custom\_fields/appcomp/`) and the URL method (for example, `PUT` or `POST`).

    ![URL method](/assets/images/importing-csv-files/api-docs-method.png)

- Identify the mandatory fields you must include and the optional fields you want to include.

    ![Required fields](/assets/images/importing-csv-files/api-docs-required-fields.png)

## Create a CSV File

![Table with data for API use](/assets/images/importing-csv-files/csv-file-headings.png)

Create a CSV file of comma-separated values that has the following:

- The header row (first line) values must match the API field names found in the [documentation](https://api.device42.com/).
- After the header row, there should be a row of values for each data record you need to send to the Main Appliance.
- Each line in the CSV file must have a value for each mandatory field.

## Modify the Script

![Python script](/assets/images/importing-csv-files/api-python-script.png)

Change lines 25-30 of the script to match your environment:

- **`D42_API_URL`:** Your Device42 IP or FQDN (1) followed by the API call URL (2) that you found in the API documentation.
- Add your **`D42_USERNAME`** and **`D42_PASSWORD`**.
- **`API_METHOD`:** Will be `'put'` or `'post'` depending on the documentation for the particular API.
- **`CSV_FILE_NAME`:** The name of the CSV file with the data you created [previously](#create-the-csv-file).
- **`DEBUG:`** A value of `True` or `False`. A `True` value will return a detailed output.

## Execute the Script

Save the file and execute it by running `python script_name.py`. The script will print two sections of information: 
- **added:** All the rows that were added successfully. 
- **notadded:** Any rows that haven't loaded and the reason for the failure.

## Additional Resources

Watch our [API Imports hardware models](how-to-videos/api-imports-add-create-hardware-models.md) video for an example of how to use the API helper utility to import CSV files into Device42. 