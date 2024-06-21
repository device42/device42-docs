---
title: "Windows Discovery Service Installation"
sidebar_position: 8
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

The Windows Discovery Service (WDS) should be connected directly to a Remote Collector (RC) to enable WMI discovery directly from the Device42 UI.

The .NET service must be installed on a Windows machine with the .NET runtimes installed.

* * *

## Installing the WDS Service

1) Download the current WDS `.msi` installer file from the [Device42 autodiscovery tools page](https://www.device42.com/autodiscovery/).

2) Run the downloaded `Device42Discovery.msi` installer. Click **Next** and follow the prompts to continue with the installation:

![Welcome Device42Discovery Setup Wizard](/assets/images/welcome_d42discovery_wizard.png)

3) Point to your chosen **RC Endpoint**:

![RC Link setup Device42](/assets/images/RC_Link_Setup.png)

a. Enter the Remote Collector IP address or FQDN in the first field.

b. From the Device42 Main Appliance, navigate to **Discovery > Remote Collectors**.

<ThemedImage
  alt="Remote Collectors menu location"
  sources={{
    light: useBaseUrl('/assets/images/windows-discovery-service-installation/remote-collectors-menu-light.png'),
    dark: useBaseUrl('/assets/images/windows-discovery-service-installation/remote-collectors-menu-dark.png'),
  }}
/>

4) Generate a One-Time Pin by clicking the **Generate OTP** button at the upper right of the list page. You'll need the generated OTP during the WDS installation.

<ThemedImage
  alt="Generate OTP"
  sources={{
    light: useBaseUrl('/assets/images/windows-discovery-service-installation/generate-otp-light.png'),
    dark: useBaseUrl('/assets/images/windows-discovery-service-installation/generate-otp-dark.png'),
  }}
/>

5) Accept the default installation directory for the WDS service or specify a custom installation path:

![Select installation folder](/assets/images/select_install_folder.png)

6) Click **Next** to confirm installation:

![Confirm Installation](/assets/images/confirm_installation.png)

7) The installation should now be complete. Remote collectors in the Device42 UI should now be renamed to reflect that the WDS has been set up and connected. The WDS Service indicator icon will be green to indicate the WDS is connected and communicating:

<ThemedImage
  alt="Running and connected WDS in list page"
  sources={{
    light: useBaseUrl('/assets/images/windows-discovery-service-installation/wds-remote-collector-light.png'),
    dark: useBaseUrl('/assets/images/windows-discovery-service-installation/wds-remote-collector-dark.png'),
  }}
/>

### Securing WDS Implementation in Device42

Both the Main Appliance and the Remote Collector ship with a self-signed certificate, making it necessary to support invalid certificates with the default installation of Device42.

Install a valid certificate on the Main Appliance and Remote Collector. You can then change the default behavior of WDS to not ignore SSL errors by changing the config file for WDS runtime:

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

## Create a New WMI Autodiscovery Job

You are now ready to discover using your new WDS. When creating a new Windows WMI autodiscovery job, choose the WDS connected to the Main Appliance or the Remote Collector with WDS, and configure the job settings to discover Windows Devices:

![](/assets/images/image-3.png)

:::caution
Do not set up an autodiscovery scan using critical production account credentials! Please create a separate, dedicated account to use only for discovery.

Account lock-out could result in an otherwise avoidable outage depending on your permissions and configured password policies. You as a customer are responsible for any such behavior.
:::
* * *

## Update Your WDS Installation

You don't need to update your WDS installation separately. Once it has made its initial connection, updates to the WDS service are pushed automatically and are distributed with regular Device42 Updates.

If you are concerned you aren't running the latest version of WDS, please [update your main Device42 appliance](how-to-videos/update-device42-appliance-how-to.md) to the latest version.
