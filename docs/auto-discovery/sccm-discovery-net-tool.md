---
title: "SCCM Discovery (.NET Tool)"
sidebar_position: 26
---

:::note
This tool will be deprecated in the near future. SCCM integration is available natively from the Device42 Main Appliance, or using the WDS service. You can continue to use the tool for now, but we recommend that you use the native functionality.

Please see our new [SCCM documentation](auto-discovery/sccm-discovery.mdx).
:::

The autodiscovery client is a .NET-based external tool that runs on Windows machines, either standalone or as a service. It autodiscovers detailed information about Windows Servers, Linux, UNIX, *nix Servers, Hyper-V Hypervisors, and Virtual Machine guest inventories, and can also import Configuration Item (CI) data, via API to API, from Microsoft SCCM Instances.

 
* * *

## SCCM Information

If you are already using SCCM in your environment or are planning to use it, the Device42 SCCM integration can automatically sync the hardware and software inventory (CI) data to Device42.

### SCCM Permissions

The user account you supply must have permission to access the SCCM instance. You can add a user in SCCM under **Administration** and choose **Administrative Users**. The user we tested within the lab was an SCCM Admin, but the “Read-only Analyst” role should be plenty, as it “Grants Permissions to view all Configuration Manager Objects”, and the import is a read-only operation from the SCCM perspective.

### .NET Tool Installation

You must contact the Device42 Support team [support@device42.com](mailto:support@device42.com) to get access to the Discovery Client software.

Installation requirements and instructions for setting up the autodiscovery client.

