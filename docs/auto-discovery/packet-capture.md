---
title: "Packet Capture"
sidebar_position: 22
---

The [Device42 Packet Capture tool](https://www.device42.com/autodiscovery/) enables packet capture to be leveraged as a means of discovery \[v16.00+\]. Packet capture is capable of discovering service communication happening in real-time for any service listeners that are known to Device42, and therefore with packet capture, users can discover even those service communications that happen too infrequently to have been otherwise captured by scheduled discovery jobs.

Device42 Packet capture supports both individual and Promiscuous interfaces allowing you the flexibility to deploy and leverage packet capture in whatever way makes the most sense for your IT environment.

## Prerequisites

- A functioning Device42 MA _(destination for captured data), running v16.00.00+ or newer_
- Network communication allowed from the machine you'll be capturing packets on to your Device42 MA.
- An active network adapter connected to the target traffic capture network
- If using **Windows**, a _WinPcap-compatible library (like_ [_npcap_](https://npcap.com/)_)_ must be installed - **_Be sure to select the option “install in API-Compatible mode”during setup!_**
- If using **Linux**_, libpcap_ must be installed to support packet capture.
- OPTIONAL: Promiscuous mode _\[aka ‘monitor’ mode\]_ enabled for the network and/or the interface of interest.

Reference the [Packet Capture 101 video](https://www.youtube.com/watch?v=y1U37Xc9V2k) for a quick overview of D42 Packet Capture setup and usage.

## Configuration

1. Download the appropriate version of the utility _\[Windows or \*nix\],_ and extract to the destination of your choice.
2. Place the configuration file _d42pcap.json_ into the directory you extracted the utility into.
3. On **Linux**, symlink _libpcap_ as required by the application, as the application is searching for the filename _libpcap.so.1_:
   
   `sudo ln -s /usr/lib/x86_64-linux-gnu/libpcap.so.1.8.1 /usr/lib/x86_64-linux-gnu/libpcap.so.1`
   
4. On **Windows:** _no extra configuration needed._
5. Configure the utility by editing `d42pcap.json`. At minimum, configure the following sections to run the Packet Capture utility:

   1. **Point the utility at your Device42 instance** by inputting its IP, user, and PW into the ‘device42’ section of the config; save the file.
   2. Enter the name of your capture interface in the device property of the pcap section _(use name as shown under \`ipconfig\` on windows, or \`ifconfig\` on Linux, e.g. \`ens32\`)_
   3. Adjust the interval property of the common section; default is to relay 60-second chunks of capture data to Device42 so as not to overwhelm the MA if not using filtering and/or capturing traffic from many devices.

6. The utility may be installed to run as a Windows or Linux Service as desired. See “installing as a service” section of this document.

## Executing the Packet Capture Utility

1. Ensure all _prerequisites_ are met as described in the section of this document by the same name.
2. Configure the utility as described in the "Configuration" section above.
3. Execute the utility:
   - Windows:     `c:\>  d42pcap.exe`
   - Linux:     `$ sudo ./d42pcap_linux_64`
4. Optional runtime parameters are as follows:

| Parameter           | Description                                                                        |
| ------------------- | ---------------------------------------------------------------------------------- |
| list-devices        | Lists all network adapters on the host                                             |
| version             | Prints the version of the utility                                                  |
| logs-dir            | Overrides the directory to which log files are written                             |
| settings-dir        | The directory containing the utility’s JSON configuration file                     |
| settings-name       | The name of the utility’s JSON configuration file                                  |
| debug               | Turns on debug logging                                                             |
| install-win-service | Installs the utility as a Windows service (Windows executable only)                |
| remove-win-service  | Removes the utility from the installed Windows services. (Windows executable only) |

## Configuration File Definitions

| Section  | Description                                                                                                 |
| -------- | ----------------------------------------------------------------------------------------------------------- |
| device42 | Contains settings required to interact with Device42.                                                       |
| common   | Contains common application settings.                                                                       |
| pcap     | Contains settings that affect how raw network packets are handled.                                          |
| capture  | Settings affect D42 Netflow/Packet Capture engine event processing. Note: Section intended for D42 support. |

### Device42 Configuration

| Property | Description                       | Required |
| -------- | --------------------------------- | -------- |
| Host     | Base URL of the Device42 Web site | yes      |
| User     | User name                         | yes      |
| Password | Password                          | yes      |

### COMMON configuration

| Property | Description                                                                | Required |
| -------- | -------------------------------------------------------------------------- | -------- |
| Interval | The number of seconds to collect network events before sending to Device42 | yes      |
| logs-dir | The directory to which log files are written                               | no       |

### PCAP Configuration Section

| Property                      | Description                                                                  | Required |
| ----------------------------- | ---------------------------------------------------------------------------- | -------- |
| Device                        | Specify network capture interface                                            | yes      |
| include-source-tcp-ports      | TCP source ports to include                                                  | no       |
| include-destination-tcp-ports | TCP destination ports to include                                             | no       |
| include-source-udp-ports      | UDP source ports to include                                                  | no       |
| include-destination-udp-ports | UDP destination ports to include                                             | no       |
| include-source-tcp-ips        | TCP source IPs to include                                                    | no       |
| include-dest-tcp-ips          | TCP destination IPs to include                                               | no       |
| include-source-udp-ips        | UDP source IPs to include                                                    | no       |
| include-dest-udp-ips          | UDP destination IPs to include                                               | no       |
| ignore-tcp                    | Ignore all TCP network events                                                | no       |
| ignore-udp                    | Ignore all UDP network events                                                | no       |
| promiscuous-mode              | true captures all packets passed & received rather than just host packets    | yes      |
| sniff-timeout                 | Duration in nanoseconds to wait for network events to be read. (Default = 2) | yes      |
| snap-length                   | Length of raw network packets to collect. (Default = 1600)                   | yes      |

### CAPTURE Configuration Section

| Property            | Description               | Required |
| ------------------- | ------------------------- | -------- |
| live-entries        | Display live entries      | no       |
| live-entries-ok     | Display OK live entries   | no       |
| live-entries-nok    | Display NOK live entries  | no       |
| print-data          | Print data                | no       |
| ignore-ips          | Ignored IPs               | no       |
| ignore-ports        | Ignored Ports             | no       |
| pass-to             | Reserved for Device42 use | no       |
| default-protocol    | Reserved for Device42 use | no       |
| only-stats          | Reserved for Device42 use | no       |
| report-any-ip       | Reserved for Device42 use | no       |
| report-src-ip       | Reserved for Device42 use | no       |
| report-dst-ip       | Reserved for Device42 use | no       |
| unprocessed-packets | Reserved for Device42 use | no       |

## Installing D42 Packet Capture as a System Service

**On Windows:**

Simply execute with the ‘install-win-service’ flag or follow the instructions to create a new Linux service daemon.

```
C:\\> d42pcap -install-win-service
```

**On Linux Daemon**

1. To run the utility as a Linux daemon, create a service file like the following example in /etc/systemd/system:

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

5. Enable and then start the service:

`sudo systemctl enable d42pcap.service`

`sudo systemctl start d42pcap.service`
