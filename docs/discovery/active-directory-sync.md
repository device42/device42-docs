---
title: "Active Directory / LDAP User Sync"
sidebar_position: 2
---

## AD/LDAP Sync Overview

The Active Directory (AD)/LDAP (Lightweight Directory Access Protocol) auto-discovery tool can perform one-way synchronization of your Active Directory and/or LDAP domain members/users to Device42.

You can elect to have AD/LDAP users added to Device42 as either regular end-users or administrators. It's a good idea to schedule your AD/LDAP syncs, as the built-in scheduler can help you ensure your Device42 users stay up-to-date with your directory automatically. Please note that changes to user accounts made in Device42 _will not_ be sent to the AD/LDAP _\[as the sync is one-way, AD/LDAP -> Device42 only\]_.

## Pre-Requistes - Device42 Active Directory Settings Config

To begin, you'll want to configure the Active Directory Settings in Device42. These settings will control authentication to AD like which servers to authenticate against, base DNs, and how users that are discovered are added. _**You'll want to do this \*before\* you create/run your Active Directory/LDAP discovery jobs.**_

1. From the main menu, head to _Tools -> Settings -> Active Directory Settings._:

![](/assets/images/AD1.png)

2. On the Active Directory Settings page, Click the _"Active Directory / LDAP Settings"_ button to acess the actual AD settings, and enter values that are appropriate for your Active Directory (or LDAP) domain: 

![](/assets/images/AD3.png)

![](/assets/images/AD2.png) 

**A few things worth noting with regards to the settings on this page:**
- **LDAP Type**: Choose either AD for Active Directory or LDAP for Lightweight directory access protocol (non-MS directory servers).
- **Server**: Enter AD or LDAP server IP address _(FQDN ONLY if your DNS can resolve it)_. Note that if your Device42 server isn't using AD-Aware DNS servers, you'll want to use an IP address as it may not be able to resolve your domain name if it hasn't been configured across all your DNS servers
- **Backup Server**: Secondary AD / LDAP server, will be used if primary isn't available.
- **Port**: Port for auth requests to your LDAP or Active Directory server. Note that 389 is the **non-SSL default**, while **636 is default SSL port. BE SURE TO change the port** should you decide to enable SSL or run a non-standard port.
- **Base**: Enter the Base DN that points to your users.
- **SSL**: Check this box if you want to query AD or LDAP using SSL. _Be sure to change the port to 636 or your configured SSL port if you check this box!_
- **Username/Password**: This is the user/pw that will be used for authentication against AD
- **Username login Style**: Choose how Device42 accounts created for AD users will be formatted both in Device42 and for login. **WARNING**: changing this setting only affects users imported after the settings change. To change account & logon format for all users, delete existing D42 accounts, change the setting, and _then_ re-sync accounts from AD.
- **Netbios name**: NETBIOS name is an up-to-15-character representation (sometimes shortened) of your domain name, and _can and may actually be entirely different_ from the domain name. [Click for help locating domain's NETBIOS name.](https://smallcitydesign.com/netbios-name/)
3. Once you've configured the AD/LDAP settings here, proceed to creating an AD/LDAP sync job \[main menu -> Discovery -> Active Directory/LDAP settings\] to configure user import and run an initial sync, as discussed in the next section.

## Configure an Active Directory / LDAP User Discovery Job

1) The AD/LDAP sync tool can be found at Discovery>>AD/LDAP Users.

![Add AD LDAP user sync job](/assets/images/add_ad-LDAP_sync.png)

2) Enter any name for the autodiscovery job.

Then choose _'End Users'_ or _'Administrators'_ from the drop-down to choose the type of Device42 user to create from the AD/LDAP users / group members that are discovered.

Enter the exact Group Distinguished Name and authentication information. Check the 'Recursively search nested groups' if you want the sync to recursively traverse any sub-domains found.

![](/assets/images/media_1424428858240.png)

3) If End Users was chosen as the user type, you may optionally choose which AD/LDAP attributes should be used to import contact, location, and notes if desired. Go ahead an run the discovery job, and/or configure a schedule - Similar to all other autodiscovery jobs, you can create a schedule to keep your Device42 users in sync with AD automatically!

## Example of how to get a Group DN in Active Directory

![](/assets/images/wpid5372-AD-group-DN.png)

Under the group properties with "advanced features" enabled in Active Directory Users and Computers - you can go to the attribute editor and copy the distinguishedName as shown in the image above.

## Choose members and groups for administrators (for permission)

![Choose members and groups for administrators (for permission)](/assets/images/wpid5373-AD-save-dn.png)

**This section applies only if you choose Type = Administrators...**

In the above screenshot, the Users are the list of AD users that were displayed as a result of the choices on the first screen.

The Groups are not AD groups. They are Device42 groups.

You should select the Users that you want to be device42 administrators and move them to the right side of the Users dialog.

You should select one or more device42 groups for these users and move them to the right side of the Groups dialog.

Then, when you click the "Add..." button, the selected users will become Device42 administrators and will receive the permissions of the selected groups.

![](/assets/images/wpid5374-AD-use-saved-dn.png)

As shown above, saved DN's are available for future use.

## AD / LDAP Discovery Job Options

![AD LDAP Options](/assets/images/ad_LDAP_job_Options.png)

**Add username in lowercase:** converts all characters to lowercase when adding discovered users to D42 **Recursively search nested groups:** By default, a group that is a member of another group's users will not be added. Select this check box to do so. **Ignore existing Administrators:** Uncheck if you'd like administrators to continue to inherit permissions from multiple LDAP sync jobs. **Clear any existing Administrator Permissions Groups:** Check to remove all group memberships from existing admins before adding newly discovered memberships.
