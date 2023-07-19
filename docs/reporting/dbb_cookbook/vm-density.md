---
title: "VM Density"
sidebar_position: 18
---

Density of the Virtualization Farms.

with
a as (
     select
          h.last\_discovered             host\_last\_discovered
          ,dcm.device\_name              vm\_manager\_name  
          ,h.device\_name                host\_device\_name
          ,h.os\_name                    host\_os\_name
          ,h.total\_cores                host\_total\_cores
          ,h.ram\_mb                     host\_ram\_mb
          ,dcm.cloud\_instance\_name
          ,count(1)                     vm\_count\_allocated
          ,sum(dc.total\_cores)          total\_vcores\_allocated
          ,sum(dc.ram\_mb)               total\_ram\_mb\_allocated
          ,sum(case when dc.in\_service = true
                    then 1 else 0
               end)                     vm\_count\_in\_service
          ,sum(case when dc.in\_service = true
                    then dc.total\_cpus \* coalesce(dc.core\_per\_cpu,1)
                    else 0
               end)                     total\_vcores\_in\_service
          ,sum(case when dc.in\_service = true
                   then dc.ram\_mb else 0
              end)                     total\_ram\_mb\_in\_service
          ,string\_agg(dc.device\_name,' | ') vms\_allocated
          ,string\_agg(case when dc.in\_service = true
                   then dc.device\_name else null
             end, ' | ')    vms\_in\_service
from view\_dbb\_compute\_v2 dc
     inner join view\_dbb\_compute\_v2 h  
on h.device\_fk = dc.virtual\_host\_device\_fk
     left join view\_dbb\_compute\_v2 dcm      
on dcm.device\_fk = dc.vm\_manager\_device\_fk
     where dc.device\_type = 'virtual'  and dc.network\_device  = 'f'
     group by h.device\_name ,h.os\_name ,dcm.device\_name ,h.total\_cores
               ,h.ram\_mb ,h.last\_discovered ,dcm.cloud\_instance\_name
     )
select
     a.\*
     ,round(case when a.host\_total\_cores =  0
               then null else 100.0000 \* a.total\_vcores\_allocated
                     /a.host\_total\_cores
               end, 2)                  cores\_percent\_allocated
    ,round(case when a.host\_ram\_mb = 0
               then null else 100.0000 \* a.total\_ram\_mb\_allocated::decimal
                    /a.host\_ram\_mb::decimal
               end, 2)                  ram\_percent\_allocated
    ,round(case when a.host\_total\_cores =  0
               then null else 100.0000 \*  a.total\_vcores\_in\_service
                    /a.host\_total\_cores
              end, 2)                  cores\_percent\_in\_service
    ,round(case when a.host\_ram\_mb = 0
               then null
               else  100.0000 \* a.total\_ram\_mb\_in\_service::decimal
              /a.host\_ram\_mb::decimal
              end, 2)                       ram\_percent\_in\_service
from a
order by host\_device\_name,host\_os\_name,vm\_manager\_name, vm\_count\_in\_service,  host\_last\_discovered

 

* * *

**NOTES**

Gives the ability to manage your physical-to-virtual assets.
