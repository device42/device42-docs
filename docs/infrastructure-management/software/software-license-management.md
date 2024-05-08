---
title: "Software License Models and Management"
sidebar_position: 1
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

The Software License Management (SLM) module enables Device42 users to create and maintain a comprehensive, accurate profile of software deployed across all Windows and Linux machines or instances across the entire IT infrastructure.

Easily create and manage software licensing models, and Device42 will automatically scan Windows and Linux machine instances for software - running or not. The SLM module can compare counts of running instances against purchased/licensed counts, and can also detect prohibited software - all without any need for agents. There is absolutely no need to install software agents on each machine that you require monitored!

:::tip
In Device42, the terms "Software Component", "Software Executable", and "Executable" are synonymous, and are used interchangeably.
:::

## Discovering Software Components

When adding a new discovery (or editing an existing one) via **Discovery > Hypervisors / \*nix / Windows** you will see the following screen:

<ThemedImage
  alt="Add discovery job"
  sources={{
    light: useBaseUrl('/assets/images/software-license-management/add-discovery-job-light.png'),
    dark: useBaseUrl('/assets/images/software-license-management/add-discovery-job-dark.png'),
  }}
/>

Scroll down to the **Software and Applications** section. By default, **Discover Software** is enabled to auto-discover software on the Windows and Linux machines in the defined CIDR blocks, Hostname, Domain servers, or IP range(s).

<ThemedImage
  alt="The Discover Software option"
  sources={{
    light: useBaseUrl('/assets/images/software-license-management/software-and-applications-light.png'),
    dark: useBaseUrl('/assets/images/software-license-management/software-and-applications-dark.png'),
  }}
/>

All major Linux distributions are supported, and software registered across various package managers will be discovered.

### View Discovered Software

To see the list of discovered software, head to **Resources > All Software Components**. 

<ThemedImage
  alt="All Software Components menu location"
  sources={{
    light: useBaseUrl('/assets/images/software-license-management/software-components-menu-light.png'),
    dark: useBaseUrl('/assets/images/software-license-management/software-components-menu-dark.png'),
  }}
  style={{ width: '90%' }} 
/>

You will see a list of the discovered software components. As with other list views in Device42, you can sort these components by their column headers, there are various filters on the right side of the page, there is a search box at the top and a bulk action pull-down.

<ThemedImage
  alt="Software component list page"
  sources={{
    light: useBaseUrl('/assets/images/software-license-management/software-component-list-page-light.png'),
    dark: useBaseUrl('/assets/images/software-license-management/software-component-list-page-dark.png'),
  }}
/>

### Bulk Actions

From the list view, you can make bulk modifications to these software components. Select records from the list, choose an action, and click the **hammer icon** to execute the action.

<ThemedImage
  alt="Software component bulk actions"
  sources={{
    light: useBaseUrl('/assets/images/software-license-management/software-actions-light.png'),
    dark: useBaseUrl('/assets/images/software-license-management/software-actions-dark.png'),
  }}
  style={{ width: '50%' }} 
/>

The available actions are:
- Delete with Detailed Confirmation
- Fast Background Delete
- Export selected items
- Assign Software to Suite
- Refresh/update Software counts
- Refresh/update OS counts
- Mark selected Software as Managed
- Mark selected Software as Prohibited
- Mark selected Software as Ignored
- Mark selected Software as Unmanaged

For example, you could select several software components and choose **Mark selected Software as Ignored**. This will cause Device42 to remove the components from the list and ignore these components in future discoveries.

You could also choose **Mark selected Software as Prohibited**. This will cause Device42 to send alerts whenever prohibited software is found on a user's machine (if the alert is configured).

If you select **Refresh/Update software counts**, the software counts (but not the autodiscovery job) will be run immediately. This can be useful if you make a change to licensing or the software count configuration and want to see the impact of the change immediately.

### Assign Software to Suite

Select a group of software components and choose **Assign Software to Suite** to define the selected components to be part of a set. For example, select a set of Adobe software components and click **Assign Software to Suite**.

