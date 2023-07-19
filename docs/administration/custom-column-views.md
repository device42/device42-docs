---
title: "Custom Column Views"
sidebar_position: 6
---

### Customs Column Views in Device42

You can set custom column views in Device42, allowing you to chooose which columns you see in most list views. The objects with customizable list view pages include: Application Components, Assets, Blade Devices, Buildings, Certificates, Cluster Devices, Customers, DNS Records, DNS Zones, Departments, Devices, Device Hardware Models, Other Devices, End Users, IP Addresses, IP Nat/Maps, MAC Addresses, Operating Systems, PDUs, Purchases, QR/Barcodes, Racks, Rooms, Services, Service Instances, Service Ports, Service Schedules, Software Components, Software In Use, Software Licensing Models, Subnets, Switch Ports, Telco Circuits, Transfers, Unknown Devices, VLANs, VRF Groups, Vendors, and Virtual Devices.

To add a custom column view, click the drop down on the right above the column headers on a list view page and select "Add column list..." ![List view drop down](/assets/images/custom-columns-001.png)

In the pop up screen, name the column list, select the object category that you are viewing (ie, choose Device for the Device list page), and then click the "Add another Selected Column" link and choose your columns.

![List view drop down](/assets/images/custom-columns-002.png)

You can reorder the columns as well or delete them. If you would like to make this new list view the default, select the "Make this list the default column list" option.

To choose between column lists, simply use the same drop down from the list view page that you used to create the list view, and choose the column view you would like to see.

### Important Custom Column Layout Information

Always ensure, when creating custom column layouts that the first column is a text column. By design, the first column on a given pages view contains the hyperlink to the Device or Asset (CI's) details. If, for example, 'Status' or 'In Service' is set as the first column, the small green CheckMarks or Red 'minus' signs become the hyperlink, which can prove very confusing.

Always ensure the first column contains text. See this example:

![Ensure 1st Column Contains Text](/assets/images/ensure_1st_col_text.png)
