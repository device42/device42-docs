---
title: "Discovery Scores"
sidebar_position: 8
---

## Discovery Scores

The Discovery Scores page provides users with an the ability to view the success of their discovery jobs on a granular level. Via the quality scores page, users can see each device that was discovered, the target IP it was discovered from _(which is also a link to that job's page)_, the job name, time stamps, and status of port check and auth.

The discovery scores have been refactored to reflect what Device42 does during discovery more accurately. When Device42 communicates with an API rather than an individual endpoint (e.g., a virtual machine), Device42 now creates an _API Manager_ discovery score record to report successes or failures against the API endpoint directly. Devices returned by the API will then generate individual discovery score records.

To view the Discovery Scores page, select  _Analytics > Discovery Status > Discovery Scores_ from the main menu_._

![](/assets/images/Discovery-scores-pie-charts-2.png)

The Discovery Scores page now includes Score Summary pie charts at the top of the page – _Success_, _Scores_, and _Queue_ – for a quick visual summary of your discovery score status. You can hover over the charts, click on a _Discovery Success_ chart section or the chart legend, and quickly filter the scores list for additional context.

The Discovery Score page also now includes a column for _Other_ to rate the success of discovery functions that don’t fall into the four existing categories (basic, software, services, applications). This may account for API calls, for example. This number typically represents how many actions we took and how many of them were successful or returned data. This number has no correlation to how many devices or records were created, but rather a generic measure of all the steps Device42 took to gather information. The page also contains two additional columns – _Queue_ and _Cumulative_ _Score_ – that reflect ingestion status and and the cumulative success score for the actions attempted by the job.

By default, discovered devices are sorted newest to oldest, most recently discovered listed first. Each device is shown on its own line, which offers information about how it was discovered including the target discovery IP _(which also links back to each job’s View Discovery Score detail page)_ of the job that discovered it, the job name _(links to the job’s the View Discovery Job page)_, the job’s timestamps, and a red/green ‘at-a-glance’ view the discovery status. Green indicates discovery success, while red indicates there might have been an issue with that particular stat.

Clicking on any of the items in the _Discovery Targets_ column will bring you to a “View Discovery Score” details page for that particular item:

![](/assets/images/WEB-372_Discovery-Score-Detail.png)

![](/assets/images/Discovery-scores-page-1.png)

_Partial Failure_: If any of the discovery aspects fail, this will result in a "partial failure" on the main Discovery Score page.  A partial failure indicates that a portion of the discovery was successful, but not all components were. This is where the detailed view (above) is helpful, as it allows you to narrow in on what could not succeed. In future iterations, we will provide more detail on how to remediate these failures.

### Discovery Score Column Details

Each discovered device in the list on the "Discovery Score" view page includes helpful statistics that offer insight into what was discovered from each device.

Device pages now display the latest five Discovery Scores, with the ability to scroll down to see more.

The following is a short explanation of the fields present on the "Discovery Score" page:

![](/assets/images/Discovery-scores-pie-charts-2-1.png)

**Discovery Quality Scores Page Column List**: 

- **Discovery Target**: The IP or FQDN that was targeted by the discovery job that found this device. 
- **Job Name**: The name of the discovery job that discovered the device 
- **Job Start Time**: Time the discovery job started 
- **Sub Type**: The chosen sub-type for the job 
- **Port Check**: Port check references the first step of each discovery job where an attempt is made to connect to the target discovery port, e.g. a connection is attempted port 22 for a Linux SSH-based discovery - Green Check (success) / Red-X (failure). 
- **Auth**: Reports the status of authentication to a given endpoint using the credentials supplied in the discovery job's settings - Green Check (success) / Red-X (failure). 
- **Discovery Successful**: Success (green check mark) will be shown when both Port check and Auth succeed. If either of those two fail, success column shows Red-X. _Note that only if device is not added, will it be marked as failure - otherwise, based on scores, it will be marked as PARTIAL or OK._ 
- **Sudo Access**: Indicates whether sudo access is allowed for the discovery job. The icon will be a green check mark if sudo access is allowed, a red cross if it is not, and a dash if not applicable (for non-nix scores).
- **Ignored**: Indicates a successful connection to a device to which a [Device Ignore Rule](../../infrastructure-management/devices/device-ignore-rules.md) was applied, and that the device was ruled out and ignored. 
- **Ignore Rule**: This is the text entered in the _Ignored text contains**:_ field when the [Device Ignore Rule](../../infrastructure-management/devices/device-ignore-rules.md) was created. 
- **Success**: Indicates whether the device was successfully discovered (and ignored if applicable). 
- **Object**: The discovered device. 
- **Unprocessed Device**: Indicates if this is an unprocessed device requiring further attention. 
- **Inventory**: a count of basic inventory items discovered. 
- **Software**: a count of discovered software. 
- **Services**: a count of discovered services. 
- **Applications**: a count of discovered applications. 
- **Other**: A rating of the success of discovery functions that don’t fall into the four existing categories (basic, software, services, applications). 
- **Queue**: Queue processing success for the job. 
- **Cumulative Score**: The cumulative success score for the actions attempted by the job. Click into the job for a list of attempted actions.

The progress section of each supported discovery has been centralized and redone to show more consistent progress, and the objects-added count has been converted to a hyperlink to show the discovery scores for newly added objects more quickly.

Click an item in the _Job Name_ column of the Select Discovery Score page to see the View Discovery Job page for that job.

![](/assets/images/16.15.00_Discovery-Scores-2.png)

## Discovery Score Permissions

If you use [Role-Based Access Control](/administration/role-based-access-control/role-based-permissions-and-access.mdx) (RBAC), one of its settings affects which Discovery Scores non-superusers can view. If you select _Allow non-superusers to see other orphaned objects_, non-superusers can see all Discovery Scores. If this setting is disabled, non-superusers can only see scores that contain objects for which they have permission.

![](/assets/images/D42-28195_RBACdisc-scores.png)
