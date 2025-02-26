---
title: "Application Dependency Mapping"
---

:::info
Get started – visit the [Calculation Rules](/apps/application-groups/calculation-rules/) page and set up a Calculation Rule.
:::

## What is Application Dependency Mapping?

The goal of Application Dependency Mapping (ADM) is to build insightful models of your IT services and applications in the context of your business services.

After configuring and running autodiscovery jobs, the Device42dependency mapping module picks up on communication patterns whose shape is guided by you through via Application Groups. 

[Application Groups](/apps/application-groups) are generated using a [set of rules](/apps/application-groups/calculation-rules) that define the starting point for your applications and [Logic Templates](apps/application-groups#calculation-logic-templates) define how discovery traverses the network and when to stop, per application.

Add Application groups to your [Business Services](/apps/business-services) to visualize and organize the results in a way that makes sense for your business. 

On upgrade to v19.05, you'll find ADM easier and faster to configure and consisting of a more natural flow. The logic used to calculate application groups has been significantly enhanced to show the most relevant relationships and your existing applications will now better model shared infrastructure. 

![Components of Application Dependency Mapping](/assets/images/application-dependency-mapping/ADM-v19.05-2.png)

## ADM Features

- **Discover services–to–services mappings**: Device42 can show you which service on a machine or instance is connected to what other service(s) on other machines.
- **Automatic Application Component grouping**: Automatically add Application Components based on groupings of services on a server. For example, once we discover different Oracle services running on a machine, those will be automatically grouped together as an Oracle application.
- **Grab the configuration data for major applications**: you are able to see config details (and for some software, the actual configuration file contents) for the applications from within Device42. This includes Oracle, Microsoft SQL, MongoDB, PostgreSQL, MySQL, Cold Fusion, IIS and Apache HTTPD, and more.
- **Automatic Periodic Sampling Jobs** for both ports and database connections gives a comprehensive view of applications using these resources over time.  This will enhance the discovery beyond a point-in-time usage.
