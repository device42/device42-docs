---
title: "Physical Device Inventory"
sidebar_position: 14
---

**Inventory of Physical Device Information**

select  
      dc.manufacturer  
      ,dc.hardware\_model  
      ,dc.device\_serial  
      ,dc.hdw\_end\_of\_life  
      ,dc.hdw\_end\_of\_support  
      ,dc.size\_ru  
      ,dc.total\_cpus  
      ,dc.core\_per\_cpu  
      ,dc.total\_cores  
      ,round((dc.ram\_mb/1024)::numeric ,0) ram\_gb  
from view\_dbb\_compute\_v2 dc  
where lower(dc.device\_type) = 'physical'  
      and dc.hardware\_model is not null  
order by 1 nulls first ,2 ,3

**NOTES**

Gives ability to manage your assets to see if you have any missing data.
