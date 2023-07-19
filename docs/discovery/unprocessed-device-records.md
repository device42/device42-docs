---
title: "Unprocessed Device Records"
sidebar_position: 33
---

With the scope of Device42 discovery, duplicate items can occur. To help avoid and consolidate duplicate records, we apply a proprietary matching algorithm to the unprocessed device tables. When you do a new full discovery, the algorithm will use various attributes of the devices to determine potential matches with what you've previously discovered.

In global settings you can set the device matching level. The more aggressive, the more devices will attempt to match existing items in the system.

![](/assets/images/placeholder.png)

Device Attributes currently used ordered by most significant to least (levels 1-4)

1. Name, serial number, UUID, device aliases, cloud instance ids

3. Discovery target IP or FQDN

5. IP addresses and MAC addresses

7. ID of the discovery job (jobtype-id, ex: vserver-1)

There must be at least one match to consider this device for scoring/matching. (i.e. a match score is only calculated if there is overlap). In all cases, if no matches are found this is considered a new device.

Overall the advanced matching model helps mitigate the possibility of false positives and increases the intelligence of automatic matching, but can result in unmatched devices when score results are too low.  Should one or more auto-discovered devices not be matched with a high degree of certainty, they are flagged ‘unmatched devices’ and can be found on the “Unprocessed Device Record” page.  Matching aggressiveness is furthermore tunable to ensure best performance in a given environment, no matter the present state of organization or the naming / deployment conventions in use.
