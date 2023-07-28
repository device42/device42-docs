---
title: "Azure Migrate"
sidebar_position: 2
---

You can get to Azure Migrate directly @ [https://portal.azure.com/#create/Microsoft.AzureMigrate](https://portal.azure.com/#create/Microsoft.AzureMigrate)

## Setting up Device42 from the Azure Migrate Portal

1\. Begin by signing up for an Azure account if you don’t already have one. You’ll have to provide a credit card to verify your identity, and agree to the conditions to continue: 

![Microsoft Azure Migrate](/assets/images/azure_migrate_start_free.png)

2\. Click the button to continue to the Azure portal, and once there, choose “Assess and Migrate servers” as pictured below: 

![Sign up for Azure](/assets/images/agree_step_2b.png) 

![Continue to Azure Portal](/assets/images/Continue_to_Azure_Portal-3.png) 

![Assess and Migrate Servers](/assets/images/Assess_and_migrate_servers-4.png) 3. Next, you’ll want to begin adding migration tools; click “Add a tool.” 

![Add a tool](/assets/images/add_tool-5.png)

4\. Choose an existing Resource Group, or click the “Create new” link (highlighted) to create a new one. The “Resource Group” name represents the group of machines you’ll be migrating, and can be a name of your choosing, but should be descriptive. Then click“OK.” 

![Name your Migration Project](/assets/images/add_a_tool-5.1.png) 

![Create resource group](/assets/images/add_a_tool-create-resource-group-5.2.png)

5\. Give your migration project a name, and when finished, click“Next” to continue. 

![Name the project](/assets/images/name_migration_project_5.3.png)

6\. Select Device42 as your Azure Migration assessment tool by clicking on it so it is selected as shown below. Click “Next” to choose Device42. 

![Select Device42 as assessment tool](/assets/images/add_tool_select_D42-6.png)

7\. You can add a migration tool at this point if know which you want to use, but the default is to skip adding a migration tool for now (you can choose a tool when you are ready to migrate). Make sure the “Skip adding a migration tool for now” checkbox is checked, and click “Next” to continue. 

![Skip adding a migration tool](/assets/images/add_tool_skip_migration-6.1.png)

8\. Review your tool choice(s) and then click “Add tool(s)” to continue. 

![Review tool choices](/assets/images/review_add_tool-6.2.png)

You’ll see confirmation the deployment has been initialized.

9\. Click “Learn more” to head to the Device42 information page. 

![Intializing tool deployment](/assets/images/initializing_deployment-7.png)

10\. From the Device42 information page, click the orange “Try it now, free” button to jump over to the Device42 download page. 

![Learn more to install D42](/assets/images/Install_d42_trial-8.png)

11\. Fill out the form and click “Start your Free Trial” to download Device42. Your download should be e-mailed to you immediately. 

![Device42 download page](/assets/images/Click_for_D42_Download_FINAL.png)

For help installing Device42, head over to the Device42 documentation: [https://docs.device42.com](https://docs.device42.com). 1. The [Getting Started with Installation section is a great place to begin! [installation](/docs/getting_started/installation/).

2\. Once you’ve installed, you’ll want to begin discovering your environment. See the “Getting started with autodiscovery” section of the documentation here: [getting_started/getting-started-with-auto-discovery.md](getting_started/getting-started-with-auto-discovery.md).

3\. When you’ve finished with discovery and assessment, you can export your discovered data back to Microsoft Azure. Instructions on exporting can be found here: [applications/business_applications/building-business-applications-in-device42.md#section-15](applications/business_applications/building-business-applications-in-device42.md#section-15).

* * *

## Exporting your Business Apps to Azure for Migration

### Register an Azure Active Directory user

1\. Login to Azure Portal, and create an "App Registration" in Azure Active Directory. You'll need this user to authenticate to Azure when uploading your export. Create a User:

![Create a new Azure User](/assets/images/register_an_application.png)

2\. Create Client Secret and Save the value for Device42.

![Create a Client Secret](/assets/images/certificates_and_secrets.png)

3\. Create a new Migration Project _(if you haven't already; see the prior section on this page)_.

![Search for Azure Migrate](/assets/images/search_azure_migrate.png)

4\. Under Subscriptions > Subscription > Access Control (IAM), click "Add" under Add a role assignment.

5\. Select a "Contributor" role and type the name of the app registration in the "Select" text box (in this case, the name of our app was _dev\_device42_).

6\. Select the app registration and Save. This gives the correct permissions to export data from Device42 to Azure.

![](/assets/images/Azure-Migrate_Add-Role-Assignment_App-Name.png)

### Collect required information from Azure

**Collect the following information from Azure:**

1\. **Tenant ID:** Azure Active Directory -> Properties

![Azure Tenant ID](/assets/images/Tenant_ID.png)

2\. **Subscription ID:** Subscriptions

![Azure Subscription ID](/assets/images/subscription_ID.png)

3\. **Client ID:** Azure Active Directory -> App registrations

![Azure Client ID](/assets/images/Client_ID.png)

4\. **Client Secret:** Saved from app registration creation.

5\. **Migrate Project Name:** The name you chose when creating the project.

### Export your Business Application(s) from Device42

1\. Login to Device42 and go to Business Apps. Select one or more Business App(s) to export by checking the check-boxes next to them, and Choose ‘Create Migration for Selected Objects’.

![Select business apps to export](/assets/images/Business_app_selection.png)

2\. Select ‘Azure’ as your _Target_ from the drop-down.

![Export to Azure selection](/assets/images/Export_Business_Apps.png)

3\. Enter Migrate Project information from Azure collected in the last step.

![Enter collected Azure prjoect details](/assets/images/Enter_project_Details.png)

4\. Click Export. Go back to the Azure Migrate Hub, and click 'Refresh.' You should now see your exported data in Azure!

![Refresh the Azure Migrate Hub window](/assets/images/Azure_Hub_REFRESH.png)

## Reviewing your Device42 exports in Azure Migrate

After exporting your Business Applications from Device42 _(__as explained in the prior section)_ to the Azure Migrate portal, log back into the Azure Migrate portal, or refresh if you are already logged in. You should see something similar to the following example _(but with your data, of course)_.

![Device42 Assessment details in Azure Example](/assets/images/Assessment_details_1.png)

![Device42 Assessment details in Azure Example](/assets/images/Assessment_details_2.png)

![Device42 Assessment details in Azure Example](/assets/images/Assessment_details_3.png)

**If you need help with steps or processes discussed on this page and haven't found the answer here, please don’t hesitate to reach out to [support@device42.com](mailto:support@device42.com)!**
