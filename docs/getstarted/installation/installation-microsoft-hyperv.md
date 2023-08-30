---
title: "Microsoft HyperV - Installation"
sidebar_position: 3
---

## Download the Device42 VM image & un-zip

Use 7zip to unzip the downloaded file.

## Create a new Microsoft VM (virtual machine)

Create a VM with a **minimum** of 2 vCPU, 8 GB RAM, and 1 network card; configure the new VM to use the attached vhd. **Note:** _Only HyperV Gen1 VMs are currently supported! In our experience, users have run into issues deploying Linux VMs as Generation 2 in HyperV. With that in mind, we recommend deploying Device42 only as a version Gen1 VM._

![Specify Name and Location](/assets/images/wpid6173-Here_are_step_1_in_pictures.png) 

![Assign Memory](/assets/images/wpid6174-media_1326982807001.png)

## Configure VM networking

![Configure Networking](/assets/images/wpid6175-media_1326982843209.png)

## Connect a virtual hard disk (VHD)

![Connect VHD](/assets/images/wpid6176-media_1326982909744.png)

![Completing the New Virtual Machine Wizard](/assets/images/wpid6177-media_1326982925110.png)

## Boot new virtual machine & login to the console

![The console after booting](/assets/images/wpid6180-media_1418268180177.png)

Power on the new machine and login. The default console login is device42 and default password is adm!nd42 (NOTE: Use (ubuntu/default) for power appliance). You can change the password using option 10.

default login : device42  
default password: adm!nd42  
(NOTE: Use (ubuntu/default) for power appliance)

You can change the password with option 10 below.

## Configure a static IP & networking options

![Option 1 - Configure IP and Networking](/assets/images/wpid6181-media_1338939233735.png)

Next, configure an IP address for the Device42 appliance. A static IP or a DHCP address reservation should be created for the Device42 appliance along with DNS entries for any appliance that will be used in a production setting.

![Configure eth0](/assets/images/wpid6178-media_1338939254095.png)

The default password for user device42 can now be changed from the console menu using option 10. The default username/password is admin/adm!nd42. Please be sure to change it after you login.

You can apply updates and do other menu-related work using SSH \[port 404\] if you so choose. Please note that root login has been disabled via ssh (attempting to access root will cause the VM to disable itself PERMANENTLY, and is NOT supported!)

Lastly, point your browser to the address at the top of the console menu \[or your newly created DNS entry\] and you're ready to go. You are now ready to start discovering your IT infrastructure! Enjoy!

![Device42 UI Login Screen](/assets/images/d42_UI-LOGIN_SCREEN.png)

### Install Steps - Summary

After you download the Device42 virtual appliance file, take following steps to set it up:

1. Use 7zip to unzip the downloaded file.
2. Create a Virtual machine with a **minimum** of 2 vCPU, 8 GB RAM _(for production use)_ and 1 network card; configure the new VM to use the attached vhd. **Note:** _Only HyperV Gen1 VMs are currently supported! In our experience, users have run into issues deploying Linux VMs as Generation 2 in HyperV. With that in mind, we recommend deploying Device42 only as a version Gen1 VM._
3. Power on the new machine and login. The default console login is device42 and default password is adm!nd42 (NOTE: Use (ubuntu/default) for power appliance). You can change the password using option 10.
4. On the console, configure the IP \[option 1\] and choose your settings. Please use a STATIC (non-dhcp) IP address for all Device42 related appliances!
5. Optional: Create a DNS entry that points to the IP address of the new virtual appliance.
6. Point your browser to https://FQDN(Fully\_Qualified\_Domain\_Name) or IP address and you are ready to go.
7. The default username for the Device42 web interface is admin and the password is adm!nd42 -- please change these as soon as you login.

And now you are ready to start discovering & documenting your infrastructure!!
