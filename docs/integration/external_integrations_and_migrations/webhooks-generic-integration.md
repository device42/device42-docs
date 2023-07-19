---
title: "Webhooks - Generic Integration"
sidebar_position: 28
---

## What is a webhook and how are they used in Device42?

Webhooks are used to initiate an external action in another part of your IT environment when some "event", based on rules you define, occurs. Also known as _HTTP callbacks_, webhooks are "fired" at HTTP endpoints (URLs) when a configured "Webhook Action" criteria is met. Within Device42, anything that produces an audit-log entry can also be configured to "fire" a webhook.

For example, when a Device42 auto-discovery job finds a new device, when details about an existing device change, or when an existing device is deleted are three simple examples of actions that can be configured to trigger webhooks from Device42. An IT Administrator might configure a webhook to deliver a "message" to one or more IT employees via a webhook-compatible endpoint _(like Slack or Skype)_, letting them know that this action took place.

## Creating a webhook action in Device42

Configuring Device42 to send a webhook is a simple two-step process:

1. Define one or more **Webhook Endpoints:** the HTTP URLs Device42 should send your webhooks to via _Tools -> Webhooks -> Endpoints -> Add Webhook Endpoint_ ![](/assets/images/WEB-806_1.png)
2. Define a **Webhook Action:** the Device42 action(s) that will trigger your webhook, and the endpoints they should go to via _Tools -> Webhooks -> Actions -> Add Webhook Actions_ ![](/assets/images/WEB-806_2.png)

## Webhook Options

### Webhook Action Screen options

**Name:** User-defined name for webhook action **Process All Categories:** Hides "Available Categories" choices; webhooks fired on changes in all categories **Available Categories:** Specify the CI categories you'd like to trigger the webhook on **Process Add Events:** Trigger a webhook if a new CI is added to a _Chosen Categories_ **Process Delete Events:** Trigger a webhook if a CI in any of _Chosen Categories_ is deleted **Process Chaange Events:** Trigger a webhook if a CI in any of _Chosen Categories_ is Changed **Process View Events:** Trigger a webhook if a "View event" is logged on a CI in _Chosen Categories_ **Process Login Events:** Trigger a webhook if a "Login event" is recorded on a CI in _Chosen Categories_ **Destination:** Choose the defined endpoint(s) to receive triggered webhook events

### Webhook Endpoint Screen options

![](/assets/images/WEB-806_3.png)

**Name:** User-defined name for webhook endpoint **URL:** URL destination for webhook **Endpoint:** Choose Slack or Zapier to reveal fields specific to those endpoints; Choose custom if targeting anything else **Channel:** _Slack Endpoint only_; Specify Slack channel that should receive message when webhook is received **Username:** _Slack Endpoint only_; Specify the Slack username the message will originate "From" **Icon:** _Slack Endpoint only_; Specify a custom "From" icon **Webhook Header:** Define custom Header payloads; each includes a user-defined 'Name' and 'Token' field.
