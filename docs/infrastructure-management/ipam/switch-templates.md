---
title: "Switch Templates"
sidebar_position: 9
---

Switch templates can be used to create switches and switch ports using templates. Once you create the templates, you can either add/edit switch and switch ports using the UI or REST APIs.

### Network switch templates for new and existing ports and switches

![](/assets/images/WEB-599_switch-template-menu.png)

**Switch Templates – Legacy** can be used to not only create new switches and ports, but also to edit existing switches and ports.

**Switch Templates 2.0** **–** is very similar to Legacy, however, the user doesn't have to enter port information as we discover the port definition from the hardware models to auto create the ports. You can select the hardware models that you want to generate switches from and it will create them for you.  If your hardware model also has parts slots (for modular switches) then you will be able to populate the part models that you want to prepopulate those switches with. This is typically used when manually adding these hardware types and not relying on auto-discovery of switches.

### Extended properties for a switch port

![](/assets/images/WEB-599_switch-template-extended-props-for-switch-port-1.png)

Module or Asset to show if a port belongs to a blade or fabric extender. Network switch 2nd would represent cluster switch in case of stacked switches or 2nd switch in case of paired switches.

### Catering to different switch types in the templates

![Catering_to_different_switch_types_in_the_templates.png](/assets/images/Catering_to_different_switch_types_in_the_templates.png)

Whether the switch is singular, modular and/or distributed, you can add any type from the templates. Also, stacked switches and paired switches can be added. All different options are discussed below.

### Singular switch

![](/assets/images/WEB-599_switch-template-singular-switch-2.png)

For a simple switch, you can choose (or add) the hardware module and add the ports in that switch with port prefixes. In example shown above, ports gbe/ 24 gig0/ and fiber/ 2 Fiber would be created (you can choose port starting number for each port template). Once you save this, on the list page it displays a create/edit link next to the switch. Once you click that you can choose an existing switch or add name for new one and rest is done automatically for you.

### Stacked switches

![](/assets/images/WEB-599_switch-template-stacked-switch-3.png)

Taking a page from Cisco's 3750 switches, you can add multiple singular switches to the stack. Stack itself is represented by a cluster device in device42. All physical switches would belong to the cluster device and all ports would have switch2 as the cluster switch. Once you click on create switches, you would be presented with following screen.

![](/assets/images/WEB-599_switch-template-createedit-switch-4.png)

Here you can enter a name for the cluster device(or choose an existing one) and similarly enter values for switches in the stack. Switch ports (and switches) are created based on the template.

### Modular/Distributed Switch

![](/assets/images/WEB-599_switch-template-modulardistributed-switch-5.png)

This type can be used to represent modular and/or distributed switches, e.g., a single 6509 switch with modules, Nexus 7k or Nexus 5k with fabric extender modules. Modules with hardware model, slot #, port prefixes and # of ports can be added here. You can also add asset templates( for Fabric Extenders) on this screen. Based on template values, you would be asked for switch/asset name etc. and it would create the switch, modules, assets(Fabric extenders) and switch ports based on the template.

### Paired modular/distributed switches

![](/assets/images/WEB-599_switch-template-modularpaired-switch-6.png)

This template can serve few different use case scenarios. For example, Cisco VSS paired 6509s or 2 Nexus 5k running in active/active mode. You can add various port info, etc., and it will create modules/assets/switch ports. Ports on the fabric extender can be marked to show if they are connected to both the switches or just one.
