---
title: "Active Directory and OpenLDAP Support"
sidebar_position: 1
---

## Multi-domain Active Directory & OpenLDAP Support

Device42 can now be configured to work with multiple Active Directory (AD) servers. AD servers can be used for both Active Directory based logins, as well as AD synchronization.

AD settings can be found and configured in _Tools > Settings > Active Directory Settings_, but are only accessible to D42 **super users**. Multiple Active Directory settings and/or up to one OpenLDAP server setting can be configured at a time to properly describe your environment. Each Active Directory setting can also specify multiple domains.

![Select Active Directory/LDAP Settings to view](/assets/images/Active_directory_settings_menu_button.png) ![Change Active Directory Settings](/assets/images/Change_Active_directory_settings-HL.png)

After entering Active Directory or LDAP settings, you can test your configuration with the _'Test Connection'_ button on the view page. You will be prompted for credentials to initiate the test.

![Test Active Directory Credentials](/assets/images/Test_AD_Connection_button.png)

If you have selected to utilize “DomainUsername” Username Login Style, then users are required to enter both the domain and username to login into Device42

![D42 Login Using active directory Domain example](/assets/images/Login_Screen_DomainName-Backslash_username.png)

## Manually Add Single user from Active Directory

To add a single new Administrator user manually from Active Directory, simply visit the main menu, _"Tools -> Admins & Permissions -> Administrators"_. ![Add Admin User Active Directory](/assets/images/manually_add_d42_admin_user_from_AD-1.png)

You are able to review the domain found for the user found prior to adding them, and **the new user will be added according to the currently configured "Username Login Style option"**: (previous section). ![Add Active Directory user as Admin](/assets/images/Add_AD_user_as_Admin.png)

## Configuring an Active Directory User Sync / Discovery Job

You may now configure an AD Sync Job to pull AD users in bulk and/or keep them synced. Proceed to [the Active Directory Discovery Job docs page](discovery/active-directory-sync.md) to view the AD discovery process.
