---
title: "Business App Device Impacts"
sidebar_position: 3
---

Business App Device Impacts


```
/*
* Business App Device Impacts
* Use this query if you are looking to discover all business apps that are impacted by a specific set of infrastructure devices and the relationships between them.
* You can use object_name to look at the source of the impact or impacted_object to look at the device directly supporting the business application.
*/
SELECT
businessapplication_fk
    ,business_app_name
    ,device_fk
    ,impacted_object
    ,device_host
    ,device_subtype
    ,impact_reason
    ,relationship_type
    ,relationship_url
    ,object_name                AS related_object_name
    ,port                       AS related_object_port
    ,related_object_url
    ,component_type
    ,business_app_url
    ,business_app_diagram
    ,business_app_tech_owner
    ,business_app_owner
    ,business_app_service_level
    ,business_app_migration_group
    ,business_app_criticality
    ,business_app_type
    ,business_app_description
    ,business_app_contains_pii
    ,business_app_internet_accessible
    ,business_app_notes
FROM view_dbb_adm_businessapp_composition_v2
WHERE 
    object_name IN('<your-device-name-here>')
    OR impacted_object IN('<your-device-name-here>')
ORDER BY
    business_app_name ;
```

* * *

**NOTES**

Use this query if you are looking to discover all business apps that are impacted by a specific set of infrastructure devices and the relationships between them.
