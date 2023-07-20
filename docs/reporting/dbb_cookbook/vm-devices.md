---
title: "VM Devices"
sidebar_position: 19
---

Inventory of Virtual Devices.

```sql
select
     dc.device_fk
     ,dc.device_name
     ,dc.service_level
     ,dc.virtual_subtype
     ,dc.customer_department
     ,dc.all_cost_centers
     ,dc.total_cpus
     ,dc.core_per_cpu
     ,round((dc.ram_mb/1024)::numeric ,0)    ram_gb
     ,dc.remote_total_space_gb + dc.local_total_space_gb 
                                        total_space_gb
     ,dc.remote_total_space_gb
     ,dc.local_total_space_gb
     ,dc.disk_type   
     ,dc.os_name_ver
,dc2.device_name                   hypervisor
     ,dc2.building_address
     ,dc.all_ips
from view_dbb_compute_v2 dc
left join view_dbb_compute_v2 dc2
on dc2.virtual_host_device_fk  = dc.device_fk
where lower(dc.device_type) = 'virtual'
     and dc.is_network_device = 'No'
     and dc.is_container = 'No'
order by dc.device_name
```

**NOTES**

Gives the ability to manage your assets to see if you have any missing data.
