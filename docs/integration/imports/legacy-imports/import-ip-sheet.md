---
title: "Import IP Sheet"
sidebar_position: 2
---

Import spread sheet for IP Addresses.

Couple of updates to following:

1. Excel sheet import now supported. Tools > Import > Import IP Sheet(xls). Sample excel file included.
2. You can use D42 ping sweep utility to find IP addresses on your network(s) and create the excel sheet in ready format.

More: [https://www.device42.com/blog/2012/06/basic-ping-sweep-utility-ip-address-information-date/](https://www.device42.com/blog/2012/06/basic-ping-sweep-utility-ip-address-information-date/)

![wpid843-media_1326480414715.png](/assets/images/wpid843-media_1326480414715.png)

You can import a spread sheet saved a comma separated CSV file. **Please make sure the csv is Comma delimited format (as shown in image below)**and not Macintosh or MS-DOS format, as those 2 formats would not work.  
**First column of the sheet should be as shown above, otherwise import might fail and if it succeeds, it will ignore the first line.**  
Only required field is IP Address. If IP Address already exists in device42 database, new properties would be merged with that IP Address.  
**Optional fields:**  
Subnet : If name matches an exisiting subnet in device42 database, that would be used, otherwise the software would calculate and add IP to first subnet found that allows that IP range.  
MAC address if wrong, would be ignored.  
A new device would be added if not exisitng already.

![wpid844-media_1326582970222.png](/assets/images/wpid844-media_1326582970222.png)
