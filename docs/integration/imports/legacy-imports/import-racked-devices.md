---
title: "Import Racked Devices"
sidebar_position: 3
---

Starting with v310, you can now import racked devices using Excel sheet. Go to Tools > Import > Racked device import to get started.

### Creating the excel sheet

![Creating_the_excel_sheet.png](/assets/images/Creating_the_excel_sheet.png)

Sample excel sheet is provided for you to get started. name = Device name and is required. Device should either already exist and can be either unknown type or physical type. hw\_model = If device type is not physical with already defined hardware model, you need to add hardware model here. This hardware model should already have a defined size and type in device42 appliance. rack\_id = We couldn't do rack names, because the rack names can repeat across different rooms or buildings. You have to use id of a rack already defined and this field is required. start\_at = starting slot # for the device. orientation = is optional. If "back" is entered, device's orientation would be back of the rack. Otherwise, it would be front(regardless of entry or no entry).

### Error reporting would be inline

![Error_reporting_would_be_inline.png](/assets/images/Error_reporting_would_be_inline.png)

It would log each line separately on why a particular line was not imported. e.g. `\[u'nh-sample-01', u'R900', 1.0, 1.0, '', "{'device': \[u'Model Device with pk 8 does not exist.'\], '\_\_all\_\_': \[u'Please Enter Hardware Model with defined size for Device First.'\]}"\]` This means that hardware model R900 is not already defined with size.

### Use device import and bulk hardware edit to prep the appliance beforehand

You can import or auto-discover devices and hardware models using device excel import and then bulk edit hardware before doing the racked device import. This makes it easier to add and categorize devices in bulk without changing property of individual devices after wards.
