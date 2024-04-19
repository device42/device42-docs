---
title: "Autodiscovery System Requirements"
sidebar_position: 6
---

## Getting Started - General Discovery System Requirements

The following are pre-requisites and other general requirements and guidelines for successful discovery and optimum performance:

- Create Users with required access.
:::warning
  Please do _not_ set up an autodiscovery scan using critical production account credentials! Please create a separate, dedicated account to use _only_ for discovery. You as a customer are responsible for any such behavior.
:::
  _Depending on permissions granted and your configured password policies, account lock-out could result in an otherwise completely avoidable outage. You, the customer, are responsible for any such behavior that might result if you choose to ignore this requirement._
- Identify IP discovery scope (ranges of interest).
    _If you are not using IPv6, it is advisable to choose the 'Ignore IPv6' option when configuring discovery jobs._
- Minimum system resource configuration for the Device42 appliance: 4 vCPUs and 8GB memory. Ensure that a _minimum_ 1GBPS network connection is present, that there is a dedicated resource pool for the Device42 VM, and that there are no resource contention issues. Placing the Device42 Appliance's (Virtual Machine) VHD on SSD is ideal, but is not required.
- WinRM Windows discovery can be run from the main appliance or a Remote Collector. Deploy remote collector(s) to desired network segments and select them when configuring your discovery jobs where appropriate, if desired.
- To _(optionally)_ exclude known service port ranges from discovery, proceed to **Tools > Settings > Global Settings > Win/*nix Exclusions** and add your desired exclusions to the Autodiscovery application. This will limit the scope and volume of data that is discovered, helping to reduce noise and overhead while shortening the overall discovery time.
- Ignore certain IP and MAC addresses for all jobs by creating an exclusion for it in **Tools > Settings > Global Settings > Win/*nix Exclusions**. The device(s) will still be discovered, but its are details dropped from ingestion.

Detailed permission info:

- Windows & WMI namespace: [Windows & HyperV Discovery](/auto-discovery/windows-and-hyper-v-auto-discovery.mdx) page
- Linux / sudo usage info: [Linux & Unix Server Discovery](/auto-discovery/linux-unix-server-auto-discovery.mdx) page

Contact support@device42.com with any further questions regarding specific privilege level requirements for WMI Namespaces, and \*nix commands run with/without sudo.

## Ports & Protocols Used By Discovery

Device42 will utilize the following ports and protocols for discovery. Ensure that the appropriate ones are allowed through main and target machine firewalls for proper discovery functionality:

- **UDP/161 - Device42 Appliance**
    - Networking (SNMP)
    - Blade Systems (SNMP)
    - Power (SNMP)
- **TCP/443 - Device42 Appliance & Communication between RC & Main Appliance**
    - vServers (VMware, OVirt/Redhat, Citrix/Xen)
    - Cisco UCS Manager
- **TCP/22 - Standalone Discovery Tool & Device42 Appliance**
    - SSH - For \*nix & select hypervisor discovery
    - KVM/libvirt
- **ICMP - Device42 Appliance or Standalone Discovery Tool**
- **UDP/623 - Device42 Appliance - IPMI**
- **TCP/389 or TCP/636 - Device42 Appliance**
    - Active Directory or AD SSL
    - LDAP: Default is port 389 or 636 for LDAPs or LDAP with SSL
- **TCP/135 & 445 - Standalone Discovery Tool - WMI**
    - Random ephemeral TCP port(s) between 1024 and 65535 may also be utilized
- **TCP/5985 & 5986 - Device42 Appliance - WinRM HTTP & HTTPS Discovery**
