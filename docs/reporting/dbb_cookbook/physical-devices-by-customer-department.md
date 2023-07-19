---
title: "Physical Devices by Customer Department"
sidebar_position: 15
---

Inventory of Physical Devices grouped by Customer Department.

select
     dc.customer\_department  
     ,dc.asset\_number
     ,dc.last\_discovered
     ,dc.device\_name
     ,dc.device\_type
     ,dc.device\_serial
     ,dc.in\_service
     ,dc.building\_name
     ,dc.room\_name
     ,dc.row\_name
     ,dc.rack\_name
     ,dc.u\_position
from view\_dbb\_compute\_v2 dc
where lower(dc.device\_type)= 'physical'
order by 1,2,4

* * *

**NOTES**

Asset number (asset tag) is set by customer and not directly discovered. Use this to assist with physical inventory by customer department.