You can select an existing software component and define it as a suite to incorporate the selected Adobe software components. Or, a more likely scenario, you'll create a new software component using the **Add Software Component** button and call it something like "Adobe Software Suite" and then assign discovered Adobe software components to it.

<ThemedImage
  alt="Assign software to suite"
  sources={{
    light: useBaseUrl('/assets/images/software-license-management/assign-software-to-suite-light.png'),
    dark: useBaseUrl('/assets/images/software-license-management/assign-software-to-suite-dark.png'),
  }}
/>

### Change Software Component

Click on the name of a software component and then **Edit** to add additional details. For example, you can specify a **License Model**, select a **Vendor**, add and define categories, add **Notes**, and **Tags**.

Check the **Track Licensed Count by Keys** checkbox to have the software usage count be based on keys, rather than the total number of instances of the software component.

<ThemedImage
  alt="Change software component"
  sources={{
    light: useBaseUrl('/assets/images/software-license-management/change-component-1-light.png'),
    dark: useBaseUrl('/assets/images/software-license-management/change-component-1-dark.png'),
  }}
/>

You can also add **Software Component Aliases**, add **License Keys**, view the actual instances of the software found by the discovery process under **Software In Use**, and add **Purchase/Support Info**.

<ThemedImage
  alt="Change software component"
  sources={{
    light: useBaseUrl('/assets/images/software-license-management/change-component-2-light.png'),
    dark: useBaseUrl('/assets/images/software-license-management/change-component-2-dark.png'),
  }}
/>

<ThemedImage
  alt="Change software component"
  sources={{
    light: useBaseUrl('/assets/images/software-license-management/change-component-3-light.png'),
    dark: useBaseUrl('/assets/images/software-license-management/change-component-3-dark.png'),
  }}
/>

### Software In Use List Page

Navigate to **Resources > Software In Use** to see the individual instances found for each software component. In this view, you can filter by the name of the software component, the device, or the user and sort the results by device or user.

<ThemedImage
  alt="Software In Use list page"
  sources={{
    light: useBaseUrl('/assets/images/software-license-management/change-component-3-light.png'),
    dark: useBaseUrl('/assets/images/software-license-management/change-component-3-dark.png'),
  }}
/>

## Software License Models

The flexible Device42 license models enables you to track any type of licensing you use. Navigate to **Resources > Software License Models** and click **+ Add Software Licensing Model**.

<ThemedImage
  alt="Add Software License Model"
  sources={{
    light: useBaseUrl('/assets/images/software-license-management/add-software-licensing-model-light.png'),
    dark: useBaseUrl('/assets/images/software-license-management/add-software-licensing-model-dark.png'),
  }}
  style={{ width: '90%' }} 
/>

The **Track By** field enables you to specify whether the licenses should be tracked by **User**, **Device**, **Client Access** (CALs), or **Device CPU/Core**.

<ThemedImage
  alt="Track By dropdown"
  sources={{
    light: useBaseUrl('/assets/images/software-license-management/track-by-light.png'),
    dark: useBaseUrl('/assets/images/software-license-management/track-by-dark.png'),
  }}
  style={{ width: '50%' }} 
/>

### Tracking By User

If you choose to track by **User**, you will see the options:

<ThemedImage
  alt="Track By User"
  sources={{
    light: useBaseUrl('/assets/images/software-license-management/track-by-user-light.png'),
    dark: useBaseUrl('/assets/images/software-license-management/track-by-user-dark.png'),
  }}
  style={{ width: '50%' }} 
/>

The **License Type** field lets you specify whether this is a **Perpetual** license or a **Subscription**. This is just a documentation field and doesn’t affect how Device42 counts the instances it finds of the software components.

The **Count Users by** field enables you to specify the purchase method. This is also just a documentation field and doesn’t affect how Device42 counts the instances it finds of the software components.

The checkbox options do the following when enabled:

