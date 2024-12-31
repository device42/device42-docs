---
title: "Device - Blade Slots"
sidebar_position: 5
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

A blade slot is a placeholder for a blade server in a blade chassis. Configure a chassis Hardware Model with the number and type of blade slots of the physical hardware, and then it's layout.

Chassis Blade slots are added to hardware models that have been designated **Blade Host/Chassis** during creation.

## Create or Edit a Chassis Hardware Model 

Navigate to **Infrastructure > Hardware Models** and select an existing hardware model or click **+ Add Device Hardware Model** to create a new one.

For **Physical Subtype**, choose **Rackable** or a similarly defined subtype to reveal the **Blade Host/Chassis** option and select it.

<ThemedImage
  alt="Add Device Hardware Model for blade chassis"
  sources={{
    light: useBaseUrl('/assets/images/device-blade-slots/add-hardware-model-light.png'),
    dark: useBaseUrl('/assets/images/device-blade-slots/add-hardware-model-dark.png'),
  }}
/>

### Add Blade Slots to the Chassis

Scroll down to **Chassis Blade Slots** and add as many blade slots as needed to match the layout of your hardware. 

<ThemedImage
  alt="Add blade slots to chassis Hardware Model"
  sources={{
    light: useBaseUrl('/assets/images/device-blade-slots/add-hardware-model-light.png'),
    dark: useBaseUrl('/assets/images/device-blade-slots/add-hardware-model-dark.png'),
  }}
/>

Click **Save** or **Save and continue editing** to save your progress. 

### Adjust Layout on Existing Hardware Model

Search for the Hardware Model you created from the Hardware Model list page and click **Model Layout** to create or adjust the visual layout of the blade slots.

<ThemedImage
  alt="Model Layout button"
  sources={{
    light: useBaseUrl('/assets/images/device-blade-slots/model-layout-button-light.png'),
    dark: useBaseUrl('/assets/images/device-blade-slots/model-layout-button-dark.png'),
  }}
/>

## Using the Visual Model Editor

Click **Turn ON** to enable edit mode, and then drag and drop parts slots as desired. 

<ThemedImage
  alt="Turn ON button"
  sources={{
    light: useBaseUrl('/assets/images/device-blade-slots/turn-on-button-light.png'),
    dark: useBaseUrl('/assets/images/device-blade-slots/turn-on-button-dark.png'),
  }}
  style={{ width: '35%' }} 
/>

Slots that were created when the Hardware Model was defined will appear in the left column under **Unmapped Existing Blade Slots**.

Toggle the grid background on or off using the **third semi-circle icon** to help align the slots.

<ThemedImage
  alt="Unmapped blade slots"
  sources={{
    light: useBaseUrl('/assets/images/device-blade-slots/unmapped-slots-light.png'),
    dark: useBaseUrl('/assets/images/device-blade-slots/unmapped-slots-dark.png'),
  }}
/>

### Editing a Blade Slot

Double-click a blade slot to change the slot size, orientation, or number. Note that you can not put a part into a blade slot, but you can set the blade height instead.

<ThemedImage
  alt="Edit blade slot fields"
  sources={{
    light: useBaseUrl('/assets/images/device-blade-slots/edit-slot-light.png'),
    dark: useBaseUrl('/assets/images/device-blade-slots/edit-slot-dark.png'),
  }}
/>

When you have finished editing your layout, **Save** the edits you made. You will see a green save confirmation in the upper left. 

<ThemedImage
  alt="Save button on visual model editor"
  sources={{
    light: useBaseUrl('/assets/images/device-blade-slots/save-button-light.png'),
    dark: useBaseUrl('/assets/images/device-blade-slots/save-button-dark.png'),
  }}
/>
