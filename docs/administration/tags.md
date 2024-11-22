---
title: "Tags"
sidebar_position: 15
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

Tags help with filtering objects and grouping objects. For example, you could define a "Project X" tag and associate that tag with all the devices, IP addresses, and other items associated with Project X.

Tags can be placed on most objects in Device42 and most reports can be filtered by tags.

Navigate to the Tags list page under **Infrastructure > Organization > Tags** to view, edit, and create tags.

<ThemedImage
  alt="Tags list page"
  sources={{
    light: useBaseUrl('/assets/images/tags/list-page-light.png'),
    dark: useBaseUrl('/assets/images/tags/list-page-dark.png'),
  }}
/>

### Create Tags

Click the **+ Add Tags** button to create a new tag. Tag names can contain spaces. The **Slug** is a unique resource identifier for the tag and is automatically filled in.

You can also create new tags directly from an object or autodiscovery job configuration page under the **Tags** field.

<ThemedImage
  alt="Add a new tag"
  sources={{
    light: useBaseUrl('/assets/images/tags/add-tag-light.png'),
    dark: useBaseUrl('/assets/images/tags/add-tag-dark.png'),
  }}
  style={{ width: '50' }} 
/>

### View and Edit Tags

Click the name of a tag from the list page to view the objects that have been tagged with it. To remove an association, click **Edit**, check the **Delete?** checkbox and **Save**.

<ThemedImage
  alt="Add a new tag"
  sources={{
    light: useBaseUrl('/assets/images/tags/tagged-items-light.png'),
    dark: useBaseUrl('/assets/images/tags/tagged-items-dark.png'),
  }}
  style={{ width: '50' }} 
/>

### Tagging Objects

Add a tag to a device by filling in the **Tag** field when creating or editing a device. You also specify tags to discovered objects when configuring an autodiscovery job. 

<ThemedImage
  alt="Tagging a device"
  sources={{
    light: useBaseUrl('/assets/images/tags/tagged-device-light.png'),
    dark: useBaseUrl('/assets/images/tags/tagged-device-dark.png'),
  }}
/>

### Merging Tags

Due to misspellings or duplication, you may end up with multiple tags and can merge them together.

From the Tags list page, select two or more tags, choose **Merge selected tags** from the actions menu, and click the **hammer icon** to execute the merge. 

<ThemedImage
  alt="Merge action"
  sources={{
    light: useBaseUrl('/assets/images/tags/merge-tags-light.png'),
    dark: useBaseUrl('/assets/images/tags/merge-tags-dark.png'),
  }}
/>
