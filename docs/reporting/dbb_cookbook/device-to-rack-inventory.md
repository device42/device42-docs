---
title: "Device to Rack Inventory"
sidebar_position: 12
---

Inventory of Devices arranged by Rack

select
     dc.device\_type
     ,dc.server\_location
     ,dc.building\_name
     ,dc.building\_address
     ,dc.room\_name
     ,dc.row\_name
     ,dc.chassis\_u\_location
     ,dc.chassis\_device\_name
     ,dc.rack\_name
     ,dc.u\_position
     ,dc.device\_name
     ,dc.asset\_number
     ,dc.manufacturer
     ,dc.hardware\_model
     ,dc.service\_level
     ,dc.in\_service
     ,dc.customer\_department
     ,dc.device\_type
     /\* \\/ used if renting bare-metal machine from a cloud provider.\*/
     ,dc.cloud\_service\_provider
from view\_dbb\_compute\_v2 dc
where lower(dc.device\_type) = 'physical' and  dc.rack\_name is not null
order by dc.server\_location, dc.building\_name, dc.room\_name,
dc.storage\_room, dc.row\_name, dc.rack\_name, dc.u\_position

* * *

**NOTES**

Gives the ability to manage your assets to see if you have any missing data.
