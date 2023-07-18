---
title: "Azure Autodiscovery"
sidebar_position: 3
---

It’s important to have a complete inventory of all your IT assets, including on-prem and cloud-based resources. Device42 can provide insight into your Azure resources and services by using an application service principal in accordance with [Microsoft’s security recommendations](https://docs.microsoft.com/en-us/azure/active-directory/develop/secure-least-privileged-access).

This page will walk through the process of creating an application service principal with limited permissions, enabling quick and easy inventory of Azure resources using Device42.

## Getting Started with Azure

Before you begin discovering in Device42, you will first need to prepare your Azure environment. Ensure you've followed the two preparatory steps in your Azure account before you attempt discovery.

### Application Preparation

We’ll first need to login to Azure via [https://portal.azure.com](https://portal.azure.com), then navigate to Azure Active Directory > Enterprise Applications > New Application > Create Your Own Application. Name your application and select the “Integrate any other application you don’t find in the gallery (Non-gallery)” option.

Once your application has been created, navigate back to the top level directory you created the app in and choose App Registrations. Select your newly created app and make note of the **Application (client) ID** and the **Directory (tenant) ID,** as these will both be used for Device42 discovery.

Select Certificates & Secrets, then New client secret. Give your secret an optional description, an Expiration date, then select Add. Make note of the string in the **Value** column, this will be used as the **Client Secret ID** for Device42 discovery and it will not be visible again after signing out of the Azure portal.

### Role Preparation

Next, we will create a role with limited permissions that will be applied to this application. This will allow Device42 to use the application for discovery purposes while adhering to the principle of least privilege. Navigate to the Subscriptions service in the portal and select the Subscription you would like to allow this application to discover. Make note of the **Subscription ID** as it will be used later for Device42 discovery.

Navigate to Access Control (IAM) >  Roles > Add > Add Custom Role. Give the custom role a name, an optional description, then select either Start from scratch or Start from JSON.

1. If using the Start from scratch option, you will need to manually select each permission needed for this application to access the desired resources. The permissions needed are available in Device42 documentation [here](https://docs.device42.com/auto-discovery/cloud-auto-discovery/#section-14). Select Add permissions, search for and select the desired permission, check the relevant box and choose Add. Repeat this for any desired permissions.
2. If using the Start from JSON option, copy and paste the below JSON data, pulling in the necessary permissions from the list in Discovery section, and save it as a .json file. Upload this file on the Basics page when creating the role, and the permissions will be automatically defined.

{
	"properties": {
		"roleName": "D42Discovery",
		"description": "",
		"assignableScopes": \["/subscriptions/subscription-id-goes-here"\],
		"permissions": \[{
			"actions": \["Microsoft.Compute/virtualMachines/read", 
			"notActions": \[\],
			"dataActions": \[\],
			"notDataActions": \[\]
		}\]
	}
}

After defining the permissions, select Next to define the scope this application will have access to. This can be done at the subscription level or any nested resource groups; we’ll be using the subscription in this example. Select Next to review and/or copy the JSON > Next > Create.

In order to apply the role, go back to the Access Control (IAM) > Add > Add Role Assignment. Select your newly created role and choose Next which will bring you to the Members tab. Choose the “User, group, or service principal option” > Select members, and choose the application created in the previous steps above. Select Next and then Review + Assign. Your custom role is now applied to your new application, and can be used for discovering Azure Resources.

### Device42 Azure Discovery

Now, we will configure an Azure discovery job in Device42 using the application details we made note of earlier. The limited role we applied will prevent access to unnecessary resources while still allowing for visibility and discovery of what is in scope.

Log in to the Device42 main appliance web console and navigate to Discovery > Cloud > Add Cloud Autodiscovery. Give your cloud discovery job a name, select “Microsoft Azure” in the Cloud Type dropdown, choose an appropriate remote collector, and select “Service Principal”. The 4 Azure values that were noted earlier will now be used to configure the discovery job.

1. Click the magnifying glass icon for the Client ID value and choose Add Secret in the resulting window that opens. The username field requires a value, so use it as a label i.e. Azure Client ID. The **Application (client) ID** value for the Azure application will go in the Password field, then select Save.
2. Repeat this process for the Subscription ID and Client Secret fields, where the **Subscription ID** and **Client Secret ID** values go in the respective Password fields of their Secret entries.
3. The **Directory (tenant) ID** can be pasted directly into the Tenant ID field of the discovery job.

Configure any other discovery options as required, such as Add vendor metadata as tags or custom fields, device name format, enabling Kubernetes discovery to pull in AKS resources, etc. The advanced features section will enable discovery of database and function resources, and are enabled by default. Configure an auto discovery schedule if desired, then select Save and continue editing.

* * *

## Azure Discovery Items

\[table id=1 /\]

\*specific calls are available on request

### Setting Credentials

![](/assets/images/Image_15_Cloud_Disc_Azure.png)

### Using SAML

When confirming SAML for Azure, change the Signing Option to "Sign SAML response", this could take a few minutes to apply.

In the Device42 Appliance Manager, ensure that the Username field has a value of **name** (pictured below).

![](/assets/images/azure-saml-2.png)

### Azure Discovery

![](/assets/images/image_19_Cloud_Disc_Azure_ViewVirtualDevice.png)

**Optionally, you can also:**

- Choose the vendor \[note that all vendors are user-defined - Device42 does not ship with a list of vendors\].
- Choose a VRF Group. If one is selected, all discovered IPs will be placed in subnets in that VRF Group. This is useful if you have duplicate IPs in your internal network.
- Choose a remote collector to run the job (ensure the chosen remote collector can reach the target network).
- Select the Device Name Format for discovered cloud instances.

![](/assets/images/WEB-330_device-name-format-for-Azure-AD.png)

- Select Kubernetes Discovery to discover Kubernetes clusters hosted on your cloud platform.

![](/assets/images/K8s-Discovery-Option_AWSAzureGoogle.png)

- Check Add tags as custom fields to add discovered tags to Device42 custom fields.
- Check Strip domain name to have Device42 strip the discovered domain suffix (everything after the first period) from the device instance name.
- Choose a category for discovered devices (note that categories are user-defined).

Next, you should “Save and Continue”. Then you can click ‘Run’ to run the job immediately. Or you can save it or save it and have it run on a regular schedule.
