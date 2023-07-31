---
title: "Xen/KVM - Import disk Alternate Install"
sidebar_position: 14
---

**NOTE:** These are _SPECIAL CASE_ installation instructions for installing the Device42 appliance on Xen or KVM based platforms if the import disk image option is missing. **Otherwise, please refer to [device42 xen/kvm install docs](getting_started/installation/installation-xen-or-kvm-using-virt-manager.md)!**

### Download and Unzip with bunzip2

![Download and bunzip2](/assets/images/wpid2482-Download_and_bunzip2.png)

The raw image for Xen/KVM has been compressed using bzip2. Once you get the file on kvm host, issue bunzip2 to uncompress the file.

### Install - Create a new VM

![Install](/assets/images/wpid2483-Install.png)

Once you unzip the downloaded raw image, create a new virtual machine. Choose Network Boot(we will add the disk later). Please make sure you don't have some sort of automated network boot enabled for this machine. You will not see option to Import the existing disk image.

### Choosing OS and version

![Choosing OS and version](/assets/images/wpid2480-Choosing_OS_and_version.png)

Choose Linux & Ubuntu 14.04 for Operating system type and version. If you don't see the option for 14.04, choose the latest version available (as shown above).

![](/assets/images/wpid2484-media_1326264722468.png)

Choose 8 GB RAM and 2 vCPU _(minimum recommended for production use)_.

### Choose disk (bunzipped file)

![Choose disk(bunzipped file)](/assets/images/wpid2479-Choose_disk_bunzipped_file_.png)

![](/assets/images/wpid2487-media_1352976855381.png)

Choose your virtualization type from Advanced options and i686 as architecture and you are ready to go.

### Disable network boot

![Disable network boot](/assets/images/wpid2481-Disable_network_boot.png)

Details > Boot Options > Uncheck Network(PXE).

### Finishing appliance setup and logging in.

- Power on, if not already on.
- Login to console using device42/adm!nd42(on 32-bit appliances, it is ubuntu/adm!nd42). You can change the password with option 11.
- On the console, configure the IP address \[Please use a STATIC IP for all production Device42 VMs to avoid connectivity issues\].
- Optional: Create a DNS entry for the new IP address for new virtual appliance.
- Point your browser to https://FQDN(Fully Qualified Domain Name) or IP address and you are ready to go.
- Default username is admin and password is adm!nd42, please change that as soon as you login.

![](/assets/images/media_1418268381909.png)

default login : device42 default password: adm!nd42

You can change the password with option 11 below.

### Above steps in images:

![Above steps in images:](/assets/images/wpid2478-Above_steps_in_images.png)

Configure Networking.

![](/assets/images/wpid2485-media_1338939487714.png)

![](/assets/images/wpid2486-media_1338939501693.png)

The default username/password is admin/adm!nd42

Make sure to change it after you login!

Enjoy!
