---
title: Jira Service Management Assets Integration
sidebar_position: 1
---

## Device42 JIRA Service Management discovery

A Configuration Management Database (CMDB) serves as a centralized database in an organization's IT environment, housing records of Configuration Items (CIs). It is a single source of truth for IT asset information, allowing your team to track and manage changes to items and their maintenance effectively.

Utilizing a CMDB in your team's workflows offers several advantages:

* Improved Visibility: A well-maintained CMDB offers a comprehensive and accurate view of the assets under your management. However, basic CMDBs may have data that becomes outdated and is not updated in real time.
* Better Change Management: With a CMDB, your team can monitor changes made to assets over time, including details like who made the changes when they were made, and the reasons behind them. This ensures proper documentation and approval of all changes, protecting assets from unauthorized modifications.
* Increased Efficiency: As a reliable source of asset information, a CMDB streamlines your team's work, reducing the time and effort needed to manage and maintain assets effectively.

Jira Service Management Cloud is a comprehensive service desk solution designed to optimize and elevate IT service management processes in enterprises. It offers a wide range of powerful features and tools aimed at expediting incident resolution, change management, and service request handling, resulting in enhanced customer satisfaction and operational efficiency.

Furthermore, it seamlessly integrates with the Device42 + Jira connector available on the Atlassian marketplace, utilizing our cloud connector to efficiently transmit data and further augment its capabilities.


## Integrate Device42 and Jira Service Management.

If your organization operates on a smaller scale or primarily deals with employee-facing IT assets or tickets, the JSM-Jira issue-tracking combination might meet your requirements adequately. However, if you need to handle infrastructure assets, operate on a larger scale, or have plans for future scalability, opting for Device42 in conjunction with Jira is the more suitable option. This combination enables you to manage your team's tasks efficiently and directly associate them with the relevant assets controlled through Device42, serving as your Configuration Management Database (CMDB). Now we’ll show you how easy it is to set up the Device42-Jira integration.


### Integrating Device42 and JSM

With just a few minutes of setup, your Device42-Jira integration will allow you to link assets between the two systems.


### Prerequisites:

