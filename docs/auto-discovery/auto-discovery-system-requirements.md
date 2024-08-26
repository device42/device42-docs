---
title: "Autodiscovery System Requirements"
sidebar_position: 6
---

## General Discovery System Requirements

:::caution
Do not set up an autodiscovery scan using critical production account credentials! Please create a separate, dedicated account to use only for discovery.

Account lock-out could result in an otherwise avoidable outage depending on your permissions and configured password policies. You as a customer are responsible for any such behavior.
:::

- Create Users with required access.
- Identify IP discovery scope (ranges of interest).
    _If you are not using IPv6, it is advisable to choose the 'Ignore IPv6' option when configuring discovery jobs._
- Minimum system resource configuration for the Device42 appliance: 4 vCPUs and 8GB memory. Ensure that a _minimum_ 1GBPS network connection is present, that there is a dedicated resource pool for the Device42 VM, and that there are no resource contention issues. Placing the Device42 Appliance's (Virtual Machine) VHD on SSD is ideal, but is not required.
- WinRM Windows discovery can be run from the main appliance or a Remote Collector. Deploy remote collector(s) to desired network segments and select them when configuring your discovery jobs where appropriate, if desired.
- To _(optionally)_ exclude known service port ranges from discovery, proceed to **Tools > Settings > Global Settings > Win/*nix Exclusions** and add your desired exclusions to the Autodiscovery application. This will limit the scope and volume of data that is discovered, helping to reduce noise and overhead while shortening the overall discovery time.
- Ignore certain IP and MAC addresses for all jobs by creating an exclusion for it in **Tools > Settings > Global Settings > Win/*nix Exclusions**. The device(s) will still be discovered, but its are details dropped from ingestion.

The following are prerequisites and other general requirements and guidelines for successful discovery and optimum performance:

- Create users with the required access.
- Identify the IP discovery scope (ranges) of interest. 
- If you aren't using IPv6, it's advisable to choose the "Ignore IPv6" option when configuring discovery jobs.
- The minimum system resource configuration for the Device42 appliance is 4 CPUs and 8 GB of memory. 
- Ensure a 1 Gbps _minimum_ network connection, a dedicated resource pool for the Device42 VM, and that there are no resource contention issues. 
- Placing the Device42 Appliance's (Virtual Machine) VHD on an SSD is ideal but not required.
- WinRM Windows discovery can be run from the Main Appliance or a Remote Collector. Deploy remote collector(s) to the desired network segments and select them when configuring your discovery jobs where appropriate.
- To _(optionally)_ exclude known service port ranges from discovery, go to **Tools > Settings > Global Settings > Win/*nix Exclusions** and add your exclusions to the autodiscovery application. This limits the scope and volume of data that is discovered, helping to reduce noise and overhead while shortening the overall discovery time.
- Ignore certain IP and MAC addresses for all jobs by creating an exclusion for it under **Tools > Settings > Global Settings > Win/*nix Exclusions**. The devices will still be discovered, but the details are dropped from ingestion.

See detailed permission information for OS platforms:

- Windows and WMI namespace: [Windows and HyperV Discovery](/auto-discovery/windows-and-hyper-v-auto-discovery.mdx) page.
- Linux and Sudo usage details: [Linux and Unix Server Discovery](/auto-discovery/linux-unix-server-auto-discovery.mdx) page.

Contact [support@device42.com](mailto:support@device42.com) with any questions regarding specific privilege level requirements for WMI Namespaces and *nix commands run with or without Sudo.

## Ports and Protocols Used By Discovery

Device42 uses the following ports and protocols for discovery. Ensure the appropriate ones are allowed through main and target machine firewalls for proper discovery functionality:

- **UDP/161 - Device42 Appliance**
    - Networking (SNMP)
    - Blade Systems (SNMP)
    - Power (SNMP)
- **TCP/443 - Device42 Appliance and Communication between RC and Main Appliance**
    - vServers (VMware, OVirt/Redhat, Citrix/Xen)
    - Cisco UCS Manager
- **TCP/22 - Standalone Discovery Tool and Device42 Appliance**
    - SSH for *nix and select hypervisor discovery
    - KVM/libvirt
- **ICMP - Device42 Appliance or Standalone Discovery Tool**
- **UDP/623 - Device42 Appliance - IPMI**
- **TCP/389 or TCP/636 - Device42 Appliance**
    - Active Directory or AD SSL
    - LDAP: Default is port 389 or 636 for LDAPs or LDAPs with SSL
- **TCP/135 and 445 - Standalone Discovery Tool - WMI**
    - Random ephemeral TCP port(s) between 1024 and 65535 may also be used
- **TCP/5985 and 5986 - Device42 Appliance - WinRM HTTP & HTTPS Discovery**
