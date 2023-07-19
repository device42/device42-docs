---
title: "Importing Part Models"
sidebar_position: 1
---

This document explains how to import part models using API Imports. For detailed explanation of Part Models and Parts, please see: [https://docs.device42.com/spare-parts-management/models-and-parts/](https://docs.device42.com/spare-parts-management/models-and-parts/)

### Data example

![Data example](/assets/images/wpid4727-media_1400099180867.png)

The sample data in the spreadsheet (pictured above) is our starting point for this import. This data was exported from a legacy system into .csv format.

### Download sample spreadsheet

![Download sample spreadsheet](/assets/images/wpid4728-media_1400099757511.png)

Tools>Imports/Exports (.xls)  
Create or update spare parts models - Download Sample Excel File  
Open the sample file

### Comments

![Comments](/assets/images/wpid4729-media_1400100313210.png)

Note: hover-over column heading to reveal comments that specify usage, e.g.: required, optional or details (pictured below)

![](/assets/images/wpid4730-media_1400104574786.png)

Note: the additional Part model type parameters for CPU, RAM, and HDD. Note: type is required.

### Populating the sample sheet

![Populating the sample sheet](/assets/images/wpid4731-media_1400106488167.png)

The image above shows the sample spreadsheet that has been updated to include the data from our .csv export. These being new part models, only type is required. The parameters not being used have been deleted from the sheet (alternatively they can be left blank).

Note the additional parameters added for CPU and RAM models

Save the file.

### Choose file and import

![Choose file and import](/assets/images/wpid4732-media_1400106840832.png)

Go to: Tools>Imports/Exports (.xls) - choose the file and select Import.

### Import results

![Import results](/assets/images/wpid4733-media_1400158112533.png)

Results of parts model import. If there is a problem with the import the results will show "The following were Not added..." Should there be a problem, be sure to review the body of the results as the cause is usually stated clearly, e.g.: missing parameter

### Parts Model List

![Parts Model List](/assets/images/wpid4734-media_1400159234488.png)

Datacenter>Parts>Model List - above we see the part models imported in the previous step.

Let's drill into a few of the items to validate the import:

![](/assets/images/wpid4736-media_1400159731437.png)

HDD

![](/assets/images/wpid4735-media_1400159682081.png)

RAM

![](/assets/images/wpid4737-media_1400159784226.png)

Patch Cable
