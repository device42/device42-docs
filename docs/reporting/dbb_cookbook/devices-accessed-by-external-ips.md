---
title: "Devices Accessed by External IPs"
sidebar_position: 22
---

Compute devices accessed by external IPs.

select distinct
     ds.device\_name
     ,ds.device\_type
     ,ds.physicalsubtype\_name
     ,ds.device\_service\_level
     ,ds.serial\_number
     ,ds.uuid
     ,ds.tags
     ,ds.client\_external\_ips
     ,ds.listener\_external\_ips
from view\_dbb\_security\_v2 ds
where ds.client\_external\_ips != 'No Client Ext IPs'   
  or ds.listener\_external\_ips != 'No Listener Ext IPs'
order by ds.device\_name

* * *

**NOTES**

Looking for any possible security risks.
