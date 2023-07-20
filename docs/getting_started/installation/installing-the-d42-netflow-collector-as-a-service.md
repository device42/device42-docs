---
title: "D42 Netflow Collector - Install as Service"
sidebar_position: 3
---

## The Device42 Netflow Collector

The Device42 Netflow collector is a self-contained, portable utility that collects netflow data, analyzes it, and sends it to your Device42 instance to enhance application dependency mapping discovery. The data Device42 gets from Netflow is used to augment data gathered via Device42’s other autodiscovery methods (e.g. SNMP, WMI / WinRM for Windows, SSH for Linux, etc.), producing a comprehensive map of your infrastructure including accurate details and important inter-relationships -- and all of this without the need to configure expensive span or mirror ports!

**NOTE**: Device42 Remote Collectors (RCs) include built-in Netflow Collector functionality. Device42 recommends using the RC Netflow Collector rather than the stand-alone collector if possible in your environment. For more information about the RC Netflow Collector, see _Auto Discovery > Netflow Collector_: [https://docs.device42.com/auto-discovery/netflow-collector/](https://docs.device42.com/auto-discovery/netflow-collector/).

## Netflow Collector Architecture High Level Overview:

1. **The NetFlow exporter:** Your network devices are the ‘source’ of NetFlow messages
2. **The NetFlow collector:** Device42’s Netflow Collector \[Download it here\] serves as the receiver and pre-processor of NetFlow messages from your network devices
3. **The netflow analyzer:** Device42 itself, which aggregates & analyzes Netflow messages from all of your NetFlow exporting devices

## System Requirements

- A Windows or Linux 64-bit Operating System
- At least 6GB of RAM is recommended.

## HowTo Install the D42 Netflow Collector as a Windows or Linux Service

To install D42Netflow as a service:

1. Download and extract d42-netflow-collector-v200.zip from the Device42 autodiscovery download page, unzip it, and copy the 64-bit executable to the directory of your choice. For Windows 64-bit, c:program files is a good choice; for Linux, /usr/bin/ is commonly used. We renamed the 64-bit binary and copied it to "C:Program Filesd42-netflowd42-netflow64.exe". \[note: we do not recommend using the 32-bit binary due to RAM limitations inherent in 32bit\]
2. Ensure the Windows / Linux Firewall is allowing NetFlow traffic on port 2055/udp by opening your firewall control panel via _start menu → Control Panel → System and Security → Windows Defender Firewall → Allow an app or feature through Windows Defender Firewall_:![Head to Control Panel, Windows Defender Firewall](/assets/images/Windows Defender Firewall.png)![Allow D42Netflow through Windows Firewall](/assets/images/Windows_Firewall_Allowed.png)

**On Linux:**

```
$ sudo firewall-cmd --zone=public --add-port=2055/udp --permanent
$ sudo firewall-cmd --reload
```

## Install the service

**On Windows:** Run CMD as an administrator by typing ‘cmd’ into the start menu, right clicking, and selecting “Run as administrator”

In your administrative command prompt, run the following to register the downloaded netflow collector. Be sure to provide the full path to the binary, and for clarity, name the service “D42Netflow”:

![Create D42Netflow Windows Service](/assets/images/Create_D42_Netflow_Service.png)

```
$ sc create D42Netflow binPath="c:pathtobinarywindows\_x64.exe -h \*ma\_url\* -u \*username\* -p \*password\* -i \*Interval\*" 
```

After executing the above, you can see your new service in the services control panel (services.msc):

![See D42Netflow in services.msc](/assets/images/D42Netflow_services-msc.png)

_The CMD string parameters:_

```
ServiceName = D42Netflow - the service will be registered with this name
binPath = path to binary
-h = URL of Device42 main appliance
-u = Device42 username
-p = Device42 password
-i = flow delivery interval to D42 MA in seconds (60 seconds is a good starting point)
```

**On Linux / SystemD:** Create file `/etc/systemd/system/netflow.service` containing the following:

```
## SystemD

[Unit]
Description=NetFlow Service

[Service]
PIDFile=/tmp/netflow.pid
User=root
Group=root
WorkingDirectory=/opt/rc/services
ExecStart=/opt/rc/services/netflow -h https://ma.host.domain -u username    -p password -i 30
Restart=always

[Install]
WantedBy=multi-user.target
```

1. You're all set! Start the service: **On Windows:** Run service manger (services.msc), right click D42Netflow, and choose Properties. In the modal Window, you’ll likely want to set the ‘Startup Mode” to Automatic, and then press “Start” to start D42Netflow: ![Set D42Netflow service start as automatic](/assets/images/Set_service_start_automatic.png)

**On Linux:**

```
Set the service as executable:
$ chmod +x /opt/rc/services/netflow
Set the service to start automatically:
$ systemctl enable netflow
Start the service:
$ systemctl restart netflow
```
