---
title: "Packet Capture"
sidebar_position: 22
---

The [Device42 Packet Capture tool](https://www.device42.com/autodiscovery/) enables packet capture to be leveraged as a means of discovery. Packet capture discovers service communication happening in real-time for any service listeners known to Device42. It lets you discover service communications that are too infrequent for scheduled discovery jobs to catch.

Device42 packet capture supports both individual and promiscuous interfaces, allowing you the flexibility to deploy and use packet capture in the way that makes the most sense for your IT environment.

## Prerequisites

You need the following to use the Device42 Packet Capture tool:

- A Device42 Main Appliance (MA).
- Network communication allowed from the machine you'll be capturing packets on to your Device42 MA.
- An active network adapter connected to the target traffic capture network.
- A packet capture library installed on your operating system:
   - On **Windows**, use a WinPcap-compatible library like [Npcap](https://npcap.com/). Be sure to select the **Install in API-Compatible mode** option during setup.
   - On **Linux**, use `libpcap`.
  
You can optionally enable promiscuous mode (aka 'monitor' mode) for the network or the interface of interest.

:::tip
Watch our [Intro to Packet Capture video](https://www.youtube.com/watch?v=y1U37Xc9V2k) for a quick overview of how to set up and use packet capture with Device42.
:::

## Configuration

1. [Download](https://www.device42.com/autodiscovery/) the compressed `d42-packet-capture.zip` utility file and extract the contents to a directory of your choice.
2. Place the `d42pcap.json` config file into the directory with the utility.
3. On **Linux**, create a symlink for `libpcap` as required by the application, as it searches for the filename `libpcap.so.1`:
   ```bash
   sudo ln -s /usr/lib/x86_64-linux-gnu/libpcap.so.1.8.1 /usr/lib/x86_64-linux-gnu/libpcap.so.1
   ```
   
   On **Windows**, no extra configuration is needed.
4. Configure the utility by editing the `d42pcap.json`file. At minimum, configure the following sections to run the Packet Capture utility:

   - **Point the utility at your Device42 instance** by inputting its IP address, username, and password in the `device42` section of the config file. Save the file.
   - Enter the name of your capture interface in the `device` property of the `pcap` section. Use the name as shown under `ipconfig` on Windows or `ifconfig` on Linux. For example, `ens32`.
   - Adjust the interval property of the common section. The default is to relay 60-second chunks of capture data to Device42 to not overwhelm the MA, especially if filtering isn't used or you're capturing traffic from many devices.

5. The utility may be installed to run as a Windows or Linux Service as desired. See the [Installing Device42 Packet Capture as a System Service](#installing-device42-packet-capture-as-a-system-service) section.

## Executing the Packet Capture Utility

1. Ensure all [Prerequisites](#prerequisites) are met.
2. Configure the utility as described in the [Configuration](#configuration) section above.
3. Execute the utility by running:
   - Windows:     `c:\>  d42pcap.exe`
   - Linux:     `$ sudo ./d42pcap_linux_64`
4. Optionally configure the following runtime parameters:

| Parameter           | Description                                                                        |
| ------------------- | ---------------------------------------------------------------------------------- |
| `list-devices`        | Lists all network adapters on the host                                             |
| `version`             | Prints the version of the utility                                                  |
| `logs-dir`            | Overrides the directory to which log files are written                             |
| `settings-dir`        | The directory containing the utility’s JSON configuration file                     |
| `settings-name`       | The name of the utility’s JSON configuration file                                  |
| `debug`               | Turns on debug logging                                                             |
| `install-win-service` | Installs the utility as a Windows service (Windows executable only)                |
| `remove-win-service ` | Removes the utility from the installed Windows services. (Windows executable only) |

## Configuration File Definitions

| Section  | Description                                                                                                 |
| -------- | ----------------------------------------------------------------------------------------------------------- |
| `device42` | Contains settings required to interact with Device42.                                                       |
| `common`   | Contains common application settings.                                                                       |
| `pcap`     | Contains settings that affect how raw network packets are handled.                                          |
| `capture`  | Settings affect Device42 Netflow and Packet Capture engine event processing. Note: Section intended for Device42 support. |

### Device42 Configuration

| Property | Description                       | Required |
| -------- | --------------------------------- | -------- |
| `Host`     | Base URL of the Device42 website | yes      |
| `User`     | Username                         | yes      |
| `Password` | Password                          | yes      |

### Common configuration

| Property | Description                                                                | Required |
| -------- | -------------------------------------------------------------------------- | -------- |
| `Interval` | The number of seconds to collect network events before sending to Device42 | yes      |
| `logs-dir` | The directory to which log files are written                               | no       |

### PCAP Configuration Section

| Property                      | Description                                                                  | Required |
| ----------------------------- | ---------------------------------------------------------------------------- | -------- |
| `Device `                       | Specify network capture interface                                            | yes      |
| `include-source-tcp-ports`     | TCP source ports to include                                                  | no       |
| `include-destination-tcp-ports` | TCP destination ports to include                                             | no       |
| `include-source-udp-ports`      | UDP source ports to include                                                  | no       |
| `include-destination-udp-ports`| UDP destination ports to include                                             | no       |
| `include-source-tcp-ips `       | TCP source IPs to include                                                    | no       |
| `include-dest-tcp-ips`          | TCP destination IPs to include                                               | no       |
| `include-source-udp-ips`       | UDP source IPs to include                                                    | no       |
| `include-dest-udp-ips`         | UDP destination IPs to include                                               | no       |
| `ignore-tcp`                  | Ignore all TCP network events                                                | no       |
| `ignore-udp`                    | Ignore all UDP network events                                                | no       |
| `promiscuous-mode`              | `true` captures all packets passed and received rather than just host packets    | yes      |
| `sniff-timeout`                 | Duration in nanoseconds to wait for network events to be read. (Default = 2) | yes      |
| `snap-length`                   | Length of raw network packets to collect. (Default = 1600)                   | yes      |

### Capture Configuration Section

| Property            | Description               | Required |
| ------------------- | ------------------------- | -------- |
| `live-entries`        | Display live entries      | no       |
| `live-entries-ok`     | Display OK live entries   | no       |
| `live-entries-nok`    | Display NOK live entries  | no       |
| `print-data`         | Print data                | no       |
| `ignore-ips`          | Ignored IPs               | no       |
| `ignore-ports`       | Ignored Ports             | no       |
| `pass-to`            | Reserved for Device42 use | no       |
| `default-protocol`   | Reserved for Device42 use | no       |
| `only-stats`          | Reserved for Device42 use | no       |
| `report-any-ip`      | Reserved for Device42 use | no       |
| `report-src-ip`      | Reserved for Device42 use | no       |
| `report-dst-ip`       | Reserved for Device42 use | no       |
| `unprocessed-packets` | Reserved for Device42 use | no       |

## Installing Device42 Packet Capture as a System Service

**On Windows:**

Simply execute with the `install-win-service` flag or follow the instructions to create a new Linux service daemon.

```shell
C:\\> d42pcap -install-win-service
```

**On Linux Daemon**

1. To run the utility as a Linux daemon, create a service file like the following example in the `/etc/systemd/system` directory:

   ```
   [Unit]
   Description=Device42 Packet Capture Utility

   [Service]
   PIDFile=/tmp/d42pcap.pid
   User=root
   Group=root
   WorkingDirectory=/usr/bin
   ExecStart=/usr/bin/d42pcap
   Restart=always

   [Install]
   WantedBy=multi-user.target
   ```

2. Enable and then start the service:

```bash
sudo systemctl enable d42pcap.service
```

```bash
sudo systemctl start d42pcap.service
```
