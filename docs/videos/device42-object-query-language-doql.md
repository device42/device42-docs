---
title: "Device42 Object Query Language (DOQL)"
sidebar_position: 13
---

# DOQL - Device42 Object Query Language

<iframe width="560" height="315" src="https://www.youtube.com/embed/uFPzzjnDDyk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

* * *

**See The [Device42 DOQL DOCUMENTATION PAGE](https://docs.device42.com/device42-doql/) for DOQL documentation - https://docs.device42.com/device42-doql/**

* * *

**Video Transcript**

_Welcome to the Device42 Object Query Language (DOQL) HowTo!_

_In this HowTo video, we will utilize the Chrome plugin "Postman" to send 'GET' API calls to the Device42 DOQL endpoint.

We first set up the API Authentication in Postman, and from there move on to queries.

The video demonstrates queries that return:

All Asset Numbers in Device42: 

```
?query=SELECT asset_no FROM view_device_v1 All Asset Numbers in Device42 that are not NULL (no empty sets): ?query=SELECT asset_no FROM view_device_v1 WHERE asset_no <> '' All Assets with a Custom Field of "IPMI_Firmware" Where the Asset Number is not blank: ?query=SELECT d.asset_no FROM view_device_v1 d join view_device_custom_fields_flat_v1 dc on dc.device_fk = d.device_pk where d.asset_no <> ''
```

If you know PostgreSql (SQL), you already know DOQL! Send standard PostgreSql syntax to the Device42 database via the API!

Please leave any questions, comments, or requests for new HowTo's as comments on the video, or reach out to support@device42.com

Transcript

Let's start by taking a look at the viewer schema which can be found in the help menu. It contains an 'entity relationship diagram' and a 'data dictionary'. One of the questions we got asked was "how can we get a list of asset numbers for all devices in Device42?

Let's take a look at how we can go about doing that. By clicking on this little down arrow, you'll see the device view, and then asset\_no right there. That's the field we'll focus on. We're going to use Postman – the chrome plug-in. We'll make a 'GET' call. Start by selecting 'basic auth', and you're going to want to type your Device42 username and password. These have to be administrator or super-user credentials.

For this first query, we're looking to get asset numbers for all devices in Device42. We're going to do a SELECT asset\_no FROM view\_device\_v1. It worked, but you'll notice we got a lot of empty sets as well.

The next thing we'll focus on is modifying our query to filter out all the empty sets. We'll do this by adding a `WHERE asset_no <> ""`. And there you go, we have a list of all the asset numbers in Device42.

Last but not least, we'll up the level of complication a little bit; this query selects all devices in Device42 with a custom field of "IPMI\_Firmware" WHERE the asset\_no is not blank. So we'll go ahead and run that, and you can see there's actually only one matching devices in this instance and we got that by joining view\_device\_v1 with view\_device\_custom\_fields\_flat\_v1.

If you already know SQL (PostgreSql), you already know DOQL!_
