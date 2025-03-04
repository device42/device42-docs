---
title: "Workload and Application Communication - IP Service Communications"
sidebar_position: 7
---

IP Service Communications

```sql
/* IP Service Communications */

/* Use the following query to if you need to identify what networks your servers communicate with? (Private or Public) */

WITH 
    clean_ips AS (
        SELECT 
            sc.client_device_fk,
            CASE
                WHEN host(sc.client_ip) ~~ '::ffff:%.%'::text THEN ltrim(host(sc.client_ip), '::ffff:'::text)::inet
                ELSE sc.client_ip
            END AS client_ip
        FROM view_dbb_adm_workload_and_app_comm_v2 sc
        WHERE sc.client_device_fk IS NOT NULL
), 
private_public AS (
    SELECT DISTINCT
        clean_ips.client_device_fk,
        CASE WHEN 
            clean_ips.client_ip <<= '127.0.0.0/8'::inet OR
            clean_ips.client_ip <<= '::1'::inet OR
            clean_ips.client_ip <<= '10.0.0.0/8'::inet OR
            clean_ips.client_ip <<= '172.16.0.0/12'::inet OR
            clean_ips.client_ip <<= '192.168.0.0/16'::inet OR
            clean_ips.client_ip <<= 'fc00::/7'::inet OR
            clean_ips.client_ip <<= 'fe80::/10'::inet 
            THEN clean_ips.client_ip 
            ELSE NULL 
        END as private_ip,  
        CASE WHEN 
            clean_ips.client_ip <<= '127.0.0.0/8'::inet OR
            clean_ips.client_ip <<= '::1'::inet OR
            clean_ips.client_ip <<= '10.0.0.0/8'::inet OR
            clean_ips.client_ip <<= '172.16.0.0/12'::inet OR
            clean_ips.client_ip <<= '192.168.0.0/16'::inet OR
            clean_ips.client_ip <<= 'fc00::/7'::inet OR
            clean_ips.client_ip <<= 'fe80::/10'::inet 
            THEN NULL
            ELSE clean_ips.client_ip 
        END     AS public_ip
    FROM clean_ips
)
SELECT 
    pp.client_device_fk,
    STRING_AGG(DISTINCT host(pp.private_ip), ' | '::text) AS private_ips,
    STRING_AGG(DISTINCT host(pp.public_ip), ' | '::text) AS public_ips
FROM private_public pp
GROUP BY pp.client_device_fk
```

**NOTES**

Use this query to if you need to identify what networks your servers communicate with. (Private or Public)
