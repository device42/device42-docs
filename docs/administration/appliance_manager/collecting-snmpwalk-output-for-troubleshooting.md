---
title: "Collecting SNMPWALK output for troubleshooting"
sidebar_position: 4
---

You can collect SNMP walk's output for a network device or a PDU right from the GUI, and can send the output to us for further troubleshooting.

### Collect SNMPWALK output

![Collect SNMPwalk Appliance Manager](/assets/images/generate_SNMPwalk.png)

**Go to:** Application > Generate SNMPWALK output

Add your target switch \[or other SNMP target device\] info, click generate, and please be patient as it might take few minutes. Please send us the file that is generated.

If there is an issue, the network is not reachable, or if you simply prefer using the terminal, you can alternatively run the following from any machine which has 'snmpwalk' installed:

```
snmpbulkwalk -Cc -ObentU -v2c -c COMMUNITY DEVICE > output_file_name
snmpbulkwalk -ObentU -v 2c -c COMMUNITY DEVICE .1.3.6.1.4.1 >> output_file_name
```

Also, the current setup has a bug for v3, so please use following for any system using SNMP v3:

```
snmpbulkwalk -Cc -ObentU -v 3 -u user_name -l authNoPriv -a MD5 -A auth_pass DEVICE > output_file_name
snmpbulkwalk -Cc -ObentU -v 3 -u user_name -l authNoPriv -a MD5 -A auth_pass DEVICE .1.3.6.1.4.1 >> output_file_name
```
