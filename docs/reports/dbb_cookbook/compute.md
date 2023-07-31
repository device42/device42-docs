---
title: "Compute"
sidebar_position: 8
---

**Compute Data Building Blocks**

- [Compute Devices](reports/dbb_cookbook/compute-devices.md)
- [Device Count by Device Type](reports/dbb_cookbook/device-count-by-device-type.md)
- [Device Count by Service Level](reports/dbb_cookbook/device-count-by-service-level.md)
- [Device to Rack Inventory](reports/dbb_cookbook/device-to-rack-inventory.md)
- [Devices Missing Device_Type or Service_Level](reports/dbb_cookbook/devices-missing-device_type-or-service_level.md)
- [Physical Device Inventory](reports/dbb_cookbook/physical-device-inventory.md)
- [Physical Devices by Customer Department](reports/dbb_cookbook/physical-devices-by-customer-department.md)
- [Physical Devices Without Hardware Model](reports/dbb_cookbook/physical-devices-without-hardware-model.md)
- [Physical Inventory by Manufacturer](reports/dbb_cookbook/physical-inventory-by-manufacturer.md)
- [VM Density](reports/dbb_cookbook/vm-density.md)
- [VM Devices](reports/dbb_cookbook/vm-devices.md)
- [VM Inventory](reports/dbb_cookbook/vm-inventory.md)

 

Data Building Blocks are materialized database views composed with customer-specific use cases in mind to allow users to quickly create reports with little-to-no extra view joining required. These views are refreshed on a nightly basis. Because of the requirements for this type of reporting, it is necessary for the user to have access to all the Device42 data. A special privilege has been created called _Data Building Blocks_ for this purpose and must be granted for a user to have access to the DBB views. The reason for this is to simplify the access to data for reporting and insight needs.
