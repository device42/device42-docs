---
title: "Google Cloud Platform Autodiscovery"
sidebar_position: 4
---

### GCP Discovery Items

<table><tbody><tr><td><strong>Cloud Service/Object Name</strong></td><td><strong>&nbsp;Name</strong> <strong>Where to locate in D42</strong></td><td><strong>Accessed API</strong></td><td><strong>Information</strong>&nbsp;<strong>Generated</strong></td></tr><tr><td>K8s (GKE) Discovery</td><td>Devices –&gt; Unknown</td><td><a href="https://www.googleapis.com/discovery/v1/apis/compute/v1/rest">https://www.googleapis.com/discovery/v1/apis/compute/v1/rest</a> <a href="https://www.googleapis.com/discovery/v1/apis/container/v1/rest">https://www.googleapis.com/discovery/v1/apis/container/v1/rest</a></td><td>Containers, pods, clusters</td></tr><tr><td>Networks (as VRF Groups)</td><td>Network --&gt; VRF Groups</td><td><a href="https://www.googleapis.com/discovery/v1/apis/compute/v1/rest">https://www.googleapis.com/discovery/v1/apis/compute/v1/rest</a></td><td>Name</td></tr><tr><td>Subnets</td><td>Networks --&gt; Subnets</td><td><a href="https://www.googleapis.com/discovery/v1/apis/compute/v1/rest">https://www.googleapis.com/discovery/v1/apis/compute/v1/rest</a></td><td>Mask, name, VRF Group</td></tr><tr><td>SQL DB</td><td>&nbsp;</td><td><a href="https://www.googleapis.com/discovery/v1/apis/sqladmin/v1beta4/rest">https://www.googleapis.com/discovery/v1/apis/sqladmin/v1beta4/rest</a></td><td>Tables, instances, etc.</td></tr><tr><td>VMs</td><td>Devices --&gt; All Devices</td><td><a href="https://www.googleapis.com/discovery/v1/apis/compute/v1/rest">https://www.googleapis.com/discovery/v1/apis/compute/v1/rest</a></td><td>Type, Name, RAM, OS, CPU, cores, etc.</td></tr></tbody></table>

### Pre-requisites

For Google Cloud Discovery, you will need a user account with the built-in Google Cloud Platform “Viewer” role.

### Configuring Google Cloud Discovery

Device42 can now discover your inventory on the Google Cloud Platform. Simply create a new job, add your credentials, and you'll be off discovering all of your GCP VMs. Begin by creating a new Google cloud discovery job: 

![](/assets/images/Image_12_Cloud_Disc_Google_1.png)

1) Create a new _"Cloud Autodiscovery"_ job from the _Discovery_, and choose _Google Cloud._

2) Browse to your Google Cloud Engine JSON keyfile. Open it in a text editor and copy the contents:

![](/assets/images/Image_13_Cloud_Disc_Google_2.png)

3) Paste the copied JSON in its entirety into the password field:

![](/assets/images/Image_14_Cloud_Disc_Google_3.png)

4) Save and run your job! Optionally, create a schedule to run it automatically!

_Data discovered on the Google Cloud Platform is similar to what you might be used to on AWS EC2 instances, namely:_

- Discovered Google Cloud VMs are added as virtual devices
- Cloud information is added inline in Device42 for each CI

**Options for GCE are as follows:**

- Select Kubernetes Discovery to discover Kubernetes clusters hosted on your cloud platform.

![](/assets/images/K8s-Discovery-Option_AWSAzureGoogle.png)

- Strip Domain Name: Strip domain name from discovered name (everything after the first period)
- Object category for discovered devices: Choose a category to assign to discovered devices
- Overwrite existing object categories: Select this option to overwrite any previously assigned categories with current selection

**Service Level Option**

You can set the **Service Level** (for example, "Development", "Deployment", or "Production") of the job to be applied to the discovered items. See [Service Level and Object Category Options](index.mdx#service-level-and-object-category-options) for details.

### GCP Account Tags

Select your Google cloud account from the list page under **Infrastructure > Cloud Infrastructure > Cloud Accounts**.

If available, the discovered account-level tags will be listed under the **Vendor Custom Fields** section.

![GCP cloud account tags](/assets/images/GCP-tags.png)