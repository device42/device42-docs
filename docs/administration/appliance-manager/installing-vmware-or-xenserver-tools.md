---
title: "Installing VMWare or Xenserver tools"
sidebar_position: 13
---

You can install VMware or XenServer tools in the Device42 appliance. Begin by downloading the ISO file from the vendor.

Download the VMware Tools ISO file from the VMware website. See the [VMware documentation](https://docs.vmware.com/en/VMware-Workstation-Player-for-Windows/17.0/com.vmware.player.win.using.doc/GUID-D9B1B1D1-A81D-4B1C-AE9C-35EEFAAE2D41.html) for more information.

If you're using XenServer, download the VM Tools from the [XenSever Downloads page](https://www.xenserver.com/downloads).

Then proceed as follows:

1. Add a **CD/DVD Drive** as additional hardware. The default shipped VM doesn't have this.
   
   ![](/assets/images/wpid4571-add-cd.png)

2. Choose the option to install the tools.
    This is an example from the VMware ESX server:

    ![](/assets/images/install-tools.png)

3. Log in to the Device42 VM console and use option **9**  to install the update. If it doesn't recognize the CD/DVD, please reboot and try step 2 and 3 again.

    ![](/assets/images/wpid4572-device42-install-vmware-tools.png)
