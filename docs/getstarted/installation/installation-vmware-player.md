---
title: "VMware Player - Installation"
sidebar_position: 15
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

## Set Up the Main Appliance in VMware Player or Workstation

Download the compressed [Device42 virtual appliance](https://www.device42.com/download/) and do the following:
1. Use 7-Zip to unzip the downloaded file.
2. Open or Import the virtual appliance into VMware Player.
   
    ![VMware options](/assets/images/open-appliance.png)

3. Once the import is finished, power on the new virtual appliance by clicking "Play virtual machine".
   
    ![Power on the Device42 Virtual Appliance](/assets/images/wpid6196-media_1331534654060.png)

4. Log in to the console using the default credentials:
    Username: `device42`
    Password: `adm!nd42` 
     
    ![Login to the Device42 Console](/assets/images/d42-console-login-screen-v15.png)

5. On the console, change the password using option **10** and use option **1** to configure the IP and choose your settings. Please use a **static IP address** for all production Device42 VMs to avoid connectivity issues.

    ![Configure IP/Networking](/assets/images/d42-console-menu-config-IP-v15.png)

    You may apply updates and do other menu-related work using SSH. Please note that root login has been disabled.
    
6. **Optional:** Create a DNS entry for the new IP address for the new virtual appliance.
7. Point your browser to `https://FQDN(Fully Qualified Domain Name) or IP-address` to go to the Device42 web UI.
8. Log in to Device42 using the default credentials. 
    - **Username** `admin` 
    - **Password:** `adm!nd42` 

    **Please change the password as soon as you log in.**

<ThemedImage
  alt="Device42 Web Interface Login Screen v19"
  sources={{
    light: useBaseUrl('/assets/images/login-light.png'),
    dark: useBaseUrl('/assets/images/login-dark.png'),
  }}
  style={{ width: '70%' }} 
/>
