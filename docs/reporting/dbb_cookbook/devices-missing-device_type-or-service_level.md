---
title: "Devices Missing Device_Type or Service_Level"
sidebar_position: 13
---

Inventory of incomplete device discovery.

select
     dc.device\_fk
     ,dc.device\_name
     ,dc.service\_level
     ,dc.device\_type
     ,dc.device\_subtype
     ,dc.virtual\_subtype
     ,dc.cloud\_service\_provider
     ,dc.cloud\_service\_name
     ,dc.device\_serial
     ,dc.device\_type
from view\_dbb\_compute\_v2 dc
where lower(dc.service\_level) in (null, 'missing', 'tbd')
     or lower(dc.device\_type) in (null, 'unknown')

* * *

**NOTES**

Service\_Level is set by the customer and not directly discovered.
