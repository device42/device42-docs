---
title: "Spreadsheet Imports and Exports"
sidebar_position: 1
---

The Device42 Spreadsheet Imports give you the ability to import and modify data via spreadsheets

### Overview

![Overview](/assets/images/wpid6762-media_1395940948813.png)

The spreadsheet import functionality can be found on the Tools menu.

![Spreadsheet Import Export](/assets/images/2015_10_10-spreadsheets.png)

To load a set of data, choose a category on the left and click 'Download Sample Excel File'.

### Importing Data

![Importing Data](/assets/images/wpid6764-media_1395941222933.png)

The spreadsheet above will be downloaded if you click the "Download Sample Excel File' link for 'Create or update buildings'. Rows 1-3 in the spreadsheet should not be modified. Rows 4 and 5 contain sample data. You should delete rows 4 and 5 (or more generally rows 4 and higher) and add your own data.

![](/assets/images/wpid6767-media_1395942335185.png)

To load the spreadsheet, click the 'Choose File' button, browse to the location on your hard drive that contain the downloaded and modified spreadsheet, and click 'Import'.

![](/assets/images/wpid6768-media_1395943063333.png)

You will then see a message listing all the records that were added or updated successfully. If any records were rejected, you will also see a section with the rejected records and the reason for each rejection.

### Getting Help

![Getting Help](/assets/images/wpid6765-media_1395941563952.png)

If you want to learn more about a data field, hover over the red triangle in the upper right of the spreadsheet (if you are using Excel). Alternatively, if you click the 'View Documentation' link on the Import page, you will be redirected to the online documentation for this function.

### Exporting Data

If you click the "Download Current Data' link on the Import page, a spreadsheet of the current data for this category will be downloaded.

![](/assets/images/wpid6766-media_1395942145984.png)

For example, if I were to click the link for buildings in my database, I would get the spreadsheet shown above. This is a simple way to export your data.

### Modifying Data

This same functionality can be used to modify your data. Simply take the spreadsheet you just created, modify the data, and import by clicking the 'Choose File' and 'Import' buttons as described above.

There is one caveat when you Download, modify, and import that you should be aware of...

If the category on the left side says just "Create" or "Add" and does not say "Modify" or "Update", then the records in the imported spreadsheet will be added. So, if you "Download Current Data" and re-import that spreadsheet, you will get duplicates. If you want to "Download", "Modify", and re-import, then right before you do the re-import step, go into the list view for the primary object of the category (e.g. the list view for racks for the "Create Racks" category) and delete the existing records. This is necessary only for categories that do not have "update" or "modify" in their names.

### Exporting Passwords

By default, the Password export will NOT output the actual passwords even for users that have permission to see the passwords. If you want to override this default so that password exports will contain clear-text passwords for those passwords that the user has permission to see, go to Tools>>Settings>>Password Security and change the default setting.
