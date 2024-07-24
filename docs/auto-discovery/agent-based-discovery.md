---
title: "Agent-Based Discovery"
sidebar_position: 3
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

# Device42 Discovery Agent

There are special situations where using an agent for discovery makes more sense. The IT environment may be unreachable from the network or security-hardened rules may be in place that limit traffic flow. Device42 offers many optional auto-discovery agents across several [supported platforms](#supported-platforms).

While agents provide equivalent functionality to Device42's agentless discovery and can be deployed as needed, we recommend that the majority of users stick with agentless discovery.

:::warning
**Discovery Account warning: Please do _not_ set up an autodiscovery scan using critical or production account credentials! Please create a separate, dedicated account to use _only_ for discovery**

Doing so, depending on permissions granted and configured password policies could result in account lock-out, therefore causing an otherwise completely avoidable outage.
:::

## Supported Platforms

**Device42 autodiscovery agents are available for deployment on the following platforms:**

| | |
|------------------------------|------------------------------|
| Windows (32) NT 4.0          | Windows (64) NT 4.0          |
| Windows (32) Win 7+          | Windows (64) Win 7+          |
| Linux (32-bit)               | Linux (64-bit)               |
| FreeBSD v10+ (32)            | FreeBSD v10+ (64)            |
| FreeBSD v1-9 (32)            | FreeBSD v1-9 (64)            |
| OpenBSD v6+ (32)             | OpenBSD v6+ (64)             |
| OpenBSD pre v6 (32)          | OpenBSD pre v6 (64)          |
| Solaris Sparc (64)           | Mac                          |

:::info
See **[Windows Discovery Agent Service Wrapper](getstarted/installation/windows-service-installation.mdx)** and **[Mac Agent Service Launcher](mac-agent-service-launcher.mdx)** for information on installing versions of the Windows and Mac discovery agent as a service.
:::

## Proxy Environment Variables

Proxy settings are not required, but if you need the agents to access your network via a proxy, you can set the following environment variables, which the agents will respect:

- **HTTP_PROXY:** Define the HTTP proxy server.
- **HTTPS_PROXY:** Define the HTTPS proxy server.
- **NO_PROXY:** A comma-separated list of IP addresses that should not go through the proxy.

On Windows, click the **Environmental Variables** button in the System Properties window to set environment variables.

## Installation

Download the client from **Discovery > Agent Based Scans**. Enter the URL as it will be accessed by the agent from the remote machine, and choose your **Platform** from the dropdown: Windows, Mac, Linux, FreeBSD, and so on.

<ThemedImage
  alt="Download the autodiscovery agent"
  sources={{
    light: useBaseUrl('/assets/images/agent-based-discovery/agent-based-scans-light.png'),
    dark: useBaseUrl('/assets/images/agent-based-discovery/agent-based-scans-dark.png'),
  }}
/>

The agent can be run from the command line or can be scheduled using the relevant scheduling program per OS. When running the application, the following switches are available:

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

For best results, we recommend running the command with `sudo`. Make sure that `/home/system\_dev42/bin/d42agent` is owned by `root` with `\-rwx—— (0700)` permissions. This prevents the non-root user `system\_dev42` from overwriting the agent or adding it to `root`’s _crontab_ (or `cron.daily/hourly`) while allowing root to execute it.

## Linux and Mac Note

After downloading the agent, make it executable by running the command `chmod +x <agentname>` and use `sudo` for best results. Use the command `--sudo-password="password"` to pass in the password.

:::note
You may experience an issue with opening the application on your Mac. If so, please use the following Apple support link to [open a Mac app from an unidentified developer](https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac).
:::

## Windows Note

After downloading the agent, use the Windows Task Scheduler to schedule the executable file (\*.exe) to run at the intervals you define.

## View Agent Version and Agent Last Check-in Date

The Devices list page now includes two columns that display the **Agent Version** and the **Agent Last Check-in Date** for devices discovered by the agent.

- On the Devices list page under **Resources > All Devices**, click the **gear icon** below the Advanced button to display the column list.

    <ThemedImage
    alt="Gear icon on Devices list page"
    sources={{
        light: useBaseUrl('/assets/images/agent-based-discovery/devices-gear-icon-light.png'),
        dark: useBaseUrl('/assets/images/agent-based-discovery/devices-gear-icon-dark.png'),
    }}
    style={{ width: '90%' }} 
    />
 
- Select **Agent Version** and **Agent Last Check-in Date** from the **Table Columns** dropdown.

    <ThemedImage
    alt="Table column selection"
    sources={{
        light: useBaseUrl('/assets/images/agent-based-discovery/table-columns-light-3.png'),
        dark: useBaseUrl('/assets/images/agent-based-discovery/table-columns-dark-3.png'),
    }}
    />

- If you want to define a new column view, type a name for the view in the field to the right of the **Table Columns** dropdown and **Save** the view. Device42 displays the agent information for devices discovered by the agent.

### Filtering with Agent Columns

You can use Agent Version and Agent Last Check-in Date to filter the devices list to look for devices found by specific agents or during certain periods.

- Click **+More** to add the columns as search criteria.

    <ThemedImage
    alt="Display more columns"
    sources={{
        light: useBaseUrl('/assets/images/agent-based-discovery/more-button-light.png'),
        dark: useBaseUrl('/assets/images/agent-based-discovery/more-button-dark.png'),
    }}
    />

- You can then click on the column name to use the column as a filter. For example, you can use **Agent Last Check-in Date** to search for devices discovered by an agent during a certain calendar period.

    <ThemedImage
    alt="Filter by Agent date"
    sources={{
        light: useBaseUrl('/assets/images/agent-based-discovery/check-in-date-light-3.png'),
        dark: useBaseUrl('/assets/images/agent-based-discovery/check-in-date-dark-3.png'),
    }}
    />

- You can also use the agent columns in **Advanced search**. For example, the query below searches for devices discovered with a **Agent Last Check-in Date** less than 365 days ago.

    <ThemedImage
    alt="Advanced search"
    sources={{
        light: useBaseUrl('/assets/images/agent-based-discovery/advanced-search-light.png'),
        dark: useBaseUrl('/assets/images/agent-based-discovery/advanced-search-dark.png'),
    }}
    />
