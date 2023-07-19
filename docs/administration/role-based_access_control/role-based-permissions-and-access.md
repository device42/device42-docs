---
title: "Role-based Permissions and Access"
sidebar_position: 1
---

Role-based access can be defined at either the group or user level. If you have many users but a much smaller numbers of different permissions sets, it would make sense to use groups. In the example below, we will create a group with IP address management permissions only.

### Creating a Role based group

![Creating a Role based group](/assets/images/wpid6575-media_1330885651614.png)

First, enter a name for the group.

In the "Available Permissions" box, you will see all the available permissions. You can narrow down the permissions by the search box. In the above example, we searched for all permissions that start with "ip" (not case sensitive).

Select the permissions you would like to grant the members of this group by multi-selecting and clicking the arrow in the middle pointing to the "Chosen Permissions" box.

![](/assets/images/wpid6576-media_1330885722298.png)

In the image above, we have added a number of IP-related permissions and are about to add some DNS-related permissions.

![](/assets/images/wpid6577-media_1330885796973.png)

And now some VLAN permissions.

### Assigning a group to a user or set of users

![Assigning a group to a user or set of users](/assets/images/wpid6578-media_1330886180867.png)

You can go edit the user properties and assign the newly created group. Once you click Save, this user will now have restricted permissions.

**Please make sure the Superuser Status checkbox is unchecked before you Save.**

Once the user logs in, the menu they see will be limited the permissions that you have assigned to the user or to the user's group(s).

Importantly, these permissions will apply to Imports and API calls also.

![](/assets/images/wpid6579-media_1330886260426.png)

In the example, above the user see a reduced set of menu items.

![](/assets/images/wpid6580-media_1330886312975.png)

Also, as shown in the screen shot above, this user will not be able to add devices in the IP address edit form because this user does not have permission to edit devices or mac addresses but the user does have permission to edit subnets.

### Adding Users from the Groups page

![Adding Users from the Groups page](/assets/images/wpid6582-media_1432033077932.png)

The example above show how you can create a group and then go to the Users pages and create users. However, it is not necessary to go to the Users pages. You can add users to a group directly from the group edit page as shown above.

### Cloning Permission Groups

![Cloning Permission Groups](/assets/images/wpid6581-media_1414444386608.png)

You can also clone Permission groups using the “Save as new” option. This will make it easier if you want to start from the System generated groups and add your own permissions to create groups.
