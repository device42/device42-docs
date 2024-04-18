---
title: "Object History (aka audit log)"
sidebar_position: 11
---

Every action in Device42 via the User interface, autodiscovery jobs, RESTful API calls or imports are recorded as history. In this section, we discuss how to view the history.

### Centralized audit log

![wpid2183-history.png](/assets/images/wpid2183-history.png)

Go to **Analytics > Audit Logs > History** to view the audit history.

The Type column shows the category of he object (e.g. device, customer, contract, hardware, ...).

The Object column shows the specific object that was changed. Clicking on an object in this column will filter the display to show only log entries for this object.

The Changed column show what was added and what was changed. For any database objects, the database id of the object is shown.

The Action column shows the type of action that was logged (e.g. Insert, Delete, Update, View, Login, API).

The From column shows you if it was done through the UI, API, bulk import, a task, etc.

The Search box enables you to search for a specific username and/or type of content.

### History filters

![wpid2184-History_filters.png](/assets/images/wpid2184-History_filters.png)

The Filter box allows you to filter down the audit results displayed by action time, action, from, user name, or content type.

### Object history from individual objects

![wpid2185-Object_history_from_individual_objects.png](/assets/images/wpid2185-Object_history_from_individual_objects.png)

In addition to this centralized audit log, you can access object history for an individual object from any object's view or edit page. In this history you will be able to filter between direct changes to the device, as well as changes to related objects such as software and services. The default view is for "Direct Only". So if you would like to see changes made to related data, such as the IPs of a device, you will need to change the Related option to "All" or "Related Only".

### Accessing Legacy Change History

With the release of the enhanced Audit Log in version 10.3.0 of Device42, change history from previous versions has been moved to Tools>Templates and Bulk Operations>Misc Tools, Legacy Change History. This will allow you to access changes made prior to 10.3.0. A report is also available titled "Change History" that will allow you to easily export the old change history.
