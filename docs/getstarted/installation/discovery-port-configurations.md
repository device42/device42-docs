---
title: "Discovery Port Configurations"
sidebar_position: 3
---

Below is a complete reference list of all ports that may be used to access targets in discovery and their directionality.

| Source                        | Default Port       | Protocol  | Directionality | Reason                                     |
|-------------------------------|--------------------|-----------|----------------|---------------------------------------------|
| Main Appliance (MA)           | 389 (TCP/UDP)<br/>636 (TCP/UDP)      | LDAP<br/>LDAPS      | MA to targets  | Active Directory Sync                      |
| Remote Collector(s) (RC)      | 53 (TCP)           | DNS       | Device42 to targets | DNS Zone Discovery                 |
| Remote Collector(s) (RC)      | 623 (UDP)          | IPMI      | RC to targets  | IPMI based discovery of management interfaces |
| Remote Collector(s) (RC)      | 22 (TCP)           | SSH       | RC to targets  | SSH based discovery of Linux and Unix systems |
| Remote Collector(s) (RC)      | 161 (UDP)          | SNMP      | RC to targets  | SNMP discovery of network equipment and connections, and any management interfaces |
| Remote Collector(s) (RC)      | 443 (TCP)          | APIs<br/>SMIS      | RC to targets  | Hypervisor, Cloud and Cisco ACI/UCS Discovery |
| Remote Collector(s) (RC)      | 80/443 (TCP)<br/>5988/5989 (TCP)       | APIs      | RC to targets  | Storage Discovery                          |
| Windows Discovery Service (WDS)| 135 (TCP)<br/>137 (UDP)<br/>139 (TCP)<br/>445 (TCP)<br/>1024-65535 (TCP)          | WMI       | WDS to targets | WMI based discovery of Windows infrastructure |
| Windows Discovery Service (WDS)| 5985 (TCP)<br/>5986 (TCP) | WinRM | WDS to targets | WinRM discovery of Windows infrastructure |
