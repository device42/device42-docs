---
title: "Cloud Application Dependency Mapping"
sidebar_position: 2
---

In v18.06.00, you can now map connections between your on-prem and AWS databases. Cloud Application Dependency Mapping can help customers with hybrid environments to better understand their infrastructure, improve troubleshooting, ease migration frustrations, and optimize resource utilization, ultimately leading to better performance and cost savings. 

Currently, we support the following AWS Databases: RDS, DynamoDB and Redshift

### How to Configure

After you've discovered your on-prem and cloud databases, navigate to the Databases or Cloud Databases on the Resources tab.

Select the database you would like to use as your starting point. Once you've opened the database, you will see the information we have discovered for that database (image 1). Toggle to the Resource Map tab and you will see the relational information we have found (image 2).

![](/assets/images/Screenshot-2023-03-20-at-11.49.17-AM-700x489.png)

![](/assets/images/Screenshot-2023-03-20-at-11.48.31-AM-700x495.png)

In the Resource Map view, you can navigate between the related databases as needed.

### Limitations

- Currently DB to DB connections
- Only AWS is currently supported
- When connecting via a VPN, the results will be limited.
