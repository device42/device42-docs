---
title: "Configure Application Dependency Mapping"
sidebar_position: 3
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

## Turning On Application Discovery

Ensure that your Device42 license has Enterprise Application Discovery enabled (**Tools > Settings > Licensing**). If you need to upgrade your license, contact the support team for more information  at [support@device42.com](mailto:support@device42.com).

:::tip
If you are new to autodiscovery or would like to learn more about autodiscovery, see [Getting Started with Auto-Discovery](/getstarted/getting-started-with-auto-discovery.mdx) to get acquainted with the process.
:::

Application discovery is enabled by default for individual autodiscovery jobs that have the **Enterprise Application Mapping** option selected under the **Software and Applications** section and the sampling interval set to four hours. 

You can change the ADM sampling interval to be used with your autodiscovery job.


  <ThemedImage
    alt="*nix autodiscovery job with ADM sampling interval"
    sources={{
      light: useBaseUrl('/assets/images/configure-application-dependency-mapping/nix-job-sampling-interval-light.png'),
      dark: useBaseUrl('/assets/images/configure-application-dependency-mapping/nix-job-sampling-interval-dark.png'),
    }}
    style={{ width: '80%' }} 
  />

### Importing Config Files

You can opt to store config files by selecting the **Store Applications Components Config Files** option under the **Software and Applications** section of the autodiscovery job.

  <ThemedImage
    alt="Software and Application section of *nix autodiscovery job"
    sources={{
      light: useBaseUrl('/assets/images/configure-application-dependency-mapping/software-and-apps-light.png'),
      dark: useBaseUrl('/assets/images/configure-application-dependency-mapping/software-and-apps-dark.png'),
    }}
    style={{ width: '80%' }} 
  />

## Viewing Application Dependencies

When autodiscovery is run, [Application Components](/apps/application-components) will be created based on related services on a server. For example, for a server running Oracle Database, a component would be created to group together all Oracle Database services on that machine. The Autodiscovery Application would also find the service-to-service connections so that you could, for example, see that your Apache service on "Prod-Server1" was directly dependent on the MySQL service running on "Prod-Database3".

To see the autodiscovered application dependencies, go to **Applications > Application Components**.

  <ThemedImage
    alt="Application Component list page"
    sources={{
      light: useBaseUrl('/assets/images/configure-application-dependency-mapping/app-comp-list-page-light.png'),
      dark: useBaseUrl('/assets/images/configure-application-dependency-mapping/app-comp-list-page-dark.png'),
    }}
  />

A full list of currently supported applications is available at [Application Dependency Mapping Supported Applications](apps/enterprise-application-dependency-mapping/adm-supported-applications.md).

When you view the details page for an application component, you will see the device it was discovered on, as well as any other application components that it depends on. You'll also see any services that have been associated with the application component. From here, you can also edit the application to assign responsible and/or affected departments, describe what's impacted by downtime, and edit any custom fields.

## Application Impact Charts

With Enterprise Application Mapping, your impact charts allow for an enhanced view of the relationships between devices, services, and applications. Viewing a device impact chart will now show you the application components that are on it, as well as the services, listening ports, and service connections between devices.

<ThemedImage
    alt="Application Component Impact Chart example"
    sources={{
        light: useBaseUrl('/assets/images/configure-application-dependency-mapping/app-comp-impact-chart-light.png'),
        dark: useBaseUrl('/assets/images/configure-application-dependency-mapping/app-comp-impact-chart-dark.png'),
    }}
/>

From this view, you can also see discovered configuration information for web servers, database servers, etc. To view this information, hover over one of the services and click **Details**.


<ThemedImage
    alt="Application Component Impact Chart with Details button"
    sources={{
        light: useBaseUrl('/assets/images/configure-application-dependency-mapping/app-comp-impact-chart-details-light.png'),
        dark: useBaseUrl('/assets/images/configure-application-dependency-mapping/app-comp-impact-chart-details-dark.png'),
    }}
    style={{ width: '60%' }} 
/>

## Application Groups

With Application Dependency Mapping, you can create Application Groups to group related devices and services together.

You can create an Application Group using one of the discovered Application Components as a starting point which will serve as one of the focus items for that group. Automatically, Device42 will suggest Application Groups based on the discovered Application Components. Accept the groups that most accurately describe significant dependencies in your environment and ignore the others. 

:::tip
After configuring ADM sampling on the autodiscovery job, see the [Application Group Calculation Rules](/apps/application-groups/calculation-rules) page for a further explanation of how Starting Points are used to generate Application Groups. 
:::

## Turning Off Application Discovery

For individual autodiscovery jobs, select **Off** from the **ADM Interval** dropdown. Then scroll down to the **Software and Applications** section and unselect the **Enterprise Application Mapping** checkbox.
