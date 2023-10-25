---
title: "Zendesk Integration"
sidebar_position: 30
---

## Device42-Zendesk Integration

**With the Device42 - Zendesk integration, you'll benefit from the ability to:**

- Attach any part of your auto-discovered IT infrastructure within Device42 - including devices, racks, parts, and PDUs - directly to your Zendesk tickets
- View details like device type, device service level, and serial numbers stored within Device42 directly within Zendesk
- Click links integrated into Zendesk that jump you directly to the relevant IT infrastructure CI details page in Device42
- Customize ZenDesk by adding your autodiscovered Device42 infrastructure items as columns in your ZenDesk custom views!

* * *

### Pre-Requisite: Configure Device42 for ZenDesk integration

 

- To begin, open ZenDesk and head to "Settings" via the "Gear" icon on the left side of the ZenDesk interface, and then choose the "API" item from the list on the left. Enable "Token Access" via the slider if it's not already enabled, and generate a new API access token via the "+" button, and name it "Device42 Integration". Copy this token value and save it! Note per ZenDesk instructions, when authenticating with Toekn Access, add `/token` to the end of your username! ![ZenDesk generate API token](/assets/images/ZenDesk_Generate_API_Token.png)
- Next, enable the ZenDesk integration from within Device42. Log in to your Device42 instance and from the Device42 main menu, head to _Tools -> Integrations -> External Integrations_. Add a new integration for type: "ZenDesk", and paste in the token you copied from the previous step: ![D42 ZenDesk Integration Config](/assets/images/Device42_Side_ZenDesk_Config-1.png)
- Save the new ZenDesk integration settings & write down the "Verification token" Device42 generates: ![](/assets/images/D42_Token.png) Head to the "Installing the ZenDesk add-on section" below to continue installing the ZenDesk connector.

 

### Installing the Device42 add-on for ZenDesk

To begin installing the Device42-Zendesk integration, head to the [ZenDesk marketplace](https://www.zendesk.com/marketplace/apps/). ![ZenDesk Marketplace D42 App](/assets/images/D42_connector_zendesk_marketplace.png)

If you are having trouble with the link, You might need to sign in to your Zendesk account \[if you aren't already signed in\]. Next, click the gear icon (lower left), then click the “Marketplace” link. Search for “Device42 for Zendesk” to locate the integration add-on.

 

- Click the ZenDesk marketplace "Install" button _(pictured above)_ & follow the the on-screen instructions; Choose the name of \*your\* account from the dropdown, and click "Install" to continue installation: ![D42 Connector ZenDesk Install](/assets/images/D42_Connector_for_Zendesk_INSTALL.jpg.png)
- For "Title", Name your integration. We used "Device42 connector for ZenDesk" in this example.
- For the "Token", provide the 'Verification Token' you saved from the Device42 setup steps above: ![Install d42 plugin to ZenDesk](/assets/images/ZenDesk_Install-hl.png)
- Set up role / group restrictions if desired; we'll leave them disabled for now. Click "Install" to continue.
- You're all set!

 

* * *

## Using the ZenDesk Connector

Once the plugin is installed, it's simple to associate CIs from Device42 with tickets. In Device42, head to any Device, Building, Room, etc. CI of your choice, and scroll all the way to the bottom: ![Add or Link a ZenDesk ticket](/assets/images/Add-Link_ZenDesk_ticket.png)

Click "Add ZenDesk Ticket" to add a new ticket, or "Link to ZenDesk ticket" to link an existing ticket: ![Create ZenDesk ticket from D42 CI](/assets/images/create_ZenDesk_ticket_D42-1.jpg)

Click Submit, and you'll get confirmation that the ticket was created (or attached). You'll now also see the your new ticket you just created listed as an attachement, as well: ![ZenDesk ticket attached to D42 CI](/assets/images/ZenDesk-Ticket-Attached-to-D42.jpg)

You'll also be able to see any tickets you've created within ZenDesk: ![D42 CI on ZenDesk Tickets](/assets/images/ZenDesk_UI_w_attachements.png)

Having accurate IT infrastructure information available is vital to any successful IT project and key for the continued success of just about any organization. Device42's auto-discovery keeps your infrastructure documentation up-to-date, and with the Zendesk connector, your helpdesk can now directly leverage this accurate IT infrastructure information. _With the Device42 - ZenDesk integration, everything your IT staff needs is now right at their fingertips!_