1. Install the [Microsoft .NET Framework 4 (Standalone Installer)](https://www.microsoft.com/en-us/download/details.aspx?id=17718).
2. To get the autodiscovery client, please contact the Device42 support team [support@device42.com](mailto:support@device42.com).

After running the installation, you can find the application in your **Start Menu**.

### Silent Installation

The silent installation will fail if, for whatever reason, it is unable to successfully stop the service in a short time period. If a discovery is running, the service will not stop until the discovery can be gracefully terminated, which could take a bit of time. The solution is to stop the service and wait; if the process is still running, kill it and then proceed with the installation.

The key here is to ensure the process is not running when you attempt to run the silent installation.

 

* * *

## The Settings Tab

Under the **Settings** tab, you will see the **System**, **Credentials**, and **Exclusions** sections.

### System Sub-Menu - Device42 System Settings

You can enter your Device42 credentials here to allow the application to upload the autodiscovered data directly to Device42.

![Device42 Config](/assets/images/autodiscovery-01.png)

### System Settings:

The **Task Threads** value allows you to limit the number of task threads the application will spawn during autodiscovery. You can use this to reduce the strain on your network if you are concerned about scanning a higher amount of systems.

### Ignore Settings:

You can choose to ignore common services, software, and software patterns to avoid pulling in services or software that are typically not tracked by users. The lists used are available at https://github.com/device42/AutoDiscoverIgnoreFiles

### Credentials Sub-Menu

Choose **New** from the dropdown to define all credentials to be used in the autodiscovery process. For Windows credentials, you can enter a local or domain user who has privileges to execute Remote WMI calls. You can also opt to use the current credentials of the logged-in user.

![Device42 Credentials](/assets/images/autodiscovery-02.png)

You can enter a test address to verify that a server is accessible from the autodiscovery application.

### Exclusions Sub-Menu

![Device42 Exclusions](/assets/images/autodiscovery-03.png)

### Ports

Use the **Exclusions** sub-menu to list listening or remote ports that you would like excluded from autodiscovery. For example, if you are not interested in seeing SSH connections in Device42, adding port 22 to the excluded Unix ports will exclude the service port for SSH.

### Remote Connections

You can exclude remote connections by IP address and port as well. This is convenient if there are known connections to any of your devices that you are not interested in bringing into Device42.

* * *

## The Discovery Section

The **Discovery** section will allow you to set up and save multiple autodiscovery jobs.

![Device42 AutoDiscovery](/assets/images/autodiscovery-04.png)

### Discovery Settings

Select **New** from the **Settings** dropdown menu to set up a new autodiscovery job. The settings for the fields are as follows:

| Field           | Description                                                                                     |
|-----------------|-------------------------------------------------------------------------------------------------|
| **Settings**        | Select **Pre-Configured Jobs** from this dropdown                                                  |
| **Name**            | Your chosen name for the autodiscovery job                                                      |
| **Credentials**     | Choose the credentials for the discovery that was set in the Settings tab                  |
| **Device Name**     | Choose from one of the options to set the device name. See [Device Naming Options](#device-naming-options) for details                   |
| **Ignore**          | You can choose to ignore OS name, UUID, Serial Number, Domain Suffix, IPv6 address, and/or Virtual Subtype |
| **Options**         | You can choose to give the hostname precedence, Discover Services, and if you have the add-ons, discover software and/or application inventory |
| **Device Category** | Choose from Device Categories you’ve configured within Device42. Selecting **Override** will replace existing categories with the current selection. |
| **Service Level**   | These values are pulled from Device42 and allow you to set the Service Level on the discovered devices. |
| **Customer**        | These values are pulled from Device42 and allow you to associate discovered servers with the selected Customer. |
| **VRF Group**       | These values are pulled from Device42 and allow you to assign the discovered servers to the selected VRF Group. |
| **Discover by**     | Here you can choose CIDR Blocks, Host Names, IP Ranges, or Domain Servers to perform the autodiscovery against |
| **Criteria**        | When Using Host Name or CIDR Blocks to auto-discover, you can enter the host names or CIDR blocks in comma-separated list form |
| **IP Range**        | When using IP address autodiscovery, you can enter a single IP address or an address range in this section |
| **Exclusions**      | If you would like to ignore IPs in a range, you can enter them here                           |


For Windows autodiscovery by domain server, you can use a custom filter by entering an LDAP query to filter the results, excluding discovery of certain non-matching devices.

For example:

```
(&(objectCategory=computer)(dNSHostName=d42sus.pvt))
```

This query will search the domain server for all computers with the DNS hostname, `d42sus.pvt`, and autodiscover the matches.

### Run Status

This is where you will see information about the last run status of the autodiscovery job.

* * *

## Device Naming Options

The Device42 autodiscovery tool can add or update the Device Name of any targets with the hostname format of your choosing. Device42 can combine the discovered Hostname with the Domain Name (Option: **Hostname plus Domain Name**). You can also add the name as discovered (hostname) as an alias, rather than replacing an existing device’s name by choosing the option **Hostname and add Hostname plus Domain Name as Alias**. This option adds devices with the hostname as discovered as the device name, and the FQDN as the alias. Full details are below.

From the **Discovery** tab, set your desired options, and choose the desired **Device Name** option from the dropdown.

![Device Naming Options](/assets/images/auto-discovery-tool-007.png)

- Hostname as discovered
- Hostname plus domain name as discovered. If the domain name already exists in the hostname, it will not be added again. You may need to set **Ignore Domain Name** for the best functionality.
- Hostname and add Hostname plus Domain name as alias. This is the default and recommended setting.
- Hostname plus Domain name and add Hostname as alias.

In order to set the Device Name to the FQDN of the device, make sure you select an option that includes **Hostname plus Domain Name**.

* * *

## The Information Tab

### Recent Messages

In the **Information** section, you can see **Recent Messages**, which will allow you to follow the progress of your autodiscovery jobs.

### Search Logs

The Search Logs section will allow you to enter search criteria to check the log files if you have problems with any of the autodiscovery jobs.

### Diagnostic Settings

![Diagnostic Settings](/assets/images/autodiscovery-05.png)

If you have trouble with autodiscovery using the application, you can use the new **Diagnostic Settings** section to generate a log bundle to send to the Device42 team for diagnosis. This section allows you to set the location of the logs, select which logs to keep, and generate a bundle.

### Summary

The **Summary** section displays a summary list of the results of recent discovery attempts against a list of discovered IPs, including a date and timestamp. Looking at the summary is a quick way to determine whether discovery against a specific IP succeeded or failed, and if it failed, whether the failure occurred because the instance residing on the IP was unreachable \[‘TCP Ping’\] or because there were authentication errors \[‘Authenticated’\]. A value of ‘True’ in the ‘Sent to D42’ column means that CI data in the Device42 CMDB was updated for the instance in that particular line.

* * *

## The Tasks Tab

![Tasks](/assets/images/autodiscovery-06.png)

In the **Tasks Schedules** section, you can set as many different autodiscovery schedules as needed to cover your environment in the Schedules section. You can choose which days of the week, and whether you want to run the job at a specific time, or every X hours, as well as which discoveries to run.

In the Status section, you will see the last status of each of your autodiscovery jobs.

## General Considerations

Here are some limitations and considerations:

- If you have populated Device42 (CSV imports, spreadsheets, manual entry, etc.) with devices before your first run of this tool, please make sure to run the tool on a few devices first to ensure the naming convention you use is compatible with the naming convention discovered by the tool. For example, if you added `nh-linux01` as a device and autodiscovery found the hostname `nh-linux01.example.com`, autodiscovery would add it as a new device because the names didn’t match. To fix incompatible naming conventions, you can check the checkbox to use only the hostname.
- It is best to use the autodiscovery client after you have run network autodiscovery and/or defined the subnets where your network IPs reside.
- Floating IPs that logically belong to a cluster but are found on a device during autodiscovery will be assigned to that device, and **not** the cluster resource.
- You can run the .NET Discovery tool from any (and multiple) network segments. Communication from the autodiscovery client back to the main Device42 instance requires access via port TCP/443 (HTTPS) to be allowed on your network.
- Please be sure to use an Administrator account. If you use the **Local System account**, discovery will not work correctly for other machines in the network.
