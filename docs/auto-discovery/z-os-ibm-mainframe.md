---
title: "IBM z/OS (Mainframe)"
sidebar_position: 14
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

:::tip
Are you looking to discover an IBM i/AS400 midrange system? [Click here for the IBM i/AS400 docs page](ibm-i-as400.md).
:::

As of v15+, Device42 can discover IBM mainframes running the z/OS operating system, and like most discovery jobs, z/OS discovery can be scheduled to run automatically.

## IBM z/OS Discovery Job Prerequisites and Information

- **License requirement**: IBM z/OS discovery requires a license.
- **Compatibility**: IBM z/OS discovery works for almost all z/OS systems.
- **Discovered details**: z/OS discovery jobs currently finds: 
  - Device name
  - IP addresses _(both v4/v6)_
  - Machine information _(serial, capacity, manufacturer, device name)_
  - OS version
  - Hardware _(CEC units)_
  - Services attached to service ports
- **FTP configuration**: Discovery happens via FTP on port 21. FTP **must** be enabled and connections accepted for an IBM z/OS discovery to succeed.

    Our FTP discovery expects to use the default IBM Translation tables – if you encounter an issue with this, please contact Device42 Support at [https://support.device42.com/](https://support.device42.com/).

- **Netstat communication**: Device42 requires access to the TSO `NETSTAT CONN` command.
- **Permission**: Collecting disk information requires access to the `STGADMIN.IDC.DCOLLECT` profile.
- No special security rights are required. A standard TSO logon is sufficient.

Discovery is a non-intrusive process as no files are created on the z/OS system and No software is installed on the z/OS system.

One discovery job must be created **per job card**. If more than one instance shares the same job card as configured, they can be discovered in the same job, but this is often not the case.

## IBM z/OS Discovery Updates

Device42 has enhanced IBM z/OS discovery with additional capabilities and device results.

- **Processor information**: The number of IBM z Integrated Information Processors (zIIPs) and IBM z Application Assistance Processors (zAAPs) are recorded as components on the device record.
- **Disk Space details**: Discovery now captures the number of drives, their capacity, and space used (in TB) come in as mount points on the device. Note: Access to the `STGADMIN.IDC.DCOLLECT` profile is required to collect disk information.
- **User and connection data**: Information on current TSO users, TN3270 connections, and GCP processor capacity in MIPS are added as extra fields on the device record.
- **Database and queue managers**: Data of executing DB Managers for DB2 and IMS/IBM MQ Managers comes in as **Services**.

## Create an IBM z/OS Mainframe Discovery Job

Navigate to **Discovery > HyperVisors / \*nix / Windows** and click **+  Add Hypervisors/\*nix/win for Autodiscovery** to create a new discovery job. Select **IBM z/OS** for the **Platform**. Add only one discovery job per IBM z/OS **Job Card**.

<ThemedImage
  alt="Add IBM z/OS job"
  sources={{
    light: useBaseUrl('/assets/images/z-os-ibm-mainframe/add-new-z-os-job-light.png'),
    dark: useBaseUrl('/assets/images/z-os-ibm-mainframe/add-new-z-os-job-dark.png'),
  }}
/> 


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

For information on other jobs that can be run via this screen, see the dedicated [Linux / Unix Discovery Docs page](/auto-discovery/linux-unix-server-auto-discovery.mdx). Note that discovery jobs for the [IBM mid-range AS/400 platform](ibm-i-as400.md) can also be created via this job screen.

## Run Now or Schedule


Select **Add another Auto Discovery Schedule** when editing the job to create a run schedule for the job.

<ThemedImage
  alt="Add IBM z/OS job schedule"
  sources={{
    light: useBaseUrl('/assets/images/z-os-ibm-mainframe/z-os-schedule-light.png'),
    dark: useBaseUrl('/assets/images/z-os-ibm-mainframe/z-os-schedule-dark.png'),
  }}
/> 

Select **Run Now** from the list page under **Discovery > HyperVisors / \*nix / Windows** to run the job right away.

<ThemedImage
  alt="Run now"
  sources={{
    light: useBaseUrl('/assets/images/z-os-ibm-mainframe/run-z-os-now-light.png'),
    dark: useBaseUrl('/assets/images/z-os-ibm-mainframe/run-z-os-now-dark.png'),
  }}
/> 

Newly created jobs will not run on the first day they are created to prevent an unintentionally large amount of jobs from running initially. If you would like to run a job after its initial creation, select the **Run Now** button next to the job after creation.
