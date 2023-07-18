---
title: "Xen or KVM using virt-manager - Installation"
sidebar_position: 13
---

Here are the installation instructions for installing the Device42 appliance on Xen or KVM based platforms...

## Download and bunzip2

![Download and bunzip2](/assets/images/wpid6122-Download_and_bunzip2.png)

The raw image for Xen/KVM has been compressed using bzip2. Once you get the file on the kvm host, you can issue bunzip2 to uncompress the file.

## Install

![Install](/assets/images/wpid6123-Download_and_Install.png)

Once you unzip the downloaded raw image, create a new virtual machine with setting of "Import existing disk image".  
If you don't see the option to "Import existing disk Image", please follow these instructions : [How do I Install device42 xen/kvm appliance if import existing disk image option is missing?](https://device42.zendesk.com/entries/22412668)

## Choosing OS and version

![Choosing OS and version](/assets/images/wpid6121-Choosing_OS_and_version.png)

Choose Linux & Ubuntu 14.04 for Operating system type and version. If you don't see the option for 14.04, choose the latest version avaialble(as shown above).

![](/assets/images/wpid6124-media_1326264722468.png)

Allocate **AT LEAST** 8 GB RAM and 2 vCPU for production appliances.

![](/assets/images/wpid6125-media_1326264734201.png)

Choose your virtualization type from Advanced options and x86\_64 as architecture and you are ready to go.

## Setting up the appliance and logging in.

- Once the import is finished, power on new virtual appliance.
- Login to console with default username device42 and default password adm!nd42 .You can change the password using option 10 on the menu.
- On the console, configure the IP and choose the settings you desire \[Please use a STATIC IP for all production Device42 VMs to avoid connectivity issues\].
- Optional: Create a DNS entry for the new IP address for the new virtual appliance.
- Point your browser to https://FQDN(Fully Qualified Domain Name) or IP address and you are ready to go.
- The default username is admin and password is adm!nd42 (NOTE: Use (ubuntu/default) for power appliance). You can change the password with option 10.
    
    ![](/assets/images/wpid6128-media_1418268309382.png)
    

default login : device42  
default password: adm!nd42  
(NOTE: Use (ubuntu/default) for power appliance)

You can change the password with option 10 below.

## Configure an IP

![Configure an IP](/assets/images/wpid6129-Above_steps_in_images.png)

Configure an IP address for the Device42 appliance...

![](/assets/images/wpid6126-media_1338939487714.png)

The default password for user device42 can now be changed from the console menu using option 10. The default username/password is admin/adm!nd42. Please be sure to change it after you login.

You can apply updates and do other menu-related work using ssh. Please note that root login has been disabled via ssh.

Last, point your browser to the address at the top of the console menu and you're ready to go...

Enjoy!

![Device42 UI Login Screen](/assets/images/d42_UI-LOGIN_SCREEN.png)
