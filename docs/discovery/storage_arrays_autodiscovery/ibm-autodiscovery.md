---
title: "IBM Autodiscovery"
sidebar_position: 3
---

## Access Protocols by Array

![](/assets/images/placeholder.png)

## Minimum Permissions for Storage Array Autodiscovery

Follow the steps in the sections below to set up users or roles with minimum read-only permissions that you can use when you create storage array autodiscovery jobs.

### IBM V7000/StoreWize

1. Log into the IBM V7000 Management Console.
2. Click on _Access → Users_ Panel.
3. Click on _Create Group_.
4. Select one of the role from the available roles:
    - SecurityAdmin
    - Admin
    - ExportAdmin
    - StorageAdmin
    - SnapAdmin
    - SystemAdmin
    - CopyOperator
    - Monitor
    - Service
    - Enahanced  
          
        Select the minimum _**Monitor**_ role.
5. Click **Finish** and save the Group.
6. Create a new User and add the User to the Group.
