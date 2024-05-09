---
title: "Software Licensing Alerts and Notifications"
sidebar_position: 2
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

Set up alerts to trigger an email and Device42 notification, or have data sent to a third-party application when a software condition you define occurs. 

Alerts that have been triggered are called notifications. Manage notifications to indicate the action status taken to resolve the trigger condition to the rest of your team. 

## Create Alerts

Set up a software alert by navigating to **Analytics > Setup Alerts** and selecting **Software** as the **Rule Type**.

Three **Trigger** types are available for software licensing. You can create a rule based on:
- **Count:** The absolute number of licenses.
- **License Percent Used:** The percentage of available licenses used.
- **Prohibited Software Installed**

<ThemedImage
  alt="Software alert trigger options"
  sources={{
    light: useBaseUrl('/assets/images/software-licensing-alerts-and-notifications/trigger-options-light.png'),
    dark: useBaseUrl('/assets/images/software-licensing-alerts-and-notifications/trigger-options-dark.png'),
  }}
  style={{ width: '80%' }} 
/>

Emails will be sent out to the address(es) specified under the **Escalation Profile** option. For example, whenever the percentage of the licenses used for any software component exceeds 85% for the selected software, those in "Alert Group 1" be notified by email. 

Select the **Apply To: All** checkbox to set the alert condition on all software components. Or search for specific software under **Available objects** and move them to **Chosen objects** using the right arrow button.

<ThemedImage
  alt="Add alert example"
  sources={{
    light: useBaseUrl('/assets/images/software-licensing-alerts-and-notifications/add-software-alert-light.png'),
    dark: useBaseUrl('/assets/images/software-licensing-alerts-and-notifications/add-software-alert-dark.png'),
  }}
/>

## Manage Notifications  

Each alert rule that triggers will create a notification. Notifications for all rule types are listed under **Analytics > Notifications**. 

An email will only be sent once and the alert will only appear as a notification once for the chosen software components. 

<ThemedImage
  alt="Notification list view and actions"
  sources={{
    light: useBaseUrl('/assets/images/software-licensing-alerts-and-notifications/alert-list-menu-action-light.png'),
    dark: useBaseUrl('/assets/images/software-licensing-alerts-and-notifications/alert-list-menu-action-dark.png'),
  }}
/>

### Bulk Actions

Bulk actions are available for notifications under the **Select an action** dropdown menu. Select notifications from the table, choose one of the following actions, and click the **hammer icon** to execute the action.

**Delete:** Choose between deleting the selected notifications after confirmation or immediately. If the condition reoccurs, a new alert and notification will be created.

**Export Selected Columns as CSV:** Create a CSV file with selected notifications.

**Acknowledge Notification:** The purpose of this bulk action and the corresponding **Acknowledged** column is to accommodate the case where multiple system administrators receive the alert. One system administrator can acknowledge the alert indicating that they are working on the issue.

**Clear Conditions:** The purpose of this bulk action is to indicate to Device42 that the condition has been fixed and that a new alert and notification should be created if the condition recurs. Each cleared action in the **Cleared** will have a green checkmark. Please note that only one notification will be sent until the condition is marked as cleared.

## Licensing

The software licensing module is licensed as an add-on to the core product. You can contact us about the pricing from the [Device42 website](https://www.device42.com/contact/).