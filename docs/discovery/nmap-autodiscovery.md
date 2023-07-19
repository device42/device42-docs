---
title: "Nmap Autodiscovery"
sidebar_position: 20
---

## Nmap Autodiscovery

Nmap (network mapper) is a tool primarily used for security scanning. However, it can be used to “guess” which services are running on which ports. Device42 uses Nmap to discover which services are running on which ports and automatically marries this data to [NetFlow](https://docs.device42.com/auto-discovery/netflow-collector/) data to automatically create a map of services and application dependencies.

## Add an Nmap Autodiscovery Job

Select _Discovery > Nmap_ to display the Nmap autodiscovery page, then click _Add Nmap autodiscovery spec_ to display the Add Nmap autodiscovery page. 

![](/assets/images/D42-22946_nmap-ad-add-page.jpg)

The following fields are required for an Nmap job:

- **Name** – name of the job
- **Remote Collector** – the D42 ID for the remote collector to use for the job
- **Target Host(s) and Network(s)** – IP list (comma separated), IP range, CIDR block(s), or hostname(s) to use for Nmap discovery

Available Nmap job options:

- **Exclude Target Host(s) and Network(s)** – IP list (comma separated), IP range, CIDR block(s), or hostname(s) to exclude from the discovery
- **Nameserver to use for reverse DNS** – the IP/FQDN of the nameserver
- **OS Detection** – detect operating system(s) and versions (default on)
- **Services Detection** – detect running services (default on)
- **Object Category for discovered devices** – select an existing object category or add a new category
- **VRF Group for discovered IP addresses and subnets** – select an existing group or add a new group
- **Overwrite existing object categories** – overwrite the object categories for existing discovered devices and child devices.
- **Tags for discovered devices** – comma separated list of device tags

You can also create an Auto Discovery Schedule for the job – click _Add another Auto Discovery Schedule_ at the bottom of the page. Click _Save_ to save the job and add it to the jobs list. You can then run the job immediately if you want. 

![](/assets/images/D42-22946_nmap-ad-list-page.jpg)

## Nmap / NetFlow Autodiscovery Notes

In Device42, NetFlow and Nmap can be used by themselves, together, or in combination with point-in-time discovery. Using NetFlow and Nmap data together but without point-in-time discovery results in a good services dependency mapping capability. However, just using these two sources of data is still limited in the following ways.

1. A map of service inter-dependencies and interrelationships can be created. However, many services often combine to form an application. For example, there might be multiple Oracle services plus configuration files that together form the Oracle application. Applications and associated information (e.g., installed apps on a web server and instances and named pipes on a database) cannot be discovered by the NetFlow/Nmap combination.
2. The services that Nmap finds are guesses and the guessed version number is probably wrong as often as it is right.
3. Some enterprises have such restrictive firewall rules that Nmap will discover few if any services.
4. NetFlow can’t “see” application interactions inside a physical/virtual/cloud server. NetFlow can only see interactions that go through the router. So, many dependencies will be missed.
5. While NetFlow works well for physical routers and switches, it is not great for the virtual routers and switches found in hyper-visors because many hyper-visors do not support NetFlow.
6. On routers and switches, NetFlow must be setup for every segment. If some segments are not setup, the application interactions will not be found.

To overcome these limitations, it is better to use NetFlow/Nmap in conjunction with point-in-time discovery.

## Run Now or Schedule

![](/assets/images/image-700x115.png)

Select **Run Now** from the list page to run the job right away.

![](/assets/images/AD_Blade-Discovery-Run-Schedule.png)

Select **Add another Auto Discovery Schedule** from the when editing the job to create a run schedule for the job.

A note on autodiscovery scheduling behavior: newly created jobs will not run on the first day they are created, to prevent an unintended large amount of jobs from running initially. If you would like to run a job after its initial creation, simply select the "Run Now" button next to the job after creation.
