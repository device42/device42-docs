---
title: "Compute"
sidebar_position: 8
---

**Compute Data Building Blocks**

- [Compute Devices](https://docs.device42.com/dbb-cookbook/compute/compute-devices/)
- [Device Count by Device Type](https://docs.device42.com/dbb-cookbook/compute/device-count-by-device-type/)
- [Device Count by Service Level](https://docs.device42.com/dbb-cookbook/compute/device-count-by-service-level/)
- [Device to Rack Inventory](https://docs.device42.com/dbb-cookbook/compute/device-to-rack-inventory/)
- [Devices Missing Device_Type or Service_Level](https://docs.device42.com/dbb-cookbook/compute/devices-missing-device_type-or-service_level/)
- [Physical Device Inventory](https://docs.device42.com/dbb-cookbook/compute/physical-device-inventory/)
- [Physical Devices by Customer Department](https://docs.device42.com/dbb-cookbook/compute/physical-devices-by-customer-department/)
- [Physical Devices Without Hardware Model](https://docs.device42.com/dbb-cookbook/compute/physical-devices-without-hardware-model/)
- [Physical Inventory by Manufacturer](https://docs.device42.com/dbb-cookbook/compute/physical-inventory-by-manufacturer/)
- [VM Density](https://docs.device42.com/dbb-cookbook/compute/vm-density/)
- [VM Devices](https://docs.device42.com/dbb-cookbook/compute/vm-devices/)
- [VM Inventory](https://docs.device42.com/dbb-cookbook/compute/vm-inventory/)

 

Data Building Blocks are materialized database views composed with customer-specific use cases in mind to allow users to quickly create reports with little-to-no extra view joining required. These views are refreshed on a nightly basis. Because of the requirements for this type of reporting, it is necessary for the user to have access to all the Device42 data. A special privilege has been created called _Data Building Blocks_ for this purpose and must be granted for a user to have access to the DBB views. The reason for this is to simplify the access to data for reporting and insight needs.
