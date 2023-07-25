---
title: "IBM i/AS400 (Midrange)"
sidebar_position: 13
---

_...looking to discover an [IBM z/OS-powered mainframe? Click here for the z/OS docs page, instead.](z-os-ibm-mainframe)_

## IBM i/AS400 Discovery Updates

Device42 has enhanced i/AS400 discovery with additional capabilities and device results.

- FTP support – this allows Device42 to pull in additional discovery details and no longer rely on the Telnet method of discovery.
- Software discovery – this supports all licensed software that IBM registers as installed, and if you use FTP-based discovery, it includes software versions as well. This encompasses different programming languages installed, datastore information, and additional dependencies or tools installed.
- Disk Space discovery – gets the ASPs (Auxiliary Storage Pools) of the machine (capacity and space used) and stores the disk information as mount points attached to the device.
- Tape Drives discovery – these now come in as mount points with tape drive name and model number.
- Lines of code on the machine discovery – the total lines of code, including system files and user files. This information is stored in the extra fields DOQL view in Device42.  _(Note that this can increase discovery time depending on the number of  lines of code.)_
- Improved Service Port collection – to match services to specific jobs on the machine.

## Creating an IBM i/AS400 \[mid-range\] Discovery Job

To add a new IBM i/AS400 discovery job, head to the main menu and select _Discovery > HyperVisors / \*nix / Windows_. Create a new discovery job, selecting IBM i/AS400 as your ‘Platform’: 

![](/assets/images/AD_IBM-AS400-Job.png)

**\*Note: Please do _not_ set up an autodiscovery / scan using critical \[production\] account credentials! Please create a separate, dedicated account to use _only_ for discovery.\*** _Doing so, depending on permissions granted & configured password policies could result in account lock-out, therefore causing an otherwise completely avoidable outage._

## IBM System i/AS400 Discovery Options

**Job name** A name of your choosing to identify your IBM i/AS400 autodiscovery job **Remote Collector:** Optionally specify a remote collector from which to run discovery \[instead of from the main appliance\] **Platform:** Select "IBM i/AS400" **Discovery Target(s):** Specify the FQDN or IP address of the IBM i/AS400 to discover. If using FQDN, ensure Device42 is setup to resolve DNS _(VM console, option 1)_ **Port:** IBM i/AS400 discovery uses port 23 by default. Only change if you have configured a custom listening port configuration. **Username & password:** Specify a username with permissions on your IBM i / AS 400 **Debug Level:** Turn debug on for extra troubleshooting output - useful for support tickets. **ADM Sampling Interval:** Off or interval in minutes or hours. **Discover Using FTP**: Run the discovery through FTP instead of Telnet. **Timeout**: The maximum time in seconds per command when performing a Telnet discovery. If there are connection issues or slow loading time, increasing the Timeout may yield better results. 

![](/assets/images/WEB-343_AS400-FTP-Timeout-Options.png) 

**Last Job Status:** Displays the status of the last discovery or task run. **Job Run Report:** This will record what has changed in the last task. **Schedule for autodiscovery:** You can schedule the discovery job to run automatically. 

![](/assets/images/AD_IBM-AS400-Job-Options.png)

**Discover Lines of Code**: If selected under the _Software and Applications_ section, this will run a script to collect the total lines of code on the machine. If used, we recommend increasing the max timeout of the discovery to 5 minutes or more. 

![](/assets/images/WEB-343_AS400-Discover-Code-Option.png)

### i/AS400 FTP Discovery

**How it works:**

- Using FTP, D42 creates a directory on the targeted server named D42TEST.
- D42 then uploads our CL/RPG Programs to the server, transfer them to the QTEMP folder, and run them.
- After that has completed, D42 transfers the output files back to D42TEST and parses them on the remote collector.
- Finally, D42 removes all files placed or created on the server and disconnects.

**Advantages over Telnet Discovery:**

- FTP does not rely on anything other than the permissions to place/delete files. With Telnet, customization could disrupt the flow and end the discovery.
- Less total communication with the server. This can result in much faster run times if there is any slowness on the targeted server or the network.

**FTP Discovery Notes:** Due to limitations, D42 discovery needs to be able to create the directory D42TEST. Only the items that were placed or created during discovery will be removed - this means that if an unexpected file is in that directory, the discovery will most likely fail. If this is the case, please work with your AS400 Server administrator to remove the directory.

## Setting IBM i / AS400 Permissions

IBMi/AS400 permissions requirements are configured via the following command. **Have your AS400 admin run the following:**

```
CRTUSRPRF USRPRF($USERNAME$) PASSWORD($YOURPASSWORD$) USRCLS(\*SECOFR) SPCAUT(\*ALLOBJ \*JOBCTL)
```

**In the above IBM i / AS400 command:** `$USERNAME$` = The chosen profile name being set. Substitute '$USERNAME$' in the above command with the profile name of your choice. `$YOURPASSWORD$` = The password you are setting. Substitute `$YOURPASSWORD$` with a strong password of your choosing. Note: `In USRCLS(*SECOFR) =   [*SECOFR]` may be substituted with `[*USER]` or `[*PGMR]` if desired – however, if you choose `[*USER]`, this option will prevent software from being discovered. For complete discovery access, choose an option higher than `[*USER]`.

- For Telnet discovery, please ensure that the created user has the default initial menu (`MAIN`). Customized menus may cause issues when running the discovery.

## AS400 Autodiscovery Details

### What information does discovery gather on the AS/400 midrange compute platform?

- **Hardware Inventory** - including hostname(s), IP & MAC addresses, hardware specifications, OS information
- **Dependencies**
- **Services**
- **Service connections**

_Sample IBMi/AS400 discovery output:_ ![IBMi - AS400 discovery output sample data](/assets/images/IBMi-as400_sample_output.png)

### AS/400 Limitations

AS400 support does _not_ currently include:

- Individual application discovery
- Parts support

**Note on AS/400 Discovery:** AS400 discovery has been verified and functionality tested with IBM i / AS400 operating system deployments configured with the Spanish language setting as of Device42 v15.10.00. AS/400 discovery should also work with other non-English locale configurations. _Please let us know about your experiences with other foreign language configurations or any issues you encounter; we love hearing from our users - email support@device42.com_

## Run Now or Schedule

![](/assets/images/image-700x115.png)

Select **Run Now** from the list page to run the job right away.

![](/assets/images/AD_Blade-Discovery-Run-Schedule.png)

Select **Add another Auto Discovery Schedule** from the when editing the job to create a run schedule for the job.

A note on autodiscovery scheduling behavior: newly created jobs will not run on the first day they are created, to prevent an unintended large amount of jobs from running initially. If you would like to run a job after its initial creation, simply select the "Run Now" button next to the job after creation.
