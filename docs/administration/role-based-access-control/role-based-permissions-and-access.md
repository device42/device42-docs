---
title: "Role-based Permissions and Access"
sidebar_position: 1
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

Role-based access can be defined at either the group or user level. If you have many users, but a much smaller number of different permissions sets, it would make sense to use admin groups. In the example below, we will create a new group with selected IP address, DNS and VLAN management permissions.

### Creating a New Admin Group

To create a new Admin Group, navigate to **Tools > Admin Groups** and click the **+ Add Admin Group** button on the right of the screen.

First, enter a name for the group.

<ThemedImage
  alt="Search for available permissions"
  sources={{
    light: useBaseUrl('/assets/images/role-based-permissions-and-access/search-available-permissions-light.png'),
    dark: useBaseUrl('/assets/images/role-based-permissions-and-access/search-available-permissions-dark.png'),
  }}
/>

In the **Available permissions** box, you will see all the available permissions. In the example, we searched for all permissions that contain "ip" (not case sensitive).

Select the permissions you would like to grant the members of this group. You can select multiple permissions by clicking and dragging over your selection. Use the **right arrow** in the middle to add the selected permissions to the **Chosen permissions** box.

We have added a number of IP-related permissions and are about to add some DNS-related permissions.

<ThemedImage
  alt="Add IP and DNS-related permissions"
  sources={{
    light: useBaseUrl('/assets/images/role-based-permissions-and-access/adding-ip-dns-permissions-light.png'),
    dark: useBaseUrl('/assets/images/role-based-permissions-and-access/adding-ip-dns-permissions-dark.png'),
  }}
/>

And now we'll add some VLAN permissions.

<ThemedImage
  alt="Select VLAN-related permissions"
  sources={{
    light: useBaseUrl('/assets/images/role-based-permissions-and-access/adding-vlan-permissions-light.png'),
    dark: useBaseUrl('/assets/images/role-based-permissions-and-access/adding-vlan-permissions-dark.png'),
  }}
/>

### Assigning Users to Admin Groups

Navigate to **Tools > Administrators** to create and edit users to the Main Appliance. Add a new user by clicking the **+ Add Local Admin** button to the right of the screen. Or select an existing user from the list page and click **Edit** from their profile. Assign the newly created Admin Group to the user under the **Permissions** box. 

When you click **Save**, the user will only have permissions to act on IP addresses, DNSs and VLANs as defined above.

Please make sure the **Superuser Status** checkbox is unchecked before saving.

<ThemedImage
  alt="Assign user to Admin Group"
  sources={{
    light: useBaseUrl('/assets/images/role-based-permissions-and-access/assign-admin-group-light.png'),
    dark: useBaseUrl('/assets/images/role-based-permissions-and-access/assign-admin-group-dark.png'),
  }}
/>

When the user logs in, the menu they see will be limited to the permissions that you have assigned to the Admin Group they belong to.

<ThemedImage
  alt="Reduced menu items"
  sources={{
    light: useBaseUrl('/assets/images/role-based-permissions-and-access/reduced-menu-options-light.png'),
    dark: useBaseUrl('/assets/images/role-based-permissions-and-access/reduced-menu-options-dark.png'),
  }}
/>

This user will not be able to add subnets in the IP address edit form because they do not have the necessary permissions.

<ThemedImage
  alt="Not authorized notice"
  sources={{
    light: useBaseUrl('/assets/images/role-based-permissions-and-access/not-authorized-notification-light.png'),
    dark: useBaseUrl('/assets/images/role-based-permissions-and-access/not-authorized-notification-dark.png'),
  }}
/>

### Cloning Permission Groups

 You can clone groups using the **Save as new** option. This makes it easier to create new groups by adding your own permissions to those of existing groups.

<ThemedImage
  alt="Save as new admin group"
  sources={{
    light: useBaseUrl('/assets/images/role-based-permissions-and-access/save-as-new-admin-group-light.png'),
    dark: useBaseUrl('/assets/images/role-based-permissions-and-access/save-as-new-admin-group-dark.png'),
  }}
/>

