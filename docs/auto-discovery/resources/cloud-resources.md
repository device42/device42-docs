---
title: "Cloud Resources"
sidebar_position: 30
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'


Cloud resources are items identified and returned by Device42 autodiscovery jobs and are visualized in the resource map view.

Discovered information can be sorted by cloud vendor, region, subnet, Virtual Private Cloud (VPC), and other discovered resource types in your environments.

:::note
While you can display Azure and GCP environments in the resource map, AWS currently displays more accurate information. We are working to add this like-for-like functionality for all cloud accounts.
:::

## View Cloud Resources

Navigate to **Infrastructure > Cloud Infrastructures > Cloud Accounts** from the Device42 menu to display the Cloud Accounts list page.

<ThemedImage
  alt="Cloud Resources in menu"
  sources={{
    light: useBaseUrl('/assets/images/cloud-resources/menu-light.png'),
    dark: useBaseUrl('/assets/images/cloud-resources/menu-dark.png'),
  }}
/> 

### Cloud Accounts List Page

From the Cloud Accounts list page, you can use the search bar and **Cloud Vendor** dropdown to filter the cloud accounts. Add additional filtering criteria using the **+ More** button.

<ThemedImage
  alt="Cloud Resources list page with filter"
  sources={{
    light: useBaseUrl('/assets/images/cloud-resources/list-page-light.png'),
    dark: useBaseUrl('/assets/images/cloud-resources/list-page-dark.png'),
  }}
/>  

## Resource Map View

From the list page, click on a cloud account to view its details. Navigate back up to the **Cloud Vendor** to view all accounts.

Access the **Resource Map** view to view the cloud account and its related resources and assets in a chart view.

<ThemedImage
  alt="Resource map link"
  sources={{
    light: useBaseUrl('/assets/images/cloud-resources/resource-map-light.png'),
    dark: useBaseUrl('/assets/images/cloud-resources/resource-map-dark.png'),
  }}
/>  

Click on the account level or provider to display additional cloud accounts in your environment.

<ThemedImage
  alt="Resource map overview example"
  sources={{
    light: useBaseUrl('/assets/images/cloud-resources/resource-map-overview-light.png'),
    dark: useBaseUrl('/assets/images/cloud-resources/resource-map-overview-dark.png'),
  }}
/>  

The **Show All** view can be applied to all areas in the resource map. Please note that large environments will take a few seconds to fully populate.

<ThemedImage
  alt="Show All"
  sources={{
    light: useBaseUrl('/assets/images/cloud-resources/show-all-light.png'),
    dark: useBaseUrl('/assets/images/cloud-resources/show-all-dark.png'),
  }}
/>

### Tools and Summary Panel

Use the summary panel on the left to search by resource name and quickly identify your assets.

Below the search bar are filter options that are identified by their resource type. 

For example, click the **target icon** for **VPCs (VRF Groups)** to display and highlight those items on the map for quick identification.

<ThemedImage
  alt="Highlight VPCs in resource map"
  sources={{
    light: useBaseUrl('/assets/images/cloud-resources/highlight-vpcs-light.png'),
    dark: useBaseUrl('/assets/images/cloud-resources/highlight-vpcs-dark.png'),
  }}
/>   

### View Details with Resource Icons

Regions and some resource items have an **expand icon** (1) to drill down into regions and other resources and a **magnifying glass icon** (2) to see the resources in the region.

<ThemedImage
  alt="Icons"
  sources={{
    light: useBaseUrl('/assets/images/cloud-resources/icons-light.png'),
    dark: useBaseUrl('/assets/images/cloud-resources/icons-dark.png'),
  }}
  style={{ width: '40%' }} 
/>  

The **magnifying glass icon** will change to a **compass icon** and an info box will open that you can use to identify the resources and assets within that region. Click **Show All** to load and display all the listed resources on the map.

<ThemedImage
  alt="Select expanded item example"
  sources={{
    light: useBaseUrl('/assets/images/cloud-resources/magnify-light.png'),
    dark: useBaseUrl('/assets/images/cloud-resources/magnify-dark.png'),
  }}
/>

:::info
Please keep in mind that large environments will need a few seconds to fully populate.
:::

Click the **expand icon** and then select the resource to open a summary box displaying important information such as the **Service Level**, **Last Changed** date and time, **Vendor Resource Type**, and **Resource Categories**.

<ThemedImage
  alt="Select expanded item example"
  sources={{
    light: useBaseUrl('/assets/images/cloud-resources/expanded-light.png'),
    dark: useBaseUrl('/assets/images/cloud-resources/expanded-dark.png'),
  }}
/>
