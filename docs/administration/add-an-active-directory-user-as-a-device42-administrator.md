---
title: "Add an Active Directory User as a Device42 Administrator"
sidebar_position: 3
---

Below are the steps to create the Device42 Active Directory settings and to add AD users as Administrators for device42. Please note that there are no Active directory credentials stored in the device42 application. You will need to enter valid domain user credentials each time before you can search for a user.

## Process Overview Animation

The following is an animation that overviews the process outlined below. If the animation does not open correctly, use this link: [Add Active Directory User](https://www.imgoat.com/uploads/9adc1e107f/206938.gif).

![Add scheduled AD user sync job](/assets/images/placeholder.png)

## Add Active Directory Settings

![](/assets/images/ToolsSettings_Change-Active-Directory-LDAP-Settings.png)

Go to **Tools > Settings > Active Directory Settings** and enter and save the settings for your domain. You can test these setting using the Test Active Directory Authentication section at the bottom of the AD settings page.

## Active Directory User Add

![Add Admin User Active Directory](/assets/images/manually_add_d42_admin_user_from_AD.png)

## Configuring the Active Directory User Discovery/sync Job

You may now configure an AD Sync Job to pull AD users in bulk and/or keep them synced. Proceed to [the Active Directory Discovery Job docs page](discovery/active-directory-sync.md) to view the AD discovery process.
