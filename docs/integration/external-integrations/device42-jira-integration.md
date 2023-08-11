---
title: "Jira (self-hosted) Integration"
sidebar_position: 15
---

### Integration Prerequisites

To use the Device42-Jira integration, users must have:

- **Device42** virtual appliance, running, properly configured, and populated with CIs (to sync to Jira) 
- **Jira instance _\[Server, self-hosted for this version\]_**, properly configured, with the Device42 plugin installed.

_*If you are looking to integration Device42 with Jira Service Management and/or Jira Cloud, see the [Device42-Jira Service Management/Cloud integration page.](device42-jira-cloud-integration.md)_

### Device42-Jira self-hosted Integration Feature Overview

The Device42-Jira integration offers users the following functionality:

- Synchronize select Device42 data with Jira, automatically (and/or manually)
- Attach configuration items synced from Device42 to Jira issues
- Search for Jira issues relating to a Device42 CI(s) and/or CI data
- Create custom fields and apply them to specific projects, create custom field sets, and populate custom fields using built-in stackable filters to create a customized set of Device42 CIs.
- Store filter templates for the fast future usage
- Automate common IT workflow with validators and conditional functions, based on the Device42 custom field values
- Automatically request the next free IP address on a subnet, and acquire it when an issue transitions

* * *

## Installing the Device42 Jira add-on

The Device42 add-on is the part of Atlassian Marketplace, so you can easily install it using the UPM \[Universal Plugin Manager\]. The add-on’s search capability is provided by Jira from the Jira search box. However, if you have some specific environment that blocks Jira from access to the internet it is possible to install Device42 plugin manually. Please note that the plugin requires a stable connection between the server hosting your Jira application instance, and your Device42 application instance to operate properly.

_It can also be downloaded from the Device42 Integrations Page:_

