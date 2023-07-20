---
title: "HP Service Manager Integration"
sidebar_position: 13
---

### Device42-HPSM Sync Integration Background:

The Device42 HP Service Manager (HPSM) Connector enables HPSM users to seamlessly add Device42’s IT infrastructure management capabilities to their HPSM solution. HP Service Manager (HPSM) users can enhance their ITSM process, change management processes, and other workflows by syncing the Asset and CMDB data from Device42 to their HPSM instance.

Enjoy an improved HP Service Manager experience by leveraging Device42’s comprehensive Continuous Discovery, link service requests to the relevant CI, search for issues using CI attributes, and even see CI details in HPSM!

![Device42 Data in HPSM](/assets/images/2017-03-15-hpsm-1.png)

Using the Device42-hpsm integration connector, hpsm users can synchronize Device42’s enhanced asset management and tracking capabilities to their hpsm IP-enabled configuration items (CI) data maintained inside hpsm’s Configuration Management Database (CMDB). This synchronization can be manually refreshed at any time by the user and also scheduled for automatic refresh at user-defined intervals. Once Device42 CI data has been synced to HP Service Manager, users can see Device42 CI details (Asset tag, Assignment, Description, IP & MAC, and more) for those CIs in HPSM, while CI Data can also be seen for all HPSM-only CIs alike. Quickly view any service requests that are associated with a CI, as well.

* * *

### Assumptions & Requirements:

1. This Integration's script was tested with HPSM v9.40 and Device42 v12.0.0
2. Insructions assume you have a working Device42 and HPSM Instance, at least the versions above or newer.
3. Integration requires Python 2.7.x

* * *

### Integration Steps, Configuration & Usage:

Integrating Device42 data to HPSM is easily accomplished using the Device42-hpsm sync script. This script makes CI data integration a straightforward, easy process.

1. Create a working directory foo and copy the contents of the Device42 Device42\_HPSM\_Sync repository to it
2. Copy (or move/rename) the settings file conf.sample to conf
3. Edit the conf file you created in the last step to contain your Device42 & HPSM instance credentials \[host, user, pass\]:

```
    #========= Device 42 ========= #
        d42_host = '192.168.1.102'
        d42_username = 'user'
        d42_password = 'pass'
    #========= HPSM ========= #
        hpsm_host = '10.42.42.46'
        hpsm_protocol = 'http'
        hpsm_port = '13080'
        hpsm_username = 'user'
        hpsm_password = 'pass'
        hpsm_api_version = '9'
    #========= Options ========= #
        opt_debug = True
        opt_dry_run = True
```

1. Configure HPSM: Open the Database Dictionary and add field (type ‘number’, name ‘device42.id’) to both the models ‘computer’ and ‘networkcomponents' ![Configure HPSM Database Dictionary](/assets/images/2015-03-15-hpsm-conf-1.png) ![Configure HPSM Databse Dictionary fields](/assets/images/2015-03-15-hpsm-conf-2.png)
2. Operator should have access to the REST API: ![Configure Operator API Access](/assets/images/2015-03-15-hpsm-3.png)
3. The API should allow “Computer” and “NetworkDevice” access, allowing both ‘add’ and ‘save’ actions: ![Configure Computer API Permissions](/assets/images/2015-03-15-hpsm-conf-4.png) ![Configure add and save API Permissions](/assets/images/2015-03-15-hpsm-conf-5.png)
4. Both endpoints must allow access to add & update all of the fields pictured. Exact field names can also be found in README.MD: ![Allow Add and Update](/assets/images/2015-03-15-hpsm-conf-6.png)
5. Set the unique key for both endpoints to: ‘logical.name’: ![Set Unique Keys in HPSM](/assets/images/2015-03-15-hpsm-conf-7.png)
6. Run $ python starter.py

* * *

### Accessing the hpsm Integration Connector

Device42 and HP Service Manager users can access the free Integration Connector Script on our website: https://www.device42.com/integrations/hpsm
