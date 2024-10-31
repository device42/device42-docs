---
title: "Webhooks - Generic Integration"
sidebar_position: 28
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

## What Is a Webhook and How Are They Used in Device42?

Webhooks are used to initiate an external action in another part of your IT environment when an 'event', based on rules you define, occurs. Also known as **HTTP callbacks**, webhooks send data to HTTP endpoints (URLs) when a configured **Webhook Action** condition is met. In Device42, any change that produces an audit-log entry can be configured to trigger a webhook.

An IT Administrator might configure a webhook to deliver a message to one or more IT employees via a webhook-compatible endpoint (like Slack or Skype), letting them know that this action took place.

Other example events that can trigger a webhook are when an autodiscovery job finds a new device, when details about an existing device change, and when an existing device is deleted.

## Define a Webhook in Device42

Configuring Device42 to send a webhook is a simple process of two broad steps:

1. Navigate to **Tools > Webhooks > Endpoints** and click **+ Add Webhook Endpoint** to define one or more HTTP URLs Device42 should send your webhooks to. See [Webhook Endpoint Options](#webhook-endpoint-options) for an explanation of the fields. 

    <ThemedImage
    alt="Webhook endpoint"
    sources={{
        light: useBaseUrl('/assets/images/webhooks-generic-integration/add-endpoint-light.png'),
        dark: useBaseUrl('/assets/images/webhooks-generic-integration/add-endpoint-dark.png'),
    }}
    />

2. Define the Device42 action(s) that will trigger your webhook. Go to **Tools > Webhooks > Actions** and click **+ Add Webhook Action**. The webhook will be triggered when changes are made to the object categories you select from the **Available categories**. 

    <ThemedImage
    alt="Webhook action"
    sources={{
        light: useBaseUrl('/assets/images/webhooks-generic-integration/define-action-light.png'),
        dark: useBaseUrl('/assets/images/webhooks-generic-integration/define-action-dark.png'),
    }}
    />

    - Add the endpoint you defined in Step 1 by clicking **+ Add another Webhook Action Endpoints**. See [Webhook Actions Options](#webhook-action-options) for an explanation of the fields. 
  
    <ThemedImage
    alt="Add endpoint"
    sources={{
        light: useBaseUrl('/assets/images/webhooks-generic-integration/add-destination-light.png'),
        dark: useBaseUrl('/assets/images/webhooks-generic-integration/add-destination-light.png'),
    }}
    />

### Webhook Endpoint Options

- **Name:** Provide a name for the webhook endpoint. 
- **URL:** URL destination for the webhook to send data about the event to.
- **Endpoint:** Choose **Slack** or **Zapier** to reveal fields specific to those endpoints or select **Custom** if targeting anything else. 
- **Channel:** _Slack Endpoint only_. Specify the Slack channel that should receive a message when the webhook is received. 
- **Username:** _Slack Endpoint only_. Specify the Slack username the message will originate from. 
- **Icon:** _Slack Endpoint only_. Specify a custom icon to send when the webhook is triggered.
- **Webhook Header:** Define custom header payloads in the **Name** and **Token** fields.

### Webhook Action Options

- **Name:** Enter a name for webhook action. 
- **Process All Categories:** Hides the **Available Categories** choices for webhooks to be triggered by changes in all categories. 
- **Available Categories:** Specify the (Configuration Item) CI categories you'd like to trigger the webhook on. 
- **Process Add Events:** Trigger a webhook if a new CI is added to a **Chosen Categories** object.
- **Process Delete Events:** Trigger a webhook if a CI in any of the **Chosen Categories** is deleted. 
- **Process Change Events:** Trigger a webhook if a CI in any of the **Chosen Categories** is Changed. 
- **Process View Events:** Trigger a webhook if a "View event" is logged on a CI in the **Chosen Categories**. 
- **Process Login Events:** Trigger a webhook if a "Login event" is recorded on a CI in the **Chosen Categories**.
- **Destination:** Choose the defined endpoint(s) to receive triggered webhook event's data.
- **Changed Fields Only:** Trigger a webhook when changes are made to significant fields only and not when changes are made to metadata like logs or notes.
