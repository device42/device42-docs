---
title: "ADM Detected Applications"
sidebar_position: 1
---

:::info
Set up Application Groups by defining a Starting Point or processing one of our predefined Calculation Rules. See the [Application Groups Calculation Rules](/apps/application-groups/calculation-rules) page for more details.
:::

### Currently Supported Applications

Enterprise Application Dependency Mapping discovers all running services, whether or not they are on this list.

You can also use Enterprise Dependency Mapping to create [Application Components](/apps/application-components) for the following list of applications.

Additionally, you can supplement the Device42 discovery processes by using [Application Component Templates](apps/application-components/application-component-templates.md) to automate Application Component creation (with custom logic) for any applications not on this list.

| Application | Services Discovered | Configuration Information Imported |
| --- | --- | --- |
| Apache | Yes | Web site titles, bindings, installed apps (ie, Drupal, Wordpress, SugarCRM) |
| Coldfusion | Yes | Web servers, data sources, jrun |
| DB2 | Yes | Version, install path, products, instances, port, protocols, config files \*.cfg |
| Hadoop | Yes | Version, home directory, policies, configurations, config files, nodes, properties, resource manager |
| IIS6 | Yes | Web site titles, bindings, installed apps (ie, Drupal, Wordpress, SugarCRM) |
| IIS7 | Yes | Web site titles, bindings, installed apps (ie, Drupal, Wordpress, SugarCRM) |
| JBoss | Yes | Version, parameters, config files |
| MariaDB | Yes | Config file path, protocols/listening ports, data paths, config files, version |
| Microsoft SQL Server | Yes | Instances, shared memory, TCP/IP, named pipes, data paths |
| MongoDB | Yes | Config file paths, protocols, data paths |
| MySQL | Yes | Config file path, protocols/listening ports, data paths |
| Oracle Database | Yes | Instances, protocols, data paths |
| PostgreSQL Database | Yes | Config file paths, protocols, data paths |
| SAP Hana | Yes | Version, HDB Info, config files, ini files |
| Sybase | Yes | Instances, data path, config path, config files, base path, data sserver |
| Tomcat | Yes | Config files, version, home path, JVM, architecture |
| WebSphere | Yes | Version, config files, DTD path, product, path, servers |
