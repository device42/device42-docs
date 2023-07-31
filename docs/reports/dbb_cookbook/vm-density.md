---
title: "VM Density"
sidebar_position: 18
---

Density of the Virtualization Farms.

```sql
with
a as (
     select
          h.last_discovered             host_last_discovered
          ,dcm.device_name              vm_manager_name  
          ,h.device_name                host_device_name
          ,h.os_name                    host_os_name
          ,h.total_cores                host_total_cores
          ,h.ram_mb                     host_ram_mb
          ,dcm.cloud_instance_name
          ,count(1)                     vm_count_allocated
          ,sum(dc.total_cores)          total_vcores_allocated
          ,sum(dc.ram_mb)               total_ram_mb_allocated
          ,sum(case when dc.in_service = true
                    then 1 else 0
               end)                     vm_count_in_service
          ,sum(case when dc.in_service = true
                    then dc.total_cpus * coalesce(dc.core_per_cpu,1)
                    else 0
               end)                     total_vcores_in_service
          ,sum(case when dc.in_service = true
                   then dc.ram_mb else 0
              end)                     total_ram_mb_in_service
          ,string_agg(dc.device_name,' | ') vms_allocated
          ,string_agg(case when dc.in_service = true
                   then dc.device_name else null
             end, ' | ')    vms_in_service
from view_dbb_compute_v2 dc
     inner join view_dbb_compute_v2 h  
on h.device_fk = dc.virtual_host_device_fk
     left join view_dbb_compute_v2 dcm      
on dcm.device_fk = dc.vm_manager_device_fk
     where dc.device_type = 'virtual'  and dc.network_device  = 'f'
     group by h.device_name ,h.os_name ,dcm.device_name ,h.total_cores
               ,h.ram_mb ,h.last_discovered ,dcm.cloud_instance_name
     )
select
     a.*
     ,round(case when a.host_total_cores =  0
               then null else 100.0000 * a.total_vcores_allocated
                     /a.host_total_cores
               end, 2)                  cores_percent_allocated
    ,round(case when a.host_ram_mb = 0
               then null else 100.0000 * a.total_ram_mb_allocated::decimal
                    /a.host_ram_mb::decimal
               end, 2)                  ram_percent_allocated
    ,round(case when a.host_total_cores =  0
               then null else 100.0000 *  a.total_vcores_in_service
                    /a.host_total_cores
              end, 2)                  cores_percent_in_service
    ,round(case when a.host_ram_mb = 0
               then null
               else  100.0000 * a.total_ram_mb_in_service::decimal
              /a.host_ram_mb::decimal
              end, 2)                       ram_percent_in_service
from a
order by host_device_name,host_os_name,vm_manager_name, vm_count_in_service,  host_last_discovered
```

 


**NOTES**

Gives the ability to manage your physical-to-virtual assets.
