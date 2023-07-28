---
title: "Getting Started with Power and Environmental Monitoring"
sidebar_position: 2
---

## The Power and Environmental Monitoring Add-ons

To access the functionality described in this section, you _**must have a license for one of the optional Power Modules**_. Much of the power and environmental monitoring capabilities are present in the base power monitoring option, with the exception of control. To turn outlets on and off, the power control add-on option is required in addition to the base Power and Environment monitoring add-on. _See the [Device42 power pricing page](https://www.device42.com/pricing-power/) for more details!_

* * *

## Power Unit Autodiscovery

The process of autodiscovering power-enabled PDUs is similar to [Device42 Network Autodiscovery.](discovery/network-auto-discovery.md) Begin by navigating to the Device42 main menu, _Discovery -> SNMP_. You can then enter an IP address range, a port if not using the default 161, and any SNMP authentication information depending on if you are using v1, v2c, or v3: ![Add Power SNMP discovery job](/assets/images/add_power_SNMP_discovery.png)

If you haven't yet set up a [Remote Collector Installation](https://www.device42.com/autodiscovery/) docs page.

**NOTE** that the Power (SNMP) discovery options will not be visible if the power module is not licensed, or if no Remote Collector is available to collect data. Once these are registered in Device42, these option will be visible: ![Enable power monitoring for discovered PDU devices](/assets/images/power_options_enable_monitoring-HL.png)

You'll see these options towards the bottom of the SNMP discovery job setup screen. **Be sure check enable monitoring for discovered PDUs**, and you may also set the polling interval for any PDUs discovered by this job by choosing the appropriate value from the Polling Interval drop-down. This value controls the frequency at which monitoring will poll each PDU.

* * *

### Viewing a list of discovered Sensors

When sensors are discovered, they are created with Asset records in Device42. If you navigate to Devices -> Assets -> Assets, you will see a list of all assets; simply filter by Type="Sensor" to see a list of all PDU attached sensors discovered.

* * *

**Note that information below this line only applies to Legacy Power Appliances, which were superceded by RCs (remote collectors) in late 2017**.

* * *

## Legacy documentation - Standalone Power Appliance, Depreciated 2017

**Note to Power Monitoring / Control Users: The Standalone Power Appliance is being depreciated, and all related functionality is now available in Remote Collectors (RC's). Please utilize RC's for power / environmental monitoring or control going forward. See the [Remote Collector page](discovery/remote-collector-rc.md) for setup details and for information on obtaining a Remote Collector going forward!**

The actual monitoring occurs in a separate virtual appliance from the main Device42 appliance. Please note that you can optionally monitor power using Device42 Remote Collectors from v14.0.0 forward, as well as the dedicated power appliance. This is done for three reasons:

1. First, continuous monitoring is fairly resource intensive and would interfere with the primary Device42 functionality if run on the same appliance.
2. Second, you have the flexibility to place the monitoring appliance in a separate network segment.
3. Third, you can deploy multiple monitoring appliances that all talk to the same main Device42 appliance. This gives you the ability to locate monitoring appliances in sensitive network segments and open the minimal number of ports.

### Installation

The installation process for one or more monitoring appliances is similar to installation of the Device42 main appliance. If you would like to set up power monitoring using a Remote Collector (RC), see the [instructions for setting up an RC](discovery/remote-collector-rc.md).

Refer to the appropriate link(s) below for installation on your selected virtualization platform:  
\- [VMWare Player](getting_started/installation/installation-vmware-player.md)  
\- [Virtual Box](getting_started/installation/installation-virtual-box.md)  
\- [Citrix Xen Server](getting_started/installation/installation-citrix-xen-server.md)  
\- [Microsoft Hyper V](getting_started/installation/installation-microsoft-hyperv.md)  
\- [vCenter Server](getting_started/installation/installation-vcenter-server.md)

Follow the steps for your selected virtualization platform to:

1. Download the virtual appliance zip file.
2. Use 7 zip to unzip the downloaded file.
3. Open or Import the virtual appliance into vmware player
4. Once the import is finished, power on the new virtual appliance.
5. Login to console as **ubuntu/default** (you can change the password with option 10)
6. On the console, configure the IP \[Please use a STATIC IP for all production Device42 Installations to avoid connection losses\] and choose your settings.
7. Optional: Create DNS entry for the new IP address for the new virtual appliance.

**Please note, however, that the default monitoring appliance username/password is ubuntu/default** (this is different than the main appliance default password. Please be sure to change the password after you login.

### Monitoring Appliance IP

![Monitoring Appliance IP](/assets/images/wpid6496-media_1424624395446.png)

Instead of loading the url into a browser (like you did when you loaded the main Device42 virtual machine), you will go to the main Device42 appliance via your browser, navigate to Tools>>Settings>>Monitoring Appliances. If you have two monitoring appliances deployed, the list view screen would show...

![](/assets/images/wpid6495-media_1424601548495.png)

Though you are limited by the Device42 license to deploying a single production main appliance, you can deploy an unlimited number of monitoring appliances under that same license. To add a monitoring appliance, click add and you will see...

![](/assets/images/wpid6494-media_1416825251576.png)

You will enter the url of each monitoring appliance here. After clicking "Save and continue editing", you can test the connection to the monitoring appliance by clicking the Test Connection button.

You can also enter one or more email addresses of people who should receive email notifications if the main Device42 appliance detects that the monitoring appliance is down.

You can setup multiple monitoring appliances by entering multiple screens like the one above.

Please also read [this section of the documentation](infrastructure_management/power_and_environmental_monitoring/manage-monitored-ips.md) concerning maintaining the IP's on the monitoring appliance.

### Capacity Considerations

Monitoring is a fairly resource-intensive process and as a result, each individual monitoring appliance is limited in the number of pdus, infeeds, and outlets it can handle. When you set up each autodiscovery job (see below), you will choose a polling interval. The primary resource limitation is the number of snmp polls that can be done in the selected polling. So, if you select a 5-minute polling intervals, you monitor 5x the number of pdu's in one monitoring appliance as you can if you select 1-minute polling intervals.

At 5-minute intervals (default), Device42 recommends that you have one monitoring appliance per 200 pdu's. At 1-minute intervals, assume 40 pdu's. If your network is at all sluggish, reduce the number of pdu's per monitoring appliance. Remember, you can deploy as many monitoring appliances as you need with no additional license cost.
