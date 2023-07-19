---
title: "Device Count by Service Level"
sidebar_position: 11
---

Count of Devices by service level.

select
     lower(dc.service\_level)
     ,count(1) as "count"
from view\_dbb\_compute\_v2 dc
group by 1
order by "count" desc

* * *

**NOTES**
