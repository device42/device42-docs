---
title: "Auto Clean Feature"
sidebar_position: 4
---

## About the AutoClean Feature

Auto Clean rules help you manage old and possibly stale data in Device42, automatically. Should an object _(e.g. a device or an IP address)_ not be found by a subsequent autodiscovery job, or modified by a manual effort, it may be out of service. This is especially true of servers and other objects in public clouds, but can also apply to objects that are behind the corporate firewall.

The rules for when a particular type of object should be considered and the rules for what to do about such objects vary from organization to organization. This feature enables you to define your own rules and tell Device42 what actions should be taken.

Device42 includes several system-defined disabled Auto Clean rules (related to ADM data) as suggested examples you can use to base your own rules on. You can also enable these example rules to keep your ADM data cleaner.

Select _Tools > Auto Clean Rules_ and then click _Add Auto Clean Rule_ on the rules list page.

![](/assets/images/AutoClean-menu-item.png)

## Auto Clean Supported CIs

Auto Clean rules can target a wide variety of CIs _(Configuration Items)_ in Device42, including everything from Assets to users to VLANs, and everything in between. The following images list the objects supported as Auto Clean rule targets. ![](/assets/images/AutoClean-object-type-drop-down.png)

The available object types are:

- Administrator
- Asset
- Certificate
- Device
- Device Certificate
- Device Hardware Model
- End User
- IP Address
- IP NAT/Map
- Listener Service Port
- Operating System
- Part
- Port
- Power Unit
- Resource
- Scheduled Task
- Service Communication
- Service Instance
- Software In Use
- VLAN

## Creating Auto Clean Rules

Each rule specifies a type of object and provides a Modify Search function you use to define the specific objects you want to apply the rule to. The combination of object type and search criteria define the rule. The examples below show building a search for Device objects to apply a rule to.

![](/assets/images/18.06.00_auto-clean-add-device-search.png)

You can use the basic filters (+ button) to add or remove filters for the search criteria.

![](/assets/images/18.06.00_auto-clean-add-device-search-2-filters.png)

You can also use the [Advanced Search](getting_started/advanced-search-feature.md) feature (binocular button) to build a search criteria.

![](/assets/images/18.06.00_auto-clean-add-device-search-3-advanced-search.png)

As you build your search criteria, the Preview list in the search panel shows the objects to which the Auto Clean rule will be applied to. Click _OK_ to apply the search.

![](/assets/images/18.06.00_auto-clean-add-device-search-4-filter-applied.png)

(Note that the system rule _Shared IPs maintenance_ uses a Number of Days option instead of the Modify Search option.)

## Auto Clean Rule Action Options

The available Auto Clean Rule Action options vary depending on which _Object type_ you select for the rule. The example below shows the action options for device objects.

![](/assets/images/AutoClean-device-action-options.png)

- **Delete the data**: delete the object. 
- **Archive and delete the data**: create an archive record for the object (_Analytics > Archived Objects_) and delete the object. 
- **Clear all IPs**: remove IPs from the Device. 
- **Clear all IPs for this subnet**: clear all device IPs from the entered or selected subnet. 
- **Clear all Connectivity**: clear all connectivity to the device. 
- **Change to not in service**: set the device status as not in service. 
- **Change device service level to**: choose a service level to set for the device when the rule is triggered. 
- **Send email to**: send notification when the rule is triggered. 
- **Webhook AutoClean Endpoints**: add or delete webhooks to send when the rule is triggered.

**Note:** The Auto Clean rules run once per day. If only an email or webhook is sent but no action is taken, the email or webhook will repeat each day until an action is taken that deletes or changes the object record.

![](/assets/images/AutoClean-device-webhook-section.png)
