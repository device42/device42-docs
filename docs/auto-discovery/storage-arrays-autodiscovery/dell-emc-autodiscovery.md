---
title: "Dell/EMC Autodiscovery"
sidebar_position: 1
---

## Access Protocols by Array

![](/assets/images/discovery_storage_arrays_autodiscovery_dell-emc-autodiscovery.png)

## Minimum Permissions for Storage Array Autodiscovery

Follow the steps in the sections below to set up users or roles with minimum read-only permissions that you can use when you create storage array autodiscovery jobs.

### Dell Compellent

Compellent discovery requires use of an associated Dell Storage Manager appliance.

1. Log into your DSM deployment’s web UI.
2. Select Data Collector settings.
3. Go to the Users tab.
4. Go to the Users & User Groups tab.
5. Create a user and assign it the **Reporter** role.
6. Select your new user and connect it to your target Storage Center via the “Select Storage Center Mappings” menu.

### VNX or VMAX using EMC SMIS Provider

Login to SMIS provider using `http://<SMIS-Provider-IP>:5988/ECOMConfig` or `https://<SMIS-Provider-IP>:5989/ECOMConfig`.

- Click on _Add User_ and create a user with the **monitor** role.

![Add User](/assets/images/dell-emc-autodiscovery/smis-add-user.png)

- Use the Dynamic Settings shown below.

![Dynamic Settings](/assets/images/dell-emc-autodiscovery/smis-dynamic-settings.png)

### EMC Data Domain

1. Log into the Data Domain console.
2. Select _Administration → Access_ from the left panel.
3. Go to the _Local Users_ tab.
4. Create a user and assign one of the available roles:
    - admin
    - limited-admin
    - security
    - user
    - back-operator
    - none  
          
        Select the minimum _**user**_ role.
5. Click _OK_ and save the user.

### EMC Unity

1. Log into the EMC Unity Console console.
2. Click on the gear icon in the tool bar to open the Settings window.
3. Click on _Users and Groups_ tab.
4. Click on the + button to add a User. This will launch the Create User Wizard.
5. Select type of user on first page, and click _Next_.
6. Enter username and password, and click _Next_.
7. Assign one of the available roles:
    - Administrator
    - Storage Administrator
    - Operator
    - VM Administrator  
          
        Select the minimum _**Operator**_ role
8. Click _Finish_ and save the user.

### Isilon

Create a new role and add the following read-only permissions:

- ISI_PRIV_LOGIN_CONSOLE
- ISI_PRIV_LOGIN_PAPI
- ISI_PRIV_LOGIN_SSH
- ISI_PRIV_SYS_SHUTDOWN
- ISI_PRIV_SYS_SUPPORT
- ISI_PRIV_AUTH
- ISI_PRIV_AUDIT
- ISI_PRIV_CLUSTER
- ISI_PRIV_DEVICES
- ISI_PRIV_FTP
- ISI_PRIV_HDFS
- ISI_PRIV_HTTP
- ISI_PRIV_MONITORING
- ISI_PRIV_NDMP
- ISI_PRIV_NETWORK
- ISI_PRIV_NFS
- ISI_PRIV_NS_TRAVERSE
- ISI_PRIV_NS_IFS_ACCESS
- ISI_PRIV_QUOTA
- ISI_PRIV_REMOTE_SUPPORT
- ISI_PRIV_SMARTPOOLS
- ISI_PRIV_SMB
- ISI_PRIV_STATISTICS


You can also use CLI commands to create such roles.

1. Login to the cluster using SSH.

2. Run the following commands.

3. To create a read-only role:
    ```
    isi auth roles create –name readonly_role –description “Read-only role for D42”
    ```
4. To give permissions to this role. Add all the permissions from above:
    ```
    isi auth roles modify readonly_role –add-priv-ro=ISI_PRIV_LOGIN_PAPI
    ```
5. Create a USER:
    ```
    isi auth users create readonly_user –enabled yes –password xxxxxx
    ```
6. Add user to the role:
    ```
    isi auth roles modify readonly_role –add-user=readonly_user
    ```

**Creating the Role/User via Web UI**

1. Login to the Cluster Web UI.
2. Select _Access Tab → Membership & Roles_.
3. Select the _Users Tab_.
4. Select Provider “LOCAL: System”
5. Create User
    - Set user name and password
    - Select primary group “Users”
    - Enable the account
6. Select the _Roles Tab_.
7. Create a role
    - Set Role Name
    - Add member (User created above)
    - Add the following privileges as Read only  
        _Console  
        Platform API  
        SSH  
        Shutdown  
        Support  
        Auth  
        Audit  
        Cluster  
        Devices  
        FTP  
        HDFS  
        HTTP  
        Monitoring  
        NDMP  
        Network  
        NFS  
        Remote Support  
        SmartPools  
        SMB  
        Statistics  
        Namespace Traverse  
        Namespace Acces_s
