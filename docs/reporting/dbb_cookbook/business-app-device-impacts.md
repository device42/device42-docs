---
title: "Business App Device Impacts"
sidebar_position: 3
---

Business App Device Impacts


```
/\*
\* Business App Device Impacts
\* Use this query if you are looking to discover all business apps that are impacted by a specific set of infrastructure devices and the relationships between them.
\* You can use object\_name to look at the source of the impact or impacted\_object to look at the device directly supporting the business application.
\*/
SELECT
businessapplication\_fk
    ,business\_app\_name
    ,device\_fk
    ,impacted\_object
    ,device\_host
    ,device\_subtype
    ,impact\_reason
    ,relationship\_type
    ,relationship\_url
    ,object\_name                AS related\_object\_name
    ,port                       AS related\_object\_port
    ,related\_object\_url
    ,component\_type
    ,business\_app\_url
    ,business\_app\_diagram
    ,business\_app\_tech\_owner
    ,business\_app\_owner
    ,business\_app\_service\_level
    ,business\_app\_migration\_group
    ,business\_app\_criticality
    ,business\_app\_type
    ,business\_app\_description
    ,business\_app\_contains\_pii
    ,business\_app\_internet\_accessible
    ,business\_app\_notes
FROM view\_dbb\_adm\_businessapp\_composition\_v2
WHERE 
    object\_name IN('<your-device-name-here>')
    OR impacted\_object IN('<your-device-name-here>')
ORDER BY
    business\_app\_name ;
```

* * *

**NOTES**

Use this query if you are looking to discover all business apps that are impacted by a specific set of infrastructure devices and the relationships between them.
