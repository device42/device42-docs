---
title: "Applications"
sidebar_position: 1
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl'

After you have performed successful autodiscovery of your environment, all the discovered Application Dependency data can be viewed under the **Applications** section in the Device42 main menu.

<ThemedImage
  alt="Applications menu of the Main Appliance"
  sources={{
    light: useBaseUrl('/assets/images/applications/applications-menu-light.png'),
    dark: useBaseUrl('/assets/images/applications/applications-menu-dark.png'),
  }}
/>


These sections cover the following entries found in the applications menu of the Device42 Main Appliance. Explore these categories in the docs using the sidebar on the left.

- [Application Dependency Mapping](enterprise-application-dependency-mapping/) provides information about the autodiscovery of application and service dependencies throughout a network.
- The [Application Components](application-components/) refer to discovered components such as databases, web servers, and load balancers. See a complete list of Device42’s supported applications here: [ADM supported applications](apps/enterprise-application-dependency-mapping/adm-supported-applications).
- [Application Groups](/apps/application-groups/index.mdx) (previously known as *Affinity Groups*) are an opinionated view of the impactful applications and their dependencies in your environment.
:::tip
Get started with Application Groups by defining the Starting Point in a [Calculation Rule](application-groups/calculation-rules), running one the predefined rules, and accepting app group suggestions.
:::
- To design and customize your map of critical business functions, see the [Business Services](business-services/) section.

The [Services](services/index.mdx) section provides details on each of the **Services** options available in the Main Appliance under the **Resources** menu.

    <ThemedImage
    alt="Services menu of the Main Appliance"
    sources={{
        light: useBaseUrl('/assets/images/applications/services-menu-light.png'),
        dark: useBaseUrl('/assets/images/applications/services-menu-dark.png'),
    }}
    />
