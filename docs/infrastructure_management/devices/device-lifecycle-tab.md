---
title: "Device - Lifecycle Tab"
sidebar_position: 7
---

### Asset LM Tab

![Asset LM Tab](/assets/images/wpid6739-device-assetlm-tab.png)

The Lifecycle tab enables recording and tracking of Asset Lifecycle activities, assignment of Asset tag (QR based) profiles, and access to associated purchase information.

### Asset Lifecycle

![Asset Lifecycle](/assets/images/wpid6736-device-asset-lifecycle.png)

Asset Lifecycle: add actions by date/time. Action type is user-defined -- click the green plus sign to add a custom type. Assign the end-user associated with the action.

Some of the predefined action types have logic built-in. A user cannot Check Out a device or asset that is already checked out. Similarly, they can only Check In a device or asset that has been checked out.

Users can add their own logic by defining Action Types. Go to Tools>>Templates and Bulk Actions>>Lifecycle Event Actions...

![](/assets/images/wpid6738-media_1414482141995.png)

You can now choose certain actions for your lifecycle events. For example, if you “retire” a server, you can choose to do certain actions like clear all IPs and clear all connectivity.

Options are: Clear all IPs: Clear any IP addresses associated with the device. Clear all Connectivity: Clear any switchport, direct device, and/or patch panel connections. Append seconds since epoch to hostname: Add a unique number to the hostname so that you re-use the original hostname but still have a record of the old one. Append seconds since epoch to serial number. Same but do it for the serial number. Append seconds since epoch to uuid. Same but do it for the uuid. Change the device service level (e.g. to out of service). Change the asset service level Remove the device/asset from the rack Add the device/asset to a storage room

### Asset QR Code

![Asset QR Code](/assets/images/wpid6735-asset-qr-code.png)

1. Assign existing asset QR code profile to the device, or create a new profile by clicking green plus sign
2. Print asset tag for the device by clicking QR Code

See also - working with [QR asset tags](https://docs.device42.com/qr-codes-asset-tags-inventory-management-mobile-devices/understanding-qr-codes/) in Device42

### Purchase/Support Info

![Purchase/Support Info](/assets/images/wpid6737-device-asset-tab-purchase.png)

Any purchase information related to this device can be found on the Lifecycle tab. Purchase information can also be entered here...

![](/assets/images/media_1432074104215.png)

See also - [managing purchases](https://docs.device42.com/accounting/purchases/) in Device42.
