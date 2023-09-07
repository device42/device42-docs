---
title: "Using APIs for Custom Autodiscovery"
sidebar_position: 34
---
If you find that there are autodiscovery methods that you need and that aren't provided by Device42, you can create your own autodiscovery tools that use Device42 APIs to load data into a Device42 instance.

Device42 provides several sample scripts that you can use as a basis for your custom autodiscovery tools. These tools are available at the [Device42 Autodiscovery Tools Site](https://github.com/device42/Device42-AutoDiscovery-Scripts) and include the following scripts:

- `api-sample.py`: Runs against a single Windows server and uploads info to the Device42 appliance.

- `ad-sample.py`: Runs against Active Directory computers, servers, or a list of IP addresses, and uploads discovered systems' info to the Device42 appliance.

- `d42_api_linux_upload_sample_script.py`: Runs on a single *nix-based system and uploads info to the Device42 appliance.

- `sample-script-facter-facts-to-d42.py`: Runs on a Puppet master and uploads nodes info from facter fact files to the Device42 appliance.

- `d42_api_solaris_sample_script.py`: Runs on an individual Solaris system and uploads info to the Device42 appliance.

- `linux_auto_dics_multi.py`: Runs on a *nix system with Paramiko to get inventory using SSH from an IP range and upload to the Device42 appliance.

- `winservice.py`: Can run against Active Directory computers, servers, or a list of IP addresses and upload discovered services as application components to the Device42 appliance.

All these scripts are written in Python, but you can use any programming language that can call RESTful APIs.

The remainder of this document will show an example of how to use one of these scripts. We will use IronPython for this example because it is simple to install. You can drop the executables into a folder, and as long as you have the .NET 4 framework installed, you are good to go.

* * *

## Install IronPython Binaries

### Requirements:

- IronPython, available [here](https://ironpython.net/download/)
- The .NET Framework 4, available [here](https://www.microsoft.com/en-us/download/details.aspx?id=17851)
- PowerShell version 1 or 2 (preferred)
- Device42 sample scripts, latest versions available [here (under `src` folder)](https://github.com/device42/Device42-AutoDiscovery-Scripts)

When you have installed PowerShell and the .NET Framework 4, download the installer or binaries for IronPython. We recommend the binaries because you can unzip the folder and you are ready to go.

![1. Install IronPython](/assets/images/install_ironpython.png)

## Download the Sample Script (`api-sample.py`)

Download the latest script [here](https://github.com/device42/Device42-AutoDiscovery-Scripts/tree/master/src).

![2. Download the Sample Script](/assets/images/wpid2787-2._Download_the_sample_script__api-sample.py_.png)

Click on the script file to open it, then click the download button and save the file in the same folder as the unzipped binaries for IronPython.

## Get Sample Script Ready for Your Environment

Open the script and locate the following sections:

![3. Get Sample Script Ready for Your Environment](/assets/images/wpid2788-3.png)

Edit these sections as follows:

* Change the value of `BASE_URL:` to the URL for the Device42 appliance. Ensure there is no trailing `/` at the end of the URL. Example: `BASE_URL='https://d42app.device42.pvt'`.
* Change the values for `USER` and `PASSWORD` to the credentials for an administrator user with log-in access to the Device42 appliance.

## Run the Script

From the command line, go to the folder containing the binaries for IronPython and run **ipy.exe**. Pass the script name as the argument:

![4. Running the Script](/assets/images/wpid2789-4.png)

You should see the device added in the Device42 portal with the IP and MAC address details.
