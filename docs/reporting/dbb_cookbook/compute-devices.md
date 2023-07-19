---
title: "Compute Devices"
sidebar_position: 9
---

Detailed Inventory of Compute Devices

select
       dc.device\_fk
       ,dc.last\_discovered
       ,dc.device\_name
       ,dc.in\_service
       ,dc.service\_level
       ,dc.device\_type
       ,dc.device\_subtype
       ,dc.virtual\_subtype 
       ,dc.device\_serial
       ,dc.virtual\_host
       ,dc.network\_device
       ,dc.os\_architecture
       ,dc.total\_cpus
       ,dc.core\_per\_cpu
       ,dc.cpu\_speed
       ,dc.total\_cores
       ,dc.is\_hyperthreaded
       ,round((dc.ram\_mb/1024)::numeric ,0)  ram\_gb
       ,dc.os\_vendor
       ,dc.os\_category   
       ,dc.os\_name
       ,dc.os\_version
       ,dc.os\_version\_number
       ,dc.os\_end\_of\_life
       ,dc.os\_end\_of\_support
       ,dc.manufacturer
       ,dc.hardware\_model
       ,dc.asset\_number
       ,dc.software\_discovered
       ,dc.services\_discovered
       ,dc.application\_components\_discovered
       ,dc.local\_disk\_count
       ,dc.mounts\_discovered
       ,dc.number\_ip\_addresses\_discovered
       ,dc.parts\_discovered
       ,dc.parts\_count
       ,dc.bios\_version
       ,dc.bios\_revision
       ,dc.bios\_release\_date
       ,dc.storage\_room
       ,dc.building\_name
       ,dc.building\_address
       ,dc.room\_name
       ,dc.row\_name
       ,dc.rack\_name
       ,dc.size\_ru
       ,dc.network\_shares
       ,dc.mount\_points
       ,dc.account
       ,dc.cloud\_service\_provider
       ,dc.cloud\_service\_name
       ,dc.cloud\_instance\_id
       ,dc.cloud\_instance\_name
       ,dc.cloud\_instance\_type
       ,dc.cloud\_instance\_status
       ,dc.cloud\_location
       ,dc.cloud\_notes
       ,dc.first\_po\_date
       ,dc.last\_po\_date
       ,dc.all\_po\_costs
       ,dc.all\_line\_item\_costs
       ,dc.all\_po\_numbers
       ,dc.all\_cost\_centers
       ,dc.all\_cost\_center\_descriptions
       ,dc.all\_ips
       ,dc.all\_labels
       ,dc.dns\_A\_records
       ,dc.dns\_AAAA\_records
       ,dc.local\_used\_space\_gb
       ,dc.remote\_used\_space\_gb   
       ,dc.local\_total\_space\_gb
       ,dc.remote\_total\_space\_gb
       ,dc.local\_free\_space\_gb
       ,dc.remote\_free\_space\_gb
       ,dc.cpu\_model
       ,dc.cpu\_manufacturer
 from view\_dbb\_compute\_v2 dc
 order by device\_name

* * *

**NOTES**

Gives the ability to manage your assets to see if you have any missing data.
