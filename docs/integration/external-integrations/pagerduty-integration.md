---
title: "PagerDuty Integration"
sidebar_position: 22
---

## PagerDuty + Device42 Integration Benefits

- **_Notify on-call responders based on alerts sent from Device42._**
- **_Customize alerts sent from Device42 using a wide range of user configurable options. These alert types include, but are not limited to, the following:_**
    - _Device42 license_ – days to license expiration
    - _Individual Power Unit Sensor(s)_ – temperature / humidity rules for selected sensors
    - _Any Power Unit Sensor_ – temperature / humidity rules for any sensor
    - _Individual Power Unit(s) Infeed_ – power threshold rules for selected power unit infeeds
    - _Any Power Unit(s) Infeed_ – power threshold rules for any power unit infeed
    - _Power Unit Offline_ – any power unit gateway is offline
    - _Individual Bank_ **–** power threshold rules for selected PDU bank(s)
    - _Any Bank_ **–** power threshold rules for any PDU bank
    - _Any UPS_ **–** state / threshold rules (battery, voltage, current, load) for any UPS
    - _Individual Software Count_ **–** count / license percentage use for selected software / OS(s)
    - _Any Software Count_ **–** count / license percentage use for any software / OS
    - _Prohibited Software_ **–** when any prohibited is discovered
    - _Individual Operating System Count_ **–** count / license percentage use for selected OS(s)
    - _Any Operating System Count_ **–** count / license percentage use for any OS
    - _Individual Subnet_ **–** percentage use for individual subnet(s)
    - _Any Subnet_ **–** percentage use for any subnet
    - _Individual Part Model Count_ **–** number / percentage available for selected part model(s)
    - _Any Part Model Count_ – number / percentage available for selected part model(s)

## How it Works

- **_Device42 metrics that fall outside of a designated range or meet a given criteria will send an event to a service in PagerDuty._**

## Requirements

- **_The Device42 PagerDuty External Integration requires Device42 version 16.14.00 or greater_** **_._**
- **_Network access to one of the Device42 Cloud Connectors: connect.device42.net (US) or connect-eu.device42.net (EU)_**

## Support

If you need help with this integration, please contact **_Device42 Support_** using any of our listed contact methods.

- **Hours of Operation:** Monday-Friday, 9AM – 6PM EST
- **Phone:** 1 (844) 424-2422
- **Email:** [support@device42.com](mailto:support@device42.com)
- **Website:** https://support.device42.com

## Integration Walkthrough

### In PagerDuty

**Integrating with a PagerDuty Service**

1. From the **Configuration** menu, select **Services**.
2. There are two ways to add an integration to a service:
    - **If adding the integration to an existing service**: Click the **name** of the service, open the **Integrations** tab, then select the **New Integration** button.
    - **If you are creating a new service for your integration**: Please read the PagerDuty documentation in section [Configuring Services and Integrations](https://support.pagerduty.com/docs/services-and-integrations#section-configuring-services-and-integrations) and follow the steps outlined in the [Create a New Service](https://support.pagerduty.com/docs/services-and-integrations#section-create-a-new-service) section, selecting **Use our API directly** as the **Integration Type** in step 4. Continue with the **In** **Device42** section (below) once you have finished these steps.
3. Enter an **Integration Name** (e.g., **Device42**\-**External-Alerts**) and select **Use our API directly** from the **Integration Type** menu.
4. Click the **Add Integration** button to save your new integration. You will be redirected to the Integrations tab for your service.
5. An **Integration Key** will be generated on this screen. Keep this key saved in a safe place, as it will be used when you configure the integration with **_Device42_** in the next section.

![](/assets/images/PagerDuty_1.png)

### In Device42

**Configure PagerDuty External Integration**

![](/assets/images/PagerDuty_D42_2.png)

1. From the Device42 Dashboard, select **Tools > Settings > Global Settings**.
2. Select the **Edit** button on the top right of the page.
3. Scroll to the bottom of the form to the section labeled **External Integration Settings**.
4. Fill in the information in this section starting with the **D42 URL for SaaS apps.** This field will contain the URL of your Device42 instance (e.g., https://192.168.92.130/).
5. Fill in the **Company Name** and **Email**. The email entered will be used as a contact for any integration-related incidents.
6. Select the **USA** option from the **Cloud Connector** drop down list if this is the region closest to you, otherwise select **Europe (ServiceNow Only)**.
7. Select the **Save** button on the bottom right of the page; the page will reload.
8. Scroll back down to the **External Integration Settings** section and ensure that a **Device42 GUID** is  displayed.
9. From the Device42 Dashboard, select **Tools > Integrations > External Integrations**.
10. Select the **Add External Integration** button on the top right of the screen.
11. Enter the PagerDuty URL that will be used for the external integration in the **URL**  field.
12. Select **PagerDuty** from the **Type** drop down field.
13. Select the **magnifying glass** in the **Token** field; a new window will open.
14. In the new window, select the **Add Password** button located on the top right.
15. Enter a **Username** (e.g., **PagerDuty-External-Alerts**). This username will act as an alias and be attached to the PagerDuty integration key for future reference.
16. Paste the PagerDuty **Integration Key**  in the **Password**  field ensuring that there are no trailing white spaces or new line characters.
17. Select the **Save** button on the bottom right of the window. The window will close and the **Token** field on the previous window will be populated with a numerical ID that corresponds to the password that you created.
    - If the **Token** field does not populate with an ID, re-select the magnifying glass and select the password from the displayed list.
18. Select the **Save**  button on the bottom right of the Add External Integration Form.

![](/assets/images/PagerDuty_D42_3.png)

**Configure Alert**

You need to configure a Device42 alert to use the PagerDuty external integration to route the alert message to PagerDuty. The following steps will configure a prohibited software alert, but any type of alert can be used with the PagerDuty external integration and would have similar steps.

![](/assets/images/PagerDuty_D42_4_confiure-alert-1.png)

1. From the Device42 Dashboard, select **Reports > Setup Alerts**.
2. Select the **Add Alert** button on the top right of the screen.
3. Enter a **Name**.
4. Select **Rule Type**: **Software**.
5. Select **Trigger**: **Prohibited Software Installed.**
6. Select **Alert Type**: **Alert Integration**.
7. Select **Alert Integration**: **_PagerDuty URL._**
8. Select the **Save** button on the bottom right.
9. Configure software as prohibited.

![](/assets/images/PagerDuty_D42_5_sw-component.png)

- From the Device42 Dashboard, select **Apps > Software > Software Components**.
- Select the software component you want to set as prohibited.
- Select the **Edit** button on the top right.
- Select **Software Type**: **Prohibited**.
- Select the **Save** button on the bottom right.  This marks the software as prohibited and will trigger the alert created in the steps above.

When the alert message is triggered, an incident is reported in PagerDuty.

![](/assets/images/PagerDuty_D42_7_PD-window-1.png)

![](/assets/images/PagerDuty_D42_8_PD-window-2.png)

## How to Uninstall

#### In PagerDuty

1. Navigate to the **Configuration** menu and select **Services**.
2. Click on the **name** of the service you want to disable.
3. Click the **More** drop-down menu on the right side, click **Disable Service**, and click **Disable** on the confirmation dialog.

#### In Device42

1. From the Device42 Dashboard, navigate to **Tools > Integrations > External Integrations**.
2. On the External Integrations page, select the checkbox next to the PagerDuty integration you want to remove.
3. Navigate to the **Action** drop-down menu and select the **Delete with Detailed Confirmation** action.
4. Select the **Run the selected action** icon.
5. On the confirmation screen,  select **Yes, I’m sure**.
