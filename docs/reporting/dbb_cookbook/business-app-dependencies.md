---
title: "Business App Dependencies"
sidebar_position: 2
---

Infrastructure that may impact Business Apps.


```
/\*
\* Business App Dependencies
\* This is a simple query to quickly see what infrastructure impacts one or more Business Apps.
\*/
SELECT
    businessapplication\_fk
    ,business\_app\_name
    ,object\_name           AS dependent\_object\_name
    ,related\_object\_url    AS dependent\_object\_url
    ,component\_type
    ,port
    ,device\_fk             AS impacted\_device\_fk
    ,impacted\_object       AS impacted\_device\_name
    ,device\_host
    ,device\_subtype
    ,impact\_reason
    ,relationship\_type
    ,relationship\_url
    ,trends\_url
FROM view\_dbb\_adm\_businessapp\_composition\_v2
WHERE 
    business\_app\_name IN ('<your-business-app-name-here>')
ORDER BY
    impacted\_object;
```

* * *

**NOTES**

This is a simple query to quickly see what infrastructure impacts one or more Business Apps.
