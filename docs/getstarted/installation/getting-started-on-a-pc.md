---
title: "Getting Started on a PC"
sidebar_position: 14
---

import extract from '/assets/images/getting-started-on-a-pc/2extract.PNG'

## From the Start: How to Setup Device42 on a PC Hypervisor

### Prerequisites

To use Device42 you will need a hypervisor like Virtualbox, VMWare player, or VMware Workstation that can manage and run virtual machine images. If you don't already have one, you can download one Virtualbox for free from [https://www.virtualbox.org](https://www.virtualbox.org), or get [VMware Player here](https://customerconnect.vmware.com/en/downloads/free#desktop_end_user_computing/vmware_workstation_player/15_0). 

![Virtualbox Download page 2024](/assets/images/getting-started-on-a-pc/virtualbox-2024.png)

To install VirtualBox, open the downloaded file and double-click the "VirtualBox.pkg" icon, then you can find VirtualBox in your Applications list.

:::caution
Please do not set up an autodiscovery scan using critical production account credentials. Create a separate, dedicated account to use only for discovery.

Depending on the granted permissions and configured password policies, using production account credentials could result in account lockout, leading to an otherwise completely avoidable outage.
:::

### Installing Device42

To download Device42, visit [Device42](https://www.device42.com/download/) and enter your name and email address. You will receive a download link in your email momentarily. When you receive the link, download the VirtualBox version from the options given: 

![Download Device42 Virtual Box OVF](/assets/images/getting-started-on-a-pc/software-download.png)

Once downloaded, extract the file contents from the zip file. 

<img src={extract} width="70%"/>

From the VirtualBox Manager, click **Import**. 

![Import](/assets/images/getting-started-on-a-pc/3-import.PNG)

Browse to the `.ova` or `.ovf` file you downloaded, and follow the on-screen prompts. Visit [Sizing Recommendations](sizing-recommendations.md) to see the minimum requirements needed to run Device42 smoothly.

![Choose file](/assets/images/getting-started-on-a-pc/4-choose-file.PNG)

After choosing the hard disk you can follow through with any further default settings.

![After import options](/assets/images/getting-started-on-a-pc/6-after-import.PNG)

### Additional VM Settings

Right-click on the newly created virtual machine in VirtualBox that appears on the left and choose **Settings**. In the window that pops up, select the **System > Processor** tab and click the **Extended Features:** checkbox to **Enable PAE/NX**.

![CPU settings](/assets/images/getting-started-on-a-pc/9-cpu-settings.PNG)

Continue to the **Network** tab, and confirm that **Adapter 1** is enabled and the "Bridged adapter" or "NAT" option is selected. Then choose the **Name** of the physical NIC or network card you will be using.

![Enable Network Adapter](/assets/images/getting-started-on-a-pc/10-network.PNG)

To get rid of an "Invalid settings detected" warning, change the **Display** settings to "VMSVGA": 

![Choose file](/assets/images/getting-started-on-a-pc/12-graphics.PNG)

### Starting the Virtual Machine

When the VM settings have been configured, you can power on the virtual appliance. If you receive an audio driver warning you can ignore it. At the login screen, use the username `device42` and the password `adm!nd42`. 

:::info
Please change the default credentials when you first log in by entering option **10**.
:::

![Device42 Console Login](/assets/images/getting-started-on-a-pc/14-login.PNG)

When you are logged in, enter **1** to configure your IP settings _(DHCP/Static)_.  Please use a **static IP** for all production Device42 VMs to avoid connectivity issues.

![Device42 console menu](/assets/images/getting-started-on-a-pc/15-logged-in.PNG)

You can apply updates and do other menu-related work by connecting via SSH in the terminal. Please note that the `root` login has been disabled via SSH. Lastly, point your browser to the address at the top of the console menu.

You will receive a "Your Connection is not private" warning in your browser as you are accessing a local server that does not have a signed security certificate but it is safe to click "show advanced" in Chrome or "I understand the risks" in Firefox and proceed through to the Device42 login screen: 

![SSL Warning that you can ignore](/assets/images/2016-01-08-get-started-mac-13.png)

Log in using the default credentials and start using Device42!
- Name: `admin`
- Password: `adm!nd42` 

![Device42 Web UI Login](/assets/images/v15-login-screen.PNG)

## What's next?

To continue through our documentation, you may want to view our [tutorials](/getstarted/tutorials/device42-tutorial.mdx) next.
