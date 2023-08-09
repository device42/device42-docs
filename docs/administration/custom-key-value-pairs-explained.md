---
title: "Custom Fields"
sidebar_position: 7
---

Device42 offers users the ability to define their own fields.

You can add custom fields to buildings, rooms, racks, customers, devices, assets, application components, circuits, and passwords as discussed below. This feature enables you to store any custom attributes you need to store in Device42. You can also display custom fields and filter on custom fields in Reports.

## Adding Custom Fields

![Custom Fields Menu](/assets/images/custom_fields_menu.png)

You create a custom field by navigating to Tools>>Custom Fields and choosing the object type (e.g. Assets, Buildings, ...) from the list page to see or create a custom field for that category.

When you select an object, you will see a List View of the existing custom fields for that object category:

![add device custom field button](/assets/images/add_device_custom_fields.png)

You can either edit an existing custom field or click the Add ... Custom Field button to add a new one...

![](/assets/images/2015-10-10-custom-fields.png)

Add a name for the custom field and choose a type. Available types are:

1. **Text:** Custom field values are character-based.
2. **Number:** Custom field values are numeric.
3. **Date:** Custom field values are dates.
4. **Related Field:** Custom field values are values of another field (e.g. If rack is chosen, then rack names are possible values).
5. **Yes/No:** Custom field values are either yes or no.
6. **URL:** Custom field values are URLs.
7. **Picklist:** Custom field value choices as a picklist.
8. **JSON:** Custom field values are JSON.
9. **Markup:** Custom field values are markup.

Certain custom field types, when selected, will present more options specific to that field type. If you check the Filterable box, the List View page for the object will contain a filter(s) for that custom field. For example, ...

![](/assets/images/media_1424645040560.png)

A Mandatory custom field is one that must have a value in order to save the device (or other object) record as shown below…

![](/assets/images/media_1424645240280.png)

Please note that mandatory only applies when editing or adding an object via the UI. This is not enforced it via the API or when adding a new device (or other object).

## REST APIs for custom values

Device custom values: [https://api.device42.com/#Devices_putCustom_Field_Devices](https://api.device42.com/#Devices_putCustom_Field_Devices)
