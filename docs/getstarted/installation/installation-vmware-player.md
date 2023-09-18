---
title: "VMware Player - Installation"
sidebar_position: 15
---

## Setup appliance in vmware player or workstation

- Download the OVF format of Device42.
- Use 7 zip to unzip the downloaded file.
- Open or Import the virtual appliance into vmware player.
- Once the import is finished, power on the new virtual appliance.
- Login to console as device42/adm!nd42. You can change the password with option 10.
- On the console, configure the IP and choose your settings \[Please use a STATIC IP for all production Device42 VMs to avoid connectivity issues\].
- Optional: Create DNS entry for the new IP address for the new virtual appliance.
- Point your browser to https://FQDN(Fully Qualified Domain Name) or IP address and you are ready to go.
- The default username is admin and password is adm!nd42, please change that as soon as you login.

## Here are the steps in images:

![Here are the steps in images:](/assets/images/open-appliance.png)

Power on the machine by clicking "Play virtual machine": 

![Power on the Device42 Virtual Appliance](/assets/images/wpid6196-media_1331534654060.png)

![Login to the Device42 Console](/assets/images/d42-console-login-screen-v15.png)

Default login: device42 Default password: adm!nd42

Change the password using option 10, and then proceed to configure network settings via menu option 1: 

![Configure IP/Networking](/assets/images/d42-console-menu-config-IP-v15.png)

Configure a **static** IP address for the Device42 appliance: 

![Network Config](/assets/images/wpid6197-media_1331534878565.png)

_Note:_ The default password for user device42 MUST be changed using console menu using option 10 to secure your appliance. As mentioned, the default username/password is admin/adm!nd42.

You may apply updates and do other menu-related work using ssh. Please note that root login has been disabled.

Lastly, point your browser to the address you configured \[it can be seen at the top of the console, above the menu\], and you're ready to go!

Enjoy!

![Device42 Web Login Screen](/assets/images/d42-web-interface-login-screen-v15.png)
