---
title: "Data Reset Tool"
sidebar_position: 9
---

## Data Reset Tool - Clear All Devices from Device42

If you're looking to wipe your Device42 instance clean, grab the Python script available on [Github](https://github.com/device42/ResetDevice42Data) and **use it to remove all devices from your Device42 MA.**

To use the tool, simply open it in your favorite text editor (ours are [Notepad++](https://notepad-plus-plus.org/) & [Atom](https://www.Atom.io)), and edit the Device42 URL to point at your instance. Update the username and password fields with credentials for your instance, and save.

You can then run the script on any computer with Python 3.7+ installed.

* * *

**Note:** The Device42 reset script does not currently clear subnets from the application, they will need to manually be cleared.

:::warning
**This script will clear all devices from Device42**. [Make a backup](appliance-manager/setting-up-backup-device42-appliance-manager.mdx) first if you're even a little bit unsure!
:::