---
title: "Auto-populate Windows Machines in an AD using APIs"
sidebar_position: 1
---

## IronPython background

In this lesson, we would go over how to use device42 APIs to auto-populate the database for all machines in a Windows Active Directory Environment using the APIs and Iron Python/PowerShell script.

### Why Iron Python?

There are two simple reasons: 

1. Python is the Device42 language of choice - You can substitute a language \*you prefer\* in these scripts _as long as it can interact with REST APIs._ 
2. There is no installation required. You can simply drop the executables in a folder, and as long as you have .NET 4 framework installed, you're up and running.

### Requirements:

- Iron Python, available here: [https://ironpython.codeplex.com/releases/view/62475](https://ironpython.codeplex.com/releases/view/62475)
- .Net 4 framework, available here: [https://www.microsoft.com/en-us/download/details.aspx?id=17851](https://www.microsoft.com/en-us/download/details.aspx?id=17851)
- PowerShell. v1.0 or 2.0 (preferred)
- Device42 sample scripts, latest version available here(under src folder): [https://github.com/device42/Device42-AutoDiscovery-Scripts](https://github.com/device42/Device42-AutoDiscovery-Scripts)

* * *

## Installing IronPython

![wpid349-1._Install_IronPython_Binaries.png](/assets/images/wpid349-1._Install_IronPython_Binaries.png)

Assuming you have Powershell and have the .NET 4 framework installed, you're ready to download the installer/binaries for IronPython. Binaries are preferred because a simple folder unzip gets you ready to go - however, installation works fine, if you prefer.

## Download the sample script (ad-sample.py)

![wpid350-2._Download_the_sample_script__ad-sample.py_.png](/assets/images/wpid350-2._Download_the_sample_script__ad-sample.py_.png)

You can download the latest script at [https://github.com/device42/Device42-AutoDiscovery-Scripts/tree/master/src.](https://github.com/device42/Device42-AutoDiscovery-Scripts/tree/master/src)  
Once you click on the script file, you can click on download and save that file (File>Save Page As...); preferably in same folder as binaries for IronPython are unzipped.

* * *

## Prepare the sample script for your environment

![wpid351-3.png](/assets/images/wpid351-3.png)

**Edit the script and change these sections:**  
BASE\_URL: This is the URL for your Device42 appliance - please make sure there is no trailing '/' at the end.  

Example: _BASE\_URL='https://d42app.device42.pvt'_

USER & PASSWORD are the credentials for an Administrator who has access to log into the Device42 appliance.

Simply make those quick changes, and you're ready to run!

## Run the script

![wpid352-4.png](/assets/images/wpid352-4.png)

From the command line, go the folder where your IronPython binaries are, and run **ipy.exe**. Pass the script name as the argument as highlighted in the image above.

Choose Any option and script should populate the D42 database as per chosen option.

_Please note that cmd.exe has to be running as a domain administrator to enumerate domain objects, or you must be logged in as a domain administrator on the system you are running this from._

To run cmd.exe as a domain administrator:  
**Open a command prompt and invoke cmd.exe using runas:**

```
runas /user:domainAdministrator "cmd.exe"
```

Finally, cd to the IronPython directory(or use respective paths) and run ipy.exe, passing the Active Directory python script as a parameter as shown in the image in step 4, above. You're all set!
