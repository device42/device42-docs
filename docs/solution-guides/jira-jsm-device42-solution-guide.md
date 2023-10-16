---
title: Jira Service Management Assets Integration
sidebar_position: 2
---

Jira Service Management Cloud (or JSM Cloud) is a comprehensive service desk solution designed to optimize and elevate IT service management processes in enterprises. It offers a wide range of powerful features and tools aimed at expediting incident resolution, managing changes, and handling service requests, resulting in enhanced customer satisfaction and operational efficiency.

JSM Cloud seamlessly integrates with Device42 using the [Device42 for Jira Service Management app available from the Atlassian Marketplace](https://marketplace.atlassian.com/apps/1218369/device42-for-jira-service-management). The Device42 JSM app efficiently transmits data and augments JSM Cloud capabilities.

If you handle infrastructure assets, operate on a large scale, or have plans for future scalability, integrating Device42 with JSM enables you to manage your team's tasks efficiently and directly associate Jira tickets with the relevant assets controlled through Device42. The Device42-JSM combination brings the benefits of an enterprise configuration management database (CMDB) to Jira Service Management.

Now we’ll show you how easy it is to set up the Device42-JSM integration.

## Integrate Device42 and Jira Service Management

With just a few minutes of setup, your Device42-Jira integration will allow you to link assets between the two systems.

### Prerequisites:

* Administrator privileges to a running Device42 v18.03.02 or newer virtual appliance. [Update your software](https://device42.com/update/) or [download a free trial](https://device42.com/download/).
* Administrator privileges to a JSM Cloud Premium or Enterprise plan.

### Setting Up Device42

We’ll start by preparing Device42 for cloud service integrations. Navigate to **Tools > Integrations > Cloud Services**, and complete the following fields:

* **D42 URL for SaaS apps:** This is the hostname your Device42 instance is accessible on.
* **Company Name:** Your company name.
* **Email:** Your email address.

![Device42 Cloud Services](/assets/images/jsm-solution-guide/image67.png)

Next we’ll set up a Jira integration. Navigate to **Tools > Integrations > External Integrations** and add a new external integration. Set the URL as the hostname for your Jira Cloud instance, like this:

![Device42 external integrations](/assets/images/jsm-solution-guide/image66.png)

### Installing the Device42 JSM App

The next step is to configure Jira.

**Note that the instructions below assume you are using a JSM Cloud team-managed project.**

First, on the Atlassian Marketplace, install the [Device42 for Jira Service Management](https://marketplace.atlassian.com/apps/1218369/device42-for-jira-service-management) app.

When the app is installed to your Jira account, configure it from **Apps > Manage Your Apps > Device42 Jira Service Management > Configure**.

![Jira app configuration](/assets/images/jsm-solution-guide/image70.png)

You’ll need your verification token from Device42. To find it, return to Device42 and select **Tools > Integrations > External Integrations**.

![Verification token](/assets/images/jsm-solution-guide/image69.png)

Once you’ve entered your verification token in the Jira configuration and saved the settings, the Device42 account status should show as “Linked”:

![Jira Device42 account linked](/assets/images/jsm-solution-guide/image72.png)

### Configuring Jira Issue Type Fields

Now we need to configure the Jira fields to use the data in Device42.

In Jira, go to **Projects > Project Settings > Issue Type** and add the “External asset platform” field type to the issue types your use case requires.

![Field configuration](/assets/images/jsm-solution-guide/image71.png)

### Linking Device42 Records from Jira

Now we can link Jira records to Device42 records.

From any issue type that is configured with the “External asset platform” field, select the **+ Link Asset** function:

![Link asset](/assets/images/jsm-solution-guide/image74.png)

Once a record is linked, it will be present on the Jira record. Selecting it will display its associated information present in Device42:

![Jira Device42 linked record](/assets/images/jsm-solution-guide/image73.png)

![Jira Device42 linked record details](/assets/images/jsm-solution-guide/image78.png)

Click **View in Device42** to view the full details of the record in Device42.

![alt_text](/assets/images/jsm-solution-guide/image28.png)

Finally, back in Device42, the linked Jira record will be displayed at the bottom of the corresponding Device42 record:

![Linked issue](/assets/images/jsm-solution-guide/image75.png)

### Linking Jira Records from Device42

You can also browse to a configuration item in Device42 and create or attach Jira tickets there.

Go to the **Jira** section of the record in Device42 and select either **+ Add Jira Issue** or **+ Link to Jira issue**.

![Linking from device42](/assets/images/jsm-solution-guide/image77.png)

New tickets are linked and immediately viewable in JSM.

![](/assets/images/jsm-solution-guide/image27.png)

### Customizing Syncing Device42 Record Types with Jira

It’s important to note that, by default, only a subset of Device42 information is synchronized with Jira. This is controlled by a DOQL query and is customizable. You can change the DOQL queries in your Jira integration settings in **Device42 at Tools > Integrations > External Integrations**:

![DOQL query](/assets/images/jsm-solution-guide/image79.png)

The `D42_Jira_Cloud_Sync_Devices` query is the default. Additional predefined queries can be selected or you can write a custom query to have more control over what is synchronized with Jira.

### More Information

The full documentation for integrating Jira with Device42 can be found in our [Jira Service Desk and Jira Cloud Integration pages](https://docs.device42.com/external-integrations/device42-jira-cloud-integration/).

### Jira Service Management Integration

In addition to integrating with regular Jira issues, Device42 can also be integrated with Jira Service Management directly through the [Device42 for Jira Service Management Assets integration](https://d42example.atlassian.net/jira/marketplace/discover/app/com.device42.insight-cloud-synchronization?installDialogOpen=true&source=mpac). See the Jira Marketplace page for details on configuration.

## Working With Device42 Data on the JSM Cloud: The Sync Tab

In the Device42 Jira app, add and edit Device42 data in the **Sync tab**.

The Device42 Jira app synchronizes data from your main Device42 instance using an object schema. You will need a Jira external import token to import an object schema to the app.

Once you have created an object schema and synced Device42 data in the app, you can edit the object schema to add or remove objects for import and customize asset fields.

Let's begin by creating an object schema and generating the external token.

### Create an Object Schema and Generate an External Import Token in Jira

In Jira, navigate to the **Assets** tab (formerly **Insight**) and follow these steps:
   
1. Click on the **+** button to open the "Create object schema" modal window. 

2. Give the schema a name and click **Create**.

![](/assets/images/jsm-solution-guide/image56.png)

3. Click the three dots (ellipsis) next to the schema you created and select **Configure**.

![](/assets/images/jsm-solution-guide/image11.png)

4. Click on the **Import** tab.

![](/assets/images/jsm-solution-guide/image64.png)

5. Click on **Create Import** and create a new **External Import**.

6. Click the ellipsis menu symbol **...** and select **Generate new token**.

![](/assets/images/jsm-solution-guide/image7.jpg)

The token you generate will only appear once, so save it to a password manager.

![](/assets/images/jsm-solution-guide/image8.png)

### Add a New Object Schema Import

Now you can use the external import token from Jira to add and configure the object schema in the app.

Navigate to the **Sync tab**. Initially, only an **Add Import** button is displayed in this view.

![Add import](/assets/images/jsm-solution-guide/image52.png)

1. Click on the **Add Import** button to open the **New Object Schema Import** form.

![Object schema](/assets/images/jsm-solution-guide/image49.jpg)

2. Complete in the required fields: 

* **Object schema** (Required) This field is prepopulated with the object schema available in Jira **Assets**. Select the object schema you created.
* **External Import Token** (Required) Copy the external import token generated in the previous section into this field.
* **Cron (UTC)** (Required) In this field, you configure a cron job to sync Device42 and Jira according to a schedule in Coordinated Universal Time (UTC). Select **Hourly**, **Daily**, **Weekly**, or **Monthly** from the tabs. If you opt to sync monthly, you can specify the day and hour the cron job should run.
* **Create with default schema** (Optional) Check this field if the app should create default object types and attributes in Jira Assets as needed when syncing. The default asset types created are End User, Customer or Department, Building, Business Application, and Device. You can [customize the available fields of enabled asset types](#asset-type-create-a-field).

This is an example of an import created with the default schema option selected.

![Default schema option](/assets/images/jsm-solution-guide/image82.png)

This is an example of an import without the default schema option selected.

![No default schema](/assets/images/jsm-solution-guide/image81.png)
   
3. Click **Save**.

The finished register shows the object schema import list. All schema import registers are grouped by the schedule.

You can easily edit and delete object schema in the app as necessary.

### Fetch Device42 Data

When you have created an object schema import, click the **Sync** button to fetch your Device42 data. After this initial sync, data will be added to your object schema according to the cron job sync schedule you specified. 

### View the Synchronization Status

In the **Object Schema Import** window, click the **Sync status** link to view your Device42 data sync status.

![Sync button](/assets/images/jsm-solution-guide/image35.png)

A **Sync status** window will open containing information about the object schema's current synchronization state along with additional details.

There are four possible synchronization states:

* **Launched** Synchronization has started but no information is available yet.
* **In Progress** Information from Device42 is being processed and registered or updated in **Assets**.
* **Done** Synchronization is complete and no problems were encountered.
* **Failed** Synchronization could not be completed due to one or more errors. If the **Sync status** window shows your sync failed, it will provide a link for you to download the log errors.

![Download logs](/assets/images/jsm-solution-guide/image30.png)

The **Sync status** window also contains the following additional details:

1. **Created** The date and time that the sync was created. 
2. **Identifier** The synchronization identifier.
3. **Type** The type of execution.
    * **Manual** indicates the cron job was executed by pressing the **Sync button**.
    * **Automatic** tells you the cron job was automatically executed according to the schedule.
4. **Processed** The count of items synced to **Assets**.
5. **Started** The date and time that the sync started.
6. **Ended** The date and time that the sync ended.
7. **Execution time** The time taken to complete the synchronization.

![Sync status](/assets/images/jsm-solution-guide/image53.jpg)

### Edit an Object Schema Import

Click the **Edit** button to edit an object schema import.

![](/assets/images/jsm-solution-guide/image76.png)

In the **Object schema import** form that opens, you can edit the following information:

1. **External Import Token** The external import token generated when you created the object schema in **Assets**.
2. **Cron (UTC)** The deployment frequency (in UTC) of the synchronization cron job.

Click the **Save** button to save your changes.

![Edit button](/assets/images/jsm-solution-guide/image57.jpg)

### Delete An Object Schema Import

To delete an object schema import, click the **Delete** button under the **Sync** tab.

![](/assets/images/jsm-solution-guide/image26.png)

A confirmation window will appear, verifying that the object schema import has been deleted.

![](/assets/images/jsm-solution-guide/image5.png)

![](/assets/images/jsm-solution-guide/image59.png)

### Add a New Object to an Object Schema

You can edit an object schema to include a new object to synchronize data from in the app and customize what data is synchronized to the app.

You will need the name of a [Device42 Object Query Language (DOQL)](https://docs.device42.com/device42-doql/) query to complete the object creation form. The created DOQL object can be edited, disabled, and deleted from the object schema import sync.

If you didn't select the **Create with default schema** option when you created a [new object schema import](#add-a-new-object-schema-import), you can add data of selected asset types by adding a new object to sync.

Click the **Add object to sync** button to open the new object sync form.

![](/assets/images/jsm-solution-guide/image60.png)

Complete the two required fields to add a new object to sync.

* **DOQL** Add the DOQL name of the query stored in Device42 here. Read more about DOQL queries in [our docs](https://docs.device42.com/device42-doql/). This field supports DOQL syntax for complex queries, and you can [edit the object DOQL](#edit-the-doql-of-an-object) later if you need to.

* **Object Type Name** Select the object type from the list, or create a new object type by clicking **+ Object type**.

   ![](/assets/images/jsm-solution-guide/image48.png)

   If you're adding a new object type, two further required fields will open for you to complete.

   ![](/assets/images/jsm-solution-guide/image61.png)

When you're done, click the **Save** button to save the information.

![alt_text](/assets/images/jsm-solution-guide/image12.jpg)

### Edit the DOQL of an Object

To edit the DOQL of an object, click the **Edit DOQL** button. 

![](/assets/images/jsm-solution-guide/image47.jpg)

In the DOQL field that opens, add the name of the DOQL query stored in Device42. This field supports [DOQL syntax](https://docs.device42.com/device42) for complex queries.

![](/assets/images/jsm-solution-guide/image68.jpg)

Click the **Save** button to save the DOQL query.

### Disable an Object in the Object Schema

To disable an object, click the **Disable** button. 

![](/assets/images/jsm-solution-guide/image63.jpg)

The state of the object will change to "Disabled" in the objects list.

![](/assets/images/jsm-solution-guide/image50.png)

### Delete an Object from the Object Schema

To delete an object from an object schema, click the **Delete** button. 

![](/assets/images/jsm-solution-guide/image54.jpg)

Confirm the object delete action in the window that appears.

![](/assets/images/jsm-solution-guide/image32.png)

### Asset Type: Create a Field

To create a new field for an enabled asset type, click on the asset type. 

![](/assets/images/jsm-solution-guide/image46.png)

A row of inputs will open for the asset type.

![](/assets/images/jsm-solution-guide/image17.jpg)

Fill in the following required information to create a new field for the given asset type:

1. **ID** This option must be checked to associate the field with the ID of the selected object. There will only be one ID for the object.
2. **Device42 attribute** This field is the name of the field for Device42 and must be the name of the existing attribute in the DOQL query.
3. **Insight attribute** Select the Insight-registered field from the dropdown menu.
4. **Object attribute mapping** This field is required if the Insight attribute has a reference object type. Select the attributes the object will be related to.
5. **Query DOQL** This field is required if the Insight attribute has an unlimited reference. The value corresponds to a DOQL query or a saved DOQL, for example, `selectbusinessapplication_fk`. **Note: The ID you set in the mapping must be in the DOQL.**
6. **Internal filter** This field is required when the Insight attribute has an unlimited reference. You can filter the DOQL results in this field, and it supports simple conditions, for example,  `businessaplication_fk = ${businessaplication_pk}` (note that `${businessaplication_pk}` will be replaced with each value the main DOQL query retrieves).

![](/assets/images/jsm-solution-guide/image14.png)

### Asset Type: Remove a Field

To delete a field from an asset type, click the **Remove** button. 

![alt_text](/assets/images/jsm-solution-guide/image18.jpg)

The field row will be deleted from the table but the ID field will persist.

## Configure Access to Device42: The Settings Tab

To connect to Device42 from the app in the JSM cloud, navigate to the **Settings** tab and complete the two required fields.

1. **Device42 Cloud Connector** Enter URL of the Device42 connector here, for example, `connect.device42.io`.
2. **Device42 Verification Token** To get the verification token from your Device42 instance, follow these steps:
    * In Device42, navigate to **Tools -> Integrations -> External integrations -> Add External integration**.
    * Copy the token.
    * Return to the app and paste the token into the verification token field.

![](/assets/images/jsm-solution-guide/image62.png)

Click the **Save** button and the app will attempt to connect to Device42.

![](/assets/images/jsm-solution-guide/image38.png)

Following the app attempting to connect to Device42, the connection will display one of six states in the **Settings** tab:

* Connection enabled.
* Connection not enabled.
* Credentials do not exist.
* Error in verifying Device42 account.
* Request URL not found.
* An error occurred on Device42.

## Set User Access to the App: The Security Tab

You can configure user access to the application in the **Security** tab.

Follow the steps below to assign roles to users with different permissions.

1. **Administrator role** (Required) This field contains a dropdown list of all the existing roles in Jira. Select those roles that should be given administrative privileges. Users with these roles will be able to manage the object schema configurations.
2. **User role** (Required) This field contains a dropdown list of all the existing roles in Jira. Select those roles that should be given basic user permissions. Users with these roles will be able to view the object schema configurations and perform manual syncs.

![](/assets/images/jsm-solution-guide/image3.jpg)

Click **Save** to save your access settings.

## Workflow Example One: Adding an Additional Attribute to an Object Type in the Default Object Schema

Let’s work through the process of adding a property to an object type. A user might want to include data from custom device fields in Device42 that are getting pulled in from a VMware or Cloud discovery job, into an object schema import. 

This process is a perfect way to add any custom fields and additional properties that aren’t included in the out-of-the-box schema import
 
In this example we’ll modify the device import to include a custom field called ‘Application Owner’. 

### Assumptions

The default object schema in the integration was used. 
A device custom field exists of type text. We are using one called ‘Application Owner’ in our example and have assigned values to it on a few devices.

### Procedure

First, identify the custom field of choice taking note of the name to reference it in a few places.
Now, add a new attribute to the Device object type as follows:

1. From within the **Assets** tab, select **your object schema -> Device -> Attributes**. You’ll see the list of all the attributes, like in the screenshot below:

![](/assets/images/jsm-solution-guide/image9.png)

2. Scroll to the bottom to see a toolbar for adding a new attribute.

![](/assets/images/jsm-solution-guide/image10.png)

3. Fill out the **Name** and **Description** fields and choose “Default” as the Type and “Text” as the Type Value. 

4. Click on the **Add** button when you’re ready to commit the attribute to the schema. 

Next, we will switch over to our Device42 Main Appliance and navigate to **Tools -> Saved DOQL Queries**. Search for `D42_Insight_Cloud_Sync_Devices`. Note that this is the System Defined Query, meaning we cannot edit this query but we can clone it. 

Click on the query name and click the **Clone DOQL Query** button. 

   ![](/assets/images/jsm-solution-guide/image34.png)

2. Give the query a unique name. In our example, we will call it `CF_D42_Insight_Cloud_Sync_Devices`.

3. Click into the DOQL query textbox and select all the contents (ctrl + a), copy them (ctrl + c), and paste (ctrl + v) into a text editor.

To include our device custom field, we need to modify the query slightly. We need to add a left join to `view_device_custom_fields_flat_v2` and add our custom field to the body of the select statement. 

Note that for the sake of brevity, the full query isn’t included, but below are the necessary modifications.

Copy and paste the following directly after the line from `view_device_v2 d`:

```sql
left outer join view_device_custom_fields_flat_v2 dcf ON d.device_pk = dcf.device_fk
```

Copy and paste the following directly above the line from `view_device_v2 d`: 

```sql
dcf."Application Owner" AS application_owner
```

Remember to add a comma after the previous column or you will get a syntax error when trying to save the DOQL query.

At this point, you can copy and paste the query back into the Saved DOQL Query in Device42 and hit save. Note that it won’t let you save invalid SQL. Click on the **Test SQL** button as well to ensure the query is syntactically valid.

Next, we will switch back over to JSM Cloud and navigate to **Apps -> Device42 Insight Connect** and do the following:

1. Expand the Device object import and click on the **Edit DOQL** button.

![](/assets/images/jsm-solution-guide/image36.png)

2. The text area should contain the value of ‘D42_Insight_Cloud_Sync_Devices’, which is the name of the default saved DOQL query that we cloned earlier. 

![](/assets/images/jsm-solution-guide/image37.png)

3. We’re going to change this to the name of the new saved DOQL query we just created that we called `CF_D42_Insight_Cloud_Sync_Devices`. Replace the query name and hit save to update the query.

The very last thing we need to do before we can run the sync is to add our attribute to the import: 

1. You will see a dropdown box in the top row that you can click to search for the Insight attribute that we defined earlier.

![](/assets/images/jsm-solution-guide/image39.png)

2. In the **Device42 attribute** text box, enter `application_owner`. This is the same name that was used for the column name or alias in the query in our example.

![](/assets/images/jsm-solution-guide/image40.png)

3. Click the **Add** button when you are ready to commit the attribute to the import. You should see a message that says “The field was successfully registered”. 

At this point, we are done and can run the sync. Scroll back up and click on the **Sync button**. You should see a message that says “Sync task was launched successfully”. You can check the status of the sync by clicking on **Sync status**.

Once the sync completes, navigate back to the object schema in **Assets** and search for a device that would have a value for the specified custom field. 

1. We can see our new attribute `Application Owner` has been added and the value from the custom field in Device42.

![](/assets/images/jsm-solution-guide/image41.png)

2. We can also see the specific date and time when a value for that field was added to our object in **Assets**.

![alt_text](/assets/images/jsm-solution-guide/image42.png)

While this process covers the steps you can take to add a device custom field to the default object schema import, it’s useful to note that the process applies to any field, column, or data point within Device42.  Data with a one-one relationship cardinality to the desired object is easily added in the JSM integration. 

It can even be used to do nifty things like create additional URL fields or quick linkbacks to pages within Device42. For example, you could include an attribute called ‘D42 Software URL’ that acts as a quick link to a filtered list of all software on the device by adding a column like, `format('%s/admin/core/software_in_use/?advanced=device_id=%s', {d42_url}, d.device_pk)` as `d42_software_url` to the query. 

## Workflow Example Two: Adding an Additional Object Type to the Default Schema

Let’s consider the use case of adding additional objects and attributes into Assets. In this example, let’s  say that Device42 has discovered installed Software and Certificates that exist on a device. However, these two objects are not created as part of the out-of-the-box default schema with the integration. 

Following the guided steps below, we can add the Software and Certificates objects within the JSM integration to enrich and automate the existing Assets data. 

### Assumptions

The default object schema in the integration was used. 
A device has been discovered in Device42 with installed Software (Software in Use) records.

### Procedure

Start by adding a new object type in the **Assets** tab by clicking on the **+** button to the right of the object type list. In this example, we’ll call the new object type “Software In Use”. Click on the **Create** button.

![](/assets/images/jsm-solution-guide/image43.png)

Now we’ll add attributes to the new “Software In Use” object type. From within the **Assets** tab, select **your object schema -> Software In Use -> Attributes**. 

![](/assets/images/jsm-solution-guide/image44.png)

Next, create a list of attributes that will appear for your “Software In Use” object. Use the toolbar at the bottom to add a new attribute.

![](/assets/images/jsm-solution-guide/image45.png)

Add the **Name**, **description**, **Type**, and **Type Value** for each of the attributes. Then click on the **Add** button to commit the attribute to the object schema. 

The last attribute, “Device”, **Type** is set to “Object” and the **Type Value** is “Device” with an **Additional Value** set to “Reference”. These values will relate the “Software in Use” object (the installed software that’s being discovered) to the device object in JSM Assets. When configuring the reference, keep the **Cardinality** as “1” because the “Software in Use” record can only have one device related to it.

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

Next, we will switch over to our Device42 Main Appliance and navigate to **Tools ->Integrations -> Saved DOQL Queries**. You’ll notice there are a number of **System Defined** queries that you could leverage by selecting the query and then clicking on the **Clone DOQL Query** button. 

However, in this example, we are going to create a new query: 
Select the **Add Saved DOQL Query** button at the top right.
Now type in the following query **Name**:  “Insight_Cloud_Sync_Software_In_Use_V2”.
Paste the following query in the **DOQL Query** section:

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

In this example, we are looking at software that we are currently running daily discoveries on that was updated within a `1 DAY` interval. 

Click on the **Test SQL** button to validate that the query is correct and then click on the **Save** button.  You should see a summary of the saved query.

![](/assets/images/jsm-solution-guide/image33.png)

Next, switch back over to the **Sync tab** in our JSM app. Click on the  **Add object to sync** button to sync the “Software In Use” data from Device42.

![](/assets/images/jsm-solution-guide/image19.png)

Now enter the name of the saved DOQL query in the **DOQL** text area and then select the new “Software in Use” object type we’ve created.

![](/assets/images/jsm-solution-guide/image20.png)

Next, obtain the names of the Device42 attributes from the name of the columns you’ve indicated in your query saved in Device42. 

![alt_text](/assets/images/jsm-solution-guide/image21.png)

Enter each of the Device42 attributes and then select the corresponding JSM attribute you want that value to map to. Click on **Add** to commit each attribute to the import. 

When you add the first attribute, you will have to select the “Id” checkbox next to it so it can register the attribute or you will see the following error:

![](/assets/images/jsm-solution-guide/image22.png)

The very last attribute titled “device_fk” will map to the device attribute in Insight and is the only attribute requiring a value for the object attribute mapping. Please select “D42 ID” to link the “Software In Use” object to the device. 

Once you have entered all the attributes, it should look something like this:

![](/assets/images/jsm-solution-guide/image23.png)

At this point, scroll back up and click on the **Sync button**. You should see a message that says “Sync task was launched successfully”. Check on the status of the sync by clicking on the **Sync status** link.

Once the sync completes, navigate back to the object schema in the **Assets tab** and you should start to see values populating for “Software In Use”. 

If you look at a device with software on it, you should now see “Software In Use” for that device in the **Inbound References** section.

![](/assets/images/jsm-solution-guide/image24.png)

While the workflow above includes a specific process that a user could take to add installed Software on a device, this process could be applied to any configuration item, object, or attribute that exists within Device42. 

## Additional Resources

Video: [How to set up Jira Service Management assets integration with Device42](https://device42.wistia.com/medias/b087w5fps8) 

[Device42 for Jira Service Management app on Atlassian Marketplace](https://marketplace.atlassian.com/apps/1218369/device42-for-jira-service-management?hosting=cloud&tab=overview)

[Troubleshoot email notifications in Jira Service Management](https://confluence.atlassian.com/jirakb/troubleshoot-customer-notifications-in-jira-service-management-projects-777026983.html)
