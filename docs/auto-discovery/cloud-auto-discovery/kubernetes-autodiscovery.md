---
title: "Kubernetes Autodiscovery"
sidebar_position: 6
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

## Kubernetes Discovery Items

The following table outlines the components of a Kubernetes environment, the types of information discovered for each component, and where they can be found in Device42. 

| **Cloud Service/Object Name** | **Where to locate in Device42**                                 | **Information Generated**                                             |
| ----------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------- |
| Nodes                          | Resources > Containers > Kubernetes                   | Type, version, OS                                                     |
| Containers                     | Resources > Containers > Kubernetes                   | Region, status, capacity, creation information, etc.                  |
| Whole Cluster Structure        | Resources > Containers > Kubernetes                   | All general info, namespaces, endpoint details, custom fields         |


### Kubernetes Discovery for AWS, GCP, and Azure

Kubernetes Discovery is available as an option for [Amazon Web Services (AWS)](auto-discovery/cloud-auto-discovery/aws-autodiscovery.mdx), [Google Cloud Platform (GCP)](auto-discovery/cloud-auto-discovery/google-cloud-platform-autodiscovery.mdx), and [Microsoft Azure (Azure)](auto-discovery/cloud-auto-discovery/azure-autodiscovery.md) cloud autodiscovery jobs. 

Navigate to **Discovery > Cloud** and click **+ Add Cloud Autodiscovery** to create a new discovery job.

Scroll down the **Add Cloud Discovery** form and check the **Kubernetes Discovery** option.

<ThemedImage
  alt="Kubernetes discovery option"
  sources={{
    light: useBaseUrl('/assets/images/kubernetes-autodiscovery/kubernetes-discovery-option-light.png'),
    dark: useBaseUrl('/assets/images/kubernetes-autodiscovery/kubernetes-discovery-option-dark.png'),
  }}
/>

Select an option under **Action for Kubernetes Resources not found:** to choose what Device42 should do when Kubernetes cluster children resources aren't found during the discovery.

<ThemedImage
  alt="Kubernetes not found options"
  sources={{
    light: useBaseUrl('/assets/images/kubernetes-autodiscovery/not-found-actions-light.png'),
    dark: useBaseUrl('/assets/images/kubernetes-autodiscovery/not-found-actions-dark.png'),
  }}
  style={{ width: '70%' }} 
/>

Your cloud discovery job will now also include the discovery of Kubernetes resources on the target cloud platform.

### Standalone Kubernetes Discovery

Select **Standalone Kubernetes** for the cloud autodiscovery **Type**, and fill in the fields that become available:

- Enter a **URL** (1).
- For **Authentication type**, choose between **Bearer Token** and **Basic Credentials** (2). 
- Select an option under **Action for Kubernetes Resources not found:** (3).

Optionally, you can choose a **Vendor** and a **VRF Group**. Please note that all vendors and VRF groups are user-defined.

<ThemedImage
  alt="Standalone Kubernetes"
  sources={{
    light: useBaseUrl('/assets/images/kubernetes-autodiscovery/standalone-kubernetes-light.png'),
    dark: useBaseUrl('/assets/images/kubernetes-autodiscovery/standalone-kubernetes-dark.png'),
  }}
/>

You also have the option to set the **Service Level** for all discovered objects, such as "Development", "Deployment", or "Production". See [Service Level and Object Category Options in the Cloud Platform Autodiscovery documentation](index.mdx#service-level-and-object-category-options) for more information.

<ThemedImage
  alt="Select service level"
  sources={{
    light: useBaseUrl('/assets/images/kubernetes-autodiscovery/service-level-light.png'),
    dark: useBaseUrl('/assets/images/kubernetes-autodiscovery/service-level-dark.png'),
  }}
/>

### View Discovered Kubernetes Resources

Discovered Kubernetes resources appear on the **Resources** list page. Navigate to **Resources > All Resources** from the main menu to display the list page. Use the **Vendor Resource Type** dropdown to choose which Kubernetes resources to include in the table.

<ThemedImage
  alt="Resources list page"
  sources={{
    light: useBaseUrl('/assets/images/kubernetes-autodiscovery/resources-list-page-light.png'),
    dark: useBaseUrl('/assets/images/kubernetes-autodiscovery/resources-list-page-dark.png'),
  }}
/>

- Click a **Resource Name** to view its properties.
  
    <ThemedImage
    alt="View resource"
    sources={{
        light: useBaseUrl('/assets/images/kubernetes-autodiscovery/resource-properties-light.png'),
        dark: useBaseUrl('/assets/images/kubernetes-autodiscovery/resource-properties-dark.png'),
    }}
    />

- Click on the available links to see details about each resource.
  
    <ThemedImage
    alt="Resource links"
    sources={{
        light: useBaseUrl('/assets/images/kubernetes-autodiscovery/resource-links-light.png'),
        dark: useBaseUrl('/assets/images/kubernetes-autodiscovery/resource-links-dark.png'),
    }}
    />


### Edit Discovered Kubernetes Resources

Click the **Edit** button on the bottom right to edit resource information. Editing is generally limited to adding or editing **Notes** or **Tags**, or changing the **In Service** status or level.

<ThemedImage
  alt="Edit properties"
  sources={{
    light: useBaseUrl('/assets/images/kubernetes-autodiscovery/edit-resource-fields-light.png'),
    dark: useBaseUrl('/assets/images/kubernetes-autodiscovery/edit-resource-fields-dark.png'),
  }}
/>
