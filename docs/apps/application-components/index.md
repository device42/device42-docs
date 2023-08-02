---
title: "Application Components"
---

Application Components are intended to capture what people generally think of as "Applications." An application might be a CEO Dashboard that requires a web server/farm, an app server, and a database server. An application component might also be linked to just one service. Or an application component might be defined without any underlying service.

### Defining Application Components Based on Services

Each Service Instance edit form has an option to link that service with an Application Component.

![service-to-app.png](/assets/images/service-to-app.png)

In the example above, we've linked the oracle\_proce233442 service with the "Oracle Server 0006" Application Component.

If you navigate to the edit form for an Application Component, you can also link one or more services from that screen:

![service-to-app-2.png](/assets/images/service-to-app-2.png)

### Defining Application Components Not Based on Services

![](/assets/images/Application-Component-View-List.png)

Device42 now automatically categorizes application components by the following categories: Database, Application Layer, Web Server, Load Balancer, and Other. You can filter the list page based on application component category, and can categorize your custom components as well.

The _Application Component_ view page now also includes a _Has Resource_ column that displays the name of the associated resource for an application component.

![wpid2068-Defining_Application_Components_bottom_UP.png](/assets/images/wpid2068-Defining_Application_Components_bottom_UP.png)

In the example above, we are defining a "SAN Store" that depends on a device named "sh-SAN-Cluster01". If we'd like, we can also identify the Responsible Department, and choose which organizational groups are affected by this application component.

Next we will define an "exchange server" component as shown below.

![wpid2071-media_1334740220432.png](/assets/images/wpid2071-media_1334740220432.png)

Then we will add an Outlook Web Access(OWA) component that depends on the Exchange component as shown below:

![wpid2072-media_1334740452246.png](/assets/images/wpid2072-media_1334740452246.png)

All of the dependencies we just created will show up in impact charts, impact lists, and dependency graphs.