- **Is Node Locked:** Specifies that each licensed instance of the software is restricted to a specific device.
- **Is User Locked:** Specifies that each licensed instance of the software is restricted to a specific user.
- **Is free:** Indicates free software.
- **Is Concurrent Access:** Specifies licensing is by the concurrent user and not by the total number of users that have access to the system.
- **Count Major Version Separately:** Specifies each major version of the software should be counted separately.

### Tracking By CALs

If you choose to track by **Client Access** licenses, you will see the options below and that the options are the same as those for tracking by user, except for the addition of the **Count CAL by** field.

The **Count CAL by** field specifies how the licenses should be counted; that is, counted on a **Per Seat - Device** basis, **Per Seat - User** basis, or on a per **Server**, **Processor**, or **Mailbox** basis.

<ThemedImage
  alt="Count CAL"
  sources={{
    light: useBaseUrl('/assets/images/software-license-management/count-cal-by-light.png'),
    dark: useBaseUrl('/assets/images/software-license-management/count-cal-by-dark.png'),
  }}
  style={{ width: '50%' }} 
/>

### Tracking By Device

With the **Device** track by option, you see the **Count Devices by** field. This field is used solely for documentation and has five options: 
- **Volume**
- **Volume with a multiplier**
- **Single**
- **Unlimited**
- **OEM**

<ThemedImage
  alt="Track By User"
  sources={{
    light: useBaseUrl('/assets/images/software-license-management/device-count-by-light.png'),
    dark: useBaseUrl('/assets/images/software-license-management/device-count-by-dark.png'),
  }}
  style={{ width: '50%' }} 
/>

### Tracking By Device CPU

If you choose **Device CPU/Core** track by option, you will see four additional fields:

<ThemedImage
  alt="Track By Device CPU/Core option"
  sources={{
    light: useBaseUrl('/assets/images/software-license-management/track-by-device-cpu-light.png'),
    dark: useBaseUrl('/assets/images/software-license-management/track-by-device-cpu-dark.png'),
  }}
  style={{ width: '45%' }} 
/>

The **Count Devices by** field has five choices as listed above.

The **CPU core factor field** is for the core factor rating used by some software manufacturers.

The **CPU Count** field defines how CPUs are counted: **Total sockets** or **Total # of cores**.

The **CPU count virtual** field defines how software found on virtual machines is counted:
- **Total # of cores on host** 
- **Total sockets on host**
- **Total # of cores on VM**
- **Total sockets on VM**

## Alerts and Notifications

### Add an Alert

You can set up software alerts by navigating to **Analytics > Setup Alerts** and selecting **Software** as the **Rule Type**.

You can add an alert to email the address(es) specified under the **Escalation Profile** option. In this example, whenever the percentage of the licenses used for any software component exceeds 85% for the selected software, those on "Alert Group 1" will get an email. 

<ThemedImage
  alt="Add alert example"
  sources={{
    light: useBaseUrl('/assets/images/software-license-management/add-software-alert-light.png'),
    dark: useBaseUrl('/assets/images/software-license-management/add-software-alert-dark.png'),
  }}
/>

### Received Notifications  

Triggered Device42 notifications are listed in the notifications list view under **Analytics > Notifications**. An email will only be sent once and the alert will only appear once as a notification for a given software component. 

<ThemedImage
  alt="Notification list view and actions"
  sources={{
    light: useBaseUrl('/assets/images/software-license-management/alert-list-menu-action-light.png'),
    dark: useBaseUrl('/assets/images/software-license-management/alert-list-menu-action-dark.png'),
  }}
/>

Alerts are acknowledged by selecting the alerts and using the **Acknowledge Notification** bulk action. Acknowledgment is a groupware function that enables one sysadmin to notify other sysadmins that the alert is being worked on.

Notifications can be “cleared” by selecting the condition(s) and choosing the **Clear Condition** bulk action. Clearing notifications indicate that the trigger condition has been dealt with. Each cleared action in the **Cleared** column has a green checkmark. Note that if that condition is detected again, another email will be sent and another notification record will be created.

## Licensing

The software licensing module is licensed as an add-on to the core product. You can contact us about the pricing on the [Device42 website](https://www.device42.com/contact/).