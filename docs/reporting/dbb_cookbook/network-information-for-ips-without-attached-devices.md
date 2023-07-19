---
title: "Network Information for IPs Without Attached Devices"
sidebar_position: 29
---

Provides the IP records that have an ‘A’ or ‘AAAA’ record type that don’t have a corresponding device in the system.

select
     ds.ip\_address
    ,ds.subnet\_network
    ,ds.subnet\_range\_begin
    ,ds.subnet\_range\_end
    ,ds.mask\_bits
    ,ds.dns\_name
    ,ds.dns\_type
    ,ds.dns\_content
    ,ds.dnszone\_name
from view\_dbb\_security\_v2 ds
where ds.is\_ip\_device\_assoc = 'No' and ds.dns\_type in ( 'A', 'AAAA')

 

* * *

**NOTES**

Use this to identify opportunities to clean up your DNS records or opportunities for additional device discovery.
