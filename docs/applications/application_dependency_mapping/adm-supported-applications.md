---
title: "ADM Detected Applications"
sidebar_position: 1
---

### Currently Supported Applications

Enterprise Application Dependency Mapping will discover **_all running services, whether or not they are on this list_**.

The following is a list of applications that Enterprise Application Dependency Mapping can additionally create application components for.

Additionally, for any application not on this list you can leverage the use of [Application Component Templates](applications/application_components/application-component-templates.md) to automate Application Component creation with custom logic that will supplement the discovery processes of Device42.

| Application | Services Discovered | Configuration Information Imported |
| --- | --- | --- |
| Apache | Yes | Web site titles, bindings, installed apps (ie, Drupal, Wordpress, SugarCRM) |
| Coldfusion | Yes | Web servers, data sources, jrun |
| DB2 | Yes | Version, install path, products, instances, port, protocols, config files \*.cfg |
| Hadoop | Yes | Version, home directory, policies, configurations, config files, nodes, properties, resource manager |
| IIS6 | Yes | Web site titles, bindings, installed apps (ie, Drupal, Wordpress, SugarCRM) |
| IIS7 | Yes | Web site titles, bindings, installed apps (ie, Drupal, Wordpress, SugarCRM) |
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
