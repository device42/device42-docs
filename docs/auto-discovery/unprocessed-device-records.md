---
title: "Unprocessed Device Records"
sidebar_position: 33
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

With the scope of Device42 discovery, duplicate items can occur. To help avoid and consolidate duplicate records, we apply a proprietary matching algorithm to the unprocessed device tables. 

When a new full discovery is performed, the algorithm will use various attributes of the devices to determine potential matches with previously discovered devices.

### Device Matching Levels

Under **Tools > Global Settings** you can set the device matching level. 

Device42 supports three different matching models.  **Classic**, **Moderate**, and **Conservative**. 

<ThemedImage
  alt="Unprocessed device records"
  sources={{
    light: useBaseUrl('/assets/images/unprocessed-device-records/device-matching-light.png'),
    dark: useBaseUrl('/assets/images/unprocessed-device-records/device-matching-dark.png'),
  }}
/>

With **Classic** matching, Device42 will check against serial number, UUID, and name, in that order, to verify if a discovered device is an existing device to update or a new device to create.

**Moderate** and **Conservative** device matching uses various device attributes weighted by significance to come up with a score to determine potential matches with devices already in Device42.  

These attributes include the device name, serial number, UUID, IP, and MAC addresses. See [Device Attributes Used in Matching](#device-attributes-used-in-matching) below.

A device is identified as a match when the calculated match score is equal to or greater than the selected matching level:

- **Moderate** = 20 points
- **Conservative** = 30 points

You can change the matching aggressiveness to ensure the best performance in a given environment, no matter the present state of the organization or the naming or deployment conventions in use.

### Device Attributes Used in Matching

The following device properties are used for matching and ordered from the most to least significant (levels 1 - 4):

1. Name, serial number, UUID, device aliases, cloud instance IDs

2. Discovery target IP address or FQDN

3. IP and MAC addresses

4. ID of the discovery job (for example, `jobtype-id: vserver-1`)

### Unmatched Devices

A device must have at least one match for a match score to be calculated. If no matches are found, the device will be treated as a new device.

The advanced matching model helps mitigate the possibility of false positives and increases the intelligence of automatic matching, but can result in unmatched devices when score results are too low.  

When devices cannot be matched with a high degree of certainty, they are flagged as "unmatched devices". Find the unmatched devices under **Discovery > Unprocessed Device Records**.
