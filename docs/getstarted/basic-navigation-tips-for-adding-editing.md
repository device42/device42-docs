---
title: "Basic Navigation Tips for Adding and Editing"
sidebar_position: 9
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

## List Page Buttons and Action Menu

On Device42 list pages (for example, devices, IP addresses, subnets, racks, etc.), look to the upper-right corner for buttons to quickly perform the most common action(s) on each page. 

<ThemedImage
  alt="Action menu and page buttons"
  sources={{
    light: useBaseUrl('/assets/images/basic-navigation-tips/devices-list-page-light.png'),
    dark: useBaseUrl('/assets/images/basic-navigation-tips/devices-list-page-dark.png'),
  }}
/>

The **Action** dropdown menu contains a list of actions that can be performed in bulk for the selected items (using the checkboxes) on each list page. Click the **hammer icon** to the right of the menu bar to execute the action.

## Required and Optional Fields

<ThemedImage
  alt="Required fields are bold"
  sources={{
    light: useBaseUrl('/assets/images/basic-navigation-tips/add-device-light.png'),
    dark: useBaseUrl('/assets/images/basic-navigation-tips/add-device-dark.png'),
  }}
/>

The **bold** field labels indicate required fields and all the non-bolded fields on the page are optional to fill in. This convention applies to all add and edit screens across the Device42 UI. Submitting a form without filling in the required fields will throw an error, for example, "The required field "Name:" does not contain a value!"

## Add Items From an Edit Page

<ThemedImage
  alt="Add new item"
  sources={{
    light: useBaseUrl('/assets/images/basic-navigation-tips/add-object-to-rack-light.png'),
    dark: useBaseUrl('/assets/images/basic-navigation-tips/add-object-to-rack-dark.png'),
  }}
/>

You can add the corresponding relational objects directly from edit pages. Click the **magnifying glass icon** (1) to select an existing object. If the object you are looking for does not yet exist, you can create a new one (2). You can also add a new object from the first pop-up form (3).

<ThemedImage
  alt="Add a new room"
  sources={{
    light: useBaseUrl('/assets/images/basic-navigation-tips/add-room-button-light.png'),
    dark: useBaseUrl('/assets/images/basic-navigation-tips/add-room-button-dark.png'),
  }}
/>

<ThemedImage
  alt="Add a new building"
  sources={{
    light: useBaseUrl('/assets/images/basic-navigation-tips/add-building-light.png'),
    dark: useBaseUrl('/assets/images/basic-navigation-tips/add-building-dark.png'),
  }}
/>

## Adding Inline Items

<ThemedImage
  alt="Add another device to rack line item"
  sources={{
    light: useBaseUrl('/assets/images/basic-navigation-tips/inline-items-light.png'),
    dark: useBaseUrl('/assets/images/basic-navigation-tips/inline-items-dark.png'),
  }}
/>

You can add line items directly from an edit page wherever it's relevant. In this example, while editing a rack, you can add devices to the rack on the edit page.

## The Save Toolbar

<ThemedImage
  alt="Save toolbar"
  sources={{
    light: useBaseUrl('/assets/images/basic-navigation-tips/save-toolbar-light.png'),
    dark: useBaseUrl('/assets/images/basic-navigation-tips/save-toolbar-dark.png'),
  }}
  style={{ width: '40%' }} 
/>

At the bottom of the add and edit forms, you'll find the save toolbar. You can **Save** your input and view the result, **Save and continue editing the object**, or **Save and add another** object. You can also **Delete** the object from the toolbar. Don't forget to save.