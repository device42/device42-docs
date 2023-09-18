---
title: "vCenter Server - Installation"
sidebar_position: 5
---

The following simple steps in list format are followed the same steps in pictures, both of which will guide you through the import of the Device42 appliance into a vCenter Server so you can start mapping our your IT Infrastructure!

## Installing Device42 on vCenter Server

Begin by [downloading the compressed Device42 virtual appliance](https://www.device42.com/download/) and connecting to your vCenter Server. Next:

1. Use 7zip to decompress the downloaded Device42 virtual appliance image.
2. Open vCenter server & deploy the image: _**File → Deploy**_ the template, browsing to the location of the unzipped files selecting the extracted .ovf.
3. Choose your location, datastore, and NIC by following the VMware prompts, and wait until the import is finished.
4. Power on your newly deployed Device42 virtual appliance.
5. Console login username: `device42`, password: `adm!nd42` - _(Deprecated appliance logins: 32-bit: ubuntu/adm!nd42 -- Power: ubuntu/default)_
6. **Change the default password using Option 10 on the appliance console.**
7. On the console, configure the IP address. _\[Use a STATIC IP for all production Device42 VMs to avoid connectivity issues!\]._
8. _Optional:_ Create a DNS entry for the new IP address for the new virtual appliance
9. Point your browser to https://`FQDN(Fully Qualified Domain Name) or IP-address`.
10. Login to the **web interface** using the default **user**: `admin` **password**: `adm!nd42` - _please change these as soon as you login!_

If all went well, you should be up and running, and are now ready to go! Should you have any questions that you can't find answers to in the docs, email: support@device42.com!

### Using SSH

You can apply Device42 updates, as well as do other menu-related work using **SSH** via **port 404**. **Please note that root login has been disabled!**

* * *

### Installation steps in images

The above instructions in image format:

![](/assets/images/wpid6183-media_1326257039196.png)

![](/assets/images/wpid6184-media_1326257161923.png)

![](/assets/images/wpid6185-media_1326257215753.png)

![](/assets/images/wpid6186-media_1326257260982.png)

![](/assets/images/wpid6187-media_1326257290551.png)

![](/assets/images/wpid6188-media_1326257403442.png)

![Device42 console login screen, v15](/assets/images/d42-console-login-screen-v15.png)

### Default console logon credentials

Default login: `device42` Default PW: `adm!nd42`

### Changing the console password

To change the password, use console Option 10 (pictured below).

### Configuring the appliance's IP address

Configure the appliance's IP address via console Option 1: 

![Device42 appliance console menu - config IP, v15](/assets/images/d42-console-menu-config-IP-v15.png)

The Device42 appliance IP address configuration screen: 

![](/assets/images/wpid6189-media_1326257599676.png)

Last, point your browser to the address at the top of the console menu and you're ready to go... 

![Device42 Web Interface Login Screen v15](/assets/images/d42-web-interface-login-screen-v15.png)
