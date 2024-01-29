---
title: "Remote Collector (RC)"
sidebar_position: 24
---

## The Device42 Remote Collector (RC)

The Remote Collector _(aka the "RC")_ is a virtual appliance that is deployed separately from the D42 main appliance _(aka Device42 "MA")_. It is sent autodiscovery jobs and controlled from the MA, executing those jobs remotely. All autodiscovery jobs, including Power SNMP jobs \[v14+\] are supported and can be run remotely on an RC! _\[Please note: Windows discovery requires at least one [Windows Discovery Service](getstarted/installation/windows-discovery-service-installation.md) ("WDS") instance be deployed\]._

You may configure an unlimited number of remote collector appliances as needed across your environment. RCs facilitate SNMP, IPMI, hypervisor and other auto discoveries across networks with only https access required, eliminating the need to open numerous ports up across network segments.

## RC Installation and Configuration

To download the Remote Collector, head to our [Auto-Discovery tools download page.](https://www.device42.com/autodiscovery/); Click the Download button under "D42 Remote Collector", which should be found at the top of the page.

We currently offer an `.OVF` image for direct download. Should your hypervisor not support the OVF VM image format, please contact support@device42.com and we'll will work with you to provide an image compatible with your hypervisor. Deploy the VM image to your hypervisor, boot it, and log in using the VM console or via SSH, Port 22. The default credentials for the Remote Collector are:

```
username: client
password: device42
```

After logging in to the console, you will see the main console menu:

![](/assets/images/D42-23170_RC-console-menu-3-18-06-DM.png)

### Initial (first-boot) Network Config

Upon initial installation, you will first need to configure your network settings so you can proceed with setup. A static IP is best as D42 can lose contact with an RC with a changing (dynamic) IP address. On the main console menu, choose "Network Interfaces" and press enter on the name of your interface to edit it. Use the space bar to un-select DHCP and assign a static IP address using the following screen.

![](/assets/images/D42-23170_RC-edit-network-interface.png)

**The "PREFIX" field above is asking for an integer that represents the subnet mask in slash notation, e.g. for 255.255.255.0, which is a /24, you will enter _24_.** Note that the PREFIX field has been removed and as soon as your RC connects to Device42, it will be updated.

### Connect your RC to Device42

Each RC must be able to communicate with the main appliance on port 443. After initial communication, a WebSocket connection is established between the RC & MA on an ephemeral port (selected randomly), allowing full-duplex communication between them. The Device42 main appliance can thus talk to and control the RC over the WebSocket.

From the main console menu, select "RC Setup" to register your RC with your main Device42 appliance. To do this, you will need to first generate a One Time Password (OTP) from Device42. Visit Device42 in your browser and via the main menu, head to _Discovery -> Remote Collectors_. Here you will be able to view any existing registered RCs and generate an OTP to register a new one:

![](/assets/images/D42-23170_RC-list-page.png)

Click "Generate OTP" in the top right and copy the password you receive.

In the RC console, under "RC Setup" enter your OTP along with the IP address or FQDN of the main appliance:

![](/assets/images/D42-23170_RC-setup-OTP.png)

Once initial setup is complete, more detailed information about the RCs configuration is visible under the RC Setup sub-menu, including the option to reset and re-configure your RC.

![](/assets/images/D42-23170_RC-setup-before-reset.png)

After the initial registration on port 443, all subsequent communication occurs over a secure WebSocket channel between RC and MA.

## View/Edit Remote Collector

Click the Remote Collector _Name_ on the list page to view or edit a remote collector. Click the _Edit_ button to edit the RC.

Note that the view and edit pages now includes a _MAC Address_ field showing the address of the RC. Be careful editing this address; an incorrect address will cause the RC to disconnect.

![](/assets/images/D42-23170_RC-edit-page.png)

### Remote Collector List Page Actions

The Remote Collector list page Actions Menu contains commands you can use for selected collectors.

![](/assets/images/D42-23170_RC-list-page-action-log-level-action-dd.png)

![](/assets/images/D42-23170_RC-list-page-action-log-level.png)

- **Delete with Detailed Confirmation** – Delete the selected RC(s) with a confirmation prompt.
- **Export Selected Items as CSV** – Export a CSV file with information about the selected RC(s).
- **Clear Logs** – Clear the log files for the selected RC(s).
- **Reboot Collectors** – Reboot the selected connected RC(s). Note that if your RC is exhibiting unusual behavior, rebooting the RC can be a good first step to resolving the problem.
- **Set Remote Collector Logging Level** – Set the RC logging level. Select _Information_ to reduce the log file size. (You can also set a Global Logging Level via the RC console.)

![](/assets/images/D42-23170_RC-list-page-set-log-level-2.png)

## Remote Controller Proxy Settings

The proxy settings within the Main Appliance and RC are set independently but are often identical. To reduce the potential for error, the RC can pick up proxy settings that have been configured. You can view and edit the RC proxy settings within the RC view of the Main Appliance.

## RC Fallback Endpoint

The fallback Administrative Collector endpoint is designed to communicate with a Collector that may be offline or just cannot be reached through the normal messaging protocol. 

If an bulk action cannot send the request to perform the action to the Collector using the standard messaging protocol, the same action request will be sent to the Administrative API endpoint in hopes that that path will succeed.

The fallback endpoint is used so an RC that's offline but running can receive log level changes or updated proxy settings.

## Scalability

Device42 remote collectors provide robust scalability by offloading discovery workloads from you main appliance(s). You can deploy multiple remote collectors for each main appliance. Device42 recommends one remote collector with one WDS (Windows Discovery Service) for each 1,000 workloads.

## Remote Collector (RC) Deployment Example

Remote collectors are extremely flexible, and make discovery with Device42 easier than ever. You can deploy one or more, with no logical limit to the number of remote collectors. 

![main menu](/assets/images/D42_RC_deploy_example.png)

In the deployment example pictured, a remote collector is deployed within each isolated DMZ Network Segment that, per firewall rules typical of a DMZ, the Device42 appliance is normally unable to directly reach and/or discover. Deploying a remote collector to these segments not only bolsters security by saving the Network Administrator from having to make multiple temporary (or permanent & insecure) firewall rules (_aka ‘holes’_) to allow discovery traffic to pass from the main appliance over the wide range of ports utilized by various vendors APIs. Please note that the diagram does not show the majority of network connectivity that would be present, and instead focuses mainly on what is discovered by the MA vs. the RC, and the communication between the RC & MA.

Instead, as mentioned briefly in the introduction, all communication and discovery information is securely transmitted between the RC and the MA once a connection is established via Port 443 (HTTPS/SSL). This means a single, secure and easily monitored 1:1 rule allows for comprehensive and continuous discovery of the secured network segment \[as often as scheduled or desired\] - without compromising its isolation or security.

## Running Remote Discoveries

Once registered, you can now schedule any autodiscovery jobs from the main appliance, instructing them to run on the remote collectors of your choosing. Each autodiscovery screen now shows a “Remote Collector” drop-down menu. Clicking this box will display all registered Remote Collectors, and allows you to choose the RC you would like the discovery to run from:

![Add SNMP autodiscovery and select Remote Collector](/assets/images/Add-SNMP-autodisc-RC-v15.PNG)

## Updating your Remote Collector (RC)

Device42 Remote Collectors (RCs) are updated automatically as long as they are connected to a Device42 main appliance (MA) instance. Updates to the Device42 MA instance include updates to your Remote Collector(s), and those updates are pushed out automatically as part of the Device42 update process you're used to. Thus, by keeping your main Device42 instance up to date, your can assure your remote collectors will are up to date as well!

## Migrating Existing Power Appliance Jobs to a Remote Collector (RC)

Migrating jobs that were created for the original standalone power appliance is possible with existing tools. Simply follow the [existing power job migration guide here](../infrastructure-management/power-and-environmental-monitoring/power-rc-setup-job-migration.md) to migrate jobs to the new RC of your choice.
