---
title: "FAQ's"
---

Whether you're new to Device42 or a seasoned pro, this list of **Device42 frequently asked questions** probably has information you'll find useful. This list is updated pretty regularly, and contains a selection of the questions most often asked about Device42.

If you've just downloaded Device42 for the first time and are looking for help getting up and running, please refer to our [getting started guide](getstarted/index.md) if you're looking for help getting your instance up and running. The getting started guide is tailored to new users, specifically.

## How do I log into my Device42 instance?

With a default configuration, visit: `https://IP_or_fqdn_for_device42_vm` in your favorite web browser, and then log in by entering the following \[default\] credentials: Default user: `admin` Default pass: `adm!nd42`

## Which browser should I use?

Device42 recommends using the web browsers (or more recent versions) listed below.

- Chrome — 88.0.4324.150
- Edge — 88.0.705.63
- Firefox — 72.0.1
- Safari — 13.1.2 (13609.3.5.1.5)

## How do I get my current data into Device42?

**There are many ways to get your data into Device42**:

- [**Device42 Auto-discovery**](auto-discovery/index.md): D42 features a variety of autodiscovery methods, the best of which depends on your needs: SNMP network device discovery, VMware auto-discovery, ping sweep, Windows and Linux auto-discovery, and more; you may also use individual python/powershell scripts to customize & automate your discovery and/or inventory process. Read about the [recommended initial discovery sequence](auto-discovery/autodisc-best-practices.md) here, as well!
- [**Microsoft Excel / CSV (spreadsheet) import**:](integration/imports/index.md) _Tools > Imports/Exports (xls)_ has options for MS Excel spreadsheet import, including sample Excel sheets that will help you format your existing spread sheets to make bringing your existing data into Device42 as easy as possible.
- The [**Device42 Generic Import Tool**](https://www.device42.com/blog/2018/06/19/new-features-added-to-the-generic-import-tool/) is another way to import data from existing spreadsheets of just about any format, mapping fields as appropriate via the Device42 generic import tool. For manual spreadsheet import, see this [walkthrough on how to best format an existing spreadsheet for import into Device42.](getstarted/importing-data-from-existing-spreadsheets.md)
- [**RESTful APIs**](https://api.device42.com): Programatically automate your network documentation and/or leverage your asset data for scripts & automation! Add these to your regular work flow to leverage Device42 as single source of truth for systems such as provisioning and monitoring.
- [**API-based CSV Import**](integration/api-overview/importing-csv-files-into-d42-using-the-api-helper-utility.md): This API helper utility is perfect if you aren't feeling the Excel import option _(or for any other reason!)_. This Python-based CSV utility makes it easy to feed just about any CSV to Device42's RESTful APIs.
- The **Device42 Web UI**: Of course, you can always use the web-UI _(user interface)_ to add data :)
- **Templates/bulk operations**: Certain types of objects are easier to add using templates or models. For example, [PDU models](infrastructure-management/power-units/defining-pdu-models.md) to create PDUs, [Switch port templates](infrastructure-management/ipam/switch-templates.md) to create switches and ports, [Patch panel models](infrastructure-management/power-units/defining-pdu-models.md) to create patch panel ports and bulk back port connectivity for patch panels.

## What is the recommended order for running different discoveries?

See the "Recommended Initial Discovery Sequence" section of the [autodiscovery best practices](/auto-discovery/autodisc-best-practices/) page for a full detailed rundown.

**In short**: run network discovery first to build your Layer 2 network landscape. Discovered devices, going forward, are added to their appropriate subnets as they are discovered -- _Note that if device discoveries are run before the subnets for those devices exist in Device42, you might run into issues and/or create extra work for yourself!_

## How do I set up an RC / Remote collector?

Setting up a remote collector is easy! See the [RC Setup Instructions](auto-discovery/remote-collector-rc.md) which include deployment examples.

## How do I migrate my existing data from other tools?

We provide few ready to use scripts to migrate your data from tools like RackTables, Rackmonkey, OpenDCIM, Solarwinds IPAM, Aperture etc. and the download links can be found at [Device42 Migration page](https://www.device42.com/migrations/) or at [Device42 github repository](https://github.com/device42).

## What discovery jobs can I run from a Remote Collector / RC?

Current releases of Device42 support ALL discovery jobs, now including WMI & Power SNMP from RC's. If you are reading this, all of them! [Setup your RC](auto-discovery/remote-collector-rc.md) today! (RC will only automatically update when it coincides with an MA update)

## How do I Migrate Existing Power Appliance Jobs to a Remote Collector (RC)?

Migrating jobs that were created for the original standalone power appliance is possible with existing tools. Simply follow the [existing power job migration guide here](infrastructure-management/power-and-environmental-monitoring/power-rc-setup-job-migration.md) to migrate jobs to the new RC of your choice.

## How do I add blade servers to Device42?

This topic has been discussed on support portal : [How to represent blade servers in Device42?](https://support.device42.com/hc/en-usentries/23369387) tldr; Add a new device with "blade chassis" selected. Then you add devices, type "blade", and choose the blade chassis device as the host device. _Note that blade chassis accept blades in "blade slots", which you can custom-configure to match your chassis & port layout!_

## How do I handle unknown device types?

![Change type for selected devices, re-classify unknown devices](/assets/images/view-devices-change-selected-device-type.PNG)

During initial device discovery, some of devices will show up as type "unknown". This can be fixed using:

- Changing the associated hardware model would change all associated devices - current and future. This can be done from Data Center > Hardware or Tools > Templates & Bulk Operations > Bulk Hardware edit.
- From Devices > All Devices. You can filter for type "unknown" and bulk change the device type.
- You can export unknown devices in excel format from Reports > Reports > Add report > Device. Edit the excel file to match Tools > Import > Device Import. Change the type and import the excel file.
- Make the change using REST APIs.

## How can I create reports?

Data can be exported in excel or csv format using:

- Reports > Reports > Add Report.
- Reports > Generate Run Book
- Tools > Exports (CSV)
- Tools -> Imports/Exports to download current data.

## How do I backup my data?

Device42 appliance manager runs at https://your\_device42\_ip\_or\_FQDN:4242/ Default username password is d42admin/default You can create backup from Backup/Restore > Backup now.

This is also discussed under section : [appliance manager.](/administration/appliance-manager/)

## How do I update to the latest release?

1. Download the latest release update file from [Device42 update page](https://www.device42.com/update/)
2. From the D42 main menu: _Tools > Update;_ Click _"Link to Appliance Manager"_, then browse to the downloaded update file ; Click "Upload".
3. Choose Option #3 on the Main Appliance's VM console to apply the update; follow the on-screen prompts.

This is also detailed on the support portal: [D42 Upgrade steps.](https://support.device42.com/hc/en-usentries/21783332)

For more information about Main Appliance and Remote Collector updates, see the  [Main Appliance and Remote Collector](/administration/appliance-manager/) page.

You can subscribe to the [Device42 Blog rss feed](https://www.device42.com/blog/feed/) or follow us on [twitter](https://twitter.com/device42) to get immediate notifications for new releases.

## How do I Install Device42 xen/kvm appliance if import existing disk image option is missing?

If you are trying to install the Device42 appliance on Xen or KVM based platforms, but the import disk image option is missing, see our page [Installing Device42 Appliance but Import to disk is missing](/getstarted/installation/how-do-i-install-device42-xenkvm-appliance-if-import-existing-disk-image-option-is-missing/)

## Where can I get help with something not covered here?

We always recommend searching the [Device42 support portal](https://support.device42.com/hc/en-us) when faced with a question that doesn't seem to be addressed in our documentation. That said, if you do find one, or get stuck, go ahead and open a support ticket. Send a note to support@device42.com or visit the 'support' tab at the top of this page.


## Table of contents

- [Main Appliance & Remote Collector FAQ](getstarted/faqs/main-appliance-remote-collector-faq.md)
