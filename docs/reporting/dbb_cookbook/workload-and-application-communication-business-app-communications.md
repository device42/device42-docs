---
title: "Workload and Application Communication - Business App Communications"
sidebar_position: 6
---

Business Application Service Communication


```
/\* Business Application Service Communication \*/

/\* 
Use the following query if want to move a Business Application to the cloud and need to know what clients communicate with it. 
This query will also give you the date of the last communication.
You can get a list of your Business Applications with this query...
SELECT DISTINCT listener\_business\_app FROM view\_dbb\_adm\_workload\_and\_app\_comm\_v2;
You can also swap out the 'WHERE ac.listener\_business\_app' clause for 'WHERE ac.listener\_device' 
if you want to identify all communication to a Device.  \*/

WITH 
    last\_detected\_cte AS (
       SELECT 
          ac.listener\_device\_fk ,
          ac.listener\_resource\_fk,
          ac.client\_device\_fk,
          ac.client\_resource\_fk,
          MAX(ac.comm\_last\_detected) AS last\_detected
      FROM
          view\_dbb\_adm\_workload\_and\_app\_comm\_v2 ac
      GROUP BY
          ac.listener\_device\_fk ,
          ac.listener\_resource\_fk,
          ac.client\_device\_fk,
          ac.client\_resource\_fk
) 
SELECT 
    ac.listener\_business\_app,
    ac.listener\_device,
    ac.listener\_app\_component,
    ac.client\_device,
    compl.in\_service AS listener\_in\_service,
    compl.service\_level AS listener\_service\_level,
    ac.client\_resource,
    ac.client\_business\_app,
    ac.client\_device\_object\_category,
    ac.client\_ip,
    ac.client\_process\_display\_name,
    ld.last\_detected,
    ac.port\_communication,
    ac.protocol,
    eu."name" AS client\_end\_user,
    eu.email AS client\_email,
    eu.contact AS client\_contact,
    eu."location" AS cleint\_location,
    eu.adusername AS client\_end\_user\_adusername,
    comp.in\_service AS client\_in\_service ,
    comp.service\_level AS client\_service\_level,
    comp.customer\_department,
    comp.customer\_department AS client\_customer\_department
FROM
    view\_dbb\_adm\_workload\_and\_app\_comm\_v2 ac
LEFT JOIN view\_dbb\_compute\_v2 comp      ON comp.device\_fk = ac.client\_device\_fk
LEFT JOIN view\_dbb\_compute\_v2 compl     ON compl.device\_fk = ac.listener\_device\_fk
LEFT JOIN last\_detected\_cte ld          ON ld.listener\_device\_fk = ac.listener\_device\_fk
LEFT JOIN view\_serviceinstance\_v2 si    ON si.device\_fk = ac.client\_device\_fk
LEFT JOIN view\_enduser\_v1 eu            ON eu.enduser\_pk = si.enduser\_fk
WHERE ac.listener\_business\_app = '<Insert Business Application Here>'
-- WHERE ac.listener\_device = '<Insert Device Name Here>' 
ORDER BY
    comp.service\_level DESC, ac.listener\_device, ac.client\_device
```

* * *

**NOTES**

Use this query if want to move a Business Application to the cloud and need to know what clients communicate with it. This query will also give you the date of the last communication.
