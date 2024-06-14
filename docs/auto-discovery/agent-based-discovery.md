---
title: "Agent Based Discovery"
sidebar_position: 3
---

# Device42 Discovery Agent

There exist special situations in which an agent simply makes more sense, and for that reason, we offer optional auto-discovery agents for many platforms _(see "Supported Platforms" below)_.

Some situations simply cannot be discovered agentlessly either because they are unreachable from the network, or because certain rules don't permit traffic flow. These special cases, and other security-hardened uses that may prove difficult otherwise are cases for which we recommend customers utilize agents. Note you are free to deploy and use agents as you see fit, as agents provide equivalent functionality vs. Device42's agent-less discovery, but we do recommend the majority of users stick with agent-less.

:::warning
**Discovery Account warning: Please do _not_ set up an autodiscovery scan using critical  or production account credentials! Please create a separate, dedicated account to use _only_ for discovery**

Doing so, depending on permissions granted and configured password policies could result in account lock-out, therefore causing an otherwise completely avoidable outage.
:::

## Supported Platforms

**Device42 Autodiscovery agents are available for deployment on the following platforms:**

<table><tbody><tr><td><ul><li>Windows (32) NT 4.0</li><li>Windows (32) Win 7+</li><li>Linux (32-bit)</li><li>FreeBSD v10+ (32)</li><li>FreeBSD v1-9 (32)</li><li>OpenBSD v6+ (32)</li><li>OpenBSD pre v6 (32)</li><li>Solaris Sparc (64)</li></ul></td><td><ul><li>Windows (64) NT 4.0</li><li>Windows (64) Win 7+</li><li>Linux (64-bit)</li><li>FreeBSD v10+ (64)</li><li>FreeBSD v1-9 (64)</li><li>OpenBSD v6+ (64)</li><li>OpenBSD pre v6 (64)</li><li>Mac</li></ul></td></tr></tbody></table>

:::info
See **[Windows Discovery Agent Service Wrapper](getstarted/installation/windows-service-installation.mdx)** and **[Mac Agent Service Launcher](mac-agent-service-launcher.mdx)** for information on installing versions of the Windows and Mac discovery agent as a service.
:::

## Proxy Environment Variables

On both Windows and Unix-like (Nix) machines, you need to add environment variables for the proxy settings:

- **HTTP_PROXY:** Define the HTTP proxy server.
- **HTTPS_PROXY:** Define the HTTPS proxy server.
- **NO_PROXY:** A comma-separated list of IP addresses that should not go through the proxy.

On Windows, click the **Environmental Variables** button in the System Properties window to set environmental variables.

## Installation

The client can be downloaded by going to _Discovery > Agent Based Scans_. Enter the URL as it will be accessed by the agent from the remote machine, and choose your platform: Windows, Mac, Linux, FreeBSD, etc.

![](/assets/images/D42-23312_discovery-agent-1-250x122.png)

It can be run from the command line or can be scheduled using the relevant scheduling program per OS. When running the application, the following switches are available:

