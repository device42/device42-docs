---
title: "Devices with No OSs"
sidebar_position: 26
---

Compute Devices with no OS captured.

select
     ds.device\_name
     ,device\_fk
     ,ds.device\_type
     ,ds.physicalsubtype\_name
     ,ds.serial\_number
     ,ds.device\_service\_level
     ,ds.tags
     ,ds.device\_first\_added
     ,ds.device\_last\_changed
     ,ds.is\_missing\_os
     ,ds.ip\_address
from view\_dbb\_security\_v2 ds
where ds.is\_missing\_os = 'Yes' and ds.device\_fk  is not null

 

* * *

**NOTES**

Opportunities to enrich your data by doing a full discovery of devices.