> [https://www.device42.com/integrations/jira/](https://www.device42.com/integrations/jira/)

### Automatic installation

_To install the add-on:_

1. Log in as a user with the **'Jira System Administrators'** global permission.
2. From the Jira administration console, click the **Add-ons**. Select _Find add-ons_.
3. In the search field type _'Device42'_ and press **'Enter'**.See screenshot:![01_install_addon.png](/assets/images/1160955568-01_install_addon.png)
4. Click the _'Install'_ button
5. A confirmation message appears when the add-on is successfully installed. You can now manage the add-on from the user installed add-on list on the Manage add-ons page.

### Manual installation

_To install the add-on:_

1. Download the latest version of add-on from the link. If you don't have an internet connection available (i.e. a secured sandbox environment), you can download the JAR file on a network with internet access, and transfer it via an USB thumb drive or other external media.
2. Log in as a user with 'Jira System Administrators' global permission.
3. From the Jira administration console, click the Add-ons. Select Manage add-ons.
4. Click the Upload add-on link at the top right side of the page. The following dialog appears:![jira-connector-002.png](/assets/images/2796820748-jira-connector-002.png)
5. Enter the location of the JAR file (downloaded in step 1) to upload using the file browser or by specifying a network location by entering a URI.
6. Click Upload. A confirmation message appears when the add-on is successfully installed. You can now manage the add-on from the user installed add-on list on the Manage add-ons page.

* * *

## Configure the Integration

_To configure the Jira add-on:_

1. Log in as a user with 'Jira Administrators' global permission.
2. From the Jira Administration Console, click ‘_Add-ons’_.
3. Select DEVICE42 CONNECTOR > Device42 Connection to open the configuration page.
    
    ```
    Keyboard shortcut: g + g + start typing Device42. You will see the configuration screen and would be able to execute configuration actions.
    ```
    
    Initially the configuration shows only links for the base configuration of the plugin:
    
    ![03_config_addon.png](/assets/images/3788493776-03_config_addon.png)

### Set up the Device42 connection

1. On the configuration page click Edit or follow the Configure link to setup connection to Device42 instance._The following page opens:_![02_config_addon.png](/assets/images/245683236-02_config_addon.png)
2. Enter the connection information
3. Click 'Save'.
4. You will see the saved details on the configuration view screen

### Manual Syncronization

The data from the Device42 instance is cached inside the internal Jira database. To ensure it is up-to-date, it should be periodically synchronized. To manually perform an immediate synchronization:

1. On the configuration information page, simply click the _'Update Data'_ button
2. A confirmation dialog will appear; Press the _'Update Data'_ button on that dialog to confirm.![Synchronize manually](/assets/images/3663324212-29_manual_scan_start.png)
3. The dialog will be closed and you will see current collection statistics data (for manual scan you will see the warning message that scan is pending to be started that is shown for about 15 seconds)![Manual Scan Init](/assets/images/1071301296-30_manual_scan_init.png) ![Manual Scan Progress](/assets/images/74876009-31_manual_scan_progress.png)
4. If you wish to stop current scan you can abort the scan. Click the 'Abort' button and confirm the abort. Please note, that the currently scanned Configuration Item list will be synchronized partially.![Abort Scan](/assets/images/3166586938-32_manual_scan_abort.png)
5. You will see current scan statistics on the main screen (it could be started manually or automatically). After the synchronization completed the warning message will disappear![Scan Complete Statistics](/assets/images/950194180-33_manual_scan_ready.png)

### Configure automatic synchronization

Automatic sync/updates are configured using regular **Cron Expressions**, which you are likely already familiar with.

> Cron expression rules you can see [here](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/tutorial-lesson-06.html).

1. On the configuration information click 'Setup Cron' button
2. Enter the cron expression rule inside the cron configuration dialog![05_setup_cron.png](/assets/images/1830417591-34_cron_setup.png)
3. Click 'Save' button
4. You will see the saved details on the configuration view screen

### Delete plugin data

If you wish to clear up the plugin data, you can use the _‘Delete plugin data’_ functionality. There are two different options for plugin data cleanup for Jira. 'Connection' option remove connection settings, all filter data, scan results for the configuration items. The 'All' option will remove custom fields and their data additionally. To delete the plugin data:

1. Click the 'Delete' icon.
2. Select one of the option 'Connection' or 'All'![Delete Data](/assets/images/1680748251-35_delete_start.png)
3. In the opened dialog select the confirmation checkbox
4. Click the 'Delete' button![Delete Confirm](/assets/images/1693541312-36_delete_finish.png)

* * *

## Device42 Custom Field & Filter usage

The Device42 Jira Connector provides one new Custom Field type in Jira, The "Device42 Custom Field" which works with Device42 configuration items.

_To create a new custom field Device42 Custom Field:_

1. Log in as a user with 'Jira Administrators' global permission.
2. From the Jira administration console, click the Issues. Select FIELDS > Custom Fields.
    
    ```
    [Keyboard shortcut: g + g + start typing custom fields.]
    ```
    
3. Click the "Add Custom Field" button, the following dialog will be displayed:![Add Custom Field](/assets/images/1375163554-d42-003.png)By default, this dialog displays the Standard, or most common choices for custom fields. Click on the All or Advanced option in the left navigation to access to all custom fields.
4. In the list, look for **Device42 Custom Field**, or type **Device42** in the top right search box and select the custom field:

![Look for Device42 Custom Field](/assets/images/2411859984-06_custom_field.png)

5. Click Next.
6. Give it a name, a description. Click Next.
7. Associate the field to screens. Click Update.

Now your custom field is created. If you wish to change the context or other variables in your custom field, see Configuring a Custom Field. Please note that plugin supports creation of multiple Device42 custom fields on the same screen.

* * *

### Configure filters

Device42 Jira Connector allows intelligent configuration of the custom fields and can restrict the list of CIs available on the custom field edit screen. You can also add filters to the selection list for each configuration item. It is also possible to configure filter templates that can be used to pre-set options for new filters. The filter templates section also allows one to edit the default filter that is applied to all projects by default, or after a filter reset for the project. Please note that \*ANY CHANGES TO THE DEFAULT FILTER\* will affect \*ALL PROJECTS\* that do not have their own custom filter configuration.

![Config Filters](/assets/images/1115469314-37_filter_templates.png)

### General filter details

1. **General settings**In general settings, you can select the list of configuration items that would be available for the selected custom field in the selected project. At least one option should be selected.![General Settings](/assets/images/3475892906-38_general_section.png)
2. General filter capabilities

You can switch on and off any parameter. The parameter will be hidden in any view of the field. All the parameters can be enabled / disabled for the custom fields provided by the plugin. Device42 supports smart filtering using the QL language. Each CI filter settings contains the list of parameters of each CI that can be used for filtering. The values within different parameters are being combined using AND logic. The filter search is \*not\* case sensitive. The filter inclusion is checked according to the operation. For the multiple parameters (like tags) filter is being applied for each parameter in the list. For the CI parameters (like part model) filter is being applied to ID, and any searchable parameter within the CI representing the parameter.

_For each parameter, the following rules can be applied:_

```
a) You can enter the value and the CIs will be filtered by this value.
```

> Example: '_test_''. Only the CIs that has in the specified parameter 'test' word would be displayed

```
b) You can enter set of values separating them by the comma ',' or ampersand '&'. The CIs would be filtered according to the AND logic.
```

> Example: '_hello, world_'. Only the CIs that contain the words 'hello' and 'world' inside the specified parameter would be displayed. CIs with the parameter 'Hello world' would be displayed, but CIs with the parameters 'hello' and 'world' would be skipped.

```
c) You can enter set of values separating them by the vertical bar '|'. The CIs would be filtered according to the OR logic.
```

> Example: '_hello| world_'. The CIs that contain the word 'hello' or the word 'world' inside the specified parameter would be displayed. The OR is not exclusive, so the CIs with the parameter 'Hello world' would be displayed, too.

```
d) You can change the sequence of operations using the parenthesis. '()'. The CIs would be filtered according to logic based on the result operation.
```

> Example: '_(1| 2), (3, (4 |5))_'. The CI can pass the filter if: 1) it contains 1 or 2 inside the specified parameter; 2) it contains 3 inside the parameter; 3) it contains 4 or 5 inside the specified parameter.

