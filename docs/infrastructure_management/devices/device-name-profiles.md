---
title: "Device Name Profiles"
sidebar_position: 15
---

You can create a profile for device names to speed up device creation and help you maintain a consistent naming convention.

To create a Device Name Profile, go to Tools>>Templates and Bulk Operations>>Device Name Profiles.

![](/assets/images/media_1432070663273.png)

In this example, we will create a device profile that will generate device names NH-DC-0001 to NH-DC-9999.

To create a device name profile, enter... (1) A required **name** for the profile (2) An optional **Prefix**. This will cause every name generated to have the prefix at the start (e.g. NH-DC-). (3) An optional **Suffix**. This will cause every name generated to have the suffix at the end (no suffix in the example above). (4) A **number length**. In the example above, 4 digits are requested which in combination with the **start number** parameter results in the range 0001 to 9999. (5) A **start number**. Usually this will be 1 but it can be any number.

![](/assets/images/media_1432071286655.png)

You can then create devices directly from the Device Name Profiles list view by clicking the Create button next to the profile...

![](/assets/images/media_1432071553195.png)

In the example above, we are creating 8 devices. The first created device will be name NH-DC-xxxx where xxxx is the next number for the profile. In other words, if no devices have been created, the first device name will be NH-DC-0001. If the last device name created was NH-DC-0051, then the first of the 8 new devices will be NH-DC-0059.
