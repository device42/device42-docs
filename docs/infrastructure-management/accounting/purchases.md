---
title: "Purchases"
sidebar_position: 1
---

## Purchase Tracking - Legacy Reporting

Device42 can track purchases of devices and assets as well as service and warranty contracts. If you are looking for other types of reports, see the dedicated ["Reporting Section"](../../reports/reports/creating-reports.md) of the documentation.

![add new purchase example](/assets/images/add_purchase_25_dell2950_HL.png)

1. The example above is a hypothetical purchase of 25 Dell PE1950 servers for the R&D department and is charged to Cost Center 12056.
2. A pdf version of the contract is attached.
    
    ![line item type](/assets/images/line_item_type.png)

Each line item for the purchase will have a Line Type and an Item Type. Choose Line Type 'Contract' for service, warranty, and other contracts. Choose Line Type 'Device/Asset/Tax etc.' for everything else.

![line item purchase type](/assets/images/item_type_menu-line_item.png)

The Item Type has a list of selections that can apply to either Line Type. For example, if the Line Type is 'Device/Asset/Tax etc.', choosing the Item Type 'Device' means that this line represents one or more devices. Similarly, if a service contract is purchased for each device, there may be a second line with Line Type 'Contract' and Item Type 'Device' that represents the service contract(s) for the purchased device(s).

![add contract line item](/assets/images/add_contract_line_item_HL.png)

Here is a full view of the 2 line items. A few things to note:  
(1) If the Line Type is 'Contract', there is a set of extra fields that apply only to Contract line items.  
(2) One can assign a Cost Center and a Customer at either the Purchase header level (in which case it applies to all line items) or at the individual line item level.  
(3) One can associate the actual devices purchased with the line item. This can be done at the time of purchase or at a later date.

## Reporting

Device42 features a brand new ["Advanced Reporting"](../../reports/reports/creating-reports.md) engine that may eventually lead to the following "Legacy Reports" being depreciated. Find old reports via the Reports menu → Legacy Reports → and then click "Add Report" in the upper right:

![classic reports menu](/assets/images/classic_reporting_menu_purchases.png)

If you navigate to Reports → Legacy Reports → "Add Report", you will find a Purchases report is available. This report enables you to select for display all of the Purchase and Line Item fields and offers numerous filters. For example, you can see all contracts with a renewal date in the next 3 months. Or, you can see purchases by cost center, customer, or device. Like the other reports, you can schedule and email the report results.

The Devices and Assets reports also enable filtering by Contract Start/End/Renewal dates.
