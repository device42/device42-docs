---
title: "IP Addresses"
sidebar_position: 3
---

IP Addresses in the Device42 database must be unique per VRF group. So, you can have two subnets with overlapping IP ranges as long as they are in different VRF groups. The only issue with overlapping subnet ranges is that autodiscovery and import will add or modify the IP into first subnet it finds in the list.

### IP Address List Page

![](/assets/images/WEB-485_Select-IP-Address-to-view.png)

The list page shows IPv4 and IPv6 addresses that you can sort by any field. You can also filter by type, availability, updated time stamp, subnet, VRF group, and tags.

You can search for IPs with full or partial entries right here. Clicking on an IP takes you to the view page.

### Bulk Actions for IP Addresses

![](/assets/images/WEB-485_Select-IP-Address-Actions-menu.png)

 

The following bulk actions are available for IP addresses:

**Export selected items to CSV**: create CSV export file. **Delete with Detailed Confirmation:** Displays prompt before deleting. **Fast Background Delete**: Delete without prompt. **Mark selected IP as available:** Will only mark those IPs available that have no device association. **Mark selected IPs as not available** : Will mark selected IPs as not available. **Clear ALL fields and Mark selected IPs as available** : This command will clear all device association for the selected IPs and mark those IPs as available. **Relocate Selected IPs** : This will bring up a matching subnets page based on first selected IPs. You can choose to move IPs to another subnet with this. Only IPs that are within the range will be moved. **Do a re-importable export for selected items**: Create an export file that you can re-import. **Add tags to selected items**: add a comma-separated list of tags. **Check/Fix selected IPs Subnet assignment**: Displays a page to check or fix Subnet assignment.

### View IP Address Page

Click on an IP address to view its page.

![](/assets/images/WEB-485_Config_Resource-IP-example.png)

The view IP page shows the details for an IP and you can see the history of changes for that IP from the _History (Audit Logs)_ button (similar to all other view pages in the application). If you have appropriate permissions, you will see the _Edit_ button to edit. All DNS records that use this IP are shown in the view page as well.

**Note**: Entries in the _Configuration Resource_ and _Configuration Resource Item_ fields make sense only in the context of a Kubernetes cloud discovery job ([cloud platforms autodiscovery](docs/discovery/cloud_platforms_autodiscovery/index.md)) and are filled in automatically. These field should not be populated for a regular IP address.

In the example above, the _Configuration Resource_ link will take you to the K8s cluster that is currently holding that IP, and _Configuation Resource Item_ contains the name and type of resource. In this case, the name is **Tiller-….jkfpl** and the resource type is a **p****od**.

### Add/Edit Page

Click the _Add IP Address_ button on the view page to add an IP address.

![](/assets/images/WEB-485_Add-IP-Address.png)

When Adding or editing an IP, the Subnet field is required. Device42 will automatically check if the IP falls within the allowed IP range in the subnet and will not allow duplicate IP to be added in that VRF group or subnet (if not a VRF group). You can choose an existing Device and Port or add a new ones from this page.

Select _Network > DNS Records_ from the main menu to can add DNS A/AAAA records for the IP and they will be updated on the IP address.

### IP Address Management from the Command Line

With Device42, you can find if an IP is already in a D42 instance, suggest a next available IP and add an IP from the command line using the REST APIs. Here is a post discussing this: [https://www.device42.com/blog/2013/03/ip-address-management-from-the-command-line/](https://www.device42.com/blog/2013/03/ip-address-management-from-the-command-line/)
