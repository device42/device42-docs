---
title: "Business App Hardware EOL / EOS Impact"
sidebar_position: 4
---

Business App Hardware EOL / EOS Impact

/\*
\* Business App Hardware EOL/EOS Impacts
\* This query also utilizes the Compute DBB to gather information on all BusinessApp Impacting Devices that are going to hit hardware EOL/EOS. 
\* Use this if you need to analyze any of the changes needed when that EOL/EOS date approaches.
\* You can easily shift the window or focus on either EOL/EOS by editing the included WHERE filter clause. 
\* TIP: Additional information can easily be pulled in from the compute dbb as well. Please review the data dictionary with Device42 to see what information is available.
\*/
SELECT
    ba\_comp.device\_fk               AS eol\_device\_fk
    ,compute.device\_serial          AS eol\_device\_serial
    ,ba\_comp.impacted\_object        AS impacted\_device\_name
    ,ba\_comp.business\_app\_name      AS impacted\_businessapp
    ,ba\_comp.businessapplication\_fk
    ,ba\_comp.impact\_reason
    ,ba\_comp.relationship\_type
    ,ba\_comp.component\_type
    ,compute.manufacturer
    ,compute.hardware\_model
    ,compute.building\_name 
    ,compute.room\_name
    ,compute.rack\_name
    ,compute.hdw\_end\_of\_life
    ,compute.hdw\_end\_of\_support
FROM view\_dbb\_adm\_businessapp\_composition\_v2 ba\_comp
JOIN view\_dbb\_compute\_v2 compute
    ON compute.device\_fk = ba\_comp.device\_fk 
WHERE
    compute.hdw\_end\_of\_life < current\_date - 90
    OR compute.hdw\_end\_of\_support < current\_date - 90
ORDER BY
    compute.hdw\_end\_of\_life
    ,compute.hdw\_end\_of\_support
    ,ba\_comp.impacted\_object;

* * *

**NOTES**

This query also utilizes the Compute DBB to gather information on all Business App Impacting Devices that are going to hit hardware EOL/EOS. Use this if you need to analyze any of the changes needed when that EOL/EOS date approaches.
