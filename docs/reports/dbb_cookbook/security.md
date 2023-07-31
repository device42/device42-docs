---
title: "Security"
sidebar_position: 21
---

**Security Data Building Blocks**

- [Devices Accessed by External IPs](reports/dbb_cookbook/devices-accessed-by-external-ips.md)
- [Devices Possibly Containing PII That Have Public IPs](reports/dbb_cookbook/devices-possibly-containing-pii-that-have-public-ips.md)
- [Devices Using Commonly Exploited Ports](reports/dbb_cookbook/devices-using-commonly-exploited-ports.md)
- [Devices with Mismatch Between Prod and Non-Prod Environments](reports/dbb_cookbook/devices-with-mismatch-between-prod-and-non-prod-environments.md)
- [Devices with No OSs](reports/dbb_cookbook/devices-with-no-oss.md)
- [Devices with OS but No Software](reports/dbb_cookbook/devices-with-os-but-no-software.md)
- [Devices with Prohibited Software (as designated by customer)](reports/dbb_cookbook/devices-with-prohibited-software-as-designated-by-customer.md)
- [Network Information for IPs Without Attached Devices](reports/dbb_cookbook/network-information-for-ips-without-attached-devices.md)

 

Data Building Blocks are materialized database views composed with customer-specific use cases in mind to allow users to quickly create reports with little-to-no extra view joining required. These views are refreshed on a nightly basis. Because of the requirements for this type of reporting, it is necessary for the user to have access to all the Device42 data. A special privilege has been created called _Data Building Blocks_ for this purpose and must be granted for a user to have access to the DBB views. The reason for this is to simplify the access to data for reporting and insight needs.
