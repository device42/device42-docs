---
title: "Role-Based Access Control"
---

### Role-Based Access Control Overview

Device42 supports a number of role-based access use cases. A corporation might want to restrict access by geographic location, department, division, corporate entity, and so on. More importantly, they might want a user to have access to just one department while another user has access to all departments within a division.

Similarly, a service provider might to allocate subnets to customers or racks to customers. The role-based access feature enables the service provider to restrict customer access to the specific subnets and racks assigned to the customer where the service provider can see all subnets and racks.

### Setting Up Role-Based Access

To set up role-based access in Device42, navigate to _Tools > Settings > Global Settings_, and click _Edit_ at the top right of the page.

![](/assets/images/WEB-642_Role-Access-Multitenancy.png)

The two Role-Based Access Control options are:

- **Role-Based Access Control Option – Off:** _This is the default._ Do not change this option unless you want to enable role-based access.
- **Role-Based Access Control Option –  On:** Choose this option to enable role-based access.

The other three _orphaned objects_ options are explained below.

Click _Save_ at the bottom of the Global Settings page to save your selections.

### Functional vs. Object Permissions

If role-based access is not enabled, admin groups are granted only "Functional Permissions". These functional permissions define which menu items can be seen by users assigned to the group.

![Multitenancy](/assets/images/2015-10-19-mt-2.png)

When role-based access is initially turned on, superusers will still have access to all objects (i.e. buildings, rooms, racks, ...) in the system. However, non-superusers will not see any objects whatsoever until they are granted permission to see those objects so long as none of the 'allow orphaned objects' checkboxes shown in the top screenshot are selected. See the section below on 'orphaned objects' for a more complete explanation.

![Multitenancy](/assets/images/2016-12-30-multitenancy2.png)

When role-based access is enabled, users will only be able to see a device, asset, or pdu if an Object Category is assigned to that device, asset, or pdu and the user is granted access to that Object Category as shown above.

![Multitenancy](/assets/images/2016-12-30-multitenancy3.png)

Object Categories can be found on the Datacenter menu. As shown above, to create an object category, you enter a Name and an optional description.

Admin groups, in turn, can be assigned to each object category and the category is granted view-only or change permission. In the above example, two admin groups, Prod and 760 Chapel St have been granted change permission to the Prod -- Change object category. This means that any user who has been assigned to either of the two groups has permission to modify any device, asset, or PDU that has been assigned the Prod -- Change object category.

In the initial release of the role-based access feature, the admin groups were assigned directly to devices, assets, and PDUs. However, customers told us that, because of the vast number of devices, assets, and PDUs, this was just too much work. This is why we introduced Object Categories.

For other objects that aren't as numerous as devices and assets (e.g. buildings, rooms, racks, customers, purchases, and object categories themselves), object permissions are still created by assigning admin groups directly to these types of objects as shown in the object categories assignment above.

Many customers won't need to use Object Categories at all for devices, assets, and PDUs. Instead, you can simply assign admin groups to buildings, rooms, and racks. If an admin group has permission to a building, they have permission to every object in that building (i.e. every room, rack, device, PDU, asset). If an admin group has permission to a room, they have permission to every object in that room (i.e. every rack, device, PDU, asset).

### Do Not Propagate Option

![Multitenancy](/assets/images/2016-12-30-multitenancy4.png)

The _"Do Not Propagate"_ option (pictured above) can be set on Buildings, Rooms, and Racks to stop automatic permission propagation. If you'd prefer that inheritance rules are not applied to a specific building, room, or rack, you can check the _'Do not propagate...'_ link shown above for a rack. In the above example, devices, assets, and pdu in rack NHCTDC1R2 will be visible to anyone who can see the rack. This is useful, for example, for a colocation operator who wants to split a rack among different customers. In the rack layout view, a customer with permission to see the rack and some devices in the rack but not others will see a grayed out rack with no information for those devices, assets, and PDUs they are not allowed to see.

### Subnet Categories

Subnet Categories work on subnets exactly like Object Categories work on devices, assets, and PDUs. You create Subnet Categories from the IPAM menus and assign admin groups to subnet categories just like you do for object categories. Then the subnet categories and their admin group assignments determine which subnets (and which IPs in those subnet) are visible and changeable for a given user.

As with object categories, it's not necessary to assign a subnet category to every subnet. If a group is assigned to a VRF Group, then every subnet in that VRF Group will inherit the permissions of the VRF Group. Also, if a subnet is assigned a subnet category, then every child subnet of that subnet will also acquire the permissions granted by the subnet category.

### Assigning Object Permissions to Admin Groups

Object permissions are applicable to the following objects: - Buildings - Rooms - Racks - Devices - Assets - Object Categories - PDUs - VRF Groups - Subnet Categories - Purchases - Vendors - Customers - Auto Discovery jobs

Object assignments are made either from the list view of the object or the edit page of a specific object. It is also possible to assign object permissions to discovered objects of auto discovery jobs.

![Multitenancy](/assets/images/2015-10-19-mt-5.png)

