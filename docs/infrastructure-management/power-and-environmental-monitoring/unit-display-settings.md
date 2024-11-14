---
title: "Unit Display Settings"
sidebar_position: 6
---

You can customize how units are displayed in Device42's Power and Environmental Monitoring module. This applies to both _Power_ units and _Temperature_ units, and these settings are controlled separately. See the below screenshot:

![Change Power Module Unit Displays](/assets/images/power_module-change_displayed_units.png)

The two categories that control unit display, as can be seen above, are the "Power Conversion Options" dropdown and the "Display Metric Power Values" Checkbox.

### Accessing the Unit Display Options

To access the options pictured in the screenshot above, simply navigate to Device42's **"Global Settings"** menu which can be found under _Tools_ --> _Settings_ --> _Global Settings_

* * *

### Power Unit Conversion Options

Changing the selection in the power conversion options dropdown controls how power consumption values will be displayed by Device42.

**Available conversion options are as follows:**

1. **Convert Amps to Watts** - selecting this option will cause Device42 to convert and _display all returned power values in Watts_
2. **Convert Watts to Amps** - selecting this option will cause Device42 to convert and _display all returned power values to Amps_
3. **Do not convert** \[Default\] - The default option displays power values exactly as they were returned via SNMP, without any conversion.

### Default Voltage (integer required)

This setting allows an administrator to specify the default voltage for Device42 to utilize in calculations ONLY in the case that one is not returned via SNMP.

* * *

### Display Metric Power Values Checkbox

_Toggle temperature displays in Device42's Power and Envirosnmental Monitoring Module_

The **"Display Metric Power Values"** Checkbox controls **Temperature Display**. 

- **Checked** - converts all temperature values from Farenheight (\*F) values to Celsius (\*C), also changing the display units to Celsius.
    
- **Unchecked** \[The Default\] - displays SI / Imperial units (Degrees Farenheight), and no unit conversion is performed.
