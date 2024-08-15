---
title: "Other Cloud Autodiscoveries"
sidebar_position: 7
---

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'
import openstackLogin from '/assets/images/2015-10-18-openstack-2.png'
import openstackProj from '/assets/images/2015-10-18-openstack-3.png'

For all cloud discovery jobs, navigate to **Discovery > Cloud** and click the **+ Add Cloud Autodiscovery** button. 

Device42 discovery supports the following cloud **Types** as listed in the dropdown menu of the **Add Cloud Autodiscovery** form:

- Alibaba Cloud
- Amazon AWS
- Arista CloudVision (Preview)
- DigitalOcean
- Google Cloud
- Intune
- Linode
- Microsoft Azure
- OpenStack
- Oracle Cloud
- Standalone Kubernetes

<ThemedImage
  alt="Cloud autodiscovery types"
  sources={{
    light: useBaseUrl('/assets/images/other-cloud-autodiscovery/autodiscovery-types-light.png'),
    dark: useBaseUrl('/assets/images/other-cloud-autodiscovery/autodiscovery-types-dark.png'),
  }}
/>

## Alibaba Cloud Autodiscovery

**Alibaba Discovery Items**

| **Cloud Service/Object Name** | **Where to locate in Device42**     | **Accessed API**                           | **Information Generated**                            |
|-------------------------------|-------------------------------|--------------------------------------------|------------------------------------------------------|
| VMs                            | Devices -> All Devices         | http://ecs-cn-hangzhou.aliyuncs.com         | Type, name, OS, notes, RAM, CPU, serial number       |


Select **Alibaba Cloud** as the **Type** and name your autodiscovery job, and then add your Alibaba credentials, including both your **Access Key ID** (1) and **Access Key Secret** (2).

<ThemedImage
  alt="Add Alibaba cloud credentials"
  sources={{
    light: useBaseUrl('/assets/images/other-cloud-autodiscovery/alibaba-cloud-1-light.png'),
    dark: useBaseUrl('/assets/images/other-cloud-autodiscovery/alibaba-cloud-1-dark.png'),
  }}
/>

- Select one or more **Zones** for the discovery (3).
- Select an option for **Action for Instance not found:** (4).
- Select a **Device Name Format** (5).

<ThemedImage
  alt="Add Alibaba details"
  sources={{
    light: useBaseUrl('/assets/images/other-cloud-autodiscovery/alibaba-cloud-2-light.png'),
    dark: useBaseUrl('/assets/images/other-cloud-autodiscovery/alibaba-cloud-2-dark.png'),
  }}
/>


