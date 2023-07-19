---
title: "VM Devices"
sidebar_position: 19
---

Inventory of Virtual Devices.

select
     dc.device\_fk
     ,dc.device\_name
     ,dc.service\_level
     ,dc.virtual\_subtype
     ,dc.customer\_department
     ,dc.all\_cost\_centers
     ,dc.total\_cpus
     ,dc.core\_per\_cpu
     ,round((dc.ram\_mb/1024)::numeric ,0)    ram\_gb
     ,dc.remote\_total\_space\_gb + dc.local\_total\_space\_gb 
                                        total\_space\_gb
     ,dc.remote\_total\_space\_gb
     ,dc.local\_total\_space\_gb
     ,dc.disk\_type   
     ,dc.os\_name\_ver
,dc2.device\_name                   hypervisor
     ,dc2.building\_address
     ,dc.all\_ips
from view\_dbb\_compute\_v2 dc
left join view\_dbb\_compute\_v2 dc2
on dc2.virtual\_host\_device\_fk  = dc.device\_fk
where lower(dc.device\_type) = 'virtual'
     and dc.is\_network\_device = 'No'
     and dc.is\_container = 'No'
order by dc.device\_name

 

 

 

* * *

**NOTES**

Gives the ability to manage your assets to see if you have any missing data.
