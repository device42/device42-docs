---
title: "Patch panel cable management definitions and legends"
---

In this section, we will cover some of basic definitions we use for components related to patch panels in Device42.

### Patch Panel Model

![Patch Panel Model](/assets/images/patch_panel_model1.png)

In Device42, a patch panel model works as a template for the creation of actual patch panels with various ports and properties. You create a template that contains fields for the type of panel, the number of ports, the types of ports, and some other information. Then, when you create an actual patch panel, you select a model as the basis for the patch panel.

Each patch panel model can be either:

- Singular
- or, Modular

A Singular model is used for creating patch panels that have a single type of port. For example, if all ports are type RJ45 Ethernet, you can choose type Singular.

![](/assets/images/patch_panel_model_singular1.png)

A Modular patch panel model is used for creating patch panels with different types of ports. If you add a patch panel model as type modular, you will need to add at least one patch panel module model as defined below.

### Patch Panel Module Model

![Patch Panel Module Model](/assets/images/patch_panel_module_template1.png)

If a patch panel model is type "modular", you must add at least one patch panel module. You will need one module for each type of port. Patch panel modules are based on a **Patch panel module model**. In other words, Patch panel module model is a template for patch panel modules.

For each module template, you define the name, port type, # of ports etc.

### Patch panel back connectivity

![Patch panel back connectivity](/assets/images/patch_panel_back1.png)

Patch panel back connectivity defines the "cable connection" for the patch panel. This can also be referred as termination or punch down of the patch panel connection.

Here are a few example scenarios:

1. A patch panel is wired to another patch panel with one-to-one terminated ports.
2. A patch is wired to multiple patch panels.
3. Wall jacks terminate in a patch panel.

With the option to add individual back connections or bulk back connections, you can easily represent these scenarios in device42. (Photo by https://www.flickr.com/photos/njh/ under creative commons)
