---
title: "All Other Storage Autodiscovery"
sidebar_position: 4.5
---

## Access Protocols by Array

![](/assets/images/discovery_storage_arrays_autodiscovery_all-other-storage-autodiscovery.png)

## Minimum Permissions for Storage Array Autodiscovery

Follow the steps in the sections below to set up users or roles with minimum read-only permissions that you can use when you create storage array autodiscovery jobs.

### Infinidat

1. Log in to the Infinidat console.
2. Select **Settings** from the left panel.
3. Click on **Users** from the tab.
4. Click the **Create User** button to open the Create User panel.
5. Create a user and assign it one of the available roles:
    - ADMIN
    - POOL\_ADMIN
    - READ\_ONLY  

6. Select the minimum **READ\_ONLY** role
7. Click **OK** and save the user.

### Netapp Filers

- Connect to your Netapp via SSH.
- Create a monitoring role with the necessary permissions.

  ```shell
  _useradmin role add -a api-system-get-version,login-http-admin,security-api-vfiler,api-system-get-info,api-fcp-adapter-list-info,api-iscsi-initiator-list-info,api-iscsi-adapter-list-info,api-disk-list-info,api-aggr-list-info,api-volume-list-info,api-lun-list-info,api-qtree-list,api-quota-list-entries,api-cifs-share-list-iter-start,api-perf-object-get-instances,api-lun-map-list-info,api-cifs-share-list-iter-next,api-lun-get-serial-number_
  ```

  **Permissions contained in the above command:**

  - `api-system-get-version` 
  - `login-http-admin  
  - `security-api-vfiler  
  - `api-system-get-info  
  - `api-fcp-adapter-list-info  
  - `api-iscsi-initiator-list-info  
  - `api-iscsi-adapter-list-info  
  - `api-disk-list-info  
  - `api-aggr-list-info  
  - `api-volume-list-info  
  - `api-lun-list-info  
  - `api-qtree-list  
  - `api-quota-list-entries  
  - `api-cifs-share-list-iter-start  
  - `api-perf-object-get-instances  
  - `api-lun-map-list-info  
  - `api-cifs-share-list-iter-next  
  - `api-lun-get-serial-number

- Create a monitoring group, attaching the monitoring role created above.

  ```
  useradmin group add -r
  ```

- Create a monitoring user and assign it to the monitoring group created in the step above.

  ```
  useradmin user add -g
  ```

**Cluster Mode**

1. Connect to your NetApp cluster via SSH.
2. Create a user with the following config:

    - **VServer to discover:** `<vserver\_name>`
    - **Discovery User name:** `<user\_name>`
    - **Role:** readonly (existing system role)
    - **Application:** ontapi
    - **Auth Method:** Password

    ```
    security login create -vserver -user-or-group-name -application ontapi -authentication-method password -role readonly
    ```

### Nutanix

1. Log in to the Nutanix console.
2. Click the gear icon or select **Settings** from the main menu.
3. Select **Local User Management** under **Users and Groups**.
4. Click on the **+ New User** button.
5. Do not select any roles, so that the user is assigned a viewer role by default.
6. Click **OK** and save the user.

### Oracle ZFS

1. Log in to the Oracle ZFS console.
2. Select **Configuration** from the main menu.
3. Click on the **+** button next to **Roles** to create a new role.
    - Add the following Authorizations to the role (leave Domain as “\*”):
        - **Analytics:** Read
        - **Worksheet:** Read
4. Click on the **+** button next to **Users** to create a new user.
    - Select the Role created in step 3 for the user.
    - “Kiosk User” must **NOT** be selected.

5. Click **Finish** to save the user.

### Pure Storage

Pure Storage does not allow for multiple local users, and relies on an LDAP provider to supply user authentication and group membership for a non-root user.

1. Log in to the Pure Storage console.
2. Click on **System Menu**.
3. Click on **Configuration**.
4. Click on **Directory Service**.
5. Connect your Pure Array to your LDAP provider, making sure to map the Read Only Group to the appropriate OU within your LDAP environment.
6. Create a discovery user account in your LDAP environment.
7. Add that LDAP user account to the OU associated with the Pure Storage Read Only Group.
