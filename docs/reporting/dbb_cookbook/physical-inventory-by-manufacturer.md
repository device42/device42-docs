---
title: "Physical Inventory by Manufacturer"
sidebar_position: 17
---

Physical Inventory Count – includes model and EOL/EOS.

select  
     dc.manufacturer  
     ,dc.hardware\_model  
     ,count(1)                     "count"  
     ,min(dc.hdw\_end\_of\_life)      hdw\_end\_of\_life  
     ,min(dc.hdw\_end\_of\_support)   hdw\_end\_of\_support  
from view\_dbb\_compute\_v2 dc  
where lower(dc.device\_type)  = 'physical'  
and dc.hardware\_model is not null  
group by 1,2  
order by 1 nulls first,2

* * *

**NOTES**

Gives the ability to manage your assets to see if you have any missing data.
