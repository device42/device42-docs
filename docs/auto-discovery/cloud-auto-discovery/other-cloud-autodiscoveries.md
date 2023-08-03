---
title: "Other Cloud Autodiscoveries"
sidebar_position: 7
---

## Alibaba Cloud Autodiscovery

### Alibaba Discovery Items

<table><tbody><tr><td><strong>Cloud Service/Object Name</strong></td><td><strong>Where to locate in D42</strong></td><td><strong>Accessed API</strong></td><td><strong>Information</strong>&nbsp;<strong>Generated</strong></td></tr><tr><td>VMs</td><td>Devices --&gt; All Devices</td><td>http://ecs-cn-hangzhou.aliyuncs.com</td><td>Type, name, OS, notes, RAM, CPU, serial number</td></tr></tbody></table>

Click _Add Cloud Autodiscovery_, and then select _Alibaba Cloud_ as the Cloud Type_._ Name your job, and then add your Alibaba credentials, including both Access Key ID and your Access Key Secret.

![](/assets/images/Image3_Cloud_Disc_Alibaba.png)

Select one or more Zones for the discovery and select options for Action for Instance not found and Device Name Format. Click Save to add the job to the list of Cloud Autodiscovery jobs. Select the job and click Run Now to run the job immediately or continue editing to schedule runs.

* * *

## DigitalOcean Autodiscovery

### DigitalOcean Discovery Items

<table><tbody><tr><td><strong>Cloud Service/Object Name</strong></td><td><strong>Where to locate in D42</strong></td><td><strong>Accessed API</strong></td><td><strong>Information</strong>&nbsp;<strong>Generated</strong></td></tr><tr><td>Droplets (VMs)</td><td>Devices --&gt; All Devices</td><td><a href="https://api.digitalocean.com">https://api.digitalocean.com</a></td><td>Type, name, RAM size, CPU count, HDD Size, Tags, OS, etc.</td></tr></tbody></table>

Click _Add Cloud Discovery_ on the Cloud Discovery page, and then select _DigitalOcean_ as the Cloud Type.

![](/assets/images/Image27_Cloud_Disc_DigitalOcean.png)

Enter a Token Key, and then select any other options you want for the discovery job.

Click Save and Continue; then you can click Run Now to run the job immediately. Or you can save it and set up a schedule to run the Oracle discovery job.

* * *

## Linode Autodiscovery

### Linode Discovery Items

<table><tbody><tr><td><strong>Cloud Service/Object Name</strong></td><td><strong>Where to locate in D42</strong></td><td><strong>Accessed API</strong></td><td><strong>Information</strong>&nbsp;<strong>Generated</strong></td></tr><tr><td>VMs</td><td>Devices --&gt; All Devices</td><td>https://api.linode.com/v4/linode/instances https://api.linode.com/v4/linode/instances/[linodeId]/disks https://api.linode.com/v4/linode/instances/[linodeId]/ips https://api.linode.com//?api_action=api.spec</td><td>Name, type, RAM, OS, HDD serial number and size, IP, etc.</td></tr></tbody></table>`

![](/assets/images/Image_29_Cloud_Disc_Linode.png)

For access to Linode, you will need your API Key. To create a Linode API Key, go to your Linode console...

![Linode](/assets/images/2015-10-18-linode-2.png)

Select "My Profile" and navigate to "API Keys"

![Linode](/assets/images/2015-10-18-linode-1.png)

From here, you can create your API Key that Device42 needs to gain access.

Optionally, you can also:

- Choose the vendor. Please note that all vendors are user-defined. Device42 does not ship with a list of vendors.
- Choose a VRF Group. If you select a VRF Group, then all IPs found will be placed in subnets in that VRF Group. This is useful if you have duplicate IPs in your internal network.
- Check the “Remove unfound instances from Device42″ box. If you check this box, then each time this autodiscovery job is run, any devices that were previously created for this account but were not found by the autodiscovery job will be deleted. By checking this box, you can ensure that Device42 will remain in sync with Linode. If you leave it unchecked, then you may end up with Device42 Cloud Instances (cloud devices) that no longer exist in Linode.

Next, you should "Save and Continue". Then you can click 'Run' to run the job immediately. Or you can save it or save it and have it run on a regular schedule.

* * *

## OpenStack Autodiscovery

