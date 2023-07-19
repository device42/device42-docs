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
- If using **Windows**, a _WinPcap-compatible library (like_ [_npcap_](https://nmap.org/npcap/)_)_ must be installed - **_Be sure to select the option “install in API-Compatible mode”during setup!_**
- If using **Linux**_, libpcap_ must be installed to support packet capture.
- OPTIONAL: Promiscuous mode _\[aka ‘monitor’ mode\]_ enabled for the network and/or the interface of interest.

 

Reference the [Packet Capture 101 video](https://www.youtube.com/watch?v=y1U37Xc9V2k) for a quick overview of D42 Packet Capture setup and usage.

## Configuration

1. Download the appropriate version of the utility _\[Windows or \*nix\],_ and extract to the destination of your choice.
2. Place the configuration file _d42pcap.json_ into the directory you extracted the utility into.
3. On **Linux**, symlink _libpcap_ as required by the application, as the application is searching for the filename _libpcap.so.1_:
    1. `sudo ln -s /usr/lib/x86_64-linux-gnu/libpcap.so.1.8.1 /usr/lib/x86_64-linux-gnu/libpcap.so.1`
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

<table><tbody><tr><td width="130"><b>Parameter</b></td><td><b>Description</b></td></tr><tr><td><div></div>list-devices version logs-dir settings-dir settings-name debug install-win-service remove-win-service</td><td><div></div>Lists all network adapters on the host Prints the version of the utility Overrides the directory to which log files are written The directory containing the utility’s JSON configuration file The name of the utility’s JSON configuration file Turns on debug logging Installs the utility as a Windows service (Windows executable only) Removes the utility from the installed Windows services. (Windows executable only)</td></tr></tbody></table>

## Configuration File Definitions

<table><tbody><tr><td width="112"><b>Section</b></td><td><b>Description</b></td></tr><tr><td><div></div>device42 common pcap capture</td><td><div></div>Contains settings required to interact with Device42. Contains common application settings. Contains settings that affect how raw network packets are handled. Settings affect D42 Netflow/Packet Capture engine event processing. <i>Note: Section intended for D42 support.</i></td></tr></tbody></table>

 

### Device42 Configuration

<table><tbody><tr><td colspan="3">DEVICE42 configuration</td></tr><tr><td width="200"><b>Property</b></td><td width="312"><b>Description</b></td><td><b>Required</b></td></tr><tr><td><div></div>Host User Password</td><td><div></div>Base URL of the Device42 Web site User name Password</td><td><div></div>yes yes yes</td></tr></tbody></table>

 

### COMMON configuration

<table><tbody><tr><td colspan="3">COMMON configuration</td></tr><tr><td width="200"><b>Property</b></td><td width="512"><b>Description</b></td><td><b>Required</b></td></tr><tr><td><div></div>Interval logs-dir</td><td><div></div>The number of seconds to collect network events before sending to Device42 The directory to which log files are written</td><td>yes<div></div>no</td></tr></tbody></table>

 

### PCAP Configuration Section

<table><tbody><tr><td colspan="3">PCAP configuration</td></tr><tr><td width="200"><b>Property</b></td><td width="500"><b>Description</b></td><td><b>Required</b></td></tr><tr><td><div></div>Device include-source-tcp-ports include-destination-tcp-ports include-source-udp-ports include-destination-udp-ports include-source-tcp-ips include-dest-tcp-ips include-source-udp-ips include-dest-udp-ips ignore-tcp ignore-udp promiscuous-mode sniff-timeout snap-length</td><td><div></div>Specify network capture interface TCP source ports to include TCP destination ports to include UDP source ports to include UDP destination ports to include TCP source IPs to include TCP destination IPs to include UDP source IPs to include UDP destination IPs to include Ignore all TCP network events Ignore all UDP network events true captures all packets passed &amp; received rather than just host packets Duration in nanoseconds to wait for network events to be read. (Default = 2) Length of raw network packets to collect. (Default = 1600)</td><td><div></div><b>yes</b> no no no no no no no no no no no yes yes</td></tr></tbody></table>

### CAPTURE Configuration Section

 

<table><tbody><tr><td colspan="3">CAPTURE configuration</td></tr><tr><td width="200"><b>Property</b></td><td width="300"><b>Description</b></td><td><b>Required</b></td></tr><tr><td><div></div>live-entries live-entries-ok live-entries-nok print-data ignore-ips ignore-ports pass-to default-protocol only-stats report-any-ip report-src-ip report-dst-ip unprocessed-packets</td><td><div></div>Display live entries Display OK live entries Display NOK live entries Print data Ignored Ips Ignored Ports <i>Reserved for Device42 use</i> <i>Reserved for Device42 use</i> <i>Reserved for Device42 use</i> <i>Reserved for Device42 use</i> <i>Reserved for Device42 use</i> <i>Reserved for Device42 use</i> <i>Reserved for Device42 use</i></td><td><div></div>no no no no no no no no no no no no no</td></tr></tbody></table>

 

## Installing D42 Packet Capture as a System Service

**On Windows:**

1. Simply execute with the ‘install-win-service’ flag or follow the instructions to create a new Linux service daemon.
    1. C:\\> d42pcap -install-win-service

 

**On Linux Daemon**

1. To run the utility as a Linux daemon, create a service file like the following example in /etc/systemd/system:

\[Unit\]
Description=Device42 Packet Capture Utility

\[Service\]
PIDFile=/tmp/d42pcap.pid
User=root
Group=root
WorkingDirectory=/usr/bin
ExecStart=/usr/bin/d42pcap
Restart=always

\[Install\]
WantedBy=multi-user.target

5. Enable and then start the service:

`sudo systemctl enable d42pcap.service` `sudo systemctl start d42pcap.service`
