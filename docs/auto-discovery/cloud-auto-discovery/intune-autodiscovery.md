---
title: "Intune Autodiscovery"
sidebar_position: 5
---

## Intune Autodiscovery

Microsoft Intune is a cloud-based service that focuses on **mobile device management (MDM)** and **mobile application management (MAM)**. An organization can control how its devices are used, including mobile phones, tablets, and laptops, and can also configure specific policies to control applications.

Please use the following link to provide admin consent in the azure portal for the D42 discovery job:

https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/grant-admin-consent

### Minimum Requirements

- Active Intune license on the tenant
- Grant admin consent for these application permissions:
    - DeviceManagementApps.Read.All
    - DeviceManagementManagedDevices.Read.All
    - User.Read.All
- Do NOT use Delegated Credentials for Intune autodiscovery jobs.

Recommended Steps:

1\. Create an app registration within the Azure portal on the same tenant where Intune resides.

- Name: Located in Branding & properties
- Client ID and Secret: Located in Certificates & secrets
- API Permissions:
    - Microsoft Graph application permissions listed above
    - Grant admin consent – Azure [How to Link](https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/grant-admin-consent)

2\. Take the values from 1b (Client ID & Secret)  and enter them into the D42 job options

- Enter the Azure application (client) ID into the discovery job Client ID field
- Enter the Azure secret value into the discovery job Client Credential field

### Intune Discovery Items

Intune discovery identifies mobile devices and mobile application software managed by Intune.

![](/assets/images/Intune-AD-1.png)

Select _Intune_ as cloud autodiscovery _Type_ to display the job options.

- **Name** – name for the discovery job.
- **VRF Group** – select or add a VRF group.
- **Remote Collector** – select the RC to use for the job.
- **URL** – enter the URL for the job (for example: `https://login.microsoftonline.com/[tenant domain or ID]`).
- **Client ID** – enter or add the client ID secret for the job.
- **Client Credential** – enter or add the client credential secret for the job.
- **Overwrite existing device hostname with discovered hostname** - (not pictured) select to rename the device with the discovered name.
- **Strip domain name** – strip the domain suffix from discovered device names (yes/no).
- **Object Category for discovered devices** – select or add an object category for devices.
- **Service Level** - set the [_Service Level_](index.mdx#service-level-and-object-category-options) of the job to be applied to the discovered items. For example, "Development", "Deployment", or "Production".
- **Tags for discovered devices** – enter comma-separated tags for devices.
- **Customer for discovered devices** – select or add customer.
- **Debug level** – select the debug level for the job.
- **Discover Software** – discovered managed software applications (yes/no).
- **Initial Software Type** – select the type for discovered software.
- **Notes** – optional notes for the job.

Scroll down to the bottom of the page to define a schedule for the Intune discovery job to run.

![](/assets/images/discovery_cloud_platforms_autodiscovery_intune-autodiscovery.png)

Click **Save** to save the Intune discovery job.

### Intune OS Names

Intune OS data will take a lower precedence to the more authoritative sources like OS-level discovery. For example, the Device42 agent will pick up "Microsoft Windows 10 Enterprise" compared to the generic Intune name "Windows". The lower precedence ensures more detailed OS names are collected, enhancing the capability to filter the data.

### Renaming Intune Devices

Devices within Intune are renamed during the build process. If a device name is not being updated as expected following Device42 autodiscovery, or after being renamed and updated in Intune, select the **Overwrite existing device hostname with discovered hostname** option.

![](/assets/images/intune-overwrite-device-name.png)

