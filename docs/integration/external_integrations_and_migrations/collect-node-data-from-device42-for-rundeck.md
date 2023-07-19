---
title: "Rundeck Node Data Integration"
sidebar_position: 25
---

## Rundeck Integration: Rundeck Node Data

Device42 offers a Rundeck integration plugin that can dynamically pull node data from Device42's CMDB.

## Installation

To install the Rundeck plugin, Device42 offers a precompiled jar file available at [Device42's Rundeck Integration Page](https://www.device42.com/integrations/rundeck/). Alternatively, you can clone the repository from [Device42's Github page](https://github.com/device42) and build the plugin using Gradle. After downloading or compiling the plugin, it should be placed in Rundeck's plugin folder. On Ubuntu the default location for this is /etc/rundeck/libext.

- Note, Java 1.8+ is required.

## Configuration

To set up filters, add a new Rundeck resource to the project you are on through Configuration and select “Devices from D42”. Enter your Device42 url and credentials, and then you can enter filter values.

![Plugin configuration](/assets/images/rundeck-config-2.gif)

## Using Filters

We’ve included some common filters: tags, os, service\_level, and customer, but you can also enter any Device42 API endpoint as a filter including custom fields. For a full list please visit [Device42 API Page](https://api.device42.com/#devices).

![Predefined filters](/assets/images/rundeck-filters.gif) _Using predefined filters in Rundeck_

If you would like to query nodes from Device42 based on any other information available from Device42's API, including custom fields, you can use the Filter Params section to enter those fields.

![custom filter parameters](/assets/images/rundeck-filter-params.gif) _Configuring custom filter parameters based on Device42 API endpoints_

## Working with Device42 nodes in Rundeck

After adding the filters, you will now be able to see which nodes Rundeck is pulling into Device42 by selecting the “Nodes” option in Rundeck.

![Viewing Nodes](/assets/images/rundeck-nodes.gif)

By drilling down to one of the nodes we could also see the synchronized information about node data including building, room and rack information about a device, operating system information, device type, and other information when applicable such as a virtual machine’s host.

![Viewing Device42 details](/assets/images/rundeck-d42-details.gif)

Now when creating Rundeck jobs you no longer have to worry about tracking down your node data to make sure you run it on the proper systems. Device42 will keep your data up-to-date, eliminating one more hurdle form your devops workflow. Furthermore, if you do not set a cache value, scheduled jobs will refresh the list of nodes to run on at the time they run making sure you have the most up-to-date list of nodes. If you wish to use smart filters for the specific jobs feel free to use the default filtering mechanizm of the Rundesk - all collected Device42 attributes are stored as Node properties, tags or attributes.
