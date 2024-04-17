---
title: "Resources"
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

## Introduction

Resources are items identified and returned by Device42 autodiscovery jobs, and can be both cloud-based or on-premise. Resources include devices, load balancers, pool resources, storage arrays, and more. Select a resource from the list page to view its properties and access its resource map.

## View All Resources

Select **Resources > All Resources** from the Device42 menu to display the Resources list page.

<ThemedImage
alt="Resources menu location"
sources={{
    light: useBaseUrl('/assets/images/autodiscovery-resources/resources-menu-light.png'),
    dark: useBaseUrl('/assets/images/autodiscovery-resources/resources-menu-dark.png'),
}}
/>

### Find Resources

Device42 displays the Resources list page. On this page, you can **Search by name, identifier**, or filter the list by **Cloud Provider** and **Vendor Resource Type**.

<ThemedImage
alt="Resources search and filter options"
sources={{
    light: useBaseUrl('/assets/images/autodiscovery-resources/resources-filters-light.png'),
    dark: useBaseUrl('/assets/images/autodiscovery-resources/resources-filters-dark.png'),
}}
/>

For more filter options, click **+More** and select from a range of resource properties, including:
- Vendor Resource Subtype
- Regions
- Zones
- Tags
- In Service
- Service Level
- First Added
- Last Updated

<ThemedImage
alt="More filter options"
sources={{
    light: useBaseUrl('/assets/images/autodiscovery-resources/resources-more-filter-light.png'),
    dark: useBaseUrl('/assets/images/autodiscovery-resources/resources-more-filter-dark.png'),
}}
/>

The Resources list page also includes an **Advanced Search** option you can use to construct more specific searches. See the [Advanced Search Feature](getstarted/advanced-search-feature.md) documentation page for instructions.

### View Resource Details

Click on a resource **Name** to see details about that resource. There are sections for the resource's specific related CI types. For example, a NetApp storage array includes sections for **Disks** and **Volumes**.

Click on a links within the sections to view that item's details.

<ThemedImage
alt="View resource details"
sources={{
    light: useBaseUrl('/assets/images/autodiscovery-resources/resource-details-light.png'),
    dark: useBaseUrl('/assets/images/autodiscovery-resources/resource-details-dark.png'),
}}
/>

<ThemedImage
alt="Related resource details"
sources={{
    light: useBaseUrl('/assets/images/autodiscovery-resources/linked-example-light.png'),
    dark: useBaseUrl('/assets/images/autodiscovery-resources/linked-example-dark.png'),
}}
/>

### Resource Map

Click **Resource Map** at the top left of the page to see the topography map for the resource. You can use the options on the left panel to highlight and search for related CIs to display on the map.

<ThemedImage
alt="Resource map"
sources={{
    light: useBaseUrl('/assets/images/autodiscovery-resources/resource-map-view-light.png'),
    dark: useBaseUrl('/assets/images/autodiscovery-resources/resource-map-view-dark.png'),
}}
/>

### Edit a Resource

Click **Edit** on the Resources view page to edit the resource. You can add or edit **Notes** or **Tags** for the resource, select Yes/No for **In Service**, and select or add a **Service Level** value.

<ThemedImage
alt="Resource map"
sources={{
    light: useBaseUrl('/assets/images/autodiscovery-resources/edit-resource-light.png'),
    dark: useBaseUrl('/assets/images/autodiscovery-resources/edit-resource-dark.png'),
}}
/>
 
Click **Save** to save your edits or **Cancel** to discard them.

## Select Resources Across Multiple Pages

Select resources across multiple list pages to run bulk actions on. Actions include deleting, archiving, or adding the resources to a Business Application.

- Select a list page you want to view and then select resources on that page. The page shows you how many items you selected.
- Go to a different list page to select resources on that page. The page updates the selected items count. You can then apply an Action to all the selected items.

<ThemedImage
alt="Select from multiple pages"
sources={{
    light: useBaseUrl('/assets/images/autodiscovery-resources/select-multiple-pages-light.png'),
    dark: useBaseUrl('/assets/images/autodiscovery-resources/select-multiple-pages-dark.png'),
}}
/>

## Bulk Resource Actions

To delete resources, select one or more resources from the list, and choose **Fast Background Delete** or **Delete with Detailed Confirmation** from the Actions menu. Alternatively, you can run the **Fast Background Archive** action to archive the resources.

Click the **hammer icon** to execute the selected action.

<ThemedImage
alt="Resources bulk actions"
sources={{
    light: useBaseUrl('/assets/images/autodiscovery-resources/delete-resources-action-light.png'),
    dark: useBaseUrl('/assets/images/autodiscovery-resources/delete-resources-action-dark.png'),
}}
/>

Confirm the deletion if prompted.

<ThemedImage
alt="Delete with confirmation"
sources={{
    light: useBaseUrl('/assets/images/autodiscovery-resources/delete-with-confirmation-light.png'),
    dark: useBaseUrl('/assets/images/autodiscovery-resources/delete-with-confirmation-dark.png'),
}}
/>
