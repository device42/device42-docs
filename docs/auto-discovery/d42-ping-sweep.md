---
title: "Ping Sweep"
sidebar_position: 23
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'


## Built-in Ping Sweep Autodiscovery


Device42's Ping Sweep autodiscovery performs a series of pings against the specified network(s), for a quick initial discovery of which IPs are live and respond to pings, and which are not.

For the time being, an external standalone [Device42 Ping Sweep utility](https://www.device42.com/autodiscovery/) is still available, but it may be deprecated in the future. See the [Using the External Ping Sweep Utility](#using-the-external-ping-sweep-utility) section below for information on using the standalone tool.

## Add or Edit a Ping Sweep Autodiscovery Job

Navigate to **Discovery > Ping Sweep** from the Device42 main menu to display the Ping Sweep list page.

To edit an existing job, click a job name to display its details, and then click **Edit**.

Click **Add Ping Sweep** to create a new job. 

<ThemedImage
  alt="Ping Sweep list page"
  sources={{
    light: useBaseUrl('/assets/images/ping-sweep/ping-sweep-list-page-light.png'),
    dark: useBaseUrl('/assets/images/ping-sweep/ping-sweep-list-page-dark.png'),
  }}
/>

Fill in the job details:

1. Enter a name for the job.
2. In the **Networks:** field, enter a network range using mask bits in slash notation (for example, `192.168.11.0/24`) or hyphenated IP ranges (`192.168.11.1-254`) in Nmap-style syntax. Multiple ranges can be separated via commas, spaces, or new lines.
   - By default, the **Add devices by reverse DNS of discovered IP** checkbox is unchecked and unless your DNS setup is perfect, we recommend leaving it unchecked to avoid creating duplicate devices. If you want to use reverse DNS values as device names, check this option.
   - Other options include **Strip domain name suffix** and an option to **Create new subnet for networks not found**.

<ThemedImage
  alt="Add new ping sweep job"
  sources={{
    light: useBaseUrl('/assets/images/ping-sweep/add-ping-sweep-job-light.png'),
    dark: useBaseUrl('/assets/images/ping-sweep/add-ping-sweep-job-dark.png'),
  }}
/>

Optionally, you can automatically run the job by configuring a schedule in the **Auto Discovery Schedule** section. To run the job right away, click **Run Now** on the Ping Sweep list page.

<ThemedImage
  alt="Schedule discovery job"
  sources={{
    light: useBaseUrl('/assets/images/ping-sweep/ping-sweep-schedule-light.png'),
    dark: useBaseUrl('/assets/images/ping-sweep/ping-sweep-schedule-dark.png'),
  }}
/>

### View Ping Sweep Data in Device42

Select **Resources > All IP Addresses** from the Device42 menu to display the IP Addresses list page. You can narrow down the list using the available filters. Click **IP Address** for options to filter the results by IP address values.

<ThemedImage
  alt="All IP addresses list page"
  sources={{
    light: useBaseUrl('/assets/images/ping-sweep/ip-addresses-filter-light.png'),
    dark: useBaseUrl('/assets/images/ping-sweep/ip-addresses-filter-dark.png'),
  }}
/>

### General Ping Sweep Usage Considerations

Please add the respective subnets in Device42 before discovering and uploading IP information – otherwise all IPs will go to an "undefined" subnet.

**Ping Sweep considerations and best practices:**

- MAC address discovery works only for local LANs.
- If the reverse DNS option is selected, discovery will take longer.
- Depending on the behavior of your network devices, some subnets or IP addresses will show up as used. For example, some networks that live behind load balancers, as some LBs will reply to pings for every IP on a given range.
- Doing a discovery using a wireless card would only discover itself.
- Please note that there's both a built-in Ping Sweep tool and a standalone [external Ping Sweep utility](#using-the-external-ping-sweep-utility) version of the tool that runs as a standalone Windows application.

## Using the External Ping Sweep Utility

The external Ping Sweep utility is a standalone tool that does a ping sweep on specified networks and uploads the results to the Device42 appliance. It runs on Windows or Linux platforms and has no external dependencies.

![External Ping Sweep Tool](/assets/images/Scanning_a_network_range.png)

### Download and Install

1. Download the ping sweep `.zip` file from the [Device42 Autodiscovery Tools](https://www.device42.com/autodiscovery/) page.
2. Unzip the downloaded `d42-ping-sweep.zip` file containing five files:
    - `d42_pingsweep_windows_386.exe` (32bit version)
    - `d42_pingsweep_windows_x64.exe` (64bit version)
    - `d42_pingsweep_linux`
    - `ping.cfg.sample`
    - `version.txt`
3. For Windows, you'll need to download the `.exe` file. For Linux, set the `d42_pingsweep_linux` file as executable by running the command:
    ```bash
    $ chmod +x d42_pingsweep_linux
    ``` 
4. Copy or move `ping.cfg.sample` to `ping.cfg` and add your settings as described below.
5. Run the appropriate Windows `.exe` or Linux executable. You're all set!

### Configure the Ping Sweep Settings

Use the `ping.cfg.sample` file to select your settings. Make a copy of this file and rename it to “ping.cfg”.

Below is a sample of the `ping.cfg` file:

```ini
[settings]
# base_url points to your Device42 server
# For example: base_url = https://192.168.1.50
base_url = https://192.168.1.100
# Device42 username and password
username = username
secret = password

[targets]
# targets can be specified as:
# single: 192.168.1.125
# range: 192.168.1.101-192.168.1.150
# cidr block: 192.168.1.0/24
# any combination of above: 192.168.3.0/24,192.168.4.1-192.168.4.10,192.168.55.22,10.0.0.0/24
targets = 192.168.1.1/24
```

1. In the **`[settings]`** section, enter the base URL (FQDN or IP) for the Device42 appliance on your network, including credentials. Make sure the credentials have the required access permissions. The minimum required for the user are:
    - Ping Sweep | Can add Ping Sweep
    - Ping Sweep | Can change Ping Sweep
    - IP Address | Can add IP Address
    - IP Address | Can change IP Address
    - IP Address | Can view IP Address
    - Subnet | Can add Subnet
    - Subnet | Can change Subnet
    - Subnet | Can view Subnet
    - Device | Can add Device
    - Device | Can change Device

2. In the **`[targets]`** section, enter a network range using mask bits or you can use hyphen ranges (per Nmap syntax). For example, `192.168.11.0/24` for the subnet range or `192.168.11.1-254` for the hyphenated range. Multiple ranges can be separated by spaces.
3. The **`[options]`** section provides the following options, with explanations in the format
    
    **option_name**: explanation = default value

- **`get_mac_address`**: Try to get MAC address for found IP = `False`
- **`get_hostname`**: Try to get hostname for the found IP via DNS (if there are multiple domains using the same IP, only the first is used) = `False`
- **`threads`**: Number of ping threads = `128`
- **`timeout`**: Timeout for each ping = `2000`
- **`retries`**: Number of retries (better to keep it greater than 2) = `4`
- **`print_ips`**: Print all found IPs = `False`
- **`debug`**: Print all debug messages = `False`
- **`nameservers`**: Custom nameservers = `8.8.8.8,8.8.4.4`

4. The **`[discovery_options]`** section provides the following options, with explanations in the format
    
    **discovery_option_name**: explanation = default value

- **`strip_domain_suffix`**: Strip everything after first dot = `False`
- **`category`**: Category for discovered subnets = `String`
- **`create_new_subnet`**: New subnet for networks not found = `False`
- **`overwrite_subnet_categories`**: Overwrite existing subnet categories = `False`
- **`vrfgroup`**: VRF group for discovered subnets = `String`
- **`type`**: Static/DHCP/Reserved = `String`

### Run and Schedule Ping Sweep jobs

You can start the process by running the executable from the command line – root or administrator privileges are required. You can also schedule runs using an operating system task scheduler (like `crontab` or `at`).

### During and After an External Ping Sweep

You'll see a command prompt after you launch the ping sweep. When completed, the status will change to "Finished". If successful, you will see "Success" messages in the status box, and new and updated subnet and IP information in Device42

![](/assets/images/WEB_695_PS41.png)
