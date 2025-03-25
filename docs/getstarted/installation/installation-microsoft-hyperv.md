---
title: "Microsoft HyperV - Installation"
sidebar_position: 6
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

This guide will walk you through installing Device42 on a Microsoft HyperV virtual machine (VM).

## 1. Download the Device42 VM Image 

Download the compressed [Device42 virtual appliance](https://www.device42.com/download/) and use 7zip to unzip the file.

## 2. Create a New Microsoft VM 

Create a VM with a **minimum** of 2 vCPU, 8 GB RAM, and 1 network card, and configure the new VM to use the attached virtual disk file. See [Sizing Recommendations](sizing-recommendations.md) for more details.

:::note
Only HyperV Gen1 VMs are currently supported. In our experience, users have issues deploying Linux VMs as Generation 2 in HyperV. We recommend deploying Device42 only as a version Gen1 VM.
:::

![Specify Name and Location](/assets/images/wpid6173-Here_are_step_1_in_pictures.png) 

![Assign Memory](/assets/images/wpid6174-media_1326982807001.png)

### Configure VM networking

![Configure Networking](/assets/images/wpid6175-media_1326982843209.png)

### Connect a virtual hard disk (VHD)

![Connect VHD](/assets/images/wpid6176-media_1326982909744.png)

![Completing the New Virtual Machine Wizard](/assets/images/wpid6177-media_1326982925110.png)

## 3. Boot the VM and Log In to the Console

![The console after booting](/assets/images/wpid6180-media_1418268180177.png)

Power on the new machine and log in to the console using the default credentials:
- **Username:** `device42`
- **Password:** `adm!nd42`  

Please change the credentials with option **10** below.

## 4. Configure a Static IP and Networking Options

Configure an IP address for the Device42 appliance. Use a static IP or a DHCP address reservation. Ensure that DNS entries are created for every appliance to be used in a production setting. DNS server configuration is a necessary step.

![Device42 VM console menu v19.05](/assets/images/vm-main-menu.png)

![IP config options v19.05](/assets/images/vm-ip-settings.png)

The default password for user `device42` can now be changed from the console menu using option **10**. Please be sure to change it after you log in.

You can apply updates and do other menu-related work using SSH **port 404**. Please note that root login has been disabled via SSH. Attempting to access root will cause the VM to disable itself permanently and is not supported.

## 5. Log In to the Web Interface

Point your browser to the address at the top of the console menu or your newly created DNS entry at `https://FQDN(Fully\_Qualified\_Domain\_Name) or IP address`. 

Log in to the **web interface** using the default credentials:
    
- **Username** `admin`
- **Password:** `adm!nd42`

You are now ready to start discovering your IT infrastructure! 

<ThemedImage
  alt="Device42 Web Interface Login Screen v19.05"
  sources={{
    light: useBaseUrl('/assets/images/login-19.05-light.png'),
    dark: useBaseUrl('/assets/images/login-19.05-dark.png'),
  }}
  style={{ width: '70%' }} 
/>

## Summary of Installation Steps

After you download the Device42 virtual appliance file, take the following steps to set it up:

1. Use 7zip to unzip the downloaded file.
2. Create a Virtual machine with a **minimum** of 2 vCPU, 8 GB RAM for production use, and one network card. Configure the new VM to use the attached virtual disk file.

3. Power on the new machine and log in to the console using the default credentials. Please change the credentials using option **10**.
   
    - **Username:** `device42`
    - **Password:** `adm!nd42`

4. On the console, configure the IP by entering option **1** and choose your settings. **Please use a static (non-DHCP) IP address for all Device42-related appliances.** Create a DNS entry that points to the IP address of the new virtual appliance.
5. Point your browser to `https://FQDN(Fully\_Qualified\_Domain\_Name) or IP address`. Log in to the **web interface** using the default credentials:
    
    - **Username** `admin` 
    - **Password:** `adm!nd42` 

   Please change these credentials as soon as you log in.

You are now ready to start discovering and documenting your IT infrastructure!
