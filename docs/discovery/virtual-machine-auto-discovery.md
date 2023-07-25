---
title: "VM (Virtual Machine) Autodiscovery"
sidebar_position: 36
---

VMWare platforms e.g. ESX and ESXi, Citrix XenServer, HyperV, oVirt, Redhat, KVM/libvirt, OpenVZ, AIX HMC,  Nutanix Prism, Nutanix Prism Central, Docker, and LXC virtualization platforms can all be discovered directly from the Device42 UI.

While configuring the job, you may elect to have your primary Device42 appliance directly perform the discovery, or you may designate a [remote collector](remote-collector-rc) to run each task.

## Setting up VMware/Citrix Xenserver/oVirt/KVM/LXC autodiscovery

![](/assets/images/D42-24150_windows-hyper-v-ad-platforms.png)

From the Device42 main menu, _Discovery > Hypervisors/\*nix/Windows_ you can add a Hypervisor, UNIX/Linux (\*nix), or a Windows discovery job that will connect to your hosts and/or guests gathering physical and VM details. Options are as follows:

### Discovery Options - Hypervisor / \*nix / Windows

**Job name** : A name of your choosing to identify the autodiscovery job.

**Remote Collector** : Optionally, run the discovery job from the chosen remote collector instead of the main appliance.

**Platform** : Choose Vmware, Citrix XenServer, oVirt Server, KVM/libvirt, Docker, LXC, etc.

**URL Prefix:** : This will be https in most cases. But, if you have changed it, you have the option to switch it to http.

**Server** : This is the FQDN or IP of the vCenter server or the ESX server. If using FQDN, device42 should be setup for DNS resolution(vm console, option 1)

**Port** : This will be 443 by default. Only change if you have changed it.

**Username/Password:** Specify username & PW (account credentials) with permission to view all the hosts and virtual machine inventory info. For oVirt, the username is most probably in the format of username@domain, e.g. admin@internal

**Use Domain Server:** n/a for Hypervisor/VMware Discovery - Discover servers on AD/LDAP server

**Please do _not_ set up an autodiscovery / scan using critical \[production\] account credentials! Please create a separate, dedicated account to use _only_ for discovery**

Doing so, depending on permissions granted & configured password policies could result in account lock-out, therefore causing an otherwise completely avoidable outage.

**Strip domain suffix:** Checking this will strip domain suffix from host and VM names.

**Give precendence to hostname:** Match discovered instances to existing inventory based on Serial/UUID and overwrite existing discovered device name.

**Ignore Host OS Info:** Do not discover host operating system information.

**Allow hosts with duplicate serials:** Create two VMs (don't merge) hosts that have the same serial #.

**Ignore host serial #:** Do not discover host serial #.

**Ignore host UUID #:** Do not discover host UUID #.

**Toggle service level on vm power state** : If a VM is powered off, checking this will mark that virtual machine as "Not in Service".

**Get Guest OS Info** : Grabs the guest OS information for a VM from VMware. This is not as detailed as machine-level WMI/SSH discovery.

**Ignore Guest UUID:** Do not discover guest UUID #.

**Prepend VM Host Name:** Prepend (add) VMhost name to front of discovered guest name for each discovered VM.

**Ignore Powered Off VMs:** Do not discover Powered Off VMs.

**Discover vCloud:** Discover vCloud instances (if using vCloud connector for vSphere, vRealize, etc.). This will create custom fields for any VMWare tags as well.

**Debug Level** : Debug On for extra debug info, useful for a support ticket.

**VM name to use**: if the virtual machine has a different name on the host and as found from the tools, you can choose which name should be used while adding/updating the VM in device42. Available for VMware only for now.

**Add multiple VM names as alias**: If VM name on the host and as found from tools don't match, you can add the second name as device alias by checking this option. Available for VMware only for now.

**Track VM name change** : Added in v5.8.0 to track any changes to the VM name. This applies if the name is changed on an existing VM (verified by UUID). If the new name already exists in the system - it will be ignored.

**Add first discovered disk for VM:** Add the first discovered vHDD to the device properties (default is false). Might not be accurate for your env - use with care!

**Action for VM not found** : You can choose various actions for a VM not found.

_Remove Host Association_ – removes the host association.  
_Change Service Level_ – removes the host association and sets service level.  
_Delete VM_ – deletes this device.  
_Do Nothing_ – no action.

**Last status** : Last run task status.

**Run report:** This will record what has changed in the last task.

**Schedule for autodiscovery:** You can schedule the discovery to run at certain times.

![](/assets/images/D42-24150_windows-hyper-v-ad-addl-options.png)

* * *

## Run a VMware/Hypervisor discovery

Upon save(if you haven't scheduled the discovery), you can run it from the list, view, or edit page using the "Run now" button or link.

### Scheduling Hypervisor Autodiscovery

![Scheduling vServer auto-discovery](/assets/images/schedule_vserver_discovery-2018v15.PNG)

You can schedule the autodiscovery to run on a recurring basis. Specifically, you can choose to have it run on certain days of the week and at a specific time each day!

### "Action for VM not found" details -- What happens to VM that has been deleted from a host?

![What happens to VM that has been deleted from a host?](/assets/images/action_vm_not_found-2018v15.PNG)

This section allows you to choose one of three actions for a stale \[deleted / no longer discovered\] VM.

- **Remove Host Association**. This is default. Host association is removed.
- **Change Service Level**. You can change the service level for stale VMs. This way it is easy to filter and report on these.
- **Delete VM**. You can choose to outright delete the VM.

**Service Level for VM not found:** Assign chosen service level to any existing VMs that no longer exist.  
**Object Category for discovered devices:** User-selectable object category to assign to uncategorized discovered devices.

- **Overwrite existing object categories:** If selected, overwrite existing object categories with selected category.

## Run Now or Schedule

![](/assets/images/image-700x115.png)

Select **Run Now** from the list page to run the job right away.

![](/assets/images/AD_Blade-Discovery-Run-Schedule.png)

Select **Add another Autodiscovery Schedule** from the when editing the job to create a run schedule for the job.

A note on autodiscovery scheduling behavior: newly created jobs will not run on the first day they are created, to prevent an unintended large amount of jobs from running initially. If you would like to run a job after its initial creation, simply select the "Run Now" button next to the job after creation.

* * *

## Under the hood

Device42 uses VMware APIs and the open source library [pyvmomi](https://github.com/vmware/pyvmomi).
