---
title: "Adding ATSs"
sidebar_position: 1
---

### Adding an ATS

Intelligent ATSs will be autodiscovered through power autodiscovery in Device42. You will now be able to see incoming PDU connections to ATSs and visualize your whole power chain from UPS to PDU to ATS to device.

### Creating an ATS

You can create an ATS in Device42 by going to _Infrastructure > Power Units > Power Units_. Click _Add Power Unit_ at the top right of the Power Units list page. On the new screen, name your ATS and select ATS as power unit type.

### Connecting ATSs to PDUs

To connect an ATS to a PDU, you do so from the PDU page. Browse to the PDU you would like to connect to the ATS and in Edit mode change the _Content Type_ of the port you are connecting to _Power Unit,_ and then using the Object ID magnifying glass, select the ATS you would like to connect to the PDU.

![](/assets/images/WEB-599_ats-1.png)

Once you click _Save_, the connection will be displayed as seen below.

![](/assets/images/WEB-599_ats-2.png)

![](/assets/images/WEB-599_ats-3.png)

### Viewing Power Connections

After the connections have been made from devices to the ATS and from the PDUs to the ATS you will now be able to see power connectivity maps allowing you to visualize these connections.

1. Navigate to _Infrastructure > Power Units_.
2. Select the PDU that you would like to see connections for.
3. Click the _Connections_ link in the ellipsis menu at the top right.

![](/assets/images/WEB-599_ats-4-700x395.png)

### Mapping ATS's to a Device

If you want to track more details about an ATS (e.g., serial number, asset number, IP address, purchase information, life cycle management) – an ATS can be mapped to a device.

How-to:

1. Create a Device with Type = Physical – it is recommended (but not required) to give the device the same name as the ATS it will be mapped to.
2. Select Physical Subtype = ATS – hardware is not needed. All other fields are optional.
3. Save the new device.
4. Edit the ATS and with the Device Mapping option, choose the device (as created in steps 1-3).
5. Save the changes to the ATS.
