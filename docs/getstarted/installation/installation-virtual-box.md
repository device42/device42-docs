---
title: "Virtual Box - Installation"
sidebar_position: 6
---

Instructions for installing the Device42 virtual appliance on Oracle VM Virtual Box ( Please use for trial / demo purposes **only**).

When installing to VirtualBox download the OVF format of Device42.

## Unzip the Downloaded File & Import Appliance

![1. Unzip ovf and import appliance](/assets/images/import-appliance.png)

1. Click on the "File" drop down and select "Import Appliance"
2. Browse to the directory containing the .ovf file and click next.
3. Change the Name of the VM to whatever is desired.
4. Modify the CPU and RAM to desired resources.
5. Select "Import" once settings have been finalized. The VM will be ready after a few moments.

_Note you must allocate at least 8GB RAM and 2 vCPU for production use._

**Don't power on yet!**

## Configure the Network Card

![Configure Network Card](/assets/images/wpid6136-Configure_Network_Card.png)

Enable Adapter 1. 
Choose a Bridged Adapter (or NAT if you want) for network access.  
Choose the Physical NIC you will be using.  
Click OK.

## Final Setup

- Power on Virtual appliance. (Ignore audio driver warning if you get any)
- Login with default username and password : device42/adm!nd42 (NOTE: You can change the password with option 10.)
- Choose option 1 to configure networking. Provide a **static IP** to this and all related Device42 appliances \[STATIC IP avoids connectivity issues\]
- Go to https://IP or to DNS if you configure that.
- Default credentials: admin/adm!nd42
- Enjoy!

### Final setup detail images:

![Above steps in images:](/assets/images/wpid6140-media_1418268487332.png)

default login : device42  
default password: adm!nd42  

You can change the password with option 10 below.

### Configure a static IP address

![Configure an IP](/assets/images/wpid6137-media_1338939598543.png)

Use this option to configure an IP address for the Device42 appliance.

![](/assets/images/wpid6141-media_1424640298539.png)

![](/assets/images/wpid6138-media_1338939645773.png)

Change the default password for user device42 from the console menu (option 10). The default username/password is admin/adm!nd42.

You can apply updates and do other menu-related work using SSH port 404. Please note that root login has been disabled!

![Device42 UI Login Screen](/assets/images/d42_UI-LOGIN_SCREEN.png)

You're all set! Point your browser to the IP address visible at the top of the console menu and you're ready to go...

Enjoy!
