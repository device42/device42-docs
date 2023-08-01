---
title: "Getting Started on a PC"
sidebar_position: 8
---

## From the Start - How to Setup Device42 on a PC hypervisor

### Prerequisites

To use Device42 you will need a hypervisor like Virtualbox, VMWare player or VMware Workstation that can manage and run virtual machine images. If you don't already have one, you can download one Virtualbox for free @ [https://www.virtualbox.org](https://www.virtualbox.org), or alternatively, get [VMware Player here](https://my.vmware.com/en/web/vmware/free#desktop_end_user_computing/vmware_workstation_player/15_0). 

![Virtualbox Download page 2019](/assets/images/virtualbox_DL-hl-2019.png)

To install VirtualBox, open the downloaded file and double-click the "VirtualBox.pkg" icon, then you can find VirtualBox in your Applications list.

![Virtualbox 6.0 Setup](/assets/images/virtualbox_setup_6.0-2019.png)

**Discovery Account WARNING: Please _do not_ set up an autodiscovery / scan using critical \[production\] account credentials! Please create a separate, dedicated account to use _only_ for discovery**

_Depending on permissions granted & your configured password policies, account lock-out could result in an otherwise completely avoidable outage. You, the customer, are responsible for any such behavior that might result if you choose to ignore this requirement._

### Installing Device42

To download Device42, visit [Device42](https://www.device42.com/download/) and enter your name and email address. You will receive a download link in your email momentarily. Once you receive the link, download the VirtualBox version from the options given, as seen in the screenshot below: 

![Download Device42 Virtual Box OVF](/assets/images/DL_d42_HL-2019.png)

Once the file has downloaded, you can unzip it using 7-Zip, which is a free program available through the App store or from their website, [7-Zip](http://www.7-zip.org/). 

![7-Zip installation](/assets/images/2016-01-25-get-started-pc-1.png)

From VirtualBox, File menu --> Import Appliance. Browse to the .ova / .ovf file you downloaded, and follow the on-screen prompts: 

![Virtualbox Import Appliance](/assets/images/Virtualbox_file_import.png)

We recommend 2GB of memory at a minimum and suggest 4GB to be sure Device42 runs smoothly. 

![Memory settings](/assets/images/2016-01-25-get-started-pc-4.png)

After choosing the hard disk you can follow through with any further default settings, but uncheck "Power on after Create" if it is selected.

### Additional VM Settings

Right click on the newly created virtual machine in VirtualBox that appears on the left and choose "Settings". In the window that pops up, select the "System" tab, and then "Processor", and click the checkbox in "Extended Features" to "Enable PAE/NX":

![Enable PAE](/assets/images/2016-01-25-get-started-pc-6.png)

Continuing to the "Network" tab, enable adapter 1 and set it to bridged (note, NAT will also work), and choose the physical NIC/network card you will be using. You can then click OK and close the settings window.

![Enable Network Adapter](/assets/images/2016-01-25-get-started-pc-7.png)

### Starting the Virtual Machine

Once the VM settings have been configured you can power on the virtual appliance. If you receive an audio driver warning you can ignore it. At the login screen, the username is `device42` and the password is `adm!nd42`. Please change these when you first login under option 10.

![Device42 Console Login](/assets/images/d42-console-login-screen-v15.png)

After you are logged in, you can configure your IP settings _(DHCP/Static)_ via Option 1 - **\[Please use a STATIC IP for all production Device42 VMs to avoid connectivity issues\]**

![Device42 menu](/assets/images/20180419-getting-started-virtualbox.png)

You can apply updates and do other menu-related work using by connecting through ssh using the terminal. Please note that root login has been disabled via ssh. Last, point your browser to the address at the top of the console menu and you’re ready to go…

You will receive a "Your Connection is not private" warning in your browser as you are accessing a local server that does not have a signed security certificate but it is safe to click "show advanced" in Chrome or "I understand the risks" in Firefox and proceed through to the Device42 login screen: 

![SSL Warning that you can ignore](/assets/images/2016-01-08-get-started-mac-13.png)

At the login screen you can log in using the default name and password: admin/adm!nd42 and you can now start using Device42!

![Device42 Web UI Login](/assets/images/v15-login-screen.PNG)

## What's next?

To continue through our documentation, you may want to view our [tutorials](getstarted/tutorials/device42-tutorial.md) next.
