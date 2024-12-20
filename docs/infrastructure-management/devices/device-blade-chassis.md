---
title: "Device - Blade Chassis"
sidebar_position: 4
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

## View Blade Chassis Devices

Locate your blade chassis in Device42 by navigating to **Resources > All Devices** and filtering for blade chassis devices:

- Click **+ More** and select the **Blade Chassis** checkbox to display its dropdown menu.
- Choose **Yes** from the dropdown. 

<ThemedImage
  alt="Filtering for blade chassis on the Devices list page"
  sources={{
    light: useBaseUrl('/assets/images/device-blade-chassis/filter-devices-light.png'),
    dark: useBaseUrl('/assets/images/device-blade-chassis/filter-devices-dark.png'),
  }}
/>

## The Blades Tab

Select a blade chassis from the Devices list page. Scroll down to the **Blades** tab, located below the device basic details section.

The **Blades** tab shows information about each device in the chassis. Blades are sorted by **Slot** number. Each blade has a link to its device page and displays its **Serial #**, **Asset #**, **Slot Location**, and **Hardware Model**.

<ThemedImage
  alt="Blade tab on a blade chassis device"
  sources={{
    light: useBaseUrl('/assets/images/device-blade-chassis/blades-tab-light.png'),
    dark: useBaseUrl('/assets/images/device-blade-chassis/blades-tab-dark.png'),
  }}
/>

### Add a New Blade 

In device **Edit** mode, from the **Blade** tab, you can add blades to a chassis by clicking **+ Add New Blade**. The hardware model for the blade device must exist beforehand.

<ThemedImage
  alt="Adding a new blade"
  sources={{
    light: useBaseUrl('/assets/images/device-blade-chassis/add-new-blade-window-light.png'),
    dark: useBaseUrl('/assets/images/device-blade-chassis/add-new-blade-window-dark.png'),
  }}
/>

## The Interactive Blade Chassis Layout

Layouts allow you to visualize blades within their chassis. The overall layout architecture is defined by the chassis [Hardware Model](#editing-hardware-models), which needs to be defined before you add and position specific blades. 

From the view mode of the [device chassis page](#view-blade-chassis-devices), click the **ellipsis menu** and select **Layout** from the dropdown. 

<ThemedImage
  alt="Device Layout button"
  sources={{
    light: useBaseUrl('/assets/images/device-blade-chassis/layout-button-light.png'),
    dark: useBaseUrl('/assets/images/device-blade-chassis/layout-button-dark.png'),
  }}
/>

Click **Turn ON** to edit the layout. Drag and drop the blades to position them in the correct slots. Please note that the blade slot numbers must be numeric and not alphanumeric.

<ThemedImage
  alt="Edit Layout button"
  sources={{
    light: useBaseUrl('/assets/images/device-blade-chassis/layout-view-light.png'),
    dark: useBaseUrl('/assets/images/device-blade-chassis/layout-view-dark.png'),
  }}
/>


:::tip
For blade-specific templating information, see the [Blade Slots documentation](device-blade-slots.md).
:::

### Editing Hardware Models

To edit the layout of a blade, first define its Hardware Model under **Infrastructure > Hardware Models > + Add Device Hardware Model**. 

<ThemedImage
  alt="Hardware Model menu"
  sources={{
    light: useBaseUrl('/assets/images/device-blade-chassis/hardware-model-menu-light.png'),
    dark: useBaseUrl('/assets/images/device-blade-chassis/hardware-model-menu-dark.png'),
  }}
/>

You can find a link to an existing Hardware Model in the right panel of an individual **Layout**.

Add a **New Slot** to an existing model by dragging it to the layout and filling in the fields:

<ThemedImage
  alt="Add new blade"
  sources={{
    light: useBaseUrl('/assets/images/device-blade-chassis/new-blade-slot-in-model-light.png'),
    dark: useBaseUrl('/assets/images/device-blade-chassis/new-blade-slot-in-model-dark.png'),
  }}
/>

- **Choose Slot Size:**  Choose between full, half, double options, and quarter heights.
- **Choose orientation:** Select **Vertical** or **Horizontal** positioning.
- **Slot Number:** Enter the next slot number in the sequence.

Visit the [Hardware Model (Templates)](hardware-models-templates.mdx) page to view details about Hardware Models that apply to all devices, not only blades.
