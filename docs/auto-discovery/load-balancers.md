---
title: "Load Balancers"
sidebar_position: 18
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

## Introduction

Device42 SNMP autodiscovery provides a new option for F5 load balancer discovery that returns discovered load balancers as both devices and Managed Resources. Discovering F5 load balancers as managed resources provides additional details about the load balancers and related resources that include resource maps that visually show the relationships between load balancers and their related resources. It also simplifies the chart view for Affinity Groups by visually presenting the servers underneath a load balancer.

## Managed Resources Views

Discovered F5 load balancers are included in the Managed Resources list. Navigate to **Resources > All Resources** from the Device42 menu to display the list. See the [Managed Resources](resources/index.mdx) page for more information.

Click the **Vendor Resource Type** filter dropdown and check "F5" to display load balancer resources.

<ThemedImage
  alt="Resources list page"
  sources={{
    light: useBaseUrl('/assets/images/load-balancers/resources-f5-light.png'),
    dark: useBaseUrl('/assets/images/load-balancers/resources-f5-dark.png'),
  }}
/>

Click on a load balancer under the **Resource Name** column to see details about that load balancer. You can use the links in the panel on the right to see details about related resources.

<ThemedImage
  alt="View load balancer details"
  sources={{
    light: useBaseUrl('/assets/images/load-balancers/load-balancer-details-light.png'),
    dark: useBaseUrl('/assets/images/load-balancers/load-balancer-details-dark.png'),
  }}
/>
 
Click **Resource Map** at the top left of the page to see the topography map for the resource. Under **Tools & Breakdown** on the left panel, you can view, add, highlight, and search items by resource type to include in the map.

The image below shows an example resource map for clustered load balancers.

<ThemedImage
  alt="View resource map"
  sources={{
    light: useBaseUrl('/assets/images/load-balancers/f5-resource-map-light.png'),
    dark: useBaseUrl('/assets/images/load-balancers/f5-resource-map-dark.png'),
  }}
/>


The chart views for Affinity Groups are now much simpler and easier to understand. Navigate to **Applications > Affinity Groups** from the main menu to display the affinity group list.

![](/assets/images/Load-Balancers_AG-list.png)

Click the **Chart** link to view the chart for an affinity group with a load balancer.

![](/assets/images/Load-Balancers_AG-chart.png)
