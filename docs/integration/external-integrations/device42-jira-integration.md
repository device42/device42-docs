---
title: "Jira (self-managed) Integration"
sidebar_position: 15
---

:::info
Atlassian Server is in the process of being [discontinued](https://www.atlassian.com/blog/platform/atlassian-server-is-going-away-next-steps) and the future of self-managed products is via the [Atlassian Data Center](https://www.atlassian.com/enterprise/data-center).
:::

### Integration Prerequisites

To use the self-hosted Device42-Jira integration, users must have:

* A running **Device42** virtual appliance, populated with configuration items (CIs) to sync to Jira.
* A properly configured **self-hosted Jira instance** with administrator access.

_*If you are looking to integrate Device42 with Jira Service Management and/or Jira Cloud, see the [Device42-Jira Service Management/Cloud integration page.](device42-jira-cloud-integration.mdx)_

### Device42-jira Self-hosted Integration Features

The Device42-Jira integration offers users the following functionality:

* Synchronize select Device42 data with Jira, automatically (and/or manually)
* Attach configuration items synced from Device42 to Jira issues
* Search for Jira issues relating to a Device42 CI(s) and/or CI data
* Create custom fields and apply them to specific projects, create custom field sets, and populate custom fields using built-in stackable filters to create a customized set of Device42 CIs.
* Store filter templates for the fast future usage
* Automate common IT workflow with validators and conditional functions, based on the Device42 custom field values
* Automatically request the next free IP address on a subnet, and acquire it when an issue transitions

* * *

## Install the Device42-Jira App

The **Device42 - CMDB with REST APIs for Jira** app is the part of Atlassian Marketplace, so you can easily install it using the Universal Plugin Manager (UPM). The app's search capability is provided by Jira from the Jira search box. 

If you have some specific environment that blocks Jira from accessing the internet, you can install Device42 plugin manually. Download the latest version of the app from this [Atlassian Marketplace](https://marketplace.atlassian.com/apps/1213601/device42-cmdb-with-rest-apis-for-jira?tab=overviewhttps://marketplace.atlassian.com/apps/1213601/device42-cmdb-with-rest-apis-for-jira?tab=overviewhosting=datacenter) link. Or copy and paste the following URL into your browser:

```
https://marketplace.atlassian.com/apps/1213601/device42-cmdb-with-rest-apis-for-jira?tab=overviewhttps://marketplace.atlassian.com/apps/1213601/device42-cmdb-with-rest-apis-for-jira?tab=overviewhosting=datacenter
```

:::info
Please note that the app requires a stable connection between the server hosting your Jira application instance, and your Device42 application instance to operate properly.
:::

### Automatic Installation

To install the app from your Jira instance:

1. Log in as a user with the **'Jira System Administrators'** global permission.
2. From the Jira administration console, select the **Manage apps** option and in the left panel, click on **Find new apps**.

    ![Manage apps menu](/assets/images/jira-self-managed/manage-apps-menu.png)

3. Type **device42** in the search bar and press **Enter**.
4. Find the **Device42 - CMDB with REST APIs for Jira** app and click its **Install** button.

    ![Search for app in Jira](/assets/images/jira-self-managed/automatic-installation-menu.png)

5. A confirmation message appears when the app is successfully installed. You can now manage the app from the **Manage apps** tab.

### Manual Installation

To manually install the app to your Jira instance:

1. Go to the [Atlassian Marketplace](https://marketplace.atlassian.com/apps/1213601/device42-cmdb-with-rest-apis-for-jira?tab=overview&hosting=datacenter) and lick on the **Get it now** button to download the `.jar` file of the latest version of the app. If you don't have an internet connection available (i.e. a secured sandbox environment), you can download the `.jar` file on a network with internet access, and transfer it via a USB thumb drive or other external media.

    ![Download .jar file](/assets/images/jira-self-managed/manual-download-jar.png)

2. Log in with Jira administrator access and click on the **Manage Apps** tab, and select the **Manage apps** from the left panel.
3. Click on the **Upload app** link at the top right side of the page. The following dialog appears:

    ![Upload app](/assets/images/jira-self-managed/manual-choose-jar-file.png)

4. Click on the **Choose file** button to open file browser and select the `.jar` file you downloaded from the Atlassian Marketplace.
5. Click on the **Upload** button. When the app has been successfully installed, a confirmation notice will appear. 

    ![Installation success confirmation](/assets/images/jira-self-managed/manual-confirmation.png)

You can now manage the app from the user installed app list from the **Manage apps** tab.

* * *

## Configure the Integration

A brand new installation of the app requires the following initial configuration steps from your Jira instance:

1. After the app has been successfully installed, click on the **Configure** link to setup connection to your Device42 instance.

    ![Initial connection config](/assets/images/jira-self-managed/initial-configuration.png)

2. Enter your Device42 **Base URL**, **Username**, and **Password** and click on the **Save** button. 

    ![Initial connection config](/assets/images/jira-self-managed/fill-connection-form.png)

3. If the connection is successful, you will see the saved details on the configuration view screen.

    ![Initial connection config](/assets/images/jira-self-managed/base-connection-info.png)

### Edit the Connection Settings

To edit the connection settings:

1. Log in as a user with 'Jira Administrators' global permission.
2. Use the shortcut to navigate to the **Device42 Connection** page. Press **g** twice and type **Device42** into the search bar. Select the **Device42 Connection** option. Alternatively, click on the **Manage apps** tab and select the **Device42 Connection** option from the left sidebar.

    ![Connection shortcut menu and search bar](/assets/images/jira-self-managed/gg-shortcut.png)

3. Click on the pencil icon to the right to open the connection information form for editing. 

    ![Edit Device42 Connection](/assets/images/jira-self-managed/d42-connection-edit.png)

### Manual Synchronization

The data from the Device42 instance is cached inside the internal Jira database. To ensure it is up-to-date, it should be periodically synchronized.  Manually perform an immediate synchronization as follows:

1. On the configuration information page, click on the **Update Data** button.

    ![Update data button](/assets/images/jira-self-managed/update-data-button.png)

2. A confirmation dialog will appear; click on the **Update Data** button to confirm.

    ![Initial connection config](/assets/images/jira-self-managed/update-data-confirm.png)

3. You will see the initial collection statistics data. For a manual scan, you will see the warning message that scan is pending to be started that is shown for about 15 seconds.

    ![Statistics when scan in progress](/assets/images/jira-self-managed/scan-in-progress.png)

4. Click on the **Refresh** button. Under **Collection results** you can see a progress bar for the entire scan and below that selection, under the **Status** column, you can view the sync progress of individual CIs. 

5. If you wish to stop current scan you, click the **Abort** button, tick the **I agree** checkbox and select **Abort** to confirm. Please note, that the currently scanned Configuration Item list will be synchronized partially.

    ![Abort scan confirmation](/assets/images/jira-self-managed/abort-scan-confirmation.png)

6. After the synchronization is complete, the warning message will disappear and the status of individual CIs will be listed as **Done**. 

    ![Abort scan confirmation](/assets/images/jira-self-managed/sync-complete.png)

### Configure Automatic Synchronization

:::tip
Automatic sync updates are configured using regular **cron expressions**. Visit [this tutorial](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/tutorial-lesson-06.html) for a quick explanation of cron expressions. 
:::

1. From the **Device42 Connection** tab, where the sync statistics are listed, click on the '**Setup Cron** button.
2. Enter the cron expression inside the cron configuration dialog box. In this example, the cron expression `0 0 0 1/1 * ? *` means "00:00:00 (midnight) every day".

    ![Setup cron job](/assets/images/jira-self-managed/setup-cron-job.png)

3. Click on the **Save** button
4. You will see the **Next Update Time** listed on the configuration view screen below your username.

    ![Next update time](/assets/images/jira-self-managed/cron-next-update.png)

### Delete App Data

If you wish to clear up the app data, select one of the two delete options in Jira as follows:

1. Click on the **X** icon at the top right of the **Connection Settings** page.
2. Select either the **Connection** or **All** option. The **Connection** option removes your connection settings, all filter data, and scan results of the configuration items. The **All** option deletes all data including custom field entries.
    
    ![Delete plugin data options](/assets/images/jira-self-managed/delete-plugin-data-options.png)

3. Check the **I agree** confirmation checkbox and click on the **Delete** button to confirm. Note that selecting the **Delete D42 Schema** will require you to import the default schema again.

    ![Delete data confirm](/assets/images/jira-self-managed/delete-data-confirm.png)

* * *

## Add a Device42 Custom Field 

The Device42-Jira connector app provides a new **Device42 Custom Field** type in Jira to work with Device42 configuration items.

Create a new custom field Device42 Custom Field as follows:

1. Log in as a user with Jira administrator access.
2. From the Jira administration console, click on the **Issues** tab and select **Custom fields** from the left panel. Or use the `g` + `g` keyboard shortcut and search for **custom fields**.
    
    ![Custom fields menu](/assets/images/jira-self-managed/issues-custom-fields-menu.png)

3. Click the "Add Custom Field" button, the following dialog box will be displayed:

    ![Add custom field button dialog box](/assets/images/jira-self-managed/add-custom-field-button.png)

    By default, the **Standard** choice for custom fields are displayed on the left navigation bar. Choose the **All** or **Advanced** option to access the list that includes the Device42 field type.
   
4. From the list, look for the **Device42 Custom Field** option, or type **device42** in the top right search bar and select the custom field:

    ![Add custom field button dialog box](/assets/images/jira-self-managed/d42-custom-field-option.png)

5. Click on the **Next** button.
6. Give the custom field a **Name** and optional **Description**, then click on the **Next** button.

    ![Add custom field button dialog box](/assets/images/jira-self-managed/d42-field-form.png)

7. Configure the custom field context by choosing the Jira issue type you want to add the custom field to and whether to add it to all or selected projects.
   
    ![Add custom field button dialog box](/assets/images/jira-self-managed/custom-field-context.png)

8. Associate the field to screens by clicking on the check boxes. Click Update.

    ![Add custom field button dialog box](/assets/images/jira-self-managed/associate-fields-to-screens.png)

Your custom field is now created. If you want to edit the context or other variables of your custom field, click the **ellipsis icon** under the **Actions** column on the **Custom fields** main page. The app supports creating multiple Device42 custom fields on the same screen.

![Add custom field button dialog box](/assets/images/jira-self-managed/edit-configure-contexts.png)

* * *

## Custom Field Filters for Configuration Items

Device42 Jira Connector allows intelligent configuration of the custom fields and can restrict the list of CIs available on the custom field edit screen. You can also add filters to the selection list for each configuration item. 

    The Device42 Jira app provides the ability to limit the variety of Configuration Items (CIs) visible on the custom field editing interface. You can also add filters to the selection list for individual CIs.

It is also possible to configure filter templates that can be used to pre-set options for new filters. The filter templates section also allows one to edit the default filter that is applied to all projects by default, or after a filter reset for the project. Please note that any changes to the default filter will affect all projects without their own custom filter configuration.

    You can create filter templates to quickly apply a set of filters. You can also edit the default filter applied all projects. Note that changing the default filter affects all projects without their own custom filter configuration.

![Config Filters](/assets/images/1115469314-37_filter_templates.png)

Include points: 
- Use filters to define the CIs are available for selection in the Device42 Custom Field. The Device42 Custom Field can be added to a Jira issues to link related CIs to individual issues. Jira issues are created within a project.

- Each CI has several parameters. For example... 


### Default Device42 Filter Options

1. Navigate to the default Device42 filter settings  Please note that changes made to the default filter will be applied all projects that don't have their own custom filter configuration.

See the [Configure Project-Specific Filters](#configure-project-specific-filters) section for details on how to find the filter settings of a project. The interface for configuring the default filter and project-specific filters are the same.*(confirm?)

1. **General settings** options. Select the configuration items you want available for a selected custom field by default. At least one option should be selected. 
   
   ![General Settings](/assets/images/3475892906-38_general_section.png)

2. **Specific CI type filters** Individual CI types contains fields unique to its type to be used for filtering.

![Filtering](/assets/images/1385807415-024_CI_filter.png)

Type in the value that you want your list of CIs to contain. You can create unique and highly-specific filters include the exact CIs that you want using logical conditionals. Device42 uses general Query Language syntax to define these conditionals. 

For the multiple parameters (like tags) filter is being applied for each parameter in the list. For the CI parameters (like part model) filter is being applied to ID, and any searchable parameter within the CI representing the parameter.

### Using Query Language to Filter CIs

Use the following Query Language rules, ranging from exact value matches to complex logical conditions, to filter configuration items. Note that the filter search is NOT case sensitive.

* Filter the CI selection based on an **exact value**.

    Example: `test`. Only the CIs with the specified parameter `test` would be displayed.

* Use AND logic to filter CIs that **match all the values** separated by a comma `,` or ampersand `&`.

    Example: `hello, world`. CIs with the parameter `hello world` would be displayed, but CIs with only the word `hello` or only the word `world` will be skipped.

* Use OR logic to include CIs that **match at least one** of the given values separated by a vertical bar `|`.
  
    Example: `hello | world`. The CIs that contain the word `hello` or the word `world` inside the specified parameter would be displayed. The OR is not exclusive, so the CIs with the parameter `Hello world` would be displayed, too.

* You can change the sequence of operations using the parenthesis `()`. The CIs would be filtered according to order and logic of the operation.

    Example: `(1 | 2), (3, (4 | 5))`. CIs will pass this filter if it meets all conditions: 
    * it contains 1 or 2 inside the specified parameter AND 
    * it contains 3 inside the parameter AND 
    * it contains 4 OR 5 in the specified parameter.

### Reset Filters

1. Open Project Administration
2. Click Device42 Filters link on the bottom of the menu
3. Select the custom field you want to reset filter for

   ![Reset Filter](/assets/images/4120086500-40_reset_filter.png)

4. Press the 'Reset' button
5. You will see success message on the top of the filter if the filter was reset

### Create Filter Template

Create filter templates to be used as the preset to start with filter management for the custom field. 

Default filter templates have the same options as the project filter templates, apart from the custom field selection option.

Instead of a selection of the custom field administrator able to create the new filter with the specified name, edit the existing filter or reset (delete) the named filter. 

You can also manipulate the default filter that will automatically be applied to all projects without their own custom filter.

1. Log in as a user with Jira administrators access.
2. From the Jira administration console, click on the **Apps** tab and then select **Device42 Connector > Device42 Filter Templates**.
3. Create a new filter template from the 'Filter Templates' selection list by selecting **Create New...** and entering a name for the new filter template.
   
   ![Create New Filter Template](/assets/images/2731396555-41_filter_template.png)
   
4. Edit the existing filter template by first selecting it from the list of **Filter Templates**.
5. Click **Save** button to save the changes.
6. Or click the **Reset** button undo the changes made to the default filter. Note that this does not delete the default filter

### Load Filter Template

Project administrator can use the filter template functionality in any project filter. The filter template will be loaded instantly and will replace all the data in the filter screen. After the loading of the template project administrator can edit the filter in the normal way. The filter itself will not be saved until the project administrator clicks the 'Save' button.

1. Click the 'Load from template' link
2. Select the needed filter template in the list of filter templates appeared in the popup
3. Click the 'Apply' link
   
   ![Load Filter Template](/assets/images/1325962955-42_load_filter_template.png)

### Configure Project-Specific Filters

1. Open Project Administration
2. Click Device42 Filters link on the bottom of the menu
3. Select the custom field you want to configure
4. If you wish load the filter preset clicking 'Load from template' link.

    ![Filter template](/assets/images/948840615-39_save_filter.png)

5. Change the filter configuration settings
6. Press the save button to store the settings
7. You will see success message on the top of the filter if the filter was saved

_Note_: if you haven't selected any value in the general settings to display CIs inside the custom field, you will see an error message.

* * *

## Using the Device42-jira App with Jira Issues

### View issue

On view screens a Device42 Custom Field looks so:

![Deviced42 Custom Fields View](/assets/images/2976328085-049_custom_field_filled_view.png)

You can see the list of CIs that are linked to the issue through custom field. For each of CI you can find the brief information and a link navigating you to the Device42 application CI representation. If some of the CIs were not found inside the Device42 system they will be marked as the deleted.

If you add the Device42 custom field to the issue navigator you would be able to see the brief information about CIs linked to the ticket with the ability to follow the link to the Device42 application. If you hover over the link you will see the detailed information on the device.

![Custom Field Navigator](/assets/images/219037797-15_custom_field_view_navigator.png)

### Create or Edit an Issue

On create/edit screens you can link Device42 CIs to the Jira issue. The field in the edit mode which looks like:

![Edit Mode](/assets/images/3399178301-16_custom_field_edit.png)

In the edit mode, you can select the preferred type of the CI and link the issue to one or more of the CIs according to the type selected. You can search for the specific data using the context search mechanism. If you want to delete the CI, simply click the cross icon on the right of each of the selected CIs. The list of CI types and the list of CIs inside each of the type are shown according to the Project Filter applied to the project and custom field. You will not be able to assign the CIs outside the filtered scope. If the filter was created after the issue was edited the data will be shown inside the view mode, however, if you edit the issue the CIs and CI types outside the filter scope will be removed.

> For the large scope of CIs plugin uses ajax to request the data for the CI selection list, so the CIs are loaded by portions. It is possible to search the custom field by the term. The search scope is the display name of the CI. In the future, we plan to extend this functionality and use the smart search of data.

* * *

### Device42 Custom Fields

Device42 Custom Field can be used to link the Configuration Item of the Device42 system to the Jira issue. You can have multiple independent Device42 custom fields inside one issue. You can link a set of Configuration Items to a particular issue using one custom field, but they should be of the same category (i.e. Devices only). You can apply a project filter for the list of the possible Configuration Items you want to see inside the specific project. Also, you can apply the filter to the each of the Configuration Items category (see Project Filters Configuration for details).

### Search issues by Device42 Custom Fields

Device42 custom fields allow full-text search on the CI IDs and parameters. Almost all parameters are available for search, however, users cannot specify exact parameters to search. For example, if you search for the word '_Device_' you will find the issues with a custom field containing devices and custom fields with other CI types that contain the word 'device' in their name.

### Simple search

1. Open the issue navigator. Select 'Simple' search mode
2. Click the 'More' selection list. Search for the custom field by name
3. Open the added custom field search filter
4. Add the search criteria in the text box under the filter
5. Click the 'Update' button. You will see the issues filtered by the custom field inside the issue navigator![Simple Search](/assets/images/4199241721-17_custom_field_simple_search.png)

### Advanced search

1. Open the issue navigator. Select 'Advanced' search mode
2. Type the search request using JQL query language. Supported operators for the field: '~', '!~', 'IS EMPTY', 'IS NOT EMPTY'.
    
    > _Example:_ D42 ~ "NH\*"
    
3. Press 'Enter' … You will see the issues filtered by the custom field inside the issue navigator.![Advanced Search](/assets/images/2692817204-18_custom_field_advanced_search.png)

* * *

## Jira Workflow automation

The Jira - Device42 connector plugin allows for the automation of business processes related to Device42 Entities. Current release allows to acquire the IP address in the selected Subnet automatically and configure the permission to show/follow the transition based on the content of the Device42 custom fields.

### Post Function

The Device42 post function now have only option to acquire the IP address based on the selected network. The action is performed during the transition in the workflow, for example, when you move the ticket from one status to the other or create the ticket. The post function will gather information about the selected subnet from the Device42 custom field (the field can be selected inside the post function setup), will acquire the IP address from the Device42 instance. The notifications, error messages and IP address information will arrive inside the comments to the ticket.

### **Add post function to the workflow**

To give your project the ability to request the next free IP address from Device42 automatically, do the following:

1. Edit the workflow that is used to manage the ticket life cycle for the specified issue type in the target project.

![Edit Workflow](/assets/images/1117685725-WF01_edit_workflow.png)

1. Inside the opened workflow for the edit mode click the transition you want to automate. If you don't have the needed transition or your workflow is not configured the way you like, please follow the guides https://confluence.atlassian.com/adminjiraserver/working-with-workflows-938847362.html and https://confluence.atlassian.com/adminjiraserver/advanced-workflow-configuration-938847443.html

![Edit Transition](/assets/images/3481454388-WF02_edit_transition.png)

1. Inside the transition click the "Post Functions" tab and click "Add post function" link. That will open the list of post functions that can be added to the workflow.

![Add POST Function](/assets/images/2227388799-WF03_add_postfunction.png)

1. Select the Device42 automation post function and click the "Add" button

![Add D42 POST Function](/assets/images/1409581816-WF04_add_device42_postfunction.png)

1. Inside the edition mode for Device42 post function you can select the Device42 custom field that will have the information about the subnet, where the IP address should be acquired (source custom field, required).

![Edit POST Function](/assets/images/1170084606-WF33_postfunction_edit.png)

1. It is required that the post function is processed in a specific position when configuring the transition. For regular transitions between two statuses, the POST function should be placed between "set issue status" default post function and "Update change history" default post function. By default, the Device42 post function arrives on the second place and nothing should be done.

![Save POST Function](/assets/images/2025155596-WF08_2_device42_postfunction_saved.png)

1. When creating transitions, the behaviour is similar except there is another set of POST functions available. You can use a POST function in a workflow the same way you would any regular transition.

![Create Comment](/assets/images/2359335590-WF09_2_device42_postfunction_create_comment.png)

### Post function usage

You can just follow the transition, fill the Device42 custom field if needed (inside the transition screen, if it was set up) and get the results of the IP address to acquire inside the comments and custom fields (if they are set up)

![Post Function Usage](/assets/images/4007641174-WF11_postfunction_usage.png)

### Condition / Validator functions

Device42’s Jira plugin has the possibility to validate the Device42 data inside the custom fields during the transition or check the custom field detains to indicate if the transition should be shown at all. Device42 custom fields could be checked on the amount of the CI stored, types of the CIs and values can be validated by the filter on the specific parameter criteria.

### **Condition specific setup**

For the detailed information on condition setup please refer to the https://confluence.atlassian.com/adminjiraserver/advanced-workflow-configuration-938847443.html#conditions section

1. Edit the workflow as described in sections 1 and 2 for the post functions
2. Select the "Conditions" configuration tab and click the "Add Condition" button to add the new condition

![Condition Setup](/assets/images/2927132074-WF12_condition setup.png)

1. Select the Device42 condition inside the radio button list and click "Add" button

![Condition Add](/assets/images/2267951616-WF13_condition_add.png)

1. Follow the generic setup section to configure the condition

![Condition Configure](/assets/images/4095363315-WF14_2_condition_configure.png)

### Validator specific setup

For the detailed information on validator setup please refer to the https://confluence.atlassian.com/adminjiraserver/advanced-workflow-configuration-938847443.html#validators

1. Edit the workflow as described in sections 1 and 2 for the post functions
2. Select the "Validators" configuration tab and click the "Add Validator" button to add the new validator

![Validator Setup](/assets/images/2172437505-WF15_validator_setup.png)

1. Select the Device42 validator inside the radio button list and click "Add" button

![Validator Add](/assets/images/3184583012-WF16_validator_add.png)

1. Follow the generic setup section to configure the validator

![Validator Configuration](/assets/images/1757711833-WF17_2_validator_configure.png)

### Condition / Validator Generic Setting

The Device42 Custom Field validator and condition have essentially the same setup parameters and usage possibilities. The main/only difference is that the condition function will show or hide the transition link depending on the state of custom fields set up inside the condition configuration, while the validation function will check the states of the custom fields during the transition itself. Unlike the condition, the validator will show a user-specified error message (related to the specific custom field) during the transition, and as mentioned, this is configurable. The error message, when displayed, is also duplicated on the top of the transition screen.

The configuration screens for validation and condition are similar as well. You may freely add sets of validators (with "and" logic) and sets of conditions (with "or" or "and" logic depending on the condition setup).

Inside the validation configuration, an administrator can set up the validation for Configuration Items count, CI types, and can also add a filtering check against the configuration item’s parameters. You can also set up live validation that will update the selected configuration items cache with the latest data _\[a real-time call will be made to Device42 to live-validate the data, ignoring the cached data stored in the Jira DB\]_. For validation, an administrator can configure both the error message and can choose which custom field should be validated.

![Generic Info](/assets/images/358318860-WF18_2_generic_info.png)

### Advanced Validation Scenarios

It is possible to set up advanced scenarios where beyond validating the custom field itself, an administrator can select aggregation options such as “Any” (so if any Device42 custom field that exists in the system is validated, the transition will be validated), “All” (so all Device42 custom field existing in system should be validated to pass the transition), “None” (none of the Device42 custom fields should be validated; if any field is validated the validation fails). For the validator, it is possible to add a custom error message that will be displayed when a user fails the workflow validation. The error message should contain clear instructions on how to fulfil the custom field’s validation criteria and should notify the user that a mistake was made. If an administrator leaves the message field empty, the default message will be generated. The administrator also has the ability to configure the live check for the CI details to be validated.

![Error Message Config](/assets/images/1414389535-WF34_live_message.png)

If this option is selected, for the CIs that supports the update by the CI id the data for the CIs stored in the custom field will be instantly retrieved from the Device42 instance and validated against, disregarding the cached value in the Jira DB. All the validation options follow "AND" logic between the sections. That means that the custom field should follow the amount criteria, type criteria, and filter value criteria to pass the validation.

### **Quantity Validation:**

**Exact Value, less than or Equals, Greater than or equals**

The ‘_amount’_ validation option allows an administrator to limit the amount of CIs selected inside the custom field.

- The default option is "Any", which switches off this validation criteria.
- _Exact value_ means that to meet the validation criteria, the custom field in the ticket should contain the exact amount of CIs specified. The amount of configuration items can be set up inside the validation configuration in the field right to the amount selection.
- _Equals or less_ means to pass the validation, the custom field in the ticket should not contain any more CIs than the number specified in the configuration. Zero CI is \*not\* allowed by this validation. Please note, if any other validation set up zero items, validation will not succeed.
- _Equals or more_ means that to pass validation, the custom field in the ticket should not contain less configuration items than the amount specified in configuration.

![Exact Amount Validation](/assets/images/2853989934-WF20_2_amount.png)

The _type_ validation option allows the administrator to limit the types of CIs that can be selected inside the specified custom field. It is possible to add multiple CI types. When multiple types are added, if Configuration Items with any of selected type is added to the custom field, the validation will succeed. If no types are added, this section will be ignored.

![Type Validation](/assets/images/3144611808-WF21_2_types.png)

The _value_ validation option is the most flexible one for the validation configuration. You can add one or more sets of validation options to pass or fail validation according to the values contained inside the Configuration Item parameters selected inside the custom field. You can freely add, remove or modify the rows inside this section. Each row can contain sets of configuration controls that allow the addition of validation criteria. If no rows are added, this section will be ignored during the validation. If there are multiple Configuration Items inside the custom field the validation will be passed if at least one configuration item inside the custom field passes the validation.

![Value Validation](/assets/images/2306401146-WF22_filter_general.png)

Each value validation row can be added to one of the subsets: "Or" or "And" subset. Those subsets would be checked separately. For "And" subset the validation will be passed when all "And" rows are successfully validated for the checked custom field. For "Or" subset the validation will be passed when any of row will be successfully validated for the checked custom field.

![Filter Qualifier](/assets/images/4237586188-WF23_filter_qualifier.png)

An administrator can specify the CI type the filter will be applied to. If the CI type in the custom field is not correct, the value of the filter validation row will be ignored (only the Configuration items of CI type specified in the filter will be checked. Any other will be ignored). If different CI types are added to the ‘_And’_ qualifier, only the rows containing appropriate CI types will be applied and checked through validation. If you select any qualifier, the row will be validated for any value in the custom field, disregarding the type, but you will not be able to select the parameter type.

![Filter CI Type](/assets/images/4185393136-WF24_filter_CI_type.png)

If you selected the CI type for the validation it is possible to specify the parameter to be validated. If the _‘Any’_ option is selected, the validation will be checked for all the parameters inside the configuration item. If there is a parameter that passes validation, the validation will be passed for this criterion.

![Filter parameter](/assets/images/3097217316-WF25_filter_parameter.png)

### **Validation Types**

There are 4 validation types that can be used for the validation of specific parameter:

1. ‘Not Empty’\* the parameter value should exist inside the Configuration Item. Addition value is not used.
2. _’Exact Value’_ the parameter value should exactly equal the value specified inside the row in the configuration.
3. _’Contains the_ _parameter’_ value should contain the value specified inside the row in the configuration. The value supports the filter operators and sequences (so you can use the same language you use for the project filters, i.e. "(1|2),3" means that the configuration item parameter should contain "3" inside the text of parameter and additionally should contain "1" or "2" inside the text. For any parameter, all parameters will be checked and validation will pass if any parameter accepting the criteria found.
4. _’Not Contains the_ _parameter’_ should not contain the value specified inside the row in the configuration. The possibilities for the value are the same as described in contains section.

For the _exact value_, _contains_, and _not contains_ validation options, you can select the value. The _not empty_ will hide the option to enter the value:

![Validation Type](/assets/images/3552749932-WF26_filter_value.png)

When the "Add" button is pressed, a validator/condition will be added. The description will contain a short description explaining how the validation will be evaluated. You may edit the validator/condition while your workflow is in ‘edit mode’. To apply the validator/condition to the existing workflow and to real tickets, you must publish it. The example above proposes the validation criteria (inside validator) for the post function that acquires the IP address (with the addition of the filter criteria that the subnet name should contain the letter 'a').

![View Mode](/assets/images/3283822640-WF27_2_view_mode.png)

### Condition / validator usage

When the workflow is published, the validator/condition will start to work. As an example, the following workflow has _to do_ and _Done_ statuses, and during the transition, it will acquire an available IP address; this workflow will ask for the subnet to be specified during the transition, as well. The custom field _dtptest1_ is used on the view screen, and the transition contains the settings to prompt with the "Acquire IP" screen. The acquire IP screen contains only the _dtptest1_ custom field.

![Prepare Transition](/assets/images/1136811853-WF28_prepare_transition.png)

When a user enters the wrong data into the custom field the validator will fail the transition and indicate the error on the bottom to the custom field with duplication on the top.

![Wrong Custom Field](/assets/images/4041066092-WF35_wrong_custom_field.png)

When a user enters the proper data the transition will pass, and either the new IP address will be acquired via the post function or the error information will be inserted into the comment/text custom field linked to the post function.

![Transition Result](/assets/images/1527476301-WF32_transition_result.png)

* * *

### Jira Applications support

**Jira Software support**

You can use Device42 Custom Fields on Jira Software boards.

1. If you do not have a Jira Software board you can create the new one

![Create new board](/assets/images/3040618229-057_create_scrum_board.png)

1. You can configure the created or the existing board to add the Device42 Custom Fields to the Jira Software screens

![Configure new board](/assets/images/3935915411-22_configure_board.png)

1. Inside the Board Configuration screen you can add Device42 Custom Fields to the Backlog card view, Sprint card view (see Card Layout) or to the Issue Details View (see Issue Detail View)

![Configure layout](/assets/images/742893161-061_configure_board_layout.png) ![Configure Board Card](/assets/images/1033093203-062_configure_board_card_view.png)

1. As the result you will be able to see the Device42 fields inside the Jira Software board

![Board Backlog](/assets/images/1890783835-063_board_backlog.png) ![Backlog Details](/assets/images/3685061117-064_board_backlog_detailed.png) ![Sprint View](/assets/images/2420431951-066_board_sprint_view.png)

### Jira Customer Portal support

You can use Device42 Custom Fields inside Jira Service Management customer portal.

1. For the Service Management Portal you want to add Custom Fields to open Service Management Project administration. Open Request Types section. Open Edit Fields link for the needed ticket.![067_service_desk_admin.png](/assets/images/1205371318-067_service_desk_admin.png)
2. Press "Add Field" button. Select the needed Device42 Custom Fields and press Apply button.![068_service_desk_add_field.png](/assets/images/1542461239-068_service_desk_add_field.png)
3. Your customers will be able to use the Device42 Custom Fields when they are creating the tickets inside the customer portal![23_service_desk_edit.png](/assets/images/3078937449-23_service_desk_edit.png)![24_service_desk_view.png](/assets/images/244408111-24_service_desk_view.png)

* * *


