---
title: "NetFlow Collector"
sidebar_position: 19
---

# NetFlow Collector - Device42

Device42's NetFlow Collector is a powerful tool used to add continuously discovered network communications details to the autodiscovered information from your environment.

Both the Device42 Remote Collector (RC) and the Standalone NetFlow Collector are available to collect NetFlow data. If you're just now setting up your first Device42 collector, we recommend setting up an RC – you don't need both – see _Installation_ below.

## Supported NetFlow Versions

Device42 supports NetFlow data in any of the following versions: v1, v5, v6, v7, v9, and IPFIX (an IETF-defined, open-flow standard).

## Installation

Both the Device42 RC and the standalone NetFlow collector are available for downloaded on the autodiscovery tools download page at [https://www.device42.com/autodiscovery/](https://www.device42.com/autodiscovery/). Choose one or the other to get started. If you're just now setting up your first Device42 collector, a Device42 Remote Collector is the recommended option (you don't need both).

If you already have one or more Device42 remote collectors running, you may want to simply enable NetFlow collection on an existing RC instance; If this is the case, start with Step 2 in the next section.

### Installing the Device42 RC for NetFlow Collection

1. To **install the Device42 Remote Collector for NetFlow collection**, see the "RC Installation and Configuration" section of the [Device42 RC documentation page.](https://docs.device42.com/auto-discovery/remote-collector-rc/) After installation, return to this page to complete NetFlow Configuration for your RC.
2. Enable NetFlow collection on your newly installed Device42 RC from the Device42 main menu, _Discovery > Remote Collectors_ and clicking the Name of the Remote Collector you want to use for NetFlow collection: ![](/assets/images/WEB-808_1.png)
3. You should now be at the "View remote collector" screen. Click the "Edit" button in the upper-right hand corner to edit the options for your RC, and expand the section labeled "NetFlow Options" by clicking pm "Show", as pictured: ![](/assets/images/WEB-808_2.png)
4. To enable NetFlow, Check the "Enable Netflow" checkbox \[Labeled #1 below\]. Choose a "Default Protocol" (either TCP or UDP, labeled #2 below\] if you'll be using one or the other _(otherwise traffic without a protocol will be ignored)_. You may optionally configure IPs to ignore, ports to ignore, or a NetFlow Forwarding IP address by utilizing the other available options on this screen, but this will not be necessary for many setups. Choose "Save" in the lower-right hand corner, and your RC is now configured for NetFlow collection! ![](/assets/images/WEB-808_3.png)
5. The final step is the ensure all your NetFlow generating devices are sending their NetFlows to the Device42 RC you just configured. If you haven't configured that already, do that now. This procedure will differ depending on the hardware you are using. Consult the manufacturer's directions for help should you need it.

### Installing the Device42 Standalone NetFlow Collector

**The Standalone NetFlow Collector** doesn't require any installation; it can simply be run from the command line.

## Running the Standalone NetFlow Collector

To run the collector, open a command prompt and navigate to the directory it's stored in. Run the collector as follows:

`d42-netflow-collector-windows-v100.exe -h https://yourdevice42url -u D42UserName -p D42Password`

This will start the listener on port 2055 (unless a different port is specified) and will begin collecting the data sent to this device from your NetFlow-enabled devices. Ensure you've pointed your switches and/or other NetFlow enabled devices you are using at this NetFlow collector. Each device's NetFlow _output_ should be the IP address of the server you have running the Device42 NetFlow collector.

### Standalone NetFlow Collector Options

The following options are available to augment the behavior of `d42-netflow-collector-windows-v100.exe`:

  -addr string  	|  netflow listen address (default "0.0.0.0:2055")
  -debug  		|  show netflow info
  -h string  		|  D42 host name
  -i int  		|  interval in seconds between sends data to D42 (default 300)
  -ignore-ip string  	|  ignore IPs
  -ignore-port string  	|  ignore ports
  -live-entries  	|  display live entries
  -live-entries-nok  	|  display OK live entries
  -live-entries-ok  	|  display NOK live entries
  -p string  		|  D42 password
  -print-data  		|  prints data
  -u string  		|  D42 username

The NetFlow collector will capture and send data to Device42 in 5-minute increments _\[by default\]_. You may customize this interval using the _\-i_ command switch.

Device42 will attempt to associate the data it receives with known services _(services known to Device42)_. If there are no services with which to associate the collected data, Device42 will retain one million rows of the most recent data, discarding the oldest information as needed. The data in this million-row buffer is matched against as new services are discovered.

## Licensing

Please contact Device42 today for a demo license. Email [support@device42.com](mailto:support@device42.com) to **take NetFlow for a spin today!**
