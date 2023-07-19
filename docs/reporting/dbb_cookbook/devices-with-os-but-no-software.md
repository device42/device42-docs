---
title: "Devices with OS but No Software"
sidebar_position: 27
---

Compute Devices with OS but no Software captured.

select distinct
     ds.device\_fk
     ,ds.device\_name
     ,ds.device\_type
     ,ds.device\_service\_level
     ,ds.tags
     ,ds.device\_first\_added
     ,ds.device\_last\_changed
     ,ds.is\_missing\_os
     ,ds.is\_missing\_software
from view\_dbb\_security\_v2 ds
where ds.is\_missing\_software = 'Yes' and ds.device\_fk is not null       and ds.is\_missing\_os = 'No'

 

* * *

**NOTES**

Opportunities to enrich your data by doing a full discovery of devices.
