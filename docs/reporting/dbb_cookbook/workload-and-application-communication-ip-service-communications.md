---
title: "Workload and Application Communication - IP Service Communications"
sidebar_position: 7
---

IP Service Communications

/\* IP Service Communications \*/
\*/

/\* Use the following query to if you need to identify what networks your servers communicate with? (Private or Public) \*/

WITH 
    clean\_ips AS (
        SELECT 
            sc.client\_device\_fk,
            CASE
                WHEN host(sc.client\_ip) ~~ '::ffff:%.%'::text THEN ltrim(host(sc.client\_ip), '::ffff:'::text)::inet
                ELSE sc.client\_ip
            END AS client\_ip
        FROM view\_dbb\_adm\_workload\_and\_app\_comm\_v2 sc
        WHERE sc.client\_device\_fk IS NOT NULL
), 
private\_public AS (
    SELECT DISTINCT
        clean\_ips.client\_device\_fk,
        CASE WHEN 
            clean\_ips.client\_ip <<= '127.0.0.0/8'::inet OR
            clean\_ips.client\_ip <<= '::1'::inet OR
            clean\_ips.client\_ip <<= '10.0.0.0/8'::inet OR
            clean\_ips.client\_ip <<= '172.16.0.0/12'::inet OR
            clean\_ips.client\_ip <<= '192.168.0.0/16'::inet OR
            clean\_ips.client\_ip <<= 'fc00::/7'::inet OR
            clean\_ips.client\_ip <<= 'fe80::/10'::inet 
            THEN clean\_ips.client\_ip 
            ELSE NULL 
        END as private\_ip,  
        CASE WHEN 
            clean\_ips.client\_ip <<= '127.0.0.0/8'::inet OR
            clean\_ips.client\_ip <<= '::1'::inet OR
            clean\_ips.client\_ip <<= '10.0.0.0/8'::inet OR
            clean\_ips.client\_ip <<= '172.16.0.0/12'::inet OR
            clean\_ips.client\_ip <<= '192.168.0.0/16'::inet OR
            clean\_ips.client\_ip <<= 'fc00::/7'::inet OR
            clean\_ips.client\_ip <<= 'fe80::/10'::inet 
            THEN NULL
            ELSE clean\_ips.client\_ip 
        END     AS public\_ip
    FROM clean\_ips
)
SELECT 
    pp.client\_device\_fk,
    STRING\_AGG(DISTINCT host(pp.private\_ip), ' | '::text) AS private\_ips,
    STRING\_AGG(DISTINCT host(pp.public\_ip), ' | '::text) AS public\_ips
FROM private\_public pp
GROUP BY pp.client\_device\_fk

* * *

**NOTES**

Use this query to if you need to identify what networks your servers communicate with. (Private or Public)
