---
title: "Load Balancers"
sidebar_position: 18
---

## Introduction

Device42 SNMP autodiscovery provides a new option for F5 load balancer discovery that returns discovered load balancers as both devices and Managed Resources. Discovering F5 load balancers as managed resources provides additional details about the load balancers and related resources that include resource maps that visually show the relationships between load balancers and their related resources. It also simplifies the chart view for Affinity Groups by visually presenting the servers underneath a load balancer.

## SNMP Discovery Load Balancer Options

Select _Discovery > SNMP_ from the Device42 menu, and then click _Add SNMP Autodiscovery Job_ from the job list page. Enter a name and other details for the SNMP discovery job. In the _Network device options_ section of the page, select _Device and Managed Resources_ (the default option) from the _Discover Load Balancer as:_ drop-down.

(The other available options are _Device Only_ and _Device with Services_. You can still use these options for SNMP load balancer discovery.)

![](/assets/images/Load-Balancer_SNMP-AD-device-options-2.png)

Save the SNMP job and schedule it to run or choose _Run Now_ from the SNMP discovery jobs list.

## Managed Resources Views

Discovered F5 load balancers are included in the Managed Resources list. Select _Resources > Managed Resources_ from the Device42 menu to display the list. See the [Managed Resources](https://docs.device42.com/auto-discovery/resources/) page for more information.

Click the _Vendor Resource Type_ filter drop-down and select _F5_ to display load balancer resources.

![](/assets/images/Load-Balancers_resources-listdrop-down.png)

 

Click on a load balancer _Resource Name_ to see details about that load balancer. You can use the links in the panel on the right to see details about related resources.

![](/assets/images/Load-Balancers_single-resource-props.png)

 

Click _Resource Map_ at the top left of the page to see the topography map for the resource. You can select which _Resource Types_ you want to include in the map.

![](/assets/images/Load-Balancers_cluster-map.png)

The image below shows another example resource map for clustered load balancers.

![](/assets/images/Load-Balancers_single-map.png)

You will notice that the Chart views for Affinity Groups are now much simpler and easier to understand. Select _Applications > Affinity Groups_ to display the affinity group list.

![](/assets/images/Load-Balancers_AG-list.png)

Click the _Chart_ link to view the chart for an affinity group with a load balancer.

![](/assets/images/Load-Balancers_AG-chart.png)
