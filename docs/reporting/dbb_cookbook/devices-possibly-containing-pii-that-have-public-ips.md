---
title: "Devices Possibly Containing PII That Have Public IPs"
sidebar_position: 23
---

Devices containing PII (as set by customer ) or PII is ‘Not Set’ and have public IPs.

select
     ds.contains\_pii
     ,ds.device\_name
     ,ds.device\_type
     ,ds.serial\_number
     ,ds.tags
     ,ds.device\_service\_level
     ,ds.device\_last\_edited
     ,ds.is\_client\_w\_public\_ips
     ,ds.client\_external\_ips
     ,ds.is\_listener\_w\_public\_ips
     ,ds.listener\_external\_ips
     ,ds.all\_software
from view\_dbb\_security\_v2 ds
where lower(ds.contains\_pii) in ('not set', 'yes')
     and (lower(ds.is\_client\_w\_public\_ips) = 'yes'
     or lower(ds.is\_listener\_w\_public\_ips) = 'yes')
order by 1 desc,2

 

* * *

**NOTES**

Personally Identifiable Information (PII) is manually set by customer and not discovered.