### OpenStack Discovery Items

<table><tbody><tr><td><strong>Cloud Service/Object Name</strong></td><td><strong>Where to locate in D42</strong></td><td><strong>Accessed API</strong></td><td><strong>Information</strong>&nbsp;<strong>Generated</strong></td></tr><tr><td>Hosts</td><td>Devices --&gt; Unknown Devices</td><td>v2: /v2.0/tokens 2/v2.0/tenants 3/v2.1/&lt;tenant_id&gt;/os-hypervisors/detail 4/v2.1/&lt;tenant_id&gt;/flavors/detail 5/v2.1/&lt;tenant_id&gt;/servers/detail v3: /v3/auth/tokens 2 /v3/projects</td><td>Name, memory, CPU count, IP, MAC, etc.</td></tr><tr><td>VMs</td><td>Devices --&gt; All Devices</td><td>Same as above</td><td>Type, name, RAM, UUID, IP, MAC, etc.</td></tr></tbody></table>

1. When you add an OpenStack job, you will be prompted for a User, Password, and Project Name.

![](/assets/images/Image_22_Cloud_Disc_OpenStack.png)

**Minimum Permission Requirements for OpenStack Discovery** are as follows:

- User / User Group should be attached to the project and have the following permissions described in policy.json:
    - "os\_compute\_api:os-hypervisors"
    - "os\_compute\_api:os-extended-server-attributes"

1. The User and Password are the ones you enter into the Openstack authentication screen...![Openstack](/assets/images/2015-10-18-openstack-2.png)
2. When you log into Openstack, the Overview screen shows a list of projects.![Openstack](/assets/images/2015-10-18-openstack-3.png)
3. Enter the project name you would like to access into the Device42 Project Name field.

**Optionally, you can also:**

- Choose the vendor. Please note that all vendors are user-defined. Device42 does not ship with a list of vendors.
- Choose a VRF Group. If you select a VRF Group, then all IPs found will be placed in subnets in that VRF Group. This is useful if you have duplicate IPs in your internal network.
- Check the “Remove unfound instances from Device42″ box. If you check this box, then each time this autodiscovery job is run, any devices that were previously created for this account but were not found by the autodiscovery job will be deleted. By checking this box, you can ensure that Device42 will remain in sync with OpenStack. If you leave it unchecked, then you may end up with Device42 Cloud Instances (cloud devices) that no longer exist in OpenStack.

Next, you can click Save and Continue. Then you can click Run Now to run the job immediately. Or you can save it and set up a schedule to run the discovery job.

* * *

## Oracle Cloud Autodiscovery

### Oracle Cloud Discovery Items

<table><tbody><tr><td><strong>Cloud Service/Object Name</strong></td><td><strong>Where to locate in D42</strong></td><td><strong>Accessed API</strong></td><td><strong>Information</strong>&nbsp;<strong>Generated</strong></td></tr><tr><td>VMs</td><td>Devices --&gt; All Devices</td><td>https://iaas.&lt;&lt;zone&gt;&gt;.oraclecloud.com https://identity.&lt;&lt;zone&gt;&gt;.oraclecloud.com</td><td>Service name, instance ID, status, location, etc.</td></tr><tr><td>Subnets</td><td>Network --&gt; Subnets</td><td>https://iaas.&lt;&lt;zone&gt;&gt;.oraclecloud.com https://identity.&lt;&lt;zone&gt;&gt;.oraclecloud.com</td><td>Network, mask, name</td></tr></tbody></table>

Click _Add Cloud Discovery_ on the Cloud Discovery page, and then select _Oracle Cloud_ as the Cloud Type.

![](/assets/images/Image_25_Cloud_Disc_Oracle.png)

Enter the following information:

- Name for the discovery job.
- User ID
- Fingerprint (if applicable)
- Key File
- Tenant ID
- Zones

You can also:

- Choose the vendor. Please note that all vendors are user-defined. Device42 does not ship with a list of vendors.
- Choose a VRF Group. If you select a VRF Group, then all IPs found will be placed in subnets in that VRF Group.
- Select a Remote Collector.

Scroll down the page to see additional options.

![](/assets/images/Oracle-Cloud-AD-2.png)

Click Save and Continue; then you can click Run Now to run the job immediately. Or you can save it and set up a schedule to run the Oracle discovery job.
