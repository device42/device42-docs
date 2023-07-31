---
title: "Storage Arrays Autodiscovery"
sidebar_position: 28
---

## Storage Arrays Autodiscovery

Storage Arrays are identified and returned by Device42 Storage Arrays autodiscovery. Within Storage Discovery, you will find resource details, related resources, and topology maps. Click the _Platform_ drop down to view and select the available Storage Array type for a discovery job.

![](/assets/images/SA-AD-4-platform-dropdown-250x101.png)

**\* Note:** The _Preview_ tag in the Platform list indicates that these arrays have not been fully tested, due to lack of access to testing equipment, and full functionality cannot be guaranteed at this time. Additional versions and configurations may or may not be discovered but we cannot guarantee support at this time, but will update the list as more testing is completed.

## Additional Storage Array Autodiscovery Information

Use the links below for additional information about access protocols and minimum permissions for storage array autodiscovery.

### Dell/EMC Arrays

[See Dell/EMC Autodiscovery](auto-discovery/storage_arrays_autodiscovery/dell-emc-autodiscovery.md) for more information about the following storage arrays:

- Dell Compellent
- VNX or VMAX using EMC SMIS Providor
- EMC Data Domain
- EMC Unity
- EMC Unity
- Isilon

### HP Arrays

[See HP Autodiscovery](auto-discovery/storage_arrays_autodiscovery/hp-autodiscovery.md) for more information about the following storage arrays:

- HP Nimble
- HPE StoreEasy
- HP 3PAR

### IBM Arrays

[See IBM Autodiscovery](auto-discovery/storage_arrays_autodiscovery/ibm-autodiscovery.md) for more information about the following storage array:

- IBM V7000/Storwize

### All Other Storage Arrays

[See All Other Storage Autodiscovery](auto-discovery/storage_arrays_autodiscovery/all-other-storage-autodiscovery.md) for more information about the following storage arrays:

- Infinidat
- Netapp Filers
- Nutanix
- Oracle ZFS
- Pure Storage

## Add a Storage Array Autodiscovery Job

Select _Discovery > Storage Arrays_ in the Device42 menu to display the Storage Arrays discovery list page, and then click _Add Storage Arrays for Autodiscovery_ to create a new discovery job.  Device42 displays the Add Storage Arrays for Autodiscovery page.  Enter or select the information to create the autodiscovery job.

**Job Name** – Enter a unique name for the job.

**Remote Collector** – Select the RC to use for the job. An RC is **required** for Storage Arrays discovery.

**Platform** – Select the storage array platform  or vendor.

![](/assets/images/SA-AD-3-add-page-250x100.png)

**Discovery Targets** – FQDN or IPs of the servers or cidr or ranges.

**Target Type** – Select Filer, DFM, or OCUM (_displayed depending on Platform selected_).

**Protocol Type** – Select https, http, or insecure-https (_displayed_ _depending on Platform selected_).

**Enable Performance Data Collection** – Yes/No.

**Performance Data Sampling Interval** – Select the time interval for data sampling (if selected).

**Action for Storage Array not found** – Choose how to handle Storage Array not found in subsequent discovery: Keep Array Resource or Delete Array Resource.

**Discovery Target(s) Credential(s)** – Enter or select the username and password for the discovery job.

Use the Auto Discovery Schedule section of the page to schedule when your job runs. You can create multiple schedules for each job. Select the days of the week and time to run the job.  When you are done, click _Save_ to save the discovery job. Device42 adds the job to the Storage Arrays discovery list page. You can run the job immediately from this page. 

A note on autodiscovery scheduling behavior: newly created jobs will not run on the first day they are created, to prevent an unintended large amount of jobs from running initially. If you would like to run a job after its initial creation, simply select the "Run Now" button next to the job after creation.
