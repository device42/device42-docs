---
title: "Citrix Xen Server - Installation"
sidebar_position: 2
---

## Installation Citrix Xen Server

Once you download the virtual appliance file, take following steps:

1. Use 7zip to unzip the downloaded file.
2. From XenCenter, Right Click on server > Import
3. Choose Source
4. Choose Server
5. Choose Storage
6. Choose the network card and Finish.
7. Once powered on, go to the console, choose option 1 to configure networking \[Please use a STATIC IP for all production Device42 Installations to avoid connectivity issues\]. Default login for console is _device42_ and default password is _adm!nd42_ (NOTE: Use (_ubuntu/default_) for the power appliance). You can change the password using option 10.
8. Go to https://New\_IP or add the IP of the new VM to DNS (recommended) and go via dns(https://FQDN(Fully Qualified Domain Name)).
9. The default credential is _admin/adm!nd42_ -- **this password should be changed once you login.**

## Here are the steps in images:

![Here are the steps in Images:](/assets/images/wpid5942-wpid-media_1331243551635.png)

## Locate the file you you downloaded

![](/assets/images/wpid5943-wpid-media_1331243622364.png)

## Choose a pool, or accept the default (next):

![](/assets/images/wpid5944-wpid-media_1331243664174.png)

## Choose a storage location for the VM:

![](/assets/images/wpid5945-wpid-media_1331243689911.png)

## Choose the network to connect the VM to:

![](/assets/images/wpid5946-wpid-media_1331243717545.png)

## All finished!

![](/assets/images/wpid5947-wpid-media_1331243745178.png)

## Login to the VM Console:

![](/assets/images/wpid5950-media_1419606545144.png)

Default username: device42  
Default password: adm!nd42  
(NOTE: Use credentials (ubuntu/default) for the power appliance) (NOTE: **Much** Older {32bit, unsupported} versions may have the default login "ubuntu" rather than "device42". If you have an appliance that uses these credentials, UPGRADE it if at all possible!)

You can change the password with option 10 below.

## Configure a static IP address:

![Configure IP](/assets/images/wpid5951-media_1338938610667.png)

Use this option to configure an IP address for the Device42 appliance.

![](/assets/images/wpid5948-media_1338938641495.png)

## Change the default credentials for the VM

The default password for user device42 can now be changed from the console menu using option# 10. The default username/password is admin/adm!nd42. Please be sure to change it after you login.

You can apply updates and do other menu-related work using ssh. Please note that root login has been disabled via ssh.

Last, point your browser to the address at the top of the console menu and you're ready to go...

Enjoy!

![Device42 UI Login Screen](/assets/images/d42_UI-LOGIN_SCREEN.png)
