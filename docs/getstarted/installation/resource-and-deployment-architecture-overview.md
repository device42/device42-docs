---
title: "Resource and Deployment Architecture Overview"
sidebar_position: 1
---
Learn about the Device42 core resources and how they fit into our deployment architecture.

## Device42 Resources

**Main Appliance:** The Device42 Main Appliance is the kick off point for all the discovery
and insights that will proliferate through your environment. It is a pre-configured virtual
appliance (built on Linux) that is hosted by the end customer, enabling full protection under the
client’s data center security architecture and policies.

Device42 operates with only 5 ports open to the virtual appliance:
- Port 80: redirects to 443
- Port 443: web (HTTPS)
- Port 4242: redirects to 4343
- Port 4343: appliance manager (HTTPS)
- Port 404: SSH for limited console menu operations

**Remote Collector:** The Remote Collector (RC), is a much lighter pre-configured virtual
appliance (built on Linux), used to perform agentless discovery across network segments. It
also provides scalability by offloading discovery workloads from the MA. We require that you
install at least 1 RC with any deployment of Device42.

**Windows Discovery Service:** The Windows Discovery Service (WDS) is a .net service which
runs on a Windows system and makes WMI queries on behalf of the Linux-based RC and MA. If
you’ll be running Windows discoveries, you will need to deploy at least 1 WDS instance and
connect it to an RC.

## Deployment Architecture 

Device42 deployment architecture is similar to a hub and spoke model, with each RC/WDS
collecting data and syncing back to the centralized MA. It is typically recommended for RCs
and WDS instances to be deployed in pairs, if Windows discovery is required.

Device42 Deployment Example: Segmented Network

![](/assets/images/deployment-architecture.png)

