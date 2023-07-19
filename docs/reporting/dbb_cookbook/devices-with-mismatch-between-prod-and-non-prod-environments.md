---
title: "Devices with Mismatch Between Prod and Non-Prod Environments"
sidebar_position: 25
---

Compute Devices with Listener / Client mismatch of Prod and Non-Prod Service Levels.

select distinct
     ds.device\_fk
     ,ds.device\_name
     ,ds.device\_service\_level
     ,ds.mismatched\_listener\_devices
     ,ds.mismatched\_client\_devices
from view\_dbb\_security\_v2 ds
where ds.mismatched\_listener\_devices is not null
or ds.mismatched\_client\_devices is not null
order by 1

 

* * *

**NOTES**

Service Levels are defined by customer and not directly discovered.
