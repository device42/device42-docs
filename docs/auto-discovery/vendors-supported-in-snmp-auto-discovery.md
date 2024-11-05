---
title: "Vendors Supported in SNMP Autodiscovery"
sidebar_position: 35
---

Device42 aims to support as many vendors as possible for SNMP-based discovery. We have verified support for the following list of vendors:

|              |             |              |             |            |
|--------------|-------------|--------------|-------------|------------|
| 3Com         | CyberPower  | Lancope      | Ricoh       | Viptela    |
| A10 Networks | Cyclades    | Lantronix    | Riedo       | VMware     |
| Acme Packet  | D-Link      | Lenovo       | Riello      | WatchGuard |
| ADTRAN       | DataDomain  | Liebert      | Rittal      | WTI        |
| ADVA         | Dell        | LoadMaster   | Riverbed    | Xcelor     |
| Aerohive     | Delta       | Meinberg     | RSA         | Xirrus     |
| Alcatel      | Digi        | Mellanox     | Rubrik      | Xsigo      |
| Allied       | DigiPower   | MikroTik     | Ruckus      | Yamaha     |
| APC          | Eaton       | Motivair     | Ruijie      | Zyxel      |
| Apcon        | EfficientIP | Nasuni       | SafeNet     |            |
| Apresia      | Eltek       | NEC          | Samsung     |            |
| APT          | Endace      | NetApp       | Sentry      |            |
| Arbor        | Enlogic     | NETGEAR      | SevenSols   |            |
| Arista       | Enterasys   | NetScreen    | Siklu       |            |
| Aruba        | EqualLogic  | Nexans       | Silver Peak |            |
| Asante       | Ewave       | Nimble       | Socomec     |            |
| Aten         | ExaLink     | NMS          | SonicWall   |            |
| Avaya        | Exinda      | Nokia        | Sonus       |            |
| Avocent      | Extreme     | Nortel       | Sophos      |            |
| AVTECH       | Extricom    | Occam        | Spectracom  |            |
| Barracuda    | F5          | OneAccess    | StoneSoft   |            |
| Baytech      | FireEye     | Opengear     | Stormshield |            |
| BlackBox     | Force10     | Oracle       | Sun         |            |
| Bluecoat     | ForeScout   | PacketFront  | Supermicro  |            |
| Bluenet      | Fortinet    | Palo Alto    | Symmetricom |            |
| Bluesocket   | Foundry     | Panduit      | Synology    |            |
| Broadcom     | FS          | Pica8        | Talari      |            |
| Brocade      | Fujitsu     | Pluribus     | Tegile      |            |
| Calix        | Geist       | Powertek     | Teradici    |            |
| Casa         | Gigamon     | Pulse Secure | Thales      |            |
| CheckPoint   | H3C         | Pure Storage | Tieline     |            |
| Ciena        | Harmonic    | QLogic       | Toshiba     |            |
| Cisco        | Hitachi     | QNAP         | TP-Link     |            |
| Citrix       | HP          | Quanta       | Trapeze     |            |
| Clavister    | Huawei      | Racktivity   | Trend Micro |            |
| Clever-Power | IBM         | RAD          | TrendPoint  |            |
| Colubris     | Infoblox    | Radware      | Tripp Lite  |            |
| Corvil       | Iolan       | Raritan      | Ubiquiti    |            |
| CPI          | Isilon      | Ricoh        | Uplogix     |            |
| Cradlepoint  | Juniper     | Riedo        | UTP         |            |

:::note
This list is not all-inclusive; it's intended to give you a sense of the vendors that we support.

Even if a vendor is not listed, discovery usually still brings in some information, even if the specific hardware has not been added yet.
:::

## Adding Support for Unverified Vendors

If you come across a device that isn't fully discovered or if you have hardware you want to see supported, you can [generate an SNMP walk of the device](administration/appliance-manager/collecting-snmpwalk-output-for-troubleshooting.md) by navigating to **Application > Generate SNMP Template** in your Appliance Manager.

Fill out the form and attach your MIB Files. Once this processes, select the standard data you want added. Once you've completed this form, it will be routed to our engineers for inclusion!
