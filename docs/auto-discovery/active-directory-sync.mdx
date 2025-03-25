---
title: "Active Directory / LDAP User Sync"
sidebar_position: 2
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

## AD/LDAP Sync Overview

The AD/LDAP auto-discovery tool performs one-way synchronization of your Active Directory (AD) and Lightweight Directory Access Protocol (LDAP) domain users to Device42.

You can add AD/LDAP users to Device42 as regular end users or administrators. To keep your Device42 users up to date with your directory, it's a good idea to schedule your AD/LDAP syncs using the Device42 scheduling option.

:::note
Changes to user accounts made in Device42 will not be sent to the AD/LDAP as the sync is one-way; from AD/LDAP to Device42 only.
:::

## Prerequisites - The Settings Config

Before you create and run your AD/LDAP discovery jobs, configure the **Active Directory Settings** in Device42. These settings control authentication to AD, the servers to authenticate against, base DNs, and how to add discovered users to Device42. 

1. From the main menu, head to **Tools > Settings > Active Directory Settings**:
   
    <ThemedImage
    alt="Active Directory Settings menu location"
    sources={{
        light: useBaseUrl('/assets/images/active-directory-sync/config-menu-light.png'),
        dark: useBaseUrl('/assets/images/active-directory-sync/config-menu-dark.png'),
    }}
    />

2. Click the **+ Add Active Directory / LDAP Settings** button and enter values specific to your Active Directory (or LDAP) domain. Refer to the explanation of the fields below the image. 

    <ThemedImage
    alt="Active Directory Settings example values"
    sources={{
        light: useBaseUrl('/assets/images/active-directory-sync/settings-form-light.png'),
        dark: useBaseUrl('/assets/images/active-directory-sync/settings-form-dark.png'),
    }}
    />

**Explanation of the fields**
- **LDAP Type**: Choose either **Active Directory** or **Open LDAP** for Lightweight directory access protocol for non-Microsoft directory servers.
- **Server**: Enter the AD or LDAP server IP address. Only use FQDN if your DNS can resolve it. Rather enter an IP address if your Device42 server doesn't use AD-Aware DNS servers, as it may not be able to resolve your domain name if it hasn't been configured across all your DNS servers
- **Backup Server**: Add a secondary AD or LDAP server to use if the primary one isn't available.
- **Port**: Port for auth requests to your LDAP or Active Directory server. Note that **389** is the non-SSL default and **636** is the default SSL port. Ensure you change the port if you decide to enable SSL or run a non-standard port.
- **Base**: Enter the Base DN that points to your users.
- **SSL**: Check this box if you want to query AD or LDAP using SSL. Please change the port to **636** or your configured SSL port if you check this box.
- **Username/Password**: This is the username a password that will be used for authentication against AD.
- **Username login Style**: Choose how Device42 accounts created for AD users will be formatted both in Device42 and for login. 

    :::caution
    Changes to this setting only affects users imported after the change. To change the account and login format for all users, delete the existing Device42 accounts, change the login style setting, and then re-sync the accounts from AD.
    :::