* A running Device42 v18.03.02+ virtual appliance (or newer)! 
* Update [https://device42.com/update](https://device42.com/update/) or [download a free trial](https://device42.com/download/).
* Requires either the JSM Cloud Premium or Enterprise version.

Connectivity to [connect.device42.io](http://connect.device42.io/) and access to *.atlassian.net are also required for setup.


1. Main Appliance must be able to reach [connect.device42.io](http://connect.device42.io/) and *.[atlassian.net](http://atlassian.net/)
2. An Atlassian user account and API Token will be required for authentication.


#### Setting up Device42

We’ll start by preparing Device42 for cloud service integrations. Navigate to Tools > Integrations > Cloud Services, and complete the following fields:

* D42 URL for SaaS apps (the hostname your Device42 instance is accessible on)
* Company Name
* Email

![Device42 Cloud Services](/assets/images/jsm-solution-guide/image67.png)


Next we’ll set up a Jira integration. Navigate to Tools > Integrations > External Integrations and add a new external integration. Set the URL as the hostname for your Jira Cloud instance, like this:



![Device42 external integrations](/assets/images/jsm-solution-guide/image66.png)




#### Installing the Device42 Jira App

The next step is to configure Jira.

**Note that the instructions below assume you are using a Jira Cloud team-managed project.**

First, on the Atlassian Marketplace, install the [Device42 for Jira Service Management](https://marketplace.atlassian.com/apps/1218369/device42-for-jira-service-management) app.

After installing the app to your Jira account, configure it from Apps > Manage Your Apps > Device42 Jira Service Management > Configure.



![Jira app configuration](/assets/images/jsm-solution-guide/image70.png)


You’ll need your verification token from Device42. To find it, return to Device42 and select Tools > Integrations > External Integrations.



![Verification token](/assets/images/jsm-solution-guide/image69.png)


Once you’ve entered your verification token in the Jira configuration and saved the settings, the Device42 account status should show as “Linked”:





![Jira Device42 account linked](/assets/images/jsm-solution-guide/image72.png)




#### Configuring Jira Issue Type Fields

Now, we need to configure the Jira fields to use the data in Device42.

In Jira, go to Projects > Project Settings > Issue Type and add the “External asset platform” field type to the issue types your use case requires.


![Field configuration](/assets/images/jsm-solution-guide/image71.png)



#### Linking Device42 Records from Jira

Now we can link Jira records to Device42 records.

From any issue type that is configured with the “External asset platform” field, select the “Link Asset” function:


![Link asset](/assets/images/jsm-solution-guide/image74.png)


Once a record is linked, it will be present on the Jira record. Selecting it will display its associated information present in Device42:


![Jira Device42 linked record](/assets/images/jsm-solution-guide/image73.png)


![Jira Device42 linked record details](/assets/images/jsm-solution-guide/image78.png)


Finally, back in Device42, the linked Jira record will be displayed at the bottom of the corresponding Device42 record:


![Linked issue](/assets/images/jsm-solution-guide/image75.png)


#### Linking Jira Records from Device42

Alternatively, it’s possible to link to or create a Jira issue from within Device42. To do this, go to the Jira section of the record in Device42 and select either “Add Jira Issue” or “Link to Jira issue.”


![Linking from device42](/assets/images/jsm-solution-guide/image77.png)


#### Customizing Syncing D42 Record Types with Jira

It’s important to note that, by default, only a subset of Device42 information is synchronized with Jira. This is controlled by a DOQL query and is customizable. You can change the DOQL queries in your Jira integration settings in Device42 at Tools > Integrations > External Integrations:


![DOQL query](/assets/images/jsm-solution-guide/image79.png)



The `D42_Jira_Cloud_Sync_Devices` query is the default. Additional predefined queries can be selected or you can write a custom query to have more control over what is synchronized with Jira.


### More Information

The full documentation for integrating Jira with Device42 can be found in our [Jira Service Desk and Jira Cloud Integration pages](https://docs.device42.com/external-integrations/device42-jira-cloud-integration/)


### Jira Service Management Integration

In addition to integrating with regular Jira issues, Device42 can also be integrated with Jira Service Management directly through the [Device42 for Jira Service Management Assets integration](https://d42example.atlassian.net/jira/marketplace/discover/app/com.device42.insight-cloud-synchronization?installDialogOpen=true&source=mpac). See the Jira Marketplace page for details on configuration.

## Working with your Device42 Data on the Jira Service Management Cloud

In order to create a data import on the "Device42 for Service Management Assets" app, we need to create an object schema first. 

### Generate an External Token for an Object Schema

Creating a new object schema requires a generated token for the schema on the **Assets** tab (formerly Insight). Follow these steps to obtain the token:
   
1. Go to the **Assets** plugin. Click on the "+" button to open the "Create object schema" modal    window. Give the schema a name, and press "Create".

![](/assets/images/jsm-solution-guide/image56.png)

2. On the schema you just created, click on the three drops (ellipsis) and click on **Configure.**

![](/assets/images/jsm-solution-guide/image11.png)

3. Click on the **Import** tab.

![](/assets/images/jsm-solution-guide/image64.png)

4. Click on **_Create Import_** and create a new **External Import**.

5. Click the **_ellipsis (...)_** and select **_Generate new token_.**

![](/assets/images/jsm-solution-guide/image7.jpg)

The token will be generated. Note that the token will only appears once so save it to a password manager.

![](/assets/images/jsm-solution-guide/image8.png)

### Add a New Import

Now that you have created the external import token you can add a new import. We work within the **Synchronization** tab to add and configure object schema. 

Initially, the only button that will appear in the **Synchronization** tab will be **_Add Import,_** as shown in the image.

![Add import](/assets/images/jsm-solution-guide/image52.png)

Click on the **_Add Import _** button for the **New Object Schema Import** form to appear.

![Object schema](/assets/images/jsm-solution-guide/image49.jpg)

Fill in the required fields as follows: 

1. **Object schema.** This field is required to create the new object schema import. The field shows all object schemes on Insight.
2. **External Import Token.** This field is required to create the new object schema import _(See section, Generate token for Schema on Insight.)_
3. **Cron (UTC).** This field is required to create the new object schema import and is used to automatically launch the synchronization process.
   ![Schedule](/assets/images/jsm-solution-guide/image80.jpg)

    a. **Hourly.** You have the option of choosing discovery to run between every hour(s) and a specific time to execute the cron job.

    b. **Daily.** You can choose either every day(s) of the month or every weekday (MONDAY - FRIDAY) in a specific hour to execute the cron job.

    c. **Weekly.** You can choose between any day(s) of the week and a specific hour to execute the cron job.

    d. **Monthly.** You can choose among the day specific of the month, the last day of every month, the last weekday of every month, and the day(s) before the end of the month in an hour specific to execute the cron job.

4. **Create with default schema.** This field is optional. If this field is checked, it automatically creates default object types, and attributes in Assets (formerly Insight) needed to sync with Device42.

This is an example of an import created with default schema option.

![](/assets/images/jsm-solution-guide/image82.png)

This is an example of an import without the default schema option selected.

![](/assets/images/jsm-solution-guide/image81.png)
   
5. **Save.** When you have completed all fields, click on the **_Save_** button.

The finished register shows the next object schema import list. All schema import registers are grouped by the schedule.

### View the Synchronization Status

If you have a new object schema import, click on the **Sync** button to fetch your Device42 data as it's unlikely that the automated data sync has run. 

To view the sync status of the object schema import, click the link **Sync** status button.

![](/assets/images/jsm-solution-guide/image35.png)

The **Sync Status** window will appear with information about the current synchronization state along with additional details.

There are four possible synchronization states:

**Launched.** This state is when the synchronization has started, but the information to synchronize is not yet obtained.

**In Progress.** This state is when the synchronization has started to get information from Device42 to be processed and registered/updated in Assets (formerly Insight).

**Done.** This state is when the synchronization has finished and no problems were encountered.

**Failed.** This state is when the synchronization has finished, but there are some problems. In this scenario, we have the option to download the log errors.
![](/assets/images/jsm-solution-guide/image30.png)

The **Sync Status** window also contains the following details:

![](/assets/images/jsm-solution-guide/image53.jpg)

1. **Created.** The date and time that the sync was created. 
2. **Identifier.** The synchronization identifier.
3. **Type.** The type of execution.
    * Manual is the execution of the cron job when you select the Sync button.
    * Automatic is the process when a cron job is executed according to the schedule.
4. **Processed.** The count of items that were synced with Assets (formerly Insight).
5. **Started.** The date and time that the sync started.
6. **Ended.** The date and time that the sync ended.
7. **Execution time.** The time it takes to finish the synchronization.
![](/assets/images/jsm-solution-guide/image58.jpg)

### How To Edit a Object Schema Import

To be able to edit an object schema import, click the **_Edit_** button. The **Object schema import** form will display.

![](/assets/images/jsm-solution-guide/image76.png)

Complete the following steps to edit the **Object schema import** form.

![](/assets/images/jsm-solution-guide/image57.jpg)

1. **External Import Token.** This field is required to create the new object schema import. The token generated by the schema on Assets (formerly Insight) should be included in this field.
2. **Cron (UTC).** This field is required to create the new object schema import. This field is a user interface to generate a cron expression, which is a string consisting of subexpressions that describe individual details of the schedule. This schedule is when the sync between Device42 and Insight will run in UTC timezone. The user interface for this field has four tabs: Hourly, Daily, Weekly, and Monthly.

   The user interface for this field has four tabs: Hourly, Daily, Weekly, and Monthly.

   a. **Hourly.** You can choose between every hour(s) and a specific time to execute the cron job.

   b. **Daily.** You can choose between every day(s) of the month and every weekday (MONDAY - FRIDAY) in a specific hour to execute the cron job.

   c. **Weekly.** You can choose between any day(s) of the week in a specific hour to execute the cron job. 
   
   d. **Monthly.** Choose among a specific day of the month, the last day of every month, the last weekday of every month, and the day(s) before the end of the month in a specific hour to execute the cron job.
   
3. **Save.** When you have completed the form, click on the **_Save_** button to save the information.

![](/assets/images/jsm-solution-guide/image51.jpg)

### Delete An Object Schema Import

The **Object schema import** window will appear. To delete an object schema import, click the **_Delete _** button.

![](/assets/images/jsm-solution-guide/image26.png)

A confirmation window will appear, verifying that the object schema import has been deleted.

![](/assets/images/jsm-solution-guide/image5.png)

![](/assets/images/jsm-solution-guide/image59.png)


### 1.6. Add A New Object to Sync

Select the **_Add object to sync_** button. Complete the form for the new object to sync.

![](/assets/images/jsm-solution-guide/image60.png)

Complete the following steps to add a new object to sync.

1. **DOQL.** This field is required to create the new object. The field supports DOQL syntax for complex queries, and it is also the DOQL name of the query stored in Device42. ([https://docs.device42.com/device42-doql/](https://docs.device42.com/device42-doql/)).
2. **Object Type Name**. This field is required to create the new object type. The field shows all object types for the object schema.
   
   a. In the scenario that we want to create a new object in Insight, we will have to click on the following **_Object type_** icon.
   ![](/assets/images/jsm-solution-guide/image48.png)

   b. With this option, the form has two new fields for the object type name and icon.

   ![](/assets/images/jsm-solution-guide/image61.png)


3. **Save.** Select the **Save button** to save the information.

![alt_text](/assets/images/jsm-solution-guide/image12.jpg)


The finished register shows the next objects list.

![](/assets/images/jsm-solution-guide/image13.png)


### 1.7. Edit DOQL of Object to Sync

To edit an object DOQL, click the button **_Edit DOQL_**. The form for editing the information for the object will appear. Complete the following steps to edit a DOQL object.

![](/assets/images/jsm-solution-guide/image47.jpg)

1. **DOQL.** This text field is required to create the new object. The field supports DOQL syntax for complex queries, and it is also the DOQL name of the query stored in Device42. [https://docs.device42.com/device42doql/](https://docs.device42.com/device42)
![](/assets/images/jsm-solution-guide/image68.jpg)

2. **Save.** When all the form fields are complete, click the **_Save_** button to save the information.


### 1.8. Disable An Object to Sync

To disable an object, click the **_Disable_** button. The state of the object will change to Disabled.

![](/assets/images/jsm-solution-guide/image63.jpg)

Once selected, the object will be displayed as follows.

![](/assets/images/jsm-solution-guide/image50.png)

### 1.9. Delete An Object from the Sync

To delete an object from the sync, click the **_Delete_** button. The window for deleting the object will appear.

![](/assets/images/jsm-solution-guide/image54.jpg)

After you have selected the **_Delete_** button, the confirmation window will appear to confirm the deletion of the object.

![](/assets/images/jsm-solution-guide/image32.png)

![](/assets/images/jsm-solution-guide/image16.jpg)

### 1.10. Create a Field

When you click the object to sync, showing a table with all fields registered; in the first row exists some inputs for creating the new field.


![](/assets/images/jsm-solution-guide/image46.png)


![](/assets/images/jsm-solution-guide/image17.jpg)


1. **ID.** This field is required as the first field that we register for the selected object. The field is a checkbox indicating the ID of the selected object. There will only be one ID for the object.
2. **Device42 attribute.** This field is a required field. The input indicates the name of the field for Device42, this name must be the name of the attribute that must exist in the DOQL query
3. **Insight attribute**. This field is required. The field is a dropdown indicating the Insight registered field.
4. **Object attribute mapping.** This field is required whenever the Insight attribute has a reference object type. The drop-down field indicates the attributes of the object with which it will be related.
5. **Query DOQL.** This field is required when the Insight attribute has an unlimited reference. The field corresponds to a DOQL query or a Saved DOQL. **Example:** selectbusinessapplication_fk,device_fkfrom iew_businessapplicationelement_v1

**Important:** The field ID that you set in the mapping must be in the DOQL.

6. **Internal filter.**This field is required when the Insight attribute has an unlimited reference, the field allows filtering the DOQL results and supports simple conditions **Example:** businessaplication_fk = ${businessaplication_pk}

**Important:** ${businessaplication_pk} will be replaced with each value of the main DOQL query retrieved.

![](/assets/images/jsm-solution-guide/image14.png)

### 1.11. Remove a Field

To delete a field, select the **_Remove_** button. This action will delete the row from the table. Keep in mind that there will always have to be a field as ID.

![alt_text](/assets/images/jsm-solution-guide/image18.jpg)

![alt_text](/assets/images/jsm-solution-guide/image1.jpg)

### 2.0 Settings Tab

The **_Settings_** tab is used to configure access to Device42. Complete the following steps with the appropriate information.


1. **Device42 Cloud Connector**
2. **Device42 Verification Token**
   ![](/assets/images/jsm-solution-guide/image62.png)

3. Select the **_Save_** button to save the information.
   ![](/assets/images/jsm-solution-guide/image38.png)

### 2.1 States for Device42 Configuration


Possible status for the settings:

* Connection enabled.
* Connection not enabled.
* Credentials do not exist.
* Error in verifying Device42 account.
* Request URL not found.
* An error occurred on Device42.

![](/assets/images/jsm-solution-guide/image2.jpg)


### 3.0 Security Tab

The **Security** tab configures access to the application.

![](/assets/images/jsm-solution-guide/image3.jpg)

To configure security access, follow the steps below.

1. **Administrator role.** This field is required and is multi-dropdown with all existing roles in Jira; those users with these roles selected will be able to manage the object schema configurations.
2. **User role.** This field is required and is multi-dropdown with all existing roles in Jira. Users with these roles selected will only be able to view the object schema configurations and perform manual syncs.
3. **Save.** Select the **_Save_** button to save the choices.

![](/assets/images/jsm-solution-guide/image4.png)


## Custom Examples

### Example #1: Adding an additional attribute to an object type in the default object schema

#### **Use Case**

We’re likely to get requests from users to add X property to Y object type. For example, maybe they are using device custom fields in Device42 that are getting pulled in from a VMware or Cloud discovery job and they want to include that data in the object schema import or maybe there is some specific field we aren’t syncing OOTB that they would like to include. 

Now, while the below procedure covers the specific process that a user could take to add a Device Custom Field to the default object schema import in the integration, it is important to note that this same process could be applied to virtually any field/column/data point within Device42 with a one-one cardinality to the desired object type; **meaning**: this is a perfect way to add custom fields or include additional properties that we may not include in the out of the box schema. 

It can even be used to do nifty things like create additional URL fields/quick linkbacks to pages within Device42. For example, you could include an attribute called ‘D42 Software URL’ that acts as a quick link to a filtered list of all software on the device by adding a column like format('%s/admin/core/software_in_use/?advanced=device_id=%s', {d42_url}, d.device_pk) as d42_software_url to the query. 

This specific example will cover modifying the Device import to include a device custom field called ‘Application Owner’. 


#### Assumptions

1. The default object schema in the integration was used. 
2. A device custom field exists of type text – Note: We are using one called ‘Application Owner’ in our example and we have assigned values to it on a few devices.

#### Procedure


1. Identify the custom field of choice (take note of the name as we will need to reference it in a few places)
2. Add a new attribute to the Device object type

   a. From within Assets, select your object schema -> Device -> Attributes. You’ll see the list of all the attributes like in the screenshot below. 
   
   ![](/assets/images/jsm-solution-guide/image9.png)

   b. Scroll to the bottom and you will see a toolbar for adding a new attribute.

   ![](/assets/images/jsm-solution-guide/image10.png)

   c. Fill out the Name and Description fields and choose Default / Text as the Type / Type Value. 

   d. Click the Add button when you’re ready to commit the attribute to the schema. 


- Next, we will switch over to our Device42 MA and navigate to Tools -> Saved DOQL Queries. Search for ‘D42_Insight_Cloud_Sync_Devices’ and note that this is the System Defined Query, meaning we cannot edit this query but we can clone it. 

- Click on the query name and click Clone DOQL Query. 

   ![](/assets/images/jsm-solution-guide/image34.png)

- Give the query a unique name: In our example, we will call it ‘CF_D42_Insight_Cloud_Sync_Devices’

- Click into the DOQL query textbox and hit ctrl + a ctrl + c and copy it to a text editor

- In order for us to include our device custom field we need to modify the query slightly, specifically we need to add a left join to view_device_custom_fields_flat_v2 and add the desired column (our custom field) to the body of the select statement. 

- To keep this document concise/legible, the full query isn’t included but below are the modifications that need to be made

- Copy: left outer join view_device_custom_fields_flat_v2 dcf ON d.device_pk = dcf.device_fk and paste it directly after the line from view_device_v2 d

- Copy: dcf."Application Owner" AS application_owner and paste it directly above the line from view_device_v2 d (remember to add a comma after the previous column or you will get a syntax error when trying to save the DOQL query)
 
- At this point you can copy/paste the query back into the Saved DOQL Query in Device42 and hit save. Note: It won’t let you save invalid SQL and you can hit the Test SQL button as well to ensure the query is syntactically valid. 

- Next we will switch back over to JSM, navigate to Apps -> Device42 Insight Connect

   a. Expand the Device object import and click on the Edit DOQL button

   ![](/assets/images/jsm-solution-guide/image36.png)

   b. You should see that it says ‘D42_Insight_Cloud_Sync_Devices’ – That is the name of the default saved doql query that we cloned earlier. 

   ![](/assets/images/jsm-solution-guide/image37.png)

   c. We’re going to change this to the name of the new Saved DOQL Query we just created. If you’re following along, we called ours ‘CF_D42_Insight_Cloud_Sync_Devices’. So go ahead and change the name to that and hit save to update the query.

- The very last thing we need to do now before we can run the sync is to add our attribute to the import. 

   a. You will see a dropdown box in the top row that you can click to search for the Insight attribute that we defined earlier

   ![](/assets/images/jsm-solution-guide/image39.png)


   b. In the Device42 Attribute text box, enter the same name that was used for the column name/alias in the query, in our example that is application_owner

   ![](/assets/images/jsm-solution-guide/image40.png)


   c.Click the Add button when you are ready to commit the attribute to the import. You should see a message that says ‘The field was successfully registered’. 

- At this point we are done and can run the sync (scroll back up and click on Sync) – you should see a message that says ‘Sync task was launched successfully’

   a. Check the status of the sync by clicking on Sync status

   b. Once the sync completes, navigate back to the object schema in Assets and search for a device that would have a value for the specified custom field. 

   c. We can see our new attribute ‘Application Owner’ has been added and the value from the custom field in D42

   ![](/assets/images/jsm-solution-guide/image41.png)

   d. We can also see the specific date/time when a value for that field was added to our object in Assets

   ![alt_text](/assets/images/jsm-solution-guide/image42.png)


### Example #2: Adding an additional object type to the default schema


#### Use Case

We’re likely to get requests from users to add additional objects and attributes into Assets with the Device42 JSM Assets integration. For example: Device42 discovers installed Software and Certificates that exist on a device. These are 2 objects that are NOT created as part of the out-of-the-box default schema with the integration. However, following the guided steps below, this can be accomplished within the integration to enrich and automate the data that exists within JSM Assets. Now, while the below procedure covers the specific process that a user could take to add installed Software on a device, it is important to note that this same process could be applied to virtually any configuration item/object and attribute that exists within Device42. 


#### Assumptions


1. The default object schema in the integration was used. 
2. A device has been discovered in Device42 with installed Software (Software in Use) records.


#### Procedure


1. Add a new object type in JSM Assets and call it Software In Use or your name of choice. Select Create when completed.

![](/assets/images/jsm-solution-guide/image43.png)

2. Now you will want to add attributes to this Software In Use object type.

   ![](/assets/images/jsm-solution-guide/image44.png)

   a. From within Assets, select your object schema -> Software In Use -> Attributes. 

   b. You will now want to create a list of attributes that will appear for your Software In Use object. Use the toolbar for adding a new attribute

   ![](/assets/images/jsm-solution-guide/image45.png)

   c. Use the view above or table below to add the: Name, description, Type and Type Value for each of the attributes. You will need to select Add to commit the attribute to the Object schema. **Note:** For the last attribute, Device, the Type needs to be set to Object the Type Value is going to be Device with an Additional Value set to Reference. This is what will relate Software in Use (Installed Software) to the Device object in JSM Assets. When configuring the reference, keep the Cardinality to 1 as the Software in Use record can only have 1 device related to it.

| Name         | Description                              | Type    | Type Value | Additional Value   |
|--------------|------------------------------------------|---------|------------|--------------------|
| Key          |                                          | Default | Text       |                    |
| Name         | Name for Software in Use                 | Default | Text       |                    |
| Created      |                                          | Default | DateTime   |                    |
| Updated      |                                          | Default | DateTime   |                    |
| D42 ID       | Primary Key for Software in Use          | Default | Integer    |                    |
| D42 URL      | Device42 URL for Software in Use         | Default | URL        | URL PING DISABLED  |
| Version      | The version of the installed software package | Default | Text       |                    |
| First Detected | First detected date for installed software package | Default | Date       |                    |
| Last Updated | Last updated date for installed software package | Default | Date       |                    |
| Device       | Device for Software in Use record        | Object  | Device     | Reference          |




Configurations on to the Device42 side:


   - Next, we will switch over to our Device42 Main Appliance and navigate to Tools ->Integrations -> Saved DOQL Queries. You’ll notice there are a number of System Defined queries that you can leverage or even clone by selecting the query and then selecting ‘Clone DOQL Query’. 

   - For this example, we are going to create a new query so select ‘Add Saved DOQL Query’ in the top right.

   - Now type a Name for the query, we used ‘Insight_Cloud_Sync_Software_In_Use_V2’ and paste the following query in the DOQL Query section:

   ```
   SELECT
      s.name
      ,siu.version
      ,siu.device_fk
      ,siu.software_fk
      ,siu.softwareinuse_pk
      ,siu.first_detected
      ,siu.last_updated
      ,format('%s/admin/rackraj/software_detail/%s/', {d42_url}, siu.softwareinuse_pk) as d42_item_url
   FROM view_softwareinuse_v1 siu
   JOIN view_software_v1 s ON siu.software_fk = s.software_pk
   WHERE siu.last_updated >= NOW() - INTERVAL '1 DAY'
   ```

   - You can select ‘Test’ to validate it is correct and then Save it and you should see the following:
   ![](/assets/images/jsm-solution-guide/image33.png)

   **Note:** In this example, we are looking at any software that was updated now until the last 1 day, to look for software on devices where we are currently running daily discoveries on. 


Back to JSM Assets side:

   - Next we will switch back over to JSM Assets, navigate to Apps -> Device42 Insight Connect

   - Select ‘Add object to sync’ so we can sync the Software In Use or Installed Software from Device42


   ![](/assets/images/jsm-solution-guide/image19.png)


   - Now enter the name of the Saved DOQL Query that you saved in step 3 in the box ‘DOQL’ and then select the new object type you’ve created in JSM Assets called ‘Software in Use’

   ![](/assets/images/jsm-solution-guide/image20.png)


   - Next you will want to enter each of the Device42 attributes and then select the Insight attribute you want that value to map to. Select ‘Add’ when you are ready to commit each attribute to the import. 

   * You can obtain the name of the Device42 attributes from the name of the columns you’ve indicated in your query saved in Device42. 

   ![alt_text](/assets/images/jsm-solution-guide/image21.png)


   * **Note:** When you add the first attribute, you will have to check the ‘Id’ box next to it so it can register the attribute or you will see the following error:

   ![](/assets/images/jsm-solution-guide/image22.png)


   * Once you are have entered in all the attributes, you should see something like the below:

   ![](/assets/images/jsm-solution-guide/image23.png)


   * **Note:** For the very last attribute titled device_fk, this will map to the Device attribute in Insight and it is also the only mapping that will require you to enter a value for the Object attribute mapping. Please select the ‘D42 ID’. This is what will link the Software In Use to the Device. 


   - At this point we are done and can run the sync (scroll back up and click on Sync) – you should see a message that says ‘Sync task was launched successfully’


   - Check the status of the sync by clicking on Sync status

   - Once the sync completes, navigate back to the object schema in Assets and you should start to see values populating for Software In Use. 

   - If you look at a device that should have Software on it, you should now see an Inbound Reference to the Software In Use for that device.

   ![](/assets/images/jsm-solution-guide/image24.png)



## Connect Device42 to Jira Service Management. (1)


#### Feature-packed integration with Jira

Connecting tickets to the assets they relate to is a logical step, and with the combination of Device42 + Jira, you have the capability to achieve precisely that, along with a plethora of other functionalities.

Quickly browse to a CI in Device42, and create or attach Jira Service Management tickets.


![](/assets/images/jsm-solution-guide/image25.png)



#### Create New Jira tickets from Device42

See attached Jira Service Management Cloud issues from Device42 CIs, and create new ones with a click from the Device42 UI.

New tickets are linked and immediately viewable in Jira Service Management.

![](/assets/images/jsm-solution-guide/image27.png)



#### View Device42 CI details from Jira Tickets

Once the Device42 CMDB Add-on is installed, users can see details from Device42 for that CI in Jira Service Management.

Click the device name hyperlink to immediately view full CI details in Device42.


![alt_text](/assets/images/jsm-solution-guide/image28.png)



## Conclusion

Bring the benefits of an Enterprise CMDB to Jira Service Management! Integrate your existing Device42 CMDB instance with Jira Service Management for top-notch Asset Management and enjoy a wealth of other features that improve your ITSM:



* Business leaders can report on customers, inventories, finances, change management, and more.
* IT teams can track assets like servers, computers, phones, accessories, and related tickets, etc. with synced CIs
* Enjoy the ultimate maintenance planning toolkit with Affinity Groups & Cloud Recommendation Engine
* Write your own DOQL queries or modify the included "saved" queries to control exactly what Asset (CI) data you want synced to Jira Service Management


#### Additional details

Video: [How to Set Up Jira Service Management Assets Integration with Device42.](https://device42.wistia.com/medias/b087w5fps8) 

[Device42 Jira Service Management Assets Integration on Atlassian Marketplace](https://marketplace.atlassian.com/apps/1218369/device42-for-jira-service-management?hosting=cloud&tab=overview)

[Troubleshoot email notifications in Jira Service Management (JSM) ](https://confluence.atlassian.com/jirakb/troubleshoot-customer-notifications-in-jira-service-management-projects-777026983.html)

[https://device42.com/update/,](https://device42.com/update/,) or download a free trial @ device42.com/download/.

Bring the benefits of an Enterprise CMDB to Jira Service Management! Integrate your existing Device42 CMDB instance with Jira Service Management for top-notch Asset Management and enjoy a wealth of other features that improve your ITSM:

Business leaders can report on customers, inventories, finances, change management, and more.

IT teams can track assets like servers, computers, phones, accessories, and related tickets etc. with synced CIs

Enjoy the ultimate maintenance planning toolkit with Affinity Groups & Cloud Recommendation Engine

Write your own DOQL queries or modify the included "saved" queries to control exactly what Asset (CI) data you want synced to Jira Service Management


https://marketplace.atlassian.com/apps/1218369/device42-for-jira-service-management?tab=overview&hosting=cloud
