---
title: "Software License Models and Management"
sidebar_position: 1
---

The Software License Management (SLM) module enables Device42 users to create and maintain a comprehensive, accurate profile of software deployed across all Windows and Linux machines or instances across the entire IT infrastructure.

Easily create and manage software licensing models, and Device42 will automatically scan Windows and Linux machine instances for software - running or not. The SLM module can compare counts of running instances against purchased/licensed counts, and can aslo detect prohibited software -- all without any need for agents. There is absolutely no need to install software agents on each machine that you require monitored!

_In Device42, the terms "Software Component", "Software Executable", and "Executable" are synonymous, and are used interchangeably._

### Discovering Software Components

![Discovering Software Components](/assets/images/add_winLinux_discovery_Software_options_HL.PNG)

Autodiscovery of software is enabled via a checkbox in Hypervisors/\*nix/win Autodiscovery.

When adding a new discovery (or editing an existing) via _Discovery > Hypervisors / \*nix / Windows_, users will see the screen shown above.

Check the "Discover Software" checkbox _(highlighted)_ to autodiscover software on the Windows and/or Linux machines in the defined CIDR blocks, Hostname, Domain servers, or IP range(s).

All major Linux distributions are supported, and software registered across various package managers will be discovered.

To see the list of discovered software, head to _Apps > Software > Software Components_ s ![See list of discovered software](/assets/images/apps_software_software-components.png)

You will see a list of the discovered software components…

![Select software component to view](/assets/images/select_software_componenet_view.PNG)

As with other list views in Device42, you can sort these components by their column headers, there are various filters on the right side of the page, there is a search box at the top, and a bulk action pull down.

From the list view, you can make bulk modifications of these software components…

![Software componenet bulk actions](/assets/images/software_component_view_bulk_actions.PNG)

For example, you could select a number of software components and choose “Mark selected Software as Ignored”. This will cause Device42 to remove the components from the list and ignore these components in future discoveries.l

You could also choose “Mark selected Software as Prohibited”. This will cause Device42 to send alerts whenever prohibited software is found on a user machine (If the alert is configured).

If you select “Update software counts”, the software counts (but not the Autodiscovery) will be run immediately. This can be useful if you make a change to licensing or the software count configuration and want to see the impact of the change immediately.

Or you could select a group of software components and choose “Assign Software to Suite”. This will define the selected components to be part of a “suite”. For example, if I select a set of Adobe software components and click “Assign Software to Suite”, I’ll see the following:

![Assign software to suite](/assets/images/wpid-media_14319802217261.png)

This screen enables a user to select an existing software component and define it to be a suite that incorporates the selected Adobe software components. Or, more likely, one would use the Add Software Component button and define a new software component named something like ‘Adobe Software Suite’ that would then have the selected Adobe software components as the components of the suite.

![Change software componenet](/assets/images/edit_software_component_details.png)

If you selected an individual software component, you can add a number of edits including selecting a licensing model (see below), selected the vendor, defining categories, notes, and tags.

If you check the Track licensed count by keys checkbox, then software usage counting will be done by key (as opposed to counting the total number of instances of the software component).

Here you can also add aliases for the software component, add license keys, view the actual instances of the software found by the discovery process (Software In Use), and add purchasing and support/warranty contract information.

![Software In Use Screen](/assets/images/select_software_componenet_view.PNG)

You can find the Software In Use list view by navigating to Software>>Software>>Software In Use. Here, you will see the individual instances found for each software component. In this view you can filter by the name of software component, the device, or the user and you can sort the results by device or user.

### License Models

![Add Software License Models](/assets/images/add_software_license_model.PNG)

Device42′s flexible license models should enable you to track whatever type of licensing you use.

![Track software licenses by options](/assets/images/track_by_license_models.PNG)

The Track By field enables you to specify whether the licenses should be tracked by User, by Device, by Device CPU or by CAL.

### Tracking By User

![Tracking By User](/assets/images/tracking_by_user_license_models.PNG)

If you choose to track by Users, you will see the options above:

The License Type field enables you to specify whether this is a Perpetual license or a Subscription. This is just a documentation field and doesn’t affect how Device42 counts the instances it finds of the software components.

The Users lic count by field enables you to specify the purchase method. This is also just a documentation field and doesn’t affect how Device42 counts the instances it finds of the software components.

The Is node locked field specifies that each licensed instance of the software is restricted to a specific device.

The Is user locked field specified that each licensed instance of the software is restricted to a specific user.

The Is free field specifies that this is free software.

The Is concurrent access field specifies that licensing is by concurrent user (not by the total number of users that have access to the system).

The Count major version separately field specifies that each major version of the software should be counted separately.

### Tracking By CALs

![Tracking By CALs](/assets/images/tracking_by_CAL_license_models.PNG)

If you choose to track by Client Access Licenses, you will see the options above and you can see that the options are the same as those for tracking by user except for one field:

The Cal lic count field specifies how the licenses should be counted, i.e. on a per device basis (Per Seat – Device), on a per user basis (Per Seat – User), or on a per server, processor, or mailbox basis.

### Tracking By Device

With Track by device, you see this additional field: The Device lic count by field has 5 choices: Volume, Volume with a multiplier, Single, Unlimited, OEM. This field is used solely for documentation.

### Tracking By Device CPU

![Tracking By Device CPU](/assets/images/tracking_by_device_cpu.png)

If you choose Track By Device, you will see 4 additional fields:

The Device lic count by field has 5 choices: Volume, Volume with a multiplier, Single, Unlimited, OEM. This field is used solely for documentation.

The CPU core factor field is for the core factor rating used by some software manufacturers.

The CPU count defines how cpu’s are counted. There are 2 choices: Total sockets and Total # of cores.

The CPU count virtual defines how software found on virtual machines is counted. The are 4 choices: Total # of cores on host, Total sockets on host, Total # of cores on VM, Total sockets on VM.

### Alerts and Notifications

![Alerts and Notifications menu](/assets/images/setup_alerts_menu_item.png)

You can setup software alerts by navigating to Reports>>Setup Alerts and Notifications

![Add Alert Screen Example](/assets/images/Add_alert_mockup.PNG)

Here, you can add alerts such as the one above that will cause an email to be sent to the specified email address(es) whenever the percentage of the licenses used for any software component exceeds 90%. These alerts will also be listed in the Notifications list view found under Reports>>Notifications…

![Alternate Notification View](/assets/images/view_notification_reports_menu.PNG)

The screenshot above shows two software notifications, one for prohibited software and another from a % of licensed used rule.

An email will be sent to each user specified in the alert rule for each notification.

Alerts can be acknowledged by checking multiple alert and choosing the Acknowledge Alerts bulk action. Acknowledgment is a groupware function that enables one sysadmin to notify other sysadmins that the alert is being worked.

An email will only be sent once (and the alert will only appear once as a notification) for a given software component. However, one or more notifications can be “cleared” by selecting the condition(s) and choosing the Clear Condition bulk action. Next to each cleared action in the Cleared column will be a green checkmark. Once a condition has been marked as cleared, if that condition is detected again, another email will be sent and another notification record created.

### Licensing

The software licensing module is licensed as an add-on to the core product. You can find the pricing on the Device42 website.
