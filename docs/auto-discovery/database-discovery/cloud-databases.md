---
title: "Cloud Databases"
sidebar_position: 1
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

## Introduction

Cloud databases are cloud platform database instances identified and returned by Device42 autodiscovery jobs. Cloud Database items have options to display their resource details, related databases, and topography maps.

## View Cloud Databases

Select **Resources > Cloud Databases** from the Device42 menu to display the cloud databases list page.

<ThemedImage
  alt="Cloud Databases menu"
  sources={{
    light: useBaseUrl('/assets/images/cloud-databases/cloud-databases-menu-light.png'),
    dark: useBaseUrl('/assets/images/cloud-databases/cloud-databases-menu-dark.png'),
  }}
/>

Device42 displays the cloud databases list page. On this page, you can **Search by resource name** (1), or filter the list by **Cloud Provider** (2) and **Vendor Resource Subtype** (3).

<ThemedImage
  alt="Cloud databases list page"
  sources={{
    light: useBaseUrl('/assets/images/cloud-databases/cloud-databases-list-page-light.png'),
    dark: useBaseUrl('/assets/images/cloud-databases/cloud-databases-list-page-dark.png'),
  }}
/>

You can also click **+More** (4) to filter by **Vendor Resource Type**, **Role**, **Instance Size**, **In Service**, **Service Level**, and **Tags**.

:::note
The cloud databases list page also includes an **Advanced Search** option to construct more specific searches. See the [Advanced Search Feature](/getstarted/advanced-search-feature.mdx) documentation page for instructions.
:::

Click on the name of a cloud database to see details about that database. You can use the links in the **Database/Schema** panel on the right to see details about that related resource.

<ThemedImage
  alt="View database details"
  sources={{
    light: useBaseUrl('/assets/images/cloud-databases/view-database-light.png'),
    dark: useBaseUrl('/assets/images/cloud-databases/view-database-dark.png'),
  }}
/>

### Resource Map

Click **Resource Map** at the top left of the page to see the topography map for the cloud database. You can select which **Resource Types** to include in the map.

<ThemedImage
  alt="Resource map"
  sources={{
    light: useBaseUrl('/assets/images/cloud-databases/resource-map-light.png'),
    dark: useBaseUrl('/assets/images/cloud-databases/resource-map-dark.png'),
  }}
/>

## Edit Cloud Databases

Click the **Edit** button at the bottom of the cloud database view page to edit the database information. You can add or edit **Notes** (1) and **Tags** (2) for the database, toggle **Yes** or **No** for **In Service** (3), and select or add a **Service Level** (4) value. You can also add and edit **Custom Field** values.

<ThemedImage
  alt="Edit cloud database"
  sources={{
    light: useBaseUrl('/assets/images/cloud-databases/edit-database-light.png'),
    dark: useBaseUrl('/assets/images/cloud-databases/edit-database-dark.png'),
  }}
/>

Click **Save** to save your edits or **Cancel** to discard them.

## Delete Cloud Databases

Select one or more databases from the list, and select **Fast Background Delete**, **Fast Background Archive**, or **Delete with Detailed Confirmation** from the action menu, and click the hammer icon to execute the action.

<ThemedImage
  alt="Action menu"
  sources={{
    light: useBaseUrl('/assets/images/cloud-databases/action-menu-light.png'),
    dark: useBaseUrl('/assets/images/cloud-databases/action-menu-dark.png'),
  }}
/>

Confirm or cancel the deletion when prompted.

<ThemedImage
  alt="Confirm action"
  sources={{
    light: useBaseUrl('/assets/images/cloud-databases/delete-confirmation-light.png'),
    dark: useBaseUrl('/assets/images/cloud-databases/delete-confirmation-dark.png'),
  }}
/>

:::note
Additional functionality and enhancements are available directly through our DOQL views and API for quick data extraction and will not initially have UI fields. More information can be found on the [API reference website](https://api.device42.com/#resource_Auto-Discovery).
:::
