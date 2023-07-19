---
title: "Devices with Prohibited Software (as designated by customer)"
sidebar_position: 28
---

Compute Devices that may not conform to compliance rules.

select
     ds.device\_fk
     ,ds.device\_name
     ,ds.device\_type
     ,ds.serial\_number
     ,ds.asset\_number
     ,ds.uuid
     ,ds.device\_service\_level
     ,ds.tags
     ,ds.all\_software
     ,ds.all\_software\_types
from view\_dbb\_security\_v2  ds
where lower(ds.all\_software\_types) like '%prohibited%'
order by ds.device\_name

 

* * *

**NOTES**

Opportunities for cleanup to comply with the business rules.
