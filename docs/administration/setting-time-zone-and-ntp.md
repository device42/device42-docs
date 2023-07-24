---
title: "Setting Time Zone and NTP"
sidebar_position: 13
---

Here is brief run down on setting or changing your time zone in Device42. This is probably one of the first steps you should take so that autodiscovery scheduling and log history work correctly. The virtual appliance takes the clock from virtual host, so make sure the time is correct on the host and it's not a bad idea to set up an NTP time source to ensure the time stays correct.

## Set time Zone

![Time Zone settings Administration](/assets/images/time_settings_menu-HL.png)

In the Device42 main menu, go to _Tools > Settings > Time Settings_.

Here, you can select the correct time zone for your location and click Apply.

## Apply the correct time zone settings.

![Apply the new Time Zone Setting](/assets/images/apply_new_TZ-hl.png)

After you've selected the correct new time zone and received confirmation it's been applied, go to the Device42 console and restart the Device42 application \[Option #2\]. When it restarts, it will have the new time zone.

## OS Level Time Settings

![NTP & Time Zone settings d42 Console](/assets/images/ntptz_settings_console.png)

Use VM console menu options 6 & 7 to set time at the OS level. Here is a example of how to setup NTP.

![Configure new NTP Server ](/assets/images/Config_NTP_Console-2019.png)

First, enter the IP or FQDN of the NTP server. Then select 'y' to add the NTP server to the daily scheduled jobs.

![Update OS TZ from D42 console](/assets/images/Set_TZ_via_console.png)

Use option 7 to set the time zone on the OS level. If you don't see your exact location, choose the location closest to you:

![Set Time Zone for OS part 2](/assets/images/Set-TZ-console-p2.png)

Once you've completed the TZ settings, you'll be able to see your new Time Zone at the top of the Device42 Console Menu: 

![Current Time Zone visible on D42 Console](/assets/images/new_TZ_on_console.png)

### Restart Application from console.

**After changing your time settings, select Option 2 to restart the application** and the new time zone settings will take effect immediately.
