---
title: "Security"
sidebar_position: 21
---

**Security Data Building Blocks**

- [Devices Accessed by External IPs](https://docs.device42.com/dbb-cookbook/security/devices-accessed-by-external-ips/)
- [Devices Possibly Containing PII That Have Public IPs](https://docs.device42.com/dbb-cookbook/security/devices-possibly-containing-pii-that-have-public-ips/)
- [Devices Using Commonly Exploited Ports](https://docs.device42.com/dbb-cookbook/security/devices-using-commonly-exploited-ports/)
- [Devices with Mismatch Between Prod and Non-Prod Environments](https://docs.device42.com/dbb-cookbook/security/devices-with-mismatch-between-prod-and-non-prod-environments/)
- [Devices with No OSs](https://docs.device42.com/dbb-cookbook/security/devices-with-no-oss/)
- [Devices with OS but No Software](https://docs.device42.com/dbb-cookbook/security/devices-with-os-but-no-software/)
- [Devices with Prohibited Software (as designated by customer)](https://docs.device42.com/dbb-cookbook/security/devices-with-prohibited-software-as-designated-by-customer/)
- [Network Information for IPs Without Attached Devices](https://docs.device42.com/dbb-cookbook/security/network-information-for-ips-without-attached-devices/)

 

Data Building Blocks are materialized database views composed with customer-specific use cases in mind to allow users to quickly create reports with little-to-no extra view joining required. These views are refreshed on a nightly basis. Because of the requirements for this type of reporting, it is necessary for the user to have access to all the Device42 data. A special privilege has been created called _Data Building Blocks_ for this purpose and must be granted for a user to have access to the DBB views. The reason for this is to simplify the access to data for reporting and insight needs.
