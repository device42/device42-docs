---
title: "Kubernetes Autodiscovery"
sidebar_position: 6
---

## Kubernetes Discovery Items

<table><tbody><tr><td><strong>Cloud Service/Object Name</strong></td><td><strong>Where to locate in D42</strong></td><td><strong>Information</strong>&nbsp;<strong>Generated</strong></td></tr><tr><td>Nodes</td><td>Resources --&gt; Containers --&gt; Kubernetes</td><td>Type, version, OS</td></tr><tr><td>Containers</td><td>Resources --&gt; Containers --&gt; Kubernetes</td><td>Region, status, capacity, creation information, etc.</td></tr><tr><td>Whole Cluster Structure</td><td>Resources --&gt; Containers --&gt; Kubernetes</td><td>All general info, namespaces, endpoint details, custom fields</td></tr></tbody></table>

### Kubernetes Discovery for AWS, Google Cloud, and MS Azure

Kubernetes Discovery is available as an option for [Amazon AWS](auto-discovery/cloud-auto-discovery/aws-autodiscovery.md), [Google Cloud](auto-discovery/cloud-auto-discovery/google-cloud-platform-autodiscovery.md), and [Microsoft Azure](auto-discovery/cloud-auto-discovery/azure-autodiscovery.md) cloud autodiscovery jobs. Scroll down the Add Cloud Discovery page to select the _Kubernetes Discovery_ option.

![](/assets/images/discovery_cloud_platforms_autodiscovery_kubernetes-autodiscovery1.png)

You can also select an _Action for Resources not found:_ option to choose how to handle Kubernetes Cluster children resources not found in subsequent discovery.

![](/assets/images/discovery_cloud_platforms_autodiscovery_kubernetes-autodiscovery2.png)

Your cloud discovery job will now also include discovery of Kubernetes resources on the target cloud platform.

### Standalone Kubernetes Discovery

To add a Standalone Kubernetes discovery job, you'll need either a Bearer Token or Basic Credentials. You'll also need to enter a URL and select an Action for Resources not found.

Optionally, you can also choose a Vendor and a VRF Group. Please note that all Vendors and VRF Groups are user-defined.

![](/assets/images/discovery_cloud_platforms_autodiscovery_kubernetes-autodiscovery3.png)

### View Discovered Kubernetes Resources

Discovered Kubernetes resources appear in the Resources list page. Select _Resources > All Resources_ from the main menu to display the list page. Use the _Vendor Resource Type_ drop-down to choose the Kubernetes resources you want to see.

![](/assets/images/discovery_cloud_platforms_autodiscovery_kubernetes-autodiscovery4.png)

Click on a _Resource Name_ to view that resource.

![](/assets/images/discovery_cloud_platforms_autodiscovery_kubernetes-autodiscovery5.png)

Click on the available links to see details about those resources.

![](/assets/images/discovery_cloud_platforms_autodiscovery_kubernetes-autodiscovery6.png)

Click the Edit button at the top right to edit resource information. Editing is generally limited to adding or editing Notes or Tags or changing the In Service status or Level.

![](/assets/images/discovery_cloud_platforms_autodiscovery_kubernetes-autodiscovery7.png)
