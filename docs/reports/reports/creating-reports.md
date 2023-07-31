---
title: "Creating reports (Legacy)"
sidebar_position: 7
---

The Reports > Reports menu entry enables you to generate reports for various objects. As you can see below, the report types include Devices, Operating Systems, Hardware Models, IP Addresses, and Assets.

Please note that you can export many types of data via the Reports / Run Book menu entry, the Tools / Export menu entry, and the API's.

### Report List

![Report List](/assets/images/wpid6039-media_1414494059128.png)

Reports>>Reports will bring you to the report list view shown above. From here, you can run existing reports or create a new report by clicking Add Report. When you click Add Report, you will see a list of available report types:

### Creating a new report

![Creating a new report](/assets/images/add_report_menu.png)

Select the desired report type.

When creating a report:

- All fields are optional.
- All conditions are "and" conditions: In other words, if you add a partial name and device type, it will only search for devices with the chosen types and with the given name \[unless the field specifies otherwise\].

The following example shows how to create Device report.

### Partial search string query filtering

![Partial search string query filtering](/assets/images/wpid6044-Partial_search_string_query_filtering.png)

Name Contains: Use this field to enter the full or partial name of the device(s) to show in the report. In this example, the field could be filled with just the domain name suffix on the device name.  
Serial # contains: A full or partial serial #.  
Asset # contains: A full or partial asset #.  
Notes Contains: snippet of notes to search for devices.

For an IP Report, you might be entering a partial IP or the first few octets.

### Numeric field filtering

![Numeric field filtering](/assets/images/wpid6043-Numeric_field_filtering.png)

The above image is an example from the Hardware Report. This example shows a numeric filter on the hardware size. You can filter based on size values that are equal to, less than, or greater than a certain value.

### Filtering by boolean fields

![Filtering by boolean fields](/assets/images/wpid6034-Filtering_by_boolean_fields.png)

You can also filter based on a field having a True or False value. In the above example, we are showing in the report all the devices that are "In service" and are not "network switches".

### Multiple option filter fields

![Multiple option filter fields](/assets/images/wpid6042-Multiple_option_filter_fields.png)

You can choose multiple filter for a given report. For the Device Report, you can filter by Type, Service Level, Hardware, Customer, sub Type, OS, Contract etc. Remember, that all criteria are "ANDed" together, i.e. all have to be true for a device to appear in the report.

### Date based filtering

![Date based filtering](/assets/images/wpid6033-Date_based_filtering.png)

Date filtering lets you filter based on time stamps on various objects.  
For example, you can filter for devices with the contract renewal date coming up in 1, 2 or 3 months.

### Columns and column order to include in the generated report

![Columns and column order to include in the generated report](/assets/images/wpid6032-Columns_and_column_order_to_include_in_the_generated_repo.png)

You can also choose which columns to include in the final report and in what order.

At least one column must be chosen for each report. If no column is selected, you will be sent to an error page and you can use the browser back button to go back and choose columns.

Click Display On Screen to generate the report and display it on the screen.

![Display On Screen button](/assets/images/display_on_screen_button.PNG)

The Export To Excel button will create a report as an Excel file and download it to your Downloads foler.

The Export To Tab-Delimited File will create a tab-delimited flle in your Downloads folder.

The Save and Schedule option will save the report for a manual run at a later time or execution of the report on a regular slchedule.

### Custom Fields

![Custom Fields](/assets/images/wpid6035-media_1377260906719.png)

Starting with v5.3, any custom fields you define will be available for display in the report. In the example above, we have defined 3 custom fields (i.e. 3 custom key pairs) for Devices (qualsys id, project, and testcf1. If I were to selected all 3 fields as columns to go in the report, then we would see value portion of the 3 key / value pairs for each device will be displayed when you select this field for display.

![](/assets/images/wpid6036-media_1377261171074.png)

For example, if you select the name field plus the 3 custom fields, you will get a report with 4 columns that shows the name of each device in the first column and the values of the key / value pairs in the 2nd through 4th columns.

Please note that if you have also made a 'value2' entry, you will see both the 'value' and the 'value2' with a colon between them. For example, if the key / value pair is 'qualsys id' / 'id1' and the value2 is 'security device', then you will see 'id1 : security device' as the value displayed for the 'qualsys id' column.

![](/assets/images/wpid6037-media_1377261544941.png)

Each custom field will also appear with a 'contains' filter to enable you to filter the report by your custom fields.

### Sorting

![Sorting](/assets/images/wpid6038-media_1377267619246.png)

You can also choose to sort the reports by certain fields. In the above example, the report will be sorted by Building and then by Name.

We will discuss saving the report in next section.
