---
title: "Blade Systems Autodiscovery"
sidebar_position: 7
---

This autodiscovery method will discover HP and IBM blade systems (including Blade Center). Cisco UCS is also supported but in a separate menu entry. If you would like to see other vendors, please contact support.

## Add Blade System autodiscovery job

![add blade system auto discovery](/assets/images/add_blade_autodiscovery.png)

Navigate to _Discovery > SNMP > Add SNMP Autodiscovery Job._

Blade System discovery will get the following information:

- Enclosure/Chassis - name, hardware make/model, serial #'s, MAC address(es), IP address(es), and Interface name.
- Blade - name, location within chassis, hardware make/model, and serial #'s

Adding a Blade System job:

1. Server(s)
2. Port - default is 161
3. SNMP version - v1, v2c, and v3 supported
4. Name to use for newly discovered module, options are: "Serial #" or "Try name from SNMP, otherwise use Serial #" Use serial # to avoid duplicate names for newly discovered items.
5. Options for module not found: Do Nothing, Remove Host Association, Change Service Level, Delete Module
6. Debug level: Normal, Extended, or No debug.
7. Strip domain name - select/deselect

![](/assets/images/AD_Blade-Discovery.png)

Other options (not shown, optional):

1. Toggle in service on module power state - select/deselect
2. Give Precedence to hostname - overwrites existing if found
3. Service Level - Production, QA, Dev, Test, etc.
4. Customer - Specify Customer

Save the job.

## Run Now or Schedule

![](/assets/images/AD_Blade-Discovery-Run-Now.png)

Select **Run Now** from the _Select SNMP Job to view_ list to run the job right away.

![](/assets/images/AD_Blade-Discovery-Run-Schedule.png)

Select **Add another Autodiscovery Schedule** from the _Add_ or _Edit SNMP Job_ page to create a run schedule for the job.

A note on autodiscovery behavior: newly created jobs will not run on the first day they are created, to prevent an unintended large amount of jobs from running initially. If you would like to run a job after its initial creation, simply select the "Run Now" button next to the job after creation.
