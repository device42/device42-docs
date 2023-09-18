---
title: "Getting Started on a Mac"
sidebar_position: 13
---

## From the Start - How to Setup Device42 from the Beginning on a Mac

### Prerequisites:

To use Device42 you will need a hypervisor like Virtualbox, VMWare Workstation, or VMware Player, etc. that can run virtual machines. If you do not have one, you can download VirtualBox for free \[it's Open Source\] on their website, https://www.virtualbox.org:

![Download VirtualBox](/assets/images/2016-01-08-get-started-mac-2.png)

To install VirtualBox, open the downloaded file and double click the "VirtualBox.pkg" icon. You should then be able to find VirtualBox in your Applications list.

![VirtualBox Installation](/assets/images/2016-01-08-get-started-mac-3.png)

## Installing Device42

To download Device42, visit [Device42](https://www.device42.com/download/) and enter your name and work email address. You will receive a download link in your email momentarily. Once you receive the link, choose the download labelled 'VirtualBox' from the download options given, as seen in the screenshot below: 

![Download Device42 Virtual Box OVF](/assets/images/DL_d42_HL-2019.png)

Once the file has downloaded, you will need to unzip it.

From VirtualBox, click the "New" icon, and name your virtual machine, we will use "device42Setup" in this tutorial: 

![Import D42 OVF virtualbox Mac](/assets/images/virtualbox-Mac_import_appliance-2019.png)

Follow the on screen prompts, giving your new VM a name _(we're using "Device42 v15.12" in this case)_ and pressing "Continue" after answering the questions on each screen. When asked about RAM, we recommend 2GB memory at a minimum, but suggest 4GB-8GB RAM to ensure Device42 runs smoothly if you have it available. Please be patient while the D42 VM imports \[it shouldn't take too long\]: 

![Virtualbox Mac import in progress](/assets/images/virtualbox_mac_importing_in_progress.png)

![Virtualbox Mac D42 OVF import complete](/assets/images/virtualbox_Mac_imported_d42VM-2019.png)

Go ahead and "Power On" your new Device42 VM after the import completes. Simply select the new VM you just imported from the list on the left, and press the green "Start" arrow at the top, and once the appliance boots, you will see the Device42 console:

![Virtualbox on Mac running D42 VM](/assets/images/vbox_mac_d42_running.png)

Log in to the console using the default credentials, user: `device42` and password: `d42adm!n`. Once you've logged in, continue below.

## Additional VM Settings

Right click on the newly created virtual machine in VirtualBox that appears on the left and choose "Settings" (or highlight it and select the "Settings" gear icon from the top toolbar). In the window that pops up, select the "System" tab, and then "Processor", and click the checkbox in "Extended Features" to "Enable PAE/NX": 

![Enable PAE](/assets/images/2016-01-08-get-started-mac-9.png)

Continuing to the "Network" tab, enable adapter 1 and set it to bridged (note, NAT will also work), and choose the physical NIC/network card you will be using. You can then click OK and close the settings window.

![Enable Network Adapter](/assets/images/2016-01-08-get-started-mac-10.png)

## Configuring your Device42 VM via the Console

Power on your Device42 main appliance, if you haven't already. If you happen to receive an audio driver warning, you can safely ignore it.

At the login screen, the username is: `device42` and the password is: `adm!nd42`. Please change these when you first login \[option 10\]. 

![Device42 Login](/assets/images/2016-01-08-get-started-mac-11.png)

After you are logged in, you can configure your ip settings \[Please use a STATIC IP for all production Device42 VMs to avoid connectivity issues\] under option 1: 

![Device42 menu](/assets/images/2016-01-08-get-started-mac-12.png)

You can apply updates and do other menu-related work using by connecting through ssh using the terminal. Please note that root login has been disabled via ssh. Last, point your browser to the address at the top of the console menu and you’re ready to go…

You will receive a **"Your Connection is not private"** warning in your browser because you are accessing a local server that is using a 'self-signed' certificate - **Your connection _is_ secure, and it is completely safe to click "show advanced" in Chrome or "I understand the risks" in Firefox and proceed through to the Device42 login screen**:

On Chrome

![](/assets/images/2016-01-08-get-started-mac-13.png)


On Firefox

![](/assets/images/add_self-signed-cert-exception.png)


Once you've added your exception, you'll see the login screen. Go ahead and login using the default Device42 web-ui username: `admin` and password: `adm!nd42`

At this point, you should be logged in, and can now start using Device42!

![Device42 UI Login Screen](/assets/images/d42_UI-LOGIN_SCREEN.png)

## What's next?

To continue through our documentation, you may want to view our [tutorials](getstarted/tutorials/device42-tutorial.md) next.
