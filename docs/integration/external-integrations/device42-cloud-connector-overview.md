---
title: "Cloud Connector FAQ"
sidebar_position: 5
---

## The Device42 Cloud Connector Overview

Certain Device42 integrations allow users to fetch data from their Device42 appliance to populate another application with CIs (Configuration Items) from Device42. Use cases range from powering a 3rd party CMDB with Device42 discovery, integrating with ticketing aka IT Service Management systems (ITSM), etc.

Configuration data from Device42 is often presented to external applications in the form of one or more _data sources_, and the specific CI details from these defined data sources are mapped to the target application via _transformation maps_.

## Configuring the Cloud Connector

To leverage the Cloud connector with external integrations that support it, it must be configured. Cloud Connector configuration settings can be found on the _Cloud Services_ page. Select _Tools > Integrations > Cloud Services_ to open the page.

Click _Edit_ at the bottom right of the page, and enter your Device42 instance’s URL or IP address in this field, e.g., `https://myd42url.com`. You can also choose the Cloud Connector to use (USA or Europe).

Click _Save_ to save your changes.

![](/assets/images/D42-28184_cloud-services-page.png)

## List of external integrations that utilize the Cloud Connector:

- [Atlassian JIRA (cloud)](integration/external-integrations/jira-integrations/device42-jira-cloud-integration.mdx)
- [ServiceNow](device42-servicenow-connector.md)
- [Freshservice](integration/external-integrations/freshservice-integration.mdx)
- Insight in JSM Cloud
- [Opsgenie](integration/external-integrations/opsgenie-integration.md)
- [PagerDuty](integration/external-integrations/pagerduty-integration.md)
- [ServiceNow](integration/external-integrations/device42-servicenow-connector.md)
- [ZenDesk](device42-zendesk-connector.md)

Note that the [Cloud Recommendation Engine](reports/reports/cloud-recommendation-engine.md) also uses the Cloud Connector.

## Why was the Cloud Connector built?

To accomplish the transfer of data from customers’ Device42 instances to an external integration, requests originating from the external integration must be routed to a customers’ Device42 appliance.

This presents a challenge in that Device42 installations often exist in local, isolated environments, behind firewalls, and without any externally-reachable IP address. In many cases, Device42 instances are unreachable from the internet at large, and are therefore also unreachable by cloud applications that we want to integrate with, as well.

### Facilitating communication without opening the firewall

The Cloud Connector is utilized to route traffic from a given external integration directly to the customers’ normally unreachable Device42 appliances via a secure, internally (from the Device42 appliance) initiated WebSocket connection.

The D42 Cloud Connector was built as a secure alternative to asking Device42 users to open their firewalls to allow this communication, which would have the side effect of needlessly exposing Device42 instances to the internet. The Cloud connector thus facilitates secure communication with the 3rd party software hosted in any cloud platform, while maintaining a minimum attack surface area and avoiding any need to expose customer’s Device42 appliances to the internet at large.

## Cloud Connector / WebSocket Security Architecture

The Cloud Connector handles routing requests from each external integration instance to the proper D42 appliance endpoint via 3 GUID keys:

- The “appliance GUID”
- The “verification token GUID”
- The “am_guid”

The verification token is used to search a database on the cloud connector for an account that matches the given verification token. Once it finds a verification token that matches, the request is forwarded to that appliance by the WebSocket Server as identified by the appliance GUID.

### Example / Diagram: ServiceNow DOQL Query Executed by Cloud Connector

![Cloud connector communication example using ServiceNow integration](/assets/images/Device42-ServiceNow_Integration_Cloud-Connector_v2.png)

The above graphic details communication between Device42, the Cloud connector, and the ServiceNow integration, with ServiceNow being used as the example. The general flow applies to any integration that uses the CC.

Note that the Device42 cloud connector is hosted by AWS, and takes advantage of their [industry-leading security features](https://aws.amazon.com/security/), as well as general best practices.

### Cloud Connector IPs

Device42 uses Cloudflare for the Cloud Connector. If you need specific IPv4 and IPv6 addresses, please refer to the [Cloudflare IP Ranges](https://www.cloudflare.com/en-in/) documentation.

If you have a question that isn't answered here, please email [support@device42.com](mailto:support@device42) and we'll be glad both to answer your question, and to include the answer here.
