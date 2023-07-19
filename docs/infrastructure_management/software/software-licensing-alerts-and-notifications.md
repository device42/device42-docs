---
title: "Software Licensing Alerts and Notifications"
sidebar_position: 2
---

To create software license alerts, navigate to Reports>>Setup Alerts and Notifications. To add an alert, click the Add button and you will see...

### Alerts

![Alerts](/assets/images/media_1432042421024.png)

In the example above, we've created a rule that will trigger an alert if any software component reaches more than 80% of the available licenses. When the condition is detected, an email will be sent to Sam Smith and Bill Williams (more than 2 addresses is also supported).

![](/assets/images/media_1432042599978.png)

Three rule types are available for software licensing:

Individual Software: A rule can be defined for an individual software component that is based on the absolute number of licenses in use or on the percent of available licenses. This rule requires selection of one or more specific software components and will only trigger if the rule applies to one of the selected software components.

Any Software: A rule can be defined for all software components that is based on the absolute number of licenses in use or on the percent of available licenses. This rule will trigger if the rule applies to any software component.

### Notifications

![Notifications](/assets/images/media_14320410842481.png)

Each alert rule that triggers will create a notification. A list of notifications can be found by navigating to Reports>>Notifications.

As shown above, software licensing alerts are shown alongside power/environmental and alerts from autodiscovery jobs.

![](/assets/images/media_14320414659181.png)

Bulk actions are available for alerts.

Delete selected Notifications: Delete the selected notifications. If the condition recurs, a new alert and notification will be created.

Export selected items to CSV: Create a CSV file with the notifications.

Acknowledge alert: The purpose of this bulk action and of the corresponding Acknowledged column on this list page is to accomodate the case where multiple system administrators receive the alert. One system administrator can acknowledge the alert indicating that he/she is working on the issue.

Clear conditions: The purpose of this bulk action is to indicate to Device42 that the condition has been fixed and that a new alert and notification should be created if the condition recurs. Please note that only one notification will be sent until the condition is marked as cleared.

![](/assets/images/media_14320413095311.png)

There are also

### Licensing

The software licensing module is licensed as an add-on to the core product. You can find the pricing on the Device42 website.
