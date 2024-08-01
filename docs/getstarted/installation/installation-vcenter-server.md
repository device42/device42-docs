---
title: "vCenter Server - Installation"
sidebar_position: 5
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

The following steps will guide you through importing the Device42 Main Appliance into a vCenter Server so you can start mapping your IT Infrastructure.

## Installing Device42 on vCenter Server

Download the compressed [Device42 virtual appliance](https://www.device42.com/download/) and connect to your vCenter Server. 

1. Use 7zip to decompress the downloaded Device42 virtual appliance image.
2. Open vCenter Server, select **File > Deploy OVF template...**, and browse to the location of the extracted `.ovf` file.
   
    ![](/assets/images/wpid6183-media_1326257039196.png)

    ![](/assets/images/wpid6184-media_1326257161923.png)

    ![](/assets/images/wpid6185-media_1326257215753.png)

3. Choose your location, datastore, and NIC by following the VMware prompts, and wait until the import is finished.

    ![](/assets/images/wpid6186-media_1326257260982.png)

    ![](/assets/images/wpid6187-media_1326257290551.png)

4. Power on your newly deployed Device42 virtual appliance.

    ![](/assets/images/wpid6188-media_1326257403442.png)

5. Log in to the console with the default credentials: 
   
   - **Username:** `device42`
   - **Password:** `adm!nd42` 
   
   ![Device42 console login screen](/assets/images/d42-console-login-screen-v15.png)

   **Change the default password using option 10 on the appliance console.**

6. From the console, configure the IP address. Use a **static IP** for all production Device42 VMs to avoid connectivity issues.
   
    ![Device42 appliance console menu - config IP, v15](/assets/images/d42-console-menu-config-IP-v15.png)

    Enter your settings on the Device42 IP address configuration screen: 

    ![](/assets/images/wpid6189-media_1326257599676.png)

7. _Optional:_ Create a DNS entry for the new IP address for the new virtual appliance
8.  Point your browser to `https://FQDN(Fully Qualified Domain Name) or IP-address`.
9.  Log in to the **web interface** using the default credentials:
    
    - **Username** `admin` 
    - **Password:** `adm!nd42` 
    
    **Please change the username and password as soon as you log in.**

    <ThemedImage
    alt="Device42 Web Interface Login Screen v19"
    sources={{
        light: useBaseUrl('/assets/images/login-light.png'),
        dark: useBaseUrl('/assets/images/login-dark.png'),
    }}
    style={{ width: '70%' }} 
    />    

You should be up and running, and are now ready to go! If you have any questions that you can't find answers to in the docs, email support@device42.com.

## Using SSH

You can apply Device42 updates, as well as do other menu-related work using **SSH** via **port 404**. Please note that root login has been disabled.
