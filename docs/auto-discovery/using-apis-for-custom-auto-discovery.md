---
title: "Using API's for Custom Autodiscovery"
sidebar_position: 34
---
If you find that there are autodiscovery methods that you need and that aren't provided by Device42, you can create your own autodiscovery tools that use Device42's APIs to load data into a Device42 instance.

Device42 provides a number of sample scripts that you can use as a basis for your own custom autodiscovery tools. These tools are available at [Device42's Auto-Discovery Tools Site](https://github.com/device42/Device42-API) and include the following scripts:

- `api-sample.py`: Runs against a single Windows server and uploads info to the Device42 appliance.

- `ad-sample.py`: Runs against Active Directory computers, servers, or a list of IP addresses, and uploads discovered systems' info to the Device42 appliance.

- `d42_api_linux_upload_sample_script.py`: Runs on a single *nix based system and uploads info to the Device42 appliance.

- `sample-script-facter-facts-to-d42.py`: Runs on a Puppet master and uploads nodes info from facter fact files to the Device42 appliance.

- `d42_api_solaris_sample_script.py`: Runs on an individual Solaris system and uploads info to the Device42 appliance.

- `linux_auto_dics_multi.py`: Runs on a *nix system with paramiko to get inventory using SSH from an IP range and upload to the Device42 appliance.

- `winservice.py`: Can run against Active Directory computers, servers, or a list of IP addresses and upload discovered services as application components to the Device42 appliance.

All of these scripts are written in Python, but you can use any programming language that can call RESTful APIs.

The remainder of this document will show an example of how to use one of these scripts. We will use IronPython for this example because it is simple to install. You can just drop the executables into a folder, and as long as you have the .NET 4 framework installed, you are good to go.

* * *

## Install IronPython Binaries

### Requirements:

- Iron Python, available [here](https://ironpython.net/download/)
- .Net 4 framework, available here: [https://www.microsoft.com/download/en/details.aspx?id=17851](https://www.microsoft.com/download/en/details.aspx?id=17851)
- PowerShell. v1 or 2(preferred)
- Device42 sample scripts, latest version available here(under src folder): [https://github.com/device42/Device42-API](https://github.com/device42/Device42-API)

![1. Install IronPython Binaries](/assets/images/wpid2786-1._Install_IronPython_Binaries.png)

Assuming that you have Powershell and the .Net 4 framework installed already, you can just download the Installer or Binaries for IronPython. We suggest the binaries because you can just unzip the folder and you are ready to go.

## Download the sample script (api-sample.py)

![2. Download the sample script (api-sample.py)](/assets/images/wpid2787-2._Download_the_sample_script__api-sample.py_.png)

You can download the latest script at [https://github.com/device42/Device42-API/tree/master/src.](https://github.com/device42/Device42-API/tree/master/src)

Once you click on the script file, you can click on download and save that file (File>Save Page As...); preferably in same folder as binaries for IronPython are unzipped.

## Get Sample Script ready for your environment

![3. Get Sample Script ready for your environment](/assets/images/wpid2788-3.png)

Edit the script and change these sections: BASE\_URL: Change this to the url for the Device42 appliance. Please make sure there is no trailing '/' at the end of the url. Example: BASE\_URL='https://d42app.device42.pvt'

USER & PASSWORD should be credentials for an Administrator who has access to log into the Device42 appliance.

Make just these changes and you are ready to run the script.

## Run the script

![4. Running the script](/assets/images/wpid2789-4.png)

From command line, go the folder where binaries for IronPython are and run **ipy.exe**. Pass the script name as the argument (as highlighted in image above).

If all goes well, you should see the device added in the Device42 portal along with the IP and MAC address details.