In the example above, we are about to assign 4 racks to an object permission group. If you click the "Add/Delete Object Permission Group" action and then click "Go", you will see...

![Multitenancy](/assets/images/2015-10-19-mt-6.png)

Here we are about to assign permission to the 4 racks listed above the the IT Managers admin group. If you click "Add, you will give the IT Managers group the right to view and edit these 4 racks. If you do not check the Change Permission box, then the permission will be view only.

This dialog is also used to remove previously assign permissions. So, if you wanted to delete the IT Manager's permissions for these 4 racks, you would click the "Delete" button. You can also modify the Change Permission flag through this dialog as well.

You can also assign permissions from object edit pages as shown above.

The Add/Delete Groups action is available for the following objects: - Buildings - Rooms - Racks - VRF Groups

Similarly, the Device, Asset, and PDU list pages offer Set Object Category and a Delete Object Category actions. The Subnet list page offers Set Subnet Category and a Delete Subnet Category actions.

### Permission Hierarchies

As mentioned above, if an admin group is granted access to a building, the admin group is implicitly granted access to all rooms, racks, devices, pdus, and assets in the building. We call the hierarchy that contains buildings the Device Hierarchy. The rules for the Device Hierarchy are as follows:

- Permission for a building implies permission for all rooms, racks, devices, pdus, and assets in the building.
- Permission for a room implies permission for all racks, devices, pdus, and assets in the room.
- Permission for a rack implies permission for all devices, pdus, and assets in the rack (unless the "Do not propagate" box is checked for the rack).
- Permission for a blade chassis implies permission for all blade devices in the chassis.
- Permission for a virtual host implies permission for all virtual machines in the host.
- Permission for a device that is part of a cluster _does not_ imply permission to the cluster device itself. Additionally, as a cluster can be made up of devices that reside in multiple physical locations, a cluster device can not and does not have a location attribute, meaning permissions for those using multi-tenancy will be inherited for cluster member devices, but will not be inherited for the cluster device itself. The only way to create permissions on a cluster object is to assign an object category to the cluster device.

Also as mentioned above, there is a second hierarchy that we call the IP Hierarchy. The rules for the IP Hierarchy are as follows:

- Permission for a vrf group implies permission for all subnets and IP addresses within the vrf group.
- Permission for a subnet category implies permission for all subnets labeled with that subnet category, all child subnets of those subnets and all IP addresses within all those subnets.
- Permission for a parent subnet implies permission for all child subnets (e.g. permission for a /20 subnet implies permission for a /24 subnet).

Please note that change permission for an object also applies to the objects beneath it in the hierarchy. For example, if you have change permission for a subnet, you can change any IPs in the subnet and you can add IPs (or child subnets) to the subnet. However, if you have view-only access to the subnet (i.e. you do not have change permission), then you can not change any IPs in the subnet and you cannot add IPs to the subnet.

It is possible to grant view-only permission to a room but change permission to specific devices. This would allow users to change the specific devices but not change the other devices in the room.

_Lastly, note that there is a special scenario such that an admin group with "change" permission assigned to a building, room, or rack in conjunction with the "Do Not Propagate" (aka DNP) option being selected. In this case, members of the Admin Group in question will end up with a "View Only" user experience, as the "change" permission's propagation in this scenario is blocked by the DNP option._

### Objects that Do Not Have Explicit Permissioning

Certain objects are subject to permissioning even though admin groups are not directly granted these permissions.

- Parts are viewable and/or editable if they are assigned to a device, room, or storage rack that is viewable or editable.
- UCS Service Profiles are viewable and/or editable if they are assigned to a device that is viewable or editable.
- Software components are viewable by all. However, software details are viewable or editable if the software component is in use by a device or end user is viewable or editable.
- Services are viewable by all. However, service details are viewable or editable if the service is in use by a device or end user is viewable or editable.
- Application components are viewable or editable only if they are attached to a service that is viewable or editable.
- Mac addresses are viewable or editable if they are attached to a device that is viewable or editable.

### What Happens If an Admin Group Has No Permissions?

The Device42 role-based access system is set up so that if an admin group is assigned no object permissions and no object or subnet categories, then users in that admin group will not be able to see any objects (unless 'orphaned objects' are allowed -- see below). As discussed above, if an admin group has access to only one room (and 'do not propagate' is unchecked) then users in the admin group will have access to that room and any racks, devices, pdus, and assets inside the room. However, if the admin group has not been granted access to any subnets, then the users will not be see any subnets or ips in their list pages.

Note: Under certain circumstances, it is possible to see the name of an object without permission. For example, a user with access to a device will see the IP address of the device even if they don't have permission to see the subnet the IP address resides in. However, when they click on the IP address, they will get a permission error.

The following objects and/or screens do not have object-level permission and are governed only by admin group functional permissions: - Hardware models, pdu models, patch panel models, tap module models, parts models, and similar objects - QR, Device Names, and Asset Number Profiles - Telecom and Power circuits - DNS - OS’s - Passwords (also have their own user/group security) - Lifecycle Event Actions - Misc Functions - Custom Field setup - Monitoring appliances - Org units - Settings - Tags

