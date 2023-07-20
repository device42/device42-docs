---
title: "Physical Device Inventory"
sidebar_position: 14
---

**Inventory of Physical Device Information**

```sql
select  
      dc.manufacturer  
      ,dc.hardware_model  
      ,dc.device_serial  
      ,dc.hdw_end_of_life  
      ,dc.hdw_end_of_support  
      ,dc.size_ru  
      ,dc.total_cpus  
      ,dc.core_per_cpu  
      ,dc.total_cores  
      ,round((dc.ram_mb/1024)::numeric ,0) ram_gb  
from view_dbb_compute_v2 dc  
where lower(dc.device_type) = 'physical'  
      and dc.hardware_model is not null  
order by 1 nulls first ,2 ,3
```

**NOTES**

Gives ability to manage your assets to see if you have any missing data.