- **Netbios name**: NetBIOS name is an up-to-15-character representation of your domain name, and may actually be entirely different from the domain name. Visit the [Microsoft Disjoint namespace scenarios](https://learn.microsoft.com/en-us/exchange/disjoint-namespace-scenarios-exchange-2013-help) article for help locating domain NetBIOS names.

## Configure an AD/LDAP User Discovery Job

When you've configured the AD/LDAP settings, create an AD/LDAP sync job. From the main menu, go to **Discovery > AD/LDAP Users** and click **Add AD/LDAP Sync**.

### Choose User Type

Name the AD/LDAP sync job. Then choose the Device42 user **Type** to create from the discovered AD/LDAP users or group members. In the **Group or OU DN** field, enter the exact Group Distinguished Name. 

<ThemedImage
  alt="User type dropdown"
  sources={{
    light: useBaseUrl('/assets/images/active-directory-sync/user-type-light.png'),
    dark: useBaseUrl('/assets/images/active-directory-sync/user-type-dark.png'),
  }}
/>

- If you choose **End Users** as the user type, you may optionally choose AD/LDAP attributes to populate end user contact information, location, and notes. You'll also be able to choose and create **Departments**.

    <ThemedImage
    alt="User type attribute options"
    sources={{
        light: useBaseUrl('/assets/images/active-directory-sync/end-user-attributes-light.png'),
        dark: useBaseUrl('/assets/images/active-directory-sync/end-user-attributes-dark.png'),
    }}
    />

- If you choose **Administrator** as the user type, you'll be able to choose and create **Permission Groups**, and the following options will become available:
  - **Add username in lowercase:** Convert all characters to lowercase when adding discovered users to Device42. 
  - **Recursively search nested groups:** Select this option to add groups that are members of another group's users. By default, a group that already belongs to another group's users will not be added. 
  - **Ignore existing Administrators:** Uncheck this option if you'd like administrators to continue to inherit permissions from multiple LDAP sync jobs. 
  - **Clear any existing Administrator Permissions Groups:** Check to remove all group memberships from existing admins before adding newly discovered memberships.

    <ThemedImage
    alt="Administrator options"
    sources={{
        light: useBaseUrl('/assets/images/active-directory-sync/administrator-options-light.png'),
        dark: useBaseUrl('/assets/images/active-directory-sync/administrator-options-dark.png'),
    }}
    />
  
### Specify a Custom LDAP Filter

Specify a Custom LDAP Filter in the **Custom Filter** field to define which objects are synced. 

<ThemedImage
  alt="Custom Filter field"
  sources={{
    light: useBaseUrl('/assets/images/active-directory-sync/custom-filter-light.png'),
    dark: useBaseUrl('/assets/images/active-directory-sync/custom-filter-dark.png'),
  }}
/>

By default, the LDAP filter is set to retrieve objects of type `group` or `user`, and is denoted by:

```
(|(objectCategory=group)(|objectCategory=user))
```

Similarly, the default LDAP filter for Open LDAP sync is `(objectClass=inetOrgperson)`, which gets the `inetOrgperson` object type.

You can specify your own LDAP filter as follows to fetch all active users and groups as follows:

```
(&(|(objectCategory=group)(|objectCategory=user))(!(userAccountControl:1.2.840.113556.1.4.803:=2)))
```

The `userAccountControl` attribute uses a bitwise filter to look for specific flags and is set to `2` for disabled accounts. The preceding exclamation point `!` in the command excludes such accounts.

Now, disabled accounts will be ignored when Active Directory accounts are synced. You can use similar commands of LDAP attributes to filter which objects get synced.

### Select Config Settings and Add Credentials

Next, choose the settings configuration you created in the [Prerequisites section](#prerequisites---the-settings-config) and provide the AD/LDAP **Username** and **Password** to use for authentication.

<ThemedImage
  alt="Settings and credential fields"
  sources={{
    light: useBaseUrl('/assets/images/active-directory-sync/settings-and-auth-light.png'),
    dark: useBaseUrl('/assets/images/active-directory-sync/settings-and-auth-dark.png'),
  }}
/>

### Select Permission Groups for Administrators

If you chose **Administrators** as the **Type**, you'll have the option to grant Device42 permissions to selected admin groups. Note that the groups are not Active Directory groups, but Device42 admin groups. 

Select from the available **Permission Groups** on the left and use the arrow button to move them to the **Chosen Permission Groups** side. 

<ThemedImage
  alt="Permission Groups for Administrators"
  sources={{
    light: useBaseUrl('/assets/images/active-directory-sync/permission-groups-light.png'),
    dark: useBaseUrl('/assets/images/active-directory-sync/permission-groups-dark.png'),
  }}
/>

To create a new Admin group, click the **plus icon**, and in the popup that opens, name the new group, select the permissions, and click **Save**.

<ThemedImage
  alt="Create new Admin Groups"
  sources={{
    light: useBaseUrl('/assets/images/active-directory-sync/add-new-admin-group-light.png'),
    dark: useBaseUrl('/assets/images/active-directory-sync/add-new-admin-group-dark.png'),
  }}
/>

### Select Departments for End Users

If you chose **End Users** as the **Type**, you'll have the option to add your Device42 customers, end users, or departments to the sync job.

<ThemedImage
  alt="Departments for End Users"
  sources={{
    light: useBaseUrl('/assets/images/active-directory-sync/departments-light.png'),
    dark: useBaseUrl('/assets/images/active-directory-sync/departments-dark.png'),
  }}
/>

Click the **plus icon** to add a new customer, department, or end user that's not on the list. 

<ThemedImage
  alt="Departments for End Users"
  sources={{
    light: useBaseUrl('/assets/images/active-directory-sync/new-customer-form-light.png'),
    dark: useBaseUrl('/assets/images/active-directory-sync/new-customer-form-dark.png'),
  }}
/>

## Example: Find a Group DN in Active Directory

![](/assets/images/wpid5372-AD-group-DN.png)

Under the group properties with "Advanced features" enabled in Active Directory Users and Computers, go to the attribute editor and copy the "distinguishedName" as shown in the image above.
