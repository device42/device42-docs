---
title: "Physical Devices Without Hardware Model"
sidebar_position: 16
---

Lists physical devices missing hardware information.

select
    dc.device\_fk
    ,dc.device\_name
    ,dc.manufacturer
    ,dc.hardware\_model
    ,dc.device\_type
    ,dc.service\_level
    ,[dc.in](http://dc.in/)\_service
    ,dc.customer\_department
    ,dc.server\_location
    ,dc.building\_address
    ,dc.room\_name
    ,dc.row\_name
    ,dc.rack\_name
    ,dc.u\_position
    ,dc.last\_discovered
    ,dc.tags
    ,[dc.in](http://dc.in/)\_service
from view\_dbb\_compute\_v2 dc
where lower(dc.device\_type)= 'physical' and dc.hardware\_model is null
order by 2

* * *

**NOTES**

Gives the ability to manage your assets to see if you have any missing data.
