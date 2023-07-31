---
title: "Workload and Application Communication - Business App Communications"
sidebar_position: 6
---

Business Application Service Communication


```sql
/* Business Application Service Communication */

/* 
Use the following query if want to move a Business Application to the cloud and need to know what clients communicate with it. 
This query will also give you the date of the last communication.
You can get a list of your Business Applications with this query...
SELECT DISTINCT listener_business_app FROM view_dbb_adm_workload_and_app_comm_v2;
You can also swap out the 'WHERE ac.listener_business_app' clause for 'WHERE ac.listener_device' 
if you want to identify all communication to a Device.  */

WITH 
    last_detected_cte AS (
       SELECT 
          ac.listener_device_fk ,
          ac.listener_resource_fk,
          ac.client_device_fk,
          ac.client_resource_fk,
          MAX(ac.comm_last_detected) AS last_detected
      FROM
          view_dbb_adm_workload_and_app_comm_v2 ac
      GROUP BY
          ac.listener_device_fk ,
          ac.listener_resource_fk,
          ac.client_device_fk,
          ac.client_resource_fk
) 
SELECT 
    ac.listener_business_app,
    ac.listener_device,
    ac.listener_app_component,
    ac.client_device,
    compl.in_service AS listener_in_service,
    compl.service_level AS listener_service_level,
    ac.client_resource,
    ac.client_business_app,
    ac.client_device_object_category,
    ac.client_ip,
    ac.client_process_display_name,
    ld.last_detected,
    ac.port_communication,
    ac.protocol,
    eu."name" AS client_end_user,
    eu.email AS client_email,
    eu.contact AS client_contact,
    eu."location" AS cleint_location,
    eu.adusername AS client_end_user_adusername,
    comp.in_service AS client_in_service ,
    comp.service_level AS client_service_level,
    comp.customer_department,
    comp.customer_department AS client_customer_department
FROM
    view_dbb_adm_workload_and_app_comm_v2 ac
LEFT JOIN view_dbb_compute_v2 comp      ON comp.device_fk = ac.client_device_fk
LEFT JOIN view_dbb_compute_v2 compl     ON compl.device_fk = ac.listener_device_fk
LEFT JOIN last_detected_cte ld          ON ld.listener_device_fk = ac.listener_device_fk
LEFT JOIN view_serviceinstance_v2 si    ON si.device_fk = ac.client_device_fk
LEFT JOIN view_enduser_v1 eu            ON eu.enduser_pk = si.enduser_fk
WHERE ac.listener_business_app = '<Insert Business Application Here>'
-- WHERE ac.listener_device = '<Insert Device Name Here>' 
ORDER BY
    comp.service_level DESC, ac.listener_device, ac.client_device
```

**NOTES**

Use this query if want to move a Business Application to the cloud and need to know what clients communicate with it. This query will also give you the date of the last communication.