```
  -capture-host-files
    	capture hosts files
  -debug
    	prints the data being sent and result of post operation
  -device-customer string
    	default device customer
  -device-name-format int
    	1 - hostname, 2 - hostname + domain, 3 - hostname and hostname+domain as alias, 4 - hostname+domain and hostname as alias (default 1)
  -device-object-category string
    	default device object category
  -device-service-level string
    	default device service level
  -device-tags string
    	default device tags
  -discover-last-login
    	discover last login
  -dry-run
    	doesn't do a post, just prints the data to be sent
  -extended-logs
    	enables extended logs
  -host string
    	overrides built-in host
  -hostname-precedence
    	sets device name as 'new name' to prevent creation of new device if only hostname was changed
  -ignore-domain
    	ignore domain
  -ignore-ipv6
    	ignore IPv6 addresses
  -ignore-local-ips string
    	sets list of local IPs to ignore
  -ignore-local-ports string
    	sets list of local ports to ignore
  -ignore-remote-ips string
    	sets list of remote IPs to ignore
  -ignore-remote-ports string
    	sets list of remote ports to ignore
  -ignore-subnets
    	ignore subnets
  -ip-vrf-group string
    	default IP VRF group
  -light-mode
    	reduces CPU utilization by cost of discovery speed
  -new-device-object-category
      updates/overwrites the object category for the device
  -offline
    	doesn't connect with Device42, just prints the encrypted data to be sent
  -quiet
    	disables all logs
  -service-ports-only
    	returns only service ports data
  -skip-aws-instance-info
    	disables AWS instance info discovery (default true)
  -skip-bios
    	disables bios discovery
  -skip-cluster-info
    	disables cluster info discovery (Windows only) (default true)
  -skip-cpu-info
    	disables CPU info discovery
  -skip-database-info
    	disables database discovery (default true)
  -skip-hardware-info
    	disables hardware discovery
  -skip-hba
    	disables HBA discovery
  -skip-hdd
    	disables HDD discovery
  -skip-memory-info
    	disables memory discovery
  -skip-mount-points
    	disables mount points discovery
  -skip-network
    	disables network discovery
  -skip-os-details
    	disables OS discovery
  -skip-parts
    	disables parts discovery
  -skip-serials
    	disables serial numbers discovery
  -skip-service-ports
    	disables service ports discovery
  -skip-services
    	disables services discovery
  -skip-software
    	disables software discovery
  -skip-virtual-machines
    	disables VM discovery
  -software-initial-group string
    	default software group
  -store-config-files
    	store configuration files
  -store-filesystem-info
    	store filesystem information
  -store-registry-info
    	store registry information
  -store-software-config-files
    	store software configuration files
  -sudo-password string
    	sudo password used in some OSes (Mac, Linux) to get information about the system
  -use-aws-token
    	use generated token to get AWS instance info
  -use-global-ignore-software-file
    	use global ignore software file
  -use-global-ignore-software-pattern-file
    	use global ignore software pattern file
  -version
    	print version number and exit
  --wmi-timeout
      timeout for Windows WMI calls (default is 120 seconds if not supplied)
```

## Scheduling With Crontab in Linux

For best results we recommend running the command with sudo. Make sure that **/home/system\_dev42/bin/d42agent** is owned by **root** with **\-rwx—— (0700)** so that a non-root user system\_dev42 cannot overwrite the agent, or just add it to root’s _crontab_ (or cron.daily/hourly) and let root execute it.

## Linux and Mac Note

After downloading, if the agent is not executable - make it executable (i.e., chmod +x agentname). Sudo is required for best results, and the password may be passed using --sudo-password="password".

Note: Users may experience an issue with being able to open the application on your Mac. If so, please use the following Apple support link to [open a Mac app from an unidentified developer](https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac)

## Windows Note

After downloading the agent, use the Windows Task Scheduler to schedule the executable file (\*.exe) to run at the intervals you want.

## View Agent Version and Agent Last Check-in Date

The Devices list page now includes two columns that display the Agent Version and the Agent Last Check-in Date for devices discovered by the agent.

- On the Devices list page, click the gear icon below the Advanced button to display the column list.

![](/assets/images/D42-19289_list-page-agent-buttons-1-250x123.png)

 

 

 

- Select the _Agent Version_ and the _Agent Last Check-in_ columns.

![](/assets/images/D42-19289_list-page-agent-columns-250x99.png)

 

- If you want to define a new column view, type a name for the view in the field to the right of the Table Columns drop-down. Click _Save_ to save the view. Device42 displays the agent information for devices discovered by the agent.

 

### Filtering with Agent Columns

You can use Agent Version and Agent Last Check-in Date to filter the devices list to look for devices found by specific agents or during certain periods.

- Click _+More_ to add the columns as search criteria.

![](/assets/images/D42-19289_choose-filters-250x130.png)

 

- You can then click on the column name to use the column as a filter. For example, you can use Agent Last Check-in Date to search for devices discovered by an agent during a certain calendar period.

![](/assets/images/D42-19289_filter-simple-250x72.png)

 

- You can also use the Agent columns in Advanced search. For example, the query below searches for devices discovered less that 10 days in the past.

![](/assets/images/D42-19289_advanced-search-250x31.png)
