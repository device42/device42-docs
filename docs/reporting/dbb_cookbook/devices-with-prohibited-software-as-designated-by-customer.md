---
title: "Devices with Prohibited Software (as designated by customer)"
sidebar_position: 28
---

Compute Devices that may not conform to compliance rules.

```sql
select
     ds.device_fk
     ,ds.device_name
     ,ds.device_type
     ,ds.serial_number
     ,ds.asset_number
     ,ds.uuid
     ,ds.device_service_level
     ,ds.tags
     ,ds.all_software
     ,ds.all_software_types
from view_dbb_security_v2  ds
where lower(ds.all_software_types) like '%prohibited%'
order by ds.device_name
```

**NOTES**

Opportunities for cleanup to comply with the business rules.
