---
title: "Device Count by Service Level"
sidebar_position: 11
---

Count of Devices by service level.

```sql
select
     lower(dc.service_level)
     ,count(1) as "count"
from view_dbb_compute_v2 dc
group by 1
order by "count" desc
```

**NOTES**
