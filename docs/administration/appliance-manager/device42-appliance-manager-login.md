---
title: "Device42 Appliance Manager login"
sidebar_position: 6
---

The device42 Appliance manager can be accessed at http://your-ip-address-or-FQDN:4242 (or https://your-ip-address-or-FQDN:4343 when https is enabled).

Default username and password: d42admin / default

Please change it as soon as you login.

![D42 Appliance Manager Link and Login Process v15+](/assets/images/appl-mgr-link-login-v15.png)

Alternatively, the main app login page has a link to appliance manager as well.

![Device42 Appliance Manager Home Screen v15](/assets/images/d42-appliance-manager-home-v15.png)

Default username and password: d42admin / default

### Change your password

![Appliance Manager, Change Password](/assets/images/appl-mgr-change-password.png)

## Accessing the D42 Appliance Manager from the AWS Marketplace

Launch your Device42 instance via the [AWS Marketplace](https://aws.amazon.com/marketplace/search/results?ref_=device42&searchTerms=Device42) 1-Click feature. Log in to appliance manager using the default Device42 username \[ d42admin \], the password being your **AWS instance ID**. 

![Appliance manager login ](/assets/images/appliance_manager_AWS.png)

Once logged in, you'll see the appliance manager main menu: 

![D42 Appliance Manager menu](/assets/images/appliance_manager_main.png)

The appliance manager listens on port 4343 (https://YOUR\_DEVICE42\_INSTANCE:4343). Software updates, Device42 backups and restores, and certificate management are all performed through the appliance manager.

Note: if you installed on AWS manually (using a downloaded image), you can log on to appliance manager using the default Device42 username/password [d42admin/default].

See [Amazon Web Services - Installation](/getstarted/installation/installation-amazon-web-services/) for more information on administration of Device42 on AWS.