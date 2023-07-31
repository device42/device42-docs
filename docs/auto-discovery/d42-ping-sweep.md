---
title: "Ping Sweep"
sidebar_position: 23
---

![](/assets/images/WEB_695_PS1.png)

* * *

## Built-in Ping Sweep Autodiscovery

Select _Discovery > Ping Sweep_ from the Device42 main menu to display the view Ping Sweep page.

Device42's Ping Sweep autodiscovery performs a series of pings against the specified network(s), performing a quick initial discovery of which IPs are live (respond to pings) and which are not.

For the time being, an external stand-alone Ping Sweep utility is also still available (may be deprecated in the future). Scroll to the _Using the_ _External Ping Sweep Utility_ section below for information on using the stand-alone tool.

## Adding a New Ping Sweep Autodiscovery

Click **Add Ping Sweep** on the view Ping Sweep page. To edit an existing job, click its name to display its details, and then click **Edit**.

![](/assets/images/WEB_695_PS2.png)

1. Enter a name for the job, and specify your target network(s) in the **Networks:** field.
2. Enter a network range using mask bits in slash notation or hyphenated IP ranges (nmap-style syntax). _Examples:_ 192.168.11.0/24 (slash notation), 192.168.11.1-254 (hyphenated range):
    - Multiple ranges can be separated via commas, spaces, or new lines.
    - If you want to use reverse DNS values as device names, select the **Add devices by reverse DNS of discovered IP** check box. (The default is unchecked – we recommend leaving it unchecked unless your DNS is perfect to avoid creation of duplicate devices.)
    - Other options include **Strip domain name suffix** and an option to **Create new subnet for networks not found**.
3. Configure a schedule for the job in the **Auto Discovery Schedule** section, and then save the job. You can select **Run Now** in the Ping Sweep jobs list to run the job right away.

### Viewing Ping Sweep Data in Device42

Select Resources > IP Addresses from the Device42 menu to display the IP Address list page.

 

![](/assets/images/WEB_695_PS3.png)

### General Ping Sweep Usage Considerations

Please make sure to add the respective subnets in Device42 before discovering and uploading IP information – otherwise all IPs will go to an "undefined" subnet.

**Other Ping Sweep considerations and best practices:**

- MAC address discovery works only for local LANs.
- If the reverse DNS option is selected, discovery will take longer.
- Depending on the behavior of your network devices, some subnets / IP addresses will show up as used. For example, some networks that live behind load balancers, as some LBs will reply to pings for every IP on a given range.
- Doing a discovery using a wireless card would only discover itself.
- Please note that there are both a built-in Ping Sweep tool and a stand-alone external version of the tool (see the following section) that runs as a stand-alone Windows application.

## Using the External Ping Sweep Utility

The External Ping Sweep utility is a stand-alone tool that will do a ping sweep on specified networks, and upload the results to the Device42 appliance. It runs on Windows or Linux platforms and has no external dependencies.

![External Ping Sweep Tool](/assets/images/Scanning_a_network_range.png)

### Download and Install

1. Download the ping sweep .zip file from [https://www.device42.com/autodiscovery/](https://www.device42.com/autodiscovery/).
2. Unzip the downloaded d42-ping-sweep .zip  – you'll see 5 files:
    - d42\_pingsweep\_windows\_386.exe (32bit version
    - d42\_pingsweep\_windows\_64.exe (64bit version)
    - d42\_pingsweep\_linux
    - ping.cfg.sample
    - version.txt
3. For Windows, you'll need to download the .exe. On Linux, you'll need to set the \*\_linux file to executable. Do this by setting the executable bit via _$ chmod +x._
4. Copy or move ping.cfg.sample to ping.cfg and add your settings as described below.
5. Run the appropriate Windows .exe or Linux executable. You're all set!

### Configuring Ping Sweep Settings

Use the ping.cfg.sample file to select your settings. Make a copy of this file and rename it to “ping.cfg”

1. In the **\[settings\]** section, enter the base URL (FQDN or IP) for the Device42 appliance on your network, including credentials. Make sure the credentials have the required access permissions. Minimum required for the user are
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

2. In the **\[targets\]** section, enter a network range using mask bits or you can use hyphen ranges (per nmap syntax). **Examples:** 192.168.11.0/24 for subnet range or 192.168.11.1-254 (for hyphenated range). Multiple ranges can be separated by spaces.
3. The **\[0ptions\]** section provides the following options, with explanations and examples.

Below is an example of the `ping.cfg` file:

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
    option_name: explanation = default value

- **get\_mac\_address**: Try to get MAC address for found IP _\= False_
- **get\_hostname**: Try to get hostname for found IP via DNS (if there are multiple domains using the same IP, only the first is used) _\= False_
- **threads**: Number of ping threads _\= 128_
- **timeout**: Timeout for each ping _\= 2000_
- **retries**: Number of retries (better to keep it greater than 2) _\= 4_
- **print\_ips**: Print all found IPs _\= False_
- **debug**: Print all debug messages _\= False_
- **nameservers**: Custom nameservers = 8.8.8.8,8.8.4.4

4\. The **\[discovery\_options\]** section provides the following options, with explanations and examples.

    option_name: explanation = default value

- **strip\_domain\_suffix**: Strip everything after first dot = _False_
- **category**: Category for discovered subnets = _String_
- **create\_new\_subnet**: New subnet for networks not found = _False_
- **overwrite\_subnet\_categories**: Overwrite existing subnet categories = _False_
- **vrfgroup**: VRF group for discovered subnets = _String_
- **type**: Static/DHCP/Reserved = _String_

### Running and Scheduling Ping Sweep jobs

You can start the process by running the executable from the command line – root or administrator privileges required. You can also schedule runs this using operating system task scheduler (like crontab or at).

### During / After an External Ping Sweep

You'll see a command prompt after you launch the ping sweep. When completed, the Status will change to _Finished_. If successful, you will see _Success_ messages in the status box, and also see new and updated subnet/IP information within Device42.

![](/assets/images/WEB_695_PS41.png)
