---
title: "Application Dependency Mapping"
---

:::info
Get started – visit the [Calculation Rules](/apps/application-groups/calculation-rules/) page and set up a Calculation Rule.
:::

## What is Application Dependency Mapping?

The goal of Application Dependency Mapping (ADM) is to build insightful models of your IT services and applications in the context of your business services.

After configuring and running autodiscovery jobs, the Device42 dependency mapping module picks up on communication patterns, which you shape via Application Groups. 

[Application Groups](/apps/application-groups) are generated using [sets of rules](/apps/application-groups/calculation-rules) that define the starting points for your applications, and [Logic Templates](apps/application-groups#calculation-logic-templates) define how discovery traverses the network and when it stops for each application.

Add Application Groups to your [Business Services](/apps/business-services) to visualize and organize the results in a way that makes sense for your business. 

On upgrade to v19.05, you'll find that ADM is easier and faster to configure and consists of a more natural flow. The logic used to calculate Application Groups has been significantly enhanced to show the most relevant relationships, and your existing applications will now better model shared infrastructure. 

![Components of Application Dependency Mapping](/assets/images/application-dependency-mapping/ADM-v19.05-2.png)

## ADM Features

- **Discover services–to-services mapping**: Device42 can show you which service on a machine or instance is connected to which other service(s) on other machines.
- **Automate Application Component grouping**: You can automatically add Application Components based on groupings of services on a server. For example, once Device42 discovers different Oracle services running on a machine, it will automatically group those services together as an Oracle application.
- **Grab the configuration data for major applications**: You are able to see config details (and for some software, the actual configuration file contents) of certain applications from within Device42. These applications include Oracle, Microsoft SQL, MongoDB, PostgreSQL, MySQL, Cold Fusion, IIS, Apache HTTPD, and more.
- **Automate Periodic Sampling Jobs**: You can automate Periodic Jobs for both port and database connections to gain a comprehensive view of applications as you use these resources over time. This will enhance the discovery beyond a point-in-time usage.
