---
title: "CyberArk Integration"
sidebar_position: 8
---

Each Device42 Autodiscovery job is configured to use one (or more) sets of system credentials. If you already use CyberArk to manage passwords and other secrets or simply don't want to use Device42 for this purpose, the Device42 CyberArk integration allows Device42 to securely store and retrieve these credentials externally as your primary secret management solution.

CyberArk offers useful features such as automatic password rotation, which can be configured to rotate secrets per your specific corporate policies and industry guidelines.

**Note: Passwords retrieved from CyberArk are not viewable in Device42!**

## Configuring the CyberArk Integration

**Configuring CyberArk:**

- Login to CyberArk as an Administrator.
- Select the _Applications_ tab, then click _Add Application_.
- Create an account for Device42.

![create account for d42 cyberark](/assets/images/create_account_for_d42_cyberark.png)

- Click _Add_.
- Check the box to _Allow extended authentication restrictions_.

![allow extended auth restrictions](/assets/images/allow_extended_auth_restrictions.png)

### **Configuring Device42:**

- Select _Tools > Integrations > CyberArk_ from the Device42 menu.

![](/assets/images/WEB-811_1.jpg)

- Select the checkbox to _Enable CyberArk_ and enter your CyberArk RESTful API information.

![](/assets/images/WEB-811_2.jpg)

- Verify connectivity by clicking _Test_ and entering a managed account name.

![](/assets/images/WEB-811_3.jpg) ![test success](/assets/images/account_OS_found.png)

- Select _Save_.

![cyberark config updated](/assets/images/Cyberark_config_updated.png)

If you run into configuration errors related to SSL errors, you may need to select the _Skip HTTPS Certificate Verification_ option on the CyberArk configuration page before trying again.

![](/assets/images/WEB-811_4.jpg)

## Using the Device42 CyberArk Integration for Discovery

To create a new password object using CyberArk, simply select _CyberArk_ from the _Password Storage_ drop-down menu:

![](/assets/images/WEB-811_5.jpg)

**Note**: By default, passwords are looked up by name in CyberArk by matching the Password label in Device42. If no label is provided, then the username will be matched directly. If a Label is used, it must match the Username in Cyberark. You may also customize the folder or safe the password is retrieved from by utilizing _Password Custom fields_ named _Folder_ and _Safe_.
