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

1. Log in to your DSM deployment’s web UI.
2. Select **Data Collector** settings.
3. Go to the **Users** tab.
4. Go to the **Users & User Groups** tab.
5. Create a user and assign it the **Reporter** role.
6. Select your new user and connect it to your target **Storage Center** via the **Select Storage Center Mappings** menu.

### VNX or VMAX Using EMC SMIS Provider

Log in to SMIS provider using `http://<SMIS-Provider-IP>:5988/ECOMConfig` or `https://<SMIS-Provider-IP>:5989/ECOMConfig`.

- Click **Add User** and create a user with the **monitor** role.

![Add User](/assets/images/dell-emc-autodiscovery/smis-add-user.png)

- Use the **Dynamic Settings** shown below.

![Dynamic Settings](/assets/images/dell-emc-autodiscovery/smis-dynamic-settings.png)

### EMC Data Domain

1. Log in to the Data Domain console.
2. Select **Administration → Access** on the left panel.
3. Go to the **Local Users** tab.
4. Create a user and assign one of the available roles:

    - admin
    - limited-admin
    - security
    - user
    - back-operator
    - none  
          
6. Select the minimum **user** role.
7. Click **OK** and save the user.

### EMC Unity

1. Log in to the EMC Unity Console console.
2. Click on the gear icon in the tool bar to open the **Settings** window.
3. Click on the **Users and Groups** tab.
4. Click on the **+** button to add a user. This will launch the **Create User** wizard.
5. Select type of user on first page, and click **Next**.
6. Enter username and password, and click **Next**.
7. Assign one of the available roles:

    - Administrator
    - Storage Administrator
    - Operator
    - VM Administrator  
          
8. Select the minimum **Operator** role.
9. Click **Finish** and save the user.

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

**You can also use CLI commands to create such roles:**

1. Log in to the cluster using SSH.

2. Run the following commands:

   - To create a read-only role:
  
       ```
       isi auth roles create –name readonly_role –description “Read-only role for D42”
       ```
   
   - To give permissions to this role add all the permissions from above:
   
       ```
       isi auth roles modify readonly_role –add-priv-ro=ISI_PRIV_LOGIN_PAPI
       ```
   
   - To create a USER:

      ```
       isi auth users create readonly_user –enabled yes –password xxxxxx
       ```
   
   - To add a user to the role:

       ```
       isi auth roles modify readonly_role –add-user=readonly_user
       ```

**Alternatively, you can create the Role/User via the web UI**

1. Log in to the cluster web UI.
2. Select **Access Tab → Membership & Roles**.
3. Select the **Users** tab.
4. Select **LOCAL: System** for the provider.
5. Create user:

    - Set the username and password.
    - Select **Users** as the primary group.
    - Enable the account.

7. Select the **Roles** tab.
8. Create a role:

    - Set the **Role Name**.
    - Add the member (the user created above).
    - Add the following privileges as read-only:

        - Console  
        - Platform API  
        - SSH  
        - Shutdown  
        - Support  
        - Auth  
        - Audit  
        - Cluster  
        - Devices  
        - FTP  
        - HDFS  
        - HTTP  
        - Monitoring  
        - NDMP  
        - Network  
        - NFS  
        - Remote Support  
        - SmartPools  
        - SMB  
        - Statistics  
        - Namespace Traverse  
        - Namespace Acces_s
