---
title: "API Limits"
sidebar_position: 2
---

Released in 18.08.00, there is a now a setting in the Appliance Manager that will limit how many remote agents can attempt to update at once. This is intended for customers with hundreds of agents so that those agents will not simultaneously attempt to update causing the Main Appliance to be overloaded.

The default setting for the API limit is 16 concurrent agent updates. Customers can configure this number to best suit their needs, between 8 and 128.

![](/assets/images/API-Limits-700x733.png)
