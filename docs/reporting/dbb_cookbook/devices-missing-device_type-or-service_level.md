---
title: "Devices Missing Device_Type or Service_Level"
sidebar_position: 13
---

Inventory of incomplete device discovery.

```sql
select
     dc.device_fk
     ,dc.device_name
     ,dc.service_level
     ,dc.device_type
     ,dc.device_subtype
     ,dc.virtual_subtype
     ,dc.cloud_service_provider
     ,dc.cloud_service_name
     ,dc.device_serial
     ,dc.device_type
from view_dbb_compute_v2 dc
where lower(dc.service_level) in (null, 'missing', 'tbd')
     or lower(dc.device_type) in (null, 'unknown')
```

**NOTES**

Service\_Level is set by the customer and not directly discovered.
