---
title: "HP Autodiscovery"
sidebar_position: 2
---

Follow the steps below to set up read-only users for HP Storage Array autodiscovery.

## Access Protocols by Array

![](/assets/images/discovery_storage_arrays_autodiscovery_hp-autodiscovery.png)

## Minimum Permissions for Storage Array Autodiscovery

Follow the steps in the sections below to set up users or roles with minimum read-only permissions that you can use when you create storage array autodiscovery jobs.

### HP Nimble

1. Log into the Nimble console.
2. Select _Administration → Security_ from the menu.
3. Click on _Users and Groups_ from the left panel.
4. Click on the _+USER_ button to open the Create User panel.
5. Create a user and assign one of the available roles:
    - administrator
    - power-user
    - operator
    - guest  
          
        Select the minimum _**operator**_ role.
6. Click _OK_ and save the user.

### HPE StoreEasy

The StoreEasy platform relies on local users created at the server level. Currently, Admin access is required to run a successful discovery.

1. Create a local user on the HPE StoreEasy host server.
2. Add that user to the admin group.

### HP 3PAR

1. Log into HP 3PAR Management Console.
2. Click on the _Actions_ menu.
3. Select the _Security & Domains_ submenu
4. Select _Users_ and then _Create User_.
5. Enter user name and password and click _Next_.
6. Grant the user the “browse” role on the appropriate domain.
7. Click _Finish_ and save the user

**Example CLI user creation**

```
createuser d42discovery all browse
```
