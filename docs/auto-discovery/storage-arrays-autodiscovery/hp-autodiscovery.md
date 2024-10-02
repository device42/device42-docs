---
title: "HP Autodiscovery"
sidebar_position: 2
---

Follow the steps below to set up read-only users for HP Storage Array autodiscovery.

## Access Protocols by Array

![](/assets/images/discovery_storage_arrays_autodiscovery_hp-autodiscovery.png)

## Minimum Permissions for Storage Array Autodiscovery

The sections below guide you through how to set up users or roles with minimum read-only permissions that you can use when you create storage array autodiscovery jobs.

### HP Nimble

1. Log in to the Nimble console.
2. Select **Administration → Security** from the menu.
3. Click on **Users and Groups** in the left panel.
4. Click on the **+USER** button to open the Create User panel.
5. Create a user and assign them one of the available roles:

    - administrator
    - power-user
    - operator
    - guest  

6. Select the minimum "operator" role.
7. Click **OK** and save the user.

### HPE StoreEasy

The StoreEasy platform relies on local users created at the server level. Currently, Admin access is required to run a successful discovery.

1. Create a local user on the HPE StoreEasy host server.
2. Add that user to the admin group.

### HP 3PAR

1. Log in to the HP 3PAR Management Console.
2. Click on the **Actions** menu.
3. Select the **Security & Domains** submenu
4. Select **Users** and then **Create User**.
5. Enter a username and password and click **Next**.
6. Grant the user the “browse” role on the appropriate domain.
7. Click **Finish** and save the user.

### Example CLI User Creation

```
createuser d42discovery all browse
```
