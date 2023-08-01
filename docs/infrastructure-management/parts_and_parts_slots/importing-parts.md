---
title: "Importing Parts"
sidebar_position: 2
---

This document explains how to import parts using the Spreadsheets Import tool found in the Tools menu.

### Importing part models vs. importing parts

![Importing part models vs. importing parts](/assets/images/wpid4760-media_1400162046800.png)

Please see [Managing Spare Parts](infrastructure-management/parts_and_parts_slots/part-model-templates.md) for an explanation of part models vs. parts in Device42.

Part models can be created using the create or update spare parts import. The parts import can do both models and parts. The create or update spare parts models import can only create models.

### Download current data

![Download current data](/assets/images/wpid4759-media_1400161961340.png)

This document will demonstrate adding parts to existing part models - building on the imported models covered in the [Importing Part Models document](infrastructure-management/parts_and_parts_slots/importing-part-models.md).

Tools>Imports/Exports (.xls) - download current data for spare parts models as highlighted above

![](/assets/images/wpid4761-media_1400162386036.png)

A current data export sheet is pictured above. Creating parts from existing part models requires the part model ID.

Keep this sheet open.

### Download sample file

![Download sample file](/assets/images/wpid4762-media_1400162600078.png)

Next we will download the Create or update spare parts sample sheet - Tools>Imports/Exports (.xls)

![](/assets/images/wpid4763-media_1400162885408.png)

Note the help comments for each parameter.

We will use the data from the current data export to help populate the parts import.

### Populating the sample sheet

![Populating the sample sheet](/assets/images/wpid4764-media_1400165367963.png)

Using the current data export, we have copied the partmodel\_id for the new parts we are going to create

- Name or partmodel\_id is required. Type is optional. part\_id is required for updating existing parts
- Added the serial numbers - this can be accomplish manually or via laser handled scanner (see below)

This import will create the following:

ID 39 (3.5" 2TB Dell Drives) 4 line items with assignments and serial numbers. Unique line items are required to track serial numbers.

ID 47 (4GB PC3 8500R) 2 line items with assignments. Since we don't care about serial numbers for these items, we are only tracking room assignment and count.

Save the file and import.

Re: handheld laser scanner. We have been using a DBPOWER scanner that we purchased on amazon for $60 (link below) - we think it works great. It comes with USB receiver and can be programmed to automatically go to the next row in Excel, making it very easy and quick to grab serial numbers or other bar codes.

### Import results

![Import results](/assets/images/wpid4765-media_1400166697787.png)

Go to: Tools>Imports/Exports (.xls) - choose file and click import. Pictured above are the results of our import.

Let's have a look at these new parts in the UI

![](/assets/images/wpid4766-media_1400167063591.png)

The new parts on separate line items - again these are unique line items as we are tracking serial numbers.

![](/assets/images/wpid4767-media_1400167321688.png)

The new parts on two lines - not tracking serial numbers, we only need two lines to track the room assignments for these 40 RAM modules.
