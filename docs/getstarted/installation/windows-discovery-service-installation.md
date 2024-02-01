---
title: "Windows Discovery Service Installation"
sidebar_position: 8
---

- The Windows Discovery Service (WDS) should be connected directly to a Remote Collectors (RC) to enable WMI discovery directly from the Device42 UI.
- Download the D42 WDS installer from [the D42 Auto-Discovery tools download page.](https://www.device42.com/autodiscovery/)
- The .NET service must be installed on a Windows machine with the .NET runtimes installed.

* * *

## Installing the WDS service

1) Download the current Device42 WDS .msi installer file from the autodiscovery download page.

2) Run the downloaded _Device42Discovery.msi_ installer. Click on “Next” and follow the prompts to continue with the installation:

![Welcome Device42Discovery Setup Wizard](/assets/images/welcome_d42discovery_wizard.png)

3) Point to your chosen RC Endpoint:

![RC Link setup Device42](/assets/images/RC_Link_Setup.png)

a. Enter the Remote Collector IP address or FQDN in the first field.

b. Head over to the Device42 Main Appliance web UI to generate a OTP (one-time password) _\[for both an RC connection or a Device42 connection\]_ for the second field. This can be found by navigating to the main menu, _Discovery > Remote Collectors_:

![](/assets/images/WEB-773_RC-list-page-menu.png)

4) Generate a "One Time Password" by clicking the "Generate OTP" button in the upper right. You'll need the generated OTP during WDS installation:

![](/assets/images/WEB-773_generate-OTP-1.png)

5) Accept the default installation directory for the WDS service _\[optionally, specify a custom install path\]_:

![Select installation folder](/assets/images/select_install_folder.png)

6) Click next to confirm installation:

![Confirm Installation](/assets/images/confirm_installation.png)

7) Installation should now be complete. Remote collectors in the Device42 UI should now be renamed to reflect that the WDS has been set up and connected, and the WDS Service indicator icon will be 'green' as pictured below, indicating a WDS is connected and communicating:


![](/assets/images/image-2.png)

### Securing WDS Implementation in Device42

Both the Main Appliance and the Remote Collector ship with a self-signed certificate, it is therefore necessary in these cases to support invalid certificates with the default installation of Device42. 
You can install a valid certificate on the Main Appliance or Remote Collector. You can then change the default behavior of WDS to not ignore SSL errors by changing the config file for WDS runtime:

```
<configuration>
  <appSettings>
....
    <add key="IgnoreSSLErrors" value="false"/>
....
  </appSettings>
...  
```

* * *

## Creating a new WMI autodiscovery job

You are now ready to discover using your new WDS! When creating a new Windows WMI autodiscovery job, choose the WDS connected to the Main Appliance, or the Remote Collector with WDS and configure the job settings to discover Windows Devices:

![](/assets/images/image-3.png)

**_WARNING:_ Please do not set up an autodiscovery / scan using critical production account credentials!** _Depending on permissions granted & your configured password policies, account lock-out could result in an otherwise avoidable outage. You, the customer, are responsible for any such behavior that might result if you choose to ignore this requirement._

* * *

## Updating your WDS Installation

Please note that you **Do not need to update your WDS installation separately**. Once it has made its initial connection, updates to the WDS service are pushed automatically and are distributed with regular Device42 Updates.

If you are concerned you aren't running the latest version of WDS, please [update your main Device42 appliance](how-to-videos/update-device42-appliance-how-to.md) to the latest version.