Optionally, you can set the [**Service Level**](index.mdx#cloud-autodiscovery-jobs) of the job to be applied to the discovered items. For example, "Development", "Deployment", or "Production".

Add an optional schedule to regularly run the job and click **Save** to add the job to the list of cloud autodiscovery jobs. From the Cloud Autodiscovery list page, click **Run Now** to run the job immediately.

* * *

## DigitalOcean Autodiscovery

**DigitalOcean Discovery Items**

| **Cloud Service/Object Name** | **Where to locate in Device42** | **Accessed API**                  | **Information Generated**                                |
|-------------------------------|----------------------------|----------------------------------|---------------------------------------------------------|
| Droplets (VMs)                | Devices --> All Devices    | [https://api.digitalocean.com](https://api.digitalocean.com) | Type, name, RAM size, CPU count, HDD Size, Tags, OS, etc. |


Name the job, select **DigitalOcean** as the **Type**, and enter a **Token Key**. Then select any other options you want for the discovery job.

<ThemedImage
  alt="Add DigitalOcean details"
  sources={{
    light: useBaseUrl('/assets/images/other-cloud-autodiscovery/digital-ocean-job-light.png'),
    dark: useBaseUrl('/assets/images/other-cloud-autodiscovery/digital-ocean-job-dark.png'),
  }}
/>

Optionally, you can set the [**Service Level**](index.mdx#cloud-autodiscovery-jobs) of the job to be applied to the discovered items. For example, "Development", "Deployment", or "Production".

Add an optional schedule to regularly run the job and click **Save** to add the job to the list of cloud autodiscovery jobs. From the Cloud Autodiscovery list page, click **Run Now** to run the job immediately.

* * *

## Linode Autodiscovery

**Linode Discovery Items**

| **Cloud Service/Object Name** | **Where to locate in Device42** | **Accessed API**                                                                                                                                                             | **Information Generated**                                    |
|-------------------------------|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| VMs                           | Devices --> All Devices    | [https://api.linode.com/v4/linode/instances](https://api.linode.com/v4/linode/instances) [https://api.linode.com/v4/linode/instances/[linodeId]/disks](https://api.linode.com/v4/linode/instances/[linodeId]/disks) [https://api.linode.com/v4/linode/instances/[linodeId]/ips](https://api.linode.com/v4/linode/instances/[linodeId]/ips) [https://api.linode.com/?api_action=api.spec](https://api.linode.com/?api_action=api.spec) | Name, type, RAM, OS, HDD serial number and size, IP, etc. |

For access to Linode, you will need your API Key. 

- To create a Linode API Key, go to your Linode console:

    ![Linode](/assets/images/2015-10-18-linode-2.png)

- Select "My Profile" and navigate to "API Keys". From here, you can create the API Key that Device42 needs to gain access to your Linode account.

    ![Linode](/assets/images/2015-10-18-linode-1.png)

From Device42, click **+Add Cloud Discovery** on the Cloud Autodiscovery list page, and then select **Linode** as the **Type**. Enter your Linode API key by clicking the **magnifying glass** icon to create a Device42 secret to add to the field.

<ThemedImage
  alt="Add Linode details"
  sources={{
    light: useBaseUrl('/assets/images/other-cloud-autodiscovery/linode-autodiscovery-light.png'),
    dark: useBaseUrl('/assets/images/other-cloud-autodiscovery/linode-autodiscovery-dark.png'),
  }}
/>

Optionally, you can fill in the following fields:

- **Vendor:** Vendors are user-defined or may be populated by the EnrichAI feature as part of discovery (1).
- **VRF Group:** All IPs found will be placed in subnets in that VRF Group. This is useful if you have duplicate IPs in your internal network (2).
- **Action for Instance not found:** If you select **Delete Instance** (3) then each time this autodiscovery job is run, any devices that were previously created for this account but were not found by the autodiscovery job will be deleted. This ensures that Device42 remains in sync with Linode. Otherwise, you have Device42 Cloud Instances (cloud devices) that no longer exist in Linode.
- Set the [**Service Level**](index.mdx#cloud-autodiscovery-jobs) of the job to be applied to the discovered items (4). For example, "Development", "Deployment", or "Production".

Add an optional schedule to regularly run the job and click **Save** to add the job to the list of cloud autodiscovery jobs. From the Cloud Autodiscovery list page, click **Run Now** to run the job immediately.

* * *

## OpenStack Autodiscovery

### OpenStack Discovery Items

| **Cloud Service/Object Name** | **Where to locate in Device42**      | **Accessed API**                                                                                                                              | **Information Generated**                          |
|-------------------------------|-------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| Hosts                         | Devices --> Unknown Devices   | v2: `/v2.0/tokens`, `/v2.0/tenants`, `/v2.1/<tenant_id>/os-hypervisors/detail`, `/v2.1/<tenant_id>/flavors/detail`, `/v2.1/<tenant_id>/servers/detail`, v3: `/v3/auth/tokens`, `/v3/projects` | Name, memory, CPU count, IP, MAC, etc. |
| VMs                           | Devices --> All Devices       | Same as above                                                                                                                                | Type, name, RAM, UUID, IP, MAC, etc.            |

### Minimum Permission Requirements for OpenStack Discovery

The User / User Group should be attached to the project and have the following permissions described in `policy.json`:
    - `"os_compute_api:os-hypervisors"`
    - `"os_compute_api:os-extended-server-attributes"`

### Get Details for OpenStack Discovery

Device42 needs your Openstack **User Name** (`username@UserDomainID:ProjectDomainName`), **Password**, and **Project Name**.

1. Log in to Openstack and take note of your **User Name** and **Password**.
    
    <img src={openstackLogin} width="50%"/>

2. When you log in to OpenStack, you'll see the **Overview** screen with a list of projects.
    
    <img src={openstackProj} width="75%"/>

3. Enter the project name you would like to access into the Device42 **Project Name** field.

### Create an OpenStack Discovery Job

Select **Linode** as the **Type** and fill in the **User** name (1), **Password** (2), and **Project name** (3) fields.

<ThemedImage
  alt="Add OpenStack details"
  sources={{
    light: useBaseUrl('/assets/images/other-cloud-autodiscovery/openstack-job-light.png'),
    dark: useBaseUrl('/assets/images/other-cloud-autodiscovery/openstack-job-dark.png'),
  }}
/>

**Optionally, you can also:**

- **Vendor:** Vendors are user-defined or may be populated by the EnrichAI feature as part of discovery.
- **VRF Group:** All IPs found will be placed in subnets in that VRF Group. This is useful if you have duplicate IPs in your internal network.
- **Action for Instance not found:** If you select **Delete Instance** then each time this autodiscovery job is run, any devices that were previously created for this account but were not found by the autodiscovery job will be deleted. This ensures that Device42 remains in sync with Linode. Otherwise, you have Device42 Cloud Instances (cloud devices) that no longer exist in Linode.
- Set the [**Service Level**](index.mdx#cloud-autodiscovery-jobs) of the job to be applied to the discovered items. For example, "Development", "Deployment", or "Production".

Add an optional schedule to regularly run the job and click **Save** to add the job to the list of cloud autodiscovery jobs. From the Cloud Autodiscovery list page, click **Run Now** to run the job immediately.

* * *

## Oracle Cloud Autodiscovery

**Oracle Cloud Discovery Items**

| **Cloud Service/Object Name** | **Where to locate in Device42** | **Accessed API**                                                                                  | **Information Generated**         |
|-------------------------------|---------------------------|--------------------------------------------------------------------------------------------------|----------------------------------|
| VMs                           | Devices --> All Devices   | `https://iaas.<<zone>>.oraclecloud.com`, `https://identity.<<zone>>.oraclecloud.com` | Service name, instance ID, status, location, etc. |
| Subnets                       | Network --> Subnets       | `https://iaas.<<zone>>.oraclecloud.com`, `https://identity.<<zone>>.oraclecloud.com`| Network, mask, name              |


Name the autodiscovery job and select **Oracle Cloud** as the cloud **Type**. Enter details for the following fields:

- **User Id** (1)
- **Fingerprint** (if applicable) (2)
- **Key File** (3)
- **Tenant ID** (4)
- **Zones** (5)

<ThemedImage
  alt="Add Oracle details"
  sources={{
    light: useBaseUrl('/assets/images/other-cloud-autodiscovery/oracle-light.png'),
    dark: useBaseUrl('/assets/images/other-cloud-autodiscovery/oracle-dark.png'),
  }}
/>

You can optionally:

- Add the **Vendor**. Vendors can be user-defined or may be populated by the EnrichAI feature as part of discovery.
- Choose a **VRF Group**. If you select a VRF Group, then all IPs found will be placed in subnets in that VRF Group.
- Select a **Remote Collector**.

Scroll down the page to see additional options.

Set the [Service Level](index.mdx#service-level-and-object-category-options) of the job to be applied to the discovered items. For example, "Development", "Deployment", or "Production".

<ThemedImage
  alt="Oracle additional options"
  sources={{
    light: useBaseUrl('/assets/images/other-cloud-autodiscovery/oracle-2-light.png'),
    dark: useBaseUrl('/assets/images/other-cloud-autodiscovery/oracle-2-dark.png'),
  }}
/>

Add an optional schedule to regularly run the job and click **Save** to add the job to the list of cloud autodiscovery jobs. From the Cloud Autodiscovery list page, click **Run Now** to run the Oracle discovery job immediately.
