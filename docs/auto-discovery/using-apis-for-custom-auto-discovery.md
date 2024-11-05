---
title: "Using APIs for Custom Autodiscovery"
sidebar_position: 34
---
If you find you need autodiscovery methods that aren't provided by Device42, you can create your own autodiscovery tools that use Device42 APIs to load data into a Device42 instance.

Device42 provides several [sample scripts](https://github.com/device42/Device42-AutoDiscovery-Scripts) you can use as a basis for custom autodiscovery tools, including the following:

- `api-sample.py`: This script runs against a single Windows server and uploads info to the Device42 appliance.
- `ad-sample.py`: This script runs against Active Directory computers, servers, or a list of IP addresses, and uploads discovered systems info to the Device42 appliance.
- `d42_api_linux_upload_sample_script.py`: This script runs on a single *nix system and uploads info to the Device42 appliance.
- `sample-script-facter-facts-to-d42.py`: This script runs on a Puppet master and uploads nodes info from Facter fact files to the Device42 appliance.
- `d42_api_solaris_sample_script.py`: This script runs on an individual Solaris system and uploads info to the Device42 appliance.
- `linux_auto_dics_multi.py`: This script runs on a *nix system with Paramiko to get inventory using SSH from an IP range, and uploads to the Device42 appliance.
- `winservice.py`: This script runs against Active Directory computers, servers, or a list of IP addresses, and uploads discovered services as application components to the Device42 appliance.

All these scripts are written in Python, but you can use any programming language that can call RESTful APIs.

The remainder of this document demonstrates how to use one of these scripts. We use IronPython for this example because it is simple to install. You can drop the executables into a folder, and as long as you have the .NET 4 framework installed, you are good to go.

* * *

## Install IronPython Binaries

### Requirements

- [IronPython](https://ironpython.net/download/)
- The [.NET Framework 4](https://www.microsoft.com/en-us/download/details.aspx?id=17851)
- PowerShell version 1 or 2 (preferred)
- Device42 [sample scripts](https://github.com/device42/Device42-AutoDiscovery-Scripts) (the latest versions are under the `src` folder)

When you have installed PowerShell and the .NET Framework 4, download the installer or binaries for IronPython (we recommend the binaries because you can unzip the folder), and you are ready to go.

![1. Install IronPython](/assets/images/install_ironpython.png)

## Download the Sample Script (`api-sample.py`)

Download the [latest script](https://github.com/device42/Device42-AutoDiscovery-Scripts/tree/master/src).

![2. Download the sample script (api-sample.py)](/assets/images/autodiscovery-scripts-download-raw.png)

Click on the script file to open it, then click the download button and save the file in the same folder as the unzipped binaries for IronPython.

## Get Sample Script Ready for Your Environment

Open the script and locate the following sections:

- `BASE_URL=`
- `API_DEVICE_URL=BASE_URL+`
- `API_IP_URL    =BASE_URL+`
- `USER    =`
- `PASSWORD=`

![3. Get Sample Script Ready for Your Environment](/assets/images/wpid2788-3.png)

Edit the sections as follows:

- Change the value of `BASE_URL` to the URL for the Device42 appliance. Ensure there is no trailing `/` at the end of the URL. Example: `BASE_URL='https://d42app.device42.pvt'`.
- Change the values for `USER` and `PASSWORD` to the credentials for an administrator user with log-in access to the Device42 appliance.

## Run the Script

From the command line, go to the folder containing the binaries for IronPython and run `ipy.exe`. Pass the script name as the argument:

![4. Running the Script](/assets/images/wpid2789-4.png)

You should see the device added in the Device42 portal with the IP and MAC address details.