### Viewing Role-Based Access Permissions

For your convenience, in the view page for every object with permissions, there is a view-only field named “Group Permissions” (see the example above for Physical Device NTCTCORE01). This field tells you what groups are assigned to this device taking into account any groups assigned via device categories (see below) and taking into accounts groups assigned via buildings, rooms, or racks that contain the device and take into account VMs and blade chassis that contain the device

Also, the group view and edit screens for admin groups will have 3 extra buttons (circled in red below):

![Multitenancy](/assets/images/2015-10-19-mt-3.png)

The Direct Permissions button will show a list of all objects that have been directly assigned to the group. If the group has been assigned to a specific device, the device will appear in the report. If the group has been assigned a building, devices in the building that do not have a direct group assignment will not be shown even though these devices "inherit" permissions from the building. An example is shown below...

![Multitenancy](/assets/images/2015-10-19-mt-4.png)

If you click the "All Permissions" button, you will see both direct and inherited permissions for objects for this group. If you click the "Inherited Permissions" button, you will see just the inherited permissions.

Last, but often the most useful, list pages for permissioned objects have two types of filters. First, you can filter by an admin group to see all the objects that group can view. Second, you can filter by an Object or Subnet Category to see all objects that can be seen by groups with view permissions for the category.

### Autodiscovery Jobs

When you create or modify an autodiscovery job, you can assign an admin group to the autodiscovery job. This governs which users can can view and/or modify the autodiscovery job. You can also add groups in bulk to multiple jobs from the list view.

Within many of the autodiscovery jobs, you can also assign an object category and/or a subnet category. The object category will then be assigned to any devices, assets, or pdus discovered. The subnet category will be assigned to any discovered subnets.

Warning: If you are a non-superuser and you run an autodiscovery without specifying any categories, then you may not be able to view or edit the discovered objects (because you will not have permission to see them!).

### Who Can Assign Admin Groups to Objects?

Superusers are allowed to add, change, delete groups for objects through the UI, import spreadsheets, or the API. Superusers can also enable non-superusers to have this ability by assigning them them add, change, and/or delete capability for "Object Permissions".

![Multitenancy](/assets/images/2016-3-15-mt-10.png)

When you turn on role-based access, you will need to go to each admin group and make sure that each has or does not have the object permissions you want it to have. If you give a group add/change/delete permission, then all users assigned to that group (including non-superusers) will have the ability to add/change/delete object permissions through the UI, imports, and APIs.

### IPAM Hierarchy Rules

The Merge and Relocate subnet capabilities are available to any user with change permission to both the to-be-moved subnet and the parent subnet.

Only superusers can create subnets from the subnet list page. However, non-superusers can create subnet from the subnet tree view.

Only superusers can create parent root subnets. The only exception to this rule is the Ping Sweep Autodiscovery job. If a ping sweep job setup by a non-superuser discovers a root subnet, it will be created.

If you do have view but not change permission to a device, you can still add an IP address to the device. This is considered by Device42 to be a modification of the IP address not the device.

### Device Hierarchy Rules

If you give a group change permission to a room, you should also grant view permission to the building for the room. Otherwise, the user won't be able to select a building and, without a building specified, they won't be able to save the room edit form.

When cloning devices and racks with explicit permissions, those permissions will be copied over to the newly cloned objects. If there are no permissions on a device or rack, it will copy over the next closest parent's object permissions (e.g. if there are no permissions on a device but there are permissions on the rack the device is in, the rack's permissions will be copied over). Also, if a device or rack has multiple groups, only the groups assigned to the current user will be copied over.

When deleting permissions on an object which has objects below it in the hierarchy (e.g. deleting a building which has rooms, racks, devices, ...), removing the permissions on the building will not cascade the delete down the line. So any rooms within the building that you deleted permissions from will still be available to the group.

### Orphaned Objects

An “orphaned object” is an object (e.g. a rack or a subnet) that has no group assigned to it directly AND has no group assigned to a “parent object”. To refresh your memory, the parent objects of racks are rooms and buildings and the parent objects of subnets are their parent subnets and vrf groups. Prior to this release, orphaned objects cannot be viewed by any non-superuser.

Customers have told us that this behavior is overly restrictive. You can maintain this behavior by unchecking the two options above. However, the default will be to leave these unchecked so that orphaned objects are visible to everyone.

The “Building hierarchy” option applies to building hierarchy objects, specifically buildings, rooms, racks, devices, assets, and pdus. For example, if this option is checked, a non-super can view and change any building that has no groups assigned to it AND can view and change any room, rack, device, asset or pdu in the building. The “IP hierarchy” option applies to IP addresses and subnets. For example, if this option is checked, a non-super can view and change any subnet that has no groups assigned to it or to a parent subnet.

The “Other objects” option applies to purchases and customers. For example, if this option is checked, a non-super can view and change any purchase that has no groups assigned to it.

 


## Table of contents

- [Role-based Permissions and Access](administration/role-based-access-control/role-based-permissions-and-access.md)