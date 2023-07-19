---
title: "Setup Alerts and Notifications"
sidebar_position: 16
---

## Alerts and Notifications

You can set up Device42 Alerts to notify you about application, asset, software, discovery, and other conditions that affect your IT environment. Alerts can generate notifications within the Device42 UI or be integrated with external systems such as PagerDuty, Opsgenie, etc.

As of v16.14.00, Device42 has refined and improved its Alerts functionality.

## Set Up Alerts

To create an alert, select _Analytics > Setup Alerts_ from the Device42 menu bar and then click _Add Alert_ on the Select Alert to view page.

![](/assets/images/WEB-219_Alerts_Add-Alert-page.jpg)

- Enter a **Name** for the alert, and then select the **Rule Type** for the alert. Each Rule Type has associated Triggers, which define the conditions that will generate an alert.
- Select the **Trigger** you want for the Rule Type you selected.
- Select the **Alert Type**.
    - If you select **D42 Notification**, select or add the **Escalation Profile** to use for the alert. You use Escalation Profiles to set up email notification escalation tiers. Select _Tools > Admins & Permissions > Escalation Profiles_ to add or edit escalation profiles.
    - If you select **Alert Integration**, select or add the alert integration (for example, PagerDuty, Opsgenie, etc.) to use for the alert. Select _Tools > Integrations > External Integrations_ to view or add external integrations. Also see [https://www.device42.com/integrations/](https://www.device42.com/integrations/) for more information about Device42 integrations.

As you construct your alert, Device42 displays the alert definition based on the options you select or enter. The example below shows an Operating System Count alert that sends a notification to the Alert Group 1 escalation profile.

![](/assets/images/WEB-219_Alerts_Contructed-OS-alert-example.jpg)

 

Depending on the alert Rule Type you select, you may also see an **Apply To:** option that you use to select the objects you want to apply the alert to. Use the _Available objects_ list on the left to select the objects you want to add to the _Chosen objects_ list on the right.

**Additional Options**

- **Priority** — Critical, High Priority, Medium Priority, Low Priority
- **Resend Notification** — Amount of time (in seconds) to wait before sending an email notification for the alert. Leave this field blank to send the email only once.
- **Seconds Before Action** — Amount of time (in seconds) that the alert condition (the trigger) exists before the Device42 generates the alert.
- **Job Interval Factor Before Action** — (Displayed for specific power alerts in place of Seconds Before Action.) Trigger the action only if the condition persists for the Job Interval Factor times the polling rate for associated jobs. Default value is 1.

![](/assets/images/D42-26290_alerts-job-interval.jpg)

- **Notes** — Any notes about the alert.
- **Notification Template** — Text fields you can use to create templates for the Subject and Message of the alert email.

When you are done, click **Save** at the bottom of the page to save the alert.

![](/assets/images/WEB-219_Alerts_Add-Alert-additional-options.jpg)

### Alert Rule Types and Triggers

**Business Application**

- New Affinity Group Dependency Found
- Affinity Group Dependency Removed

**CRAC (Computer Room Air Conditioner)**

- Inlet Temperature
- Return Temperature

**Discovery**

- Scan Alerts
- Power Circuit Mismatch
- Job failed to start, because it's still running
- Job failed to start, because system experienced a problem
- Job failed to start on time

**Operating System**

- Count
- License Percent used

**Part Model**

- Number Available
- % Available

**Power Circuit**

- Avg Watts
- Avg Current
- Avg Volts

**Power Unit**

- Is Offline
- Is Not Responding
- Bank Power (A)
- Bank % of Rated Power (A)
- Infeed Power (A)
- Infeed % of Rated Power (A)
- Sensor humidity (percentage)
- Sensor temperature (fahrenheit)
- Sensor temperature (celsius)

**Software**

- Count
- License Percent Used
- Prohibited Software Installed

**Subnet**

- Percent Used

**System**

- Days Until License Expiration
- Percent of Licensed devices
- Percent of Licensed IPs
- Any Remote Collector Disconnected
- Any WDS Disconnected

**UPS**

- Battery % Capacity Remaining
- Battery Time Remaining
- Actual Voltage
- Actual Current
- Load %
- A Battery is Low
- A Battery is Depleted
- A Battery Needs Replacing
- A Battery Has a Fault

## Notifications

If you select _D42 Notification_ as the _Alert Type_ when you create an alert, Device42 generates a notification when the alert condition triggers the alert. Device42 adds all notifications to the Notifications page.

The Device42 Dashboard now includes two links – _My Notifications_ and _All Notifications_ – to the Notifications page, and  there is a bell icon in the menu bar that animates when you receive new notifications. You can hover over the icon to see a list of recent notifications or jump the the Notifications page.

You can also select _Analytics > Notifications_ from the menu bar to go to the Notifications page.

![](/assets/images/WEB-219_Alerts_Banner-Bell-icon-1.jpg)

 

The page displays notifications for all triggered alerts whose _Alert Type_ is _Device42 Notification_. Click **My Notifications** or **All Notifications** to see the notification lists.

![](/assets/images/WEB-219_Alerts_Notifications-page-1.jpg)

Select the alerts you want and select the **Action** drop-down menu to perform the following action on the notifications

- **Delete selected Notifications** – deletes the notification. If the condition reoccurs, Device42 generates a new notification.
- **Export selected items to CSV** – create a notification CSV.
- **Acknowledge Alerts** – acknowledge the alert that generated the notification. Any alert recipient can acknowledge alerts.
- **Clear Conditions** – clear the alert condition that generated the notification. This indicates that the condition has been fixed and Device42 will generate a new alert and notification if the condition reoccurs. Note that only one notification is sent until the condition is marked as cleared.

![](/assets/images/WEB-219_Alerts_Notifications-cleared-acknowledged.jpg)

## Customizing Alerts with Notification Variables

The new alerts engine offers powerful new alerting variables that let you configure custom alert emails that can include useful data for each Alert Rule Type Device42 supports the following variables for embedding within alert emails when creating alerts.

You can use all the tags in both the alert message and subject line:

**Alert %(sensor\_rule\_name)s triggered on RC# %(remote\_collector\_id)s**

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Rule Type</span></td><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Trigger</span></td><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">parameters supported</span></td></tr><tr><td rowspan="2" valign="top"><p align="center"><span style="color: #000000; font-family: Calibri; font-size: medium;">Business Application</span></p></td><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">New Affinity Group Dependency Found</span></td><td rowspan="2" valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">%(from_model)s - from_model %(to_model)s - to_model the device by default (for now we support only device-to-device connections in Business Apps) %(from_name)s - from_name %(to_name)s - to_name- the name of object (device) %(business_app)s - the Business App name</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Affinity Group Dependency Removed</span></td></tr><tr><td rowspan="2" valign="top"><p align="center"><span style="color: #000000; font-family: Calibri; font-size: medium;">CRAC</span></p></td><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Inlet Temperature</span></td><td rowspan="2" valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">%(sensor_rule_id)s – Alert Rule ID %(sensor_rule_name)s – Alert Rule Name %(device_type)s – Device / PDU %(device_name)s – Device name %(device_id)s – Device ID %(device_ip)s – Device IP %(element_type)s – Infeed, output, bank, etc. %(element_name)s – Name if available, if not – ID %(element_id)s – Element ID %(measure)s – Current/power, status, etc. %(value)s – Value that triggered action %(units)s – W(atts), Amps, etc. %(status)s – Critcal/OK %(remote_collector_id)s – RC ID %(remote_collector_name)s – RC Name %(date)s – Date when alert was triggered</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Return Temperature</span></td></tr><tr><td rowspan="5" valign="top"><p align="center"><span style="color: #000000; font-family: Calibri; font-size: medium;">Discovery</span></p></td><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Scan Alerts</span></td><td valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">%(scan_type)s %(interval)s %(scanned_num)s %(failed_num)s %(failed_auth_num)s</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Power Circuit Mismatch</span></td><td valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">%(discovered_circuits_num)s %(current_circuits_num)s %(bcpm_name)s</span></td></tr><tr><td valign="top"><span style="color: #fb0007; font-family: Calibri; font-size: medium;">Job failed to start,because it's still running</span></td><td valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">%(task_type)s %(job_name)s - may be present if name of task is present during internal processing %(rc_id)s %(job_id)s %(additional_info)s -displays additional error info, but only if available (not guaranteed to be there)</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Job failed to start,because system experienced a problem</span></td><td valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">%(task_type)s %(rc_id)s %(job_id)s %(additional_info)s - displays additional error info, but only if available (not guaranteed to be there)</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Job failed to start ontime</span></td><td valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">%(job_name)s %(job_id)s</span></td></tr><tr><td rowspan="2" valign="top"><p align="center"><span style="color: #000000; font-family: Calibri; font-size: medium;">Operating System</span></p></td><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Count</span></td><td valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">%(str_item_type)s - 'Software' or 'OS' %(value)s - real current value %(element_name)s -Software name %(license_key)s %(operator)s - from Alert %(trigger_value)s - value from Alert</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">License Percent Used</span></td><td valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">%(str_item_type)s - 'Software' or 'OS' %(value)s - real current value %(element_name)s -Software name %(license_key)s %(operator)s - from Alert %(trigger_value)s - value from Alert</span></td></tr><tr><td rowspan="2" valign="top"><p align="center"><span style="color: #000000; font-family: Calibri; font-size: medium;">Part Model</span></p></td><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Number Available</span></td><td valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">%(type)s - type name %(prop_name)s - name or model # %(name)s- value of name or model # %(value) - current value %(operator) - alert condition operator %(val)s- alert condition value</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">% Available</span></td><td valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">%(type)s - type name %(prop_name)s - name or model # %(name)s- value of name or model # %(value) - current value %(operator) - alert condition operator %(val)s- alert condition value</span></td></tr><tr><td rowspan="3" valign="top"><p align="center"><span style="color: #000000; font-family: Calibri; font-size: medium;">Power Circuit<span class="Apple-converted-space">&nbsp;</span></span></p></td><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Avg Watts</span></td><td rowspan="3" valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">%(sensor_rule_id)s – Alert Rule ID %(sensor_rule_name)s – Alert Rule Name %(device_type)s – Device / PDU %(device_name)s – Device name %(device_id)s – Device ID %(device_ip)s – Device IP %(element_type)s – Infeed, output, bank, etc. %(element_name)s – Name if available, if not – ID %(element_id)s – Element ID %(measure)s – Current/power, status, etc. %(value)s – Value that triggered action %(units)s – W(atts), Amps, etc. %(status)s – Critcal/OK %(remote_collector_id)s – RC ID %(remote_collector_name)s – RC Name %(date)s – Date when alert was triggered</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Avg Currents</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Avg Volts</span></td></tr><tr><td rowspan="11" valign="top"><p align="center"><span style="color: #000000; font-family: Calibri; font-size: medium;">Power Unit</span></p></td><td valign="top"><span style="color: #e22c29; font-family: Calibri; font-size: medium;">Is Offline</span></td><td rowspan="11" valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">%(sensor_rule_id)s – Alert Rule ID %(sensor_rule_name)s – Alert Rule Name %(device_type)s – Device / PDU %(device_name)s – Device name %(device_id)s – Device ID %(device_ip)s – Device IP %(element_type)s – Infeed, output, bank, etc. %(element_name)s – Name if available, if not – ID %(element_id)s – Element ID %(measure)s – Current/power, status, etc. %(value)s – Value that triggered action %(units)s – W(atts), Amps, etc. %(status)s – Critcal/OK %(remote_collector_id)s – RC ID %(remote_collector_name)s – RC Name %(date)s – Date when alert was triggered</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Is Not Responding</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Bank Power(A)</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Bank % of Rated Power(A)</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Infeed Power()</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Infeed % of Rated Power()</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Infeed Power(A)</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Infeed % of Rated Power(A)</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Sensor humidity(percentage)</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Sensor temperature (fahrenheit)</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Sensor temperature (celsius)</span></td></tr><tr><td rowspan="3" valign="top"><p align="center"><span style="color: #000000; font-family: Calibri; font-size: medium;">Software</span></p></td><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Count</span></td><td valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">%(str_item_type)s - 'Software' or 'OS' %(value)s - real current value %(element_name)s -Software name %(license_key)s %(operator)s - from Alert %(trigger_value)s - value from Alert</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">License Percent Used</span></td><td valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">%(str_item_type)s - 'Software' or 'OS' %(value)s - real current value %(element_name)s -Software name %(license_key)s %(operator)s - from Alert %(trigger_value)s - value from Alert</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Prohibited Software Installed</span></td><td valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">%(software_name)s %(device_name)s %(user_name)s</span></td></tr><tr><td valign="top"><p align="center"><span style="color: #000000; font-family: Calibri; font-size: medium;">Subnet</span></p></td><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Persent used</span></td><td valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">subnet name - %(subnet_name)s usage percent - %(percent_used)s</span></td></tr><tr><td rowspan="5" valign="top"><p align="center"><span style="color: #000000; font-family: Calibri; font-size: medium;">System</span></p></td><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Days Until License Expiration</span></td><td valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">%(days_to_expiration)</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Percent of Licensed devices</span></td><td valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">%(device_used_percentage)s %(device_used)s %(total_device_licensed)</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Percent of Licensed Ips</span></td><td valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">%(ip_used_percentage)s %(ip_used)s %(total_ip_licensed)s</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Any Remote Collector Disconnected</span></td><td valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">%(remote_collector_name)s</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Any WDS Disconnected</span></td><td valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">%(wds_ip)s</span></td></tr><tr><td rowspan="9" valign="top"><p align="center"><span style="color: #000000; font-family: Calibri; font-size: medium;">UPS</span></p></td><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Battery % Capacity Remaining</span></td><td rowspan="9" valign="top"><span style="color: #000000; font-family: Arial; font-size: small;">%(sensor_rule_id)s – Alert Rule ID %(sensor_rule_name)s – Alert Rule Name %(device_type)s – Device / PDU %(device_name)s – Device name %(device_id)s – Device ID %(device_ip)s – Device IP %(element_type)s – Infeed, output, bank, etc. %(element_name)s – Name if available, if not – ID %(element_id)s – Element ID %(measure)s – Current/power, status, etc. %(value)s – Value that triggered action %(units)s – W(atts), Amps, etc. %(status)s – Critcal/OK %(remote_collector_id)s – RC ID %(remote_collector_name)s – RC Name %(date)s – Date when alert was triggered</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Battery Time Remaining</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Actual Voltage</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Actual Current</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">Load %</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">A Battery is Low</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">A Battery is Depleted</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">A Battery Needs Replacing</span></td></tr><tr><td valign="top"><span style="color: #000000; font-family: Calibri; font-size: medium;">A Battery has a Fault</span></td></tr></tbody></table>
