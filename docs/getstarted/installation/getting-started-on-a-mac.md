---
title: "Getting Started on a Mac"
sidebar_position: 13
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

import olderVbImage from '/assets/images/getting-started-on-a-mac/1-download-arm64.png'
import openImage from '/assets/images/getting-started-on-a-mac/2-open-virtualbox.png'
import successImage from '/assets/images/getting-started-on-a-mac/3-installation-success.png'

## From the Start: How to Setup Device42 from the Beginning on a Mac

### Prerequisites:

To use Device42, use a hypervisor like [VirtualBox](https://www.virtualbox.org), VMWare Workstation, or [VMware Player](https://www.vmware.com/content/vmware/vmware-published-sites/us/products/desktop-hypervisor.html.html.html) to run a virtual machine. We'll use the open-source VirtualBox option in this guide.

For Macs with Intel processors, [click here to download](https://www.virtualbox.org/wiki/Downloads) the latest `.dmg` file from VirtualBox.

![Download VirtualBox](/assets/images/getting-started-on-a-mac/1-download-intel.png)

For Macs with Apple Silicon processors (M1 and M2), download VirtualBox from "[​Developer preview for macOS / Arm64 (M1/M2) hosts](https://www.virtualbox.org/wiki/Download_Old_Builds_7_0)".

<img src={olderVbImage} width="70%"/>

Open the downloaded file, double click the "VirtualBox.pkg" icon, and install VirtualBox.

<img src={openImage} width="70%"/>

<img src={successImage} width="70%"/>

## Installing Device42

To download Device42, visit [Device42](https://www.device42.com/download/) and enter your name and work email address. You will receive a download link in your email momentarily. Choose the download labelled "VMware/Oracle VirtualBox" from the options.

![Download Device42 Virtual Box OVF](/assets/images/getting-started-on-a-mac/4-software-download.png)

Double click the downloaded file and unzip it.

From VirtualBox, click the **Import** icon and follow the on-screen prompts. 

![Import button](/assets/images/getting-started-on-a-mac/8-import-button.png)

Browse to the OVF file you unzipped earlier. 

![Select OVF](/assets/images/getting-started-on-a-mac/8-import-ovf.png)

Visit [Sizing Recommendations](sizing-recommendations.md) for our recommended resource allocation specifications. 

![Settings](/assets/images/getting-started-on-a-mac/9-appliance-settings.png)

Please be patient while the Device42 VM imports, it shouldn't take too long. 

![Importing OVF](/assets/images/getting-started-on-a-mac/10-importing-appliance.png)

After the import completes, click **Power On** from the list on the left to start your new Device42 VM. press the green **Start** arrow at the top, and once the appliance boots, you will see the Device42 console:

![Virtualbox on Mac running D42 VM](/assets/images/vbox_mac_d42_running.png)

Log in to the console using the default credentials:
- Username: `device42` 
- Password: `d42adm!n`

## Additional VM Settings

Right-click on the newly created virtual machine in VirtualBox that appears on the left and choose **Settings**. In the window that pops up, select the **System > Processor** tab and click the **Extended Features:** checkbox to **Enable PAE/NX**.

![Enable PAE](/assets/images/2016-01-08-get-started-mac-9.png)

Continue to the **Network** tab, and confirm that **Adapter 1** is enabled and the "Bridged adapter" or "NAT" option is selected. Then choose the **Name** of the physical NIC or network card you will be using.

![Enable Network Adapter](/assets/images/2016-01-08-get-started-mac-10.png)

## Configuring your Device42 VM via the Console

Power on your Device42 main appliance, if you haven't already. If you happen to receive an audio driver warning, you can safely ignore it.

At the login screen, the username is: `device42` and the password is: `adm!nd42`. Please enter option **10** change these credentials when you first login. 

![Device42 Login](/assets/images/getting-started-on-a-mac/14-login.png)

When you are logged in, enter **1** to configure your IP settings (DHCP/Static). Please use a static IP for all production Device42 VMs to avoid connectivity issues.

![Device42 menu](/assets/images/getting-started-on-a-mac/15-logged-in.png)

You can apply updates and do other menu-related work by connecting through SSH using the terminal. Please note that `root` login has been disabled via SSH. 

Finally, point your browser to the address at the top of the console menu.

You will receive a "Your Connection is not private" warning in your browser because you are accessing a local server that is using a self-signed certificate. Your connection _is_ secure, and it is completely safe to click "show advanced" in Chrome or "I understand the risks" in Firefox and proceed through to the Device42 login screen.

On Chrome:

![](/assets/images/2016-01-08-get-started-mac-13.png)

On Firefox:

![](/assets/images/add_self-signed-cert-exception.png)

When you've added your exception, you'll see the login screen. Login using Device42 web UI with the default credentials:
- Username: `admin` 
- Password: `adm!nd42`
  
Now you can start using Device42.

<ThemedImage
  alt="Device42 UI Login Screen"
  sources={{
    light: useBaseUrl("/assets/images/getting-started-on-a-mac/login-light.png"),
    dark: useBaseUrl("/assets/images/getting-started-on-a-mac/login-dark.png"),
  }}
  style={{ width: '70%' }} 
/>


## What's next?

To continue through our documentation, you may want to view our [tutorials](/getstarted/tutorials/device42-tutorial.mdx) next.
