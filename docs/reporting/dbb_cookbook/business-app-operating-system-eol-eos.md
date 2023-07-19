---
title: "Business App Operating System EOL / EOS"
sidebar_position: 5
---

Business App Operating System EOL / EOS Impact

/\*
\* BusinessApp OS EOL/EOS Impacts
\* This query also utilizes the Compute DBB to gather information on all BusinessApp Impacting Devices that are using an OS that is going to hit EOL/EOS within the next 90 days.
\* Use this if you need to analyze mny of the changes needed when that EOL/EOS date approaches.
\* You can easily shift the window or focus on either EOL/EOS by editing the included WHERE filter clause.
\*/
SELECT
ba\_comp.device\_fk               AS eol\_device\_fk
,compute.device\_serial          AS eol\_device\_serial
,ba\_comp.impacted\_object        AS impacted\_device\_name
,ba\_comp.business\_app\_name      AS impacted\_businessapp
,ba\_comp.businessapplication\_fk
,ba\_comp.impact\_reason
,ba\_comp.relationship\_type
,ba\_comp.component\_type
,compute.os\_name
,compute.os\_vendor
,compute.os\_architecture
,compute.os\_version
,compute.os\_version\_number
,compute.os\_end\_of\_life
,compute.os\_end\_of\_support
FROM view\_dbb\_adm\_businessapp\_composition\_v2 ba\_comp
JOIN view\_dbb\_compute\_v2 compute
ON compute.device\_fk = ba\_comp.device\_fk
WHERE
compute.os\_end\_of\_life < current\_date - 90
OR compute.os\_end\_of\_support < current\_date - 90
ORDER BY
compute.os\_end\_of\_life
,compute.os\_end\_of\_support
,ba\_comp.impacted\_object;

* * *

**NOTES**

This query also utilizes the Compute DBB to gather information on all BusinessApp Impacting Devices that are using an OS that is going to hit EOL/EOS within the next 90 days.
