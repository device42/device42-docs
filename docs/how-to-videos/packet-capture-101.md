---
title: "Packet Capture 101"
sidebar_position: 16
---

## Intro to D42 Packet Capture

**If you'd prefer written instructions for Packet Capture, see [the Packet Capture documentation page here.](auto-discovery/packet-capture.md)**

With Device42 Packet Capture you can discover service communications happening in real-time for any service listeners known to Device42. By listening directly to all network communications, you'll easily discover communications that happen infrequently.

<script src="https://fast.wistia.com/embed/medias/pz35w51w8t.jsonp" async></script>

<script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>

<script src="https://fast.wistia.com/embed/medias/pz35w51w8t/swatch" async></script>
* * *

## Packet Capture Prerequisites

- A functioning Device42 MA (destination for captured data), running v16.00.00+ or newer.
- Network communication allowed from the machine you’ll be capturing packets on to your Device42 MA.
- An active network adapter connected to the target traffic capture network.
- If using Windows, a WinPcap-compatible library (like npcap) must be installed – Be sure to select the option “install in API-Compatible mode”during setup!
- If using Linux, libpcap must be installed to support packet capture.
- OPTIONAL: Promiscuous mode \[aka ‘monitor’ mode\] enabled for the network and/or the interface of interest.

  You can also watch [Packet Capture 101 on on YouTube](https://www.youtube.com/watch?v=y1U37Xc9V2k).
