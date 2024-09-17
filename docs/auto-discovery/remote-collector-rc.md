---
title: "Remote Collector (RC)"
sidebar_position: 24
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

## The Device42 Remote Collector (RC)

The Remote Collector (RC) is a virtual appliance that is deployed separately from the Device42 Main Appliance (MA). The RC is sent autodiscovery jobs and controlled from the MA, executing those jobs remotely. All autodiscovery jobs, including Power SNMP jobs, are supported and can be run remotely on an RC.

:::note
Windows discovery requires at least one [Windows Discovery Service](getstarted/installation/windows-discovery-service-installation.md) (WDS) instance to be deployed.
:::

You may configure an unlimited number of remote collector appliances as needed across your environment. RCs facilitate SNMP, IPMI, hypervisor, and other auto discoveries across networks requiring only HTTPS access, eliminating the need to open numerous ports up across network segments.

### RC Sizing Recommendations

For one RC per 1000 workloads, the sizing recommendations are:
- 2 vCPU
- 4GB RAM
- 50GB vDisk

## RC Installation and Configuration

To download the Remote Collector, head to our [Autodiscovery tools download page](https://www.device42.com/autodiscovery/). Under "D42 Remote Collector", which should be found at the top of the page click the **Download** button.

We currently offer an `.OVF` image for direct download. Should your hypervisor not support the OVF VM image format, please contact [support@device42.com](mailto:support@device42.com) and we'll will work with you to provide an image compatible with your hypervisor. Deploy the VM image to your hypervisor, boot it, and log in using the VM console or via SSH, Port 22. 

The default credentials for the Remote Collector are:

Username:
    ```
    client
    ```
Password:
    ```
    device42
    ```

After logging in to the console, you will see the main console menu:

![](/assets/images/D42-23170_RC-console-menu-3-18-06-DM.png)

### Initial (First-Boot) Network Config

Upon initial installation, first configure your network settings to proceed with setup. A static IP is best as Device42 can lose contact with an RC with a changing (dynamic) IP address. 

On the main console menu, choose **Network Interfaces** and press enter on the name of your interface to edit it. Use the space bar to unselect DHCP and assign a static IP address using the following screen.

![](/assets/images/D42-23170_RC-edit-network-interface.png)

The **PREFIX** field above asks for an integer that represents the subnet mask in slash notation. For example, for `255.255.255.0`, which is a `/24`, you will enter `24`. Note that the **PREFIX** field has been removed and as soon as your RC connects to Device42, it will be updated.

### Connect your Remote Collector to Device42

Each RC must be able to communicate with the main appliance on port 443. After initial communication, a WebSocket connection is established between the RC and MA on an ephemeral port (selected randomly), allowing full-duplex communication between them. The Device42 main appliance can thus talk to and control the RC over the WebSocket.

From the main console menu, select **RC Setup** to register your RC with your main Device42 appliance. To do this, you will need to first generate a One Time Password (OTP) from Device42. Visit Device42 in your browser and via the main menu, head to **Discovery > Remote Collectors**. Here you will be able to view any existing registered RCs and generate an OTP to register a new one:

<ThemedImage
  alt="RC menu location and OTP button"
  sources={{
    light: useBaseUrl('/assets/images/remote-collector-rc/menu-otp-light.png'),
    dark: useBaseUrl('/assets/images/remote-collector-rc/menu-otp-dark.png'),
  }}
/>

Click **Generate OTP** in the top-right and copy the password you receive.

In the RC console, under **RC Setup** enter your OTP along with the IP address or FQDN of the main appliance:

![](/assets/images/D42-23170_RC-setup-OTP.png)

When the initial setup is complete, more detailed information about the RC's configuration is visible under the **RC Setup** submenu, including the option to reset and reconfigure your RC.

![](/assets/images/D42-23170_RC-setup-before-reset.png)

After the initial registration on port 443, all subsequent communication occurs over a secure WebSocket channel between RC and MA.

## View and Edit Remote Collectors

Click the Remote Collector **Name** on the list page to view or edit a remote collector. Click the **Edit** button to edit the RC.

Note that the view and edit pages now includes a **MAC Address** field showing the address of the RC. Be careful editing this address; an incorrect address will cause the RC to disconnect.

![](/assets/images/D42-23170_RC-edit-page.png)

### Remote Collector List Page Actions

Navigate to the RC list page under **Discovery > Remote Collectors** for the Actions dropdown menu. 

<ThemedImage
  alt="Remote Collector list page actions"
  sources={{
    light: useBaseUrl('/assets/images/remote-collector-rc/actions-menu-light.png'),
    dark: useBaseUrl('/assets/images/remote-collector-rc/actions-menu-dark.png'),
  }}
/>

Select RC(s) from the table, choose one of the following actions, and click the hammer icon to execute the action:

- **Delete with Detailed Confirmation**: Delete the selected RC(s) with a confirmation prompt.
- **Export Selected Items as CSV**: Export a CSV file with information about the selected RC(s).
- **Clear Logs**: Clear the log files for the selected RC(s).
- **Reboot Collectors**: Reboot the selected connected RC(s). Note that if your RC is exhibiting unusual behavior, rebooting the RC can be a good first step to resolving the problem.
- **Set Remote Collector Logging Level**: Set the RC logging level. Select **Information** to reduce the log file size. You can also set a Global Logging Level via the RC console.

<ThemedImage
  alt="Set logging level"
  sources={{
    light: useBaseUrl('/assets/images/remote-collector-rc/logging-level-light.png'),
    dark: useBaseUrl('/assets/images/remote-collector-rc/logging-level-dark.png'),
  }}
/>

## Remote Collector Proxy Settings

The proxy settings within the MA and RC are set independently but are often identical. To reduce the potential for error, the RC can pick up proxy settings that have been configured. You can view and edit the RC proxy settings within the RC view of the MA.

## Scalability

Device42 remote collectors provide robust scalability by offloading discovery workloads from your Main Appliance(s). You can deploy multiple remote collectors for each main appliance. Device42 recommends one remote collector with one Windows Discovery Service for every 1,000 workloads.

## Remote Collector Deployment Example

Remote collectors are extremely flexible, and make discovery with Device42 easier than ever. You can deploy one or more, with no logical limit to the number of remote collectors. 

![main menu](/assets/images/D42_RC_deploy_example.png)

In the deployment example pictured, an RC is deployed within each isolated DMZ Network Segment that, per firewall rules typical of a DMZ, the Device42 appliance is normally unable to directly reach or discover. Deploying a remote collector to these segments bolsters security by saving the Network Administrator from making multiple temporary (or permanent and insecure) firewall rules (aka ‘holes’) to allow discovery traffic to pass from the MA over the wide range of ports used by various vendor APIs. 

Please note that the diagram doesn't show the majority of network connectivity that would be present, and instead focuses mainly on what is discovered by the MA vs. the RC, and the communication between the RC and MA.

As mentioned briefly in the introduction, all communication and discovery information is securely transmitted between the RC and the MA once a connection is established via Port 443 (HTTPS/SSL). This means a single, secure and easily monitored 1:1 rule allows for comprehensive and continuous discovery of the secured network segment - as often as scheduled or desired - without compromising its isolation or security.

## Running Remote Discoveries

Once registered, you can schedule any autodiscovery job from the MA and instruct them to run on the remote collectors of your choosing. Each autodiscovery screen shows a **Remote Collector** dropdown menu. Click this box to display all registered RCs and choose the RC you would like the discovery job to run from:

![Add SNMP autodiscovery and select Remote Collector](/assets/images/Add-SNMP-autodisc-RC-v15.PNG)

## Updating Your Remote Collector

Device42 RCs are updated automatically as long as they are connected to a Device42 MA. Updates to the MA instance include updates to your RC(s), and those updates are pushed out automatically as part of the regular Device42 update process. By keeping your main Device42 instance up to date, can ensure your RCs are up to date as well.

## Migrating Existing Power Appliance Jobs to a Remote Collector

Migrating jobs that were created for the original standalone power appliance is possible with existing tools. 

Follow the [Power Job Migration Guide](../infrastructure-management/power-and-environmental-monitoring/power-rc-setup-job-migration.md) to migrate jobs to the new RC of your choice.
