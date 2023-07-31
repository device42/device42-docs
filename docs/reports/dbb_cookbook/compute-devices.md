---
title: "Compute Devices"
sidebar_position: 9
---

Detailed Inventory of Compute Devices

```sql
select
       dc.device_fk
       ,dc.last_discovered
       ,dc.device_name
       ,dc.in_service
       ,dc.service_level
       ,dc.device_type
       ,dc.device_subtype
       ,dc.virtual_subtype 
       ,dc.device_serial
       ,dc.virtual_host
       ,dc.network_device
       ,dc.os_architecture
       ,dc.total_cpus
       ,dc.core_per_cpu
       ,dc.cpu_speed
       ,dc.total_cores
       ,dc.is_hyperthreaded
       ,round((dc.ram_mb/1024)::numeric ,0)  ram_gb
       ,dc.os_vendor
       ,dc.os_category   
       ,dc.os_name
       ,dc.os_version
       ,dc.os_version_number
       ,dc.os_end_of_life
       ,dc.os_end_of_support
       ,dc.manufacturer
       ,dc.hardware_model
       ,dc.asset_number
       ,dc.software_discovered
       ,dc.services_discovered
       ,dc.application_components_discovered
       ,dc.local_disk_count
       ,dc.mounts_discovered
       ,dc.number_ip_addresses_discovered
       ,dc.parts_discovered
       ,dc.parts_count
       ,dc.bios_version
       ,dc.bios_revision
       ,dc.bios_release_date
       ,dc.storage_room
       ,dc.building_name
       ,dc.building_address
       ,dc.room_name
       ,dc.row_name
       ,dc.rack_name
       ,dc.size_ru
       ,dc.network_shares
       ,dc.mount_points
       ,dc.account
       ,dc.cloud_service_provider
       ,dc.cloud_service_name
       ,dc.cloud_instance_id
       ,dc.cloud_instance_name
       ,dc.cloud_instance_type
       ,dc.cloud_instance_status
       ,dc.cloud_location
       ,dc.cloud_notes
       ,dc.first_po_date
       ,dc.last_po_date
       ,dc.all_po_costs
       ,dc.all_line_item_costs
       ,dc.all_po_numbers
       ,dc.all_cost_centers
       ,dc.all_cost_center_descriptions
       ,dc.all_ips
       ,dc.all_labels
       ,dc.dns_A_records
       ,dc.dns_AAAA_records
       ,dc.local_used_space_gb
       ,dc.remote_used_space_gb   
       ,dc.local_total_space_gb
       ,dc.remote_total_space_gb
       ,dc.local_free_space_gb
       ,dc.remote_free_space_gb
       ,dc.cpu_model
       ,dc.cpu_manufacturer
 from view_dbb_compute_v2 dc
 order by device_name
```

**NOTES**

Gives the ability to manage your assets to see if you have any missing data.
