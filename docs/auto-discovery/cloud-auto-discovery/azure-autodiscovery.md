---
title: "Azure Autodiscovery"
sidebar_position: 3
---

It’s important to have a complete inventory of all your IT assets, including on-prem and cloud-based resources. Device42 can provide insights into your Azure resources and services by using an application service principal in accordance with [Microsoft’s security recommendations](https://learn.microsoft.com/en-us/azure/active-directory/develop/secure-least-privileged-access).

This page will walk through the process of creating an application service principal with limited permissions, enabling a quick and easy inventory of Azure resources using Device42.

## Getting Started with Azure

Before you begin discovering in Device42, you will need to prepare your Azure environment. Ensure you've followed the two preparatory steps in your Azure account before you attempt discovery.

### Application Preparation

We’ll first log in to Azure via [https://portal.azure.com](https://portal.azure.com), then navigate to **Azure Active Directory > Enterprise Applications > New Application > Create Your Own Application**. Name your application and select the **Integrate any other application you don’t find in the gallery (Non-gallery)** option.

Once your application has been created, navigate back to the top-level directory you created the app in and choose **App Registrations**. Select your newly created app and make note of the **Application (client) ID** and the **Directory (tenant) ID** as these will both be used for Device42 discovery.

Select **Certificates & Secrets**, then **New Client Secret**. Give your secret an optional description, an expiration date, and then select **Add**. Make note of the string in the **Value** column, this will be used as the **Client Secret ID** for Device42 discovery and it will not be visible again after signing out of the Azure portal.

### Role Preparation

Device42 allows you to discover by Tenant or Subscription level. Using the Tenant discovery is best suited for customers with large numbers of Azure Subscriptions, whereas if you only have a few Subscriptions, you may find that preferable. 

Please note that the assignable scope in the policy below assumes you are performing subscription level discovery. 

If you are performing tenant level discovery, be sure to change the assignable scope to:
`/providers/Microsoft.Management/managementGroups/root-management-group-id-goes-here`


#### Subscription Level

We will create a role with limited permissions that will be applied to this application. If you haven't set up your roles yet, [this documentation](https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal?tabs=delegate-condition) can help. This will allow Device42 to use the application for discovery purposes while adhering to the principle of least privilege. Navigate to the Subscriptions service in the portal and select the Subscription you would like to allow this application to discover. Make note of the **Subscription ID** as it will be used later for Device42 discovery.

Navigate to **Subscriptions > Select your Subscription > Access Control (IAM) >  Roles > Add > Add Custom Role**. Give the custom role a name, and an optional description, then select either **Start from scratch** or **Start from JSON**.

1. If using the **Start from scratch** option, you will need to manually select each permission needed for this application to access the desired resources. The permissions needed are available in Device42 documentation [here](auto-discovery/cloud-auto-discovery/index.mdx). Select **Add permissions**, search for and select the desired permission, check the relevant box, and choose **Add**. Repeat this for any desired permissions.
2. If using the **Start from JSON** option, copy and paste the JSON data below, to pull in the necessary permissions from the list in the Discovery section, and save it as a `.json` file. Upload this file on the **Basics** page when creating the role, and the permissions will be automatically defined.

```
{
  "properties": {
    "roleName": "D42Discovery",
    "description": "",
    "assignableScopes": [
      "/subscriptions/subscription-id-goes-here"
    ],
    "permissions": [
      {
        "actions": [
          "Microsoft.Compute/virtualMachines/read",
          "Microsoft.ContainerService/managedClusters/accessProfiles/listCredential/action",
          "Microsoft.ContainerService/managedClusters/listClusterUserCredential/action",
          "Microsoft.ContainerService/managedClusters/read",
          "Microsoft.DBforMariaDB/servers/databases/read",
          "Microsoft.DBforMariaDB/servers/read",
          "Microsoft.DBforMySQL/servers/databases/read",
          "Microsoft.DBforMySQL/servers/read",
          "Microsoft.DBforPostgreSQL/serverGroupsv2/*",
          "Microsoft.DBforPostgreSQL/servers/databases/read",
          "Microsoft.DBforPostgreSQL/servers/read",
          "Microsoft.DocumentDB/databaseAccounts/cassandrakeyspaces/read",
          "Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/read",
          "Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/read",
          "Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections/read",
          "Microsoft.DocumentDB/databaseAccounts/read",
          "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/read",
          "Microsoft.DocumentDB/databaseAccounts/tables/read",
          "Microsoft.Network/loadBalancers/read",
          "Microsoft.Network/networkInterfaces/read",
          "Microsoft.Network/privateEndpoints/read",
          "Microsoft.Network/privateEndpoints/read",
          "Microsoft.Network/publicIPAddresses/read",
          "Microsoft.Network/publicIPAddresses/read",
          "Microsoft.Network/virtualNetworks/read",
          "Microsoft.Network/virtualNetworks/read",
          "Microsoft.OperationalInsights/workspaces/read",
          "Microsoft.OperationalInsights/workspaces/read",
          "Microsoft.Resources/subscriptions/resourceGroups/read",
          "Microsoft.Sql/managedInstances/databases/read",
          "Microsoft.Sql/managedInstances/read",
          "Microsoft.Sql/servers/databases/read",
          "Microsoft.Sql/servers/read",
          "Microsoft.SqlVirtualMachine/sqlVirtualMachines/read",
          "Microsoft.Storage/storageAccounts/blobServices/containers/read",
          "Microsoft.Storage/storageAccounts/privateEndpointConnections/read",
          "Microsoft.Storage/storageAccounts/read",
          "Microsoft.Web/sites/functions/read",
          "Microsoft.Web/sites/read"
        ],
        "notActions": [],
        "dataActions": [],
        "notDataActions": []
      }
    ]
  }
}
```

#### Tenant Level

If using the Tenant ID for discovery, you'll create a Single Role at the Tenant level. Navigate to **Management Groups > Select your Azure Tenant Group > Access Control (IAM) > Roles > Add > Add Custom Role**. Give the custom role a name, and an description, then select **Start from scratch** or 88.

1. If using the **Start from scratch** option, you will need to manually select each permission needed for this application to access the desired resources. The permissions needed are available in Device42 documentation [here](auto-discovery/cloud-auto-discovery/index.mdx). Select **Add permissions**, search for and select the desired permission, check the relevant box, and choose **Add**. Repeat this for any desired permissions.
2. If using the **Start from JSON** option, copy and paste the in the JSON data, pulling in the necessary permissions from the list in the Discovery section, and save it as a `.json` file. Be sure to change the assignable scope to `/providers/Microsoft.Management/managementGroups/root-management-group-id-goes-here`. Then, upload this file on the Basics page when creating the role, and the permissions will be automatically defined.

After defining the permissions, select **Next** to define the scope this application will have access to. This can be done at the subscription level or any nested resource groups; we’ll be using the subscription in this example. Select Next to review and/or copy the JSON > Next > Create.

To apply the role, go back to the **Access Control (IAM) > Add > Add Role Assignment**. Select your newly created role and choose **Next** to bring you to the **Members** tab. Choose the **User, group, or service principal > Select members**, and choose the application created in the previous steps above. Select **Next** and then **Review + Assign**. Your custom role is now applied to your new application and can be used for discovering Azure Resources.

### Azure Kubernetes Service (AKS)

When "Authentication and Authorization" is set to "Azure AD authentication with Kubernetes RBAC" and "Kubernetes local accounts" is disabled, you must ensure that there is a group configured within the "Cluster admin ClusterRoleBinding" that includes the discovery user/service principal.

It is important to note that you can specify multiple groups within the “Cluster admin ClusterRoleBinding” selection.

This can be useful if you would like to keep the discovery user/service principal in a separate, dedicated discovery group rather than adding it to an existing group.

### Device42 Azure Discovery

Now, we will configure an Azure discovery job in Device42 using the application details we made note of earlier. The limited role we applied will prevent access to unnecessary resources while still allowing for visibility and discovery of what is in scope.

Log in to the Device42 main appliance web console and navigate to **Discovery > Cloud > Add Cloud Autodiscovery**. Give your cloud discovery job a name, select **Microsoft Azure** from the **Cloud Type** dropdown, choose an appropriate remote collector, and select **Service Principal**. The four Azure values that were noted earlier will now be used to configure the discovery job.

1. Click the magnifying glass icon for the **Client ID** value and choose **Add Secret** in the window that opens. The username field requires a value, so use it as a label (i.e. Azure Client ID). The **Application (client) ID** value for the Azure application will go in the **Password** field, then select **Save**.
2. Repeat this process for the **Subscription ID** and **Client Secret** fields, where the **Subscription ID** and **Client Secret ID** values go in the respective Password fields of their Secret entries.
3. The **Directory (tenant) ID** can be pasted directly into the Tenant ID field of the discovery job.

You can set the **Service Level** of the job to be applied to the discovered items. See [Service Level and Object Category Options](index.mdx#service-level-and-object-category-options) for details.

Configure any other discovery options as required, such as adding vendor metadata as tags or custom fields, device name format, enabling Kubernetes discovery to pull in AKS resources, etc. The advanced features section will enable discovery of database and function resources and are enabled by default. Configure an auto-discovery schedule if desired, then select Save and continue editing.

* * *

## Azure Discovery Items

<table id="tablepress-1" class="tablepress tablepress-id-1">
<thead>
<tr class="row-1 odd">
    <th class="column-1">Service/Object Name</th><th class="column-2">Where in D42</th><th class="column-3">Accessed API</th><th class="column-4">Sample Information Generated</th><th class="column-5">Permission(s) Required</th>
</tr>
</thead>
<tbody class="row-hover">
<tr class="row-2 even">
    <td class="column-1">SQL Server</td><td class="column-2">Resources –&gt; All Resources</td><td class="column-3">management.azure.com</td><td class="column-4">Name, virtual subtype, tags</td><td class="column-5">Microsoft.Sql/servers/read <br/><br/>Microsoft.Sql/servers/databases/read </td>
</tr>
<tr class="row-3 odd">
    <td class="column-1">Managed SQL Server</td><td class="column-2">Resources –&gt; All Resources</td><td class="column-3">management.azure.com</td><td class="column-4">Name, virtual subtype, tags, tables</td><td class="column-5">Microsoft.Sql/managedInstances/read <br/><br/>Microsoft.Sql/managedInstances/databases/read</td>
</tr>
<tr class="row-4 even">
    <td class="column-1">Azure DB for MySQL</td><td class="column-2">Resources –&gt; All Resources</td><td class="column-3">management.azure.com</td><td class="column-4">Name, virtual subtype, tags, tables</td><td class="column-5">Microsoft.DBforMySQL/servers/read<br/><br/>Microsoft.DBforMySQL/servers/databases/read</td>
</tr>
<tr class="row-5 odd">
    <td class="column-1">Azure DB for Postgres</td><td class="column-2">Resources –&gt; All Resources</td><td class="column-3">management.azure.com</td><td class="column-4">Name, virtual subtype, tags, tables</td><td class="column-5">Microsoft.DBforPostgreSQL/servers/read<br/><br/>Microsoft.DBforPostgreSQL/servers/databases/read</td>
</tr>
<tr class="row-6 even">
    <td class="column-1">Azure DB for MariaDB</td><td class="column-2">Resources –&gt; All Resources</td><td class="column-3">management.azure.com</td><td class="column-4">Name, virtual subtype, tags, tables</td><td class="column-5">Microsoft.DBforMariaDB/servers/read<br/><br/>Microsoft.DBforMariaDB/servers/databases/read</td>
</tr>
<tr class="row-7 odd">
    <td class="column-1">Cosmos DB</td><td class="column-2">Resources –&gt; All Resources</td><td class="column-3">management.azure.com</td><td class="column-4">Name, virtual subtype, tags, tables</td><td class="column-5">Microsoft.DocumentDB/databaseAccounts/read  <br/><br/>Microsoft.DocumentDB/databaseAccounts/sqlDatabases/read <br/><br/>Microsoft.DocumentDB/databaseAccounts/cassandrakeyspaces/read <br/><br/>Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/read <br/><br/>Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/read <br/><br/>Microsoft.DocumentDB/databaseAccounts/tables/read<br/><br/>Microsoft.DBforPostgreSQL/serverGroupsv2/* <br/><br/>Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections/read<br/><br/>Microsoft.Network/privateEndpoints/read<br/><br/>Microsoft.OperationalInsights/workspaces/read (Log Analytics Reader on workspace level) </td>
</tr>
<tr class="row-8 even">
    <td class="column-1">SQL VM</td><td class="column-2">Resources –&gt; All Resources</td><td class="column-3">management.azure.com</td><td class="column-4">Name, virtual subtype, tags, tables</td><td class="column-5">Microsoft.SqlVirtualMachine/sqlVirtualMachines/read</td>
</tr>
<tr class="row-9 odd">
    <td class="column-1">Functions</td><td class="column-2">Resources –&gt; All Resources</td><td class="column-3">management.azure.com</td><td class="column-4">Resource group name, runtime, trigger, function type</td><td class="column-5">Microsoft.Web/sites/read <br/><br/>Microsoft.Web/sites/functions/read</td>
</tr>
<tr class="row-10 even">
    <td class="column-1">Kubernetes (AKS)</td><td class="column-2">Devices –&gt; Unknown</td><td class="column-3">management.azure.com</td><td class="column-4">Containers, nodes, clusters</td><td class="column-5">Microsoft.ContainerService/managedClusters/read<br/><br/>Microsoft.ContainerService/managedClusters/accessProfiles/listCredential/action</td>
</tr>
<tr class="row-11 odd">
    <td class="column-1">Load Balancers</td><td class="column-2">Devices –&gt; All Devices</td><td class="column-3">management.azure.com</td><td class="column-4">Name, tags, IP</td><td class="column-5">Microsoft.Network/loadBalancers/read <br/><br/>Microsoft.Network/publicIPAddresses/read</td>
</tr>
<tr class="row-12 even">
    <td class="column-1">Networks (as VRF Groups)</td><td class="column-2">Network --&gt; VRF Groups</td><td class="column-3">management.azure.com</td><td class="column-4">Name</td><td class="column-5">Microsoft.Network/virtualNetworks/read </td>
</tr>
<tr class="row-13 odd">
    <td class="column-1">Subnets</td><td class="column-2">Network --&gt; All Subnets</td><td class="column-3">management.azure.com</td><td class="column-4">Network, mask, name</td><td class="column-5">Microsoft.Network/virtualNetworks/read</td>
</tr>
<tr class="row-14 even">
    <td class="column-1">VMs</td><td class="column-2">Devices –&gt; All Devices</td><td class="column-3">management.core.windows.net</td><td class="column-4">Name, OS version, RAM size, CPU, IP, MAC</td><td class="column-5">Microsoft.Compute/virtualMachines/read <br/><br/>Microsoft.Network/networkInterfaces/read <br/><br/>Microsoft.Network/publicIPAddresses/read </td>
</tr>
<tr class="row-15 odd">
    <td class="column-1">Blob Storage</td><td class="column-2">Resources --&gt; All Resources</td><td class="column-3">management.azure.com</td><td class="column-4">Capacity, available capacity</td><td class="column-5">Microsoft.Storage/storageAccounts/read<br/><br/>Microsoft.Storage/storageAccounts/blobServices/containers/read<br/><br/>Microsoft.Storage/storageAccounts/privateEndpointConnections/read<br/><br/>Microsoft.Network/privateEndpoints/read</td>
</tr>
<tr class="row-16 even">
    <td class="column-1">Workspaces</td><td class="column-2">Resources --&gt; All Resources</td><td class="column-3">management.azure.com</td><td class="column-4"></td><td class="column-5">Microsoft.OperationalInsights/workspaces/read</td>
</tr>
    <tr class="row-17 odd">
    <td class="column-1">Extended Summary Discovery</td><td class="column-2">Resources --&gt; All Cloud Resources</td><td class="column-3">management.azure.com</td><td class="column-4"></td><td class="column-5">Microsoft.Resources/subscriptions/resourceGroups/read</td>
</tr>
    <tr class="row-18 even">
    <td class="column-1">Extended Summary Discovery Supplementary Permissions</td><td class="column-2">Resources --&gt; All Cloud Resources</td><td class="column-3">management.azure.com</td><td class="column-4"></td><td class="column-5">microsoft.aad/domainservices/read
microsoft.alertsmanagement/smartdetectoralertrules/read
microsoft.compute/disks/read
microsoft.compute/sshpublickeys/read
microsoft.compute/virtualmachines/extensions/read
microsoft.compute/virtualmachinescalesets/read
microsoft.containerservice/managedclusters/read
microsoft.dbforpostgresql/flexibleservers/read
microsoft.documentdb/databaseaccounts/read
microsoft.insights/actiongroups/read
microsoft.insights/components/read
microsoft.insights/datacollectionrules/read
microsoft.managedidentity/userassignedidentities/read
microsoft.migrate/migrateprojects/read
microsoft.network/applicationgateways/read
microsoft.network/connections/read
microsoft.network/dnsresolvers/read
microsoft.network/loadbalancers/read
microsoft.network/localnetworkgateways/read
microsoft.network/networkinterfaces/read
microsoft.network/networksecuritygroups/read
microsoft.network/networkwatchers/read
microsoft.network/networkwatchers/flowlogs/read
microsoft.network/privatednszones/read
microsoft.network/privatednszones/virtualnetworklinks/read
microsoft.network/privateendpoints/read
microsoft.network/publicipaddresses/read
microsoft.network/routetables/read
microsoft.network/virtualnetworkgateways/read
microsoft.network/virtualnetworks/read
microsoft.operationalinsights/querypacks/read
microsoft.operationalinsights/workspaces/read
microsoft.operationsmanagement/solutions/read
microsoft.recoveryservices/vaults/read
microsoft.servicebus/namespaces/read
microsoft.storage/storageaccounts/read
microsoft.web/serverfarms/read
microsoft.web/sites/read
Microsoft.Resources/subscriptions/resourceGroups/read/read</td>
    </tr>
</tbody>
</table>

\*specific calls are available on request

### Setting Credentials

![](/assets/images/Image_15_Cloud_Disc_Azure.png)

### Using SAML

When confirming SAML for Azure, change the Signing Option to **Sign SAML response**, this could take a few minutes to apply.

In the Device42 Appliance Manager, ensure that the Username field has a value of **name** (pictured below).

![](/assets/images/azure-saml-2.png)

### Azure Discovery

![](/assets/images/image_19_Cloud_Disc_Azure_ViewVirtualDevice.png)

**Optionally, you can also:**

- Choose the vendor (note that all vendors are user-defined, Device42 does not ship with a list of vendors).
- Choose a VRF Group. If one is selected, all discovered IPs will be placed in subnets in that VRF Group. This is useful if you have duplicate IPs in your internal network.
- Choose a remote collector to run the job (ensure the chosen remote collector can reach the target network).
- As of 18.11, Azure Discovery will default to **Discover all subscriptions** to do tenant level discovery. When unchecked, you can discover by Subscription
- Select the Device Name Format for discovered cloud instances.

![](/assets/images/WEB-330_device-name-format-for-Azure-AD.png)

- Select **Kubernetes Discovery** to discover Kubernetes clusters hosted on your cloud platform.

![](/assets/images/K8s-Discovery-Option_AWSAzureGoogle.png)

- Check **Extended Summary Discovery** to discover all resources within your Azure environments. Summary Discovery will bring in all resources, with abbreviated detail.

![](/assets/images/summary-discovery.png)

- Check **Add tags as custom fields** to add discovered tags to Device42 custom fields.
- Check **Strip domain name** to have Device42 strip the discovered domain suffix (everything after the first period) from the device instance name.
- Choose a category for discovered devices (note that categories are user-defined).

Next, you click on **Save and Continue**. Then you can **Run** the job immediately. Or you can save it and have it run on a regular schedule.

