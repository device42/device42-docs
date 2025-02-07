---
title: "Configure Application Dependency Mapping"
sidebar_position: 3
---

## Turning on Application Discovery

To turn on Enterprise Application Mapping, simply check the "Discover Applications" checkbox while configuring your discovery job. If you are new to discovery, see [Getting Started with Auto-Discovery](/getstarted/getting-started-with-auto-discovery.mdx) to get acquainted. If you would like to discover config files, they can also be imported into Device42; select the "Store Application Components Config Files" checkbox.

:::info
After enabling ADM sampling on the autodiscovery job, set up Application Groups by defining a Starting Point or using the predefined rules. See the [Application Groups Calculation Rules](/apps/application-groups/calculation-rules) page for more details.
:::

When autodiscovery is run, Application Components will be created based on related services on a server. For instance, a server with Oracle Database running will have a component created that associates all Oracle Database services together on that machine. The Autodiscovery Application will also find the service-to-service connections so you could, for example, see that your Apache service on _Prod-Server1_ is directly dependent on the MySQL service running on _Prod-Database3_.

![](/assets/images/D42-22008_ADM-sampling-interval.png)

![](/assets/images/D42-22008_ADM-discover-apps-store-config-files.png)

## Importing Config Files

If the option to store config files is selected in your Autodiscovery options \[pictured above\], configuration file data will be imported to the Application Components details as well.

## Viewing Application Dependencies

To see autodiscovered application dependencies, go to Apps>Application Components, and you will see any Application Components that were autodiscovered.

![Application Component View](/assets/images/select_application_component_view.png)

A full list of currently supported applications is available at [Application Dependency Mapping Supported Applications](apps/enterprise-application-dependency-mapping/adm-supported-applications.md).

When you view the details page for an application component, you will see the device it was discovered on as well as any other application components that it depends on. You'll also see any services that have been associated with the application component. From here, you can also edit the application to assign responsible and/or affected departments, describe what's impacted by downtime, and edit any custom fields.

## Application Impact Charts

With Enterprise Application Mapping, your impact charts allow for an enhanced view of the relationships between devices, services and applications. Viewing a device impact chart will now show you the application components that are on it as well as the services, listening ports, and service connections between devices.

![MSSQL Application impact chart](/assets/images/mssql_app_impact_chart.png)

From this view you can also see discovered configuration information for web-servers, database servers, etc. To view this information, while hovering over one of the services click "Details".

![view details from impact chart](/assets/images/impact_chart-view_details.png)
