---
title: "IBM z/OS (Mainframe)"
sidebar_position: 14
---

## IBM z/OS Discovery Updates

Device42 has enhanced z/OS discovery with additional capabilities and device results.

- Inventory data that includes: device name, IP address, MAC address, hardware details, OS information, vendor/manufacturer, capacity, services (attached to service ports),
- The number of zIIPs (IBM z Integrated Information Processors) and number of zAAPs (IBM z Application Assistance Processors) – come in as parts on the device record.
- Disk Space – the number of drives, their capacity and space used (in TB) come in as mount points on the device. (Note that collecting disk information requires access to the STGADMIN.IDC.DCOLLECT profile.)
- Current TSO Users / Current TN3270 Connections / GCP Processor Capacity in MIPS – come in as device extra fields.
- DB Managers for DB2 and IMS/IBM MQ Managers – a list of MQ Managers currently executing. This data comes in as services.

## IBM z/OS Discovery Job Prerequisites & Information

- IBM z/OS discovery **requires a license**
- IBM z/OS discovery works for almost all z/OS systems.
- z/OS discovery jobs currently find: IP addresses _(both v4/v6)_, machine information _(serial, capacity, manufacturer, device name)_, version of OS, Hardware _(CEC units)_, and service ports.
- z/OS mainframe discovery happens via FTP, port 21. That said, FTP **must** be enabled and connections accepted for an IBM z/OS discovery to succeed.
- Our FTP discovery expects to use the default IBM Translation tables – if you encounter an issue with this, please contact Device42 Support at [https://support.device42.com/](https://support.device42.com/).
- For Netstat communication, Device42 requires access to the TSO NETSTAT CONN command.
- No files are created on the z/OS system.
- No software is installed on the z/OS system.
- No special security rights are required – a 'normal' TSO logon is required.
- Collecting disk information requires access to the STGADMIN.IDC.DCOLLECT profile.
- One discovery job must be created _**per job card**_. If more than one instance shares the same job card as configured, they can be discovered in the same job, but this is often not the case.

## Creating an IBM z/OS Mainframe Discovery Job

As of v15+, Device42 can discover IBM mainframes running the z/OS operating system, and like most discovery jobs, z/OS discovery can be scheduled to run automatically. IBM z/OS is discovered via the main menu, _Discovery > HyperVisors / \*nix / Windows_. Create a new discovery job, selecting IBM z/OS as your ‘Platform’: 

![](/assets/images/D42-25427_z-OS-AD-page.png)

## IBM z/OS Discovery Options Explained

**Job name** A name of your choosing to identify your IBM z/OS autodiscovery job.  
**Remote Collector:** Optionally specify a remote collector from which to run discovery \[instead of from the main appliance\].  
**Job Debug level**: Turn debug on/off.  
**Platform:** Select “IBM z/OS” for mainframe discovery.  
**Server:** Specify the FQDN or IP address of the IBM z/OS target to discover. If using FQDN, ensure Device42 is setup to resolve DNS _(VM console, option 1)._  
**Port:** IBM z/OS discovery uses FTP port 21 by default. Only change this if your admin has configured a custom listening port.  
**Username & password:** Specify a username with permissions on your z/OS mainframe — _NOT case sensitive on z/OS_.  
**ADM Sampling:** Choose your ADM _(Application Dependency Mapping_) data collection interval.  
**Discover Using FTPS**: Use FTPS for the discovery job.  
**Job Card:** Input the Job Card specific to this discovery job – you might need to contact your administrator to get this information; one job card is required per job, and a new z/OS discovery job must be created for each additional job card.  
**Alternate zOS TCP Command:** A parameter you can use to specify the TCP command used in discovery.  
**Autodiscovery Schedule:** You can schedule z/OS discovery jobs to run automatically, as often as you’d like.  
**Job Status:** Displays the status of the last discovery or task run.  
**Exclusions:** Input any addresses/FQDNs to exclude from this discovery job.  
**Naming Options**: Set device name per the job’s server field and add aliases as non-authoritative.  
**Host Discovery**: Options for host OS name, serial number, UUID, etc.  
**Software and Applications**: Options to discover software and services.  
**Miscellaneous**: Select service level, service customer, device VRF group, and tags

For information on other jobs that can be run via this screen, see the dedicated [Linux / Unix Discovery Docs page](https://docs.device42.com/auto-discovery/linux-unix-server-auto-discovery/). Note that discovery jobs for the [IBM mid-range AS/400 platform](https://docs.device42.com/auto-discovery/ibm-i-as400/) can also be created via this job screen!

## Run Now or Schedule

![](/assets/images/image-700x115.png)

Select **Run Now** from the list page to run the job right away.

![](/assets/images/AD_Blade-Discovery-Run-Schedule.png)

Select **Add another Auto Discovery Schedule** when editing the job to create a run schedule for the job.

A note on autodiscovery scheduling behavior: newly created jobs will not run on the first day they are created, to prevent an unintended large amount of jobs from running initially. If you would like to run a job after its initial creation, simply select the "Run Now" button next to the job after creation.
