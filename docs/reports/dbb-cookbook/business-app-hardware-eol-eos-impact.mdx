---
title: "Business App Hardware EOL / EOS Impact"
sidebar_position: 4
---

Business App Hardware EOL / EOS Impact

```sql
/*
* Business App Hardware EOL/EOS Impacts
* This query also utilizes the Compute DBB to gather information on all BusinessApp Impacting Devices that are going to hit hardware EOL/EOS. 
* Use this if you need to analyze any of the changes needed when that EOL/EOS date approaches.
* You can easily shift the window or focus on either EOL/EOS by editing the included WHERE filter clause. 
* TIP: Additional information can easily be pulled in from the compute dbb as well. Please review the data dictionary with Device42 to see what information is available.
*/
SELECT
    ba_comp.device_fk               AS eol_device_fk
    ,compute.device_serial          AS eol_device_serial
    ,ba_comp.impacted_object        AS impacted_device_name
    ,ba_comp.business_app_name      AS impacted_businessapp
    ,ba_comp.businessapplication_fk
    ,ba_comp.impact_reason
    ,ba_comp.relationship_type
    ,ba_comp.component_type
    ,compute.manufacturer
    ,compute.hardware_model
    ,compute.building_name 
    ,compute.room_name
    ,compute.rack_name
    ,compute.hdw_end_of_life
    ,compute.hdw_end_of_support
FROM view_dbb_adm_businessapp_composition_v2 ba_comp
JOIN view_dbb_compute_v2 compute
    ON compute.device_fk = ba_comp.device_fk 
WHERE
    compute.hdw_end_of_life < current_date - 90
    OR compute.hdw_end_of_support < current_date - 90
ORDER BY
    compute.hdw_end_of_life
    ,compute.hdw_end_of_support
    ,ba_comp.impacted_object;
```

**NOTES**

This query also utilizes the Compute DBB to gather information on all Business App Impacting Devices that are going to hit hardware EOL/EOS. Use this if you need to analyze any of the changes needed when that EOL/EOS date approaches.
