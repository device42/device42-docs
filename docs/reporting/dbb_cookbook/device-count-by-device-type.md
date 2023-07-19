---
title: "Device Count by Device Type"
sidebar_position: 10
---

Count of Devices by device type.

select
     dc.device\_type
     ,count(1)                "count"
from view\_dbb\_compute\_v2 dc
group by 1
order by "count" desc

* * *

**NOTES**
