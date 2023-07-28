---
title: "Viewing Storage Arrays"
sidebar_position: 6
---

## Introduction

Storage Arrays are identified and returned by Device42 [Storage Arrays autodiscovery](./). Storage Arrays also display their resource details, related resources, and topology map.

## View All Storage Arrays

Select _Resources > Storage > Arrays_ from the Device42 menu to display the storage arrays list.

![](/assets/images/SA-2-list-page.png)

Device42 displays the Storage Arrays list page. On this page, you can _Search by name_, or filter the list by _Type_.

![](/assets/images/Storage-arrays-filter-by-type.png)

**Note**: The Storage Arrays list page also includes an _Advanced Search_ option you can use to construct more specific searches. See the [Advanced Search Feature](getting_started/advanced-search-feature.md) documentation page for instructions.

Click on an array _Name_ to see details about that array. You can use the links in the panel on the right to see details about that related resource.

![](/assets/images/SA-5-view-page.png)

![](/assets/images/SA-6-related-resources.png)

### View Storage Arrays Mapped to Devices

Devices that have attached storage arrays display links to those arrays in the Parts tab of the device view page. The example below shows the Parts tab of a physical device with links to storage.

![](/assets/images/physical-device-to-stoarge-array-1-UMA.png)

Click on a Parts link to see that resource (in this case a LUN).

![](/assets/images/physical-device-to-stoarge-array-2-UMA.png)

## Resource Maps and Trends Graphs

Click _Resource Map_ at the top left of the page to see the topography map for the array. You can select which _Resource Types_ you want to include in the map.

![](/assets/images/Storage-arrays-resource-map.png)

Click _Trends_ at the top left of the page to see graphs for data such as Read Data Rate, Write Data Rate, IOs Rate, etc., for the storage array.

![](/assets/images/SA-8-trends-1.png)

Select the _Available Metrics_ drop-down to choose which Trends charts you want to see.

![](/assets/images/SA-9-trends-2-available-metrics.png)

## Edit Storage Arrays

Click _Edit_ on the Storage Array view page to edit the array. You can add or edit _Notes_ or _Tags_ for the array, select Yes/No for _In Service,_ and select or add a _Service Level_ value_._

![](/assets/images/SA-7-edit-page.png)

Click _Save_ to save your edits; click _Cancel_ to discard them.

## Delete Storage Arrays

Select one or more arrays from the list, and select either _Fast Background Delete_ or _Delete with Detailed Confirmation_ from the Actions menu, and then click the lightning bolt icon.

![](/assets/images/SA-3-action-menu.png)

Confirm the deletion if prompted.

![](/assets/images/SA-4-delete-confirm.png)

 

## Storage Array Discovery Job Import/Export

You can import or export storage array discovery jobs using an Import/Export Excel file.

- Select _Tools > Imports/Exports (xls)_ from the Device42 main menu, and then select _Autodiscovery – Create Storage Array Autodiscovery Jobs > Download Sample Excel File_.

![](/assets/images/D42-20971_storage-array-imp-exp.png)

![](/assets/images/D42-20971_storage-array-imp-exp-xlxs.png)

- Use the Excel file to set up your storage array discovery job and then use _Upload Excel file_ at the top of the Imports/Exports page to upload the file to Device42.
