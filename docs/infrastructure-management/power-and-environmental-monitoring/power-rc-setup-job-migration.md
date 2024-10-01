---
title: "Power RC Setup & Existing Job Migration"
sidebar_position: 5
---

Converting existing power autodiscovery jobs to the new PowerRC SNMP autodiscovery can be done with the imports/exports tool.

### Power (RC) Setup

**First, follow the instructions to setup a Remote Collector (RC) here:** - [discovery/remote-collector-rc.md](auto-discovery/remote-collector-rc.mdx)

### Migrating Existing Power Appliance Jobs to Power RC

1. Head to the TOOLS menu --> Import/Export (XLS)
    
    ![Export current power autodiscovery jobs](/assets/images/import-export-xls.png)
2. Export the current data for “Add Power Autodiscovery Jobs”
    
    ![Download Current Data](/assets/images/download-current-data.png)
3. Modify the data in cell A1 so that it contains “/api/1.0/auto\_discovery/networks” without the quotes:
    
    ![Modify data in cell A1](/assets/images/power-xls-config.png)
4. Rename the header in column V from “appliance” to “remote\_collector\_id”
    
    ![Rename header in column V](/assets/images/power-xls-column-rename.png)
5. Delete all of the data under the column V header and replace them with Remote Collector IDs. The IDs can be found by navigating to Tools > Autodiscovery > Remote Collectors:
    
    ![Select remote collector to view](/assets/images/select-rc-view.png)
6. Import the file on the same page that it was exported from:
    
    ![Re-import the modified XLS on the import/export page](/assets/images/import-modified-xls.png)
7. When the data has been imported successfully the jobs will no longer appear under Tools > Autodiscovery > Power (SNMP). The last step is to go to Tools > Autodiscovery > SNMP and edit the jobs to enable monitoring:
    
    ![Jobs moved after successful import](/assets/images/enable-monitoring-discovered-pdu.png)