![Filtering](/assets/images/1385807415-024_CI_filter.png)

### Project filters

1. Open Project Administration
2. Click Device42 Filters link on the bottom of the menu
3. Select the custom field you want to configure
4. If you wish load the filter preset clicking 'Load from template' link.![Filter template](/assets/images/948840615-39_save_filter.png)
5. Change the filter configuration settings
6. Press the save button to store the settings
7. You will see success message on the top of the filter if the filter was saved

_Note_: if you haven't selected any value in the general settings to display CIs inside the custom field, you will see an error message notifying you about that.

### Reset project filter

1. Open Project Administration
2. Click Device42 Filters link on the bottom of the menu
3. Select the custom field you want to reset filter for![Reset Filter](/assets/images/4120086500-40_reset_filter.png)
4. Press the 'Reset' button
5. You will see success message on the top of the filter if the filter was reset

### Filter templates

Device42 has the possibility to manage the filter templates that could be used as the preset to start with filter management for the custom field. Filter templates functionality has the same possibility as the project filter except for the custom field selection. Instead of a selection of the custom field administrator able to create the new filter with the specified name, edit the existing filter or reset (delete) the named filter. Also, there is a possibility to manipulate with the default filter that would be used for the projects that do not contain own filter.

1. Log in as a user with 'Jira Administrators' global permission.
2. From the Jira administration console, click 'Add-ons' then select 'Device42 Connector' > 'Device42 Filter Templates'
3. If you wish to create a new filter template from the 'Filter Templates' selection list select '\*\*Create New...' and type the new name in the appeared text box![Create New Filter Template](/assets/images/2731396555-41_filter_template.png)
4. If you wish to edit the existing filter template select the needed filter template from the 'Filter Templates' selection list
5. Edit the needed filter template and click 'Save' button or reset the filter template for deletion (the default filter will be cleared but not deleted).

### Load from template

Project administrator can use the filter template functionality in any project filter. The filter template will be loaded instantly and will replace all the data in the filter screen. After the loading of the template project administrator can edit the filter in the normal way. The filter itself will not be saved until the project administrator clicks the 'Save' button.

1. Click the 'Load from template' link
2. Select the needed filter template in the list of filter templates appeared in the popup
3. Click the 'Apply' link![Load Filter Template](/assets/images/1325962955-42_load_filter_template.png)

* * *

## Using the Device42-Jira Plugin with Jira Issues

### View issue

On view screens a Device42 Custom Field looks so:

![Deviced42 Custom Fields View](/assets/images/2976328085-049_custom_field_filled_view.png)

You can see the list of CIs that are linked to the issue through custom field. For each of CI you can find the brief information and a link navigating you to the Device42 application CI representation. If some of the CIs were not found inside the Device42 system they will be marked as the deleted.

If you add the Device42 custom field to the issue navigator you would be able to see the brief information about CIs linked to the ticket with the ability to follow the link to the Device42 application. If you hover over the link you will see the detailed information on the device.

![Custom Field Navigator](/assets/images/219037797-15_custom_field_view_navigator.png)

### Create/Edit issue

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

## Downloading the Device42 - Atlassian Jira CMDB Connector

The addon can be downloaded via the link [found on this page @ device42.com as follows:](https://www.device42.com/integrations/jira/)

```
https://www.device42.com/integrations/jira/
```

...or [click here](https://marketplace.atlassian.com/apps/1213601/device42-cmdb-with-rest-apis-for-jira?tab=overviewhttps://marketplace.atlassian.com/apps/1213601/device42-cmdb-with-rest-apis-for-jira?tab=overviewhosting=datacenter) to download @ Atlassian Marketplace (or copy and paste URL below):

```
https://marketplace.atlassian.com/apps/1213601/device42-cmdb-with-rest-apis-for-jira?tab=overviewhttps://marketplace.atlassian.com/apps/1213601/device42-cmdb-with-rest-apis-for-jira?tab=overviewhosting=datacenter
```
